"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[554],{554:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var o=t(3673);function A(){var n="/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinish.vue",e="2e11caea0d2c7ce52259c2511c08955f1f849a19",t=new Function("return this")(),o="__coverage__",i={path:"/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinish.vue",statementMap:{0:{start:{line:3,column:19},end:{line:6,column:1}},1:{start:{line:7,column:19},end:{line:10,column:1}},2:{start:{line:11,column:19},end:{line:11,column:29}},3:{start:{line:12,column:19},end:{line:12,column:29}},4:{start:{line:13,column:19},end:{line:13,column:29}},5:{start:{line:14,column:32},end:{line:14,column:177}},6:{start:{line:15,column:19},end:{line:15,column:62}},7:{start:{line:16,column:19},end:{line:16,column:50}},8:{start:{line:17,column:19},end:{line:17,column:29}},9:{start:{line:18,column:33},end:{line:18,column:148}},10:{start:{line:21,column:36},end:{line:21,column:71}},11:{start:{line:22,column:27},end:{line:22,column:53}},12:{start:{line:24,column:2},end:{line:63,column:9}}},fnMap:{0:{name:"render",decl:{start:{line:20,column:16},end:{line:20,column:22}},loc:{start:{line:20,column:70},end:{line:64,column:1}},line:20}},branchMap:{0:{loc:{start:{line:25,column:4},end:{line:27,column:66}},type:"cond-expr",locations:[{start:{line:26,column:9},end:{line:26,column:74}},{start:{line:27,column:9},end:{line:27,column:65}}],line:25},1:{loc:{start:{line:28,column:4},end:{line:62,column:11}},type:"cond-expr",locations:[{start:{line:29,column:9},end:{line:59,column:10}},{start:{line:60,column:9},end:{line:62,column:10}}],line:28},2:{loc:{start:{line:30,column:10},end:{line:32,column:155}},type:"cond-expr",locations:[{start:{line:31,column:15},end:{line:31,column:215}},{start:{line:32,column:15},end:{line:32,column:154}}],line:30},3:{loc:{start:{line:36,column:12},end:{line:48,column:45}},type:"cond-expr",locations:[{start:{line:37,column:17},end:{line:47,column:40}},{start:{line:48,column:16},end:{line:48,column:45}}],line:36}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinish.vue"],names:["isValidCFF","showAdvanced","setupAdvanced","confirmAndReset"],mappings:";;;EAAA,KAAA;EAEQ,EAAE,EAAC,YAAY;;;EAFvB,KAAA;EAQQ,EAAE,EAAC,YAAY;;qBARvB,KAAA;qBAAA,KAAA;qBAAA,KAAA;gCAyBQ,aAEI,WAFD,oHAEH;qBACK,KAAK,EAAC,gCAAgC;qBActC,KAAK,EAAC,oBAAoB;qBA1CvC,KAAA;iCAqDQ,aAEI,WAFD,sFAEH;;;;;;wBAvDR;KAGcA,eAAU;uBAFpB,aAKK,MALL,UAKK,EAFJ,mBAED;uBACA,aAKK,MALL,UAKK,EAFJ,UAED;KAEWA,eAAU;uBAArB,aAqCM,OAnDV;YAgBmBC,iBAAY;6BADvB,aAII,KAnBZ,YAiBS,2JAED;6BACA,aAII,KAxBZ,YAsBS,8FAED;UACA,UAEI;UACJ,aAaM,OAbN,UAaM;YAZF,aAAkB;cAEPA,iBAAY;+BADvB,aAUE;kBAxCd,KAAA;kBAgCgB,KAAK,EAAC,uCAAuC;kBAC7C,SAAO,EAAC,cAAc;kBACtB,IAAI,EAAC,mBAAmB;kBACxB,KAAK,EAAC,iBAAiB;kBACvB,SAAO,EAAP,EAAO;kBACP,IAAI,EAAC,IAAI;kBACT,EAAE,EAAC,cAAc;kBACZ,OAAK,EAAEC,kBAAa;;gBAvCzC;;UA0CQ,aAQM,OARN,UAQM;YAPF,aAME;cALE,KAAK,EAAC,yDAAyD;cAC/D,IAAI,EAAC,SAAS;cACd,KAAK,EAAC,YAAY;cAClB,SAAO,EAAP,EAAO;cACF,OAAK,EAAEC,oBAAe;;;;uBAIvC,aAIM,OAxDV;UAqDQ,WAEI",sourcesContent:['\n    <h1\n        id="form-title"\n        v-if="isValidCFF"\n    >\n        Congratulations\n    </h1>\n    <h1\n        id="form-title"\n        v-else\n    >\n        Uh-oh!\n    </h1>\n\n    <div v-if="isValidCFF">\n        <p\n            v-if="!showAdvanced"\n        >\n            You now have a minimal CITATION.cff file. Use the buttons below to download your CITATION.cff file, continue adding more properties, or reset the form.\n        </p>\n        <p\n            v-else\n        >\n            Use the buttons below to download your CITATION.cff file, or reset the form to start over.\n        </p>\n        <p>\n            Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository.\n        </p>\n        <div class="row q-gutter-md justify-center">\n            <DownloadButton />\n            <q-btn\n                v-if="!showAdvanced"\n                class="rounded-borders bg-primary text-white"\n                data-cy="btn-add-more"\n                icon="workspace_premium"\n                label="Add more fields"\n                no-caps\n                size="xl"\n                to="/identifiers"\n                v-on:click="setupAdvanced"\n            />\n        </div>\n        <div class="row justify-center">\n            <q-btn\n                class="q-mt-md q-mb-md rounded-borders bg-secondary text-white"\n                icon="refresh"\n                label="Reset form"\n                no-caps\n                v-on:click="confirmAndReset"\n            />\n        </div>\n    </div>\n    <div v-else>\n        <p>\n            Your CITATION.cff is not valid just yet. Go back to the form to make some changes.\n        </p>\n    </div>\n']},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2e11caea0d2c7ce52259c2511c08955f1f849a19"},c=t[o]||(t[o]={});c[n]&&c[n].hash===e||(c[n]=i);var l=c[n];return A=function(){return l},l}A();const i=(A().s[0]++,{key:0,id:"form-title"}),c=(A().s[1]++,{key:1,id:"form-title"}),l=(A().s[2]++,{key:2}),r=(A().s[3]++,{key:0}),s=(A().s[4]++,{key:1}),a=(A().s[5]++,(0,o.Wm)("p",null," Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository. ",-1)),d=(A().s[6]++,{class:"row q-gutter-md justify-center"}),u=(A().s[7]++,{class:"row justify-center"}),m=(A().s[8]++,{key:3}),f=(A().s[9]++,(0,o.Wm)("p",null," Your CITATION.cff is not valid just yet. Go back to the form to make some changes. ",-1));function C(n,e,t,C,p,h){A().f[0]++;const v=(A().s[10]++,(0,o.up)("DownloadButton")),B=(A().s[11]++,(0,o.up)("q-btn"));return A().s[12]++,(0,o.wg)(),(0,o.j4)(o.HY,null,[n.isValidCFF?(A().b[0][0]++,(0,o.wg)(),(0,o.j4)("h1",i," Congratulations ")):(A().b[0][1]++,(0,o.wg)(),(0,o.j4)("h1",c," Uh-oh! ")),n.isValidCFF?(A().b[1][0]++,(0,o.wg)(),(0,o.j4)("div",l,[n.showAdvanced?(A().b[2][1]++,(0,o.wg)(),(0,o.j4)("p",s," Use the buttons below to download your CITATION.cff file, or reset the form to start over. ")):(A().b[2][0]++,(0,o.wg)(),(0,o.j4)("p",r," You now have a minimal CITATION.cff file. Use the buttons below to download your CITATION.cff file, continue adding more properties, or reset the form. ")),a,(0,o.Wm)("div",d,[(0,o.Wm)(v),n.showAdvanced?(A().b[3][1]++,(0,o.kq)("",!0)):(A().b[3][0]++,(0,o.wg)(),(0,o.j4)(B,{key:0,class:"rounded-borders bg-primary text-white","data-cy":"btn-add-more",icon:"workspace_premium",label:"Add more fields","no-caps":"",size:"xl",to:"/identifiers",onClick:n.setupAdvanced},null,8,["onClick"]))]),(0,o.Wm)("div",u,[(0,o.Wm)(B,{class:"q-mt-md q-mb-md rounded-borders bg-secondary text-white",icon:"refresh",label:"Reset form","no-caps":"",onClick:n.confirmAndReset},null,8,["onClick"])])])):(A().b[1][1]++,(0,o.wg)(),(0,o.j4)("div",m,[f]))],64)}var p=t(9172),h=t(9999),v=t(1364),B=t(8825),w=t(8875),b=function(n,e,t,o){function A(n){return n instanceof t?n:new t((function(e){e(n)}))}return new(t||(t=Promise))((function(t,i){function c(n){try{r(o.next(n))}catch(e){i(e)}}function l(n){try{r(o["throw"](n))}catch(e){i(e)}}function r(n){n.done?t(n.value):A(n.value).then(c,l)}r((o=o.apply(n,e||[])).next())}))};const E=(0,o.aZ)({name:"ScreenFinish",components:{DownloadButton:p.Z},setup(){const{setStepName:n,setShowAdvanced:e,showAdvanced:t}=(0,h.q)(),{reset:A}=(0,v.Y)(),{errors:i}=(0,w.V)(),c=(0,B.Z)();return{confirmAndReset:()=>{c.dialog({title:"Confirm",message:"Would you like to reset the form? All changes will be lost.",cancel:!0,persistent:!0}).onOk((()=>{A(),e(!1),n("start")}))},isValidCFF:(0,o.Fl)((()=>0===i.value.length)),setupAdvanced:()=>b(this,void 0,void 0,(function*(){e(!0),yield n("identifiers")})),showAdvanced:t}}});var y=t(8240),k=t(7518),I=t.n(k);E.render=C;const g=E;I()(E,"components",{QBtn:y.Z})}}]);