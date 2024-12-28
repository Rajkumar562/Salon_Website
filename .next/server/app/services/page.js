(()=>{var e={};e.id=469,e.ids=[469],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9540:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c}),t(883),t(6543),t(520),t(5866);var a=t(3191),r=t(8716),n=t(7922),l=t.n(n),i=t(5231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);t.d(s,o);let c=["",{children:["services",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,883)),"C:\\Users\\Admin\\Documents\\Projects\\salon\\src\\app\\services\\page.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,6543)),"C:\\Users\\Admin\\Documents\\Projects\\salon\\src\\app\\services\\layout.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,520)),"C:\\Users\\Admin\\Documents\\Projects\\salon\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\Admin\\Documents\\Projects\\salon\\src\\app\\services\\page.js"],m="/services/page",x={require:t,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/services/page",pathname:"/services",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3314:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,9404,23)),Promise.resolve().then(t.bind(t,912))},6608:(e,s,t)=>{Promise.resolve().then(t.bind(t,5238))},912:(e,s,t)=>{"use strict";t.d(s,{default:()=>i});var a=t(326),r=t(7577),n=t(4046),l=t(7674);function i(){let[e,s]=(0,r.useState)({name:"",contact:"",email:"",gender:"",preferredDate:"",preferredTime:""}),t=t=>{let{name:a,value:r}=t.target;s({...e,[a]:r})},i=async s=>{s.preventDefault();try{(await fetch("/api/send-appointment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?alert("Appointment request sent successfully!"):alert("Failed to send appointment request.")}catch(e){console.error("Error:",e),alert("An error occurred. Please try again.")}},o=new Date().toISOString().split("T")[0];return(0,a.jsxs)("form",{onSubmit:i,className:"w-full px-10 sm:px-20 md:px-32 lg:px-40 text-center mx-auto p-6 bg-gray-100 text-sm md:text-base ",children:[a.jsx("h2",{className:"text-xl md:text-2xl lg:text-3xl mb-6 text-center",children:'Let\'s not wait for the "Perfect Look"'}),a.jsx("h2",{className:"text-base md:text-lg lg:text-xl mb-6 text-center",children:"Book An Appointment Now!"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 p-2 border-b-[1px] border-black",children:[a.jsx(n.Xws,{className:"text-yellow"}),a.jsx("input",{type:"text",name:"name",value:e.name,onChange:t,placeholder:"Name",className:"w-full text-black bg-gray-100 focus:outline-none",required:!0})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 p-2 border-b-[1px] border-black",children:[a.jsx(n.DNl,{className:"text-yellow"}),a.jsx("input",{type:"tel",name:"contact",value:e.contact,onChange:t,placeholder:"Contact No",className:"w-full text-black bg-gray-100 focus:outline-none",pattern:"\\d{10}",maxLength:10,title:"Please enter a valid 10-digit contact number",required:!0})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 p-2 border-b-[1px] border-black",children:[a.jsx(n.SRX,{className:"text-yellow"}),a.jsx("input",{type:"email",name:"email",value:e.email,onChange:t,placeholder:"Email",className:"w-full text-black bg-gray-100 focus:outline-none",required:!0})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 p-2 border-b-[1px] border-black",children:[a.jsx(l.I5h,{className:"text-yellow",size:20}),(0,a.jsxs)("select",{name:"gender",value:e.gender,onChange:t,className:"w-full text-black bg-gray-100 bg-transparent",required:!0,children:[a.jsx("option",{value:"",disabled:!0,children:"Gender"}),a.jsx("option",{value:"male",children:"Male"}),a.jsx("option",{value:"female",children:"Female"})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 p-2 border-b-[1px] border-black",children:[a.jsx(n.IiJ,{className:"text-yellow"}),a.jsx("input",{type:"date",name:"preferredDate",value:e.preferredDate,onChange:t,min:o,className:"w-full text-black bg-gray-100 focus:outline-none",required:!0})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 p-2 border-b-[1px] border-black",children:[a.jsx(n.qyc,{className:"text-yellow"}),a.jsx("input",{type:"text",name:"preferredTime",value:e.preferredTime,onChange:t,placeholder:"Preferred Time (e.g., 10:30)",className:"w-full text-black bg-gray-100 focus:outline-none",required:!0}),(0,a.jsxs)("select",{name:"preferredTimePeriod",value:e.preferredTimePeriod,onChange:t,className:"border-none  focus:outline-nonefocus:ring-0 bg-transparent",required:!0,children:[a.jsx("option",{value:"am",children:"AM"}),a.jsx("option",{value:"pm",children:"PM"})]})]})]})]}),a.jsx("button",{type:"submit",className:"mt-6 w-48 bg-yellow text-white py-2 px-4 font-semibold hover:scale-110 transition ease-out duration-800",children:"Book Appointment"}),a.jsx("div",{className:"mt-4 font-semibold",children:"OR"}),(0,a.jsxs)("div",{className:"mt-2 text-sm md:text-base",children:[a.jsx("span",{className:"text-yellow text-2xl",children:" Call us @"}),a.jsx("span",{className:"hover:text-yellow text-2xl hover:cursor-pointer",children:" 1800123123"})]})]})}},7371:(e,s,t)=>{"use strict";t.d(s,{default:()=>r.a});var a=t(1812),r=t.n(a)},1812:(e,s,t)=>{"use strict";let{createProxy:a}=t(8570);e.exports=a("C:\\Users\\Admin\\Documents\\Projects\\salon\\node_modules\\next\\dist\\client\\link.js")},6543:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var a=t(9510);let r=(0,t(8570).createProxy)(String.raw`C:\Users\Admin\Documents\Projects\salon\src\components\ActiveLink.js#default`);function n({children:e}){return(0,a.jsxs)("div",{children:[a.jsx("nav",{className:"fixed max-[398px]:top-[160px] top-[148px] md:top-[100px] left-0 right-0 w-full bg-white shadow-md shadow-black z-10",children:(0,a.jsxs)("ul",{className:"flex text-lg sm:text-xl md:text-2xl lg:text-3xl justify-center py-5 px-5",children:[(0,a.jsxs)("li",{children:[a.jsx(r,{href:"/services",children:"LADIES"}),"\xa0",a.jsx("span",{children:"/"}),"\xa0"]}),(0,a.jsxs)("li",{children:[a.jsx(r,{href:"/services/gents",children:"GENTS"}),"\xa0",a.jsx("span",{children:"/"}),"\xa0"]}),a.jsx("li",{children:a.jsx(r,{href:"/services/loyalty-card",children:"LOYALTY CARD"})})]})}),a.jsx("main",{children:e})]})}},883:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var a=t(9510),r=t(5406),n=t(7142),l=t(9251),i=t(7371);function o(){let e={"Hair Styling":["Hair Cut","Ironing","Global Colouring","Blow Dry","Root Touch Up","Shampoo & Conditioning","Head Massage","Roller Setting","Oiling"],"Make Up":["Party Make Up","Engagement Make Up","Bridal & Reception Make Up","Base Make Up","Eye Make Up"],"Hair Texture":["Rebonding","Perming","Keratin","Colour Protection","Smoothening"],"Hair Treatments":["Spa Treatments","Volumizing","Advanced Hair Moisturising","Scalp Treatments"],"Facials & Rituals":["Bleach","Luxury Facials/Rituals","Clean Ups","Body Polishing/Rejuvenation","Threading"],"Hand & Feet":["Manicure","Spa Pedicure","Pedicure","Waxing","Spa Manicure"],"Nail Care":["Nail Paint","Nail Art","Nail Filling"]};return(0,a.jsxs)("div",{className:"max-[347px]:pt-[17rem] pt-60 md:pt-48",children:[(0,a.jsxs)("section",{className:"",children:[a.jsx("div",{children:a.jsx("img",{src:"/images/services/ladies1.png",alt:"Ladies1"})}),a.jsx("div",{className:"my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-10 md:px-20 lg:px-32",children:Object.keys(e).slice(0,4).map(s=>(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"md:text-2xl text-lg",children:s}),a.jsx("ul",{className:"pt-2 md:text-base text-sm",children:e[s].map(e=>(0,a.jsxs)("li",{className:"flex",children:[a.jsx(r.XIE,{className:"text-yellow my-auto mr-1"}),e]},e))})]},s))}),a.jsx("div",{children:a.jsx("img",{src:"/images/services/ladies2.png",alt:"Ladies2"})}),a.jsx("div",{className:"my-10 grid grid-cols-1 gap-4 sm:grid-cols-3 px-10 md:px-20 lg:px-32",children:Object.keys(e).slice(4).map(s=>(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"md:text-2xl text-lg",children:s}),a.jsx("ul",{className:"pt-2 md:text-base text-sm",children:e[s].map(e=>(0,a.jsxs)("li",{className:"flex",children:[a.jsx(r.XIE,{className:"text-yellow my-auto mr-1"}),e]},e))})]},s))}),a.jsx("div",{className:"flex justify-center my-10",children:a.jsx(i.default,{href:"/services/gents",children:a.jsx(l.Z,{className:"bg-yellow text-white px-4 py-2 font-semibold text-sm md:text-lg",children:"Gents Services"})})})]}),a.jsx(n.Z,{}),(0,a.jsxs)("section",{className:"px-10 md:px-20 lg:px-32 py-10",children:[a.jsx("h2",{className:"text-lg sm:text-xl md:text-2xl lg:text-3xl",children:"Ladies Salon Services"}),(0,a.jsxs)("p",{className:"mt-4 text-sm sm:text-base",children:["Explore the art of looking your best beautiful with the best in the industry. Z",a.jsx("sup",{children:"3"})," Salon makes a personal commitment to realize the prevalent gap in the industry by providing access to high-end ladies salon services, that to at convenient times and affordable prices - any day of the week and any time of the day! You can count on us for a hassle-free appointment. ",a.jsx("br",{className:"mb-2"}),"Z",a.jsx("sup",{children:"3"})," Salon is an Award-winning Salon Chain which has over 90 branches across India and Dubai. We are also one of the largest and fastest-growing Salon Chains in India. We have been at the forefront of setting new benchmarks and exceeding Industry standards. ",a.jsx("br",{className:"mb-2"}),"When you avail our services, we ensure that you are completely delighted with your style. Before our team of experienced, professional, and affable stylists works its magic, they’ll go through a thorough consultation to understand your preferences and style goals. We don’t start till we are clear of what you want."," ",a.jsx("br",{className:"mb-2"}),"At Z",a.jsx("sup",{children:"3"})," Salon, our stylists have been rigorously trained to give you a unique and personalized experience. Our creative hair stylists and beauty experts work meticulously to give you a head turning look. Be it a haircut focused on highlighting your best features or a hair color that would make you stand out and shine, we work wholeheartedly towards meeting your requirements and enhancing your look."," ",a.jsx("br",{className:"mb-2"}),"With a keen eye for detail, Z",a.jsx("sup",{children:"3"})," Salon offers you varied options to provide proper care to your body, hair and skin. With our excellent range of Hair styling, Make Up, Hair Texture, Hair treatments, Facials, Hand and feet, Nail care services, we assure you the ‘Superfect’ dreamy look. Whether it’s overseeing client satisfaction for everyone who enters the salon or the magnificent interior that catches every onlookers fancy, Z",a.jsx("sup",{children:"3"})," Salon possesses an infinite enthusiasm for keeping abreast with latest technologies and trends.",a.jsx("br",{className:"mb-2"}),"Visit us for all your beauty needs. You can also book an appointment by either filling the form on our website or by simply giving us a call. Book now for the best in class services!"]})]})]})}},7142:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});let a=(0,t(8570).createProxy)(String.raw`C:\Users\Admin\Documents\Projects\salon\src\components\AppointmentForm.js#default`)},9251:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var a=t(9510);function r({children:e,href:s,className:t=""}){return a.jsx("button",{href:s,className:`${t}`,children:e})}}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[948,12,674,406,9],()=>t(9540));module.exports=a})();