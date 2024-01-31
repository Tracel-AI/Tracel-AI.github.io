(function() {var type_impls = {
"burn_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PrettyJsonFileRecorder%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#39\">source</a><a href=\"#impl-PrettyJsonFileRecorder%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"struct\" href=\"burn_core/record/struct.PrettyJsonFileRecorder.html\" title=\"struct burn_core::record::PrettyJsonFileRecorder\">PrettyJsonFileRecorder</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#39\">source</a><h4 class=\"code-header\">pub fn <a href=\"burn_core/record/struct.PrettyJsonFileRecorder.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Constructs a new <code>PrettyJsonFileRecorder</code>.</p>\n</div></details></div></details>",0,"burn_core::record::recorder::DebugRecordSettings"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FileRecorder%3CB%3E-for-PrettyJsonFileRecorder%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#71-75\">source</a><a href=\"#impl-FileRecorder%3CB%3E-for-PrettyJsonFileRecorder%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>, B: <a class=\"trait\" href=\"burn_core/tensor/backend/trait.Backend.html\" title=\"trait burn_core::tensor::backend::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"burn_core/record/trait.FileRecorder.html\" title=\"trait burn_core::record::FileRecorder\">FileRecorder</a>&lt;B&gt; for <a class=\"struct\" href=\"burn_core/record/struct.PrettyJsonFileRecorder.html\" title=\"struct burn_core::record::PrettyJsonFileRecorder\">PrettyJsonFileRecorder</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.file_extension\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#72-74\">source</a><a href=\"#method.file_extension\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"burn_core/record/trait.FileRecorder.html#tymethod.file_extension\" class=\"fn\">file_extension</a>() -&gt; &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>File extension of the format used by the recorder.</div></details></div></details>","FileRecorder<B>","burn_core::record::recorder::DebugRecordSettings"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-PrettyJsonFileRecorder%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#39\">source</a><a href=\"#impl-Clone-for-PrettyJsonFileRecorder%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"burn_core/record/struct.PrettyJsonFileRecorder.html\" title=\"struct burn_core::record::PrettyJsonFileRecorder\">PrettyJsonFileRecorder</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#39\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"burn_core/record/struct.PrettyJsonFileRecorder.html\" title=\"struct burn_core::record::PrettyJsonFileRecorder\">PrettyJsonFileRecorder</a>&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","burn_core::record::recorder::DebugRecordSettings"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-PrettyJsonFileRecorder%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#39\">source</a><a href=\"#impl-Default-for-PrettyJsonFileRecorder%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"burn_core/record/struct.PrettyJsonFileRecorder.html\" title=\"struct burn_core::record::PrettyJsonFileRecorder\">PrettyJsonFileRecorder</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#39\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"burn_core/record/struct.PrettyJsonFileRecorder.html\" title=\"struct burn_core::record::PrettyJsonFileRecorder\">PrettyJsonFileRecorder</a>&lt;S&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","burn_core::record::recorder::DebugRecordSettings"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PrettyJsonFileRecorder%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#39\">source</a><a href=\"#impl-Debug-for-PrettyJsonFileRecorder%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"burn_core/record/struct.PrettyJsonFileRecorder.html\" title=\"struct burn_core::record::PrettyJsonFileRecorder\">PrettyJsonFileRecorder</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#39\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","burn_core::record::recorder::DebugRecordSettings"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Recorder%3CB%3E-for-PrettyJsonFileRecorder%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#217-241\">source</a><a href=\"#impl-Recorder%3CB%3E-for-PrettyJsonFileRecorder%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"burn_core/record/trait.PrecisionSettings.html\" title=\"trait burn_core::record::PrecisionSettings\">PrecisionSettings</a>, B: <a class=\"trait\" href=\"burn_core/tensor/backend/trait.Backend.html\" title=\"trait burn_core::tensor::backend::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"burn_core/record/trait.Recorder.html\" title=\"trait burn_core::record::Recorder\">Recorder</a>&lt;B&gt; for <a class=\"struct\" href=\"burn_core/record/struct.PrettyJsonFileRecorder.html\" title=\"struct burn_core::record::PrettyJsonFileRecorder\">PrettyJsonFileRecorder</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Settings\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Settings\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"burn_core/record/trait.Recorder.html#associatedtype.Settings\" class=\"associatedtype\">Settings</a> = S</h4></section></summary><div class='docblock'>Type of the settings used by the recorder.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.RecordArgs\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.RecordArgs\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"burn_core/record/trait.Recorder.html#associatedtype.RecordArgs\" class=\"associatedtype\">RecordArgs</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a></h4></section></summary><div class='docblock'>Arguments used to record objects.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.RecordOutput\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.RecordOutput\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"burn_core/record/trait.Recorder.html#associatedtype.RecordOutput\" class=\"associatedtype\">RecordOutput</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a></h4></section></summary><div class='docblock'>Record output type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.LoadArgs\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.LoadArgs\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"burn_core/record/trait.Recorder.html#associatedtype.LoadArgs\" class=\"associatedtype\">LoadArgs</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a></h4></section></summary><div class='docblock'>Arguments used to load recorded objects.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.save_item\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#223-232\">source</a><a href=\"#method.save_item\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"burn_core/record/trait.Recorder.html#tymethod.save_item\" class=\"fn\">save_item</a>&lt;I: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>&gt;(\n    &amp;self,\n    item: I,\n    file: Self::<a class=\"associatedtype\" href=\"burn_core/record/trait.Recorder.html#associatedtype.RecordArgs\" title=\"type burn_core::record::Recorder::RecordArgs\">RecordArgs</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"burn_core/record/enum.RecorderError.html\" title=\"enum burn_core::record::RecorderError\">RecorderError</a>&gt;</h4></section></summary><div class='docblock'>Saves an item. <a href=\"burn_core/record/trait.Recorder.html#tymethod.save_item\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_item\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/burn_core/record/file.rs.html#234-240\">source</a><a href=\"#method.load_item\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"burn_core/record/trait.Recorder.html#tymethod.load_item\" class=\"fn\">load_item</a>&lt;I: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>&gt;(\n    &amp;self,\n    file: Self::<a class=\"associatedtype\" href=\"burn_core/record/trait.Recorder.html#associatedtype.LoadArgs\" title=\"type burn_core::record::Recorder::LoadArgs\">LoadArgs</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;I, <a class=\"enum\" href=\"burn_core/record/enum.RecorderError.html\" title=\"enum burn_core::record::RecorderError\">RecorderError</a>&gt;</h4></section></summary><div class='docblock'>Loads an item. <a href=\"burn_core/record/trait.Recorder.html#tymethod.load_item\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.record\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/burn_core/record/recorder.rs.html#43-55\">source</a><a href=\"#method.record\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"burn_core/record/trait.Recorder.html#method.record\" class=\"fn\">record</a>&lt;R&gt;(\n    &amp;self,\n    record: R,\n    args: Self::<a class=\"associatedtype\" href=\"burn_core/record/trait.Recorder.html#associatedtype.RecordArgs\" title=\"type burn_core::record::Recorder::RecordArgs\">RecordArgs</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self::<a class=\"associatedtype\" href=\"burn_core/record/trait.Recorder.html#associatedtype.RecordOutput\" title=\"type burn_core::record::Recorder::RecordOutput\">RecordOutput</a>, <a class=\"enum\" href=\"burn_core/record/enum.RecorderError.html\" title=\"enum burn_core::record::RecorderError\">RecorderError</a>&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"burn_core/record/trait.Record.html\" title=\"trait burn_core::record::Record\">Record</a>&lt;B&gt;,</span></h4></section></summary><div class='docblock'>Records an item. <a href=\"burn_core/record/trait.Recorder.html#method.record\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/burn_core/record/recorder.rs.html#58-105\">source</a><a href=\"#method.load\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"burn_core/record/trait.Recorder.html#method.load\" class=\"fn\">load</a>&lt;R&gt;(\n    &amp;self,\n    args: Self::<a class=\"associatedtype\" href=\"burn_core/record/trait.Recorder.html#associatedtype.LoadArgs\" title=\"type burn_core::record::Recorder::LoadArgs\">LoadArgs</a>,\n    device: &amp;B::<a class=\"associatedtype\" href=\"burn_core/tensor/backend/trait.Backend.html#associatedtype.Device\" title=\"type burn_core::tensor::backend::Backend::Device\">Device</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, <a class=\"enum\" href=\"burn_core/record/enum.RecorderError.html\" title=\"enum burn_core::record::RecorderError\">RecorderError</a>&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"burn_core/record/trait.Record.html\" title=\"trait burn_core::record::Record\">Record</a>&lt;B&gt;,</span></h4></section></summary><div class='docblock'>Load an item from the given arguments.</div></details></div></details>","Recorder<B>","burn_core::record::recorder::DebugRecordSettings"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()