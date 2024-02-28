"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[538],{5680:(e,i,n)=>{n.d(i,{xA:()=>u,yg:()=>m});var a=n(6540);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function o(e,i){if(null==e)return{};var n,a,t=function(e,i){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),c=function(e){var i=a.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):l(l({},i),e)),n},u=function(e){var i=c(e.components);return a.createElement(s.Provider,{value:i},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},d=a.forwardRef((function(e,i){var n=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=t,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||r;return n?a.createElement(m,l(l({ref:i},u),{},{components:n})):a.createElement(m,l({ref:i},u))}));function m(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in i)hasOwnProperty.call(i,s)&&(o[s]=i[s]);o.originalType=e,o[p]="string"==typeof e?e:t,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8250:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(8168),t=(n(6540),n(5680));n(1873);const r={},l="Getting started with ICICLE",o={unversionedId:"icicle/introduction",id:"icicle/introduction",title:"Getting started with ICICLE",description:"This guide is oriented towards developers who want to start writing code with the ICICLE libraries. If you just want to run your existing ZK circuits on GPU refer to this guide please.",source:"@site/docs/icicle/introduction.md",sourceDirName:"icicle",slug:"/icicle/introduction",permalink:"/icicle/icicle/introduction",editUrl:"https://github.com/ingonyama-zk/developer-docs/tree/main/docs/icicle/introduction.md",tags:[],version:"current",lastUpdatedBy:"ImmanuelSegol",lastUpdatedAt:1709134653,formattedLastUpdatedAt:"2/28/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"What is ICICLE?",permalink:"/icicle/icicle/overview"},next:{title:"ICICLE integrated provers",permalink:"/icicle/icicle/integrations"}},s={},c=[{value:"ICICLE repository overview",id:"icicle-repository-overview",level:2},{value:"ICICLE Core",id:"icicle-core",level:3},{value:"ICICLE Rust and Golang bindings",id:"icicle-rust-and-golang-bindings",level:3},{value:"Running ICICLE",id:"running-icicle",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Optional Prerequisites",id:"optional-prerequisites",level:4},{value:"Setting up ICICLE and running tests",id:"setting-up-icicle-and-running-tests",level:3},{value:"Setting up our environment",id:"setting-up-our-environment",level:4},{value:"ICICLE Core",id:"icicle-core-1",level:4},{value:"ICICLE Rust",id:"icicle-rust",level:4},{value:"ICICLE Golang",id:"icicle-golang",level:4},{value:"Running ICICLE examples",id:"running-icicle-examples",level:3},{value:"Writing new bindings for ICICLE",id:"writing-new-bindings-for-icicle",level:2},{value:"ICICLE Adapters",id:"icicle-adapters",level:3}],u={toc:c},p="wrapper";function g(e){let{components:i,...r}=e;return(0,t.yg)(p,(0,a.A)({},u,r,{components:i,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"getting-started-with-icicle"},"Getting started with ICICLE"),(0,t.yg)("p",null,"This guide is oriented towards developers who want to start writing code with the ICICLE libraries. If you just want to run your existing ZK circuits on GPU refer to ",(0,t.yg)("a",{parentName:"p",href:"/icicle/icicle/integrations#using-icicle-integrations"},"this guide")," please."),(0,t.yg)("h2",{id:"icicle-repository-overview"},"ICICLE repository overview"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"ICICLE API overview",src:n(1611).A,width:"1932",height:"996"})),(0,t.yg)("p",null,"The diagram above displays the general architecture of ICICLE and the API layers that exist. The CUDA API, which we also call ICICLE Core, is the lowest level and is comprised of CUDA kernels which implement all primitives such as MSM as well as C++ wrappers which expose these methods for different curves."),(0,t.yg)("p",null,"ICICLE Core compiles into a static library. This library can be used with our official Golang and Rust wrappers or you can implement a wrapper for it in any language."),(0,t.yg)("p",null,"Based on this dependency architecture, the ICICLE repository has three main sections, each of which is independent from the other."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"ICICLE core"),(0,t.yg)("li",{parentName:"ul"},"ICICLE Rust bindings"),(0,t.yg)("li",{parentName:"ul"},"ICICLE Golang bindings")),(0,t.yg)("h3",{id:"icicle-core"},"ICICLE Core"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle"},"ICICLE core")," contains all the low level CUDA code implementing primitives such as ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/primitives"},"points")," and ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/appUtils/msm"},"MSM"),". There also exists higher level C++ wrappers to expose the low level CUDA primitives (",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/c1a32a9879a7612916e05aa3098f76144de4109e/icicle/appUtils/msm/msm.cu#L1"},"example"),")."),(0,t.yg)("p",null,"ICICLE Core would typically be compiled into a static library and used in a third party language such as Rust or Golang."),(0,t.yg)("h3",{id:"icicle-rust-and-golang-bindings"},"ICICLE Rust and Golang bindings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust"},"ICICLE Rust bindings")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/ingonyama-zk/icicle/tree/main/goicicle"},"ICICLE Golang bindings"))),(0,t.yg)("p",null,"These bindings allow you to easily use ICICLE in a Rust or Golang project. Setting up Golang bindings requires a bit of extra steps compared to the Rust bindings which utilize the ",(0,t.yg)("inlineCode",{parentName:"p"},"cargo build")," tool."),(0,t.yg)("h2",{id:"running-icicle"},"Running ICICLE"),(0,t.yg)("p",null,"This guide assumes that you have a Linux or Windows machine with an Nvidia GPU installed. If you don't have access to an Nvidia GPU you can access one for free on ",(0,t.yg)("a",{parentName:"p",href:"https://colab.google/"},"Google Colab"),"."),(0,t.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"NVCC (version 12.0 or newer)"),(0,t.yg)("li",{parentName:"ul"},"cmake 3.18 and above"),(0,t.yg)("li",{parentName:"ul"},"GCC - version 9 or newer is recommended."),(0,t.yg)("li",{parentName:"ul"},"Any Nvidia GPU"),(0,t.yg)("li",{parentName:"ul"},"Linux or Windows operating system.")),(0,t.yg)("h4",{id:"optional-prerequisites"},"Optional Prerequisites"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Docker, latest version."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/index.html"},"NVIDIA Container Toolkit"))),(0,t.yg)("p",null,"If you don't wish to install these prerequisites you can follow this tutorial using a ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/Dockerfile"},"ZK-Container")," (docker container). To learn more about using ZK-Containers ",(0,t.yg)("a",{parentName:"p",href:"/icicle/ZKContainers"},"read this"),"."),(0,t.yg)("h3",{id:"setting-up-icicle-and-running-tests"},"Setting up ICICLE and running tests"),(0,t.yg)("p",null,"The objective of this guide is to make sure you can run the ICICLE Core, Rust and Golang tests. Achieving this will ensure you know how to setup ICICLE and run a ICICLE program. For simplicity, we will be using the ICICLE docker container as our environment, however, you may install the prerequisites on your machine and follow the same commands in your terminal."),(0,t.yg)("h4",{id:"setting-up-our-environment"},"Setting up our environment"),(0,t.yg)("p",null,"Lets begin by cloning the ICICLE repository:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ingonyama-zk/icicle\n")),(0,t.yg)("p",null,"We will proceed to build the docker image ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/Dockerfile"},"found here"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"docker build -t icicle-demo .\ndocker run -it --runtime=nvidia --gpus all --name icicle_container icicle-demo\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"-it")," runs the container in interactive mode with a terminal."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"--gpus all")," Allocate all available GPUs to the container. You can also specify which GPUs to use if you don't want to allocate all."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"--runtime=nvidia")," Use the NVIDIA runtime, necessary for GPU support.")),(0,t.yg)("p",null,"To read more about these settings reference this ",(0,t.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/nvidia-container-runtime"},"article"),"."),(0,t.yg)("p",null,"If you accidentally close your terminal and want to reconnect just call:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"docker exec -it icicle_container bash\n")),(0,t.yg)("p",null,"Lets make sure that we have the correct CUDA version before proceeding"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"nvcc --version\n")),(0,t.yg)("p",null,"You should see something like this"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"nvcc: NVIDIA (R) Cuda compiler driver\nCopyright (c) 2005-2023 NVIDIA Corporation\nBuilt on Tue_Aug_15_22:02:13_PDT_2023\nCuda compilation tools, release 12.2, V12.2.140\nBuild cuda_12.2.r12.2/compiler.33191640_0\n")),(0,t.yg)("p",null,"Make sure the release version is at least 12.0."),(0,t.yg)("h4",{id:"icicle-core-1"},"ICICLE Core"),(0,t.yg)("p",null,"ICICLE Core is found under ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle"},(0,t.yg)("inlineCode",{parentName:"a"},"<project_root>/icicle")),". To build and run the tests first:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"cd icicle\n")),(0,t.yg)("p",null,"We are going to compile ICICLE for a specific curve"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"mkdir -p build\ncmake -S . -B build -DCURVE=bn254 -DBUILD_TESTS=ON\ncmake --build build\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-DBUILD_TESTS=ON")," compiles the tests, without this flag ",(0,t.yg)("inlineCode",{parentName:"p"},"ctest")," won't work.\n",(0,t.yg)("inlineCode",{parentName:"p"},"-DCURVE=bn254")," tells the compiler which curve to build. You can find a list of supported curves ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/curves"},"here"),"."),(0,t.yg)("p",null,"The output in ",(0,t.yg)("inlineCode",{parentName:"p"},"build")," folder should include the static libraries for the compiled curve."),(0,t.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"Make sure to only use ",(0,t.yg)("inlineCode",{parentName:"p"},"-DBUILD_TESTS=ON")," for running tests as the archive output will only be available when ",(0,t.yg)("inlineCode",{parentName:"p"},"-DBUILD_TESTS=ON")," is not supplied."))),(0,t.yg)("p",null,"To run the test"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"cd build\nctest\n")),(0,t.yg)("h4",{id:"icicle-rust"},"ICICLE Rust"),(0,t.yg)("p",null,"The rust bindings work by first compiling the CUDA static libraries as seen ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs"},"here"),". The compilation of CUDA and the Rust library is all handled by the rust build toolchain."),(0,t.yg)("p",null,"Similar to ICICLE Core here we also have to compile per curve."),(0,t.yg)("p",null,"Lets compile curve ",(0,t.yg)("inlineCode",{parentName:"p"},"bn254")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"cd wrappers/rust/icicle-curves/icicle-bn254\n")),(0,t.yg)("p",null,"Now lets build our library"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"cargo build --release\n")),(0,t.yg)("p",null,"This may take a couple of minutes since we are compiling both the CUDA and Rust code."),(0,t.yg)("p",null,"To run the tests"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"cargo test\n")),(0,t.yg)("p",null,"We also include some benchmarks"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"cargo bench\n")),(0,t.yg)("h4",{id:"icicle-golang"},"ICICLE Golang"),(0,t.yg)("p",null,"Golang is WIP in v1, coming soon. Please checkout a previous ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/releases/tag/v0.1.0"},"release v0.1.0")," for golang bindings."),(0,t.yg)("h3",{id:"running-icicle-examples"},"Running ICICLE examples"),(0,t.yg)("p",null,"ICICLE examples can be found ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle-examples"},"here")," these examples cover some simple use cases using C++, rust and golang."),(0,t.yg)("p",null,"In each example directory, ZK-container files are located in a subdirectory ",(0,t.yg)("inlineCode",{parentName:"p"},".devcontainer"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"msm/\n\u251c\u2500\u2500 .devcontainer\n   \u251c\u2500\u2500 devcontainer.json\n   \u2514\u2500\u2500 Dockerfile\n")),(0,t.yg)("p",null,"Lets run one of our C++ examples, in this case the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle-examples/blob/main/c%2B%2B/msm/example.cu"},"MSM example"),"."),(0,t.yg)("p",null,"Clone the repository"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ingonyama-zk/icicle-examples.git\ncd icicle-examples\n")),(0,t.yg)("p",null,"Enter the test directory"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"cd c++/msm\n")),(0,t.yg)("p",null,"Now lets build our docker file and run the test inside it. Make sure you have installed the ",(0,t.yg)("a",{parentName:"p",href:"#optional-prerequisites"},"optional prerequisites"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"docker build -t icicle-example-msm -f .devcontainer/Dockerfile .\n")),(0,t.yg)("p",null,"Lets start and enter the container"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm --gpus all -v .:/icicle-example icicle-example-msm\n")),(0,t.yg)("p",null,"to run the example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"rm -rf build\nmkdir -p build\ncmake -S . -B build\ncmake --build build\n./build/example\n")),(0,t.yg)("p",null,"You can now experiment with our other examples, perhaps try to run a rust or golang example next."),(0,t.yg)("h2",{id:"writing-new-bindings-for-icicle"},"Writing new bindings for ICICLE"),(0,t.yg)("p",null,"Since ICICLE Core is written in CUDA / C++ its really simple to generate static libraries. These static libraries can be installed on any system and called by higher level languages such as Golang."),(0,t.yg)("p",null,"static libraries can be loaded into memory once and used by multiple programs, reducing memory usage and potentially improving performance. They also allow you to separate functionality into distinct modules so your static library may need to compile only specific features that you want to use."),(0,t.yg)("p",null,"Lets review the Golang bindings since its a pretty verbose example (compared to rust which hides it pretty well) of using static libraries. Golang has a library named ",(0,t.yg)("inlineCode",{parentName:"p"},"CGO")," which can be used to link static libraries. Here's a basic example on how you can use cgo to link these libraries:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'/*\n#cgo LDFLAGS: -L/path/to/shared/libs -lbn254 -lbls12_381 -lbls12_377 -lbw6_671\n#include "icicle.h" // make sure you use the correct header file(s)\n*/\nimport "C"\n\nfunc main() {\n  // Now you can call the C functions from the ICICLE libraries.\n  // Note that C function calls are prefixed with \'C.\' in Go code.\n\n  out := (*C.BN254_projective_t)(unsafe.Pointer(p))\n  in := (*C.BN254_affine_t)(unsafe.Pointer(affine))\n\n  C.projective_from_affine_bn254(out, in)\n}\n')),(0,t.yg)("p",null,"The comments on the first line tell ",(0,t.yg)("inlineCode",{parentName:"p"},"CGO")," which libraries to import as well as which header files to include. You can then call methods which are part of the static library and defined in the header file, ",(0,t.yg)("inlineCode",{parentName:"p"},"C.projective_from_affine_bn254")," is an example."),(0,t.yg)("p",null,"If you wish to create your own bindings for a language of your choice we suggest you start by investigating how you can call static libraries."),(0,t.yg)("h3",{id:"icicle-adapters"},"ICICLE Adapters"),(0,t.yg)("p",null,"One of the core ideas behind ICICLE is that developers can gradually accelerate their provers. Many protocols are written using other cryptographic libraries and completely replacing them may be complex and time consuming."),(0,t.yg)("p",null,"Therefore we offer adapters for various popular libraries, these adapters allow us to convert points and scalars between different formats defined by various libraries. Here is a list:"),(0,t.yg)("p",null,"Golang adapters:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/ingonyama-zk/iciclegnark"},"Gnark crypto adapter"))))}g.isMDXComponent=!0},1611:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/apilevels-1ab85a883df418516e16eb87aa7b0385.png"},1873:(e,i,n)=>{n(6540)}}]);