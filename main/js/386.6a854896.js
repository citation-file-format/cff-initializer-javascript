"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[386],{2644:(t,n,e)=>{e.r(n),e.d(n,{default:()=>f});var a=e(3673);function A(){var t="/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenAbstract.vue",n="0d13251ff6b589d62a410784e68b3d664a3c64c0",e=new Function("return this")(),a="__coverage__",c={path:"/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenAbstract.vue",statementMap:{0:{start:{line:2,column:29},end:{line:2,column:60}},1:{start:{line:4,column:0},end:{line:4,column:31}},2:{start:{line:5,column:32},end:{line:7,column:6}},3:{start:{line:8,column:19},end:{line:8,column:41}},4:{start:{line:9,column:19},end:{line:9,column:40}},5:{start:{line:10,column:32},end:{line:10,column:94}},6:{start:{line:11,column:0},end:{line:11,column:13}},7:{start:{line:13,column:35},end:{line:40,column:2}},8:{start:{line:14,column:32},end:{line:14,column:63}},9:{start:{line:15,column:29},end:{line:15,column:57}},10:{start:{line:17,column:2},end:{line:39,column:9}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:13,column:43},end:{line:13,column:44}},loc:{start:{line:13,column:94},end:{line:40,column:1}},line:13}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenAbstract.vue"],names:["helpData","abstract","setAbstract"],mappings:";;;;gCACI,aAIM,SAJD,EAAE,EAAC,YAAY;eAChB,aAEK,QAFD,KAAK,EAAC,YAAY,IAAC,YAEvB;;qBAGC,EAAE,EAAC,cAAc;qBACd,KAAK,EAAC,UAAU;gCAR5B,iBAQ6B,4CAEjB;;;;;;;wBAVZ;IACI,UAIM;IAEN,aAiBM,OAjBN,UAiBM;MAhBF,aAGK,MAHL,UAGK;QAXb;QAUY,aAA8C;UAA3B,IAAI,EAAEA,aAAQ,CAAC,QAAQ;;;MAE9C,aAWE;QAVE,QAAQ,EAAR,EAAQ;QACR,UAAQ,EAAC,OAAO;QAChB,SAAO,EAAC,gBAAgB;QACxB,aAAW,EAAC,sCAAsC;QAClD,KAAK,EAAC,UAAU;QAChB,QAAQ,EAAR,EAAQ;QACR,QAAQ,EAAR,EAAQ;QACR,IAAI,EAAC,UAAU;QACR,aAAW,EAAEC,aAAQ;QACvB,qBAAiB,EAAEC,gBAAW",sourcesContent:['\n    <div id="form-title">\n        <h1 class="page-title">\n            Abstract\n        </h1>\n    </div>\n\n    <div id="form-content">\n        <h2 class="question">\n            Please provide a description of the work\n            <InfoDialog v-bind:data="helpData.abstract" />\n        </h2>\n        <q-input\n            autogrow\n            bg-color="white"\n            data-cy="input-abstract"\n            input-style="min-height: 100px; max-height: 444px"\n            label="abstract"\n            outlined\n            standout\n            type="textarea"\n            v-bind:model-value="abstract"\n            v-on:update:modelValue="setAbstract"\n        />\n    </div>\n']},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0d13251ff6b589d62a410784e68b3d664a3c64c0"},i=e[a]||(e[a]={});i[t]&&i[t].hash===n||(i[t]=c);var s=i[t];return A=function(){return s},s}A();const c=(A().s[0]++,(0,a.HX)("data-v-064315c3"));A().s[1]++,(0,a.dD)("data-v-064315c3");const i=(A().s[2]++,(0,a.Wm)("div",{id:"form-title"},[(0,a.Wm)("h1",{class:"page-title"}," Abstract ")],-1)),s=(A().s[3]++,{id:"form-content"}),o=(A().s[4]++,{class:"question"}),r=(A().s[5]++,(0,a.Uk)(" Please provide a description of the work "));A().s[6]++,(0,a.Cn)();const l=(A().s[7]++,c(((t,n,e,c,l,u)=>{A().f[0]++;const d=(A().s[8]++,(0,a.up)("InfoDialog")),m=(A().s[9]++,(0,a.up)("q-input"));return A().s[10]++,(0,a.wg)(),(0,a.j4)(a.HY,null,[i,(0,a.Wm)("div",s,[(0,a.Wm)("h2",o,[r,(0,a.Wm)(d,{data:t.helpData.abstract},null,8,["data"])]),(0,a.Wm)(m,{autogrow:"","bg-color":"white","data-cy":"input-abstract","input-style":"min-height: 100px; max-height: 444px",label:"abstract",outlined:"",standout:"",type:"textarea","model-value":t.abstract,"onUpdate:modelValue":t.setAbstract},null,8,["model-value","onUpdate:modelValue"])])],64)})));var u=e(9142),d=e(1364);const m=(0,a.aZ)({name:"ScreenAbstract",components:{InfoDialog:u.Z},setup(){const{abstract:t,setAbstract:n}=(0,d.Y)(),e={abstract:{title:"abstract",url:[{text:"Click here to see the documentation for abstract.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#abstract"}],description:"A description or summary of the work."}};return{abstract:t,helpData:e,setAbstract:n}}});var p=e(4842),b=e(7518),h=e.n(b);m.render=l,m.__scopeId="data-v-064315c3";const f=m;h()(m,"components",{QInput:p.Z})}}]);