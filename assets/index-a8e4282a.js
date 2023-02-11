import{g as a,j as s,k as m,i as E,l as g,t as c,n as O,d as R,p as d,e as i,A as V,F as f,h as W,a as q}from"./entry-client-df4e8996.js";const J=c('<a target="_blank" rel="noreferrer"></a>',2),b=r=>(()=>{const l=a(J);return s(l,()=>r.children),m(e=>{const t=r.src,n=r.className;return t!==e._v$&&E(l,"href",e._v$=t),n!==e._v$2&&g(l,e._v$2=n),e},{_v$:void 0,_v$2:void 0}),l})(),P=[{name:"examples",items:[{label:"MNIST",href:"https://github.com/burn-rs/burn/tree/main/examples/mnist"},{label:"Text Classification",href:"https://github.com/burn-rs/burn/tree/main/examples/text-classification"}]},{name:"community",items:[{label:"Github",href:"https://github.com/burn-rs/burn",icon:"i-mdi-github"},{label:"Discord",href:"https://discord.gg/KcVGzmCcWj",icon:"i-mdi-discord"}]},{name:"about",items:[{label:"Documentation",href:"https://docs.rs/burn"},{label:"Crates.io",href:"https://crates.io/crates/burn"},{label:"License",href:"https://github.com/burn-rs/burn/blob/master/LICENSE"}]}],Q=c('<div class="bg-gray-800 min-h-[100vh] w-full flex flex-col"><nav><a href="/" class="text-3xl hover:scale-110 transition-all">Burn</a><ul class="ml-auto flex space-x-12 text-xl"><li class="hover:scale-110 transition-all"></li><li class="hover:scale-110 transition-all"></li><li class="hover:scale-110 transition-all"></li><li class="hidden sm:block"><iframe src="https://ghbtns.com/github-btn.html?user=burn-rs&amp;repo=burn&amp;type=star&amp;count=true&amp;size=large" width="170" height="30" title="GitHub"></iframe></li></ul></nav><!#><!/><div class="flex justify-center pt-10 pb-10 border-t-2 border-gray-900 mt-10"><div class="grid md:grid-cols-3 gap-x-16 gap-y-6 md:gap-x-60 bg-gray-800 text-gray-500"></div></div></div>',24),U=c('<ul class="space-y-2"><h3 class="uppercase mb-2 font-bold"></h3><!#><!/></ul>',6),X=c('<div class="flex items-center"><!#><!/><!#><!/></div>',6),Y=c("<li></li>",2),Z=c("<div></div>",2),ee=r=>{const[l,e]=O(!1);return R(()=>{document.addEventListener("scroll",()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?e(!0):e(!1)}),(document.body.scrollTop>100||document.documentElement.scrollTop>100)&&e(!0)}),(()=>{const t=a(Q),n=t.firstChild,w=n.firstChild,N=w.nextSibling,$=N.firstChild,x=$.nextSibling,L=x.nextSibling,M=n.nextSibling,[_,z]=d(M.nextSibling),T=_.nextSibling,k=T.firstChild;return s($,i(b,{className:"text-white",src:"https://github.com/burn-rs/burn",children:"Github"})),s(x,i(V,{class:"text-white",href:"/blog",children:"Blog"})),s(L,i(b,{className:"text-white",src:"https://docs.rs/burn/latest/burn",children:"Docs"})),s(t,()=>r.children,_,z),s(k,i(f,{each:P,children:p=>(()=>{const h=a(U),v=h.firstChild,B=v.nextSibling,[D,G]=d(B.nextSibling);return s(v,()=>p.name),s(h,i(f,{get each(){return p.items},children:o=>(()=>{const S=a(Y);return s(S,i(b,{get src(){return o.href},get children(){const u=a(X),I=u.firstChild,[y,j]=d(I.nextSibling),A=y.nextSibling,[F,H]=d(A.nextSibling);return s(u,(()=>{const K=W(()=>!!o.icon);return()=>K()&&(()=>{const C=a(Z);return m(()=>g(C,`${o.iconSize?o.iconSize:"text-xl"} ${o.icon} mr-2`)),C})()})(),y,j),s(u,()=>o.label,F,H),u}})),S})()}),D,G),h})()})),m(()=>g(n,`fixed w-full px-10 py-5 z-50 flex items-center text-gray-50 font-semibold transition-colors ${l()&&"bg-[#F34918] shadow-2xl"}`)),t})()},re=ee,te=c('<div class="absolute bg-[#EBC65D] rounded-full invisible sm:visible"></div>',2),le=r=>(q(()=>{let l=r.bot;l||(l=100);for(let e=0;e<r.numStars;e++){const t=document.getElementById("star-"+e);t.style.left=Math.random()*100+"%",t.style.top=Math.random()*l+"%";const n=Math.random()*8;t.style.width=1+n+"px",t.style.height=1+n+"px"}}),i(f,{get each(){return Array.from({length:r.numStars})},children:(l,e)=>(()=>{const t=a(te);return m(()=>E(t,"id",`star-${e()}`)),t})()})),ne=le;export{re as L,ne as S};
