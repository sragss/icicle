"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[411],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var i=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(8168),r=(n(6540),n(5680));n(1873);const a={},o="Vector Operations API",l={unversionedId:"icicle/rust-bindings/vec-ops",id:"icicle/rust-bindings/vec-ops",title:"Vector Operations API",description:"Our vector operations API which is part of icicle-cuda-runtime package, includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory.",source:"@site/docs/icicle/rust-bindings/vec-ops.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/vec-ops",permalink:"/icicle/rust-bindings/vec-ops",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/vec-ops.md",tags:[],version:"current",lastUpdatedBy:"Leon Hibnik",lastUpdatedAt:1715257400,formattedLastUpdatedAt:"5/9/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"ECNTT",permalink:"/icicle/rust-bindings/ecntt"},next:{title:"Keccak",permalink:"/icicle/rust-bindings/keccak"}},s={},c=[{value:"Examples",id:"examples",level:2},{value:"Addition of Scalars",id:"addition-of-scalars",level:3},{value:"Subtraction of Scalars",id:"subtraction-of-scalars",level:3},{value:"Multiplication of Scalars",id:"multiplication-of-scalars",level:3},{value:"Vector Operations Configuration",id:"vector-operations-configuration",level:2},{value:"<code>VecOpsConfig</code>",id:"vecopsconfig",level:3},{value:"Fields",id:"fields",level:4},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Vector Operations",id:"vector-operations",level:2},{value:"<code>VecOps</code> Trait",id:"vecops-trait",level:3},{value:"Methods",id:"methods",level:4},{value:"MatrixTranspose API Documentation",id:"matrixtranspose-api-documentation",level:2},{value:"Function",id:"function",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Example",id:"example",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"vector-operations-api"},"Vector Operations API"),(0,r.yg)("p",null,"Our vector operations API which is part of ",(0,r.yg)("inlineCode",{parentName:"p"},"icicle-cuda-runtime")," package, includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"addition-of-scalars"},"Addition of Scalars"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::vec_ops::{add_scalars};\n\nlet test_size = 1 << 18;\n\nlet a: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet b: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet mut result: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::zero(); test_size]);\n\nlet cfg = VecOpsConfig::default();\nadd_scalars(&a, &b, &mut result, &cfg).unwrap();\n")),(0,r.yg)("h3",{id:"subtraction-of-scalars"},"Subtraction of Scalars"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::vec_ops::{sub_scalars};\n\nlet test_size = 1 << 18;\n\nlet a: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet b: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet mut result: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::zero(); test_size]);\n\nlet cfg = VecOpsConfig::default();\nsub_scalars(&a, &b, &mut result, &cfg).unwrap();\n")),(0,r.yg)("h3",{id:"multiplication-of-scalars"},"Multiplication of Scalars"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::vec_ops::{mul_scalars};\n\nlet test_size = 1 << 18;\n\nlet a: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet ones: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::one(); test_size]);\nlet mut result: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::zero(); test_size]);\n\nlet cfg = VecOpsConfig::default();\nmul_scalars(&a, &ones, &mut result, &cfg).unwrap();\n")),(0,r.yg)("h2",{id:"vector-operations-configuration"},"Vector Operations Configuration"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"VecOpsConfig")," struct encapsulates the settings for vector operations, including device context and operation modes."),(0,r.yg)("h3",{id:"vecopsconfig"},(0,r.yg)("inlineCode",{parentName:"h3"},"VecOpsConfig")),(0,r.yg)("p",null,"Defines configuration parameters for vector operations."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"pub struct VecOpsConfig<'a> {\n    pub ctx: DeviceContext<'a>,\n    is_a_on_device: bool,\n    is_b_on_device: bool,\n    is_result_on_device: bool,\n    pub is_async: bool,\n}\n")),(0,r.yg)("h4",{id:"fields"},"Fields"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"ctx: DeviceContext<'a>")),": Specifies the device context for the operation, including the device ID and memory pool."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"is_a_on_device")),": Indicates if the first operand vector resides in device memory."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"is_b_on_device")),": Indicates if the second operand vector resides in device memory."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"is_result_on_device")),": Specifies if the result vector should be stored in device memory."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"is_async")),": Enables asynchronous operation. If ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", operations are non-blocking; otherwise, they block the current thread.")),(0,r.yg)("h3",{id:"default-configuration"},"Default Configuration"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"VecOpsConfig")," can be initialized with default settings tailored for a specific device:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"let cfg = VecOpsConfig::default();\n")),(0,r.yg)("p",null,"These are the default settings."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"impl<'a> Default for VecOpsConfig<'a> {\n    fn default() -> Self {\n        Self::default_for_device(DEFAULT_DEVICE_ID)\n    }\n}\n\nimpl<'a> VecOpsConfig<'a> {\n    pub fn default_for_device(device_id: usize) -> Self {\n        VecOpsConfig {\n            ctx: DeviceContext::default_for_device(device_id),\n            is_a_on_device: false,\n            is_b_on_device: false,\n            is_result_on_device: false,\n            is_async: false,\n        }\n    }\n}\n")),(0,r.yg)("h2",{id:"vector-operations"},"Vector Operations"),(0,r.yg)("p",null,"Vector operations are implemented through the ",(0,r.yg)("inlineCode",{parentName:"p"},"VecOps")," trait, providing methods for addition, subtraction, and multiplication of vectors."),(0,r.yg)("h3",{id:"vecops-trait"},(0,r.yg)("inlineCode",{parentName:"h3"},"VecOps")," Trait"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"pub trait VecOps<F> {\n    fn add(\n        a: &HostOrDeviceSlice<F>,\n        b: &HostOrDeviceSlice<F>,\n        result: &mut HostOrDeviceSlice<F>,\n        cfg: &VecOpsConfig,\n    ) -> IcicleResult<()>;\n\n    fn sub(\n        a: &HostOrDeviceSlice<F>,\n        b: &HostOrDeviceSlice<F>,\n        result: &mut HostOrDeviceSlice<F>,\n        cfg: &VecOpsConfig,\n    ) -> IcicleResult<()>;\n\n    fn mul(\n        a: &HostOrDeviceSlice<F>,\n        b: &HostOrDeviceSlice<F>,\n        result: &mut HostOrDeviceSlice<F>,\n        cfg: &VecOpsConfig,\n    ) -> IcicleResult<()>;\n}\n")),(0,r.yg)("h4",{id:"methods"},"Methods"),(0,r.yg)("p",null,"All operations are element-wise operations, and the results placed into the ",(0,r.yg)("inlineCode",{parentName:"p"},"result")," param. These operations are not in place."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"add")),": Computes the element-wise sum of two vectors."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"sub")),": Computes the element-wise difference between two vectors."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"mul")),": Performs element-wise multiplication of two vectors.")),(0,r.yg)("h2",{id:"matrixtranspose-api-documentation"},"MatrixTranspose API Documentation"),(0,r.yg)("p",null,"This section describes the functionality of the ",(0,r.yg)("inlineCode",{parentName:"p"},"TransposeMatrix")," function used for matrix transposition."),(0,r.yg)("p",null,"The function takes a matrix represented as a 1D slice and transposes it, storing the result in another 1D slice."),(0,r.yg)("h3",{id:"function"},"Function"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn transpose_matrix<F>(\n    input: &HostOrDeviceSlice<F>,\n    row_size: u32,\n    column_size: u32,\n    output: &mut HostOrDeviceSlice<F>,\n    ctx: &DeviceContext,\n    on_device: bool,\n    is_async: bool,\n) -> IcicleResult<()>\nwhere\n    F: FieldImpl,\n    <F as FieldImpl>::Config: VecOps<F>\n")),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"input")),": A slice representing the input matrix. The slice can be stored on either the host or the device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"row_size")),": The number of rows in the input matrix."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"column_size")),": The number of columns in the input matrix."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"output")),": A mutable slice to store the transposed matrix. The slice can be stored on either the host or the device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"ctx")),": A reference to the ",(0,r.yg)("inlineCode",{parentName:"li"},"DeviceContext"),", which provides information about the device where the operation will be performed."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"on_device")),": A boolean flag indicating whether the inputs and outputs are on the device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"is_async")),": A boolean flag indicating whether the operation should be performed asynchronously.")),(0,r.yg)("h3",{id:"return-value"},"Return Value"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Ok(())")," if the operation is successful, or an ",(0,r.yg)("inlineCode",{parentName:"p"},"IcicleResult")," error otherwise."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use icicle::HostOrDeviceSlice;\nuse icicle::DeviceContext;\nuse icicle::FieldImpl;\nuse icicle::VecOps;\n\nlet input: HostOrDeviceSlice<i32> = // ...;\nlet mut output: HostOrDeviceSlice<i32> = // ...;\nlet ctx: DeviceContext = // ...;\n\ntranspose_matrix(&input, 5, 4, &mut output, &ctx, true, false)\n    .expect("Failed to transpose matrix");\n')),(0,r.yg)("p",null,"The function takes a matrix represented as a 1D slice, transposes it, and stores the result in another 1D slice. The input and output slices can be stored on either the host or the device, and the operation can be performed synchronously or asynchronously."),(0,r.yg)("p",null,"The function is generic and can work with any type ",(0,r.yg)("inlineCode",{parentName:"p"},"F")," that implements the ",(0,r.yg)("inlineCode",{parentName:"p"},"FieldImpl")," trait. The ",(0,r.yg)("inlineCode",{parentName:"p"},"<F as FieldImpl>::Config")," type must also implement the ",(0,r.yg)("inlineCode",{parentName:"p"},"VecOps<F>")," trait, which provides the ",(0,r.yg)("inlineCode",{parentName:"p"},"transpose")," method used to perform the actual transposition."),(0,r.yg)("p",null,"The function returns an ",(0,r.yg)("inlineCode",{parentName:"p"},"IcicleResult<()>"),", indicating whether the operation was successful or not."))}d.isMDXComponent=!0},1873:(e,t,n)=>{n(6540)}}]);