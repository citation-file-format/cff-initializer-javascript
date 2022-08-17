(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var r=t(8880),a=t(3525),o=t(3673);function i(e,n,t,r,a,i){const d=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(d)}const d={name:"App"};d.render=i;const l=d;var s=t(9999),c=t(9582),p=t(7083);const u=[{path:"/",component:()=>Promise.all([t.e(736),t.e(499)]).then(t.bind(t,3499))},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(499)]).then(t.bind(t,3499))},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(405)]).then(t.bind(t,6405)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(138)]).then(t.bind(t,6034))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(405)]).then(t.bind(t,6405)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(384)]).then(t.bind(t,8537))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(405)]).then(t.bind(t,6405)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(386)]).then(t.bind(t,2166))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(405)]).then(t.bind(t,6405)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(177)]).then(t.bind(t,3907))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(405)]).then(t.bind(t,6405)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(745)]).then(t.bind(t,580))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(405)]).then(t.bind(t,6405)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(299)]).then(t.bind(t,3382))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(405)]).then(t.bind(t,6405)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(351)]).then(t.bind(t,663))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(405)]).then(t.bind(t,6405)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(545)]).then(t.bind(t,3343))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(405)]).then(t.bind(t,6405)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(645)]).then(t.bind(t,1602))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(405)]).then(t.bind(t,6405)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(688)]).then(t.bind(t,3331))}]},{path:"/404",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))}],h=u,f=(0,p.BC)((()=>{const e=c.r5,n=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("/PR627/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,s.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,r=e(l);return r.use(a.Z,n),{app:r,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",prose:"#333",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F9E3A4"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(r.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>h});var r=t(1959),a=t(3673),o=t(9582),i=function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{l(r.next(e))}catch(n){o(n)}}function d(e){try{l(r["throw"](e))}catch(n){o(n)}}function l(e){e.done?t(e.value):a(e.value).then(i,d)}l((r=r.apply(e,n||[])).next())}))};const d=(0,r.iH)({showAdvanced:!1,stepIndex:0}),l=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],s=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),c=0,p=(0,a.Fl)((()=>d.value.showAdvanced?l.indexOf("finish-advanced"):l.indexOf("finish-minimum"))),u=(0,a.Fl)((()=>l[d.value.stepIndex])),h=()=>{const e=(0,o.tv)();return{cannotGoBack:(0,a.Fl)((()=>d.value.stepIndex===c)),cannotGoForward:(0,a.Fl)((()=>d.value.stepIndex===p.value)),lastStepIndex:p,showAdvanced:(0,a.Fl)((()=>d.value.showAdvanced)),stepName:u,navigateDirect:e=>{l.includes(e)&&(s.has(e)&&(d.value.showAdvanced=!0),d.value.stepIndex=l.indexOf(e))},setStepName:n=>i(void 0,void 0,void 0,(function*(){d.value.stepIndex=l.indexOf(n),yield e.push({path:`/${u.value}`})})),navigateNext:()=>i(void 0,void 0,void 0,(function*(){!0===d.value.showAdvanced&&"authors"===u.value&&d.value.stepIndex++,d.value.stepIndex<p.value&&(d.value.stepIndex++,yield e.push({path:`/${u.value}`}))})),navigatePrevious:()=>i(void 0,void 0,void 0,(function*(){!0===d.value.showAdvanced&&"identifiers"===u.value&&d.value.stepIndex--,d.value.stepIndex>c&&(d.value.stepIndex--,yield e.push({path:`/${u.value}`}))})),setShowAdvanced:e=>{d.value.showAdvanced=e}}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,(()=>{var e=[];t.O=(n,r,a,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,a,o]=e[c],d=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(t.O).every((e=>t.O[e](r[l])))?r.splice(l--,1):(d=!1,o<i&&(i=o));if(d){e.splice(c--,1);var s=a();void 0!==s&&(n=s)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"37489baf",138:"facbbdb4",177:"b57439e1",209:"f01261f2",299:"9d3df746",351:"5270c01c",384:"bb913efc",386:"d581ab7b",405:"f4ddbb8e",499:"ce9e2a3a",545:"27fdbae3",645:"41f83a70",688:"dae1bea3",745:"a04d8add"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{138:"64e70ce7",177:"55312749",299:"f11b6b21",351:"3356aca9",384:"cbe4e5d2",386:"ea3911b9",405:"b7a6209d",499:"33c8ae6b",545:"f11b6b21",645:"f11b6b21",688:"a58b45fb",736:"540f306d",745:"f11b6b21"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var d,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var p=s[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==n+o){d=p;break}}d||(l=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,t.nc&&d.setAttribute("nonce",t.nc),d.setAttribute("data-webpack",n+o),d.src=r),e[r]=[a];var u=(n,t)=>{d.onerror=d.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach((e=>e(t))),n)return n(t)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),l&&document.head.appendChild(d)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/PR627/"})(),(()=>{var e=(e,n,t,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=d,a.parentNode.removeChild(a),r(l)}};return a.onerror=a.onload=o,a.href=n,document.head.appendChild(a),a},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var a=t[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===n)return a}},r=r=>new Promise(((a,o)=>{var i=t.miniCssF(r),d=t.p+i;if(n(i,d))return a();e(r,d,a,o)})),a={143:0};t.f.miniCss=(e,n)=>{var t={138:1,177:1,299:1,351:1,384:1,386:1,405:1,499:1,545:1,645:1,688:1,745:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=r(e).then((()=>{a[e]=0}),(n=>{throw delete a[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((t,r)=>a=e[n]=[t,r]));r.push(a[2]=o);var i=t.p+t.u(n),d=new Error,l=r=>{if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;d.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,a[1](d)}};t.l(i,l,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var a,o,[i,d,l]=r,s=0;for(a in d)t.o(d,a)&&(t.m[a]=d[a]);if(l)var c=l(t);for(n&&n(r);s<i.length;s++)o=i[s],t.o(e,o)&&e[o]&&e[o][0](),e[i[s]]=0;return t.O(c)},r=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[736],(()=>t(7122)));r=t.O(r)})();