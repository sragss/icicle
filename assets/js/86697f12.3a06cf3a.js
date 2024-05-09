"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[540],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return t?a.createElement(m,o(o({ref:n},g),{},{components:t})):a.createElement(m,o({ref:n},g))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(8168),i=(t(6540),t(5680));t(1873);const r={},o="Multi GPU APIs",l={unversionedId:"icicle/golang-bindings/multi-gpu",id:"icicle/golang-bindings/multi-gpu",title:"Multi GPU APIs",description:"To learn more about the theory of Multi GPU programming refer to this part of documentation.",source:"@site/docs/icicle/golang-bindings/multi-gpu.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/multi-gpu",permalink:"/icicle/golang-bindings/multi-gpu",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/multi-gpu.md",tags:[],version:"current",lastUpdatedBy:"Leon Hibnik",lastUpdatedAt:1715257400,formattedLastUpdatedAt:"5/9/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Keccak",permalink:"/icicle/golang-bindings/keccak"},next:{title:"Rust bindings",permalink:"/icicle/rust-bindings"}},c={},s=[{value:"A Multi GPU example",id:"a-multi-gpu-example",level:2},{value:"Device Management API",id:"device-management-api",level:2},{value:"<code>RunOnDevice</code>",id:"runondevice",level:3},{value:"<code>SetDevice</code>",id:"setdevice",level:3},{value:"<code>GetDeviceCount</code>",id:"getdevicecount",level:3},{value:"<code>GetDevice</code>",id:"getdevice",level:3},{value:"<code>GetDeviceFromPointer</code>",id:"getdevicefrompointer",level:3}],g={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"multi-gpu-apis"},"Multi GPU APIs"),(0,i.yg)("p",null,"To learn more about the theory of Multi GPU programming refer to ",(0,i.yg)("a",{parentName:"p",href:"/icicle/multi-gpu"},"this part")," of documentation."),(0,i.yg)("p",null,"Here we will cover the core multi GPU apis and an ",(0,i.yg)("a",{parentName:"p",href:"#a-multi-gpu-example"},"example")),(0,i.yg)("h2",{id:"a-multi-gpu-example"},"A Multi GPU example"),(0,i.yg)("p",null,"In this example we will display how you can"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Fetch the number of devices installed on a machine"),(0,i.yg)("li",{parentName:"ol"},"For every GPU launch a thread and set an active device per thread."),(0,i.yg)("li",{parentName:"ol"},"Execute a MSM on each GPU")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "sync"\n\n    "github.com/ingonyama-zk/icicle/v2/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/v2/wrappers/golang/cuda_runtime"\n    bn254 "github.com/ingonyama-zk/icicle/v2/wrappers/golang/curves/bn254"\n)\n\nfunc main() {\n    numDevices, _ := cr.GetDeviceCount()\n    fmt.Println("There are ", numDevices, " devices available")\n    wg := sync.WaitGroup{}\n\n    for i := 0; i < numDevices; i++ {\n        wg.Add(1)\n        // RunOnDevice makes sure each MSM runs on a single thread\n        cr.RunOnDevice(i, func(args ...any) {\n            defer wg.Done()\n            cfg := bn254.GetDefaultMSMConfig()\n            cfg.IsAsync = true\n            for _, power := range []int{10, 18} {\n                size := 1 << power // 2^pwr\n\n                // generate random scalars\n                scalars := bn254.GenerateScalars(size)\n                points := bn254.GenerateAffinePoints(size)\n\n                // create a stream and allocate result pointer\n                stream, _ := cr.CreateStream()\n                var p bn254.Projective\n                var out core.DeviceSlice\n                out.MallocAsync(p.Size(), p.Size(), stream)\n                // assign stream to device context\n                cfg.Ctx.Stream = &stream\n\n                // execute MSM\n                bn254.Msm(scalars, points, &cfg, out)\n                // read result from device\n                outHost := make(core.HostSlice[bn254.Projective], 1)\n                outHost.CopyFromDeviceAsync(&out, stream)\n                out.FreeAsync(stream)\n\n                // sync the stream\n                cr.SynchronizeStream(&stream)\n            }\n        })\n    }\n    wg.Wait()\n}\n')),(0,i.yg)("p",null,"This example demonstrates a basic pattern for distributing tasks across multiple GPUs. The ",(0,i.yg)("inlineCode",{parentName:"p"},"RunOnDevice")," function ensures that each goroutine is executed on its designated GPU and a corresponding thread."),(0,i.yg)("h2",{id:"device-management-api"},"Device Management API"),(0,i.yg)("p",null,"To streamline device management we offer as part of ",(0,i.yg)("inlineCode",{parentName:"p"},"cuda_runtime")," package methods for dealing with devices."),(0,i.yg)("h3",{id:"runondevice"},(0,i.yg)("inlineCode",{parentName:"h3"},"RunOnDevice")),(0,i.yg)("p",null,"Runs a given function on a specific GPU device, ensuring that all CUDA calls within the function are executed on the selected device."),(0,i.yg)("p",null,"In Go, most concurrency can be done via Goroutines. However, there is no guarantee that a goroutine stays on a specific host thread."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"RunOnDevice")," was designed to solve this caveat and ensure that the goroutine will stay on a specific host thread."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"RunOnDevice")," locks a goroutine into a specific host thread, sets a current GPU device, runs a provided function, and unlocks the goroutine from the host thread after the provided function finishes."),(0,i.yg)("p",null,"While the goroutine is locked to the host thread, the Go runtime will not assign other goroutines to that host thread."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Parameters:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"deviceId int")),": The ID of the device on which to run the provided function. Device IDs start from 0."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"funcToRun func(args ...any)")),": The function to be executed on the specified device."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"args ...any")),": Arguments to be passed to ",(0,i.yg)("inlineCode",{parentName:"li"},"funcToRun"),".")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Behavior:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The function ",(0,i.yg)("inlineCode",{parentName:"li"},"funcToRun")," is executed in a new goroutine that is locked to a specific OS thread to ensure that all CUDA calls within the function target the specified device.")),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"Any goroutines launched within ",(0,i.yg)("inlineCode",{parentName:"p"},"funcToRun")," are not automatically bound to the same GPU device. If necessary, ",(0,i.yg)("inlineCode",{parentName:"p"},"RunOnDevice")," should be called again within such goroutines with the same ",(0,i.yg)("inlineCode",{parentName:"p"},"deviceId"),"."))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'RunOnDevice(0, func(args ...any) {\n    fmt.Println("This runs on GPU 0")\n    // CUDA-related operations here will target GPU 0\n}, nil)\n')),(0,i.yg)("h3",{id:"setdevice"},(0,i.yg)("inlineCode",{parentName:"h3"},"SetDevice")),(0,i.yg)("p",null,"Sets the active device for the current host thread. All subsequent CUDA calls made from this thread will target the specified device."),(0,i.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"This function should not be used directly in conjunction with goroutines. If you want to run multi-gpu scenarios with goroutines you should use ",(0,i.yg)("a",{parentName:"p",href:"#runondevice"},"RunOnDevice")))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Parameters:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"device int")),": The ID of the device to set as the current device.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Returns:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"CudaError")),": Error code indicating the success or failure of the operation.")),(0,i.yg)("h3",{id:"getdevicecount"},(0,i.yg)("inlineCode",{parentName:"h3"},"GetDeviceCount")),(0,i.yg)("p",null,"Retrieves the number of CUDA-capable devices available on the host."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Returns:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"(int, CudaError)")),": The number of devices and an error code indicating the success or failure of the operation.")),(0,i.yg)("h3",{id:"getdevice"},(0,i.yg)("inlineCode",{parentName:"h3"},"GetDevice")),(0,i.yg)("p",null,"Gets the ID of the currently active device for the calling host thread."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Returns:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"(int, CudaError)")),": The ID of the current device and an error code indicating the success or failure of the operation.")),(0,i.yg)("h3",{id:"getdevicefrompointer"},(0,i.yg)("inlineCode",{parentName:"h3"},"GetDeviceFromPointer")),(0,i.yg)("p",null,"Retrieves the device associated with a given pointer."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Parameters:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"ptr unsafe.Pointer")),": Pointer to query.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Returns:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"int")),": The device ID associated with the memory pointed to by ",(0,i.yg)("inlineCode",{parentName:"li"},"ptr"),".")),(0,i.yg)("p",null,"This documentation should provide a clear understanding of how to effectively manage multiple GPUs in Go applications using CUDA, with a particular emphasis on the ",(0,i.yg)("inlineCode",{parentName:"p"},"RunOnDevice")," function for executing tasks on specific GPUs."))}p.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);