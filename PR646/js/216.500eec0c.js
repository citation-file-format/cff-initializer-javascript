"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[216],{857:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var o=a(3673);const s=(0,o.HX)("data-v-18110695");(0,o.dD)("data-v-18110695");const l=(0,o.Wm)("div",{id:"form-title"},[(0,o.Wm)("h1",{class:"page-title"}," Version specific ")],-1),n={id:"form-content"},r={class:"question"},i=(0,o.Uk)(" What is the commit identifier of the work? "),d={class:"question"},m=(0,o.Uk)(" What is the version of the work? "),c={class:"question"},u=(0,o.Uk)(" When was the version released? "),p={class:"row items-center justify-end"};(0,o.Cn)();const h=s(((e,t,a,h,v,f)=>{const W=(0,o.up)("SchemaGuideLink"),g=(0,o.up)("q-input"),V=(0,o.up)("q-btn"),w=(0,o.up)("q-date"),D=(0,o.up)("q-popup-proxy"),k=(0,o.up)("q-icon"),R=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(o.HY,null,[l,(0,o.Wm)("div",n,[(0,o.Wm)("h2",r,[i,(0,o.Wm)(W,{anchor:"#commit"})]),(0,o.Wm)(g,{"bg-color":"white",label:"commit",outlined:"",standout:"","model-value":e.commit,"onUpdate:modelValue":e.setCommit},null,8,["model-value","onUpdate:modelValue"]),(0,o.Wm)("h2",d,[m,(0,o.Wm)(W,{anchor:"#version"})]),(0,o.Wm)(g,{"bg-color":"white",label:"version",outlined:"",standout:"","model-value":e.version,"onUpdate:modelValue":e.setVersion},null,8,["model-value","onUpdate:modelValue"]),(0,o.Wm)("h2",c,[u,(0,o.Wm)(W,{anchor:"#date-released"})]),(0,o.Wm)(g,{"bg-color":"white",hint:"Format: YYYY-MM-DD",label:"date-released",mask:"####-##-##",outlined:"",standout:"",style:{width:"33.33%"},"today-btn":"true",class:e.dateReleasedErrors.length>0?"has-error":"","model-value":e.dateReleased,error:e.dateReleasedErrors.length>0,"error-message":e.dateReleasedErrors.join(", "),"onUpdate:modelValue":e.setDateReleased},{append:s((()=>[(0,o.Wm)(k,{name:"event",class:"cursor-pointer"},{default:s((()=>[(0,o.Wm)(D,{"transition-show":"scale","transition-hide":"scale"},{default:s((()=>[(0,o.Wm)(w,{"model-value":""===e.dateReleased?e.initializeDate():e.dateReleased,"onUpdate:modelValue":e.setDateReleased,mask:"YYYY-MM-DD"},{default:s((()=>[(0,o.Wm)("div",p,[(0,o.wy)((0,o.Wm)(V,{label:"Close",color:"primary",flat:""},null,512),[[R]])])])),_:1},8,["model-value","onUpdate:modelValue"])])),_:1})])),_:1})])),_:1},8,["class","model-value","error","error-message","onUpdate:modelValue"])])],64)}));var v=a(7996),f=a(1622),W=a(1364),g=a(6513),V=a(8875);const w=(0,o.aZ)({name:"ScreenVersionSpecific",components:{SchemaGuideLink:f.Z},setup(){(0,o.ic)((()=>{const{setErrorStateScreenVersionSpecific:e}=(0,g.v)();e(document.getElementsByClassName("has-error").length>0)}));const e=()=>{const e=new Date,t=e.getFullYear(),a=("0"+(e.getMonth()+1).toString()).slice(-2),o=("0"+e.getDate().toString()).slice(-2);return`${t}-${a}-${o}`},{commit:t,dateReleased:a,version:s,setCommit:l,setDateReleased:n,setVersion:r}=(0,W.Y)(),{errors:i}=(0,V.V)(),d=(0,o.Fl)((()=>v.z8.filter((0,v.uY)(i.value)).map((e=>e.replace.message))));return{commit:t,dateReleased:a,dateReleasedErrors:d,initializeDate:e,version:s,setCommit:l,setDateReleased:n,setVersion:r}}});var D=a(4842),k=a(4554),R=a(3944),Y=a(5836),b=a(8240),U=a(677),C=a(7518),S=a.n(C);w.render=h,w.__scopeId="data-v-18110695";const q=w;S()(w,"components",{QInput:D.Z,QIcon:k.Z,QPopupProxy:R.Z,QDate:Y.Z,QBtn:b.Z}),S()(w,"directives",{ClosePopup:U.Z})}}]);