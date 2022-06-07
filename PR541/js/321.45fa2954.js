"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[321],{3176:(e,o,a)=>{a.r(o),a.d(o,{default:()=>oe});var t=a(3673);const n=(0,t.HX)("data-v-289d9500");(0,t.dD)("data-v-289d9500");const l={id:"metroline"},i={id:"form"},r=(0,t.Wm)("div",{id:"form-title"},[(0,t.Wm)("h1",{class:"page-title"}," Authors ")],-1),s={id:"form-content"},d={class:"question"},u=(0,t.Uk)(" Who are the author(s) of the work? "),m={class:"scroll-to-bottom-container"},c=(0,t.Wm)("span",{class:"bottom"},null,-1),v=(0,t.Uk)(" Add author "),p={id:"form-button-bar"};(0,t.Cn)();const f=n(((e,o,a,f,h,g)=>{const b=(0,t.up)("Stepper"),w=(0,t.up)("SchemaGuideLink"),W=(0,t.up)("AuthorCardViewing"),k=(0,t.up)("AuthorCardEditing"),y=(0,t.up)("q-btn"),x=((0,t.up)("q-banner"),(0,t.up)("StepperActions"));return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("div",l,[(0,t.Wm)(b)]),(0,t.Wm)("div",i,[r,(0,t.Wm)("div",s,[(0,t.Wm)("p",d,[u,(0,t.Wm)(w,{anchor:"#authors"})]),(0,t.Wm)("div",m,[c,(0,t.Wm)("div",null,[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.authors,((a,n)=>((0,t.wg)(),(0,t.j4)("div",{class:"q-mb-md q-mr-lg",key:n},[e.editingId!==n?((0,t.wg)(),(0,t.j4)(W,{key:0,index:n,author:a,"num-authors":e.authors.length,onEditPressed:()=>e.editingId=n,onMoveDown:o=>e.moveAuthorDown(n),onMoveUp:o=>e.moveAuthorUp(n)},null,8,["index","author","num-authors","onEditPressed","onMoveDown","onMoveUp"])):((0,t.wg)(),(0,t.j4)(k,(0,t.dG)({key:1,index:n,"num-authors":e.authors.length},a,{onUpdate:e.setAuthorField,onClosePressed:o[1]||(o[1]=()=>e.editingId=-1),onRemovePressed:e.removeAuthor,onMoveDown:o=>e.moveAuthorDown(n),onMoveUp:o=>e.moveAuthorUp(n)}),null,16,["index","num-authors","onUpdate","onRemovePressed","onMoveDown","onMoveUp"]))])))),128))])]),(0,t.Wm)(y,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addAuthor},{default:n((()=>[v])),_:1},8,["onClick"]),(0,t.kq)("",!0)]),(0,t.Wm)("div",p,[(0,t.Wm)(x)])])],64)}));var h=a(1959),g=a(2064);const b=(0,t.HX)("data-v-1e5824f2");(0,t.dD)("data-v-1e5824f2");const w={class:"row"},W=(0,t.Uk)(" The person's given names "),k={class:"row"},y={class:"row"},x=(0,t.Uk)(" The person's last names, split into parts "),A={class:"row"},U={class:"row"},C=(0,t.Uk)(" The person's email address "),q={class:"row"},S={class:"row"},D=(0,t.Uk)(" The person's affiliation "),_=(0,t.Uk)(" The person's ORCID "),I={class:"row"};(0,t.Cn)();const P=b(((e,o,a,n,l,i)=>{const r=(0,t.up)("SchemaGuideLink"),s=(0,t.up)("q-label"),d=(0,t.up)("q-input"),u=((0,t.up)("q-banner"),(0,t.up)("q-btn")),m=(0,t.up)("q-card-actions"),c=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(c,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:b((()=>[(0,t.Wm)("div",w,[(0,t.Wm)(s,{class:"text-dark"},{default:b((()=>[W,(0,t.Wm)(r,{anchor:"#definitionspersongiven-names"})])),_:1})]),(0,t.Wm)("div",k,[(0,t.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"given-names",outlined:"",standout:"",title:"The person's given names.","model-value":e.givenNames,error:!1,"error-message":"","onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update","givenNames",o)),ref:"givenNamesRef"},null,8,["model-value"])]),(0,t.Wm)("div",y,[(0,t.Wm)(s,{class:"text-dark"},{default:b((()=>[x])),_:1})]),(0,t.Wm)("div",A,[(0,t.Wm)(d,{"bg-color":"white",class:"col-3",dense:"",label:"name-particle",outlined:"",standout:"",title:"The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt').","model-value":e.nameParticle,error:!1,"error-message":"","onUpdate:modelValue":o[2]||(o[2]=o=>e.$emit("update","nameParticle",o))},{default:b((()=>[(0,t.Wm)(r,{anchor:"#definitionspersonname-particle",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,t.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"family-names",outlined:"",standout:"",title:"The person's family names.","model-value":e.familyNames,error:!1,"error-message":"","onUpdate:modelValue":o[3]||(o[3]=o=>e.$emit("update","familyNames",o))},{default:b((()=>[(0,t.Wm)(r,{anchor:"#definitionspersonfamily-names",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,t.Wm)(d,{"bg-color":"white",class:"col-3",dense:"",label:"name-suffix",outlined:"",standout:"",title:"The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III.","model-value":e.nameSuffix,error:!1,"error-message":"","onUpdate:modelValue":o[4]||(o[4]=o=>e.$emit("update","nameSuffix",o))},{default:b((()=>[(0,t.Wm)(r,{anchor:"#definitionspersonname-suffix",class:"q-pt-sm"})])),_:1},8,["model-value"])]),(0,t.Wm)("div",U,[(0,t.Wm)(s,{class:"text-dark"},{default:b((()=>[C,(0,t.Wm)(r,{anchor:"#definitionsperson-email"})])),_:1})]),(0,t.Wm)("div",q,[(0,t.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"email",outlined:"",standout:"",title:"The person's email address.",type:"email","model-value":e.email,error:!1,"error-message":"","onUpdate:modelValue":o[5]||(o[5]=o=>e.$emit("update","email",o))},null,8,["model-value"])]),(0,t.Wm)("div",S,[(0,t.Wm)(s,{class:"text-dark col"},{default:b((()=>[D,(0,t.Wm)(r,{anchor:"#definitionsperson-affiliation"})])),_:1}),(0,t.Wm)(s,{class:"text-dark col"},{default:b((()=>[_,(0,t.Wm)(r,{anchor:"#definitionsperson-orcid"})])),_:1})]),(0,t.Wm)("div",I,[(0,t.Wm)(d,{"bg-color":"white",class:"col",dense:"",label:"affiliation",outlined:"",standout:"",title:"The person's affiliation.","model-value":e.affiliation,error:!1,"error-message":"","onUpdate:modelValue":o[6]||(o[6]=o=>e.$emit("update","affiliation",o))},null,8,["model-value"]),(0,t.Wm)(d,{"bg-color":"white",class:"col",dense:"",hint:"Format: https://orcid.org/0000-0000-0000-0000",label:"orcid",outlined:"",standout:"",title:"The person's ORCID identifier.","model-value":e.orcid,error:!1,"error-message":"","onUpdate:modelValue":o[7]||(o[7]=o=>e.$emit("update","orcid",o))},null,8,["model-value"])]),(0,t.kq)("",!0),(0,t.Wm)(m,{align:"right"},{default:b((()=>[(0,t.Wm)(u,{color:"blue",dense:"",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[8]||(o[8]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,t.Wm)(u,{color:"blue",dense:"",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[9]||(o[9]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,t.Wm)(u,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:o[10]||(o[10]=o=>e.$emit("removePressed"))}),(0,t.Wm)(u,{dense:"",icon:"done",label:"Done",onClick:o[11]||(o[11]=o=>e.$emit("closePressed"))})])),_:1})])),_:1})}));var Z=a(1622);const N=(0,t.aZ)({name:"AuthorCardEditing",props:{index:{type:Number,required:!0},givenNames:{type:String,default:""},nameParticle:{type:String,default:""},familyNames:{type:String,default:""},nameSuffix:{type:String,default:""},email:{type:String,default:""},affiliation:{type:String,default:""},orcid:{type:String,default:""},numAuthors:{type:Number,default:0}},setup(){const e=(0,h.iH)(null);return(0,t.bv)((()=>{var o;null===(o=e.value)||void 0===o||o.focus()})),{givenNamesRef:e}},emits:["closePressed","removePressed","update","moveUp","moveDown"],components:{SchemaGuideLink:Z.Z}});var $=a(151),T=a(4842),V=a(5607),j=a(9367),Q=a(2165),H=a(7518),M=a.n(H);N.render=P,N.__scopeId="data-v-1e5824f2";const z=N;M()(N,"components",{QCard:$.Z,QInput:T.Z,QBanner:V.Z,QCardActions:j.Z,QBtn:Q.Z});var E=a(2323);const R=(0,t.HX)("data-v-3748b7c9");(0,t.dD)("data-v-3748b7c9");const B={style:{"flex-grow":"1.0"}};(0,t.Cn)();const G=R(((e,o,a,n,l,i)=>{const r=(0,t.up)("q-btn"),s=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(s,{bordered:"",class:["bg-formcard",""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:R((()=>[(0,t.Wm)("div",B,[(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,(0,E.zw)(e.author.givenNames)+" "+(0,E.zw)(e.author.nameParticle)+" "+(0,E.zw)(e.author.familyNames)+" "+(0,E.zw)(e.author.nameSuffix),1),(0,t.Wm)("li",null,(0,E.zw)(e.author.email),1),(0,t.Wm)("li",null,(0,E.zw)(e.author.affiliation)+" "+(0,E.zw)(e.author.orcid),1)])]),(0,t.Wm)("div",null,[(0,t.Wm)(r,{class:"author-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[1]||(o[1]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,t.Wm)(r,{class:"author-button",color:"blue",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,t.Wm)(r,{class:"author-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:o[3]||(o[3]=o=>e.$emit("editPressed"))})])])),_:1})})),O=(0,t.aZ)({name:"AuthorCardViewing",props:{index:{type:Number,required:!0},author:{type:Object,required:!0},numAuthors:{type:Number,default:0}},emits:["editPressed","moveDown","moveUp"]});O.render=G,O.__scopeId="data-v-3748b7c9";const F=O;M()(O,"components",{QCard:$.Z,QBtn:Q.Z});var L=a(3173),Y=a(6787),X=a(4009),J=a(1364),K=function(e,o,a,t){function n(e){return e instanceof a?e:new a((function(o){o(e)}))}return new(a||(a=Promise))((function(a,l){function i(e){try{s(t.next(e))}catch(o){l(o)}}function r(e){try{s(t["throw"](e))}catch(o){l(o)}}function s(e){e.done?a(e.value):n(e.value).then(i,r)}s((t=t.apply(e,o||[])).next())}))};const ee=(0,t.aZ)({name:"ScreenAuthors",components:{SchemaGuideLink:Z.Z,Stepper:L.Z,StepperActions:Y.Z,AuthorCardEditing:z,AuthorCardViewing:F},setup(){const{authors:e,setAuthors:o}=(0,J.Y)(),a=(0,h.iH)(0),n=()=>K(this,void 0,void 0,(function*(){let n;const l={};n=void 0===e.value?[l]:[...e.value,l],o(n),a.value=n.length-1,yield(0,t.Y3)(),(0,X.O)()})),l=()=>{if(void 0!==e.value){const t=[...e.value];t.splice(a.value,1),o(t),a.value=-1,Array.isArray(t)&&0===t.length&&o(void 0)}},i=(t,n)=>{if(void 0!==e.value){const l=Object.assign({},e.value[a.value]);l[t]=""===n?void 0:n,e.value[a.value]=l,o(e.value)}},r=t=>{void 0!==e.value&&((0,g.A)(t,e.value,o),a.value===t&&t>0?a.value=a.value-1:a.value===t-1&&(a.value=a.value+1))},s=t=>{void 0!==e.value&&((0,g.v)(t,e.value,o),a.value===t&&t<e.value.length-1?a.value=a.value+1:a.value===t+1&&(a.value=a.value-1))};return{addAuthor:n,authors:e,editingId:a,moveAuthorDown:s,moveAuthorUp:r,removeAuthor:l,setAuthorField:i}}});ee.render=f,ee.__scopeId="data-v-289d9500";const oe=ee;M()(ee,"components",{QBtn:Q.Z,QBanner:V.Z})}}]);