(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var r=t(8880),o=t(3525),a=t(3673);function i(e,n,t,r,o,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l={name:"App"};l.render=i;const s=l;var c=t(7083),d=t(9582);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(417)]).then(t.bind(t,9417))},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(417)]).then(t.bind(t,9417))},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(194)]).then(t.bind(t,6194)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(498)]).then(t.bind(t,9485))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(194)]).then(t.bind(t,6194)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(930)]).then(t.bind(t,6188))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(194)]).then(t.bind(t,6194)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(452)]).then(t.bind(t,6098))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(194)]).then(t.bind(t,6194)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(658)]).then(t.bind(t,2722))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(194)]).then(t.bind(t,6194)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(359)]).then(t.bind(t,335))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(194)]).then(t.bind(t,6194)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(259)]).then(t.bind(t,9557))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(194)]).then(t.bind(t,6194)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(705)]).then(t.bind(t,9053))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(194)]).then(t.bind(t,6194)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(583)]).then(t.bind(t,717))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(194)]).then(t.bind(t,6194)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(455)]).then(t.bind(t,9554))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(194)]).then(t.bind(t,6194)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(688)]).then(t.bind(t,6160))}]},{path:"/404",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))}],u=h;var p=t(9999);const f=(0,c.BC)((function(){const e=d.r5,n=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:u,history:e("/PR538/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,p.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,r=e(s);return r.use(o.Z,n),{app:r,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F9E3A4"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(r.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>p});var r=t(1959),o=t(3673),a=t(9582),i=function(e,n,t,r){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function l(e){try{s(r["throw"](e))}catch(n){a(n)}}function s(e){e.done?t(e.value):o(e.value).then(i,l)}s((r=r.apply(e,n||[])).next())}))};const l=(0,r.iH)({showAdvanced:!1,stepIndex:0}),s=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],c=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),d=0,h=(0,o.Fl)((()=>l.value.showAdvanced?s.indexOf("finish-advanced"):s.indexOf("finish-minimum"))),u=(0,o.Fl)((()=>s[l.value.stepIndex]));function p(){const e=(0,a.tv)();return{cannotGoBack:(0,o.Fl)((()=>l.value.stepIndex===d)),cannotGoForward:(0,o.Fl)((()=>l.value.stepIndex===h.value)),lastStepIndex:h,showAdvanced:(0,o.Fl)((()=>l.value.showAdvanced)),stepName:u,navigateDirect:e=>{s.includes(e)&&(c.has(e)&&(l.value.showAdvanced=!0),l.value.stepIndex=s.indexOf(e))},setStepName:n=>i(this,void 0,void 0,(function*(){l.value.stepIndex=s.indexOf(n),yield e.push({path:`/${u.value}`})})),navigateNext:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"authors"===u.value&&l.value.stepIndex++,l.value.stepIndex<h.value&&(l.value.stepIndex++,yield e.push({path:`/${u.value}`}))})),navigatePrevious:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"identifiers"===u.value&&l.value.stepIndex--,l.value.stepIndex>d&&(l.value.stepIndex--,yield e.push({path:`/${u.value}`}))})),setShowAdvanced:e=>{l.value.showAdvanced=e}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(n,r,o,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](r[s])))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"f217da15",194:"13bc2c22",209:"f01261f2",259:"b47ee9c1",359:"243e0c6b",417:"6bcd590e",452:"38b78b61",455:"d7a34113",498:"ce66dc52",583:"9b9b08fb",658:"83973089",688:"0a90bc24",705:"f42863a7",930:"2281412a"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{194:"fe40128f",259:"638a6268",359:"638a6268",417:"e3c90584",452:"746b73b2",455:"638a6268",498:"14566822",583:"638a6268",658:"34c465ea",688:"42b06072",705:"58dbe515",736:"540f306d",930:"f5544ed1"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var h=c[d];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==n+a){l=h;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+a),l.src=r),e[r]=[o];var u=(n,t)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/PR538/"})(),(()=>{var e=(e,n,t,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=r=>new Promise(((o,a)=>{var i=t.miniCssF(r),l=t.p+i;if(n(i,l))return o();e(r,l,o,a)})),o={143:0};t.f.miniCss=(e,n)=>{var t={194:1,259:1,359:1,417:1,452:1,455:1,498:1,583:1,658:1,688:1,705:1,930:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((()=>{o[e]=0}),(n=>{throw delete o[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((t,r)=>o=e[n]=[t,r]));r.push(o[2]=a);var i=t.p+t.u(n),l=new Error,s=r=>{if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var o,a,[i,l,s]=r,c=0;for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(s)var d=s(t);for(n&&n(r);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return t.O(d)},r=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[736],(()=>t(7122)));r=t.O(r)})();