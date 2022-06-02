(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var r=t(8880),a=t(3525),o=t(3673);function i(e,n,t,r,a,i){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(l)}const l={name:"App"};l.render=i;const s=l;var c=t(9999),d=t(9582),h=t(7083);const u=[{path:"/",component:()=>Promise.all([t.e(736),t.e(417)]).then(t.bind(t,9417))},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(417)]).then(t.bind(t,9417))},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(616)]).then(t.bind(t,8616)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(150)]).then(t.bind(t,1614))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(616)]).then(t.bind(t,8616)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(321)]).then(t.bind(t,3176))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(616)]).then(t.bind(t,8616)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(676)]).then(t.bind(t,3421))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(616)]).then(t.bind(t,8616)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(222)]).then(t.bind(t,8735))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(616)]).then(t.bind(t,8616)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(696)]).then(t.bind(t,9393))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(616)]).then(t.bind(t,8616)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(906)]).then(t.bind(t,5790))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(616)]).then(t.bind(t,8616)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(77)]).then(t.bind(t,8841))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(616)]).then(t.bind(t,8616)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(172)]).then(t.bind(t,9081))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(616)]).then(t.bind(t,8616)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(556)]).then(t.bind(t,9318))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(616)]).then(t.bind(t,8616)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(884)]).then(t.bind(t,9601))}]},{path:"/404",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))}],p=u,f=(0,h.BC)((function(){const e=d.r5,n=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:p,history:e("/PR541/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,c.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,r=e(s);return r.use(a.Z,n),{app:r,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F9E3A4"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(r.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>p});var r=t(1959),a=t(3673),o=t(9582),i=function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{s(r.next(e))}catch(n){o(n)}}function l(e){try{s(r["throw"](e))}catch(n){o(n)}}function s(e){e.done?t(e.value):a(e.value).then(i,l)}s((r=r.apply(e,n||[])).next())}))};const l=(0,r.iH)({showAdvanced:!1,stepIndex:0}),s=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],c=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),d=0,h=(0,a.Fl)((()=>l.value.showAdvanced?s.indexOf("finish-advanced"):s.indexOf("finish-minimum"))),u=(0,a.Fl)((()=>s[l.value.stepIndex]));function p(){const e=(0,o.tv)();return{cannotGoBack:(0,a.Fl)((()=>l.value.stepIndex===d)),cannotGoForward:(0,a.Fl)((()=>l.value.stepIndex===h.value)),lastStepIndex:h,showAdvanced:(0,a.Fl)((()=>l.value.showAdvanced)),stepName:u,navigateDirect:e=>{s.includes(e)&&(c.has(e)&&(l.value.showAdvanced=!0),l.value.stepIndex=s.indexOf(e))},setStepName:n=>i(this,void 0,void 0,(function*(){l.value.stepIndex=s.indexOf(n),yield e.push({path:`/${u.value}`})})),navigateNext:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"authors"===u.value&&l.value.stepIndex++,l.value.stepIndex<h.value&&(l.value.stepIndex++,yield e.push({path:`/${u.value}`}))})),navigatePrevious:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"identifiers"===u.value&&l.value.stepIndex--,l.value.stepIndex>d&&(l.value.stepIndex--,yield e.push({path:`/${u.value}`}))})),setShowAdvanced:e=>{l.value.showAdvanced=e}}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,(()=>{var e=[];t.O=(n,r,a,o)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((e=>t.O[e](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(d--,1);var c=a();void 0!==c&&(n=c)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"9a9d691a",77:"36d4462c",150:"6153cb35",172:"1712b8e2",209:"f01261f2",222:"3c776208",321:"45fa2954",417:"6bcd590e",556:"4c104c55",616:"16d512f0",676:"6b8cf59d",696:"e659b4a2",884:"ff0d1842",906:"10161a3b"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{77:"6d980a11",150:"ee47620b",172:"9c2c9059",222:"53463d9b",321:"a2d42bf5",417:"e3c90584",556:"9c2c9059",616:"ba817f1b",676:"d3bbf62a",696:"9c2c9059",736:"540f306d",884:"99ad568d",906:"9c2c9059"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var h=c[d];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==n+o){l=h;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+o),l.src=r),e[r]=[a];var u=(n,t)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(t))),n)return n(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/PR541/"})(),(()=>{var e=(e,n,t,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=o,a.href=n,document.head.appendChild(a),a},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var a=t[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===n)return a}},r=r=>new Promise(((a,o)=>{var i=t.miniCssF(r),l=t.p+i;if(n(i,l))return a();e(r,l,a,o)})),a={143:0};t.f.miniCss=(e,n)=>{var t={77:1,150:1,172:1,222:1,321:1,417:1,556:1,616:1,676:1,696:1,884:1,906:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=r(e).then((()=>{a[e]=0}),(n=>{throw delete a[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((t,r)=>a=e[n]=[t,r]));r.push(a[2]=o);var i=t.p+t.u(n),l=new Error,s=r=>{if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var a,o,[i,l,s]=r,c=0;for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(s)var d=s(t);for(n&&n(r);c<i.length;c++)o=i[c],t.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0;return t.O(d)},r=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[736],(()=>t(7122)));r=t.O(r)})();