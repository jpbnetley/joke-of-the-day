import{j as o,a as l,r as f,C as p}from"./index-5a2a59a6.js";const a="https://www.reddit.com/r/Jokes/.json",j=async t=>{try{return await(await fetch(a,{signal:t})).json()}catch(e){console.error("could not fetch jokes from: ",a,e)}},J=t=>![0,1].includes(t),d=t=>{const e=Math.round(Math.random()*100);return e>t&&J(e)?d(t):e},i=t=>{if(!t.length)return{};const e=d(t.length),s=t[e],{title:r,selftext:n}=(s==null?void 0:s.data)??{};return r??n?s:i(t)},x="_link_hupjz_1",m={link:x},w=({title:t,joke:e,link:s})=>t&&e&&s?l("div",{children:[o("h1",{children:t}),o("p",{children:e}),o("a",{className:m.link,target:"_blank",rel:"noopener noreferrer",href:s,children:"source"})]}):o("p",{}),g=t=>{let e="pending",s;const r=t().then(n=>{e="success",s=n},n=>{e="error",s=n});return{read(){if(e==="pending")throw r;if(e==="error")throw s;if(e==="success")return s}}},R=async()=>(await j()).data.children,y=g(R),C=()=>{const[t,e]=f.useState(!1),s=()=>e(!t),r=y.read();if(!r)return null;const n=i(r),c=n==null?void 0:n.data;if(!c)return null;const{title:u,selftext:h,url:k}=c;return l(p,{children:[o(w,{title:u,joke:h,link:k}),o("button",{type:"button",onClick:s,children:"Refresh joke"})]})};export{C as default};
