"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[237],{9256:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var o=a(3673);const s=(0,o.HX)("data-v-23efcad4");(0,o.dD)("data-v-23efcad4");const l={id:"form",class:"col-12 col-lg-5 col-sm-10"},r=(0,o.Wm)("div",{id:"form-title"},[(0,o.Wm)("h1",{class:"page-title"}," Version specific ")],-1),n={id:"form-content"},i={class:"question"},d=(0,o.Uk)(" What is the commit identifier of the work? "),m={class:"question"},c=(0,o.Uk)(" What is the version of the work? "),u={class:"question"},p=(0,o.Uk)(" When was the version released? "),h={class:"row items-center justify-end"},v={id:"form-button-bar"};(0,o.Cn)();const f=s(((e,t,a,f,W,g)=>{const V=(0,o.up)("Stepper"),w=(0,o.up)("SchemaGuideLink"),D=(0,o.up)("q-input"),b=(0,o.up)("q-btn"),k=(0,o.up)("q-date"),R=(0,o.up)("q-popup-proxy"),S=(0,o.up)("q-icon"),Y=(0,o.up)("StepperActions"),U=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)(V),(0,o.Wm)("div",l,[r,(0,o.Wm)("div",n,[(0,o.Wm)("h2",i,[d,(0,o.Wm)(w,{anchor:"#commit"})]),(0,o.Wm)(D,{"bg-color":"white",label:"commit",outlined:"",standout:"","model-value":e.commit,"onUpdate:modelValue":e.setCommit},null,8,["model-value","onUpdate:modelValue"]),(0,o.Wm)("h2",m,[c,(0,o.Wm)(w,{anchor:"#version"})]),(0,o.Wm)(D,{"bg-color":"white",label:"version",outlined:"",standout:"","model-value":e.version,"onUpdate:modelValue":e.setVersion},null,8,["model-value","onUpdate:modelValue"]),(0,o.Wm)("h2",u,[p,(0,o.Wm)(w,{anchor:"#date-released"})]),(0,o.Wm)(D,{"bg-color":"white",hint:"Format: YYYY-MM-DD",label:"date-released",mask:"####-##-##",outlined:"",standout:"",style:{width:"33.33%"},"today-btn":"true",class:e.dateReleasedErrors.length>0?"has-error":"","model-value":e.dateReleased,error:e.dateReleasedErrors.length>0,"error-message":e.dateReleasedErrors.join(", "),"onUpdate:modelValue":e.setDateReleased},{append:s((()=>[(0,o.Wm)(S,{name:"event",class:"cursor-pointer"},{default:s((()=>[(0,o.Wm)(R,{"transition-show":"scale","transition-hide":"scale"},{default:s((()=>[(0,o.Wm)(k,{"model-value":""===e.dateReleased?e.initializeDate():e.dateReleased,"onUpdate:modelValue":e.setDateReleased,mask:"YYYY-MM-DD"},{default:s((()=>[(0,o.Wm)("div",h,[(0,o.wy)((0,o.Wm)(b,{label:"Close",color:"primary",flat:""},null,512),[[U]])])])),_:1},8,["model-value","onUpdate:modelValue"])])),_:1})])),_:1})])),_:1},8,["class","model-value","error","error-message","onUpdate:modelValue"])]),(0,o.Wm)("div",v,[(0,o.Wm)(Y)])])],64)}));var W=a(7996),g=a(1622),V=a(5010),w=a(146),D=a(1364),b=a(6513),k=a(8875);const R=(0,o.aZ)({name:"ScreenVersionSpecific",components:{SchemaGuideLink:g.Z,Stepper:V.Z,StepperActions:w.Z},setup(){(0,o.ic)((()=>{const{setErrorStateScreenVersionSpecific:e}=(0,b.v)();e(document.getElementsByClassName("has-error").length>0)}));const e=()=>{const e=new Date,t=e.getFullYear(),a=("0"+(e.getMonth()+1).toString()).slice(-2),o=("0"+e.getDate().toString()).slice(-2);return`${t}-${a}-${o}`},{commit:t,dateReleased:a,version:s,setCommit:l,setDateReleased:r,setVersion:n}=(0,D.Y)(),{errors:i}=(0,k.V)(),d=(0,o.Fl)((()=>W.z8.filter((0,W.uY)(i.value)).map((e=>e.replace.message))));return{commit:t,dateReleased:a,dateReleasedErrors:d,initializeDate:e,version:s,setCommit:l,setDateReleased:r,setVersion:n}}});var S=a(4842),Y=a(4554),U=a(3944),Z=a(5836),C=a(2165),q=a(677),y=a(7518),E=a.n(y);R.render=f,R.__scopeId="data-v-23efcad4";const Q=R;E()(R,"components",{QInput:S.Z,QIcon:Y.Z,QPopupProxy:U.Z,QDate:Z.Z,QBtn:C.Z}),E()(R,"directives",{ClosePopup:q.Z})}}]);