"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[485],{8925:(e,t,o)=>{o.r(t),o.d(t,{default:()=>U});var n=o(3673);const r=(0,n.HX)("data-v-16e2502c");(0,n.dD)("data-v-16e2502c");const d={id:"metroline"},s={id:"form"},a=(0,n.Wm)("div",{id:"form-title"},[(0,n.Wm)("h1",{class:"page-title"}," Keywords ")],-1),c={id:"form-content"},i=(0,n.Wm)("p",{class:"question"}," What keywords describe the work? ",-1),l={class:"scroll-to-bottom-container"},u=(0,n.Wm)("span",{class:"bottom"},null,-1),m=(0,n.Uk)(" Add keyword "),p={id:"form-button-bar"};(0,n.Cn)();const v=r(((e,t,o,v,w,y)=>{const f=(0,n.up)("Stepper"),k=(0,n.up)("Keyword"),W=(0,n.up)("q-btn"),K=(0,n.up)("StepperActions");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",d,[(0,n.Wm)(f)]),(0,n.Wm)("div",s,[a,(0,n.Wm)("div",c,[i,(0,n.Wm)("div",l,[u,(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.keywords,((t,o)=>((0,n.wg)(),(0,n.j4)(k,{class:"q-mr-lg",key:o,keyword:t,onRemovePressed:t=>e.removeKeyword(o),onUpdate:t=>e.setKeyword(o,t)},null,8,["keyword","onRemovePressed","onUpdate"])))),128))])]),(0,n.Wm)(W,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",style:{width:"max-content"},onClick:e.addKeyword},{default:r((()=>[m])),_:1},8,["onClick"])]),(0,n.Wm)("div",p,[(0,n.Wm)(K)])])],64)}));var w=o(5264),y=o(5132);const f=(0,n.HX)("data-v-22a264f7");(0,n.dD)("data-v-22a264f7");const k={class:"keyword"},W={class:"keyword-input"};(0,n.Cn)();const K=f(((e,t,o,r,d,s)=>{const a=(0,n.up)("q-input"),c=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)("div",k,[(0,n.Wm)("div",W,[(0,n.Wm)(a,{"bg-color":"white",dense:"",outlined:"",placeholder:"Type a keyword","model-value":e.keyword,rules:[e.validateKeyword],"onUpdate:modelValue":t[1]||(t[1]=t=>e.$emit("update",t))},null,8,["model-value","rules"])]),(0,n.Wm)(c,{class:"remove-keyword-btn",color:"negative",dense:"",icon:"delete",title:"Remove",onClick:t[2]||(t[2]=t=>e.$emit("removePressed"))})])}));var h=o(3351);const b=(0,n.aZ)({name:"KeywordCard",props:{keyword:{type:String,default:""}},setup(){return{validateKeyword:(0,h.rk)("/properties/keywords/items")}},emits:["removePressed","update"]});var g=o(4842),C=o(8240),q=o(7518),Z=o.n(q);b.render=K,b.__scopeId="data-v-22a264f7";const S=b;Z()(b,"components",{QInput:g.Z,QBtn:C.Z});var P=o(1364),_=o(4009),j=function(e,t,o,n){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,d){function s(e){try{c(n.next(e))}catch(t){d(t)}}function a(e){try{c(n["throw"](e))}catch(t){d(t)}}function c(e){e.done?o(e.value):r(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};const H=(0,n.aZ)({name:"ScreenKeywords",components:{Stepper:w.Z,StepperActions:y.Z,Keyword:S},setup(){const{keywords:e,setKeywords:t}=(0,P.Y)(),o=()=>j(this,void 0,void 0,(function*(){const o="",r=[...e.value,o];t(r),yield(0,n.Y3)(),(0,_.O)()})),r=o=>{const n=[...e.value];n.splice(o,1),t(n)},d=(o,n)=>{const r=[...e.value];r[o]=n,t(r)};return{addKeyword:o,keywords:e,removeKeyword:r,setKeyword:d}}});H.render=v,H.__scopeId="data-v-16e2502c";const U=H;Z()(H,"components",{QBtn:C.Z})}}]);