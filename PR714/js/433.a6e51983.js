"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[433],{7891:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var i=n(3673);const o=(0,i.HX)("data-v-6455b4ec");(0,i.dD)("data-v-6455b4ec");const l=(0,i.Wm)("div",{id:"form-title"},[(0,i.Wm)("h1",{class:"page-title"}," License ")],-1),s={id:"form-content"},c={class:"question"},a=(0,i.Uk)(" What is the license of the work? "),u=(0,i.Uk)(" No results ");(0,i.Cn)();const r=o(((e,t,n,r,d,p)=>{const m=(0,i.up)("q-icon"),h=(0,i.up)("q-item-section"),f=(0,i.up)("q-item"),v=(0,i.up)("q-select"),b=(0,i.up)("InfoDialog");return(0,i.wg)(),(0,i.j4)(i.HY,null,[l,(0,i.Wm)("div",s,[(0,i.Wm)("h2",c,[a,(0,i.Wm)(m,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:t[1]||(t[1]=t=>e.showLicenseHelp=!0),style:{cursor:"pointer"}})]),(0,i.Wm)(v,{"bg-color":"white",label:"license",clearable:"","fill-input":"","hide-selected":"","input-debounce":"0",outlined:"",standout:"","use-input":"","model-value":e.license,options:e.options,onFilter:e.licenseFilterFunction,"onUpdate:modelValue":e.setLicense},{"no-option":o((()=>[(0,i.Wm)(f,null,{default:o((()=>[(0,i.Wm)(h,{class:"text-grey"},{default:o((()=>[u])),_:1})])),_:1})])),_:1},8,["model-value","options","onFilter","onUpdate:modelValue"]),(0,i.Wm)(b,{modelValue:e.showLicenseHelp,"onUpdate:modelValue":t[2]||(t[2]=t=>e.showLicenseHelp=t),data:e.helpData.license},null,8,["modelValue","data"])])],64)}));var d=n(1959),p=n(6341),m=n(6298),h=n(1364);const f=(0,i.aZ)({name:"ScreenLicense",components:{InfoDialog:p.Z},setup(){const{license:e,setLicense:t}=(0,h.Y)(),n=m.definitions["license-enum"].enum,i=(0,d.iH)(n),o={license:{title:"license",url:[{text:"Click here to see the documentation for license.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#license"}],description:"The SPDX license identifier for the license under which the work is available.",examples:["Apache-2.0","MIT","GPL-3.0"]}};return{helpData:o,license:e,options:i,setLicense:t,licenseFilterFunction(e,t){t((()=>{if(""===e)i.value=n;else{const t=e.toLowerCase();i.value=n.filter((e=>e.toLowerCase().indexOf(t)>-1))}}),(t=>{""!==e&&void 0!==t.options&&t.options.length>0&&(t.setOptionIndex(-1),t.moveOptionSelection(1,!0))}))},showLicenseHelp:(0,d.iH)(!1)}}});var v=n(4554),b=n(1146),w=n(3414),L=n(2035),k=n(7518),W=n.n(k);f.render=r,f.__scopeId="data-v-6455b4ec";const g=f;W()(f,"components",{QIcon:v.Z,QSelect:b.Z,QItem:w.Z,QItemSection:L.Z})}}]);