(function() {var implementors = {
"burn_tch":[["impl&lt;E: <a class=\"trait\" href=\"burn_tch/trait.TchElement.html\" title=\"trait burn_tch::TchElement\">TchElement</a>, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"burn_tch/struct.TchTensor.html\" title=\"struct burn_tch::TchTensor\">TchTensor</a>&lt;E, D&gt;&gt; for <a class=\"struct\" href=\"burn_tch/struct.TchTensor.html\" title=\"struct burn_tch::TchTensor\">TchTensor</a>&lt;E, D&gt;"]],
"burn_tensor":[["impl&lt;E, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>, B, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;E&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Tensor.html\" title=\"struct burn_tensor::Tensor\">Tensor</a>&lt;B, D, K&gt;<span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"burn_tensor/trait.ElementConversion.html\" title=\"trait burn_tensor::ElementConversion\">ElementConversion</a>,\n    B: <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>,\n    K: <a class=\"trait\" href=\"burn_tensor/trait.Numeric.html\" title=\"trait burn_tensor::Numeric\">Numeric</a>&lt;B&gt;,\n    K::<a class=\"associatedtype\" href=\"burn_tensor/trait.BasicOps.html#associatedtype.Elem\" title=\"type burn_tensor::BasicOps::Elem\">Elem</a>: <a class=\"trait\" href=\"burn_tensor/trait.Element.html\" title=\"trait burn_tensor::Element\">Element</a>,</span>"],["impl&lt;B, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"burn_tensor/struct.Tensor.html\" title=\"struct burn_tensor::Tensor\">Tensor</a>&lt;B, D, K&gt;&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Tensor.html\" title=\"struct burn_tensor::Tensor\">Tensor</a>&lt;B, D, K&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>,\n    K: <a class=\"trait\" href=\"burn_tensor/trait.Numeric.html\" title=\"trait burn_tensor::Numeric\">Numeric</a>&lt;B&gt;,\n    K::<a class=\"associatedtype\" href=\"burn_tensor/trait.BasicOps.html#associatedtype.Elem\" title=\"type burn_tensor::BasicOps::Elem\">Elem</a>: <a class=\"trait\" href=\"burn_tensor/trait.Element.html\" title=\"trait burn_tensor::Element\">Element</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()