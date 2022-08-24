"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[190],{6702:(e,i,t)=>{t.r(i),t.d(i,{default:()=>N});var o=t(3673),r=t(2323);const n=(0,o.HX)("data-v-234bf7fe");(0,o.dD)("data-v-234bf7fe");const a=(0,o.Wm)("div",{id:"form-title"},[(0,o.Wm)("h1",{class:"page-title"}," Identifiers ")],-1),l={id:"form-content"},s={class:"question"},d=(0,o.Uk)(" What persistent identifiers are available for the work? "),u={class:"scroll-to-bottom-container"},c=(0,o.Wm)("span",{class:"bottom"},null,-1),f=(0,o.Uk)(" Add identifier ");(0,o.Cn)();const p=n(((e,i,t,p,m,v)=>{const h=(0,o.up)("q-icon"),g=(0,o.up)("IdentifierCardViewing"),w=(0,o.up)("IdentifierCardEditing"),b=(0,o.up)("q-btn"),I=(0,o.up)("q-banner"),y=(0,o.up)("InfoDialog");return(0,o.wg)(),(0,o.j4)(o.HY,null,[a,(0,o.Wm)("div",l,[(0,o.Wm)("h2",s,[d,(0,o.Wm)(h,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:i[1]||(i[1]=i=>e.showIdentifiersHelp=!0),style:{cursor:"pointer"}})]),(0,o.Wm)("div",u,[c,(0,o.Wm)("div",null,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.identifiers,((t,r)=>((0,o.wg)(),(0,o.j4)("div",{class:"q-mb-md q-mr-lg",key:r},[e.editingId!==r?((0,o.wg)(),(0,o.j4)(g,{key:0,index:r,identifier:t,"num-identifiers":e.identifiers.length,onEditPressed:()=>e.editingId=r,onMoveDown:i=>e.moveIdentifierDown(r),onMoveUp:i=>e.moveIdentifierUp(r)},null,8,["index","identifier","num-identifiers","onEditPressed","onMoveDown","onMoveUp"])):((0,o.wg)(),(0,o.j4)(w,(0,o.dG)({key:1,index:r},t,{onUpdateType:e.setIdentifierTypeField,onUpdateValue:e.setIdentifierValueField,onUpdateDescription:e.setIdentifierDescriptionField,onClosePressed:i[2]||(i[2]=()=>e.editingId=-1),onRemovePressed:e.removeIdentifier}),null,16,["index","onUpdateType","onUpdateValue","onUpdateDescription","onRemovePressed"]))])))),128))])]),(0,o.Wm)(b,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addIdentifier},{default:n((()=>[f])),_:1},8,["onClick"]),e.identifiersErrors.length>0?((0,o.wg)(),(0,o.j4)(I,{key:0,class:["bg-warning","text-negative",e.identifiersErrors.length>0?"has-error":""]},{default:n((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.identifiersErrors,((e,i)=>((0,o.wg)(),(0,o.j4)("div",{key:i},(0,r.zw)(e),1)))),128))])),_:1},8,["class"])):(0,o.kq)("",!0),(0,o.Wm)(y,{modelValue:e.showIdentifiersHelp,"onUpdate:modelValue":i[3]||(i[3]=i=>e.showIdentifiersHelp=i),data:e.helpData.identifiers},null,8,["modelValue","data"])])],64)}));var m=t(7996),v=t(1959),h=t(2064);t(246);const g=(0,o.HX)("data-v-72e464f0");(0,o.dD)("data-v-72e464f0");const w={class:"items-center no-wrap"},b={class:"q-mt-md items-center no-wrap"},I={class:"row"},y={class:"subquestion"},W={class:"q-mt-md items-center no-wrap"},D={class:"row"},k={class:"subquestion"};(0,o.Cn)();const H=g(((e,i,t,n,a,l)=>{const s=(0,o.up)("q-option-group"),d=(0,o.up)("q-icon"),u=(0,o.up)("q-input"),c=(0,o.up)("q-card-section"),f=(0,o.up)("q-btn"),p=(0,o.up)("q-card-actions"),m=(0,o.up)("q-card"),v=(0,o.up)("InfoDialog");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)(m,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:g((()=>[(0,o.Wm)(c,null,{default:g((()=>[(0,o.Wm)("div",w,[(0,o.Wm)(s,{inline:"",type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":i[1]||(i[1]=i=>e.$emit("updateType","type",i))},null,8,["model-value","options"])]),(0,o.Wm)("div",b,[(0,o.Wm)("div",I,[(0,o.Wm)("h3",y,[(0,o.Uk)(" What is the value of the "+(0,r.zw)(e.label)+"? ",1),(0,o.Wm)(d,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:i[2]||(i[2]=i=>e.showIdentifierHelp=!0),style:{cursor:"pointer"}})])]),(0,o.Wm)(u,{autofocus:"","bg-color":"white",label:"Value",outlined:"",standout:"",dense:"",class:e.identifierValueErrors.length>0?"has-error":"",error:e.identifierValueErrors.length>0,"error-message":e.identifierValueErrors.join(", "),"model-value":e.value,"onUpdate:modelValue":i[3]||(i[3]=i=>e.$emit("updateValue","value",i))},null,8,["class","error","error-message","model-value"])]),(0,o.Wm)("div",W,[(0,o.Wm)("div",D,[(0,o.Wm)("h3",k,[(0,o.Uk)(" What is the description for the "+(0,r.zw)(e.label)+"? ",1),(0,o.Wm)(d,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:i[4]||(i[4]=i=>e.showDescriptionHelp=!0),style:{cursor:"pointer"}})])]),(0,o.Wm)(u,{"bg-color":"white",label:"Description",outlined:"",standout:"",dense:"","model-value":e.description,"onUpdate:modelValue":i[5]||(i[5]=i=>e.$emit("updateDescription","description",i))},null,8,["model-value"])])])),_:1}),(0,o.Wm)(p,{align:"right"},{default:g((()=>[(0,o.Wm)(f,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:i[6]||(i[6]=i=>e.$emit("removePressed"))}),(0,o.Wm)(f,{dense:"",icon:"done",label:"Done",onClick:i[7]||(i[7]=i=>e.$emit("closePressed"))})])),_:1})])),_:1}),(0,o.Wm)(v,{modelValue:e.showIdentifierHelp,"onUpdate:modelValue":i[8]||(i[8]=i=>e.showIdentifierHelp=i),data:e.helpData[e.identifierType]},null,8,["modelValue","data"]),(0,o.Wm)(v,{modelValue:e.showDescriptionHelp,"onUpdate:modelValue":i[9]||(i[9]=i=>e.showDescriptionHelp=i),data:e.helpData.description},null,8,["modelValue","data"])],64)}));var x=t(6823),U=t(8875);const V=(0,o.aZ)({name:"IdentifierCardEditing",props:{index:{type:Number,required:!0},type:{type:String,default:""},value:{type:String,default:""},description:{type:String,default:""}},components:{InfoDialog:x.Z},setup(e){const{errors:i}=(0,U.V)(),t={doi:"DOI",url:"URL",swh:"Software Heritage identifier",other:"identifier"},r=(0,o.Fl)((()=>(0,m.lF)(e.index,["doi","url","swh","other"].indexOf(e.type)).filter((0,m.uY)(i.value)).map((e=>e.replace.message)))),n={doi:{title:"doi",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsdoi",description:"The DOI (https://en.wikipedia.org/wiki/Digital_object_identifier) of the work.",examples:["10.5281/zenodo.1003150"]},url:{title:"url",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsurl",description:"A URL",examples:["https://research-software-project.org","http://research-software-project.org","sftp://files.research-software-project.org","ftp://files.research-software-project.org"]},swh:{title:"swh",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsswh-identifier",description:"The Software Heritage identifier (https://www.softwareheritage.org/).",examples:["swh:1:rev:309cf2674ee7a0749978cf8265ab91a60aea0f7d"]},other:{title:"other",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsidentifier",description:"An identifier that does not fit in the other categories.",examples:["arXiv:2103.06681"]},description:{title:"description",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsidentifier-description",description:"A description of the identifier.",examples:["The concept DOI of the work.","The URL of version 1.1.0 of the software","The Software Heritage link for version 1.1.0.","The ArXiv deposit of the encompassing paper."]}};return{helpData:n,typeOptions:[{label:"DOI",value:"doi"},{label:"URL",value:"url"},{label:"Software Heritage",value:"swh"},{label:"Other",value:"other"}],identifierType:(0,o.Fl)((()=>e.type)),label:(0,o.Fl)((()=>t[e.type])),identifierValueErrors:r,showDescriptionHelp:(0,v.iH)(!1),showIdentifierHelp:(0,v.iH)(!1)}},emits:["closePressed","removePressed","updateType","updateValue","updateDescription"]});var C=t(151),q=t(5589),j=t(7011),T=t(4554),E=t(4842),O=t(9367),Z=t(8240),F=t(7518),S=t.n(F);V.render=H,V.__scopeId="data-v-72e464f0";const _=V;S()(V,"components",{QCard:C.Z,QCardSection:q.Z,QOptionGroup:j.Z,QIcon:T.Z,QInput:E.Z,QCardActions:O.Z,QBtn:Z.Z});const P=(0,o.HX)("data-v-51a05e31");(0,o.dD)("data-v-51a05e31");const Q={style:{"flex-grow":"1.0"}};(0,o.Cn)();const z=P(((e,i,t,n,a,l)=>{const s=(0,o.up)("q-btn"),d=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(d,{bordered:"",class:["bg-formcard",e.identifierErrors.length>0?"red-border has-error":""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:P((()=>[(0,o.Wm)("div",Q,[(0,o.Wm)("ul",null,[(0,o.Wm)("li",null,(0,r.zw)(e.identifier.description),1),(0,o.Wm)("li",null,(0,r.zw)(e.identifier.type)+": "+(0,r.zw)(e.identifier.value),1)])]),(0,o.Wm)("div",null,[(0,o.Wm)(s,{class:"identifier-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:i[1]||(i[1]=i=>e.$emit("moveUp"))},null,8,["disable"]),(0,o.Wm)(s,{class:"identifier-button",color:"blue",disable:e.index>=e.numIdentifiers-1,icon:"ion-arrow-down",tabindex:"-1",onClick:i[2]||(i[2]=i=>e.$emit("moveDown"))},null,8,["disable"]),(0,o.Wm)(s,{class:"identifier-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:i[3]||(i[3]=i=>e.$emit("editPressed"))})])])),_:1},8,["class"])})),R=(0,o.aZ)({name:"IdentifierCardViewing",props:{index:{type:Number,required:!0},identifier:{type:Object,required:!0},numIdentifiers:{type:Number,default:0}},setup(e){const{errors:i}=(0,U.V)(),t=(0,o.Fl)((()=>(0,m.lF)(e.index,["doi","url","swh","other"].indexOf(e.identifier.type)).filter((0,m.uY)(i.value)).map((e=>e.replace.message)))),r=(0,o.Fl)((()=>m.gp.filter((0,m.uY)(i.value)).filter((0,m.uY)(i.value,(0,m.Uh)(e.index))).map((e=>e.replace.message)))),n=(0,o.Fl)((()=>[...t.value,...r.value]));return{identifierErrors:n}},emits:["editPressed","moveDown","moveUp"]});R.render=z,R.__scopeId="data-v-51a05e31";const Y=R;S()(R,"components",{QCard:C.Z,QBtn:Z.Z});var A=t(4009),$=t(1364),L=t(6513),X=function(e,i,t,o){function r(e){return e instanceof t?e:new t((function(i){i(e)}))}return new(t||(t=Promise))((function(t,n){function a(e){try{s(o.next(e))}catch(i){n(i)}}function l(e){try{s(o["throw"](e))}catch(i){n(i)}}function s(e){e.done?t(e.value):r(e.value).then(a,l)}s((o=o.apply(e,i||[])).next())}))};const B=(0,o.aZ)({name:"ScreenIdentifiers",components:{InfoDialog:x.Z,IdentifierCardEditing:_,IdentifierCardViewing:Y},setup(){(0,o.ic)((()=>{const{setErrorStateScreenIdentifiers:e}=(0,L.v)();e(document.getElementsByClassName("has-error").length>0)}));const{identifiers:e,setIdentifiers:i}=(0,$.Y)(),{errors:t}=(0,U.V)(),r=(0,v.iH)(-1),n=()=>X(this,void 0,void 0,(function*(){let t;const n={type:"doi",value:"",description:void 0};t=void 0===e.value?[n]:[...e.value,n],i(t),r.value=t.length-1,yield(0,o.Y3)(),(0,A.O)()})),a=()=>{if(void 0!==e.value){const t=[...e.value];t.splice(r.value,1),i(t),r.value=-1,Array.isArray(t)&&0===t.length&&i(void 0)}},l=(t,o)=>{if(void 0!==e.value){const t=Object.assign({},e.value[r.value]);t.description=""===o?void 0:o,e.value[r.value]=t,i(e.value)}},s=(t,o)=>{if(void 0!==e.value){const t=Object.assign({},e.value[r.value]);t.type=o,e.value[r.value]=t,i(e.value)}},d=(t,o)=>{if(void 0!==e.value){const t=Object.assign({},e.value[r.value]);t.value=o,e.value[r.value]=t,i(e.value)}},u=t=>{void 0!==e.value&&((0,h.A)(t,e.value,i),r.value===t&&t>0?r.value=r.value-1:r.value===t-1&&(r.value=r.value+1))},c=t=>{void 0!==e.value&&((0,h.v)(t,e.value,i),r.value===t&&t<e.value.length-1?r.value=r.value+1:r.value===t+1&&(r.value=r.value-1))},f=(0,o.Fl)((()=>m.I3.filter((0,m.uY)(t.value)).map((e=>e.replace.message)))),p={identifiers:{title:"identifiers",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#identifiers",description:"The identifiers of the work, such as DOIs, Software Heritage deposits, and URLs for relevant objects.",examples:["DOI: 10.5281/zenodo.1003149 - The concept DOI of the work","SWH: swh:1:dir:bc286860f423ea7ced246ba7458eef4b4541cf2d - The Software Heritage for version 1.1.0","URL: https://github.com/citation-file-format/citation-file-format/releases/tag/1.1.0 - The GitHub release URL of tag 1.1.0","OTHER: arXiv:2103.06681 - The ArXiv preprint of the paper"]}};return{addIdentifier:n,editingId:r,helpData:p,identifiers:e,identifiersErrors:f,moveIdentifierUp:u,moveIdentifierDown:c,removeIdentifier:a,setIdentifierDescriptionField:l,setIdentifierTypeField:s,setIdentifierValueField:d,showIdentifiersHelp:(0,v.iH)(!1)}}});var M=t(5607);B.render=p,B.__scopeId="data-v-234bf7fe";const N=B;S()(B,"components",{QIcon:T.Z,QBtn:Z.Z,QBanner:M.Z})}}]);