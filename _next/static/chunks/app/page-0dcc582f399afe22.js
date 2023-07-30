(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6887:function(e,t,r){Promise.resolve().then(r.bind(r,2735))},8938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let a=r(1801);r(5722);let o=a._(r(3860));function n(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){let r=o.default,a={loading:e=>{let{error:t,isLoading:r,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e),Object.assign(a,t);let s=a.loader;return r({...a,loader:()=>null!=s?s().then(n):Promise.resolve(n(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return o},NoSSR:function(){return n}}),r(1801),r(5722);let a=r(1238);function o(){let e=Error(a.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=a.NEXT_DYNAMIC_NO_SSR_CODE,e}function n(e){let{children:t}=e;return t}},3860:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let a=r(1801),o=a._(r(5722)),n=r(938),s=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function r(e){let r=t.loading,a=o.default.createElement(r,{isLoading:!0,pastDelay:!0,error:null}),s=t.ssr?o.default.Fragment:n.NoSSR,i=t.lazy;return o.default.createElement(o.default.Suspense,{fallback:a},o.default.createElement(s,null,o.default.createElement(i,e)))}return t.lazy=o.default.lazy(t.loader),r.displayName="LoadableComponent",r}},1558:function(e,t,r){"use strict";var a=r(4953),o=r(475),n=r.n(o);t.Z=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:n().card,children:t})}},2735:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var a=r(4953),o=r(9462),n=r(8938),s=r.n(n),i=r(1558),l=r(7946),d=r.n(l),c=()=>(0,a.jsx)("div",{className:d().center,children:(0,a.jsx)("div",{className:d().loader})}),u=()=>(0,a.jsx)(i.Z,{children:(0,a.jsx)(c,{})}),p=r(5722);class f extends p.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("Uncaught error:",e,t)}render(){return this.state.hasError?(0,a.jsx)("h1",{children:"Sorry.. there was an error"}):this.props.children}constructor(...e){super(...e),this.state={hasError:!1}}}var m=r(7857),y=r.n(m),g=r(1166),h=r.n(g),b=e=>{let{text:t}=e;return(0,a.jsx)("header",{className:h().AppHeader,children:t})};let x=s()(()=>Promise.all([r.e(438),r.e(953)]).then(r.bind(r,7953)),{loadableGenerated:{webpack:()=>[7953]},loading:()=>(0,a.jsx)(u,{})});var v=()=>(0,a.jsxs)("main",{className:y().MainContainer,children:[(0,a.jsx)(b,{text:"Random jokes from Reddit"}),(0,a.jsxs)("div",{className:y().PageContainer,children:[(0,a.jsx)(f,{children:(0,a.jsx)(x,{})}),(0,a.jsx)(o.x7,{position:"top-right"})]})]})},475:function(e){e.exports={card:"styles_card__JhJwv"}},1166:function(e){e.exports={AppHeader:"styles_AppHeader__jzXpY"}},7946:function(e){e.exports={center:"styles_center__iMzk9",loader:"styles_loader__AjX8h",jokeLoader:"styles_jokeLoader__I03FM"}},7857:function(e){e.exports={MainContainer:"page_MainContainer__Yqrwt",PageContainer:"page_PageContainer__JXbAc"}},6216:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(5722),o=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var a,l={},d=null,c=null;for(a in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,a)&&!i.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:o,type:e,key:d,ref:c,props:l,_owner:s.current}}t.jsx=l,t.jsxs=l},4953:function(e,t,r){"use strict";e.exports=r(6216)},9462:function(e,t,r){"use strict";let a,o;r.d(t,{x7:function(){return eo},ZP:function(){return en}});var n,s=r(5722);let i={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",o="";for(let n in e){let s=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+s+";":a+="f"==n[1]?p(s,n):n+"{"+p(s,"k"==n[1]?"":t)+"}":"object"==typeof s?a+=p(s,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=s&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(n,s):n+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+a},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},y=(e,t,r,a,o)=>{var n;let s=m(e),i=f[s]||(f[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!f[i]){let t=s!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);f[i]=p(o?{["@keyframes "+i]:t}:t,r?"":"."+i)}let l=r&&f.g?f.g:null;return r&&(f.g=f[i]),n=f[i],l?t.data=t.data.replace(l,n):-1===t.data.indexOf(n)&&(t.data=a?n+t.data:t.data+n),i},g=(e,t,r)=>e.reduce((e,a,o)=>{let n=t[o];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"");function h(e){let t=this||{},r=e.call?e(t.p):e;return y(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let b,x,v,_=h.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function o(n,s){let i=Object.assign({},n),l=i.className||o.className;r.p=Object.assign({theme:x&&x()},i),r.o=/ *go\d+/.test(l),i.className=h.apply(r,a)+(l?" "+l:""),t&&(i.ref=s);let d=e;return e[0]&&(d=i.as||e,delete i.as),v&&d[0]&&v(i),b(d,i)}return t?t(o):o}}var j=e=>"function"==typeof e,E=(e,t)=>j(e)?e(t):e,O=(a=0,()=>(++a).toString()),N=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},k=new Map,C=e=>{if(k.has(e))return;let t=setTimeout(()=>{k.delete(e),M({type:4,toastId:e})},1e3);k.set(e,t)},P=e=>{let t=k.get(e);t&&clearTimeout(t)},$=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&P(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?$(e,{type:1,toast:r}):$(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?C(a):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},S=[],D={toasts:[],pausedAt:void 0},M=e=>{D=$(D,e),S.forEach(e=>{e(D)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={})=>{let[t,r]=(0,s.useState)(D);(0,s.useEffect)(()=>(S.push(r),()=>{let e=S.indexOf(r);e>-1&&S.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||O()}),R=e=>(t,r)=>{let a=I(t,e,r);return M({type:2,toast:a}),a.id},L=(e,t)=>R("blank")(e,t);L.error=R("error"),L.success=R("success"),L.loading=R("loading"),L.custom=R("custom"),L.dismiss=e=>{M({type:3,toastId:e})},L.remove=e=>M({type:4,toastId:e}),L.promise=(e,t,r)=>{let a=L.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(L.success(E(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{L.error(E(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var T=(e,t)=>{M({type:1,toast:{id:e,height:t}})},F=()=>{M({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:r}=z(e);(0,s.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&L.dismiss(t.id);return}return setTimeout(()=>L.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,s.useCallback)(()=>{r&&M({type:6,time:Date.now()})},[r]),o=(0,s.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:n}=r||{},s=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),i=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<i&&e.visible).length;return s.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:T,startPause:F,endPause:a,calculateOffset:o}}},Y=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${_`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${_`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,X=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=w("div")`
  position: absolute;
`,J=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,B=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?s.createElement(q,null,t):t:"blank"===r?null:s.createElement(J,null,s.createElement(U,{...a}),"loading"!==r&&s.createElement(Z,null,"error"===r?s.createElement(Y,{...a}):s.createElement(X,{...a})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,W=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(r),W(r)];return{animation:t?`${_(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=s.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?V(e.position||t||"top-center",e.visible):{opacity:0},n=s.createElement(B,{toast:e}),i=s.createElement(Q,{...e.ariaProps},E(e.message,e));return s.createElement(K,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:n,message:i}):s.createElement(s.Fragment,null,n,i))});n=s.createElement,p.p=void 0,b=n,x=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let n=s.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return s.createElement("div",{ref:n,className:t,style:r},o)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:n,containerClassName:i})=>{let{toasts:l,handlers:d}=H(r);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:i,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(r=>{let n=r.position||t,i=er(n,d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return s.createElement(et,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?ea:"",style:i},"custom"===r.type?E(r.message,r):o?o(r):s.createElement(ee,{toast:r,position:n}))}))},en=L}},function(e){e.O(0,[549,506,744],function(){return e(e.s=6887)}),_N_E=e.O()}]);