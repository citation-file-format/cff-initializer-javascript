"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[394],{2904:(e,o,r)=>{r.r(o),r.d(o,{default:()=>H});var n=r(3673),d=r(2323);const t=(0,n.HX)("data-v-6777d39d");(0,n.dD)("data-v-6777d39d");const s={id:"metroline"},a={id:"form"},i=(0,n.Wm)("div",{id:"form-title"},[(0,n.Wm)("h1",{class:"page-title"}," Keywords ")],-1),l={id:"form-content"},c=(0,n.Wm)("p",{class:"question"}," What keywords describe the work? ",-1),m={class:"scroll-to-bottom-container"},w=(0,n.Wm)("span",{class:"bottom"},null,-1),u=(0,n.Uk)(" Add keyword "),v={id:"form-button-bar"};(0,n.Cn)();const y=t(((e,o,r,y,p,k)=>{const b=(0,n.up)("Stepper"),f=(0,n.up)("Keyword"),g=(0,n.up)("q-btn"),K=(0,n.up)("q-banner"),W=(0,n.up)("StepperActions");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",s,[(0,n.Wm)(b)]),(0,n.Wm)("div",a,[i,(0,n.Wm)("div",l,[c,(0,n.Wm)("div",m,[w,(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.keywords,((o,r)=>((0,n.wg)(),(0,n.j4)(f,{class:"q-mr-lg",key:r,keyword:o,index:r,"num-keywords":e.keywords.length,onMoveDown:o=>e.moveDown(r,e.keywords,e.setKeywords),onMoveUp:o=>e.moveUp(r,e.keywords,e.setKeywords),onRemovePressed:o=>e.removeKeyword(r),onUpdate:o=>e.setKeyword(r,o)},null,8,["keyword","index","num-keywords","onMoveDown","onMoveUp","onRemovePressed","onUpdate"])))),128))])]),(0,n.Wm)(g,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",style:{width:"max-content"},onClick:e.addKeyword},{default:t((()=>[u])),_:1},8,["onClick"]),e.keywordsErrors.messages.length>0?((0,n.wg)(),(0,n.j4)(K,{key:0,class:"bg-warning text-negative"},{default:t((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.keywordsErrors.messages,((e,o)=>((0,n.wg)(),(0,n.j4)("div",{key:o},(0,d.zw)(e),1)))),128))])),_:1})):(0,n.kq)("",!0)]),(0,n.Wm)("div",v,[(0,n.Wm)(W)])])],64)}));var p=r(525),k=r(2334);const b=(0,n.HX)("data-v-3815b80e");(0,n.dD)("data-v-3815b80e");const f={class:"keyword"},g={class:"keyword-input"};(0,n.Cn)();const K=b(((e,o,r,d,t,s)=>{const a=(0,n.up)("q-input"),i=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)("div",f,[(0,n.Wm)("div",g,[(0,n.Wm)(a,{"bg-color":"white",dense:"",outlined:"",placeholder:"Type a keyword","model-value":e.keyword,error:e.keywordError.hasError,"error-message":e.keywordError.messages.join(", "),"onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update",o))},null,8,["model-value","error","error-message"])]),(0,n.Wm)(i,{class:"keyword-btn",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,n.Wm)(i,{class:"keyword-btn",color:"blue",disable:e.index==e.numKeywords-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[3]||(o[3]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,n.Wm)(i,{class:"keyword-btn",color:"negative",dense:"",icon:"delete",tabindex:"-1",title:"Remove",onClick:o[4]||(o[4]=o=>e.$emit("removePressed"))})])}));var W=r(3281);const h=(0,n.aZ)({name:"KeywordCard",props:{keyword:{type:String,default:""},index:{type:Number,required:!0},numKeywords:{type:Number,default:0}},setup(e){return{keywordError:(0,n.Fl)((()=>(0,W.I)(`/keywords/${e.index}`)))}},emits:["moveDown","moveUp","removePressed","update"]});var x=r(4842),q=r(2165),C=r(7518),U=r.n(C);h.render=K,h.__scopeId="data-v-3815b80e";const j=h;U()(h,"components",{QInput:x.Z,QBtn:q.Z});var D=r(2064),Z=r(1364),E=r(4009),A=function(e,o,r,n){function d(e){return e instanceof r?e:new r((function(o){o(e)}))}return new(r||(r=Promise))((function(r,t){function s(e){try{i(n.next(e))}catch(o){t(o)}}function a(e){try{i(n["throw"](e))}catch(o){t(o)}}function i(e){e.done?r(e.value):d(e.value).then(s,a)}i((n=n.apply(e,o||[])).next())}))};const S=(0,n.aZ)({name:"ScreenKeywords",components:{Stepper:p.Z,StepperActions:k.Z,Keyword:j},setup(){const{keywords:e,setKeywords:o}=(0,Z.Y)(),r=()=>A(this,void 0,void 0,(function*(){let r;const d="";r=void 0===e.value?[d]:[...e.value,d],o(r),yield(0,n.Y3)(),(0,E.O)()})),d=r=>{if(void 0!==e.value){const n=[...e.value];n.splice(r,1),o(n),Array.isArray(n)&&0===n.length&&o(void 0)}},t=(r,n)=>{if(void 0!==e.value){const d=[...e.value];d[r]=n,o(d)}};return{addKeyword:r,keywords:e,moveDown:D.v,moveUp:D.A,removeKeyword:d,setKeyword:t,setKeywords:o,keywordsErrors:(0,n.Fl)((()=>(0,W.I)("/keywords")))}}});var _=r(5607);S.render=y,S.__scopeId="data-v-6777d39d";const H=S;U()(S,"components",{QBtn:q.Z,QBanner:_.Z})}}]);