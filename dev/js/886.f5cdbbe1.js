"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[886],{1603:(e,o,a)=>{a.r(o),a.d(o,{default:()=>oe});var n=a(3673);const t=(0,n.HX)("data-v-b124b05c");(0,n.dD)("data-v-b124b05c");const l={id:"metroline"},i={id:"form"},r=(0,n.Wm)("div",{id:"form-title"},[(0,n.Wm)("h1",{class:"page-title"}," Authors ")],-1),s={id:"form-content"},d={class:"question"},u=(0,n.Uk)(" Who are the author(s) of the work? "),m={class:"scroll-to-bottom-container"},c=(0,n.Wm)("span",{class:"bottom"},null,-1),v=(0,n.Uk)(" Add author "),p={id:"form-button-bar"};(0,n.Cn)();const f=t(((e,o,a,f,h,b)=>{const g=(0,n.up)("Stepper"),w=(0,n.up)("SchemaGuideLink"),W=(0,n.up)("AuthorCardViewing"),y=(0,n.up)("AuthorCardEditing"),A=(0,n.up)("q-btn"),k=((0,n.up)("q-banner"),(0,n.up)("StepperActions"));return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",l,[(0,n.Wm)(g)]),(0,n.Wm)("div",i,[r,(0,n.Wm)("div",s,[(0,n.Wm)("p",d,[u,(0,n.Wm)(w,{anchor:"#authors"})]),(0,n.Wm)("div",m,[c,(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.authors,((a,t)=>((0,n.wg)(),(0,n.j4)("div",{class:"q-mb-md q-mr-lg",key:t},[e.editingId!==t?((0,n.wg)(),(0,n.j4)(W,{key:0,index:t,author:a,"num-authors":e.authors.length,onEditPressed:()=>e.editingId=t,onMoveDown:o=>e.moveAuthorDown(t),onMoveUp:o=>e.moveAuthorUp(t)},null,8,["index","author","num-authors","onEditPressed","onMoveDown","onMoveUp"])):((0,n.wg)(),(0,n.j4)(y,(0,n.dG)({key:1,index:t,"num-authors":e.authors.length},a,{onUpdate:e.setAuthorField,onClosePressed:o[1]||(o[1]=()=>e.editingId=-1),onRemovePressed:e.removeAuthor,onMoveDown:o=>e.moveAuthorDown(t),onMoveUp:o=>e.moveAuthorUp(t)}),null,16,["index","num-authors","onUpdate","onRemovePressed","onMoveDown","onMoveUp"]))])))),128))])]),(0,n.Wm)(A,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addAuthor},{default:t((()=>[v])),_:1},8,["onClick"]),(0,n.kq)("",!0)]),(0,n.Wm)("div",p,[(0,n.Wm)(k)])])],64)}));var h=a(1959),b=a(1622),g=a(4985),w=a(2334);const W=(0,n.HX)("data-v-29ac625c");(0,n.dD)("data-v-29ac625c");const y={class:"row"},A=(0,n.Uk)(" The person's given names "),k={class:"row"},x={class:"row"},q=(0,n.Uk)(" The person's last names, split into parts "),U={class:"row"},C={class:"row"},S=(0,n.Uk)(" The person's email address "),D={class:"row"},_={class:"row"},I=(0,n.Uk)(" The person's affiliation "),P=(0,n.Uk)(" The person's ORCID "),Z={class:"row"};(0,n.Cn)();const N=W(((e,o,a,t,l,i)=>{const r=(0,n.up)("SchemaGuideLink"),s=(0,n.up)("q-label"),d=(0,n.up)("q-input"),u=(0,n.up)("q-btn"),m=(0,n.up)("q-card-actions"),c=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(c,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:W((()=>[(0,n.Wm)("div",y,[(0,n.Wm)(s,{class:"question"},{default:W((()=>[A,(0,n.Wm)(r,{anchor:"#definitionspersongiven-names"})])),_:1})]),(0,n.Wm)("div",k,[(0,n.Wm)(d,{autofocus:"","bg-color":"white",class:"col",dense:"",label:"given-names",outlined:"",standout:"",title:"The person's given names.","model-value":e.givenNames,error:!1,"error-message":"","onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update","givenNames",o)),ref:"givenNamesRef"},null,8,["model-value"])]),(0,n.Wm)("div",x,[(0,n.Wm)(s,{class:"question"},{default:W((()=>[q])),_:1})]),(0,n.Wm)("div",U,[(0,n.Wm)(d,{"bg-color":"white",class:"col-3",dense:"",label:"name-particle",outlined:"",standout:"",title:"The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt').","model-value":e.nameParticle,error:!1,"error-message":"","onUpdate:modelValue":o[2]||(o[2]=o=>e.$emit("update","nameParticle",o))},{default:W((()=>[(0,n.Wm)(r,{anchor:"#definitionspersonname-particle",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,n.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"family-names",outlined:"",standout:"",title:"The person's family names.","model-value":e.familyNames,error:!1,"error-message":"","onUpdate:modelValue":o[3]||(o[3]=o=>e.$emit("update","familyNames",o))},{default:W((()=>[(0,n.Wm)(r,{anchor:"#definitionspersonfamily-names",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,n.Wm)(d,{"bg-color":"white",class:"col-3",dense:"",label:"name-suffix",outlined:"",standout:"",title:"The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III.","model-value":e.nameSuffix,error:!1,"error-message":"","onUpdate:modelValue":o[4]||(o[4]=o=>e.$emit("update","nameSuffix",o))},{default:W((()=>[(0,n.Wm)(r,{anchor:"#definitionspersonname-suffix",class:"q-pt-sm"})])),_:1},8,["model-value"])]),(0,n.Wm)("div",C,[(0,n.Wm)(s,{class:"question"},{default:W((()=>[S,(0,n.Wm)(r,{anchor:"#definitionsperson-email"})])),_:1})]),(0,n.Wm)("div",D,[(0,n.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"email",outlined:"",standout:"",title:"The person's email address.",type:"email","model-value":e.email,error:!1,"error-message":"","onUpdate:modelValue":o[5]||(o[5]=o=>e.$emit("update","email",o))},null,8,["model-value"])]),(0,n.Wm)("div",_,[(0,n.Wm)(s,{class:"question col"},{default:W((()=>[I,(0,n.Wm)(r,{anchor:"#definitionsperson-affiliation"})])),_:1}),(0,n.Wm)(s,{class:"question col"},{default:W((()=>[P,(0,n.Wm)(r,{anchor:"#definitionsperson-orcid"})])),_:1})]),(0,n.Wm)("div",Z,[(0,n.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"affiliation",outlined:"",standout:"",title:"The person's affiliation.","model-value":e.affiliation,error:!1,"error-message":"","onUpdate:modelValue":o[6]||(o[6]=o=>e.$emit("update","affiliation",o))},null,8,["model-value"]),(0,n.Wm)(d,{"bg-color":"white",class:"col",dense:"",hint:"Format: https://orcid.org/0000-0000-0000-0000",label:"orcid",outlined:"",standout:"",title:"The person's ORCID identifier.","model-value":e.orcid,error:!1,"error-message":"","onUpdate:modelValue":o[7]||(o[7]=o=>e.$emit("update","orcid",o))},null,8,["model-value"])]),(0,n.Wm)(m,{align:"right"},{default:W((()=>[(0,n.Wm)(u,{color:"blue",dense:"",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[8]||(o[8]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,n.Wm)(u,{color:"blue",dense:"",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[9]||(o[9]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,n.Wm)(u,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:o[10]||(o[10]=o=>e.$emit("removePressed"))}),(0,n.Wm)(u,{dense:"",icon:"done",label:"Done",onClick:o[11]||(o[11]=o=>e.$emit("closePressed"))})])),_:1})])),_:1})})),$=(0,n.aZ)({name:"AuthorCardEditing",props:{index:{type:Number,required:!0},givenNames:{type:String,default:""},nameParticle:{type:String,default:""},familyNames:{type:String,default:""},nameSuffix:{type:String,default:""},email:{type:String,default:""},affiliation:{type:String,default:""},orcid:{type:String,default:""},numAuthors:{type:Number,default:0}},setup(){const e=(0,h.iH)(null);return{givenNamesRef:e}},emits:["closePressed","removePressed","update","moveUp","moveDown"],components:{SchemaGuideLink:b.Z}});var T=a(151),V=a(4842),j=a(9367),H=a(2165),M=a(7518),Q=a.n(M);$.render=N,$.__scopeId="data-v-29ac625c";const z=$;Q()($,"components",{QCard:T.Z,QInput:V.Z,QCardActions:j.Z,QBtn:H.Z});var E=a(2323);const R=(0,n.HX)("data-v-62cd4d4b");(0,n.dD)("data-v-62cd4d4b");const G={style:{"flex-grow":"1.0"}};(0,n.Cn)();const O=R(((e,o,a,t,l,i)=>{const r=(0,n.up)("q-btn"),s=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(s,{bordered:"",class:["bg-formcard",""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:R((()=>[(0,n.Wm)("div",G,[(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,(0,E.zw)(e.author.givenNames)+" "+(0,E.zw)(e.author.nameParticle)+" "+(0,E.zw)(e.author.familyNames)+" "+(0,E.zw)(e.author.nameSuffix),1),(0,n.Wm)("li",null,(0,E.zw)(e.author.email),1),(0,n.Wm)("li",null,(0,E.zw)(e.author.affiliation)+" "+(0,E.zw)(e.author.orcid),1)])]),(0,n.Wm)("div",null,[(0,n.Wm)(r,{class:"author-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[1]||(o[1]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,n.Wm)(r,{class:"author-button",color:"blue",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,n.Wm)(r,{class:"author-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:o[3]||(o[3]=o=>e.$emit("editPressed"))})])])),_:1})})),B=(0,n.aZ)({name:"AuthorCardViewing",props:{index:{type:Number,required:!0},author:{type:Object,required:!0},numAuthors:{type:Number,default:0}},emits:["editPressed","moveDown","moveUp"]});B.render=O,B.__scopeId="data-v-62cd4d4b";const F=B;Q()(B,"components",{QCard:T.Z,QBtn:H.Z});var L=a(2064),Y=a(1364),X=a(4009),J=function(e,o,a,n){function t(e){return e instanceof a?e:new a((function(o){o(e)}))}return new(a||(a=Promise))((function(a,l){function i(e){try{s(n.next(e))}catch(o){l(o)}}function r(e){try{s(n["throw"](e))}catch(o){l(o)}}function s(e){e.done?a(e.value):t(e.value).then(i,r)}s((n=n.apply(e,o||[])).next())}))};const K=(0,n.aZ)({name:"ScreenAuthors",components:{SchemaGuideLink:b.Z,Stepper:g.Z,StepperActions:w.Z,AuthorCardEditing:z,AuthorCardViewing:F},setup(){const{authors:e,setAuthors:o}=(0,Y.Y)(),a=(0,h.iH)(0),t=()=>J(this,void 0,void 0,(function*(){let t;const l={};t=void 0===e.value?[l]:[...e.value,l],o(t),a.value=t.length-1,yield(0,n.Y3)(),(0,X.O)()})),l=()=>{if(void 0!==e.value){const n=[...e.value];n.splice(a.value,1),o(n),a.value=-1,Array.isArray(n)&&0===n.length&&o(void 0)}},i=(n,t)=>{if(void 0!==e.value){const l=Object.assign({},e.value[a.value]);l[n]=""===t?void 0:t,e.value[a.value]=l,o(e.value)}},r=n=>{void 0!==e.value&&((0,L.A)(n,e.value,o),a.value===n&&n>0?a.value=a.value-1:a.value===n-1&&(a.value=a.value+1))},s=n=>{void 0!==e.value&&((0,L.v)(n,e.value,o),a.value===n&&n<e.value.length-1?a.value=a.value+1:a.value===n+1&&(a.value=a.value-1))};return{addAuthor:t,authors:e,editingId:a,moveAuthorDown:s,moveAuthorUp:r,removeAuthor:l,setAuthorField:i}}});var ee=a(5607);K.render=f,K.__scopeId="data-v-b124b05c";const oe=K;Q()(K,"components",{QBtn:H.Z,QBanner:ee.Z})}}]);