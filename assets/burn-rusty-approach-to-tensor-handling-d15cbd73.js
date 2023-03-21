import{e as Gt,g as e,d as qt,i as n,t,f as s,a as i,F as _,A as jt}from"./entry-client-eeef2f26.js";import{B as Wt,R as c,a as Yt}from"./index-db0825c0.js";import{O as Z,L as Kt}from"./page-991c6ee2.js";import{S as Vt}from"./index-aeb79e79.js";import{P as Jt}from"./prism-python-5cf8424c.js";import{r as Qt}from"./blogs-e7ca3124.js";const Xt=t('<div class="pt-t pb-2 w-full max-w-full"><pre class="border-2 border-gray-900 shadow rounded-lg w-full max-w-full"><code></code></pre></div>',6),u=o=>{Gt(()=>{Jt.highlightAll()});const h=`language-${o.lang}`;return(()=>{const l=e(Xt),d=l.firstChild,r=d.firstChild;return qt(r,h),n(r,()=>o.code),l})()},Zt=t("<div></div>",2),en=t('<div class="py-2 px-6 w-full text-center italic"></div>',2),tn=t('<div class="w-full px-6 pb-8 overflow-auto"><div class="py-2 px-6 w-full text-center font-bold text-xl"></div><table class="w-full"><thead><tr></tr></thead><tbody></tbody></table><!#><!/></div>',14),nn=t('<th class="text-center p-2 border border-[#586473] bg-[#1f2835]"></th>',2),on=t('<tr><td class="text-center p-2 border border-[#586473]"></td><!#><!/></tr>',6),sn=t('<td class="text-center p-2 border border-[#586473]"></td>',2),rn=t('<tr class="border border-[#586473]"></tr>',2),an=t('<td class="w-full p-[6px] bg-[#1f2835] "></td>',2),ee=o=>{let h=e(Zt);o.description&&(h=(()=>{const r=e(en);return n(r,()=>o.description),r})());const l=o.entries.map(r=>r.values?r.values.length:0),d=Math.max(...l);return(()=>{const r=e(tn),m=r.firstChild,f=m.nextSibling,g=f.firstChild,b=g.firstChild,$=g.nextSibling,x=f.nextSibling,[v,k]=s(x.nextSibling);return n(m,()=>o.title),n(b,i(_,{get each(){return o.columnNames},children:a=>(()=>{const w=e(nn);return n(w,a),w})()})),n($,i(_,{get each(){return o.entries},children:a=>ln(a,d)})),n(r,h,v,k),r})()},ln=(o,h)=>o.values?(()=>{const l=e(on),d=l.firstChild,r=d.nextSibling,[m,f]=s(r.nextSibling);return n(d,()=>o.title),n(l,i(_,{get each(){return o.values},children:g=>(()=>{const b=e(sn);return n(b,g),b})()}),m,f),l})():(()=>{const l=e(rn);return n(l,i(_,{get each(){return[...Array(h+1).keys()]},children:()=>e(an)})),l})(),cn=t(`<div><h2>Introduction</h2><p>The latest release of Burn<!#><!/> includes significant changes to its memory management strategy. One of the most notable changes is that tensor-allocated memory can now be reused way more often. This is a big improvement, as every operation was previously implemented using read-only tensor references, which often resulted in unnecessary memory allocations. Overall, these changes significantly reduced memory usage, especially on the CPU compared to PyTorch.</p><p>The new approach motivated a complete rewrite of the auto differentiation engine of Burn, which allows any backend to support backpropagation. The previous implementation relied on object-oriented programming patterns, resulting in excessive indirections and memory allocations. Moreover, the engine was read-only, limiting its ability to free up unused tensors or reuse them when possible during the backward pass . The new implementation addresses these limitations by adopting more efficient rusty patterns, leveraging the updated backend API, and enabling in-place operations.</p><p>This is mostly a technical blog. If you're not that interested in memory management, you can just skip to the <a class="underline" href="#benchmarks">Benchmarks</a> section.</p><h2>In-place Operations</h2><p>How does Burn enable the reuse of tensor-allocated memory? One way is through a pattern similar to copy-on-write<!#><!/>, where data can only be safely written when there is a single reference pointing to it. If there are multiple references, the original data is copied before being written, hence the name copy-on-write. The distinction in how Burn reuses tensor-allocated memory is as follows: instead of copying data when there are multiple references using a tensor, the normal (non in-place) operation is used instead. Here's an example of how the log function is implemented using the tch backend<!#><!/> (bindings to LibTorch).</p><!#><!/><p>In this example, we call the in-place log function when possible, and the normal function otherwise. Note that all functions ending with an underscore are in-place operations with PyTorch/LibTorch<!#><!/>. The unary_ops operation abstracts how the number of references is counted, using Atomic Reference Counting (Arc) provided by the standard library<!#><!/>. This behavior is also available with the alloc crate when working with no_std, which is useful for environments where there is no operating system available<!#><!/>. The non-thread-safe variant, Reference Counting (Rc), also provides the same functionality<!#><!/>. Normally, this pattern should be used with try_unwrap and get_mut functions provided by Arc and Rc, which safely return a mutable or an owned value of the inner type<!#><!/>. However, the PyTorch bindings are not really safe. You can call mutable operations on any tensor handle, even read-only references, by just doing a shallow copy. Hence, we track the memory location of each tensor's storage manually instead.</p><!#><!/><p>This strategy can also be used for binary operations, enabling other kinds of optimizations. In some cases, you may call another LibTorch function depending on the number of references pointing to the input tensors, in order to reuse as much tensor-allocated memory as possible. Here's an example with the lower implementation.</p><!#><!/><p>In this case, when it is safe to mutate the left-hand side (LHS) tensor, we call the in-place operation to reuse its data. However, when there is at least one other reference to that tensor, it is not safe to mutate. In this case, we could still reuse tensor-allocated memory by calling the in-place greater operation on the right-hand side (RHS) tensor instead. This produces the same output but is more efficient. Note that this assumes that boolean tensors and float tensors can reuse the same memory space, which may depend on the float data type.</p><h2>Tensor API</h2><p>Unfortunately, this pattern was previously impossible to integrate with Burn because all operations received references to tensors as arguments and not owned tensors, which doesn't increase the strong reference count.</p><p>To allow backends to use this pattern, the API has been updated to receive owned tensors as parameters, with some nice quality-of-life improvements as well. The consequence is that tensors are cloned exactly the number of times they are reused. This makes it easy for users to optimize their code by removing unnecessary cloning when it's not required. Note that clippy<!#><!/> normally checks for unnecessary cloning, but is not perfect. You might change the order in which you do your operations to reduce the amount of cloning, something that clippy can't check.</p><p>There is no API in Burn to call in-place operations directly on tensors. If the backend supports it, every time it is possible, in-place operations will be used. This is a major quality-of-life improvement, since the places where in-place operations can be used differ between training and inference, but Burn aims to provide the most optimized code for both use cases. Let's reuse the log function as an example.</p><p>During inference, a temporary tensor, which is not a model parameter, is used one time with the log operation, which will reuse the tensor-allocated memory since the tensor was never cloned. However, during training, the backward step of the log function needs the input tensor to calculate its derivative, so the input tensor is cloned during the forward pass. Therefore, the input tensor will be left unchanged during the forward pass, but may be reused during the backward pass.</p><h2>Autodiff</h2><p>The method for calculating gradients with Burn was highly inefficient but offered significant flexibility. After learning from the first implementation, I decided to rewrite it from scratch. Although it seemed like a daunting task at first, I was able to complete it in less than a week without any breaking changes to the API. Burn is designed to allow for this kind of refactoring and continuous improvement of performance and architecture. The primary goal was to reduce unnecessary cloning and memory allocations while simplifying the complex and difficult-to-understand code patterns. Additionally, it was important to make it easy to support new operations of any kind, which presented challenges in terms of flexibility, simplicity, and minimizing repetitive code. To demonstrate this, consider the implementation of the cosine function.</p><!#><!/><p>The cosine function definition is the same as any backend since gradients are calculated using a backend decorator. The implementation uses static dispatch via a zero-sized struct named Cos, which implements the Backward trait. During the backward pass, the derivative with respect to the parent node is calculated using the chain rule of differentiation. The function supports both tracked and untracked operations, with the former requiring cloning of the input tensor for use in the backward pass. However, sometimes operations don't require any state during the backward pass. Let's see how it's done with the scalar addition function.</p><!#><!/><p>Similar to the cosine function, the scalar addition function also supports tracked and untracked operations. However, since scalar addition doesn't require any state during the backward pass, the implementation is simpler, and no match statements are required. </p><h2 id="benchmarks">Benchmarks</h2><p>Even though the last release was focused on structural refactors to allow for more optimizations and control from backend implementations, it's still interesting to see how it compares to other frameworks. So let's compare it to PyTorch for simple use cases.</p><h3>Disclamer</h3><p>It's important to note that Burn doesn't support fused operations, even for popular activation functions like softmax, gelu, and sigmoid. Furthermore, all the derivatives of each primitive operation that are calculated during the backward pass also use primitive operations and are not fused. This lack of operation fusion has a significant impact on real-world performance. As a result, PyTorch is likely to be faster for common models, at least on the GPU, where the impact of operation fusion is more pronounced</p><p>The direction Burn wants to take is probably different from other frameworks. It's kind of sad that writing mathematical operations in a more declarative way is less performant than using a high-level function that uses a highly optimized kernel implementation. It should be possible to detect that such a kernel exists and use them when possible without requiring the code to be changed. This is the kind of developer experience Burn will try to meet: allowing users to write mathematical operations using primitives, and backend developers declaring graphs of operations that can be fused for optimal performance. I would also like to allow users to profile their model, see which functions take the most time, and write operation fusion for those functions using their backend of choice, without the need to fork a framework, rewrite the model, or change the programming language. All of this while still supporting fully dynamic graphs and custom control flow with an eager-like programming model. This is a lot of constraints, so I'll have to think hard about how I can make this happen. If you have any comments, suggestions, or recommendations regarding fused operations, I invite you to join the Discord and come talk to us. Burn's development direction is likely to differ from other frameworks. It's unfortunate that writing mathematical operations in a more declarative way can be less performant than using a high-level function with a highly optimized kernel implementation. Ideally, Burn should be able to detect when such a kernel exists and use it automatically, without requiring any changes to the code. This is the kind of developer experience that Burn aims to provide: enabling users to write mathematical operations using primitives while allowing backend developers to declare graphs of operations that can be fused for optimal performance. Additionally, Burn should allow users to profile their models, identify which functions take the most time, and write optimized kernels for those functions using their preferred backend without the need to fork a framework, rewrite the model, or change programming language. All of this should be achievable while still supporting fully dynamic graphs and custom control flow with an eager-like programming model. However, these are significant constraints, and it will require a lot of thinking and hard work to make this a reality. If you have any comments, suggestions, or recommendations regarding fused operations, we invite you to join our <!#><!/> and share your thoughts.</p><p>Now let get into the benchmarks.</p><h3>Softmax</h3><p>The first benchmark is a custom implementation of the softmax activation function. For numerical stability, we will use an implementation that uses log softmax.</p><!#><!/><p>Now, let’s compare it to the equivalent code in PyTorch.</p><!#><!/><p>The main difference in the code is the extra typing in Burn, which specifies the number of dimensions a tensor has and the backend it runs on. However, we can soften the notation by moving the generic argument declaration into a zero-sized struct, which groups functions that operate on tensors of the same type. The other difference is that we need an explicit clone in the Burn version because the tensor is reused twice. During inference, we expect \`tensor.clone() - tensor.exp()\` to not be executed in-place since they all use the same tensor. However, we expect all other operations to reuse the same memory to avoid unnecessary allocations.</p><p>The tests were performed on my laptop, so they may not be fully reliable, but they are still informative in terms of what kind of performance we can expect.</p><!#><!/><p>An interesting takeaway here is that Burn seems to be much faster during inference on the CPU, while pretty comparable on the GPU. In all cases, it seems to take less memory, with a bigger difference on the CPU. This may be because PyTorch has taken great care of their GPU implementation and may have something similar to a memory pool or other tricks to handle GPU memory more efficiently.</p><p>We also see PyTorch appears to be faster and requires less memory to compute gradients. This could be due to their backward implementation of each tensor operation executing fewer kernels. In the case of Burn, the logarithm backward implementation uses two kernels, and the sum backward allocates a new tensor while using two other kernels. To test that hypothesis, we will have to do another set of benchmarks where we reduce the difference in the number of kernels executed by both frameworks.</p><h3>Multi layer perceptron (MLP)</h3><p>The second set of benchmarks is pretty simple. We are going to compare a simple Multi-layer perceptron implementation using a simple linear layer with the ReLU activation function. Even if the ReLU backward implementation of Burn uses two kernels, the difference is smaller than in the previous experiment, and we should see a smaller difference in execution time when calculating gradients.</p><!#><!/><p>The results are pretty much what I expected, except for the fact that Burn is considerably faster on the GPU when computing gradients. This could be explained by how the ReLU backward is implemented in Burn, which would be faster in that specific use case. However, I would not conclude that Burn is faster in training MLP, and I would be really careful in coming up with conclusions; it might just be an outlier data point.</p><p>For the other data points, we see that Burn and PyTorch are generally similar in execution time, but Burn uses less memory, especially on the CPU. I didn't include the MLP implementation of both frameworks, but you can have a look at it on the <!#><!/>.</p><h2>Conclusion</h2><p>So this is the end of this blog post. I presented how Burn leverages Rust’s ownership tracking to safely reuse tensor-allocated memory when possible. I presented the necessary changes to the tensor API and the autodiff backend to leverage owned tensor to reduce memory usage. Some small benchmarks were made to validate the effectiveness of that strategy, which showed consistent reduced memory usage, especially on the CPU. However, we also saw the necessity of operation fusion to really speed up computation, and it may explain why it’s a major focus of PyTorch 2.0<!#><!/> with their new graph compilation capabilities. The next phase of Burn will be on stabilizing the API, improving the docs, and making the project easier to use overall. After that, it will be crucial to focus on operation fusion and come up with a strategy that respects all the previously mentioned wishes.</p><p>Note that this is not a full report of what has been accomplished since the last release. A lot of work has been done by contributors, and Burn can now be compiled to Web Assembly for inference, which runs natively on browsers on the client side. You can test it yourself with the online <!#><!/>. I want to thank everybody that got involved with the project, I received so much constructive feedback that has or will definitively improve Burn. It's also always interesting to see what kind of project, research, or product Burn can help you with, so don't hesitate to reach out if you find value in what we are building.</p><h2>References</h2><!#><!/></div>`,128),te=t("<div></div>",2),ne=t("<div><div>Inference</div><div>Memory</div></div>",6),ie=t("<div><div>Inference</div><div>Speed</div></div>",6),oe=t("<div><div>Autodiff</div><div>Memory</div></div>",6),se=t("<div><div>Autodiff</div><div>Speed</div></div>",6),hn=t("<span>586 M</span>",2),dn=t("<span>47.39 ms</span>",2),re=t('<span class="font-bold">980 M</span>',2),pn=t('<span class="font-bold">111.8 ms</span>',2),un=t('<span class="font-bold">353 M</span>',2),mn=t('<span class="font-bold">34.25 ms</span>',2),fn=t("<span>1047 M</span>",2),gn=t("<span>146.93 ms</span>",2),bn=t("<span>852 M</span>",2),wn=t('<span class="font-bold">1.474 ms</span>',2),yn=t('<span class="font-bold">4.103 ms</span>',2),_n=t('<span class="font-bold">756 M</span>',2),$n=t("<span>1.479 ms</span>",2),xn=t("<span>1076 M</span>",2),vn=t("<span>5.365 ms</span>",2),kn=t("<span>433 M</span>",2),Sn=t("<span>22.765 ms</span>",2),Tn=t("<span>708 M</span>",2),Bn=t('<span class="font-bold">76.85 ms</span>',2),Pn=t('<span class="font-bold">385 M</span>',2),Cn=t('<span class="font-bold">22.695 ms</span>',2),Dn=t('<span class="font-bold">576 M</span>',2),An=t("<span>80.429 ms</span>",2),In=t("<span>1190 M</span>",2),Un=t("<span>0.8474 ms</span>",2),Rn=t('<span class="font-bold">1204 M</span>',2),Mn=t("<span>3.2708 ms</span>",2),zn=t('<span class="font-bold">1096 M</span>',2),On=t('<span class="font-bold">0.8042 ms</span>',2),En=t("<span>1222 M</span>",2),Nn=t('<span class="font-bold">2.4874 ms</span>',2),Wn=()=>{const o=new Yt,h=o.addReference("Burn v0.6.0 release notes","https://github.com/burn-rs/burn/releases/tag/v0.6.0"),l=o.addReference("Wikipedia: Copy-on-write","https://en.wikipedia.org/wiki/Copy-on-write"),d=o.addReference("Burn - Tch Backend","https://github.com/burn-rs/burn/tree/main/burn-tch"),r=o.addReference("Atomic Reference Counting - std::sync::Arc","https://doc.rust-lang.org/std/sync/struct.Arc.html"),m=o.addReference("Reference Counting - std::rc::Rc","https://doc.rust-lang.org/std/rc/struct.Rc.html"),f=o.addReference("A no_std Rust Environment","https://docs.rust-embedded.org/book/intro/no-std.html"),g=o.addReference("PyTorch - Tensors","https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html#operations"),b=o.addReference("Crate alloc","https://doc.rust-lang.org/alloc/"),$=o.addReference("Arc: try_unwrap","https://doc.rust-lang.org/std/sync/struct.Arc.html#method.try_unwrap"),x=o.addReference("Arc: get_mut","https://doc.rust-lang.org/std/sync/struct.Arc.html#method.get_mut"),v=o.addReference("Clippy Usage","https://doc.rust-lang.org/stable/clippy/usage.html"),k=o.addReference("PyTorch 2.0 release","https://pytorch.org/blog/pytorch-2.0-release/");return i(Kt,{get children(){return[i(Vt,{numStars:15,bot:30}),i(Wt,{props:Qt,get children(){return(()=>{const a=e(cn),w=a.firstChild,S=w.nextSibling,ae=S.firstChild,le=ae.nextSibling,[A,ce]=s(le.nextSibling);A.nextSibling;const he=S.nextSibling,de=he.nextSibling,pe=de.nextSibling,y=pe.nextSibling,ue=y.firstChild,me=ue.nextSibling,[I,fe]=s(me.nextSibling),ge=I.nextSibling,be=ge.nextSibling,[U,we]=s(be.nextSibling);U.nextSibling;const ye=y.nextSibling,[R,_e]=s(ye.nextSibling),p=R.nextSibling,$e=p.firstChild,xe=$e.nextSibling,[M,ve]=s(xe.nextSibling),ke=M.nextSibling,Se=ke.nextSibling,[z,Te]=s(Se.nextSibling),Be=z.nextSibling,Pe=Be.nextSibling,[O,Ce]=s(Pe.nextSibling),De=O.nextSibling,Ae=De.nextSibling,[E,Ie]=s(Ae.nextSibling),Ue=E.nextSibling,Re=Ue.nextSibling,[N,Me]=s(Re.nextSibling);N.nextSibling;const ze=p.nextSibling,[H,Oe]=s(ze.nextSibling),Ee=H.nextSibling,Ne=Ee.nextSibling,[L,He]=s(Ne.nextSibling),Le=L.nextSibling,Fe=Le.nextSibling,Ge=Fe.nextSibling,T=Ge.nextSibling,qe=T.firstChild,je=qe.nextSibling,[F,We]=s(je.nextSibling);F.nextSibling;const Ye=T.nextSibling,Ke=Ye.nextSibling,Ve=Ke.nextSibling,Je=Ve.nextSibling,Qe=Je.nextSibling,[G,Xe]=s(Qe.nextSibling),Ze=G.nextSibling,et=Ze.nextSibling,[q,tt]=s(et.nextSibling),nt=q.nextSibling,it=nt.nextSibling,ot=it.nextSibling,st=ot.nextSibling,rt=st.nextSibling,B=rt.nextSibling,at=B.firstChild,lt=at.nextSibling,[j,ct]=s(lt.nextSibling);j.nextSibling;const ht=B.nextSibling,dt=ht.nextSibling,pt=dt.nextSibling,ut=pt.nextSibling,[W,mt]=s(ut.nextSibling),ft=W.nextSibling,gt=ft.nextSibling,[Y,bt]=s(gt.nextSibling),wt=Y.nextSibling,yt=wt.nextSibling,_t=yt.nextSibling,[K,$t]=s(_t.nextSibling),xt=K.nextSibling,vt=xt.nextSibling,kt=vt.nextSibling,St=kt.nextSibling,Tt=St.nextSibling,[V,Bt]=s(Tt.nextSibling),Pt=V.nextSibling,P=Pt.nextSibling,Ct=P.firstChild,Dt=Ct.nextSibling,[J,At]=s(Dt.nextSibling);J.nextSibling;const It=P.nextSibling,C=It.nextSibling,Ut=C.firstChild,Rt=Ut.nextSibling,[Q,Mt]=s(Rt.nextSibling);Q.nextSibling;const D=C.nextSibling,zt=D.firstChild,Ot=zt.nextSibling,[X,Et]=s(Ot.nextSibling);X.nextSibling;const Nt=D.nextSibling,Ht=Nt.nextSibling,[Lt,Ft]=s(Ht.nextSibling);return n(S,i(c,{get references(){return[h.ref()]}}),A,ce),n(y,i(c,{get references(){return[l.ref()]}}),I,fe),n(y,i(c,{get references(){return[d.ref()]}}),U,we),n(a,i(u,{lang:"rust",code:`
  fn log<const D: usize>(tensor: TchTensor<E, D>) -> TchTensor<E, D> {
      tensor.unary_ops(
          // When the tensor is safe to mutate in-place.
          |mut tensor| tensor.log_(),
          // When the tensor is not safe to mutate in-place.
          |tensor| tensor.log(),
      )
  }
  `}),R,_e),n(p,i(c,{get references(){return[g.ref()]}}),M,ve),n(p,i(c,{get references(){return[r.ref()]}}),z,Te),n(p,i(c,{get references(){return[f.ref(),b.ref()]}}),O,Ce),n(p,i(c,{get references(){return[m.ref()]}}),E,Ie),n(p,i(c,{get references(){return[$.ref(),x.ref()]}}),N,Me),n(a,i(u,{lang:"rust",code:`
  pub fn unary_ops<FOwn, FRef, EOut: tch::kind::Element, const D_OUT: usize>(
      self,
      fown: FOwn,
      fref: FRef,
  ) -> TchTensor<EOut, D_OUT>
  where
      FOwn: Fn(tch::Tensor) -> tch::Tensor,
      FRef: Fn(&tch::Tensor) -> tch::Tensor,
  {
      // We check if there are multiple tensors pointing the the same storage
      if Arc::strong_count(&self.storage) > 1 {
          // If this is the case, the non-in-place function is called
          return TchTensor::from_existing(fref(&self.tensor), self.storage);
      }
  
      // Only the current tensor is pointing to the provided storage space
      // Since the tensor will never be reused, we can safely call the owned
      // function, which may dispatch to an in-place operation.
      TchTensor::from_existing(fown(self.tensor), self.storage)
  }
  `}),H,Oe),n(a,i(u,{lang:"rust",code:`
  pub fn lower<const D: usize>(
      lhs: TchTensor<E, D>,
      rhs: TchTensor<E, D>
  ) -> TchTensor<bool, D> {
      TchTensor::binary_ops_tensor(
          lhs,
          rhs,
          // When the lhs tensor is safe to mutate.
          |lhs, rhs| lhs.less_tensor_(rhs).to_kind(tch::Kind::Bool),
          // When the rhs tensor is safe to mutate, but not lhs.
          |lhs, rhs| rhs.greater_tensor_(lhs).to_kind(tch::Kind::Bool),
          // When both tensor are not safe to mutate
          |lhs, rhs| lhs.less_tensor(rhs),
      )
  }
  `}),L,He),n(T,i(c,{get references(){return[v.ref()]}}),F,We),n(a,i(u,{lang:"rust",code:`
  fn cos<const D: usize>(tensor: ADTensor<B, D>) -> ADTensor<B, D> {
  		// Define a struct for static dispatch
      #[derive(Debug)]
  		struct Cos; 
  
  		impl<B: Backend, const D: usize> Backward<B, D, 1> for Cos {
          // Define the state to capture during the foward pass
          type State = B::TensorPrimitive<D>; 
  				
          // Code that is executed during the backward pass
          fn backward(self, ops: Ops<Self::State, 1>, grads: &mut Gradients) {
              let input = ops.state;
  
              // Calculate the derivative with respect to its parent
              unary::<B, D, D, _>(ops.parents, ops.node, grads, |grad| {
                  let value = B::neg(B::sin(input));
                  B::mul(grad, value)
              });
          }
      }
  		
      // Prepare a statefull operation
      match Cos.prepare([tensor.node], [tensor.graph]).statefull() {
          // Executes when the tensor is tracked
          OpsKind::Tracked(prep) => {
              // Finish the preparation capturing the state
              // The input tensor is cloned for the backward pass
              prep.finish(tensor.primitive.clone(), B::cos(tensor.primitive))
          }
          // Executes when the tensor is not part of the autodiff graph
          // The cos operation is called without any cloning
          OpsKind::UnTracked(prep) => prep.finish(B::cos(tensor.primitive)),
      }
  }
`}),G,Xe),n(a,i(u,{lang:"rust",code:`
  fn add_scalar<const D: usize>(
  		lhs: ADTensor<B, D>,
  		rhs: FloatElem<B>,
  ) -> ADTensor<B, D> {
  		// Define a struct for static dispatch
  		#[derive(Debug)]
  		struct AddScalar;
  
  		impl<B: Backend, const D: usize> Backward<B, D, 1> for AddScalar {
          type State = ();
          
          // Code that is executed during the backward pass
          fn backward(self, ops: Ops<Self::State, 1>, grads: &mut Gradients) {
              unary::<B, D, D, _>(ops.parents, ops.node, grads, |grad| grad);
          }
      }
  		
      // Simpler definition where no match are required.
      AddScalar
          .prepare([lhs.node], [lhs.graph])
          .stateless(B::add_scalar(lhs.primitive, rhs))
  }
`}),q,tt),n(B,i(Z,{src:"https://discord.gg/uPEBbYYDB6",className:"underline",children:"Discord"}),j,ct),n(a,i(u,{lang:"rust",code:`
  use burn::tensor::{backend::Backend, Tensor};
  
  fn softmax<const D: usize, B: Backend>(tensor: Tensor<B, D>, dim: usize) -> Tensor<B, D> {
      log_softmax(tensor, dim).exp()
  }
  
  fn log_softmax<const D: usize, B: Backend>(tensor: Tensor<B, D>, dim: usize) -> Tensor<B, D> {
      tensor.clone() - tensor.exp().sum_dim(dim).log()
  }
`}),W,mt),n(a,i(u,{lang:"python",code:`
  import torch
  from torch import Tensor
  
  
  def softmax(tensor: Tensor, dim: int) -> Tensor:
      return log_softmax(tensor, dim).exp()
  
  def log_softmax(tensor: Tensor, dim: int) -> Tensor:
      return tensor - tensor.exp().sum(dim=dim, keepdim=True).log()
`}),Y,bt),n(a,i(ee,{title:"Softmax Experiment",description:"Note that inference benchmarks were executed 100 times on CPU and 10000 times on GPU, while the autodiff benchmarks were executed 100 times on CPU and 1000 times on GPU.",get columnNames(){return[e(te),e(ne),e(ie),e(oe),e(se)]},get entries(){return[{title:"CPU - PyTorch",values:[e(hn),e(dn),e(re),e(pn)]},{title:"CPU - Burn",values:[e(un),e(mn),e(fn),e(gn)]},{separator:!0},{title:"GPU - PyTorch",values:[e(bn),e(wn),e(re),e(yn)]},{title:"GPU - Burn",values:[e(_n),e($n),e(xn),e(vn)]}]}}),K,$t),n(a,i(ee,{title:"MLP Experiment",description:"Note that inference benchmarks were executed 100 times on CPU and 5000 times on GPU, while the autodiff benchmarks were executed 200 times on CPU and 5000 times on GPU.",get columnNames(){return[e(te),e(ne),e(ie),e(oe),e(se)]},get entries(){return[{title:"CPU - PyTorch",values:[e(kn),e(Sn),e(Tn),e(Bn)]},{title:"CPU - Burn",values:[e(Pn),e(Cn),e(Dn),e(An)]},{separator:!0},{title:"GPU - PyTorch",values:[e(In),e(Un),e(Rn),e(Mn)]},{title:"GPU - Burn",values:[e(zn),e(On),e(En),e(Nn)]}]}}),V,Bt),n(P,i(Z,{src:"https://github.com/nathanielsimard/burn-memory-experiments",className:"underline",children:"repository"}),J,At),n(C,i(c,{get references(){return[k.ref()]}}),Q,Mt),n(D,i(jt,{class:"underline",href:"/demo",children:"demo"}),X,Et),n(a,()=>o.generate(),Lt,Ft),a})()}})]}})};export{Wn as default};
