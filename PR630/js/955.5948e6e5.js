"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[955],{9150:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var o=s(3673);const r=(0,o.HX)("data-v-feeffff8");(0,o.dD)("data-v-feeffff8");const a={id:"form",class:"col-12 col-lg-5 col-sm-10"},l=(0,o.Wm)("div",{id:"form-title"},[(0,o.Wm)("h1",{class:"page-title"}," Start ")],-1),n={id:"form-content"},i={class:"question"},m=(0,o.Uk)(" What type of work does this CITATION.cff describe? "),u={class:"question"},p=(0,o.Uk)(" What is the title of the work? "),c={class:"question"},d=(0,o.Uk)(" What do you want citers to do with the information provided in your CITATION.cff file? "),f={id:"form-button-bar"};(0,o.Cn)();const g=r(((e,t,s,r,g,h)=>{const v=(0,o.up)("Stepper"),W=(0,o.up)("SchemaGuideLink"),y=(0,o.up)("q-option-group"),S=(0,o.up)("q-input"),w=(0,o.up)("StepperActions");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)(v),(0,o.Wm)("div",a,[l,(0,o.Wm)("div",n,[(0,o.Wm)("h2",i,[m,(0,o.Wm)(W,{anchor:"#type"})]),(0,o.Wm)(y,{type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":[e.setType,e.setMessagePlaceHolder]},null,8,["model-value","options","onUpdate:modelValue"]),(0,o.Wm)("h2",u,[p,(0,o.Wm)(W,{anchor:"#title"})]),(0,o.Wm)(S,{"bg-color":"white",label:"title",outlined:"",standout:"",class:[e.titleErrors.length>0?"has-error":""],"model-value":e.title,error:e.titleErrors.length>0,"error-message":e.titleErrors.join(", "),"onUpdate:modelValue":e.setTitle},null,8,["class","model-value","error","error-message","onUpdate:modelValue"]),(0,o.Wm)("h2",c,[d,(0,o.Wm)(W,{anchor:"#message"})]),(0,o.Wm)(S,{"bg-color":"white",label:"message",outlined:"",standout:"",class:[e.messageErrors.length>0?"has-error":""],"model-value":e.message,error:e.messageErrors.length>0,"error-message":e.messageErrors.join(", "),"onUpdate:modelValue":e.setMessage},null,8,["class","model-value","error","error-message","onUpdate:modelValue"])]),(0,o.Wm)("div",f,[(0,o.Wm)(w)])])],64)}));var h=s(7996),v=s(1622),W=s(5010),y=s(146),S=s(1364),w=s(6513),b=s(8875);const k=(0,o.aZ)({name:"ScreenStart",components:{SchemaGuideLink:v.Z,Stepper:W.Z,StepperActions:y.Z},setup(){(0,o.ic)((()=>{const{setErrorStateScreenStart:e}=(0,w.v)();e(document.getElementsByClassName("has-error").length>0)}));const{message:e,title:t,type:s,setMessage:r,setTitle:a,setType:l}=(0,S.Y)(),{errors:n}=(0,b.V)(),i=(0,o.Fl)((()=>h.Tc.filter((0,h.uY)(n.value)).map((e=>e.replace.message)))),m=(0,o.Fl)((()=>h.Sh.filter((0,h.uY)(n.value)).map((e=>e.replace.message)))),u=()=>{const t=/(software|dataset)/gim,o=t.exec(e.value);o&&r(e.value.split(o[0]).join(s.value))};return{message:e,messageErrors:i,title:t,titleErrors:m,type:s,typeOptions:[{label:"Software",value:"software"},{label:"Dataset",value:"dataset"}],setMessage:r,setMessagePlaceHolder:u,setTitle:a,setType:l}}});var T=s(7011),E=s(4842),U=s(7518),V=s.n(U);k.render=g,k.__scopeId="data-v-feeffff8";const C=k;V()(k,"components",{QOptionGroup:T.Z,QInput:E.Z})}}]);