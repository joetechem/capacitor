/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='app']");if(s){publicPath=s.getAttribute('data-path');}
(function(publicPath){var __assign=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n};Context.activeRouter=function(){function n(){return{location:{pathname:Context.window.location.pathname,search:Context.window.location.search}}}function t(){i={}}function r(){for(var n=c,t=0;t<n.length;t++)(0,n[t])()}var o={},e={},i={},c=[];return{set:function(n){o=__assign({},o,n),t(),r()},get:function(t){return 0===Object.keys(o).length?n():t?o[t]:o},subscribe:function(n){if("function"!=typeof n)throw new Error("Expected listener to be a function.");var t=!0;return c.push(n),function(){if(t){t=!1;var r=c.indexOf(n);c.splice(r,1)}}},addToGroup:function(n,t){t in e||(e[t]=[]),e[t].push(n)},removeFromGroups:function(n){for(var t in e){var r=e[t];e[t]=r.filter(function(t){return t!==n})}},didGroupAlreadyMatch:function(n){return!!n&&!0===i[n]},setGroupMatched:function(n){i[n]=!0}}}();
})(publicPath);
(function(n,t,e,o,i){"use strict";function c(n,t,e,o){if(t.n){e.$defaultHolder||n.t(e,e.$defaultHolder=n.e(""),o[0]);let t,c,f,l=0;for(;l<o.length;l++){var i=o[l];1===n.o(i)&&null!=(t=n.i(i,"slot"))?(f=f||{})[t]?f[t].push(i):f[t]=[i]:c?c.push(i):c=[i]}e.c={f:c,l:f}}}function f(n,t,e){const o=new WeakMap,i={r:t.documentElement,u:t.head,s:t.body,o:n=>n.nodeType,a:n=>t.createElement(n),d:(n,e)=>t.createElementNS(n,e),m:n=>t.createTextNode(n),e:n=>t.createComment(n),t:(n,t,e)=>n.insertBefore(t,e),v:(n,t)=>n.removeChild(t),p:(n,t)=>n.appendChild(t),b:n=>n.childNodes,h:n=>n.parentNode,y:n=>n.nextSibling,g:n=>en(n.tagName),w:n=>n.textContent,C:(n,t)=>n.textContent=t,i:(n,t)=>n.getAttribute(t),N:(n,t,e)=>n.setAttribute(t,e),j:(n,t,e,o)=>n.setAttributeNS(t,e,o),T:(n,t)=>n.removeAttribute(t),O:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.k(e):"body"===o?i.s:"document"===o?t:"window"===o?n:e,x:(n,t,e,c,f,l,r,u)=>{const s=t;let a=n,d=o.get(n);if(d&&d[s]&&d[s](),"string"==typeof l?a=i.O(n,l):"object"==typeof l?a=l:(u=t.split(":")).length>1&&(a=i.O(n,u[0]),t=u[1]),!a)return;let m=e;(u=t.split(".")).length>1&&(t=u[0],m=(n=>{n.keyCode===Y[u[1]]&&e(n)})),r=i.M?{capture:!!c,passive:!!f}:!!c,a.addEventListener(t,m,r),d||o.set(n,d={}),d[s]=(()=>{a&&a.removeEventListener(t,m,r),d[s]=null})},A:(n,t)=>{const e=o.get(n);e&&(t?e[t]&&e[t]():(Object.keys(e).forEach(n=>{e[n]&&e[n]()}),o.delete(n)))}};return i.k=((n,t)=>(t=i.h(n))&&11===i.o(t)?t.host:t),i}function l(n,t,e,o,i){const c=11===e.S.nodeType&&e.S.host?e.S.host:e.S,f=t&&t.P||V,l=e.P||V;for(i in f)l&&null!=l[i]||null==f[i]||r(n,c,i,f[i],void 0,o);for(i in l)i in f&&l[i]===("value"===i||"checked"===i?c[i]:f[i])||r(n,c,i,f[i],l[i],o)}function r(n,t,e,o,i,c,f,l){if("class"!==e||c)if("style"===e){o=o||V,i=i||V;for(f in o)i[f]||(t.style[f]="");for(f in i)i[f]!==o[f]&&(t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.B(t);o&&o.L&&e in o.L?u(t,e,i):"ref"!==e&&(u(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(f=e!==(e=e.replace(/^xlink\:?/,"")),1!==fn[e]||i&&"false"!==i?"function"!=typeof i&&(f?t.setAttributeNS(ln,en(e),i):t.setAttribute(e,i)):f?t.removeAttributeNS(ln,en(e)):t.removeAttribute(e));else e=en(e.substring(2)),i?o||n.R.x(t,e,i):n.R.A(t,e);else if(o!==i){const n=null==o||""===o?X:o.trim().split(/\s+/),e=null==i||""===i?X:i.trim().split(/\s+/);let c=null==t.className||""===t.className?X:t.className.trim().split(/\s+/);for(f=0,l=n.length;f<l;f++)-1===e.indexOf(n[f])&&(c=c.filter(t=>t!==n[f]));for(f=0,l=e.length;f<l;f++)-1===n.indexOf(e[f])&&(c=[...c,e[f]]);t.className=c.join(" ")}}function u(n,t,e){try{n[t]=e}catch(n){}}function s(n,t){function e(o,i,c){let f=0;if("function"==typeof o.q&&(o=o.q(Object.assign({},o.P,{D:o.H}))),"slot"===o.q&&!d){if(a){m&&t.N(i,m+"-slot","");let e,c=o.P&&o.P.name;if(e=nn(c)?a.l&&a.l[c]:a.f,nn(e)){for(n.I=!0;f<e.length;f++)t.p(i,t.v(t.h(e[f]),e[f]));n.I=!1}}return null}if(nn(o.z))o.S=t.m(o.z);else{const i=o.S=rn||"svg"===o.q?t.d("http://www.w3.org/2000/svg",o.q):t.a(o.q);rn="svg"===o.q||"foreignObject"!==o.q&&rn,l(n,null,o,rn),null!==m&&i.F!==m&&t.N(i,i.F=m,"");const c=o.H;if(c){let n;for(;f<c.length;++f)(n=e(c[f],i,f))&&t.p(i,n)}}return o.S}function o(n,o,i,c,f){const l=n.$defaultHolder&&t.h(n.$defaultHolder)||n;let r;for(;c<=f;++c){var u=i[c];nn(u)&&(r=nn(u.z)?t.m(u.z):e(u,n,c),nn(r)&&(u.S=r,t.t(l,r,o)))}}function i(n,e,o,i){for(;o<=i;++o)nn(e[o])&&t.v(n,e[o].S)}function c(n,c,l){let s,a,d,m,v=0,p=0,b=c.length-1,h=c[0],y=c[b],$=l.length-1,g=l[0],w=l[$];for(;v<=b&&p<=$;)null==h?h=c[++v]:null==y?y=c[--b]:null==g?g=l[++p]:null==w?w=l[--$]:f(h,g)?(u(h,g),h=c[++v],g=l[++p]):f(y,w)?(u(y,w),y=c[--b],w=l[--$]):f(h,w)?(u(h,w),t.t(n,h.S,t.y(y.S)),h=c[++v],w=l[--$]):f(y,g)?(u(y,g),t.t(n,y.S,h.S),y=c[--b],g=l[++p]):(tn(s)&&(s=r(c,v,b)),a=s[g.W],tn(a)?(m=e(g,n,p),g=l[++p]):((d=c[a]).q!==g.q?m=e(g,n,a):(u(d,g),c[a]=void 0,m=d.S),g=l[++p]),m&&t.t(n,m,h.S));v>b?o(n,null==l[$+1]?null:l[$+1].S,l,p,$):p>$&&i(n,c,v,b)}function f(n,t){return n.q===t.q&&n.W===t.W}function r(n,t,e){let o,i,c,f={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.W)&&(f.Z=o);return f}function u(e,f){const r=f.S=e.S,u=e.H,s=f.H;if(rn=f.S&&null!=f.S.parentElement&&void 0!==f.S._,rn="svg"===f.q||"foreignObject"!==f.q&&rn,tn(f.z))"slot"!==f.q&&l(n,e,f,rn),nn(u)&&nn(s)?c(r,u,s):nn(s)?(nn(e.z)&&t.C(r,""),o(r,null,s,0,s.length-1)):nn(u)&&i(r,u,0,u.length-1);else if(r.c&&r.c.f){let n=r.c.f[0].parentElement;t.C(n,f.z),r.c.f=[n.childNodes[0]]}else e.z!==f.z&&t.C(r,f.z)}let s,a,d,m;return function n(e,o,i,c,f,l){return s=i,a=c,m=2===f||1===f&&!t.G?"data-"+t.g(e.S):null,s||m&&t.N(e.S,m+"-host",""),u(e,o),o}}function a(n,t){n&&(n.J&&n.J(t?null:n.S),n.H&&n.H.forEach(n=>{a(n,t)}))}function d(n,t,e){for(var o,i=!1,c=!1,f=arguments.length;f-- >2;)sn.push(arguments[f]);for(;sn.length;)if((e=sn.pop())&&void 0!==e.pop)for(f=e.length;f--;)sn.push(e[f]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].z+=e:void 0===o?o=[c?m(e):e]:o.push(c?m(e):e),i=c;const l=new un;if(l.q=n,l.H=o,t&&(l.P=t,l.W=t.K,l.J=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(f in t.class)t.class[f]&&sn.push(f);t.class=sn.join(" "),sn.length=0}return l}function m(n){const t=new un;return t.z=n,t}function v(n,t){var e,o,i,c,f,l,r=t.querySelectorAll(`[${Q}]`),u=r.length;if(t.Q=u>0)for(c=0;c<u;c++)for(e=r[c],o=n.i(e,Q),(i=e.U=new un).q=n.g(i.S=e),f=0,l=e.childNodes.length;f<l;f++)p(n,e.childNodes[f],i,o,!0)}function p(n,t,e,o,i){var c,f,l,r,u=n.o(t);if(i&&1===u){(f=n.i(t,U))&&(l=f.split("."))[0]===o&&((r=new un).q=n.g(r.S=t),e.H||(e.H=[]),e.H[l[1]]=r,e=r,i=""!==l[2]);for(var s=0;s<t.childNodes.length;s++)p(n,t.childNodes[s],e,o,i)}else 3===u&&(c=t.previousSibling)&&8===n.o(c)&&"s"===(l=n.w(c).split("."))[0]&&l[1]===o&&((r=m(n.w(t))).S=t,e.H||(e.H=[]),e.H[l[2]]=r)}function b(n,t,e,o){function i(){for(;r.length>0;)r.shift()();e=!1}function c(e){for(e=t(),i();u.length>0&&t()-e<40;)u.shift()();(o=u.length>0)&&n(f)}function f(e){for(i(),e=4+t();u.length>0&&t()<e;)u.shift()();(o=u.length>0)&&n(c)}const l=Promise.resolve(),r=[],u=[];return{add:(t,f)=>{3===f?(r.push(t),e||(e=!0,l.then(i))):(u.push(t),o||(o=!0,n(c)))}}}function h(n,t,e){const o={V:n[0],L:{mode:{X:1},color:{X:1,Y:"color"}}};return o.nn=n[1],$(o,n[3],e),o.tn=n[4],o.n=n[5],n[6]&&(o.en=n[6].map(y)),o.on=n[7],t[o.V]=o}function y(n){return{in:n[0],cn:n[1],fn:!!n[2],ln:!!n[3],rn:!!n[4]}}function $(n,t,e){if(t){n.L=n.L||{};for(var o=0;o<t.length;o++){var i=t[o];n.L[i[0]]={X:i[1],Y:i[2]?1===e?en(i[0]):on(i[0]):0,un:i[3],sn:i[4]}}}}function g(n,t,e,o){const i=n[e[0]];i.an=t[e[0]],$(i,e[1],o),i.dn=e[2],e[3]&&(i.mn=e[3].map(w)),i.vn=e[4],i.pn=e[5]}function w(n){return{in:n[0],cn:n[1]||n[0],bn:!n[2],hn:!n[3],yn:!n[4]}}function C(n,t){if(nn(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function N(n,t,e,o,i,c){if(o!==i&&n){e=en(e);for(c in n)if(n[c].Y===e){t[c]=C(n[c].un,i);break}}}function j(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].X;1===i||2===i?M(e,o,function n(){return(this.$n=this.$n||{})[o]},function t(e){x(n,this,o,e)}):6===i&&E(e,o,cn)})}function T(n,t,e,o){o.gn=e,e.$n=e.$n||{},t.L&&Object.keys(t.L).forEach(i=>{O(n,t,e,o,i)})}function O(n,t,e,o,i){const c=t.L[i],f=c.X;if(1===f||5===f||2===f){if(5!==f){if(c.Y&&(void 0===e.$n[i]||""===e.$n[i])){const n=e.getAttribute(c.Y);null!=n&&(e.$n[i]=C(c.un,n))}e.hasOwnProperty(i)&&(void 0===e.$n[i]&&(e.$n[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.$n[i]&&(e.$n[i]=o[i]),M(o,i,function l(){const n=this.gn;return n&&n.$n&&n.$n[i]},function r(t){const e=this.gn;e&&1!==f&&x(n,e,i,t)}),k(t.pn,an,e,o,i)}else if(7===f)E(o,i,e);else if(3===f){var u=n.wn(c.sn);u&&E(o,i,u.Cn&&u.Cn(e)||u)}}function k(n,t,e,o,i){const c=n&&n.find(n=>n[0]===i);c&&(e.$n[t+i]=o[c[1]].bind(o))}function x(n,t,e,o){const i=t.$n=t.$n||{},c=i[e];o!==c&&(i[e]=o,i[an+e]&&i[an+e](o,c),t.Nn&&!n.jn&&D(n,t))}function E(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function M(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function A(n,t,e){return{create:P(n,t,e,"create"),componentOnReady:P(n,t,e,"componentOnReady")}}function S(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.s.querySelector(e)),i||(i=t[e]=n.a(e),n.p(n.s,i)),i.componentOnReady(o)})}function P(n,t,e,o){return function(){const i=arguments;return S(n,t,e).then(n=>n[o].apply(n,i))}}function B(n,t,e){try{e=n.B(t),t.Nn=new e.an,T(n,e,t,t.Nn)}catch(e){t.Nn={},n.Tn(e,7,t,!0)}}function L(n,t,e){if(t.Nn&&!t.On&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.Q=!0;try{a(t.U),t.kn&&(t.kn.forEach(n=>n(t)),t.kn=null),t.Nn.componentDidLoad&&t.Nn.componentDidLoad()}catch(e){n.Tn(e,4,t)}t.classList.add(e),R(t)}}function R(n,t,e){n.xn&&((e=n.xn.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.xn.$initLoad()),n.xn=null)}function q(n,t,e,o){const i=t.Nn,c=e.dn;if(i.render||i.hostData||c){n.jn=!0;const c=i.render&&i.render();let f;f=i.hostData&&i.hostData(),n.jn=!1;const l=t.U||new un;l.S=t,t.U=n.render(l,d(null,f,c),o,t.c,e.tn)}n.En(e,i.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function D(n,t){t.Mn||(t.Mn=!0,n.An.add(()=>{t.Mn=!1,H(n,t)}))}function H(n,t){if(!t.On){const e=!t.Nn;let o;if(e){const e=t.xn;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{H(n,t)});B(n,t);try{t.Nn.componentWillLoad&&(o=t.Nn.componentWillLoad())}catch(e){n.Tn(e,3,t)}}o&&o.then?o.then(()=>I(n,t,e)):I(n,t,e)}}function I(n,t,e){try{q(n,t,n.B(t),!e)}catch(e){n.Tn(e,8,t,!0)}try{e&&t.$initLoad()}catch(e){n.Tn(e,6,t,!0)}}function z(n,t,e){e.$connected||(e.$connected=!0,e.On=null,F(n,e),n.An.add(()=>{n.Sn(t,e),n.Pn(t,e,()=>D(n,e))},3))}function F(n,t,e){for(e=t;e=n.R.k(e);)if(n.Bn(e)){e.Q||(t.xn=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function W(n,t){!n.I&&Z(n.R,t)&&(t.On=!0,R(t),a(t.U,!0),n.R.A(t),t.c&&(t.c=t.c.f=t.c.l=null),t.Nn&&(t.Nn.componentDidUnload&&t.Nn.componentDidUnload(),t.Nn=t.Nn.gn=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.Ln=t.$n=t.U=t.xn=t.Q=t.Mn=t.Rn=null)}function Z(n,t){for(;t;){if(!n.h(t))return 9!==n.o(t);t=n.h(t)}}function _(n,t,e,o){e.connectedCallback=function(){z(n,t,this)},e.attributeChangedCallback=function(n,e,o){N(t.L,this,n,e,o)},e.disconnectedCallback=function(){W(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),G(this,n),t},e.$initLoad=function(){L(n,this,o)},e.qn=function(){D(n,this)},j(n,t.L,e)}function G(n,t){n.On||(n.Q?t(n):(n.kn=n.kn||[]).push(t))}function J(n,t){return n&&1===t.tn}function K(n,t){return 2===t.tn||1===t.tn&&!n}const Q="data-ssrv",U="data-ssrc",V={},X=[],Y={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},nn=n=>void 0!==n&&null!==n,tn=n=>void 0===n||null===n,en=n=>n.toLowerCase(),on=n=>n.replace(/([A-Z])/g,n=>" "+en(n[0])).trim().replace(/ /g,"-"),cn=()=>{},fn={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},ln="http://www.w3.org/1999/xlink";let rn=!1;class un{}const sn=[],an="$$dc",dn=n[o]=n[o]||{},mn=function vn(t,e,o,i,l,r){function u(n,t,e,o,i){function c(){clearTimeout(o),i.onerror=i.onload=null,N.v(N.h(i),i),w[e]=!1}e=l+t+(K(N.G,n)?".sc":"")+".js",w[e]||(w[e]=!0,(i=N.a("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(c,12e4),i.onerror=i.onload=c,N.p(N.u,i))}const a={html:{}},m={},p={},y={},$={},w={},C={},N=f(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=l;const j=o.Dn=o.Dn||{},T={Sn:function O(n,e){e.mode||(e.mode=N.i(e,"mode")||t.mode),N.i(e,Q)||J(N.G,n)||c(N,n,e,e.childNodes),N.G||1!==n.tn||(e.shadowRoot=e)},R:N,Hn:function k(n,t){const e=n.V;if(!j[e]){j[e]=!0,_(T,n,t.prototype,r);{const e=[];for(var i in n.L)n.L[i].Y&&e.push(n.L[i].Y);t.observedAttributes=e}o.customElements.define(e,t)}},In:t.emit,B:n=>a[N.g(n)],wn:n=>t[n],isClient:!0,Bn:n=>!(!j[N.g(n)]&&!T.B(n)),Pn:function x(n,t,e,o){o=(n.nn[t.mode]||n.nn)[0],y[o]?e():((p[o]=p[o]||[]).push(e),u(n,o))},Tn:(n,t,e)=>void 0,zn:n=>A(N,C,n),An:b(t=>n.requestAnimationFrame(t),()=>o.performance.now()),Fn:n=>(n||[]).map(n=>h(n,a))};T.render=s(T,N);const E=N.r;return E.$rendered=!0,E.$activeLoading=[],E.$initLoad=(()=>E.Q=!0),v(N,E),e.loadComponents=function n(e,o){const i=arguments;o(m,d,t,l);for(var c=2;c<i.length;c++)g(a,m,i[c]);var f=p[e];if(f){for(c=0;c<f.length;c++)f[c]();p[e]=null}y[e]=!0},e.loadStyles=function n(){const t=arguments;let e;for(var o=0;o<t.length;o+=2)$[t[o]]=e=N.a("template"),e.innerHTML=`<style>${t[o+1]}</style>`,e.id=`tmp-${t[o]}`,N.p(N.u,e)},T.En=((n,t,e)=>{{const o=$[n.V+"_"+t]||$[n.V];if(o){let t=N.u;if(N.G)if(1===n.tn)t=e.shadowRoot;else for(;e=N.h(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}const i=t.Wn=t.Wn||{};if(!i[o.id]){{const n=o.content.cloneNode(!0),e=t.querySelector("[data-visibility]");N.t(t,n,e&&e.nextSibling||t.Zn)}i[o.id]=!0}}}}),T}(e,dn,n,t,i,hydratedCssClass);mn.Fn(dn.components).forEach(n=>mn.Hn(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"App","hydrated","build/app/");