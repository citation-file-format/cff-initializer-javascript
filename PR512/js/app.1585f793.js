(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var r=t(8880),o=t(3525),a=t(3673);function i(e,n,t,r,o,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l={name:"App"};l.render=i;const s=l;var d=t(7083),c=t(9582);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(417)]).then(t.bind(t,9417))},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(417)]).then(t.bind(t,9417))},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(535)]).then(t.bind(t,7535)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(775)]).then(t.bind(t,2922))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(535)]).then(t.bind(t,7535)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(839)]).then(t.bind(t,7164))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(535)]).then(t.bind(t,7535)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(452)]).then(t.bind(t,7622))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(535)]).then(t.bind(t,7535)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(47)]).then(t.bind(t,8961))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(535)]).then(t.bind(t,7535)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(454)]).then(t.bind(t,1043))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(535)]).then(t.bind(t,7535)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(182)]).then(t.bind(t,2703))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(535)]).then(t.bind(t,7535)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(162)]).then(t.bind(t,5760))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(535)]).then(t.bind(t,7535)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(583)]).then(t.bind(t,717))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(535)]).then(t.bind(t,7535)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(558)]).then(t.bind(t,7321))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(535)]).then(t.bind(t,7535)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(688)]).then(t.bind(t,6160))}]},{path:"/404",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))}],u=h;var p=t(9999);const f=(0,d.BC)((function(){const e=c.r5,n=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:u,history:e("/PR512/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,p.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,r=e(s);return r.use(o.Z,n),{app:r,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F9E3A4"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(r.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>p});var r=t(1959),o=t(3673),a=t(9582),i=function(e,n,t,r){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function l(e){try{s(r["throw"](e))}catch(n){a(n)}}function s(e){e.done?t(e.value):o(e.value).then(i,l)}s((r=r.apply(e,n||[])).next())}))};const l=(0,r.iH)({showAdvanced:!1,stepIndex:0}),s=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],d=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),c=0,h=(0,o.Fl)((()=>l.value.showAdvanced?s.indexOf("finish-advanced"):s.indexOf("finish-minimum"))),u=(0,o.Fl)((()=>s[l.value.stepIndex]));function p(){const e=(0,a.tv)();return{cannotGoBack:(0,o.Fl)((()=>l.value.stepIndex===c)),cannotGoForward:(0,o.Fl)((()=>l.value.stepIndex===h.value)),lastStepIndex:h,showAdvanced:(0,o.Fl)((()=>l.value.showAdvanced)),stepName:u,navigateDirect:e=>{s.includes(e)&&(d.has(e)&&(l.value.showAdvanced=!0),l.value.stepIndex=s.indexOf(e))},setStepName:n=>i(this,void 0,void 0,(function*(){l.value.stepIndex=s.indexOf(n),yield e.push({path:`/${u.value}`})})),navigateNext:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"authors"===u.value&&l.value.stepIndex++,l.value.stepIndex<h.value&&(l.value.stepIndex++,yield e.push({path:`/${u.value}`}))})),navigatePrevious:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"identifiers"===u.value&&l.value.stepIndex--,l.value.stepIndex>c&&(l.value.stepIndex--,yield e.push({path:`/${u.value}`}))})),setShowAdvanced:e=>{l.value.showAdvanced=e}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(n,r,o,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](r[s])))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var d=o();void 0!==d&&(n=d)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{47:"dc70b63f",64:"09572856",162:"113d535e",182:"ea9ab32b",209:"f01261f2",417:"6bcd590e",452:"c9574e31",454:"48cba104",535:"d0ccc8bb",558:"bac639ef",583:"da26c3e8",688:"9b79dc98",775:"6f5d9da7",839:"95847bd0"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{47:"d618ec27",162:"e5bdf317",182:"638a6268",417:"e3c90584",452:"746b73b2",454:"638a6268",535:"6ad722be",558:"638a6268",583:"638a6268",688:"42b06072",736:"540f306d",775:"99837d61",839:"f15b1732"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var h=d[c];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==n+a){l=h;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+a),l.src=r),e[r]=[o];var u=(n,t)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/PR512/"})(),(()=>{var e=(e,n,t,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=r=>new Promise(((o,a)=>{var i=t.miniCssF(r),l=t.p+i;if(n(i,l))return o();e(r,l,o,a)})),o={143:0};t.f.miniCss=(e,n)=>{var t={47:1,162:1,182:1,417:1,452:1,454:1,535:1,558:1,583:1,688:1,775:1,839:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((()=>{o[e]=0}),(n=>{throw delete o[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((t,r)=>o=e[n]=[t,r]));r.push(o[2]=a);var i=t.p+t.u(n),l=new Error,s=r=>{if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var o,a,[i,l,s]=r,d=0;for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(s)var c=s(t);for(n&&n(r);d<i.length;d++)a=i[d],t.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0;return t.O(c)},r=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[736],(()=>t(7122)));r=t.O(r)})();