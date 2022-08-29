"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[962],{2233:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Y});var a=o(3673),l=o(2323);const i=(0,a.HX)("data-v-48554a02");(0,a.dD)("data-v-48554a02");const s=(0,a.Wm)("div",{id:"form-title"},[(0,a.Wm)("h1",{class:"page-title"}," Version specific ")],-1),n={id:"form-content"},r={class:"question"},m={class:"question"},d={class:"question"},c=(0,a.Uk)(" When was the version released? "),u={class:"row items-center justify-end"};(0,a.Cn)();const p=i(((e,t,o,p,h,f)=>{const v=(0,a.up)("q-icon"),V=(0,a.up)("q-input"),w=(0,a.up)("q-btn"),g=(0,a.up)("q-date"),b=(0,a.up)("q-popup-proxy"),D=(0,a.up)("InfoDialog"),W=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(a.HY,null,[s,(0,a.Wm)("div",n,[(0,a.Wm)("h2",r,[(0,a.Uk)(" What is the commit identifier of the "+(0,l.zw)(e.type)+"? ",1),(0,a.Wm)(v,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:t[1]||(t[1]=t=>e.showCommitHelp=!0),style:{cursor:"pointer"}})]),(0,a.Wm)(V,{"bg-color":"white",label:"commit",outlined:"",standout:"","model-value":e.commit,"onUpdate:modelValue":e.setCommit},null,8,["model-value","onUpdate:modelValue"]),(0,a.Wm)("h2",m,[(0,a.Uk)(" What is the version of the "+(0,l.zw)(e.type)+"? ",1),(0,a.Wm)(v,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:t[2]||(t[2]=t=>e.showVersionHelp=!0),style:{cursor:"pointer"}})]),(0,a.Wm)(V,{"bg-color":"white",label:"version",outlined:"",standout:"","model-value":e.version,"onUpdate:modelValue":e.setVersion},null,8,["model-value","onUpdate:modelValue"]),(0,a.Wm)("h2",d,[c,(0,a.Wm)(v,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:t[3]||(t[3]=t=>e.showDateReleasedHelp=!0),style:{cursor:"pointer"}})]),(0,a.Wm)(V,{"bg-color":"white",hint:"Format: YYYY-MM-DD",label:"date-released",mask:"####-##-##",outlined:"",standout:"",style:{width:"33.33%"},"today-btn":"true",class:e.dateReleasedErrors.length>0?"has-error":"","model-value":e.dateReleased,error:e.dateReleasedErrors.length>0,"error-message":e.dateReleasedErrors.join(", "),"onUpdate:modelValue":e.setDateReleased},{append:i((()=>[(0,a.Wm)(v,{name:"event",class:"cursor-pointer"},{default:i((()=>[(0,a.Wm)(b,{"transition-show":"scale","transition-hide":"scale"},{default:i((()=>[(0,a.Wm)(g,{"model-value":""===e.dateReleased?e.initializeDate():e.dateReleased,"onUpdate:modelValue":e.setDateReleased,mask:"YYYY-MM-DD"},{default:i((()=>[(0,a.Wm)("div",u,[(0,a.wy)((0,a.Wm)(w,{label:"Close",color:"primary",flat:""},null,512),[[W]])])])),_:1},8,["model-value","onUpdate:modelValue"])])),_:1})])),_:1})])),_:1},8,["class","model-value","error","error-message","onUpdate:modelValue"]),(0,a.Wm)(D,{modelValue:e.showCommitHelp,"onUpdate:modelValue":t[4]||(t[4]=t=>e.showCommitHelp=t),data:e.helpData.commit},null,8,["modelValue","data"]),(0,a.Wm)(D,{modelValue:e.showVersionHelp,"onUpdate:modelValue":t[5]||(t[5]=t=>e.showVersionHelp=t),data:e.helpData.version},null,8,["modelValue","data"]),(0,a.Wm)(D,{modelValue:e.showDateReleasedHelp,"onUpdate:modelValue":t[6]||(t[6]=t=>e.showDateReleasedHelp=t),data:e.helpData.dateReleased},null,8,["modelValue","data"])])],64)}));var h=o(7996),f=o(1959),v=o(6823),V=o(1364),w=o(6513),g=o(8875);const b=(0,a.aZ)({name:"ScreenVersionSpecific",components:{InfoDialog:v.Z},setup(){(0,a.ic)((()=>{const{setErrorStateScreenVersionSpecific:e}=(0,w.v)();e(document.getElementsByClassName("has-error").length>0)}));const e=()=>{const e=new Date,t=e.getFullYear(),o=("0"+(e.getMonth()+1).toString()).slice(-2),a=("0"+e.getDate().toString()).slice(-2);return`${t}-${o}-${a}`},{commit:t,dateReleased:o,version:l,setCommit:i,setDateReleased:s,setVersion:n,type:r}=(0,V.Y)(),{errors:m}=(0,g.V)(),d=(0,a.Fl)((()=>h.z8.filter((0,h.uY)(m.value)).map((e=>e.replace.message)))),c={commit:{title:"commit",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#commit",description:`The commit hash or revision number of the ${r.value} version.`,examples:["1ff847d81f29c45a3a1a5ce73d38e45c2f319bba","Revision: 8612"]},version:{title:"version",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#version",description:`The version of the ${r.value}.`,examples:["1.2.0","1.2","21.10 (Impish Indri)"]},dateReleased:{title:"date-released",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#date-released",description:`The date the ${r.value} has been released.`}};return{commit:t,dateReleased:o,dateReleasedErrors:d,helpData:c,initializeDate:e,version:l,setCommit:i,setDateReleased:s,setVersion:n,showCommitHelp:(0,f.iH)(!1),showVersionHelp:(0,f.iH)(!1),showDateReleasedHelp:(0,f.iH)(!1),type:r}}});var D=o(4554),W=o(4842),R=o(3944),y=o(5836),H=o(8240),C=o(677),U=o(7518),k=o.n(U);b.render=p,b.__scopeId="data-v-48554a02";const Y=b;k()(b,"components",{QIcon:D.Z,QInput:W.Z,QPopupProxy:R.Z,QDate:y.Z,QBtn:H.Z}),k()(b,"directives",{ClosePopup:C.Z})}}]);