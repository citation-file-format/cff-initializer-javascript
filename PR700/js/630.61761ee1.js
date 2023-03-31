"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[630],{4899:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var o=a(3673);const s=(0,o.HX)("data-v-10547b92");(0,o.dD)("data-v-10547b92");const l=(0,o.Wm)("div",{id:"form-title"},[(0,o.Wm)("h1",{class:"page-title"}," Start ")],-1),i={id:"form-content"},r={class:"question"},n=(0,o.Uk)(" What type of work does this CITATION.cff describe? "),m={class:"question"},p=(0,o.Uk)(" What is the title of the work? "),c={class:"question"},u=(0,o.Uk)(" What do you want citers to do with the information provided in your CITATION.cff file? ");(0,o.Cn)();const d=s(((e,t,a,s,d,h)=>{const f=(0,o.up)("q-icon"),g=(0,o.up)("q-option-group"),w=(0,o.up)("q-input"),y=(0,o.up)("InfoDialog");return(0,o.wg)(),(0,o.j4)(o.HY,null,[l,(0,o.Wm)("div",i,[(0,o.Wm)("h2",r,[n,(0,o.Wm)(f,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:t[1]||(t[1]=t=>e.showTypeHelp=!0),style:{cursor:"pointer"}})]),(0,o.Wm)(g,{type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":[e.setType,e.setMessagePlaceHolder]},null,8,["model-value","options","onUpdate:modelValue"]),(0,o.Wm)("h2",m,[p,(0,o.Wm)(f,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:t[2]||(t[2]=t=>e.showTitleHelp=!0),style:{cursor:"pointer"}})]),(0,o.Wm)(w,{"bg-color":"white","data-cy":"input-title",label:"title",outlined:"",standout:"",class:[e.titleErrors.length>0?"has-error":""],"model-value":e.title,error:e.titleErrors.length>0,"error-message":e.titleErrors.join(", "),"onUpdate:modelValue":e.setTitle},null,8,["class","model-value","error","error-message","onUpdate:modelValue"]),(0,o.Wm)("h2",c,[u,(0,o.Wm)(f,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:t[3]||(t[3]=t=>e.showMessageHelp=!0),style:{cursor:"pointer"}})]),(0,o.Wm)(w,{"bg-color":"white","data-cy":"input-message",label:"message",outlined:"",standout:"",class:[e.messageErrors.length>0?"has-error":""],"model-value":e.message,error:e.messageErrors.length>0,"error-message":e.messageErrors.join(", "),"onUpdate:modelValue":e.setMessage},null,8,["class","model-value","error","error-message","onUpdate:modelValue"]),(0,o.Wm)(y,{modelValue:e.showTypeHelp,"onUpdate:modelValue":t[4]||(t[4]=t=>e.showTypeHelp=t),data:e.helpData.type},null,8,["modelValue","data"]),(0,o.Wm)(y,{modelValue:e.showMessageHelp,"onUpdate:modelValue":t[5]||(t[5]=t=>e.showMessageHelp=t),data:e.helpData.message},null,8,["modelValue","data"]),(0,o.Wm)(y,{modelValue:e.showTitleHelp,"onUpdate:modelValue":t[6]||(t[6]=t=>e.showTitleHelp=t),data:e.helpData.title},null,8,["modelValue","data"])])],64)}));var h=a(7996),f=a(1959),g=a(6823),w=a(1364),y=a(6513),b=a(8875);const T=(0,o.aZ)({name:"ScreenStart",components:{InfoDialog:g.Z},setup(){(0,o.ic)((()=>{const{setErrorStateScreenStart:e}=(0,y.v)();e(document.getElementsByClassName("has-error").length>0)}));const{message:e,title:t,type:a,setMessage:s,setTitle:l,setType:i}=(0,w.Y)(),{errors:r}=(0,b.V)(),n=(0,o.Fl)((()=>h.Tc.filter((0,h.uY)(r.value)).map((e=>e.replace.message)))),m=(0,o.Fl)((()=>h.Sh.filter((0,h.uY)(r.value)).map((e=>e.replace.message)))),p=()=>{const t=/(software|dataset)/gim,o=t.exec(e.value);o&&s(e.value.split(o[0]).join(a.value))},c={type:{title:"type",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#type",description:"The type of the work that is being described by this CITATION.cff file."},title:{title:"title",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#title",description:"The name of the software or dataset.",examples:["cffconvert","Firefox","LibreOffice"]},message:{title:"message",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#message",description:"A message to the human reader of the CITATION.cff file to let them know what to do with the citation metadata.",examples:["If you use this software, please cite it using the metadata from this file.","Please cite this software using these metadata.",'Please cite this software using the metadata from "preferred-citation".']}};return{helpData:c,message:e,messageErrors:n,showMessageHelp:(0,f.iH)(!1),showTitleHelp:(0,f.iH)(!1),showTypeHelp:(0,f.iH)(!1),title:t,titleErrors:m,type:a,typeOptions:[{label:"Software",value:"software"},{label:"Dataset",value:"dataset"}],setMessage:s,setMessagePlaceHolder:p,setTitle:l,setType:i}}});var v=a(4554),H=a(7011),W=a(4842),V=a(7518),k=a.n(V);T.render=d,T.__scopeId="data-v-10547b92";const I=T;k()(T,"components",{QIcon:v.Z,QOptionGroup:H.Z,QInput:W.Z})}}]);