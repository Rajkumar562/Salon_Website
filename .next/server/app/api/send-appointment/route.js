"use strict";(()=>{var e={};e.id=110,e.ids=[110],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1282:e=>{e.exports=require("child_process")},4770:e=>{e.exports=require("crypto")},665:e=>{e.exports=require("dns")},7702:e=>{e.exports=require("events")},2048:e=>{e.exports=require("fs")},2615:e=>{e.exports=require("http")},8791:e=>{e.exports=require("https")},8216:e=>{e.exports=require("net")},9801:e=>{e.exports=require("os")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},2452:e=>{e.exports=require("tls")},7360:e=>{e.exports=require("url")},1764:e=>{e.exports=require("util")},1568:e=>{e.exports=require("zlib")},6723:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>x,patchFetch:()=>q,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>m,staticGenerationAsyncStorage:()=>d});var s={};t.r(s),t.d(s,{POST:()=>u});var n=t(9303),o=t(8716),p=t(670),i=t(5245);let a=async e=>{let{name:r,email:t,contact:s,gender:n,preferredTime:o,preferredTimePeriod:p,preferredDate:a}=e,u=i.createTransport({service:"gmail",secure:!0,port:465,auth:{user:process.env.GMAIL_USER,pass:process.env.GMAIL_PASS}}),c={from:process.env.GMAIL_USER,to:process.env.GMAIL_USER,subject:"New Appointment Request",text:`You have a new appointment request:
      Name: ${r}
      Email: ${t}
      Phone: ${s}
      Gender: ${n}
      Date: ${a}
      Time: ${o} ${p}`};try{await u.sendMail(c)}catch(e){console.error("Error sending Gmail:",e)}};async function u(e){try{let r=await e.json();return console.log("Appointment Details:",r),await a(r),new Response(JSON.stringify({message:"Appointment request sent successfully!"}),{status:200})}catch(e){return console.error("Error:",e),new Response(JSON.stringify({message:"Error sending appointment request."}),{status:500})}}let c=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/send-appointment/route",pathname:"/api/send-appointment",filename:"route",bundlePath:"app/api/send-appointment/route"},resolvedPagePath:"C:\\Users\\Admin\\Documents\\Projects\\salon\\src\\app\\api\\send-appointment\\route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:m}=c,x="/api/send-appointment/route";function q(){return(0,p.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:d})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,88],()=>t(6723));module.exports=s})();