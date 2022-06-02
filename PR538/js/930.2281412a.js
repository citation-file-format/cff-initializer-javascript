"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[930],{6188:(e,o,a)=>{a.r(o),a.d(o,{default:()=>oe});var t=a(3673);const n=(0,t.HX)("data-v-b124b05c");(0,t.dD)("data-v-b124b05c");const l={id:"metroline"},i={id:"form"},r=(0,t.Wm)("div",{id:"form-title"},[(0,t.Wm)("h1",{class:"page-title"}," Authors ")],-1),s={id:"form-content"},d={class:"question"},u=(0,t.Uk)(" Who are the author(s) of the work? "),m={class:"scroll-to-bottom-container"},c=(0,t.Wm)("span",{class:"bottom"},null,-1),v=(0,t.Uk)(" Add author "),p={id:"form-button-bar"};(0,t.Cn)();const f=n(((e,o,a,f,h,b)=>{const g=(0,t.up)("Stepper"),w=(0,t.up)("SchemaGuideLink"),W=(0,t.up)("AuthorCardViewing"),k=(0,t.up)("AuthorCardEditing"),y=(0,t.up)("q-btn"),x=((0,t.up)("q-banner"),(0,t.up)("StepperActions"));return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("div",l,[(0,t.Wm)(g)]),(0,t.Wm)("div",i,[r,(0,t.Wm)("div",s,[(0,t.Wm)("p",d,[u,(0,t.Wm)(w,{anchor:"#authors"})]),(0,t.Wm)("div",m,[c,(0,t.Wm)("div",null,[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.authors,((a,n)=>((0,t.wg)(),(0,t.j4)("div",{class:"q-mb-md q-mr-lg",key:n},[e.editingId!==n?((0,t.wg)(),(0,t.j4)(W,{key:0,index:n,author:a,"num-authors":e.authors.length,onEditPressed:()=>e.editingId=n,onMoveDown:o=>e.moveAuthorDown(n),onMoveUp:o=>e.moveAuthorUp(n)},null,8,["index","author","num-authors","onEditPressed","onMoveDown","onMoveUp"])):((0,t.wg)(),(0,t.j4)(k,(0,t.dG)({key:1,index:n,"num-authors":e.authors.length},a,{onUpdate:e.setAuthorField,onClosePressed:o[1]||(o[1]=()=>e.editingId=-1),onRemovePressed:e.removeAuthor,onMoveDown:o=>e.moveAuthorDown(n),onMoveUp:o=>e.moveAuthorUp(n)}),null,16,["index","num-authors","onUpdate","onRemovePressed","onMoveDown","onMoveUp"]))])))),128))])]),(0,t.Wm)(y,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addAuthor},{default:n((()=>[v])),_:1},8,["onClick"]),(0,t.kq)("",!0)]),(0,t.Wm)("div",p,[(0,t.Wm)(x)])])],64)}));var h=a(1959),b=a(1622),g=a(4985),w=a(2334);const W=(0,t.HX)("data-v-0ae280f0");(0,t.dD)("data-v-0ae280f0");const k={class:"row"},y=(0,t.Uk)(" The person's given names "),x={class:"row"},A={class:"row"},U=(0,t.Uk)(" The person's last names, split into parts "),C={class:"row"},q={class:"row"},S=(0,t.Uk)(" The person's email address "),D={class:"row"},_={class:"row"},I=(0,t.Uk)(" The person's affiliation "),P=(0,t.Uk)(" The person's ORCID "),Z={class:"row"};(0,t.Cn)();const N=W(((e,o,a,n,l,i)=>{const r=(0,t.up)("SchemaGuideLink"),s=(0,t.up)("q-label"),d=(0,t.up)("q-input"),u=((0,t.up)("q-banner"),(0,t.up)("q-btn")),m=(0,t.up)("q-card-actions"),c=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(c,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:W((()=>[(0,t.Wm)("div",k,[(0,t.Wm)(s,{class:"text-dark"},{default:W((()=>[y,(0,t.Wm)(r,{anchor:"#definitionspersongiven-names"})])),_:1})]),(0,t.Wm)("div",x,[(0,t.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"given-names",outlined:"",standout:"",title:"The person's given names.","model-value":e.givenNames,error:!1,"error-message":"","onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update","givenNames",o)),ref:"givenNamesRef"},null,8,["model-value"])]),(0,t.Wm)("div",A,[(0,t.Wm)(s,{class:"text-dark"},{default:W((()=>[U])),_:1})]),(0,t.Wm)("div",C,[(0,t.Wm)(d,{"bg-color":"white",class:"col-3",dense:"",label:"name-particle",outlined:"",standout:"",title:"The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt').","model-value":e.nameParticle,error:!1,"error-message":"","onUpdate:modelValue":o[2]||(o[2]=o=>e.$emit("update","nameParticle",o))},{default:W((()=>[(0,t.Wm)(r,{anchor:"#definitionspersonname-particle",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,t.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"family-names",outlined:"",standout:"",title:"The person's family names.","model-value":e.familyNames,error:!1,"error-message":"","onUpdate:modelValue":o[3]||(o[3]=o=>e.$emit("update","familyNames",o))},{default:W((()=>[(0,t.Wm)(r,{anchor:"#definitionspersonfamily-names",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,t.Wm)(d,{"bg-color":"white",class:"col-3",dense:"",label:"name-suffix",outlined:"",standout:"",title:"The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III.","model-value":e.nameSuffix,error:!1,"error-message":"","onUpdate:modelValue":o[4]||(o[4]=o=>e.$emit("update","nameSuffix",o))},{default:W((()=>[(0,t.Wm)(r,{anchor:"#definitionspersonname-suffix",class:"q-pt-sm"})])),_:1},8,["model-value"])]),(0,t.Wm)("div",q,[(0,t.Wm)(s,{class:"text-dark"},{default:W((()=>[S,(0,t.Wm)(r,{anchor:"#definitionsperson-email"})])),_:1})]),(0,t.Wm)("div",D,[(0,t.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"email",outlined:"",standout:"",title:"The person's email address.",type:"email","model-value":e.email,error:!1,"error-message":"","onUpdate:modelValue":o[5]||(o[5]=o=>e.$emit("update","email",o))},null,8,["model-value"])]),(0,t.Wm)("div",_,[(0,t.Wm)(s,{class:"text-dark col"},{default:W((()=>[I,(0,t.Wm)(r,{anchor:"#definitionsperson-affiliation"})])),_:1}),(0,t.Wm)(s,{class:"text-dark col"},{default:W((()=>[P,(0,t.Wm)(r,{anchor:"#definitionsperson-orcid"})])),_:1})]),(0,t.Wm)("div",Z,[(0,t.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"affiliation",outlined:"",standout:"",title:"The person's affiliation.","model-value":e.affiliation,error:!1,"error-message":"","onUpdate:modelValue":o[6]||(o[6]=o=>e.$emit("update","affiliation",o))},null,8,["model-value"]),(0,t.Wm)(d,{"bg-color":"white",class:"col",dense:"",hint:"Format: https://orcid.org/0000-0000-0000-0000",label:"orcid",outlined:"",standout:"",title:"The person's ORCID identifier.","model-value":e.orcid,error:!1,"error-message":"","onUpdate:modelValue":o[7]||(o[7]=o=>e.$emit("update","orcid",o))},null,8,["model-value"])]),(0,t.kq)("",!0),(0,t.Wm)(m,{align:"right"},{default:W((()=>[(0,t.Wm)(u,{color:"blue",dense:"",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[8]||(o[8]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,t.Wm)(u,{color:"blue",dense:"",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[9]||(o[9]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,t.Wm)(u,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:o[10]||(o[10]=o=>e.$emit("removePressed"))}),(0,t.Wm)(u,{dense:"",icon:"done",label:"Done",onClick:o[11]||(o[11]=o=>e.$emit("closePressed"))})])),_:1})])),_:1})})),$=(0,t.aZ)({name:"AuthorCardEditing",props:{index:{type:Number,required:!0},givenNames:{type:String,default:""},nameParticle:{type:String,default:""},familyNames:{type:String,default:""},nameSuffix:{type:String,default:""},email:{type:String,default:""},affiliation:{type:String,default:""},orcid:{type:String,default:""},numAuthors:{type:Number,default:0}},setup(e){const o=(0,h.iH)(null);return(0,t.bv)((()=>{var e;null===(e=o.value)||void 0===e||e.focus()})),{givenNamesRef:o}},emits:["closePressed","removePressed","update","moveUp","moveDown"],components:{SchemaGuideLink:b.Z}});var T=a(151),V=a(4842),j=a(5607),Q=a(9367),H=a(2165),M=a(7518),z=a.n(M);$.render=N,$.__scopeId="data-v-0ae280f0";const E=$;z()($,"components",{QCard:T.Z,QInput:V.Z,QBanner:j.Z,QCardActions:Q.Z,QBtn:H.Z});var R=a(2323);const B=(0,t.HX)("data-v-62cd4d4b");(0,t.dD)("data-v-62cd4d4b");const G={style:{"flex-grow":"1.0"}};(0,t.Cn)();const O=B(((e,o,a,n,l,i)=>{const r=(0,t.up)("q-btn"),s=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(s,{bordered:"",class:["bg-formcard",""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:B((()=>[(0,t.Wm)("div",G,[(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,(0,R.zw)(e.author.givenNames)+" "+(0,R.zw)(e.author.nameParticle)+" "+(0,R.zw)(e.author.familyNames)+" "+(0,R.zw)(e.author.nameSuffix),1),(0,t.Wm)("li",null,(0,R.zw)(e.author.email),1),(0,t.Wm)("li",null,(0,R.zw)(e.author.affiliation)+" "+(0,R.zw)(e.author.orcid),1)])]),(0,t.Wm)("div",null,[(0,t.Wm)(r,{class:"author-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[1]||(o[1]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,t.Wm)(r,{class:"author-button",color:"blue",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,t.Wm)(r,{class:"author-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:o[3]||(o[3]=o=>e.$emit("editPressed"))})])])),_:1})})),F=(0,t.aZ)({name:"AuthorCardViewing",props:{index:{type:Number,required:!0},author:{type:Object,required:!0},numAuthors:{type:Number,default:0}},emits:["editPressed","moveDown","moveUp"]});F.render=O,F.__scopeId="data-v-62cd4d4b";const L=F;z()(F,"components",{QCard:T.Z,QBtn:H.Z});var Y=a(2064),X=a(1364),J=a(4009),K=function(e,o,a,t){function n(e){return e instanceof a?e:new a((function(o){o(e)}))}return new(a||(a=Promise))((function(a,l){function i(e){try{s(t.next(e))}catch(o){l(o)}}function r(e){try{s(t["throw"](e))}catch(o){l(o)}}function s(e){e.done?a(e.value):n(e.value).then(i,r)}s((t=t.apply(e,o||[])).next())}))};const ee=(0,t.aZ)({name:"ScreenAuthors",components:{SchemaGuideLink:b.Z,Stepper:g.Z,StepperActions:w.Z,AuthorCardEditing:E,AuthorCardViewing:L},setup(){const{authors:e,setAuthors:o}=(0,X.Y)(),a=(0,h.iH)(0),n=()=>K(this,void 0,void 0,(function*(){let n;const l={};n=void 0===e.value?[l]:[...e.value,l],o(n),a.value=n.length-1,yield(0,t.Y3)(),(0,J.O)()})),l=()=>{if(void 0!==e.value){const t=[...e.value];t.splice(a.value,1),o(t),a.value=-1,Array.isArray(t)&&0===t.length&&o(void 0)}},i=(t,n)=>{if(void 0!==e.value){const l=Object.assign({},e.value[a.value]);l[t]=""===n?void 0:n,e.value[a.value]=l,o(e.value)}},r=t=>{void 0!==e.value&&((0,Y.A)(t,e.value,o),a.value===t&&t>0?a.value=a.value-1:a.value===t-1&&(a.value=a.value+1))},s=t=>{void 0!==e.value&&((0,Y.v)(t,e.value,o),a.value===t&&t<e.value.length-1?a.value=a.value+1:a.value===t+1&&(a.value=a.value-1))};return{addAuthor:n,authors:e,editingId:a,moveAuthorDown:s,moveAuthorUp:r,removeAuthor:l,setAuthorField:i}}});ee.render=f,ee.__scopeId="data-v-b124b05c";const oe=ee;z()(ee,"components",{QBtn:H.Z,QBanner:j.Z})}}]);