(()=>{"use strict";var e={3666:(e,t,r)=>{r(7280),r(5363);var n=r(8880),o=r(4345),a=r(3673);function i(e,t,r,n,o,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l={name:"App"};l.render=i;const c=l;var s=r(7083),d=r(9582);const u=[{path:"/",component:()=>Promise.all([r.e(736),r.e(244)]).then(r.bind(r,9244)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(566)]).then(r.bind(r,5566))}]},{path:"/1",component:()=>Promise.all([r.e(736),r.e(925)]).then(r.bind(r,6925)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(626)]).then(r.bind(r,1626))}]},{path:"/2",component:()=>Promise.all([r.e(736),r.e(925)]).then(r.bind(r,6925)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(35)]).then(r.bind(r,9035))}]},{path:"/finish",component:()=>Promise.all([r.e(736),r.e(244)]).then(r.bind(r,9244)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(491)]).then(r.bind(r,9491))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(586)]).then(r.bind(r,3586))}],f=u,p=(0,s.BC)((function(){const e=d.PO,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/cffinit/")});return t}));async function h(e,t){const r="function"===typeof p?await p({}):p,n=e(c);return n.use(o.Z,t),{app:n,router:r}}const m={config:{brand:{primary:"#65686b",secondary:"#bfc0c7",accent:"#9C27B0",dark:"#1d1d1d",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}}};async function v({app:e,router:t}){e.use(t),e.mount("#q-app")}h(n.ri,m).then(v)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],l=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{35:"35fc72ff",244:"0d69c4a8",491:"2513cd7e",566:"89877f94",586:"f356c3c8",626:"960f84b5",925:"2baf95a9"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{491:"40fff9b6",566:"84cb49f4",736:"540f306d",925:"9bec3afc"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="cffinitv2:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var f=(t,r)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),c&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/cffinit/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={491:1,566:1,925:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,c=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,c]=n,s=0;for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(c)var d=c(r);for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return r.O(d)},n=self["webpackChunkcffinitv2"]=self["webpackChunkcffinitv2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(3666)));n=r.O(n)})();