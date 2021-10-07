"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[430],{1034:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var i=a(3673);const l=(0,i.HX)("data-v-6fc40744");(0,i.dD)("data-v-6fc40744");const o={id:"metroline"},n={id:"form"},r=(0,i.Wm)("div",{id:"form-title"},[(0,i.Wm)("h1",{class:"page-title"}," Authors ")],-1),d={id:"form-content"},s=(0,i.Uk)(" Add author "),u={id:"form-button-bar"};(0,i.Cn)();const m=l(((e,t,a,m,c,p)=>{const f=(0,i.up)("Stepper"),v=(0,i.up)("AuthorViewCard"),h=(0,i.up)("AuthorEditCard"),w=(0,i.up)("q-btn"),g=(0,i.up)("StepperActions");return(0,i.wg)(),(0,i.j4)(i.HY,null,[(0,i.Wm)("div",o,[(0,i.Wm)(f)]),(0,i.Wm)("div",n,[r,(0,i.Wm)("div",d,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(e.authors,((a,l)=>((0,i.wg)(),(0,i.j4)("div",{key:l,class:"q-mb-md"},[e.editingId!==l?((0,i.wg)(),(0,i.j4)(v,{key:0,index:l,author:a,onEditPressed:()=>e.editingId=l},null,8,["index","author","onEditPressed"])):((0,i.wg)(),(0,i.j4)(h,(0,i.dG)({key:1,index:l},a,{onUpdate:e.setAuthorField,onClosePressed:t[1]||(t[1]=()=>e.editingId=-1),onRemovePressed:e.removeAuthor}),null,16,["index","onUpdate","onRemovePressed"]))])))),128)),(0,i.Wm)(w,{"no-caps":"",onClick:e.addAuthor,color:"primary"},{default:l((()=>[s])),_:1},8,["onClick"])]),(0,i.Wm)("div",u,[(0,i.Wm)(g)])])],64)}));var c=a(1959),p=a(1069),f=a(5161);const v={class:"q-gutter-xl row items-center no-wrap"},h={class:"q-gutter-md items-center no-wrap"},w={class:"q-gutter-md row items-center no-wrap"},g={class:"col"},b={class:"col"};function W(e,t,a,l,o,n){const r=(0,i.up)("q-input"),d=(0,i.up)("q-card-section"),s=(0,i.up)("q-btn"),u=(0,i.up)("q-card-actions"),m=(0,i.up)("q-card");return(0,i.wg)(),(0,i.j4)(m,{flat:"",bordered:"",class:"bg-formcard"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)("div",v,[(0,i.Wm)(r,{"bg-color":"white",label:"Given name(s)",outlined:"",standout:"",dense:"","model-value":e.givenNames,"onUpdate:modelValue":t[1]||(t[1]=t=>e.$emit("update","givenNames",t)),rules:[e.validateGivenNames]},null,8,["model-value","rules"]),(0,i.Wm)(r,{"bg-color":"white",label:"Name particle",title:"The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt').",outlined:"",standout:"",dense:"","model-value":e.nameParticle,"onUpdate:modelValue":t[2]||(t[2]=t=>e.$emit("update","nameParticle",t)),rules:[e.validateNameParticle]},null,8,["model-value","rules"]),(0,i.Wm)(r,{"bg-color":"white",label:"Family name(s)",outlined:"",standout:"",dense:"","model-value":e.familyNames,"onUpdate:modelValue":t[3]||(t[3]=t=>e.$emit("update","familyNames",t)),rules:[e.validateFamilyNames]},null,8,["model-value","rules"]),(0,i.Wm)(r,{"bg-color":"white",label:"Suffix",outlined:"",standout:"",dense:"",title:"The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III.","model-value":e.nameSuffix,"onUpdate:modelValue":t[4]||(t[4]=t=>e.$emit("update","nameSuffix",t)),rules:[e.validateNameSuffix]},null,8,["model-value","rules"])]),(0,i.Wm)("div",h,[(0,i.Wm)(r,{"bg-color":"white",label:"Email",outlined:"",standout:"",dense:"",type:"email","model-value":e.email,"onUpdate:modelValue":t[5]||(t[5]=t=>e.$emit("update","email",t)),rules:[e.validateEmail]},null,8,["model-value","rules"])]),(0,i.Wm)("div",w,[(0,i.Wm)("div",g,[(0,i.Wm)(r,{"bg-color":"white",label:"Affiliation",outlined:"",standout:"",dense:"","model-value":e.affiliation,"onUpdate:modelValue":t[6]||(t[6]=t=>e.$emit("update","affiliation",t)),rules:[e.validateAffiliation]},null,8,["model-value","rules"])]),(0,i.Wm)("div",b,[(0,i.Wm)(r,{"bg-color":"white",label:"Orcid",outlined:"",standout:"",dense:"","model-value":e.orcid,"onUpdate:modelValue":t[7]||(t[7]=t=>e.$emit("update","orcid",t)),rules:[e.validateOrcid]},null,8,["model-value","rules"])])])])),_:1}),(0,i.Wm)(u,{align:"between"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{icon:"delete",color:"negative",label:"Remove",dense:"",onClick:t[8]||(t[8]=t=>e.$emit("removePressed"))}),(0,i.Wm)(s,{icon:"close",label:"Close",dense:"",onClick:t[9]||(t[9]=t=>e.$emit("closePressed"))})])),_:1})])),_:1})}var y=a(4334);const N=(0,i.aZ)({name:"AuthorEditCard",props:{index:{type:Number,required:!0},givenNames:{type:String,default:""},nameParticle:{type:String,default:""},nameSuffix:{type:String,default:""},orcid:{type:String,default:""},familyNames:{type:String,default:""},affiliation:{type:String,default:""},email:{type:String,default:""}},setup(){return{validateGivenNames:(0,y.zN)("/definitions/person/properties/given-names"),validateNameParticle:(0,y.zN)("/definitions/person/properties/name-particle"),validateNameSuffix:(0,y.zN)("/definitions/person/properties/name-suffix"),validateFamilyNames:(0,y.zN)("/definitions/person/properties/family-names"),validateAffiliation:(0,y.zN)("/definitions/person/properties/affiliation"),validateEmail:(0,y.zN)("/definitions/person/properties/email"),validateOrcid:(0,y.zN)("/definitions/person/properties/orcid")}},emits:["closePressed","removePressed","update"]});var A=a(151),C=a(5589),S=a(1206),x=a(9367),k=a(9892),q=a(7518),P=a.n(q);N.render=W;const z=N;P()(N,"components",{QCard:A.Z,QCardSection:C.Z,QInput:S.Z,QCardActions:x.Z,QBtn:k.Z});var E=a(2323);const Z={class:"row items-center no-wrap"},I={class:"col-11"},U={class:"text-subtitle1"},j={class:"text-subtitle1"},V={class:"col-1"};function $(e,t,a,l,o,n){const r=(0,i.up)("q-btn"),d=(0,i.up)("q-card-section"),s=(0,i.up)("q-card");return(0,i.wg)(),(0,i.j4)(s,{flat:"",bordered:"",class:"bg-formcard",onMouseover:t[2]||(t[2]=t=>e.showEdit=!0),onMouseleave:t[3]||(t[3]=t=>e.showEdit=!1)},{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)("div",Z,[(0,i.Wm)("div",I,[(0,i.Wm)("div",U,(0,E.zw)(e.author.givenNames)+" "+(0,E.zw)(e.author.nameParticle)+" "+(0,E.zw)(e.author.familyNames)+" "+(0,E.zw)(e.author.nameSuffix),1),(0,i.Wm)("div",j,(0,E.zw)(e.author.email),1)]),(0,i.Wm)("div",V,[e.showEdit?((0,i.wg)(),(0,i.j4)(r,{key:0,color:"primary",round:"",flat:"",icon:"edit",title:"Edit",onClick:t[1]||(t[1]=t=>e.$emit("editPressed"))})):(0,i.kq)("",!0)])])])),_:1}),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,E.zw)(e.author.affiliation)+" "+(0,E.zw)(e.author.orcid),1)])),_:1})])),_:1})}const Q=(0,i.aZ)({name:"AuthorViewCard",props:{index:{type:Number,required:!0},author:{type:Object,required:!0}},setup(){const e=(0,c.iH)(!1);return{showEdit:e}},emits:["editPressed"]});Q.render=$;const _=Q;P()(Q,"components",{QCard:A.Z,QCardSection:C.Z,QBtn:k.Z});var F=a(1364);const H=(0,i.aZ)({name:"Authors",components:{Stepper:p.Z,StepperActions:f.Z,AuthorEditCard:z,AuthorViewCard:_},setup(){const{authors:e,setAuthors:t}=(0,F.Y)(),a=(0,c.iH)(-1);return{authors:e,editingId:a,setAuthorField(i,l){const o=Object.assign({},e.value[a.value]);o[i]=l,e.value[a.value]=o,t(e.value)},removeAuthor(){const i=[...e.value];i.splice(a.value,1),t(i),a.value=-1},addAuthor(){const i={},l=[...e.value,i];t(l),a.value=l.length-1}}}});H.render=m,H.__scopeId="data-v-6fc40744";const O=H;P()(H,"components",{QBtn:k.Z})}}]);