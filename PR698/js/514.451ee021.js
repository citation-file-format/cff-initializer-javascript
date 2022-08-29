"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[514],{8268:(e,o,r)=>{r.r(o),r.d(o,{default:()=>W});var t=r(3673),i=r(2323);const s=(0,t.HX)("data-v-a3bfde76");(0,t.dD)("data-v-a3bfde76");const a=(0,t.Wm)("div",{id:"form-title"},[(0,t.Wm)("h1",{class:"page-title"}," Related resources ")],-1),l={id:"form-content"},p={class:"question"},n={class:"question"},c={class:"question"},u={class:"question"};(0,t.Cn)();const d=s(((e,o,r,s,d,m)=>{const h=(0,t.up)("q-icon"),f=(0,t.up)("q-input"),y=(0,t.up)("InfoDialog");return(0,t.wg)(),(0,t.j4)(t.HY,null,[a,(0,t.Wm)("div",l,[(0,t.Wm)("h2",p,[(0,t.Uk)(" What is the URL of the "+(0,i.zw)(e.type)+" in a source code repository? ",1),(0,t.Wm)(h,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:o[1]||(o[1]=o=>e.showRepositoryCodeHelp=!0),style:{cursor:"pointer"}})]),(0,t.Wm)(f,{"bg-color":"white",label:"repository-code",outlined:"",standout:"",class:e.repositoryCodeErrors.length>0?"has-error":"","model-value":e.repositoryCode,error:e.repositoryCodeErrors.length>0,"error-message":e.repositoryCodeErrors.join(", "),"onUpdate:modelValue":e.setRepositoryCode},null,8,["class","model-value","error","error-message","onUpdate:modelValue"]),(0,t.Wm)("h2",n,[(0,t.Uk)(" What is the URL of a landing page/website for the "+(0,i.zw)(e.type)+"? ",1),(0,t.Wm)(h,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:o[2]||(o[2]=o=>e.showUrlHelp=!0),style:{cursor:"pointer"}})]),(0,t.Wm)(f,{"bg-color":"white",label:"url",outlined:"",standout:"",class:e.urlErrors.length>0?"has-error":"","model-value":e.url,error:e.urlErrors.length>0,"error-message":e.urlErrors.join(", "),"onUpdate:modelValue":e.setUrl},null,8,["class","model-value","error","error-message","onUpdate:modelValue"]),(0,t.Wm)("h2",c,[(0,t.Uk)(" What is the URL of the "+(0,i.zw)(e.type)+" in a repository? ",1),(0,t.Wm)(h,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:o[3]||(o[3]=o=>e.showRepositoryHelp=!0),style:{cursor:"pointer"}})]),(0,t.Wm)(f,{"bg-color":"white",label:"repository",outlined:"",standout:"",class:e.repositoryErrors.length>0?"has-error":"","model-value":e.repository,error:e.repositoryErrors.length>0,"error-message":e.repositoryErrors.join(", "),"onUpdate:modelValue":e.setRepository},null,8,["class","model-value","error","error-message","onUpdate:modelValue"]),(0,t.Wm)("h2",u,[(0,t.Uk)(" What is the URL of the "+(0,i.zw)(e.type)+" in a build artifact/binary repository? ",1),(0,t.Wm)(h,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:o[4]||(o[4]=o=>e.showRepositoryArtifactHelp=!0),style:{cursor:"pointer"}})]),(0,t.Wm)(f,{"bg-color":"white",label:"repository-artifact",outlined:"",standout:"",class:e.repositoryArtifactErrors.length>0?"has-error":"","model-value":e.repositoryArtifact,error:e.repositoryArtifactErrors.length>0,"error-message":e.repositoryArtifactErrors.join(", "),"onUpdate:modelValue":e.setRepositoryArtifact},null,8,["class","model-value","error","error-message","onUpdate:modelValue"]),(0,t.Wm)(y,{modelValue:e.showRepositoryHelp,"onUpdate:modelValue":o[5]||(o[5]=o=>e.showRepositoryHelp=o),data:e.helpData.repository},null,8,["modelValue","data"]),(0,t.Wm)(y,{modelValue:e.showRepositoryArtifactHelp,"onUpdate:modelValue":o[6]||(o[6]=o=>e.showRepositoryArtifactHelp=o),data:e.helpData.repositoryArtifact},null,8,["modelValue","data"]),(0,t.Wm)(y,{modelValue:e.showRepositoryCodeHelp,"onUpdate:modelValue":o[7]||(o[7]=o=>e.showRepositoryCodeHelp=o),data:e.helpData.repositoryCode},null,8,["modelValue","data"]),(0,t.Wm)(y,{modelValue:e.showUrlHelp,"onUpdate:modelValue":o[8]||(o[8]=o=>e.showUrlHelp=o),data:e.helpData.url},null,8,["modelValue","data"])])],64)}));var m=r(7996),h=r(1959),f=r(6823),y=r(1364),g=r(6513),b=r(8875);const R=(0,t.aZ)({name:"ScreenRelatedResources",components:{InfoDialog:f.Z},setup(){(0,t.ic)((()=>{const{setErrorStateScreenRelatedResources:e}=(0,g.v)();e(document.getElementsByClassName("has-error").length>0)}));const{repository:e,repositoryArtifact:o,repositoryCode:r,url:i,setRepository:s,setRepositoryArtifact:a,setRepositoryCode:l,setUrl:p,type:n}=(0,y.Y)(),{errors:c}=(0,b.V)(),u=(0,t.Fl)((()=>m.G_.filter((0,m.uY)(c.value)).map((e=>e.replace.message)).filter(m.Tw))),d=(0,t.Fl)((()=>m.Bs.filter((0,m.uY)(c.value)).map((e=>e.replace.message)).filter(m.Tw))),f=(0,t.Fl)((()=>m.iA.filter((0,m.uY)(c.value)).map((e=>e.replace.message)).filter(m.Tw))),R=(0,t.Fl)((()=>m.tB.filter((0,m.uY)(c.value)).map((e=>e.replace.message)).filter(m.Tw))),w={repository:{title:"repository",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository",description:`URL of the ${n.value} in a repository/archive that is neither a source code repository nor a build artifact repository`,examples:["https://ascl.net/2105.013"]},repositoryArtifact:{title:"repository-artifact",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository-artifact",description:`URL of the ${n.value}  in a build artifact/binary repository`,examples:["https://search.maven.org/artifact/org.corpus-tools/cff-maven-plugin/0.4.0/maven-plugin"]},repositoryCode:{title:"repository-code",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository-code",description:`URL of the ${n.value} in a source code repository`,examples:["https://github.com/citation-file-format/citation-file-format"]},url:{title:"url",url:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#url",description:`URL of the landing page/website for the ${n.value}`,examples:["https://citation-file-format.github.io/"]}};return{helpData:w,repository:e,repositoryErrors:f,repositoryArtifact:o,repositoryArtifactErrors:R,repositoryCode:r,repositoryCodeErrors:u,url:i,urlErrors:d,setRepository:s,setRepositoryArtifact:a,setRepositoryCode:l,setUrl:p,showRepositoryHelp:(0,h.iH)(!1),showRepositoryArtifactHelp:(0,h.iH)(!1),showRepositoryCodeHelp:(0,h.iH)(!1),showUrlHelp:(0,h.iH)(!1),type:n}}});var w=r(4554),U=r(4842),v=r(7518),C=r.n(v);R.render=d,R.__scopeId="data-v-a3bfde76";const W=R;C()(R,"components",{QIcon:w.Z,QInput:U.Z})}}]);