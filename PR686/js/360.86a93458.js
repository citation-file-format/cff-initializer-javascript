"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[360],{7360:(e,i,t)=>{t.r(i),t.d(i,{default:()=>ie});var n=t(3673),r=t(2323);const a=(0,n.HX)("data-v-9f1fb6a0");(0,n.dD)("data-v-9f1fb6a0");const o=(0,n.Wm)("div",{id:"form-title"},[(0,n.Wm)("h1",{class:"page-title"}," Identifiers ")],-1),l={id:"form-content"},d={class:"question"},s=(0,n.Uk)(" What persistent identifiers are available for the work? "),u={class:"scroll-to-bottom-container"},c=(0,n.Wm)("span",{class:"bottom"},null,-1),p=(0,n.Uk)(" Add identifier ");(0,n.Cn)();const m=a(((e,i,t,m,v,f)=>{const h=(0,n.up)("SchemaGuideLink"),b=(0,n.up)("IdentifierCardViewing"),g=(0,n.up)("IdentifierCardEditing"),w=(0,n.up)("q-btn"),y=(0,n.up)("q-banner");return(0,n.wg)(),(0,n.j4)(n.HY,null,[o,(0,n.Wm)("div",l,[(0,n.Wm)("h2",d,[s,(0,n.Wm)(h,{anchor:"#identifiers"})]),(0,n.Wm)("div",u,[c,(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.identifiers,((t,r)=>((0,n.wg)(),(0,n.j4)("div",{class:"q-mb-md q-mr-lg",key:r},[e.editingId!==r?((0,n.wg)(),(0,n.j4)(b,{key:0,index:r,identifier:t,"num-identifiers":e.identifiers.length,onEditPressed:()=>e.editingId=r,onMoveDown:i=>e.moveIdentifierDown(r),onMoveUp:i=>e.moveIdentifierUp(r)},null,8,["index","identifier","num-identifiers","onEditPressed","onMoveDown","onMoveUp"])):((0,n.wg)(),(0,n.j4)(g,(0,n.dG)({key:1,index:r},t,{onUpdateType:e.setIdentifierTypeField,onUpdateValue:e.setIdentifierValueField,onUpdateDescription:e.setIdentifierDescriptionField,onClosePressed:i[1]||(i[1]=()=>e.editingId=-1),onRemovePressed:e.removeIdentifier}),null,16,["index","onUpdateType","onUpdateValue","onUpdateDescription","onRemovePressed"]))])))),128))])]),(0,n.Wm)(w,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addIdentifier},{default:a((()=>[p])),_:1},8,["onClick"]),e.identifiersErrors.length>0?((0,n.wg)(),(0,n.j4)(y,{key:0,class:["bg-warning","text-negative",e.identifiersErrors.length>0?"has-error":""]},{default:a((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.identifiersErrors,((e,i)=>((0,n.wg)(),(0,n.j4)("div",{key:i},(0,r.zw)(e),1)))),128))])),_:1},8,["class"])):(0,n.kq)("",!0)])],64)}));var v=t(7996),f=t(1959),h=t(2064);t(246);const b=(0,n.HX)("data-v-5b04da48");(0,n.dD)("data-v-5b04da48");const g={class:"items-center no-wrap"},w={class:"q-mt-md items-center no-wrap"},y={class:"row"},I={class:"subquestion"},W={class:"q-mt-md items-center no-wrap"},k={class:"row"},q={class:"subquestion"};(0,n.Cn)();const C=b(((e,i,t,a,o,l)=>{const d=(0,n.up)("q-option-group"),s=(0,n.up)("SchemaGuideLink"),u=(0,n.up)("q-input"),c=(0,n.up)("q-card-section"),p=(0,n.up)("q-btn"),m=(0,n.up)("q-card-actions"),v=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(v,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:b((()=>[(0,n.Wm)(c,null,{default:b((()=>[(0,n.Wm)("div",g,[(0,n.Wm)(d,{inline:"",type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":i[1]||(i[1]=i=>e.$emit("updateType","type",i))},null,8,["model-value","options"])]),(0,n.Wm)("div",w,[(0,n.Wm)("div",y,[(0,n.Wm)("h3",I,[(0,n.Uk)(" What is the value of the "+(0,r.zw)(e.label)+"? ",1),(0,n.Wm)(s,{anchor:e.anchor},null,8,["anchor"])])]),(0,n.Wm)(u,{autofocus:"","bg-color":"white",label:"Value",outlined:"",standout:"",dense:"",class:e.identifierValueErrors.length>0?"has-error":"",error:e.identifierValueErrors.length>0,"error-message":e.identifierValueErrors.join(", "),"model-value":e.value,"onUpdate:modelValue":i[2]||(i[2]=i=>e.$emit("updateValue","value",i))},null,8,["class","error","error-message","model-value"])]),(0,n.Wm)("div",W,[(0,n.Wm)("div",k,[(0,n.Wm)("h3",q,[(0,n.Uk)(" What is the description for the "+(0,r.zw)(e.label)+"? ",1),(0,n.Wm)(s,{anchor:"#definitionsidentifier-description"})])]),(0,n.Wm)(u,{"bg-color":"white",label:"Description",outlined:"",standout:"",dense:"","model-value":e.description,"onUpdate:modelValue":i[3]||(i[3]=i=>e.$emit("updateDescription","description",i))},null,8,["model-value"])])])),_:1}),(0,n.Wm)(m,{align:"right"},{default:b((()=>[(0,n.Wm)(p,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:i[4]||(i[4]=i=>e.$emit("removePressed"))}),(0,n.Wm)(p,{dense:"",icon:"done",label:"Done",onClick:i[5]||(i[5]=i=>e.$emit("closePressed"))})])),_:1})])),_:1})})),x=(0,n.HX)("data-v-177d5193");(0,n.dD)("data-v-177d5193");const U=(0,n.Uk)(" Click the icon to access specific documentation ");(0,n.Cn)();const D=x(((e,i,t,r,a,o)=>{const l=(0,n.up)("q-icon"),d=(0,n.up)("q-tooltip");return(0,n.wg)(),(0,n.j4)("a",{href:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md"+e.anchor,tabindex:"-1",target:"_blank"},[(0,n.Wm)(l,{name:"ion-information-circle-outline",size:"24px",color:"primary"}),(0,n.Wm)(d,{anchor:"center right",class:"bg-primary text-body2 text-white",self:"center left","transition-show":"scale","transition-hide":"scale"},{default:x((()=>[U])),_:1})],8,["href"])})),V=(0,n.aZ)({name:"SchemaGuideLink",props:{anchor:{type:String,required:!0}}});var E=t(4554),j=t(8870),Z=t(7518),_=t.n(Z);V.render=D,V.__scopeId="data-v-177d5193";const F=V;_()(V,"components",{QIcon:E.Z,QTooltip:j.Z});var S=t(8875);const O=(0,n.aZ)({name:"IdentifierCardEditing",props:{index:{type:Number,required:!0},type:{type:String,default:""},value:{type:String,default:""},description:{type:String,default:""}},components:{SchemaGuideLink:F},setup(e){const{errors:i}=(0,S.V)(),t={doi:{label:"DOI",anchor:"#definitionsdoi"},url:{label:"URL",anchor:"#definitionsurl"},swh:{label:"Software Heritage identifier",anchor:"#definitionsswh-identifier"},other:{label:"identifier",anchor:"#definitionsidentifier"}},r=(0,n.Fl)((()=>(0,v.lF)(e.index,["doi","url","swh","other"].indexOf(e.type)).filter((0,v.uY)(i.value)).map((e=>e.replace.message)).filter(v.Tw)));return{typeOptions:[{label:"DOI",value:"doi"},{label:"URL",value:"url"},{label:"Software Heritage",value:"swh"},{label:"Other",value:"other"}],label:(0,n.Fl)((()=>t[e.type].label)),anchor:(0,n.Fl)((()=>t[e.type].anchor)),identifierValueErrors:r}},emits:["closePressed","removePressed","updateType","updateValue","updateDescription"]});var P=t(151),Q=t(5589),H=t(7011),Y=t(4842),T=t(9367),$=t(8240);O.render=C,O.__scopeId="data-v-5b04da48";const z=O;_()(O,"components",{QCard:P.Z,QCardSection:Q.Z,QOptionGroup:H.Z,QInput:Y.Z,QCardActions:T.Z,QBtn:$.Z});const G=(0,n.HX)("data-v-51a05e31");(0,n.dD)("data-v-51a05e31");const L={style:{"flex-grow":"1.0"}};(0,n.Cn)();const A=G(((e,i,t,a,o,l)=>{const d=(0,n.up)("q-btn"),s=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(s,{bordered:"",class:["bg-formcard",e.identifierErrors.length>0?"red-border has-error":""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:G((()=>[(0,n.Wm)("div",L,[(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,(0,r.zw)(e.identifier.description),1),(0,n.Wm)("li",null,(0,r.zw)(e.identifier.type)+": "+(0,r.zw)(e.identifier.value),1)])]),(0,n.Wm)("div",null,[(0,n.Wm)(d,{class:"identifier-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:i[1]||(i[1]=i=>e.$emit("moveUp"))},null,8,["disable"]),(0,n.Wm)(d,{class:"identifier-button",color:"blue",disable:e.index>=e.numIdentifiers-1,icon:"ion-arrow-down",tabindex:"-1",onClick:i[2]||(i[2]=i=>e.$emit("moveDown"))},null,8,["disable"]),(0,n.Wm)(d,{class:"identifier-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:i[3]||(i[3]=i=>e.$emit("editPressed"))})])])),_:1},8,["class"])})),B=(0,n.aZ)({name:"IdentifierCardViewing",props:{index:{type:Number,required:!0},identifier:{type:Object,required:!0},numIdentifiers:{type:Number,default:0}},setup(e){const{errors:i}=(0,S.V)(),t=(0,n.Fl)((()=>(0,v.lF)(e.index,["doi","url","swh","other"].indexOf(e.identifier.type)).filter((0,v.uY)(i.value)).map((e=>e.replace.message)))),r=(0,n.Fl)((()=>v.gp.filter((0,v.uY)(i.value)).filter((0,v.uY)(i.value,(0,v.Uh)(e.index))).map((e=>e.replace.message)))),a=(0,n.Fl)((()=>[...t.value,...r.value]));return{identifierErrors:a}},emits:["editPressed","moveDown","moveUp"]});B.render=A,B.__scopeId="data-v-51a05e31";const R=B;_()(B,"components",{QCard:P.Z,QBtn:$.Z});var M=t(4009),N=t(1364),X=t(6513),K=function(e,i,t,n){function r(e){return e instanceof t?e:new t((function(i){i(e)}))}return new(t||(t=Promise))((function(t,a){function o(e){try{d(n.next(e))}catch(i){a(i)}}function l(e){try{d(n["throw"](e))}catch(i){a(i)}}function d(e){e.done?t(e.value):r(e.value).then(o,l)}d((n=n.apply(e,i||[])).next())}))};const J=(0,n.aZ)({name:"ScreenIdentifiers",components:{SchemaGuideLink:F,IdentifierCardEditing:z,IdentifierCardViewing:R},setup(){(0,n.ic)((()=>{const{setErrorStateScreenIdentifiers:e}=(0,X.v)();e(document.getElementsByClassName("has-error").length>0)}));const{identifiers:e,setIdentifiers:i}=(0,N.Y)(),{errors:t}=(0,S.V)(),r=(0,f.iH)(-1),a=()=>K(this,void 0,void 0,(function*(){let t;const a={type:"doi",value:"",description:void 0};t=void 0===e.value?[a]:[...e.value,a],i(t),r.value=t.length-1,yield(0,n.Y3)(),(0,M.O)()})),o=()=>{if(void 0!==e.value){const t=[...e.value];t.splice(r.value,1),i(t),r.value=-1,Array.isArray(t)&&0===t.length&&i(void 0)}},l=(t,n)=>{if(void 0!==e.value){const t=Object.assign({},e.value[r.value]);t.description=""===n?void 0:n,e.value[r.value]=t,i(e.value)}},d=(t,n)=>{if(void 0!==e.value){const t=Object.assign({},e.value[r.value]);t.type=n,e.value[r.value]=t,i(e.value)}},s=(t,n)=>{if(void 0!==e.value){const t=Object.assign({},e.value[r.value]);t.value=n,e.value[r.value]=t,i(e.value)}},u=t=>{void 0!==e.value&&((0,h.A)(t,e.value,i),r.value===t&&t>0?r.value=r.value-1:r.value===t-1&&(r.value=r.value+1))},c=t=>{void 0!==e.value&&((0,h.v)(t,e.value,i),r.value===t&&t<e.value.length-1?r.value=r.value+1:r.value===t+1&&(r.value=r.value-1))},p=(0,n.Fl)((()=>v.I3.filter((0,v.uY)(t.value)).map((e=>e.replace.message))));return{addIdentifier:a,editingId:r,identifiers:e,identifiersErrors:p,moveIdentifierUp:u,moveIdentifierDown:c,removeIdentifier:o,setIdentifierDescriptionField:l,setIdentifierTypeField:d,setIdentifierValueField:s}}});var ee=t(5607);J.render=m,J.__scopeId="data-v-9f1fb6a0";const ie=J;_()(J,"components",{QBtn:$.Z,QBanner:ee.Z})}}]);