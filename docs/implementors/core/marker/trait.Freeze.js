(function() {var implementors = {
"burn_autodiff":[["impl Freeze for <a class=\"struct\" href=\"burn_autodiff/grads/struct.Gradients.html\" title=\"struct burn_autodiff::grads::Gradients\">Gradients</a>",1,["burn_autodiff::grads::Gradients"]],["impl&lt;Backward, B, S, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>, Mode&gt; Freeze for <a class=\"struct\" href=\"burn_autodiff/ops/struct.OpsPrep.html\" title=\"struct burn_autodiff::ops::OpsPrep\">OpsPrep</a>&lt;Backward, B, S, D, N, Mode&gt;<span class=\"where fmt-newline\">where\n    Backward: Freeze,</span>",1,["burn_autodiff::ops::base::OpsPrep"]],["impl Freeze for <a class=\"struct\" href=\"burn_autodiff/ops/struct.Init.html\" title=\"struct burn_autodiff::ops::Init\">Init</a>",1,["burn_autodiff::ops::base::Init"]],["impl Freeze for <a class=\"struct\" href=\"burn_autodiff/ops/struct.Tracked.html\" title=\"struct burn_autodiff::ops::Tracked\">Tracked</a>",1,["burn_autodiff::ops::base::Tracked"]],["impl Freeze for <a class=\"struct\" href=\"burn_autodiff/ops/struct.UnTracked.html\" title=\"struct burn_autodiff::ops::UnTracked\">UnTracked</a>",1,["burn_autodiff::ops::base::UnTracked"]],["impl&lt;BO, B, S, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"enum\" href=\"burn_autodiff/ops/enum.OpsKind.html\" title=\"enum burn_autodiff::ops::OpsKind\">OpsKind</a>&lt;BO, B, S, D, N&gt;<span class=\"where fmt-newline\">where\n    BO: Freeze,</span>",1,["burn_autodiff::ops::base::OpsKind"]],["impl&lt;S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"burn_autodiff/ops/struct.Ops.html\" title=\"struct burn_autodiff::ops::Ops\">Ops</a>&lt;S, N&gt;<span class=\"where fmt-newline\">where\n    S: Freeze,</span>",1,["burn_autodiff::ops::base::Ops"]],["impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"burn_autodiff/struct.ADBackendDecorator.html\" title=\"struct burn_autodiff::ADBackendDecorator\">ADBackendDecorator</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    B: Freeze,</span>",1,["burn_autodiff::backend::ADBackendDecorator"]]],
"burn_common":[["impl Freeze for <a class=\"struct\" href=\"burn_common/id/struct.IdGenerator.html\" title=\"struct burn_common::id::IdGenerator\">IdGenerator</a>",1,["burn_common::id::IdGenerator"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"burn_common/stub/struct.Mutex.html\" title=\"struct burn_common::stub::Mutex\">Mutex</a>&lt;T&gt;",1,["burn_common::stub::Mutex"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"burn_common/stub/struct.RwLock.html\" title=\"struct burn_common::stub::RwLock\">RwLock</a>&lt;T&gt;",1,["burn_common::stub::RwLock"]],["impl Freeze for <a class=\"struct\" href=\"burn_common/stub/struct.ThreadId.html\" title=\"struct burn_common::stub::ThreadId\">ThreadId</a>",1,["burn_common::stub::ThreadId"]],["impl Freeze for <a class=\"struct\" href=\"burn_common/benchmark/struct.BenchmarkResult.html\" title=\"struct burn_common::benchmark::BenchmarkResult\">BenchmarkResult</a>",1,["burn_common::benchmark::BenchmarkResult"]],["impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"burn_common/reader/enum.Reader.html\" title=\"enum burn_common::reader::Reader\">Reader</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: Freeze,</span>",1,["burn_common::reader::Reader"]]],
"burn_compute":[["impl&lt;Server&gt; Freeze for <a class=\"struct\" href=\"burn_compute/channel/struct.MutexComputeChannel.html\" title=\"struct burn_compute::channel::MutexComputeChannel\">MutexComputeChannel</a>&lt;Server&gt;",1,["burn_compute::channel::mutex::MutexComputeChannel"]],["impl&lt;Server&gt; Freeze for <a class=\"struct\" href=\"burn_compute/channel/struct.MpscComputeChannel.html\" title=\"struct burn_compute::channel::MpscComputeChannel\">MpscComputeChannel</a>&lt;Server&gt;",1,["burn_compute::channel::mpsc::MpscComputeChannel"]],["impl&lt;Server&gt; Freeze for <a class=\"struct\" href=\"burn_compute/channel/struct.RefCellComputeChannel.html\" title=\"struct burn_compute::channel::RefCellComputeChannel\">RefCellComputeChannel</a>&lt;Server&gt;",1,["burn_compute::channel::cell::RefCellComputeChannel"]],["impl&lt;Server, Channel&gt; Freeze for <a class=\"struct\" href=\"burn_compute/client/struct.ComputeClient.html\" title=\"struct burn_compute::client::ComputeClient\">ComputeClient</a>&lt;Server, Channel&gt;<span class=\"where fmt-newline\">where\n    Channel: Freeze,</span>",1,["burn_compute::client::ComputeClient"]],["impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"burn_compute/tune/struct.Operation.html\" title=\"struct burn_compute::tune::Operation\">Operation</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    &lt;S as <a class=\"trait\" href=\"burn_compute/server/trait.ComputeServer.html\" title=\"trait burn_compute::server::ComputeServer\">ComputeServer</a>&gt;::<a class=\"associatedtype\" href=\"burn_compute/server/trait.ComputeServer.html#associatedtype.Kernel\" title=\"type burn_compute::server::ComputeServer::Kernel\">Kernel</a>: Freeze,</span>",1,["burn_compute::tune::operation::Operation"]],["impl Freeze for <a class=\"struct\" href=\"burn_compute/tune/struct.AutotuneKey.html\" title=\"struct burn_compute::tune::AutotuneKey\">AutotuneKey</a>",1,["burn_compute::tune::operation::AutotuneKey"]],["impl&lt;'a, S&gt; Freeze for <a class=\"struct\" href=\"burn_compute/tune/struct.TuneBenchmark.html\" title=\"struct burn_compute::tune::TuneBenchmark\">TuneBenchmark</a>&lt;'a, S&gt;<span class=\"where fmt-newline\">where\n    &lt;S as <a class=\"trait\" href=\"burn_compute/server/trait.ComputeServer.html\" title=\"trait burn_compute::server::ComputeServer\">ComputeServer</a>&gt;::<a class=\"associatedtype\" href=\"burn_compute/server/trait.ComputeServer.html#associatedtype.Kernel\" title=\"type burn_compute::server::ComputeServer::Kernel\">Kernel</a>: Freeze,</span>",1,["burn_compute::tune::tune_benchmark::TuneBenchmark"]],["impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"burn_compute/tune/struct.TuneCache.html\" title=\"struct burn_compute::tune::TuneCache\">TuneCache</a>&lt;S&gt;",1,["burn_compute::tune::tune_cache::TuneCache"]],["impl Freeze for <a class=\"struct\" href=\"burn_compute/memory_management/struct.ChunkId.html\" title=\"struct burn_compute::memory_management::ChunkId\">ChunkId</a>",1,["burn_compute::memory_management::simple::ChunkId"]],["impl Freeze for <a class=\"struct\" href=\"burn_compute/memory_management/struct.SliceId.html\" title=\"struct burn_compute::memory_management::SliceId\">SliceId</a>",1,["burn_compute::memory_management::simple::SliceId"]],["impl Freeze for <a class=\"enum\" href=\"burn_compute/memory_management/enum.SimpleHandle.html\" title=\"enum burn_compute::memory_management::SimpleHandle\">SimpleHandle</a>",1,["burn_compute::memory_management::simple::SimpleHandle"]],["impl Freeze for <a class=\"enum\" href=\"burn_compute/memory_management/enum.DeallocStrategy.html\" title=\"enum burn_compute::memory_management::DeallocStrategy\">DeallocStrategy</a>",1,["burn_compute::memory_management::simple::DeallocStrategy"]],["impl Freeze for <a class=\"enum\" href=\"burn_compute/memory_management/enum.SliceStrategy.html\" title=\"enum burn_compute::memory_management::SliceStrategy\">SliceStrategy</a>",1,["burn_compute::memory_management::simple::SliceStrategy"]],["impl&lt;Storage&gt; Freeze for <a class=\"struct\" href=\"burn_compute/memory_management/struct.SimpleMemoryManagement.html\" title=\"struct burn_compute::memory_management::SimpleMemoryManagement\">SimpleMemoryManagement</a>&lt;Storage&gt;<span class=\"where fmt-newline\">where\n    Storage: Freeze,</span>",1,["burn_compute::memory_management::simple::SimpleMemoryManagement"]],["impl&lt;Server&gt; Freeze for <a class=\"struct\" href=\"burn_compute/server/struct.Handle.html\" title=\"struct burn_compute::server::Handle\">Handle</a>&lt;Server&gt;<span class=\"where fmt-newline\">where\n    &lt;&lt;Server as <a class=\"trait\" href=\"burn_compute/server/trait.ComputeServer.html\" title=\"trait burn_compute::server::ComputeServer\">ComputeServer</a>&gt;::<a class=\"associatedtype\" href=\"burn_compute/server/trait.ComputeServer.html#associatedtype.MemoryManagement\" title=\"type burn_compute::server::ComputeServer::MemoryManagement\">MemoryManagement</a> as <a class=\"trait\" href=\"burn_compute/memory_management/trait.MemoryManagement.html\" title=\"trait burn_compute::memory_management::MemoryManagement\">MemoryManagement</a>&lt;&lt;Server as <a class=\"trait\" href=\"burn_compute/server/trait.ComputeServer.html\" title=\"trait burn_compute::server::ComputeServer\">ComputeServer</a>&gt;::<a class=\"associatedtype\" href=\"burn_compute/server/trait.ComputeServer.html#associatedtype.Storage\" title=\"type burn_compute::server::ComputeServer::Storage\">Storage</a>&gt;&gt;::<a class=\"associatedtype\" href=\"burn_compute/memory_management/trait.MemoryManagement.html#associatedtype.Handle\" title=\"type burn_compute::memory_management::MemoryManagement::Handle\">Handle</a>: Freeze,</span>",1,["burn_compute::server::Handle"]],["impl Freeze for <a class=\"struct\" href=\"burn_compute/storage/struct.StorageId.html\" title=\"struct burn_compute::storage::StorageId\">StorageId</a>",1,["burn_compute::storage::base::StorageId"]],["impl Freeze for <a class=\"enum\" href=\"burn_compute/storage/enum.StorageUtilization.html\" title=\"enum burn_compute::storage::StorageUtilization\">StorageUtilization</a>",1,["burn_compute::storage::base::StorageUtilization"]],["impl Freeze for <a class=\"struct\" href=\"burn_compute/storage/struct.StorageHandle.html\" title=\"struct burn_compute::storage::StorageHandle\">StorageHandle</a>",1,["burn_compute::storage::base::StorageHandle"]],["impl Freeze for <a class=\"struct\" href=\"burn_compute/storage/struct.BytesStorage.html\" title=\"struct burn_compute::storage::BytesStorage\">BytesStorage</a>",1,["burn_compute::storage::bytes_cpu::BytesStorage"]],["impl Freeze for <a class=\"struct\" href=\"burn_compute/storage/struct.BytesResource.html\" title=\"struct burn_compute::storage::BytesResource\">BytesResource</a>",1,["burn_compute::storage::bytes_cpu::BytesResource"]],["impl&lt;Device, Server, Channel&gt; !Freeze for <a class=\"struct\" href=\"burn_compute/struct.Compute.html\" title=\"struct burn_compute::Compute\">Compute</a>&lt;Device, Server, Channel&gt;",1,["burn_compute::compute::Compute"]]],
"burn_dataset":[["impl Freeze for <a class=\"enum\" href=\"burn_dataset/source/huggingface/enum.ImporterError.html\" title=\"enum burn_dataset::source::huggingface::ImporterError\">ImporterError</a>",1,["burn_dataset::source::huggingface::downloader::ImporterError"]],["impl Freeze for <a class=\"struct\" href=\"burn_dataset/source/huggingface/struct.HuggingfaceDatasetLoader.html\" title=\"struct burn_dataset::source::huggingface::HuggingfaceDatasetLoader\">HuggingfaceDatasetLoader</a>",1,["burn_dataset::source::huggingface::downloader::HuggingfaceDatasetLoader"]],["impl Freeze for <a class=\"struct\" href=\"burn_dataset/source/huggingface/struct.MNISTItem.html\" title=\"struct burn_dataset::source::huggingface::MNISTItem\">MNISTItem</a>",1,["burn_dataset::source::huggingface::mnist::MNISTItem"]],["impl Freeze for <a class=\"struct\" href=\"burn_dataset/source/huggingface/struct.MNISTDataset.html\" title=\"struct burn_dataset::source::huggingface::MNISTDataset\">MNISTDataset</a>",1,["burn_dataset::source::huggingface::mnist::MNISTDataset"]],["impl&lt;D&gt; Freeze for <a class=\"struct\" href=\"burn_dataset/transform/struct.ComposedDataset.html\" title=\"struct burn_dataset::transform::ComposedDataset\">ComposedDataset</a>&lt;D&gt;",1,["burn_dataset::transform::composed::ComposedDataset"]],["impl&lt;D, M, I&gt; Freeze for <a class=\"struct\" href=\"burn_dataset/transform/struct.MapperDataset.html\" title=\"struct burn_dataset::transform::MapperDataset\">MapperDataset</a>&lt;D, M, I&gt;<span class=\"where fmt-newline\">where\n    D: Freeze,\n    M: Freeze,</span>",1,["burn_dataset::transform::mapper::MapperDataset"]],["impl&lt;D, I&gt; Freeze for <a class=\"struct\" href=\"burn_dataset/transform/struct.PartialDataset.html\" title=\"struct burn_dataset::transform::PartialDataset\">PartialDataset</a>&lt;D, I&gt;<span class=\"where fmt-newline\">where\n    D: Freeze,</span>",1,["burn_dataset::transform::partial::PartialDataset"]],["impl&lt;D, I&gt; Freeze for <a class=\"struct\" href=\"burn_dataset/transform/struct.ShuffledDataset.html\" title=\"struct burn_dataset::transform::ShuffledDataset\">ShuffledDataset</a>&lt;D, I&gt;<span class=\"where fmt-newline\">where\n    D: Freeze,</span>",1,["burn_dataset::transform::random::ShuffledDataset"]],["impl&lt;D, I&gt; !Freeze for <a class=\"struct\" href=\"burn_dataset/transform/struct.SamplerDataset.html\" title=\"struct burn_dataset::transform::SamplerDataset\">SamplerDataset</a>&lt;D, I&gt;",1,["burn_dataset::transform::sampler::SamplerDataset"]],["impl&lt;I&gt; Freeze for <a class=\"struct\" href=\"burn_dataset/struct.InMemDataset.html\" title=\"struct burn_dataset::InMemDataset\">InMemDataset</a>&lt;I&gt;",1,["burn_dataset::dataset::in_memory::InMemDataset"]],["impl&lt;'a, I&gt; Freeze for <a class=\"struct\" href=\"burn_dataset/struct.DatasetIterator.html\" title=\"struct burn_dataset::DatasetIterator\">DatasetIterator</a>&lt;'a, I&gt;",1,["burn_dataset::dataset::iterator::DatasetIterator"]],["impl Freeze for <a class=\"enum\" href=\"burn_dataset/enum.SqliteDatasetError.html\" title=\"enum burn_dataset::SqliteDatasetError\">SqliteDatasetError</a>",1,["burn_dataset::dataset::sqlite::SqliteDatasetError"]],["impl&lt;I&gt; Freeze for <a class=\"struct\" href=\"burn_dataset/struct.SqliteDataset.html\" title=\"struct burn_dataset::SqliteDataset\">SqliteDataset</a>&lt;I&gt;",1,["burn_dataset::dataset::sqlite::SqliteDataset"]],["impl Freeze for <a class=\"struct\" href=\"burn_dataset/struct.SqliteDatasetStorage.html\" title=\"struct burn_dataset::SqliteDatasetStorage\">SqliteDatasetStorage</a>",1,["burn_dataset::dataset::sqlite::SqliteDatasetStorage"]],["impl&lt;I&gt; Freeze for <a class=\"struct\" href=\"burn_dataset/struct.SqliteDatasetWriter.html\" title=\"struct burn_dataset::SqliteDatasetWriter\">SqliteDatasetWriter</a>&lt;I&gt;",1,["burn_dataset::dataset::sqlite::SqliteDatasetWriter"]]],
"burn_ndarray":[["impl Freeze for <a class=\"enum\" href=\"burn_ndarray/enum.NdArrayDevice.html\" title=\"enum burn_ndarray::NdArrayDevice\">NdArrayDevice</a>",1,["burn_ndarray::backend::NdArrayDevice"]],["impl&lt;E&gt; Freeze for <a class=\"struct\" href=\"burn_ndarray/struct.NdArrayBackend.html\" title=\"struct burn_ndarray::NdArrayBackend\">NdArrayBackend</a>&lt;E&gt;",1,["burn_ndarray::backend::NdArrayBackend"]]],
"burn_tensor":[["impl&lt;B, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>, K&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/struct.Tensor.html\" title=\"struct burn_tensor::Tensor\">Tensor</a>&lt;B, D, K&gt;<span class=\"where fmt-newline\">where\n    &lt;K as <a class=\"trait\" href=\"burn_tensor/trait.TensorKind.html\" title=\"trait burn_tensor::TensorKind\">TensorKind</a>&lt;B&gt;&gt;::<a class=\"associatedtype\" href=\"burn_tensor/trait.TensorKind.html#associatedtype.Primitive\" title=\"type burn_tensor::TensorKind::Primitive\">Primitive</a>&lt;D&gt;: Freeze,</span>",1,["burn_tensor::tensor::api::base::Tensor"]],["impl&lt;B, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>, K&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/struct.DimIter.html\" title=\"struct burn_tensor::DimIter\">DimIter</a>&lt;B, D, K&gt;<span class=\"where fmt-newline\">where\n    &lt;K as <a class=\"trait\" href=\"burn_tensor/trait.TensorKind.html\" title=\"trait burn_tensor::TensorKind\">TensorKind</a>&lt;B&gt;&gt;::<a class=\"associatedtype\" href=\"burn_tensor/trait.TensorKind.html#associatedtype.Primitive\" title=\"type burn_tensor::TensorKind::Primitive\">Primitive</a>&lt;D&gt;: Freeze,</span>",1,["burn_tensor::tensor::api::base::DimIter"]],["impl Freeze for <a class=\"struct\" href=\"burn_tensor/struct.PrintOptions.html\" title=\"struct burn_tensor::PrintOptions\">PrintOptions</a>",1,["burn_tensor::tensor::api::base::PrintOptions"]],["impl Freeze for <a class=\"struct\" href=\"burn_tensor/struct.T.html\" title=\"struct burn_tensor::T\">T</a>",1,["burn_tensor::tensor::api::base::T"]],["impl Freeze for <a class=\"struct\" href=\"burn_tensor/struct.Float.html\" title=\"struct burn_tensor::Float\">Float</a>",1,["burn_tensor::tensor::api::kind::Float"]],["impl Freeze for <a class=\"struct\" href=\"burn_tensor/struct.Int.html\" title=\"struct burn_tensor::Int\">Int</a>",1,["burn_tensor::tensor::api::kind::Int"]],["impl Freeze for <a class=\"struct\" href=\"burn_tensor/struct.Bool.html\" title=\"struct burn_tensor::Bool\">Bool</a>",1,["burn_tensor::tensor::api::kind::Bool"]],["impl&lt;E&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/struct.DataSerialize.html\" title=\"struct burn_tensor::DataSerialize\">DataSerialize</a>&lt;E&gt;",1,["burn_tensor::tensor::data::DataSerialize"]],["impl&lt;E, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/struct.Data.html\" title=\"struct burn_tensor::Data\">Data</a>&lt;E, D&gt;",1,["burn_tensor::tensor::data::Data"]],["impl&lt;E&gt; Freeze for <a class=\"enum\" href=\"burn_tensor/enum.Distribution.html\" title=\"enum burn_tensor::Distribution\">Distribution</a>&lt;E&gt;<span class=\"where fmt-newline\">where\n    E: Freeze,</span>",1,["burn_tensor::tensor::data::Distribution"]],["impl&lt;'a, E, R&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/struct.DistributionSampler.html\" title=\"struct burn_tensor::DistributionSampler\">DistributionSampler</a>&lt;'a, E, R&gt;<span class=\"where fmt-newline\">where\n    &lt;E as <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/uniform/trait.SampleUniform.html\" title=\"trait rand::distributions::uniform::SampleUniform\">SampleUniform</a>&gt;::<a class=\"associatedtype\" href=\"https://rust-random.github.io/rand/rand/distributions/uniform/trait.SampleUniform.html#associatedtype.Sampler\" title=\"type rand::distributions::uniform::SampleUniform::Sampler\">Sampler</a>: Freeze,</span>",1,["burn_tensor::tensor::data::DistributionSampler"]],["impl&lt;E&gt; Freeze for <a class=\"enum\" href=\"burn_tensor/enum.DistributionSamplerKind.html\" title=\"enum burn_tensor::DistributionSamplerKind\">DistributionSamplerKind</a>&lt;E&gt;<span class=\"where fmt-newline\">where\n    &lt;E as <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/uniform/trait.SampleUniform.html\" title=\"trait rand::distributions::uniform::SampleUniform\">SampleUniform</a>&gt;::<a class=\"associatedtype\" href=\"https://rust-random.github.io/rand/rand/distributions/uniform/trait.SampleUniform.html#associatedtype.Sampler\" title=\"type rand::distributions::uniform::SampleUniform::Sampler\">Sampler</a>: Freeze,</span>",1,["burn_tensor::tensor::data::DistributionSamplerKind"]],["impl Freeze for <a class=\"enum\" href=\"burn_tensor/enum.Precision.html\" title=\"enum burn_tensor::Precision\">Precision</a>",1,["burn_tensor::tensor::element::Precision"]],["impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/struct.Shape.html\" title=\"struct burn_tensor::Shape\">Shape</a>&lt;D&gt;",1,["burn_tensor::tensor::shape::Shape"]],["impl&lt;ID&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/container/struct.TensorContainer.html\" title=\"struct burn_tensor::container::TensorContainer\">TensorContainer</a>&lt;ID&gt;",1,["burn_tensor::tensor::container::TensorContainer"]],["impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/ops/struct.Conv2dBackward.html\" title=\"struct burn_tensor::ops::Conv2dBackward\">Conv2dBackward</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    &lt;B as <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"burn_tensor/backend/trait.Backend.html#associatedtype.TensorPrimitive\" title=\"type burn_tensor::backend::Backend::TensorPrimitive\">TensorPrimitive</a>&lt;1&gt;: Freeze,\n    &lt;B as <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"burn_tensor/backend/trait.Backend.html#associatedtype.TensorPrimitive\" title=\"type burn_tensor::backend::Backend::TensorPrimitive\">TensorPrimitive</a>&lt;4&gt;: Freeze,</span>",1,["burn_tensor::tensor::ops::modules::base::Conv2dBackward"]],["impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/ops/struct.MaxPool1dBackward.html\" title=\"struct burn_tensor::ops::MaxPool1dBackward\">MaxPool1dBackward</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    &lt;B as <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"burn_tensor/backend/trait.Backend.html#associatedtype.TensorPrimitive\" title=\"type burn_tensor::backend::Backend::TensorPrimitive\">TensorPrimitive</a>&lt;3&gt;: Freeze,</span>",1,["burn_tensor::tensor::ops::modules::base::MaxPool1dBackward"]],["impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/ops/struct.MaxPool1dWithIndices.html\" title=\"struct burn_tensor::ops::MaxPool1dWithIndices\">MaxPool1dWithIndices</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    &lt;B as <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"burn_tensor/backend/trait.Backend.html#associatedtype.IntTensorPrimitive\" title=\"type burn_tensor::backend::Backend::IntTensorPrimitive\">IntTensorPrimitive</a>&lt;3&gt;: Freeze,\n    &lt;B as <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"burn_tensor/backend/trait.Backend.html#associatedtype.TensorPrimitive\" title=\"type burn_tensor::backend::Backend::TensorPrimitive\">TensorPrimitive</a>&lt;3&gt;: Freeze,</span>",1,["burn_tensor::tensor::ops::modules::base::MaxPool1dWithIndices"]],["impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/ops/struct.MaxPool2dBackward.html\" title=\"struct burn_tensor::ops::MaxPool2dBackward\">MaxPool2dBackward</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    &lt;B as <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"burn_tensor/backend/trait.Backend.html#associatedtype.TensorPrimitive\" title=\"type burn_tensor::backend::Backend::TensorPrimitive\">TensorPrimitive</a>&lt;4&gt;: Freeze,</span>",1,["burn_tensor::tensor::ops::modules::base::MaxPool2dBackward"]],["impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/ops/struct.MaxPool2dWithIndices.html\" title=\"struct burn_tensor::ops::MaxPool2dWithIndices\">MaxPool2dWithIndices</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    &lt;B as <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"burn_tensor/backend/trait.Backend.html#associatedtype.IntTensorPrimitive\" title=\"type burn_tensor::backend::Backend::IntTensorPrimitive\">IntTensorPrimitive</a>&lt;4&gt;: Freeze,\n    &lt;B as <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"burn_tensor/backend/trait.Backend.html#associatedtype.TensorPrimitive\" title=\"type burn_tensor::backend::Backend::TensorPrimitive\">TensorPrimitive</a>&lt;4&gt;: Freeze,</span>",1,["burn_tensor::tensor::ops::modules::base::MaxPool2dWithIndices"]],["impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/ops/struct.Conv1dBackward.html\" title=\"struct burn_tensor::ops::Conv1dBackward\">Conv1dBackward</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    &lt;B as <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"burn_tensor/backend/trait.Backend.html#associatedtype.TensorPrimitive\" title=\"type burn_tensor::backend::Backend::TensorPrimitive\">TensorPrimitive</a>&lt;1&gt;: Freeze,\n    &lt;B as <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"burn_tensor/backend/trait.Backend.html#associatedtype.TensorPrimitive\" title=\"type burn_tensor::backend::Backend::TensorPrimitive\">TensorPrimitive</a>&lt;3&gt;: Freeze,</span>",1,["burn_tensor::tensor::ops::modules::base::Conv1dBackward"]],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/ops/struct.ConvOptions.html\" title=\"struct burn_tensor::ops::ConvOptions\">ConvOptions</a>&lt;N&gt;",1,["burn_tensor::tensor::ops::modules::base::ConvOptions"]],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/ops/struct.ConvTransposeOptions.html\" title=\"struct burn_tensor::ops::ConvTransposeOptions\">ConvTransposeOptions</a>&lt;N&gt;",1,["burn_tensor::tensor::ops::modules::base::ConvTransposeOptions"]],["impl Freeze for <a class=\"struct\" href=\"burn_tensor/ops/struct.UnfoldOptions.html\" title=\"struct burn_tensor::ops::UnfoldOptions\">UnfoldOptions</a>",1,["burn_tensor::tensor::ops::modules::base::UnfoldOptions"]],["impl&lt;B, D&gt; Freeze for <a class=\"struct\" href=\"burn_tensor/struct.NamedTensor.html\" title=\"struct burn_tensor::NamedTensor\">NamedTensor</a>&lt;B, D&gt;<span class=\"where fmt-newline\">where\n    &lt;D as <a class=\"trait\" href=\"burn_tensor/trait.NamedDims.html\" title=\"trait burn_tensor::NamedDims\">NamedDims</a>&lt;B&gt;&gt;::<a class=\"associatedtype\" href=\"burn_tensor/trait.NamedDims.html#associatedtype.Tensor\" title=\"type burn_tensor::NamedDims::Tensor\">Tensor</a>: Freeze,</span>",1,["burn_tensor::tensor::named::base::NamedTensor"]],["impl Freeze for <a class=\"struct\" href=\"burn_tensor/benchmark/struct.BenchmarkResult.html\" title=\"struct burn_tensor::benchmark::BenchmarkResult\">BenchmarkResult</a>",1,["burn_tensor::benchmark::base::BenchmarkResult"]]],
"burn_wgpu":[["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/compute/struct.WorkGroup.html\" title=\"struct burn_wgpu::compute::WorkGroup\">WorkGroup</a>",1,["burn_wgpu::compute::kernel::WorkGroup"]],["impl&lt;K&gt; Freeze for <a class=\"struct\" href=\"burn_wgpu/compute/struct.DynamicKernel.html\" title=\"struct burn_wgpu::compute::DynamicKernel\">DynamicKernel</a>&lt;K&gt;<span class=\"where fmt-newline\">where\n    K: Freeze,</span>",1,["burn_wgpu::compute::kernel::DynamicKernel"]],["impl&lt;K&gt; Freeze for <a class=\"struct\" href=\"burn_wgpu/compute/struct.StaticKernel.html\" title=\"struct burn_wgpu::compute::StaticKernel\">StaticKernel</a>&lt;K&gt;",1,["burn_wgpu::compute::kernel::StaticKernel"]],["impl&lt;MM&gt; Freeze for <a class=\"struct\" href=\"burn_wgpu/compute/struct.WgpuServer.html\" title=\"struct burn_wgpu::compute::WgpuServer\">WgpuServer</a>&lt;MM&gt;<span class=\"where fmt-newline\">where\n    MM: Freeze,</span>",1,["burn_wgpu::compute::server::WgpuServer"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/compute/struct.WgpuStorage.html\" title=\"struct burn_wgpu::compute::WgpuStorage\">WgpuStorage</a>",1,["burn_wgpu::compute::storage::WgpuStorage"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/compute/struct.WgpuResource.html\" title=\"struct burn_wgpu::compute::WgpuResource\">WgpuResource</a>",1,["burn_wgpu::compute::storage::WgpuResource"]],["impl Freeze for <a class=\"enum\" href=\"burn_wgpu/compute/enum.WgpuResourceKind.html\" title=\"enum burn_wgpu::compute::WgpuResourceKind\">WgpuResourceKind</a>",1,["burn_wgpu::compute::storage::WgpuResourceKind"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.ContiguousRaw.html\" title=\"struct burn_wgpu::kernel::ContiguousRaw\">ContiguousRaw</a>",1,["burn_wgpu::kernel::base::ContiguousRaw"]],["impl&lt;K, E, I, const WORKGROUP_X_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>, const WORKGROUP_Y_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>, const WORKGROUP_Z_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.KernelSettings.html\" title=\"struct burn_wgpu::kernel::KernelSettings\">KernelSettings</a>&lt;K, E, I, WORKGROUP_X_SIZE, WORKGROUP_Y_SIZE, WORKGROUP_Z_SIZE&gt;",1,["burn_wgpu::kernel::base::KernelSettings"]],["impl&lt;K, E, I&gt; Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.DynamicKernelSettings.html\" title=\"struct burn_wgpu::kernel::DynamicKernelSettings\">DynamicKernelSettings</a>&lt;K, E, I&gt;",1,["burn_wgpu::kernel::base::DynamicKernelSettings"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.BinaryElemwiseRaw.html\" title=\"struct burn_wgpu::kernel::BinaryElemwiseRaw\">BinaryElemwiseRaw</a>",1,["burn_wgpu::kernel::binary_elemwise::BinaryElemwiseRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.BinaryElemwiseInplaceRaw.html\" title=\"struct burn_wgpu::kernel::BinaryElemwiseInplaceRaw\">BinaryElemwiseInplaceRaw</a>",1,["burn_wgpu::kernel::binary_elemwise::BinaryElemwiseInplaceRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.CastRaw.html\" title=\"struct burn_wgpu::kernel::CastRaw\">CastRaw</a>",1,["burn_wgpu::kernel::cast::CastRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.SourceTemplate.html\" title=\"struct burn_wgpu::kernel::SourceTemplate\">SourceTemplate</a>",1,["burn_wgpu::kernel::source::SourceTemplate"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.UnaryRaw.html\" title=\"struct burn_wgpu::kernel::UnaryRaw\">UnaryRaw</a>",1,["burn_wgpu::kernel::unary::UnaryRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.UnaryInplaceRaw.html\" title=\"struct burn_wgpu::kernel::UnaryInplaceRaw\">UnaryInplaceRaw</a>",1,["burn_wgpu::kernel::unary::UnaryInplaceRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.UnaryScalarRaw.html\" title=\"struct burn_wgpu::kernel::UnaryScalarRaw\">UnaryScalarRaw</a>",1,["burn_wgpu::kernel::unary_scalar::UnaryScalarRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/struct.UnaryScalarInplaceRaw.html\" title=\"struct burn_wgpu::kernel::UnaryScalarInplaceRaw\">UnaryScalarInplaceRaw</a>",1,["burn_wgpu::kernel::unary_scalar::UnaryScalarInplaceRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/conv/struct.Conv2d.html\" title=\"struct burn_wgpu::kernel::conv::Conv2d\">Conv2d</a>",1,["burn_wgpu::kernel::conv::conv2d::Conv2d"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/conv/struct.ConvTranspose2d.html\" title=\"struct burn_wgpu::kernel::conv::ConvTranspose2d\">ConvTranspose2d</a>",1,["burn_wgpu::kernel::conv::conv_transpose2d::ConvTranspose2d"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/matmul/struct.MatmulMemCoalescingRaw.html\" title=\"struct burn_wgpu::kernel::matmul::MatmulMemCoalescingRaw\">MatmulMemCoalescingRaw</a>",1,["burn_wgpu::kernel::matmul::mem_coalescing::MatmulMemCoalescingRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/matmul/struct.MatmulNaiveRaw.html\" title=\"struct burn_wgpu::kernel::matmul::MatmulNaiveRaw\">MatmulNaiveRaw</a>",1,["burn_wgpu::kernel::matmul::naive::MatmulNaiveRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/matmul/vec4_primitive/struct.MatmulTiling2Dvec4PrimitiveRaw.html\" title=\"struct burn_wgpu::kernel::matmul::vec4_primitive::MatmulTiling2Dvec4PrimitiveRaw\">MatmulTiling2Dvec4PrimitiveRaw</a>",1,["burn_wgpu::kernel::matmul::tiling2d::vec4_primitive::MatmulTiling2Dvec4PrimitiveRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/pool/struct.AvgPool2dRaw.html\" title=\"struct burn_wgpu::kernel::pool::AvgPool2dRaw\">AvgPool2dRaw</a>",1,["burn_wgpu::kernel::pool::avg_pool2d::AvgPool2dRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/pool/struct.AvgPool2dBackwardRaw.html\" title=\"struct burn_wgpu::kernel::pool::AvgPool2dBackwardRaw\">AvgPool2dBackwardRaw</a>",1,["burn_wgpu::kernel::pool::avg_pool2d::AvgPool2dBackwardRaw"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/pool/struct.MaxPool2d.html\" title=\"struct burn_wgpu::kernel::pool::MaxPool2d\">MaxPool2d</a>",1,["burn_wgpu::kernel::pool::max_pool2d::MaxPool2d"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/pool/struct.MaxPool2dWithIndicesBackward.html\" title=\"struct burn_wgpu::kernel::pool::MaxPool2dWithIndicesBackward\">MaxPool2dWithIndicesBackward</a>",1,["burn_wgpu::kernel::pool::max_pool2d::MaxPool2dWithIndicesBackward"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/kernel/pool/struct.MaxPool2dWithIndices.html\" title=\"struct burn_wgpu::kernel::pool::MaxPool2dWithIndices\">MaxPool2dWithIndices</a>",1,["burn_wgpu::kernel::pool::max_pool2d::MaxPool2dWithIndices"]],["impl&lt;E, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"burn_wgpu/tensor/struct.WgpuTensor.html\" title=\"struct burn_wgpu::tensor::WgpuTensor\">WgpuTensor</a>&lt;E, D&gt;",1,["burn_wgpu::tensor::base::WgpuTensor"]],["impl Freeze for <a class=\"enum\" href=\"burn_wgpu/enum.WgpuDevice.html\" title=\"enum burn_wgpu::WgpuDevice\">WgpuDevice</a>",1,["burn_wgpu::device::WgpuDevice"]],["impl&lt;G, F, I&gt; Freeze for <a class=\"struct\" href=\"burn_wgpu/struct.WgpuBackend.html\" title=\"struct burn_wgpu::WgpuBackend\">WgpuBackend</a>&lt;G, F, I&gt;",1,["burn_wgpu::backend::WgpuBackend"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/struct.Vulkan.html\" title=\"struct burn_wgpu::Vulkan\">Vulkan</a>",1,["burn_wgpu::graphics::Vulkan"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/struct.Metal.html\" title=\"struct burn_wgpu::Metal\">Metal</a>",1,["burn_wgpu::graphics::Metal"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/struct.OpenGl.html\" title=\"struct burn_wgpu::OpenGl\">OpenGl</a>",1,["burn_wgpu::graphics::OpenGl"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/struct.Dx11.html\" title=\"struct burn_wgpu::Dx11\">Dx11</a>",1,["burn_wgpu::graphics::Dx11"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/struct.Dx12.html\" title=\"struct burn_wgpu::Dx12\">Dx12</a>",1,["burn_wgpu::graphics::Dx12"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/struct.WebGpu.html\" title=\"struct burn_wgpu::WebGpu\">WebGpu</a>",1,["burn_wgpu::graphics::WebGpu"]],["impl Freeze for <a class=\"struct\" href=\"burn_wgpu/struct.AutoGraphicsApi.html\" title=\"struct burn_wgpu::AutoGraphicsApi\">AutoGraphicsApi</a>",1,["burn_wgpu::graphics::AutoGraphicsApi"]]],
"xtask":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"enum\" href=\"xtask/runchecks/enum.CheckType.html\" title=\"enum xtask::runchecks::CheckType\">CheckType</a>",1,["xtask::runchecks::CheckType"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"xtask/runchecks/struct.Params.html\" title=\"struct xtask::runchecks::Params\">Params</a>",1,["xtask::runchecks::Params"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"xtask/struct.Args.html\" title=\"struct xtask::Args\">Args</a>",1,["xtask::Args"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"enum\" href=\"xtask/enum.Command.html\" title=\"enum xtask::Command\">Command</a>",1,["xtask::Command"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()