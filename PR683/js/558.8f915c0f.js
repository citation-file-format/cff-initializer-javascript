"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[558],{7558:(e,o,a)=>{a.r(o),a.d(o,{default:()=>ie});var r=a(3673),t=a(2323);const n=(0,r.HX)("data-v-72ff7d1c");(0,r.dD)("data-v-72ff7d1c");const s=(0,r.Wm)("div",{id:"form-title"},[(0,r.Wm)("h1",{class:"page-title"}," Authors ")],-1),l={id:"form-content"},i={class:"question"},u=(0,r.Uk)(" Who are the author(s) of the work? "),d={class:"scroll-to-bottom-container"},m=(0,r.Wm)("span",{class:"bottom"},null,-1),c=(0,r.Uk)(" Add author ");(0,r.Cn)();const h=n(((e,o,a,h,p,v)=>{const f=(0,r.up)("SchemaGuideLink"),g=(0,r.up)("AuthorCardViewing"),b=(0,r.up)("AuthorCardEditing"),w=(0,r.up)("q-btn"),W=(0,r.up)("q-banner");return(0,r.wg)(),(0,r.j4)(r.HY,null,[s,(0,r.Wm)("div",l,[(0,r.Wm)("h2",i,[u,(0,r.Wm)(f,{anchor:"#authors"})]),(0,r.Wm)("div",d,[m,(0,r.Wm)("div",null,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.authors,((a,t)=>((0,r.wg)(),(0,r.j4)("div",{class:"q-mb-md q-mr-lg",key:t},[e.editingId!==t?((0,r.wg)(),(0,r.j4)(g,{key:0,index:t,author:a,"num-authors":e.authors.length,onEditPressed:()=>e.editingId=t,onMoveDown:o=>e.moveAuthorDown(t),onMoveUp:o=>e.moveAuthorUp(t)},null,8,["index","author","num-authors","onEditPressed","onMoveDown","onMoveUp"])):((0,r.wg)(),(0,r.j4)(b,(0,r.dG)({key:1,index:t},a,{onUpdate:e.setAuthorField,onClosePressed:o[1]||(o[1]=()=>e.editingId=-1),onRemovePressed:e.removeAuthor}),null,16,["index","onUpdate","onRemovePressed"]))])))),128))])]),(0,r.Wm)(w,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addAuthor},{default:n((()=>[c])),_:1},8,["onClick"]),e.authorsErrors.length>0?((0,r.wg)(),(0,r.j4)(W,{key:0,class:["bg-warning","text-negative",e.authorsErrors.length>0?"has-error":""]},{default:n((()=>[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.authorsErrors,((e,o)=>((0,r.wg)(),(0,r.j4)("div",{key:o},(0,t.zw)(e),1)))),128))])),_:1},8,["class"])):(0,r.kq)("",!0)])],64)}));var p=a(7996),v=a(1959),f=a(2064);const g=(0,r.HX)("data-v-72b84e60");(0,r.dD)("data-v-72b84e60");const b={class:"row"},w={class:"subquestion"},W=(0,r.Uk)(" The person's given names "),y={class:"row"},k=(0,r.Wm)("div",{class:"row"},[(0,r.Wm)("h3",{class:"subquestion"}," The person's last names, split into parts ")],-1),x={class:"row"},C={class:"row"},q={class:"subquestion"},A=(0,r.Uk)(" The person's email address "),E={class:"row"},S={class:"row"},U={class:"subquestion col"},I=(0,r.Uk)(" The person's affiliation "),_={class:"subquestion col"},P=(0,r.Uk)(" The person's ORCID "),j={class:"row"};(0,r.Cn)();const D=g(((e,o,a,t,n,s)=>{const l=(0,r.up)("SchemaGuideLink"),i=(0,r.up)("q-input"),u=(0,r.up)("q-btn"),d=(0,r.up)("q-card-actions"),m=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(m,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:g((()=>[(0,r.Wm)("div",b,[(0,r.Wm)("h3",w,[W,(0,r.Wm)(l,{anchor:"#definitionspersongiven-names"})])]),(0,r.Wm)("div",y,[(0,r.Wm)(i,{autofocus:"","bg-color":"white",class:"col",dense:"",label:"given-names",outlined:"",standout:"",title:"The person's given names.","model-value":e.givenNames,error:!1,"error-message":"","onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update","givenNames",o))},null,8,["model-value"])]),k,(0,r.Wm)("div",x,[(0,r.Wm)(i,{"bg-color":"white",class:"col-3",dense:"",label:"name-particle",outlined:"",standout:"",title:"The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt').","model-value":e.nameParticle,error:!1,"error-message":"","onUpdate:modelValue":o[2]||(o[2]=o=>e.$emit("update","nameParticle",o))},{default:g((()=>[(0,r.Wm)(l,{anchor:"#definitionspersonname-particle",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,r.Wm)(i,{"bg-color":"white",class:"col",dense:"",label:"family-names",outlined:"",standout:"",title:"The person's family names.","model-value":e.familyNames,error:!1,"error-message":"","onUpdate:modelValue":o[3]||(o[3]=o=>e.$emit("update","familyNames",o))},{default:g((()=>[(0,r.Wm)(l,{anchor:"#definitionspersonfamily-names",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,r.Wm)(i,{"bg-color":"white",class:"col-3",dense:"",label:"name-suffix",outlined:"",standout:"",title:"The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III.","model-value":e.nameSuffix,error:!1,"error-message":"","onUpdate:modelValue":o[4]||(o[4]=o=>e.$emit("update","nameSuffix",o))},{default:g((()=>[(0,r.Wm)(l,{anchor:"#definitionspersonname-suffix",class:"q-pt-sm"})])),_:1},8,["model-value"])]),(0,r.Wm)("div",C,[(0,r.Wm)("h3",q,[A,(0,r.Wm)(l,{anchor:"#definitionspersonemail"})])]),(0,r.Wm)("div",E,[(0,r.Wm)(i,{"bg-color":"white",class:["col",e.emailErrors.length>0?"has-error":""],dense:"",label:"email",outlined:"",standout:"",title:"The person's email address.",type:"email","model-value":e.email,error:e.emailErrors.length>0,"error-message":e.emailErrors.join(", "),"onUpdate:modelValue":o[5]||(o[5]=o=>e.$emit("update","email",o))},null,8,["model-value","class","error","error-message"])]),(0,r.Wm)("div",S,[(0,r.Wm)("h3",U,[I,(0,r.Wm)(l,{anchor:"#definitionspersonaffiliation"})]),(0,r.Wm)("h3",_,[P,(0,r.Wm)(l,{anchor:"#definitionspersonorcid"})])]),(0,r.Wm)("div",j,[(0,r.Wm)(i,{"bg-color":"white",class:"col",dense:"",label:"affiliation",outlined:"",standout:"",title:"The person's affiliation.","model-value":e.affiliation,error:!1,"error-message":"","onUpdate:modelValue":o[6]||(o[6]=o=>e.$emit("update","affiliation",o))},null,8,["model-value"]),(0,r.Wm)(i,{"bg-color":"white",class:["col",e.orcidErrors.length>0?"has-error":""],dense:"",hint:"Format: https://orcid.org/0000-0000-0000-0000",mask:"https://orcid.org/####-####-####-###X",outlined:"",standout:"",title:"The person's ORCID identifier.","model-value":e.orcid,error:e.orcidErrors.length>0,"error-message":e.orcidErrors.join(", "),"onUpdate:modelValue":o[7]||(o[7]=o=>e.$emit("update","orcid",o))},null,8,["class","model-value","error","error-message"])]),(0,r.Wm)(d,{align:"right"},{default:g((()=>[(0,r.Wm)(u,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:o[8]||(o[8]=o=>e.$emit("removePressed"))}),(0,r.Wm)(u,{dense:"",icon:"done",label:"Done",onClick:o[9]||(o[9]=o=>e.$emit("closePressed"))})])),_:1})])),_:1})})),N=(0,r.HX)("data-v-177d5193");(0,r.dD)("data-v-177d5193");const Z=(0,r.Uk)(" Click the icon to access specific documentation ");(0,r.Cn)();const T=N(((e,o,a,t,n,s)=>{const l=(0,r.up)("q-icon"),i=(0,r.up)("q-tooltip");return(0,r.wg)(),(0,r.j4)("a",{href:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md"+e.anchor,tabindex:"-1",target:"_blank"},[(0,r.Wm)(l,{name:"ion-information-circle-outline",size:"24px",color:"primary"}),(0,r.Wm)(i,{anchor:"center right",class:"bg-primary text-body2 text-white",self:"center left","transition-show":"scale","transition-hide":"scale"},{default:N((()=>[Z])),_:1})],8,["href"])})),V=(0,r.aZ)({name:"SchemaGuideLink",props:{anchor:{type:String,required:!0}}});var Y=a(4554),$=a(8870),F=a(7518),Q=a.n(F);V.render=T,V.__scopeId="data-v-177d5193";const z=V;Q()(V,"components",{QIcon:Y.Z,QTooltip:$.Z});var B=a(6513),H=a(8875);const G=(0,r.aZ)({name:"AuthorCardEditing",props:{index:{type:Number,required:!0},givenNames:{type:String,default:""},nameParticle:{type:String,default:""},familyNames:{type:String,default:""},nameSuffix:{type:String,default:""},email:{type:String,default:""},affiliation:{type:String,default:""},orcid:{type:String,default:""}},setup(e){(0,r.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,B.v)();e(document.getElementsByClassName("has-error").length>0)}));const{errors:o}=(0,H.V)(),a=(0,r.Fl)((()=>(0,p.r9)(e.index).filter((0,p.uY)(o.value)).map((e=>e.replace.message)))),t=(0,r.Fl)((()=>(0,p.CB)(e.index).filter((0,p.uY)(o.value)).map((e=>e.replace.message))));return{emailErrors:t,orcidErrors:a}},emits:["closePressed","removePressed","update"],components:{SchemaGuideLink:z}});var L=a(151),O=a(4842),R=a(9367),X=a(8240);G.render=D,G.__scopeId="data-v-72b84e60";const M=G;Q()(G,"components",{QCard:L.Z,QInput:O.Z,QCardActions:R.Z,QBtn:X.Z});const J=(0,r.HX)("data-v-7773fae4");(0,r.dD)("data-v-7773fae4");const K={style:{"flex-grow":"1.0"}};(0,r.Cn)();const ee=J(((e,o,a,n,s,l)=>{const i=(0,r.up)("q-btn"),u=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(u,{bordered:"",class:["bg-formcard",e.authorErrors.length>0?"red-border has-error":""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:J((()=>[(0,r.Wm)("div",K,[(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,(0,t.zw)(e.author.givenNames)+" "+(0,t.zw)(e.author.nameParticle)+" "+(0,t.zw)(e.author.familyNames)+" "+(0,t.zw)(e.author.nameSuffix),1),(0,r.Wm)("li",null,(0,t.zw)(e.author.email),1),(0,r.Wm)("li",null,(0,t.zw)(e.author.affiliation)+" "+(0,t.zw)(e.author.orcid),1)])]),(0,r.Wm)("div",null,[(0,r.Wm)(i,{class:"author-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[1]||(o[1]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,r.Wm)(i,{class:"author-button",color:"blue",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,r.Wm)(i,{class:"author-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:o[3]||(o[3]=o=>e.$emit("editPressed"))})])])),_:1},8,["class"])})),oe=(0,r.aZ)({name:"AuthorCardViewing",props:{index:{type:Number,required:!0},author:{type:Object,required:!0},numAuthors:{type:Number,default:0}},setup(e){(0,r.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,B.v)();e(document.getElementsByClassName("has-error").length>0)}));const{errors:o}=(0,H.V)(),a=(0,r.Fl)((()=>(0,p.CB)(e.index).filter((0,p.uY)(o.value)).map((e=>e.replace.message)))),t=(0,r.Fl)((()=>(0,p.r9)(e.index).filter((0,p.uY)(o.value)).map((e=>e.replace.message)))),n=(0,r.Fl)((()=>p.Lf.filter((0,p.uY)(o.value)).filter((0,p.uY)(o.value,(0,p.Uh)(e.index))).map((e=>e.replace.message)))),s=(0,r.Fl)((()=>[...a.value,...t.value,...n.value]));return{authorErrors:s}},emits:["editPressed","moveDown","moveUp"]});oe.render=ee,oe.__scopeId="data-v-7773fae4";const ae=oe;Q()(oe,"components",{QCard:L.Z,QBtn:X.Z});var re=a(4009),te=a(1364),ne=function(e,o,a,r){function t(e){return e instanceof a?e:new a((function(o){o(e)}))}return new(a||(a=Promise))((function(a,n){function s(e){try{i(r.next(e))}catch(o){n(o)}}function l(e){try{i(r["throw"](e))}catch(o){n(o)}}function i(e){e.done?a(e.value):t(e.value).then(s,l)}i((r=r.apply(e,o||[])).next())}))};const se=(0,r.aZ)({name:"ScreenAuthors",components:{SchemaGuideLink:z,AuthorCardEditing:M,AuthorCardViewing:ae},setup(){(0,r.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,B.v)();e(document.getElementsByClassName("has-error").length>0)}));const{authors:e,setAuthors:o}=(0,te.Y)(),{errors:a}=(0,H.V)(),t=(0,v.iH)(-1),n=()=>ne(this,void 0,void 0,(function*(){const a={},n=[...e.value,a];o(n),t.value=n.length-1,yield(0,r.Y3)(),(0,re.O)()})),s=()=>{const a=[...e.value];a.splice(t.value,1),o(a),t.value=-1},l=(a,r)=>{const n=Object.assign({},e.value[t.value]);n[a]=""===r?void 0:r,e.value[t.value]=n,o(e.value)},i=a=>{(0,f.A)(a,e.value,o),t.value===a&&a>0?t.value=t.value-1:t.value===a-1&&(t.value=t.value+1)},u=a=>{(0,f.v)(a,e.value,o),t.value===a&&a<e.value.length-1?t.value=t.value+1:t.value===a+1&&(t.value=t.value-1)},d=(0,r.Fl)((()=>p.p2.filter((0,p.uY)(a.value)).map((e=>e.replace.message))));return{addAuthor:n,authors:e,authorsErrors:d,editingId:t,moveAuthorDown:u,moveAuthorUp:i,removeAuthor:s,setAuthorField:l}}});var le=a(5607);se.render=h,se.__scopeId="data-v-72ff7d1c";const ie=se;Q()(se,"components",{QBtn:X.Z,QBanner:le.Z})}}]);