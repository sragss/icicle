"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[705],{5680:(e,i,n)=>{n.d(i,{xA:()=>d,yg:()=>f});var a=n(6540);function o(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function t(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?t(Object(n),!0).forEach((function(i){o(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function r(e,i){if(null==e)return{};var n,a,o=function(e,i){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],i.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var i=a.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):l(l({},i),e)),n},d=function(e){var i=c(e.components);return a.createElement(s.Provider,{value:i},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},p=a.forwardRef((function(e,i){var n=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||t;return n?a.createElement(f,l(l({ref:i},d),{},{components:n})):a.createElement(f,l({ref:i},d))}));function f(e,i){var n=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var t=n.length,l=new Array(t);l[0]=p;var r={};for(var s in i)hasOwnProperty.call(i,s)&&(r[s]=i[s]);r.originalType=e,r[m]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<t;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6307:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var a=n(8168),o=(n(6540),n(5680));n(1873);const t={},l="Rust FFI Bindings for Univariate Polynomial",r={unversionedId:"icicle/rust-bindings/polynomials",id:"icicle/rust-bindings/polynomials",title:"Rust FFI Bindings for Univariate Polynomial",description:"Please refer to the Polynomials overview page for a deep overview. This section is a brief description of the Rust FFI bindings.",source:"@site/docs/icicle/rust-bindings/polynomials.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/polynomials",permalink:"/icicle/rust-bindings/polynomials",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/polynomials.md",tags:[],version:"current",lastUpdatedBy:"Leon Hibnik",lastUpdatedAt:1715257400,formattedLastUpdatedAt:"5/9/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Multi GPU APIs",permalink:"/icicle/rust-bindings/multi-gpu"},next:{title:"Run ICICLE on Google Colab",permalink:"/icicle/colab-instructions"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Initialization Requirements",id:"initialization-requirements",level:2},{value:"Core Trait: <code>UnivariatePolynomial</code>",id:"core-trait-univariatepolynomial",level:2},{value:"Trait Definition",id:"trait-definition",level:3},{value:"<code>DensePolynomial</code> Struct",id:"densepolynomial-struct",level:2},{value:"Traits implementation and methods",id:"traits-implementation-and-methods",level:3},{value:"<code>Drop</code>",id:"drop",level:4},{value:"<code>Clone</code>",id:"clone",level:4},{value:"Operator Overloading: <code>Add</code>, <code>Sub</code>, <code>Mul</code>, <code>Rem</code>, <code>Div</code>",id:"operator-overloading-add-sub-mul-rem-div",level:4},{value:"Key Methods",id:"key-methods",level:4},{value:"Flexible Memory Handling With <code>HostOrDeviceSlice</code>",id:"flexible-memory-handling-with-hostordeviceslice",level:2},{value:"Overview of <code>HostOrDeviceSlice</code>",id:"overview-of-hostordeviceslice",level:3},{value:"Usage in API Functions",id:"usage-in-api-functions",level:3},{value:"Usage",id:"usage",level:2},{value:"Initialization and Basic Operations",id:"initialization-and-basic-operations",level:3},{value:"Creation",id:"creation",level:3},{value:"Arithmetic Operations",id:"arithmetic-operations",level:3},{value:"Division and Remainder",id:"division-and-remainder",level:3},{value:"Monomial Operations",id:"monomial-operations",level:3},{value:"Slicing",id:"slicing",level:3},{value:"Evaluate",id:"evaluate",level:3},{value:"Read coefficients",id:"read-coefficients",level:3},{value:"Polynomial Degree",id:"polynomial-degree",level:3},{value:"Memory Management: Views (rust slices)",id:"memory-management-views-rust-slices",level:3}],d={toc:c},m="wrapper";function u(e){let{components:i,...n}=e;return(0,o.yg)(m,(0,a.A)({},d,n,{components:i,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"rust-ffi-bindings-for-univariate-polynomial"},"Rust FFI Bindings for Univariate Polynomial"),(0,o.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"Please refer to the Polynomials overview page for a deep overview. This section is a brief description of the Rust FFI bindings."))),(0,o.yg)("p",null,"This documentation is designed to provide developers with a clear understanding of how to utilize the Rust bindings for polynomial operations efficiently and effectively, leveraging the robust capabilities of both Rust and C++ in their applications."),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,'The Rust FFI bindings for the Univariate Polynomial serve as a "shallow wrapper" around the underlying C++ implementation. These bindings provide a straightforward Rust interface that directly calls functions from a C++ library, effectively bridging Rust and C++ operations. The Rust layer handles simple interface translations without delving into complex logic or data structures, which are managed on the C++ side. This design ensures efficient data handling, memory management, and execution of polynomial operations directly via C++.\nCurrently, these bindings are tailored specifically for polynomials where the coefficients, domain, and images are represented as scalar fields.'),(0,o.yg)("h2",{id:"initialization-requirements"},"Initialization Requirements"),(0,o.yg)("p",null,"Before utilizing any functions from the polynomial API, it is mandatory to initialize the appropriate polynomial backend (e.g., CUDA). Additionally, the NTT (Number Theoretic Transform) domain must also be initialized, as the CUDA backend relies on this for certain operations. Failing to properly initialize these components can result in errors."),(0,o.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},(0,o.yg)("strong",{parentName:"p"},"Field-Specific Initialization Requirement")),(0,o.yg)("p",{parentName:"div"},"The ICICLE library is structured such that each field or curve has its dedicated library implementation. As a result, initialization must be performed individually for each field or curve to ensure the correct setup and functionality of the library."))),(0,o.yg)("h2",{id:"core-trait-univariatepolynomial"},"Core Trait: ",(0,o.yg)("inlineCode",{parentName:"h2"},"UnivariatePolynomial")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"UnivariatePolynomial")," trait encapsulates the essential functionalities required for managing univariate polynomials in the Rust ecosystem. This trait standardizes the operations that can be performed on polynomials, regardless of the underlying implementation details. It allows for a unified approach to polynomial manipulation, providing a suite of methods that are fundamental to polynomial arithmetic."),(0,o.yg)("h3",{id:"trait-definition"},"Trait Definition"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"pub trait UnivariatePolynomial\nwhere\n    Self::Field: FieldImpl,\n    Self::FieldConfig: FieldConfig,\n{\n    type Field: FieldImpl;\n    type FieldConfig: FieldConfig;\n\n    // Methods to create polynomials from coefficients or roots-of-unity evaluations.\n    fn from_coeffs<S: HostOrDeviceSlice<Self::Field> + ?Sized>(coeffs: &S, size: usize) -> Self;\n    fn from_rou_evals<S: HostOrDeviceSlice<Self::Field> + ?Sized>(evals: &S, size: usize) -> Self;\n\n    // Method to divide this polynomial by another, returning quotient and remainder.\n    fn divide(&self, denominator: &Self) -> (Self, Self) where Self: Sized;\n\n    // Method to divide this polynomial by the vanishing polynomial 'X^N-1'.\n    fn div_by_vanishing(&self, degree: u64) -> Self;\n\n    // Methods to add or subtract a monomial in-place.\n    fn add_monomial_inplace(&mut self, monomial_coeff: &Self::Field, monomial: u64);\n    fn sub_monomial_inplace(&mut self, monomial_coeff: &Self::Field, monomial: u64);\n\n    // Method to slice the polynomial, creating a sub-polynomial.\n    fn slice(&self, offset: u64, stride: u64, size: u64) -> Self;\n\n    // Methods to return new polynomials containing only the even or odd terms.\n    fn even(&self) -> Self;\n    fn odd(&self) -> Self;\n\n    // Method to evaluate the polynomial at a given domain point.\n    fn eval(&self, x: &Self::Field) -> Self::Field;\n\n    // Method to evaluate the polynomial over a domain and store the results.\n    fn eval_on_domain<D: HostOrDeviceSlice<Self::Field> + ?Sized, E: HostOrDeviceSlice<Self::Field> + ?Sized>(\n        &self,\n        domain: &D,\n        evals: &mut E,\n    );\n\n    // Method to retrieve a coefficient at a specific index.\n    fn get_coeff(&self, idx: u64) -> Self::Field;\n\n    // Method to copy coefficients into a provided slice.\n    fn copy_coeffs<S: HostOrDeviceSlice<Self::Field> + ?Sized>(&self, start_idx: u64, coeffs: &mut S);\n\n    // Method to get the degree of the polynomial.\n    fn degree(&self) -> i64;\n}\n")),(0,o.yg)("h2",{id:"densepolynomial-struct"},(0,o.yg)("inlineCode",{parentName:"h2"},"DensePolynomial")," Struct"),(0,o.yg)("p",null,"The DensePolynomial struct represents a dense univariate polynomial in Rust, leveraging a handle to manage its underlying memory within the CUDA device context. This struct acts as a high-level abstraction over complex C++ memory management practices, facilitating the integration of high-performance polynomial operations through Rust's Foreign Function Interface (FFI) bindings."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"pub struct DensePolynomial {\n    handle: PolynomialHandle,\n}\n")),(0,o.yg)("h3",{id:"traits-implementation-and-methods"},"Traits implementation and methods"),(0,o.yg)("h4",{id:"drop"},(0,o.yg)("inlineCode",{parentName:"h4"},"Drop")),(0,o.yg)("p",null,"Ensures proper resource management by releasing the CUDA memory when a DensePolynomial instance goes out of scope. This prevents memory leaks and ensures that resources are cleaned up correctly, adhering to Rust's RAII (Resource Acquisition Is Initialization) principles."),(0,o.yg)("h4",{id:"clone"},(0,o.yg)("inlineCode",{parentName:"h4"},"Clone")),(0,o.yg)("p",null,"Provides a way to create a new instance of a DensePolynomial with its own unique handle, thus duplicating the polynomial data in the CUDA context. Cloning is essential since the DensePolynomial manages external resources, which cannot be safely shared across instances without explicit duplication."),(0,o.yg)("h4",{id:"operator-overloading-add-sub-mul-rem-div"},"Operator Overloading: ",(0,o.yg)("inlineCode",{parentName:"h4"},"Add"),", ",(0,o.yg)("inlineCode",{parentName:"h4"},"Sub"),", ",(0,o.yg)("inlineCode",{parentName:"h4"},"Mul"),", ",(0,o.yg)("inlineCode",{parentName:"h4"},"Rem"),", ",(0,o.yg)("inlineCode",{parentName:"h4"},"Div")),(0,o.yg)("p",null,"These traits are implemented for references to DensePolynomial (i.e., &DensePolynomial), enabling natural mathematical operations such as addition (+), subtraction (-), multiplication (*), division (/), and remainder (%). This syntactic convenience allows users to compose complex polynomial expressions in a way that is both readable and expressive."),(0,o.yg)("h4",{id:"key-methods"},"Key Methods"),(0,o.yg)("p",null,"In addition to the traits, the following methods are implemented:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"impl DensePolynomial {\n    pub fn init_cuda_backend() -> bool {...}\n    // Returns a mutable slice of the polynomial coefficients on the device\n    pub fn coeffs_mut_slice(&mut self) -> &mut DeviceSlice<F> {...}\n}      \n")),(0,o.yg)("h2",{id:"flexible-memory-handling-with-hostordeviceslice"},"Flexible Memory Handling With ",(0,o.yg)("inlineCode",{parentName:"h2"},"HostOrDeviceSlice")),(0,o.yg)("p",null,"The DensePolynomial API is designed to accommodate a wide range of computational environments by supporting both host and device memory through the ",(0,o.yg)("inlineCode",{parentName:"p"},"HostOrDeviceSlice")," trait. This approach ensures that polynomial operations can be seamlessly executed regardless of where the data resides, making the API highly adaptable and efficient for various hardware configurations."),(0,o.yg)("h3",{id:"overview-of-hostordeviceslice"},"Overview of ",(0,o.yg)("inlineCode",{parentName:"h3"},"HostOrDeviceSlice")),(0,o.yg)("p",null,"The HostOrDeviceSlice is a Rust trait that abstracts over slices of memory that can either be on the host (CPU) or the device (GPU), as managed by CUDA. This abstraction is crucial for high-performance computing scenarios where data might need to be moved between different memory spaces depending on the operations being performed and the specific hardware capabilities available."),(0,o.yg)("h3",{id:"usage-in-api-functions"},"Usage in API Functions"),(0,o.yg)("p",null,"Functions within the DensePolynomial API that deal with polynomial coefficients or evaluations use the HostOrDeviceSlice trait to accept inputs. This design allows the functions to be agnostic of the actual memory location of the data, whether it's in standard system RAM accessible by the CPU or in GPU memory accessible by CUDA cores."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"// Assume `coeffs` could either be in host memory or CUDA device memory\nlet coeffs: DeviceSlice<F> = DeviceVec::<F>::cuda_malloc(coeffs_len).unwrap();\nlet p_from_coeffs = PolynomialBabyBear::from_coeffs(&coeffs, coeffs.len());\n\n// Similarly for evaluations from roots of unity\nlet evals: HostSlice<F> = HostSlice::from_slice(&host_memory_evals);\nlet p_from_evals = PolynomialBabyBear::from_rou_evals(&evals, evals.len());\n\n// Same applies for any API that accepts HostOrDeviceSlice\n")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("p",null,"This section outlines practical examples demonstrating how to utilize the ",(0,o.yg)("inlineCode",{parentName:"p"},"DensePolynomial")," Rust API. The API is flexible, supporting multiple scalar fields. Below are examples showing how to use polynomials defined over different fields and perform a variety of operations."),(0,o.yg)("h3",{id:"initialization-and-basic-operations"},"Initialization and Basic Operations"),(0,o.yg)("p",null,"First, choose the appropriate field implementation for your polynomial operations, initializing the CUDA backend if necessary"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"use icicle_babybear::polynomials::DensePolynomial as PolynomialBabyBear;\n\n// Initialize the CUDA backend for polynomial operations\nPolynomialBabyBear::init_cuda_backend();\nlet f = PolynomialBabyBear::from_coeffs(...);\n\n// now use f by calling the implemented traits\n\n// For operations over another field, such as BN254\nuse icicle_bn254::polynomials::DensePolynomial as PolynomialBn254;\n// Use PolynomialBn254 similarly\n")),(0,o.yg)("h3",{id:"creation"},"Creation"),(0,o.yg)("p",null,"Polynomials can be created from coefficients or evaluations:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"let coeffs = ...;\nlet p_from_coeffs = PolynomialBabyBear::from_coeffs(HostSlice::from_slice(&coeffs), size);\n\nlet evals = ...;\nlet p_from_evals = PolynomialBabyBear::from_rou_evals(HostSlice::from_slice(&evals), size);\n\n")),(0,o.yg)("h3",{id:"arithmetic-operations"},"Arithmetic Operations"),(0,o.yg)("p",null,"Utilize overloaded operators for intuitive mathematical expressions:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"let add = &f + &g;  // Addition\nlet sub = &f - &g;  // Subtraction\nlet mul = &f * &g;  // Multiplication\nlet mul_scalar = &f * &scalar;  // Scalar multiplication\n")),(0,o.yg)("h3",{id:"division-and-remainder"},"Division and Remainder"),(0,o.yg)("p",null,"Compute quotient and remainder or perform division by a vanishing polynomial:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"let (q, r) = f.divide(&g);  // Compute both quotient and remainder\nlet q = &f / &g;  // Quotient\nlet r = &f % &g;  // Remainder\n\nlet h = f.div_by_vanishing(N);  // Division by V(x) = X^N - 1\n\n")),(0,o.yg)("h3",{id:"monomial-operations"},"Monomial Operations"),(0,o.yg)("p",null,"Add or subtract monomials in-place for efficient polynomial manipulation:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"f.add_monomial_inplace(&three, 1 /*monmoial*/); // Adds 3*x to f\nf.sub_monomial_inplace(&one, 0 /*monmoial*/);   // Subtracts 1 from f\n")),(0,o.yg)("h3",{id:"slicing"},"Slicing"),(0,o.yg)("p",null,"Extract specific components:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"let even = f.even();  // Polynomial of even-indexed terms\nlet odd = f.odd();    // Polynomial of odd-indexed terms\nlet arbitrary_slice = f.slice(offset, stride, size);\n")),(0,o.yg)("h3",{id:"evaluate"},"Evaluate"),(0,o.yg)("p",null,"Evaluate the polynoomial:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"let x = rand();  // Random field element\nlet f_x = f.eval(&x);  // Evaluate f at x\n\n// Evaluate on a predefined domain\nlet domain = [one, two, three];\nlet mut host_evals = vec![ScalarField::zero(); domain.len()];\nf.eval_on_domain(HostSlice::from_slice(&domain), HostSlice::from_mut_slice(&mut host_evals));\n")),(0,o.yg)("h3",{id:"read-coefficients"},"Read coefficients"),(0,o.yg)("p",null,"Read or copy polynomial coefficients for further processing:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"let x_squared_coeff = f.get_coeff(2);  // Coefficient of x^2\n\n// Copy coefficients to a device-specific memory space\nlet mut device_mem = DeviceVec::<Field>::cuda_malloc(coeffs.len()).unwrap();\nf.copy_coeffs(0, &mut device_mem[..]);\n")),(0,o.yg)("h3",{id:"polynomial-degree"},"Polynomial Degree"),(0,o.yg)("p",null,"Determine the highest power of the variable with a non-zero coefficient:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"let deg = f.degree();  // Degree of the polynomial\n")),(0,o.yg)("h3",{id:"memory-management-views-rust-slices"},"Memory Management: Views (rust slices)"),(0,o.yg)("p",null,"Rust enforces correct usage of views at compile time, eliminating the need for runtime checks:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"let mut f = Poly::from_coeffs(HostSlice::from_slice(&coeffs), size);\n\n// Obtain a mutable slice of coefficients as a DeviceSlice\nlet coeffs_slice_dev = f.coeffs_mut_slice();\n\n// Operations on f are restricted here due to mutable borrow of coeffs_slice_dev\n\n// Compute evaluations or perform other operations directly using the slice\n// example: evaluate f on a coset of roots-of-unity. Computing from GPU to HOST/GPU\nlet mut config: NTTConfig<'_, F> = NTTConfig::default();\nconfig.coset_gen = /*some coset gen*/;\nlet mut coset_evals = vec![F::zero(); coeffs_slice_dev.len()];\nntt(\n    coeffs_slice_dev,\n    NTTDir::kForward,\n    &config,\n    HostSlice::from_mut_slice(&mut coset_evals),\n)\n.unwrap();\n\n// now can f can be borrowed once again\n")))}u.isMDXComponent=!0},1873:(e,i,n)=>{n(6540)}}]);