(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{6112:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(9619),l=r(943);let u=async e=>{let t=await fetch("https://www.reddit.com/r/Jokes/.json",{signal:e});if(!t.ok)throw Error(t.statusText);return await t.json()},s=e=>![0,1].includes(e),o=e=>{let t=Math.round(100*Math.random());return t>e&&s(t)?o(e):t},a=e=>{var t;if(!e.length)return null;let r=o(e.length),n=e[r],{title:l,selftext:u}=null!==(t=null==n?void 0:n.data)&&void 0!==t?t:{};return(null!=l?l:u)?n:a(e)};var i=r(3353),c=r.n(i),d=e=>{let{title:t,joke:r,link:l}=e;return t&&r&&l?(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:t}),(0,n.jsx)("p",{children:r}),(0,n.jsx)("a",{className:c().link,target:"_blank",rel:"noopener noreferrer",href:l,children:"source"})]}):(0,n.jsx)("p",{})},h=r(6231);let f=async e=>{let{signal:t}=null!=e?e:{},r=await u(t),n=r.data.children;return n};var k=r(2438),j=r(9462);let v=async(e,t)=>{let r=e({signal:t});return j.ZP.promise(r,{loading:"Getting jokes",success:"Got the Jokes",error:"Could not load jokes"}),r};var x=(e,t,r)=>{let n=(0,l.useRef)();(0,l.useEffect)(()=>{let e=new AbortController;return n.current=null==e?void 0:e.signal,()=>{e.abort()}},[]);let u=(0,k.ZP)(e,()=>v(t,n.current),r);return u},p=()=>{let e=(0,l.useRef)(!1);return(0,l.useEffect)(()=>(e.current=!0,()=>{e.current=!1})),e.current};let w={title:"",selftext:"",url:""};var b=e=>{let{fallbackData:t}=e,r=p(),[u,s]=(0,l.useState)(!1),[o,i]=(0,l.useState)(),{data:c,isLoading:k,mutate:j}=x("jokes",f,{fallbackData:t});(0,l.useEffect)(()=>{(null==c?void 0:c.length)&&(!o||u)&&(()=>{if(k||!c)return;let e=a(c),t=null==e?void 0:e.data;r&&(s(e=>!e),i(t))})()},[k,r,c,o,u]);let{title:v,selftext:b,url:_}=null!=o?o:w;return(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(d,{title:v,joke:b,link:_}),(0,n.jsx)("button",{type:"button",onClick:()=>s(e=>!e),children:"Random joke"}),(0,n.jsx)("button",{type:"button",onClick:()=>j(),children:"Fetch new jokes from reddit"})]})}},3353:function(e){e.exports={link:"styles_link__yin_7"}}}]);