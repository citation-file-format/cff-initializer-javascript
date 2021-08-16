"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[470],{1364:(e,t,s)=>{s.d(t,{Y:()=>i});var a=s(1959),l=s(3673);const o=(0,a.iH)({abstract:"",cffVersion:"1.2.0",commit:"",dateReleased:"",identifiers:[],keywords:[],license:"",message:"",repository:"",repositoryArtifact:"",repositoryCode:"",title:"",type:"software",url:"",version:""});function i(){return{abstract:(0,l.Fl)((()=>o.value.abstract)),commit:(0,l.Fl)((()=>o.value.commit)),cffVersion:(0,l.Fl)((()=>o.value.cffVersion)),dateReleased:(0,l.Fl)((()=>o.value.dateReleased)),identifiers:(0,l.Fl)((()=>o.value.identifiers)),keywords:(0,l.Fl)((()=>o.value.keywords)),license:(0,l.Fl)((()=>o.value.license)),message:(0,l.Fl)((()=>o.value.message)),repository:(0,l.Fl)((()=>o.value.repository)),repositoryArtifact:(0,l.Fl)((()=>o.value.repositoryArtifact)),repositoryCode:(0,l.Fl)((()=>o.value.repositoryCode)),title:(0,l.Fl)((()=>o.value.title)),type:(0,l.Fl)((()=>o.value.type)),url:(0,l.Fl)((()=>o.value.url)),version:(0,l.Fl)((()=>o.value.version)),setAbstract:e=>{o.value.abstract=e},setCommit:e=>{o.value.commit=e},setDateReleased:e=>{o.value.dateReleased=e},setIdentifiers:e=>{o.value.identifiers=e},setKeywords:e=>{o.value.keywords=e},setLicense:e=>{o.value.license=e},setMessage:e=>{o.value.message=e},setRepository:e=>{o.value.repository=e},setRepositoryArtifact:e=>{o.value.repositoryArtifact=e},setRepositoryCode:e=>{o.value.repositoryCode=e},setTitle:e=>{o.value.title=e},setType:e=>{o.value.type=e},setUrl:e=>{o.value.url=e},setVersion:e=>{o.value.version=e}}}},8150:(e,t,s)=>{s.d(t,{g:()=>i});var a=s(1959),l=s(3673);const o=(0,a.iH)(1);function i(){return{step:(0,l.Fl)((()=>o.value)),next:()=>{o.value=o.value+1},previous:()=>{o.value=o.value-1},goto:e=>{o.value=e}}}},6281:(e,t,s)=>{s.d(t,{Z:()=>f});var a=s(3673);const l={class:"row action-buttons"},o={class:"col"},i={class:"col q-mr-lg",align:"right"};function r(e,t,s,r,n,u){const c=(0,a.up)("q-btn"),p=(0,a.up)("q-btn-group");return(0,a.wg)(),(0,a.j4)("div",l,[(0,a.Wm)("div",o,[(0,a.Wm)(c,{color:"",flat:"",label:"Back","no-caps":"",onClick:e.navigatePrevious},null,8,["onClick"])]),(0,a.Wm)("div",i,[(0,a.Wm)(p,{flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{color:"",flat:"",label:"Finish","no-caps":"",to:"/finish"}),(0,a.Wm)(c,{color:"grey-6",label:"Next","no-caps":"",onClick:e.navigateNext},null,8,["onClick"])])),_:1})])])}var n=s(9582),u=s(8150);const c=(0,a.aZ)({name:"StepperActions",setup(){const e=(0,u.g)(),t=(0,n.tv)(),s=()=>{e.next();const s=`/${e.step.value}`;return t.push({path:s})},a=()=>{e.previous();const s=`/${e.step.value}`;return t.push({path:s})},l=s=>{e.goto(s);const a=`/${e.step.value}`;return t.push({path:a})};return{step:e,navigateNext:s,navigatePrevious:a,navigateTo:l}}});var p=s(8240),v=s(6375),d=s(7518),m=s.n(d);c.render=r;const f=c;m()(c,"components",{QBtn:p.Z,QBtnGroup:v.Z})},8470:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var a=s(3673);const l=(0,a.HX)("data-v-41c342b7");(0,a.dD)("data-v-41c342b7");const o={class:"q-pa-md col-flex"},i={class:"q-gutter-md title-field text-dark"},r=(0,a.Wm)("p",{class:"q-mt-xl page-title"}," Start ",-1),n=(0,a.Wm)("p",{class:"question"}," What is the title of the work? ",-1),u=(0,a.Wm)("p",{class:"question"}," What do you want citers to do with the information provided in your CITATION.cff file? ",-1),c=(0,a.Wm)("p",{class:"question"}," What type of work does this CITATION.cff describe? ",-1);(0,a.Cn)();const p=l(((e,t,s,l,p,v)=>{const d=(0,a.up)("q-input"),m=(0,a.up)("q-option-group"),f=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)("div",o,[(0,a.Wm)("div",i,[r,n,(0,a.Wm)(d,{"bg-color":"white",label:"title",outlined:"",standout:"","model-value":e.title,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setTitle},null,8,["model-value","rules","onUpdate:modelValue"]),u,(0,a.Wm)(d,{"bg-color":"white",label:"message",outlined:"","model-value":e.message,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setMessage},null,8,["model-value","rules","onUpdate:modelValue"]),c,(0,a.Wm)(m,{type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":e.setType},null,8,["model-value","options","onUpdate:modelValue"])])]),(0,a.Wm)(f)],64)}));var v=s(6281),d=s(1364);const m=(0,a.aZ)({name:"Start",components:{StepperActions:v.Z},setup(){const{message:e,title:t,type:s,setMessage:a,setTitle:l,setType:o}=(0,d.Y)();return{message:e,title:t,type:s,typeOptions:[{label:"Software",value:"software"},{label:"Dataset",value:"dataset"}],setMessage:a,setTitle:l,setType:o}}});var f=s(8908),y=s(7011),g=s(7518),h=s.n(g);m.render=p,m.__scopeId="data-v-41c342b7";const b=m;h()(m,"components",{QInput:f.Z,QOptionGroup:y.Z})}}]);