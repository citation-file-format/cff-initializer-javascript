"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[628],{9389:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(3673);function A(){var e="/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenStart.vue",t="88a660d1ab9f3590d6f57ae7af7603dc23b88eb6",n=new Function("return this")(),a="__coverage__",l={path:"/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenStart.vue",statementMap:{0:{start:{line:2,column:29},end:{line:2,column:60}},1:{start:{line:4,column:0},end:{line:4,column:31}},2:{start:{line:5,column:32},end:{line:7,column:6}},3:{start:{line:8,column:19},end:{line:8,column:41}},4:{start:{line:9,column:19},end:{line:9,column:40}},5:{start:{line:10,column:32},end:{line:10,column:104}},6:{start:{line:11,column:19},end:{line:11,column:40}},7:{start:{line:12,column:32},end:{line:12,column:84}},8:{start:{line:13,column:19},end:{line:13,column:40}},9:{start:{line:14,column:32},end:{line:14,column:140}},10:{start:{line:15,column:0},end:{line:15,column:13}},11:{start:{line:17,column:35},end:{line:76,column:2}},12:{start:{line:18,column:32},end:{line:18,column:63}},13:{start:{line:19,column:36},end:{line:19,column:71}},14:{start:{line:20,column:29},end:{line:20,column:57}},15:{start:{line:22,column:2},end:{line:75,column:9}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:17,column:43},end:{line:17,column:44}},loc:{start:{line:17,column:94},end:{line:76,column:1}},line:17}},branchMap:{0:{loc:{start:{line:50,column:16},end:{line:50,column:62}},type:"cond-expr",locations:[{start:{line:50,column:46},end:{line:50,column:57}},{start:{line:50,column:60},end:{line:50,column:62}}],line:50},1:{loc:{start:{line:68,column:16},end:{line:68,column:64}},type:"cond-expr",locations:[{start:{line:68,column:48},end:{line:68,column:59}},{start:{line:68,column:62},end:{line:68,column:64}}],line:68}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenStart.vue"],names:["helpData","type","typeOptions","setType","setMessagePlaceHolder","titleErrors","title","setTitle","messageErrors","message","setMessage"],mappings:";;;;gCACI,aAIM,SAJD,EAAE,EAAC,YAAY;eAChB,aAEK,QAFD,KAAK,EAAC,YAAY,IAAC,SAEvB;;qBAGC,EAAE,EAAC,cAAc;qBACd,KAAK,EAAC,UAAU;gCAR5B,iBAQ6B,sDAEjB;qBASA,KAAK,EAAC,UAAU;gCAnB5B,iBAmB6B,kCAEjB;qBAcA,KAAK,EAAC,UAAU;gCAnC5B,iBAmC6B,0FAEjB;;;;;;;;wBArCZ;IACI,UAIM;IAEN,aA4CM,OA5CN,UA4CM;MA3CF,aAGK,MAHL,UAGK;QAXb;QAUY,aAA0C;UAAvB,IAAI,EAAEA,aAAQ,CAAC,IAAI;;;MAE1C,aAME;QALE,SAAO,EAAC,YAAY;QACpB,IAAI,EAAC,OAAO;QACL,aAAW,EAAEC,SAAI;QACjB,OAAO,EAAEC,gBAAW;QACtB,qBAAiB,GAAGC,YAAO,EAAEC,0BAAqB;;MAE3D,aAGK,MAHL,UAGK;QAtBb;QAqBY,aAA2C;UAAxB,IAAI,EAAEJ,aAAQ,CAAC,KAAK;;;MAE3C,aAWE;QAVE,UAAQ,EAAC,OAAO;QAChB,SAAO,EAAC,aAAa;QACrB,KAAK,EAAC,OAAO;QACb,QAAQ,EAAR,EAAQ;QACR,QAAQ,EAAR,EAAQ;QACD,KAAK,GAAGK,gBAAW,CAAC,MAAM;QAC1B,aAAW,EAAEC,UAAK;QAClB,KAAK,EAAED,gBAAW,CAAC,MAAM;QACzB,eAAa,EAAEA,gBAAW,CAAC,IAAI;QACjC,qBAAiB,EAAEE,aAAQ;;MAEpC,aAGK,MAHL,UAGK;QAtCb;QAqCY,aAA6C;UAA1B,IAAI,EAAEP,aAAQ,CAAC,OAAO;;;MAE7C,aAWE;QAVE,UAAQ,EAAC,OAAO;QAChB,SAAO,EAAC,eAAe;QACvB,KAAK,EAAC,SAAS;QACf,QAAQ,EAAR,EAAQ;QACR,QAAQ,EAAR,EAAQ;QACD,KAAK,GAAGQ,kBAAa,CAAC,MAAM;QAC5B,aAAW,EAAEC,YAAO;QACpB,KAAK,EAAED,kBAAa,CAAC,MAAM;QAC3B,eAAa,EAAEA,kBAAa,CAAC,IAAI;QACnC,qBAAiB,EAAEE,eAAU",sourcesContent:['\n    <div id="form-title">\n        <h1 class="page-title">\n            Start\n        </h1>\n    </div>\n\n    <div id="form-content">\n        <h2 class="question">\n            What type of work does this CITATION.cff describe?\n            <InfoDialog v-bind:data="helpData.type" />\n        </h2>\n        <q-option-group\n            data-cy="radio-type"\n            type="radio"\n            v-bind:model-value="type"\n            v-bind:options="typeOptions"\n            v-on:update:modelValue="[setType, setMessagePlaceHolder]"\n        />\n        <h2 class="question">\n            What is the title of the work?\n            <InfoDialog v-bind:data="helpData.title" />\n        </h2>\n        <q-input\n            bg-color="white"\n            data-cy="input-title"\n            label="title"\n            outlined\n            standout\n            v-bind:class="[titleErrors.length > 0 ? \'has-error\' : \'\']"\n            v-bind:model-value="title"\n            v-bind:error="titleErrors.length > 0"\n            v-bind:error-message="titleErrors.join(\', \')"\n            v-on:update:modelValue="setTitle"\n        />\n        <h2 class="question">\n            What do you want citers to do with the information provided in your CITATION.cff file?\n            <InfoDialog v-bind:data="helpData.message" />\n        </h2>\n        <q-input\n            bg-color="white"\n            data-cy="input-message"\n            label="message"\n            outlined\n            standout\n            v-bind:class="[messageErrors.length > 0 ? \'has-error\' : \'\']"\n            v-bind:model-value="message"\n            v-bind:error="messageErrors.length > 0"\n            v-bind:error-message="messageErrors.join(\', \')"\n            v-on:update:modelValue="setMessage"\n        />\n    </div>\n']},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"88a660d1ab9f3590d6f57ae7af7603dc23b88eb6"},o=n[a]||(n[a]={});o[e]&&o[e].hash===t||(o[e]=l);var s=o[e];return A=function(){return s},s}A();const l=(A().s[0]++,(0,a.HX)("data-v-615f39cf"));A().s[1]++,(0,a.dD)("data-v-615f39cf");const o=(A().s[2]++,(0,a.Wm)("div",{id:"form-title"},[(0,a.Wm)("h1",{class:"page-title"}," Start ")],-1)),s=(A().s[3]++,{id:"form-content"}),i=(A().s[4]++,{class:"question"}),r=(A().s[5]++,(0,a.Uk)(" What type of work does this CITATION.cff describe? ")),c=(A().s[6]++,{class:"question"}),m=(A().s[7]++,(0,a.Uk)(" What is the title of the work? ")),d=(A().s[8]++,{class:"question"}),u=(A().s[9]++,(0,a.Uk)(" What do you want citers to do with the information provided in your CITATION.cff file? "));A().s[10]++,(0,a.Cn)();const p=(A().s[11]++,l(((e,t,n,l,p,f)=>{A().f[0]++;const h=(A().s[12]++,(0,a.up)("InfoDialog")),C=(A().s[13]++,(0,a.up)("q-option-group")),E=(A().s[14]++,(0,a.up)("q-input"));return A().s[15]++,(0,a.wg)(),(0,a.j4)(a.HY,null,[o,(0,a.Wm)("div",s,[(0,a.Wm)("h2",i,[r,(0,a.Wm)(h,{data:e.helpData.type},null,8,["data"])]),(0,a.Wm)(C,{"data-cy":"radio-type",type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":[e.setType,e.setMessagePlaceHolder]},null,8,["model-value","options","onUpdate:modelValue"]),(0,a.Wm)("h2",c,[m,(0,a.Wm)(h,{data:e.helpData.title},null,8,["data"])]),(0,a.Wm)(E,{"bg-color":"white","data-cy":"input-title",label:"title",outlined:"",standout:"",class:[e.titleErrors.length>0?(A().b[0][0]++,"has-error"):(A().b[0][1]++,"")],"model-value":e.title,error:e.titleErrors.length>0,"error-message":e.titleErrors.join(", "),"onUpdate:modelValue":e.setTitle},null,8,["class","model-value","error","error-message","onUpdate:modelValue"]),(0,a.Wm)("h2",d,[u,(0,a.Wm)(h,{data:e.helpData.message},null,8,["data"])]),(0,a.Wm)(E,{"bg-color":"white","data-cy":"input-message",label:"message",outlined:"",standout:"",class:[e.messageErrors.length>0?(A().b[1][0]++,"has-error"):(A().b[1][1]++,"")],"model-value":e.message,error:e.messageErrors.length>0,"error-message":e.messageErrors.join(", "),"onUpdate:modelValue":e.setMessage},null,8,["class","model-value","error","error-message","onUpdate:modelValue"])])],64)})));var f=n(7996),h=n(9142),C=n(1364),E=n(6513),g=n(8875);const v=(0,a.aZ)({name:"ScreenStart",components:{InfoDialog:h.Z},setup(){(0,a.ic)((()=>{const{setErrorStateScreenStart:e}=(0,E.v)();e(document.getElementsByClassName("has-error").length>0)}));const{message:e,title:t,type:n,setMessage:A,setTitle:l,setType:o}=(0,C.Y)(),{errors:s}=(0,g.V)(),i=(0,a.Fl)((()=>f.Tc.filter((0,f.uY)(s.value)).map((e=>e.replace.message)))),r=(0,a.Fl)((()=>f.Sh.filter((0,f.uY)(s.value)).map((e=>e.replace.message)))),c=()=>{const t=/(software|dataset)/gim,a=t.exec(e.value);a&&A(e.value.split(a[0]).join(n.value))},m={type:{title:"type",url:[{text:"Click here to see the documentation for type.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#type"}],description:"The type of the work that is being described by this CITATION.cff file."},title:{title:"title",url:[{text:"Click here to see the documentation for title.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#title"}],description:"The name of the software or dataset.",examples:["cffconvert","Firefox","LibreOffice"]},message:{title:"message",url:[{text:"Click here to see the documentation for message.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#message"}],description:"A message to the human reader of the CITATION.cff file to let them know what to do with the citation metadata.",examples:["If you use this software, please cite it using the metadata from this file.","Please cite this software using these metadata.",'Please cite this software using the metadata from "preferred-citation".']}};return{helpData:m,message:e,messageErrors:i,title:t,titleErrors:r,type:n,typeOptions:[{label:"Software",value:"software"},{label:"Dataset",value:"dataset"}],setMessage:A,setMessagePlaceHolder:c,setTitle:l,setType:o}}});var b=n(7011),B=n(4842),Q=n(7518),y=n.n(Q);v.render=p,v.__scopeId="data-v-615f39cf";const I=v;y()(v,"components",{QOptionGroup:b.Z,QInput:B.Z})}}]);