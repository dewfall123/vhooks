import{o as e,b as n,d as o,e as s,q as t,A as r,c as i,x as a}from"./common-ec3338d0.js";import"./common-4578e2e0.js";import{u}from"./common-82144c68.js";import{g as v}from"./common-72d45524.js";function d(o,s){const{state:t,setFalse:r,setTrue:i}=u(!1),{onEnter:a,onLeave:d}=null!=s?s:{};function l(){i(),a&&a()}function c(){r&&r(),d&&d()}return e(()=>{const e=v(o);e&&(e.addEventListener("mouseenter",l),e.addEventListener("mouseleave",c))}),n(()=>{const e=v(o);e&&(e.removeEventListener("mouseenter",l),e.removeEventListener("mouseleave",c))}),t}var l={setup:()=>({isHovering:d(()=>document.getElementById("divRef"))})};const c=s("div",{id:"divRef",style:{width:"200px",height:"200px",background:"rgba(0, 0, 0, 0.2)"}},null,-1),m=r(" isHovering: "),g={style:{color:"blue"}};l.render=function(e,n,r,a,u,v){return i(),o("div",null,[c,m,s("span",g,t(a.isHovering),1)])};var f={setup(){const e=a(null);return{isHovering:d(e),divRef:e}}};const p={ref:"divRef",style:{width:"200px",height:"200px",background:"rgba(0, 0, 0, 0.2)"}},b=r(" isHovering: "),h={style:{color:"blue"}};f.render=function(e,n,r,a,u,v){return i(),o("div",null,[s("div",p,null,512),b,s("span",h,t(a.isHovering),1)])};export{l as a,f as s};
