"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[981],{8641:(e,o,n)=>{n.r(o),n.d(o,{default:()=>j});var t=n(3673);const d=(0,t.HX)("data-v-2e02ade8");(0,t.dD)("data-v-2e02ade8");const r={id:"metroline"},s={id:"form"},i=(0,t.Wm)("div",{id:"form-title"},[(0,t.Wm)("h1",{class:"page-title"}," Keywords ")],-1),a={id:"form-content"},l={class:"question"},c=(0,t.Uk)(" What keywords describe the work? "),m={class:"scroll-to-bottom-container"},u=(0,t.Wm)("span",{class:"bottom"},null,-1),w=(0,t.Uk)(" Add keyword "),v={id:"form-button-bar"};(0,t.Cn)();const p=d(((e,o,n,p,y,k)=>{const f=(0,t.up)("Stepper"),b=(0,t.up)("SchemaGuideLink"),W=(0,t.up)("Keyword"),h=(0,t.up)("q-btn"),K=(0,t.up)("StepperActions");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("div",r,[(0,t.Wm)(f)]),(0,t.Wm)("div",s,[i,(0,t.Wm)("div",a,[(0,t.Wm)("p",l,[c,(0,t.Wm)(b,{anchor:"#keywords"})]),(0,t.Wm)("div",m,[u,(0,t.Wm)("div",null,[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.keywords,((o,n)=>((0,t.wg)(),(0,t.j4)(W,{class:"q-mr-lg",key:n,keyword:o,index:n,"num-keywords":e.keywords.length,onMoveDown:o=>e.moveDown(n,e.keywords,e.setKeywords),onMoveUp:o=>e.moveUp(n,e.keywords,e.setKeywords),onRemovePressed:o=>e.removeKeyword(n),onUpdate:o=>e.setKeyword(n,o)},null,8,["keyword","index","num-keywords","onMoveDown","onMoveUp","onRemovePressed","onUpdate"])))),128))])]),(0,t.Wm)(h,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",style:{width:"max-content"},onClick:e.addKeyword},{default:d((()=>[w])),_:1},8,["onClick"])]),(0,t.Wm)("div",v,[(0,t.Wm)(K)])])],64)}));var y=n(2064),k=n(4009),f=n(4897);const b=(0,t.HX)("data-v-08293f5f");(0,t.dD)("data-v-08293f5f");const W={class:"keyword"},h={class:"keyword-input"};(0,t.Cn)();const K=b(((e,o,n,d,r,s)=>{const i=(0,t.up)("q-input"),a=(0,t.up)("q-btn");return(0,t.wg)(),(0,t.j4)("div",W,[(0,t.Wm)("div",h,[(0,t.Wm)(i,{autofocus:"","bg-color":"white",dense:"",outlined:"",placeholder:"Type a keyword","model-value":e.keyword,"onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update",o)),ref:"keywordRef"},null,8,["model-value"])]),(0,t.Wm)(a,{class:"keyword-btn",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,t.Wm)(a,{class:"keyword-btn",color:"blue",disable:e.index==e.numKeywords-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[3]||(o[3]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,t.Wm)(a,{class:"keyword-btn",color:"negative",dense:"",icon:"delete",tabindex:"-1",title:"Remove",onClick:o[4]||(o[4]=o=>e.$emit("removePressed"))})])})),g=(0,t.aZ)({name:"Keyword",props:{keyword:{type:String,default:""},index:{type:Number,required:!0},numKeywords:{type:Number,default:0}},emits:["moveDown","moveUp","removePressed","update"]});var x=n(4842),U=n(2165),C=n(7518),q=n.n(C);g.render=K,g.__scopeId="data-v-08293f5f";const D=g;q()(g,"components",{QInput:x.Z,QBtn:U.Z});var S=n(1622),Z=n(9192),A=n(623),P=function(e,o,n,t){function d(e){return e instanceof n?e:new n((function(o){o(e)}))}return new(n||(n=Promise))((function(n,r){function s(e){try{a(t.next(e))}catch(o){r(o)}}function i(e){try{a(t["throw"](e))}catch(o){r(o)}}function a(e){e.done?n(e.value):d(e.value).then(s,i)}a((t=t.apply(e,o||[])).next())}))};const _=(0,t.aZ)({name:"ScreenKeywords",components:{SchemaGuideLink:S.Z,Stepper:Z.Z,StepperActions:A.Z,Keyword:D},setup(){const{keywords:e,setKeywords:o}=(0,f.Y)(),n=()=>P(this,void 0,void 0,(function*(){let n;const d="";n=void 0===e.value?[d]:[...e.value,d],o(n),yield(0,t.Y3)(),(0,k.O)()})),d=n=>{if(void 0!==e.value){const t=[...e.value];t.splice(n,1),o(t),Array.isArray(t)&&0===t.length&&o(void 0)}},r=(n,t)=>{if(void 0!==e.value){const d=[...e.value];d[n]=t,o(d)}};return{addKeyword:n,keywords:e,moveDown:y.v,moveUp:y.A,removeKeyword:d,setKeyword:r,setKeywords:o}}});_.render=p,_.__scopeId="data-v-2e02ade8";const j=_;q()(_,"components",{QBtn:U.Z})}}]);