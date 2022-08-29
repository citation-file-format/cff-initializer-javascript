"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[906],{7251:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Q});var a=o(3673);const l=(0,a.HX)("data-v-c1dd513e");(0,a.dD)("data-v-c1dd513e");const s={id:"metroline"},n={id:"form"},d=(0,a.Wm)("div",{id:"form-title"},[(0,a.Wm)("h1",{class:"page-title"}," Version specific ")],-1),i={id:"form-content"},r={class:"question"},m=(0,a.Uk)(" What is the commit identifier of the work? "),u={class:"question"},c=(0,a.Uk)(" What is the version of the work? "),p={class:"question"},v=(0,a.Uk)(" When was the version released? "),h={class:"row items-center justify-end"},W={id:"form-button-bar"};(0,a.Cn)();const f=l(((e,t,o,f,D,w)=>{const b=(0,a.up)("Stepper"),k=(0,a.up)("SchemaGuideLink"),V=(0,a.up)("q-input"),g=(0,a.up)("q-btn"),U=(0,a.up)("q-date"),Y=(0,a.up)("q-popup-proxy"),S=(0,a.up)("q-icon"),Z=(0,a.up)("StepperActions"),q=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)("div",s,[(0,a.Wm)(b)]),(0,a.Wm)("div",n,[d,(0,a.Wm)("div",i,[(0,a.Wm)("p",r,[m,(0,a.Wm)(k,{anchor:"#commit"})]),(0,a.Wm)(V,{"bg-color":"white",label:"commit",outlined:"",standout:"","model-value":e.commit,"onUpdate:modelValue":e.setCommit},null,8,["model-value","onUpdate:modelValue"]),(0,a.Wm)("p",u,[c,(0,a.Wm)(k,{anchor:"#version"})]),(0,a.Wm)(V,{"bg-color":"white",label:"version",outlined:"",standout:"","model-value":e.version,"onUpdate:modelValue":e.setVersion},null,8,["model-value","onUpdate:modelValue"]),(0,a.Wm)("p",p,[v,(0,a.Wm)(k,{anchor:"#date-released"})]),(0,a.Wm)(V,{"bg-color":"white",hint:"Format: YYYY-MM-DD",label:"date-released",mask:"####-##-##",outlined:"",standout:"",style:{width:"33.33%"},"today-btn":"true","model-value":e.dateReleased,error:null!=e.dateError,"error-message":e.dateError,"onUpdate:modelValue":e.setDateReleased},{append:l((()=>[(0,a.Wm)(S,{name:"event",class:"cursor-pointer"},{default:l((()=>[(0,a.Wm)(Y,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:l((()=>[(0,a.Wm)(U,{"model-value":""===e.dateReleased?e.initializeDate():e.dateReleased,"onUpdate:modelValue":e.setDateReleased,mask:"YYYY-MM-DD"},{default:l((()=>[(0,a.Wm)("div",h,[(0,a.wy)((0,a.Wm)(g,{label:"Close",color:"primary",flat:""},null,512),[[q]])])])),_:1},8,["model-value","onUpdate:modelValue"])])),_:1},512)])),_:1})])),_:1},8,["model-value","error","error-message","onUpdate:modelValue"])]),(0,a.Wm)("div",W,[(0,a.Wm)(Z)])])],64)}));var D=o(1622),w=o(3972),b=o(2334),k=o(1364),V=o(3281);const g=(0,a.aZ)({name:"ScreenVersionSpecific",components:{SchemaGuideLink:D.Z,Stepper:w.Z,StepperActions:b.Z},setup(){const e=()=>{const e=new Date,t=e.getFullYear(),o=("0"+(e.getMonth()+1).toString()).slice(-2),a=("0"+e.getDate().toString()).slice(-2);return`${t}-${o}-${a}`},{commit:t,dateReleased:o,version:l,setCommit:s,setDateReleased:n,setVersion:d}=(0,k.Y)();return{commit:t,dateReleased:o,initializeDate:e,version:l,setCommit:s,setDateReleased:n,setVersion:d,dateError:(0,a.Fl)((()=>(0,V.I)({instancePath:"/date-released"})))}}});var U=o(4842),Y=o(4554),S=o(3944),Z=o(5836),q=o(2165),R=o(677),y=o(7518),C=o.n(y);g.render=f,g.__scopeId="data-v-c1dd513e";const Q=g;C()(g,"components",{QInput:U.Z,QIcon:Y.Z,QPopupProxy:S.Z,QDate:Z.Z,QBtn:q.Z}),C()(g,"directives",{ClosePopup:R.Z})}}]);