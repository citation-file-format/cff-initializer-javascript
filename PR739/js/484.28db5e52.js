"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[484],{5484:(n,e,t)=>{t.r(e),t.d(e,{default:()=>I});var o=t(3673);function i(){var n="/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinishAdvanced.vue",e="cdb9d5fd07af41a4a9f4424ffaf285b1b4f14956",t=new Function("return this")(),o="__coverage__",A={path:"/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinishAdvanced.vue",statementMap:{0:{start:{line:2,column:29},end:{line:2,column:60}},1:{start:{line:4,column:0},end:{line:4,column:31}},2:{start:{line:5,column:19},end:{line:8,column:1}},3:{start:{line:9,column:19},end:{line:12,column:1}},4:{start:{line:13,column:19},end:{line:13,column:29}},5:{start:{line:14,column:32},end:{line:14,column:180}},6:{start:{line:15,column:32},end:{line:15,column:202}},7:{start:{line:16,column:19},end:{line:16,column:35}},8:{start:{line:17,column:19},end:{line:17,column:35}},9:{start:{line:18,column:19},end:{line:18,column:29}},10:{start:{line:19,column:32},end:{line:19,column:172}},11:{start:{line:20,column:0},end:{line:20,column:13}},12:{start:{line:22,column:35},end:{line:53,column:2}},13:{start:{line:23,column:36},end:{line:23,column:71}},14:{start:{line:24,column:27},end:{line:24,column:53}},15:{start:{line:26,column:2},end:{line:52,column:9}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:22,column:43},end:{line:22,column:44}},loc:{start:{line:22,column:94},end:{line:53,column:1}},line:22}},branchMap:{0:{loc:{start:{line:27,column:4},end:{line:29,column:66}},type:"cond-expr",locations:[{start:{line:28,column:9},end:{line:28,column:74}},{start:{line:29,column:9},end:{line:29,column:65}}],line:27},1:{loc:{start:{line:30,column:4},end:{line:51,column:11}},type:"cond-expr",locations:[{start:{line:31,column:9},end:{line:48,column:10}},{start:{line:49,column:9},end:{line:51,column:10}}],line:30}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinishAdvanced.vue"],names:["isValidCFF","confirmAndReset"],mappings:";;;;;EAAA,KAAA;EAEQ,EAAE,EAAC,YAAY;;;EAFvB,KAAA;EAQQ,EAAE,EAAC,YAAY;;qBARvB,KAAA;gCAeQ,aAEI,OAFD,KAAK,EAAC,kBAAkB,IAAC,8FAE5B;gCACA,aAEI,OAFD,KAAK,EAAC,kBAAkB,IAAC,oHAE5B;qBACK,KAAK,EAAC,KAAK;qBAGX,KAAK,EAAC,KAAK;qBAxBxB,KAAA;gCAqCQ,aAEI,OAFD,KAAK,EAAC,kBAAkB,IAAC,sFAE5B;;;;;;;wBAvCR;KAGcA,eAAU;uBAFpB,aAKK,MALL,UAKK,EAFJ,mBAED;uBACA,aAKK,MALL,UAKK,EAFJ,UAED;KAEWA,eAAU;uBAArB,aAqBM,OAnCV;UAeQ,UAEI;UACJ,UAEI;UACJ,aAEM,OAFN,UAEM;YADF,aAAwC,6BAAxB,KAAK,EAAC,eAAe;;UAEzC,aAUM,OAVN,UAUM;YATF,aAQE;cAPE,KAAK,EAAC,iBAAiB;cACvB,KAAK,EAAC,EAAE;cACR,YAAU,EAAC,KAAK;cAChB,IAAI,EAAC,SAAS;cACd,KAAK,EAAC,YAAY;cAClB,SAAO,EAAP,EAAO;cACF,OAAK,EAAEC,oBAAe;;;;uBAIvC,aAIM,OAxCV;UAqCQ,UAEI",sourcesContent:['\n    <h1\n        id="form-title"\n        v-if="isValidCFF"\n    >\n        Congratulations\n    </h1>\n    <h1\n        id="form-title"\n        v-else\n    >\n        Uh-oh!\n    </h1>\n\n    <div v-if="isValidCFF">\n        <p class="finish-paragraph">\n            Use the buttons below to download your CITATION.cff file, or reset the form to start over.\n        </p>\n        <p class="finish-paragraph">\n            Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository.\n        </p>\n        <div class="row">\n            <DownloadButton class="col-4 q-ma-lg" />\n        </div>\n        <div class="row">\n            <q-btn\n                class="q-mt-md q-mb-md"\n                color=""\n                text-color="red"\n                icon="refresh"\n                label="Reset form"\n                no-caps\n                v-on:click="confirmAndReset"\n            />\n        </div>\n    </div>\n    <div v-else>\n        <p class="finish-paragraph">\n            Your CITATION.cff is not valid just yet. Go back to the form to make some changes.\n        </p>\n    </div>\n']},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"cdb9d5fd07af41a4a9f4424ffaf285b1b4f14956"},l=t[o]||(t[o]={});l[n]&&l[n].hash===e||(l[n]=A);var a=l[n];return i=function(){return a},a}i();const A=(i().s[0]++,(0,o.HX)("data-v-b9aca35c"));i().s[1]++,(0,o.dD)("data-v-b9aca35c");const l=(i().s[2]++,{key:0,id:"form-title"}),a=(i().s[3]++,{key:1,id:"form-title"}),c=(i().s[4]++,{key:2}),s=(i().s[5]++,(0,o.Wm)("p",{class:"finish-paragraph"}," Use the buttons below to download your CITATION.cff file, or reset the form to start over. ",-1)),r=(i().s[6]++,(0,o.Wm)("p",{class:"finish-paragraph"}," Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository. ",-1)),u=(i().s[7]++,{class:"row"}),d=(i().s[8]++,{class:"row"}),m=(i().s[9]++,{key:3}),f=(i().s[10]++,(0,o.Wm)("p",{class:"finish-paragraph"}," Your CITATION.cff is not valid just yet. Go back to the form to make some changes. ",-1));i().s[11]++,(0,o.Cn)();const h=(i().s[12]++,A(((n,e,t,A,h,p)=>{i().f[0]++;const C=(i().s[13]++,(0,o.up)("DownloadButton")),v=(i().s[14]++,(0,o.up)("q-btn"));return i().s[15]++,(0,o.wg)(),(0,o.j4)(o.HY,null,[n.isValidCFF?(i().b[0][0]++,(0,o.wg)(),(0,o.j4)("h1",l," Congratulations ")):(i().b[0][1]++,(0,o.wg)(),(0,o.j4)("h1",a," Uh-oh! ")),n.isValidCFF?(i().b[1][0]++,(0,o.wg)(),(0,o.j4)("div",c,[s,r,(0,o.Wm)("div",u,[(0,o.Wm)(C,{class:"col-4 q-ma-lg"})]),(0,o.Wm)("div",d,[(0,o.Wm)(v,{class:"q-mt-md q-mb-md",color:"","text-color":"red",icon:"refresh",label:"Reset form","no-caps":"",onClick:n.confirmAndReset},null,8,["onClick"])])])):(i().b[1][1]++,(0,o.wg)(),(0,o.j4)("div",m,[f]))],64)})));var p=t(9050),C=t(9999),v=t(1364),E=t(8825),K=t(6513),b=t(8875),B=function(n,e,t,o){function i(n){return n instanceof t?n:new t((function(e){e(n)}))}return new(t||(t=Promise))((function(t,A){function l(n){try{c(o.next(n))}catch(e){A(e)}}function a(n){try{c(o["throw"](n))}catch(e){A(e)}}function c(n){n.done?t(n.value):i(n.value).then(l,a)}c((o=o.apply(n,e||[])).next())}))};const w=(0,o.aZ)({name:"ScreenFinishAdvanced",components:{DownloadButton:p.Z},setup(){const{setStepName:n,setShowAdvanced:e}=(0,C.q)(),{reset:t}=(0,v.Y)(),{reset:i}=(0,K.v)(),{errors:A}=(0,b.V)(),l=(0,E.Z)();return{isValidCFF:(0,o.Fl)((()=>0===A.value.length)),confirmAndReset:()=>{l.dialog({title:"Confirm",message:"Would you like to reset the form? All changes will be lost.",cancel:!0,persistent:!0}).onOk((()=>B(this,void 0,void 0,(function*(){t(),i(),e(!1),yield n("start")}))))}}}});var F=t(8240),g=t(7518),k=t.n(g);w.render=h,w.__scopeId="data-v-b9aca35c";const I=w;k()(w,"components",{QBtn:F.Z})}}]);