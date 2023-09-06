(function() {var implementors = {
"burn":[],
"burn_autodiff":[["impl&lt;B: Backend&gt; ActivationOps&lt;<a class=\"struct\" href=\"burn_autodiff/struct.ADBackendDecorator.html\" title=\"struct burn_autodiff::ADBackendDecorator\">ADBackendDecorator</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"burn_autodiff/struct.ADBackendDecorator.html\" title=\"struct burn_autodiff::ADBackendDecorator\">ADBackendDecorator</a>&lt;B&gt;"]],
"burn_candle":[["impl&lt;F: FloatCandleElement, I: IntCandleElement&gt; <a class=\"trait\" href=\"burn_tensor/tensor/ops/activation/trait.ActivationOps.html\" title=\"trait burn_tensor::tensor::ops::activation::ActivationOps\">ActivationOps</a>&lt;<a class=\"struct\" href=\"burn_candle/struct.CandleBackend.html\" title=\"struct burn_candle::CandleBackend\">CandleBackend</a>&lt;F, I&gt;&gt; for <a class=\"struct\" href=\"burn_candle/struct.CandleBackend.html\" title=\"struct burn_candle::CandleBackend\">CandleBackend</a>&lt;F, I&gt;"]],
"burn_core":[],
"burn_ndarray":[["impl&lt;E: <a class=\"trait\" href=\"burn_ndarray/trait.FloatNdArrayElement.html\" title=\"trait burn_ndarray::FloatNdArrayElement\">FloatNdArrayElement</a>&gt; ActivationOps&lt;<a class=\"struct\" href=\"burn_ndarray/struct.NdArrayBackend.html\" title=\"struct burn_ndarray::NdArrayBackend\">NdArrayBackend</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"burn_ndarray/struct.NdArrayBackend.html\" title=\"struct burn_ndarray::NdArrayBackend\">NdArrayBackend</a>&lt;E&gt;"]],
"burn_tch":[["impl&lt;E: <a class=\"trait\" href=\"burn_tch/trait.TchElement.html\" title=\"trait burn_tch::TchElement\">TchElement</a>&gt; <a class=\"trait\" href=\"burn_tensor/tensor/ops/activation/trait.ActivationOps.html\" title=\"trait burn_tensor::tensor::ops::activation::ActivationOps\">ActivationOps</a>&lt;<a class=\"struct\" href=\"burn_tch/struct.TchBackend.html\" title=\"struct burn_tch::TchBackend\">TchBackend</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"burn_tch/struct.TchBackend.html\" title=\"struct burn_tch::TchBackend\">TchBackend</a>&lt;E&gt;"]],
"burn_wgpu":[["impl&lt;G, F, I&gt; ActivationOps&lt;<a class=\"struct\" href=\"burn_wgpu/struct.WgpuBackend.html\" title=\"struct burn_wgpu::WgpuBackend\">WgpuBackend</a>&lt;G, F, I&gt;&gt; for <a class=\"struct\" href=\"burn_wgpu/struct.WgpuBackend.html\" title=\"struct burn_wgpu::WgpuBackend\">WgpuBackend</a>&lt;G, F, I&gt;<span class=\"where fmt-newline\">where\n    G: <a class=\"trait\" href=\"burn_wgpu/trait.GraphicsApi.html\" title=\"trait burn_wgpu::GraphicsApi\">GraphicsApi</a> + 'static,\n    F: <a class=\"trait\" href=\"burn_wgpu/trait.FloatElement.html\" title=\"trait burn_wgpu::FloatElement\">FloatElement</a>,\n    I: <a class=\"trait\" href=\"burn_wgpu/trait.IntElement.html\" title=\"trait burn_wgpu::IntElement\">IntElement</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()