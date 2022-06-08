(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var r=t(8880),a=t(3525),o=t(3673);function i(e,n,t,r,a,i){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(l)}const l={name:"App"};l.render=i;const s=l;var d=t(7083),c=t(9582);const u=[{path:"/",component:()=>Promise.all([t.e(736),t.e(417)]).then(t.bind(t,9417))},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(417)]).then(t.bind(t,9417))},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(590)]).then(t.bind(t,4590)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(285)]).then(t.bind(t,4525))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(590)]).then(t.bind(t,4590)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(150)]).then(t.bind(t,2281))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(590)]).then(t.bind(t,4590)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(221)]).then(t.bind(t,6866))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(590)]).then(t.bind(t,4590)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(339)]).then(t.bind(t,4059))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(590)]).then(t.bind(t,4590)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(375)]).then(t.bind(t,8301))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(590)]).then(t.bind(t,4590)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(181)]).then(t.bind(t,1243))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(590)]).then(t.bind(t,4590)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(464)]).then(t.bind(t,3292))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(590)]).then(t.bind(t,4590)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(112)]).then(t.bind(t,8947))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(590)]).then(t.bind(t,4590)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(479)]).then(t.bind(t,1621))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(590)]).then(t.bind(t,4590)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(675)]).then(t.bind(t,747))}]},{path:"/404",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))}],h=u;var p=t(9999);const f=(0,d.BC)((()=>{const e=c.r5,n=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("/PR552/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,p.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,r=e(s);return r.use(a.Z,n),{app:r,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F9E3A4"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(r.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>p});var r=t(1959),a=t(3673),o=t(9582),i=function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{s(r.next(e))}catch(n){o(n)}}function l(e){try{s(r["throw"](e))}catch(n){o(n)}}function s(e){e.done?t(e.value):a(e.value).then(i,l)}s((r=r.apply(e,n||[])).next())}))};const l=(0,r.iH)({showAdvanced:!1,stepIndex:0}),s=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],d=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),c=0,u=(0,a.Fl)((()=>l.value.showAdvanced?s.indexOf("finish-advanced"):s.indexOf("finish-minimum"))),h=(0,a.Fl)((()=>s[l.value.stepIndex])),p=()=>{const e=(0,o.tv)();return{cannotGoBack:(0,a.Fl)((()=>l.value.stepIndex===c)),cannotGoForward:(0,a.Fl)((()=>l.value.stepIndex===u.value)),lastStepIndex:u,showAdvanced:(0,a.Fl)((()=>l.value.showAdvanced)),stepName:h,navigateDirect:e=>{s.includes(e)&&(d.has(e)&&(l.value.showAdvanced=!0),l.value.stepIndex=s.indexOf(e))},setStepName:n=>i(void 0,void 0,void 0,(function*(){l.value.stepIndex=s.indexOf(n),yield e.push({path:`/${h.value}`})})),navigateNext:()=>i(void 0,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"authors"===h.value&&l.value.stepIndex++,l.value.stepIndex<u.value&&(l.value.stepIndex++,yield e.push({path:`/${h.value}`}))})),navigatePrevious:()=>i(void 0,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"identifiers"===h.value&&l.value.stepIndex--,l.value.stepIndex>c&&(l.value.stepIndex--,yield e.push({path:`/${h.value}`}))})),setShowAdvanced:e=>{l.value.showAdvanced=e}}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,(()=>{var e=[];t.O=(n,r,a,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,a,o]=e[c],l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((e=>t.O[e](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var d=a();void 0!==d&&(n=d)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"b6f46cea",112:"c5f2b932",150:"72b5c224",181:"13de62ec",209:"f01261f2",221:"02759bc1",285:"ea98aa50",339:"1bf37261",375:"c517ed8f",417:"6bcd590e",464:"1de1880e",479:"7295e1b8",590:"af35fae1",675:"00abb501"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{112:"638a6268",150:"af379f82",181:"638a6268",221:"3770219e",285:"043adde8",339:"8b6523e8",375:"638a6268",417:"e3c90584",464:"bc57fa04",479:"638a6268",590:"663262ff",675:"bce20e13",736:"540f306d"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==n+o){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+o),l.src=r),e[r]=[a];var h=(n,t)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(t))),n)return n(t)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/PR552/"})(),(()=>{var e=(e,n,t,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=o,a.href=n,document.head.appendChild(a),a},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var a=t[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===n)return a}},r=r=>new Promise(((a,o)=>{var i=t.miniCssF(r),l=t.p+i;if(n(i,l))return a();e(r,l,a,o)})),a={143:0};t.f.miniCss=(e,n)=>{var t={112:1,150:1,181:1,221:1,285:1,339:1,375:1,417:1,464:1,479:1,590:1,675:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=r(e).then((()=>{a[e]=0}),(n=>{throw delete a[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((t,r)=>a=e[n]=[t,r]));r.push(a[2]=o);var i=t.p+t.u(n),l=new Error,s=r=>{if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var a,o,[i,l,s]=r,d=0;for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(s)var c=s(t);for(n&&n(r);d<i.length;d++)o=i[d],t.o(e,o)&&e[o]&&e[o][0](),e[i[d]]=0;return t.O(c)},r=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[736],(()=>t(7122)));r=t.O(r)})();