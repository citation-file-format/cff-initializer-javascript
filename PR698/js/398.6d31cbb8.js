"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[398],{4064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var i=n(3673),o=n(2323);const l=(0,i.HX)("data-v-17a079c5");(0,i.dD)("data-v-17a079c5");const s=(0,i.Wm)("div",{id:"form-title"},[(0,i.Wm)("h1",{class:"page-title"}," License ")],-1),c={id:"form-content"},a={class:"question"},u=(0,i.Uk)(" No results ");(0,i.Cn)();const p=l(((e,t,n,p,d,r)=>{const m=(0,i.up)("q-icon"),f=(0,i.up)("q-item-section"),h=(0,i.up)("q-item"),v=(0,i.up)("q-select"),w=(0,i.up)("InfoDialog");return(0,i.wg)(),(0,i.j4)(i.HY,null,[s,(0,i.Wm)("div",c,[(0,i.Wm)("h2",a,[(0,i.Uk)(" What is the license of the "+(0,o.zw)(e.type)+"? ",1),(0,i.Wm)(m,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:t[1]||(t[1]=t=>e.showLicenseHelp=!0),style:{cursor:"pointer"}})]),(0,i.Wm)(v,{"bg-color":"white",label:"license",clearable:"","fill-input":"","hide-selected":"","input-debounce":"0",outlined:"",standout:"","use-input":"","model-value":e.license,options:e.options,onFilter:e.licenseFilterFunction,"onUpdate:modelValue":e.setLicense},{"no-option":l((()=>[(0,i.Wm)(h,null,{default:l((()=>[(0,i.Wm)(f,{class:"text-grey"},{default:l((()=>[u])),_:1})])),_:1})])),_:1},8,["model-value","options","onFilter","onUpdate:modelValue"]),(0,i.Wm)(w,{modelValue:e.showLicenseHelp,"onUpdate:modelValue":t[2]||(t[2]=t=>e.showLicenseHelp=t),data:e.helpData.license},null,8,["modelValue","data"])])],64)}));var d=n(1959),r=n(6823),m=n(6298),f=n(1364);const h=(0,i.aZ)({name:"ScreenLicense",components:{InfoDialog:r.Z},setup(){const{license:e,setLicense:t,type:n}=(0,f.Y)(),i=m.definitions["license-enum"].enum,o=(0,d.iH)(i),l={license:{title:"license",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#license",description:`The SPDX license identifier for the license under which the ${n.value} is available.`,examples:["Apache-2.0","MIT","GPL-3.0"]}};return{helpData:l,license:e,options:o,setLicense:t,licenseFilterFunction(e,t){t((()=>{if(""===e)o.value=i;else{const t=e.toLowerCase();o.value=i.filter((e=>e.toLowerCase().indexOf(t)>-1))}}),(t=>{""!==e&&void 0!==t.options&&t.options.length>0&&(t.setOptionIndex(-1),t.moveOptionSelection(1,!0))}))},showLicenseHelp:(0,d.iH)(!1),type:n}}});var v=n(4554),w=n(1146),L=n(3414),b=n(2035),W=n(7518),g=n.n(W);h.render=p,h.__scopeId="data-v-17a079c5";const H=h;g()(h,"components",{QIcon:v.Z,QSelect:w.Z,QItem:L.Z,QItemSection:b.Z})}}]);