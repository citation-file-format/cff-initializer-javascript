"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[998],{1056:(e,o,r)=>{r.r(o),r.d(o,{default:()=>le});var a=r(3673),t=r(2323);const n=(0,a.HX)("data-v-62df9261");(0,a.dD)("data-v-62df9261");const s={id:"metroline"},l={id:"form"},i=(0,a.Wm)("div",{id:"form-title"},[(0,a.Wm)("h1",{class:"page-title"}," Authors ")],-1),u={id:"form-content"},d={class:"question"},m=(0,a.Uk)(" Who are the author(s) of the work? "),c={class:"scroll-to-bottom-container"},p=(0,a.Wm)("span",{class:"bottom"},null,-1),h=(0,a.Uk)(" Add author "),v={id:"form-button-bar"};(0,a.Cn)();const f=n(((e,o,r,f,g,b)=>{const w=(0,a.up)("Stepper"),W=(0,a.up)("SchemaGuideLink"),y=(0,a.up)("AuthorCardViewing"),A=(0,a.up)("AuthorCardEditing"),x=(0,a.up)("q-btn"),k=(0,a.up)("q-banner"),C=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)("div",s,[(0,a.Wm)(w)]),(0,a.Wm)("div",l,[i,(0,a.Wm)("div",u,[(0,a.Wm)("h2",d,[m,(0,a.Wm)(W,{anchor:"#authors"})]),(0,a.Wm)("div",c,[p,(0,a.Wm)("div",null,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.authors,((r,t)=>((0,a.wg)(),(0,a.j4)("div",{class:"q-mb-md q-mr-lg",key:t},[e.editingId!==t?((0,a.wg)(),(0,a.j4)(y,{key:0,index:t,author:r,"num-authors":e.authors.length,onEditPressed:()=>e.editingId=t,onMoveDown:o=>e.moveAuthorDown(t),onMoveUp:o=>e.moveAuthorUp(t)},null,8,["index","author","num-authors","onEditPressed","onMoveDown","onMoveUp"])):((0,a.wg)(),(0,a.j4)(A,(0,a.dG)({key:1,index:t,"num-authors":e.authors.length},r,{onUpdate:e.setAuthorField,onClosePressed:o[1]||(o[1]=()=>e.editingId=-1),onRemovePressed:e.removeAuthor,onMoveDown:o=>e.moveAuthorDown(t),onMoveUp:o=>e.moveAuthorUp(t)}),null,16,["index","num-authors","onUpdate","onRemovePressed","onMoveDown","onMoveUp"]))])))),128))])]),(0,a.Wm)(x,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addAuthor},{default:n((()=>[h])),_:1},8,["onClick"]),e.authorsErrors.length>0?((0,a.wg)(),(0,a.j4)(k,{key:0,class:["bg-warning","text-negative",e.authorsErrors.length>0?"has-error":""]},{default:n((()=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.authorsErrors,((e,o)=>((0,a.wg)(),(0,a.j4)("div",{key:o},(0,t.zw)(e),1)))),128))])),_:1},8,["class"])):(0,a.kq)("",!0)]),(0,a.Wm)("div",v,[(0,a.Wm)(C)])])],64)}));var g=r(7996),b=r(1959),w=r(2064);const W=(0,a.HX)("data-v-dc0c50da");(0,a.dD)("data-v-dc0c50da");const y={class:"row"},A={class:"subquestion"},x=(0,a.Uk)(" The person's given names "),k={class:"row"},C=(0,a.Wm)("div",{class:"row"},[(0,a.Wm)("h3",{class:"subquestion"}," The person's last names, split into parts ")],-1),E={class:"row"},S={class:"row"},q={class:"subquestion"},U=(0,a.Uk)(" The person's email address "),D={class:"row"},I={class:"row"},N={class:"subquestion col"},P=(0,a.Uk)(" The person's affiliation "),Z={class:"subquestion col"},j=(0,a.Uk)(" The person's ORCID "),$={class:"row"};(0,a.Cn)();const _=W(((e,o,r,t,n,s)=>{const l=(0,a.up)("SchemaGuideLink"),i=(0,a.up)("q-input"),u=(0,a.up)("q-btn"),d=(0,a.up)("q-card-actions"),m=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(m,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:W((()=>[(0,a.Wm)("div",y,[(0,a.Wm)("h3",A,[x,(0,a.Wm)(l,{anchor:"#definitionspersongiven-names"})])]),(0,a.Wm)("div",k,[(0,a.Wm)(i,{autofocus:"","bg-color":"white",class:"col",dense:"",label:"given-names",outlined:"",standout:"",title:"The person's given names.","model-value":e.givenNames,error:!1,"error-message":"","onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update","givenNames",o)),ref:"givenNamesRef"},null,8,["model-value"])]),C,(0,a.Wm)("div",E,[(0,a.Wm)(i,{"bg-color":"white",class:"col-3",dense:"",label:"name-particle",outlined:"",standout:"",title:"The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt').","model-value":e.nameParticle,error:!1,"error-message":"","onUpdate:modelValue":o[2]||(o[2]=o=>e.$emit("update","nameParticle",o))},{default:W((()=>[(0,a.Wm)(l,{anchor:"#definitionspersonname-particle",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,a.Wm)(i,{"bg-color":"white",class:"col",dense:"",label:"family-names",outlined:"",standout:"",title:"The person's family names.","model-value":e.familyNames,error:!1,"error-message":"","onUpdate:modelValue":o[3]||(o[3]=o=>e.$emit("update","familyNames",o))},{default:W((()=>[(0,a.Wm)(l,{anchor:"#definitionspersonfamily-names",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,a.Wm)(i,{"bg-color":"white",class:"col-3",dense:"",label:"name-suffix",outlined:"",standout:"",title:"The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III.","model-value":e.nameSuffix,error:!1,"error-message":"","onUpdate:modelValue":o[4]||(o[4]=o=>e.$emit("update","nameSuffix",o))},{default:W((()=>[(0,a.Wm)(l,{anchor:"#definitionspersonname-suffix",class:"q-pt-sm"})])),_:1},8,["model-value"])]),(0,a.Wm)("div",S,[(0,a.Wm)("h3",q,[U,(0,a.Wm)(l,{anchor:"#definitionsperson-email"})])]),(0,a.Wm)("div",D,[(0,a.Wm)(i,{"bg-color":"white",class:["col",e.emailErrors.length>0?"has-error":""],dense:"",label:"email",outlined:"",standout:"",title:"The person's email address.",type:"email","model-value":e.email,error:e.emailErrors.length>0,"error-message":e.emailErrors.join(", "),"onUpdate:modelValue":o[5]||(o[5]=o=>e.$emit("update","email",o))},null,8,["model-value","class","error","error-message"])]),(0,a.Wm)("div",I,[(0,a.Wm)("h3",N,[P,(0,a.Wm)(l,{anchor:"#definitionsperson-affiliation"})]),(0,a.Wm)("h3",Z,[j,(0,a.Wm)(l,{anchor:"#definitionsperson-orcid"})])]),(0,a.Wm)("div",$,[(0,a.Wm)(i,{"bg-color":"white",class:"col",dense:"",label:"affiliation",outlined:"",standout:"",title:"The person's affiliation.","model-value":e.affiliation,error:!1,"error-message":"","onUpdate:modelValue":o[6]||(o[6]=o=>e.$emit("update","affiliation",o))},null,8,["model-value"]),(0,a.Wm)(i,{"bg-color":"white",class:["col",e.orcidErrors.length>0?"has-error":""],dense:"",hint:"Format: https://orcid.org/0000-0000-0000-0000",label:"orcid",outlined:"",standout:"",title:"The person's ORCID identifier.","model-value":e.orcid,error:e.orcidErrors.length>0,"error-message":e.orcidErrors.join(", "),"onUpdate:modelValue":o[7]||(o[7]=o=>e.$emit("update","orcid",o))},null,8,["class","model-value","error","error-message"])]),(0,a.Wm)(d,{align:"right"},{default:W((()=>[(0,a.Wm)(u,{color:"blue",dense:"",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[8]||(o[8]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,a.Wm)(u,{color:"blue",dense:"",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[9]||(o[9]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,a.Wm)(u,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:o[10]||(o[10]=o=>e.$emit("removePressed"))}),(0,a.Wm)(u,{dense:"",icon:"done",label:"Done",onClick:o[11]||(o[11]=o=>e.$emit("closePressed"))})])),_:1})])),_:1})}));var V=r(1622),T=r(6513),Y=r(8875);const B=(0,a.aZ)({name:"AuthorCardEditing",props:{index:{type:Number,required:!0},givenNames:{type:String,default:""},nameParticle:{type:String,default:""},familyNames:{type:String,default:""},nameSuffix:{type:String,default:""},email:{type:String,default:""},affiliation:{type:String,default:""},orcid:{type:String,default:""},numAuthors:{type:Number,default:0}},setup(e){(0,a.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,T.v)();e(document.getElementsByClassName("has-error").length>0)}));const{errors:o}=(0,Y.V)(),r=(0,a.Fl)((()=>(0,g.r9)(e.index).filter((0,g.uY)(o.value)).map((e=>e.replace.message)))),t=(0,a.Fl)((()=>(0,g.CB)(e.index).filter((0,g.uY)(o.value)).map((e=>e.replace.message))));return{emailErrors:t,orcidErrors:r}},emits:["closePressed","removePressed","update","moveUp","moveDown"],components:{SchemaGuideLink:V.Z}});var F=r(151),z=r(4842),H=r(9367),M=r(2165),Q=r(7518),R=r.n(Q);B.render=_,B.__scopeId="data-v-dc0c50da";const G=B;R()(B,"components",{QCard:F.Z,QInput:z.Z,QCardActions:H.Z,QBtn:M.Z});const O=(0,a.HX)("data-v-183a588a");(0,a.dD)("data-v-183a588a");const L={style:{"flex-grow":"1.0"}};(0,a.Cn)();const X=O(((e,o,r,n,s,l)=>{const i=(0,a.up)("q-btn"),u=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(u,{bordered:"",class:["bg-formcard",e.authorErrors.length>0?"red-border has-error":""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:O((()=>[(0,a.Wm)("div",L,[(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,(0,t.zw)(e.author.givenNames)+" "+(0,t.zw)(e.author.nameParticle)+" "+(0,t.zw)(e.author.familyNames)+" "+(0,t.zw)(e.author.nameSuffix),1),(0,a.Wm)("li",null,(0,t.zw)(e.author.email),1),(0,a.Wm)("li",null,(0,t.zw)(e.author.affiliation)+" "+(0,t.zw)(e.author.orcid),1)])]),(0,a.Wm)("div",null,[(0,a.Wm)(i,{class:"author-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[1]||(o[1]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,a.Wm)(i,{class:"author-button",color:"blue",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,a.Wm)(i,{class:"author-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:o[3]||(o[3]=o=>e.$emit("editPressed"))})])])),_:1},8,["class"])})),J=(0,a.aZ)({name:"AuthorCardViewing",props:{index:{type:Number,required:!0},author:{type:Object,required:!0},numAuthors:{type:Number,default:0}},setup(e){(0,a.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,T.v)();e(document.getElementsByClassName("has-error").length>0)}));const{errors:o}=(0,Y.V)(),r=(0,a.Fl)((()=>(0,g.CB)(e.index).filter((0,g.uY)(o.value)).map((e=>e.replace.message)))),t=(0,a.Fl)((()=>(0,g.r9)(e.index).filter((0,g.uY)(o.value)).map((e=>e.replace.message)))),n=[...r.value,...t.value];return{authorErrors:n}},emits:["editPressed","moveDown","moveUp"]});J.render=X,J.__scopeId="data-v-183a588a";const K=J;R()(J,"components",{QCard:F.Z,QBtn:M.Z});var ee=r(6702),oe=r(6787),re=r(4009),ae=r(1364),te=function(e,o,r,a){function t(e){return e instanceof r?e:new r((function(o){o(e)}))}return new(r||(r=Promise))((function(r,n){function s(e){try{i(a.next(e))}catch(o){n(o)}}function l(e){try{i(a["throw"](e))}catch(o){n(o)}}function i(e){e.done?r(e.value):t(e.value).then(s,l)}i((a=a.apply(e,o||[])).next())}))};const ne=(0,a.aZ)({name:"ScreenAuthors",components:{SchemaGuideLink:V.Z,Stepper:ee.Z,StepperActions:oe.Z,AuthorCardEditing:G,AuthorCardViewing:K},setup(){(0,a.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,T.v)();e(document.getElementsByClassName("has-error").length>0)}));const{authors:e,setAuthors:o}=(0,ae.Y)(),{errors:r}=(0,Y.V)(),t=(0,b.iH)(0),n=()=>te(this,void 0,void 0,(function*(){const r={},n=[...e.value,r];o(n),t.value=n.length-1,yield(0,a.Y3)(),(0,re.O)()})),s=()=>{const r=[...e.value];r.splice(t.value,1),o(r),t.value=-1},l=(r,a)=>{const n=Object.assign({},e.value[t.value]);n[r]=""===a?void 0:a,e.value[t.value]=n,o(e.value)},i=r=>{(0,w.A)(r,e.value,o),t.value===r&&r>0?t.value=t.value-1:t.value===r-1&&(t.value=t.value+1)},u=r=>{(0,w.v)(r,e.value,o),t.value===r&&r<e.value.length-1?t.value=t.value+1:t.value===r+1&&(t.value=t.value-1)},d=(0,a.Fl)((()=>g.p2.filter((0,g.uY)(r.value)).map((e=>e.replace.message))));return{addAuthor:n,authors:e,authorsErrors:d,editingId:t,moveAuthorDown:u,moveAuthorUp:i,removeAuthor:s,setAuthorField:l}}});var se=r(5607);ne.render=f,ne.__scopeId="data-v-62df9261";const le=ne;R()(ne,"components",{QBtn:M.Z,QBanner:se.Z})}}]);