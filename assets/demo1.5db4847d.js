import{i as e,u as t,d as n,g as i,e as o,f as s,h as l,j as r,o as a,c as h,b as u,t as c,k as d}from"./app.81266776.js";function g(r,a){const h=o({width:void 0,height:void 0}),u=null==a?void 0:a.onChange;return function(e){const t=i();(null==t?void 0:t.isMounted)?e():n(e)}((()=>{const n=function(n,i){if(!n)return i;let o;return e(n)&&(o=t(n)),"function"==typeof n&&(o=n()),o||console.error("target is not available!"),o}(r);if(!n)return;const i=new s((e=>{e.forEach((e=>{Object.assign(h,{width:e.target.clientWidth,height:e.target.clientHeight}),u&&u(h)}))}));i.observe(n),l((()=>{i.disconnect()}))})),h}var p,f,E,v,N,R;(f=p||(p={})).PENDING="PENDING",f.SUCCESS="SUCCESS",f.RUNNING="RUNNING",f.ERROR="ERROR",f.TIMEOUT_EXPIRED="TIMEOUT_EXPIRED",(v=E||(E={})).AUTO="auto",v.NONE="none",E.AUTO,(R=N||(N={}))["等于"]="=",R["大于"]=">",R["小于"]="<",R["大于等于"]=">=",R["小于等于"]="<=",R["不等于"]="!=";var b={setup(){const e=r(null);return{divRef:e,size:g(e,{onChange:()=>{console.log("size change")}})}}};const w={ref:"divRef",style:{border:"1px solid rgba(0, 0, 0, 0.1)",overflow:"scroll",width:"100px",height:"100px","min-height":"30px","min-width":"30px",resize:"both"}},I=d(" size.width: "),O={style:{color:"blue"}},U=u("p",null,null,-1),z=d(" size.height: "),x={style:{color:"blue"}};b.render=function(e,t,n,i,o,s){return a(),h("div",null,[u("div",w,null,512),u("p",null,[I,u("span",O,c(i.size.width),1)]),U,u("p",null,[z,u("span",x,c(i.size.height),1)])])};export{b as _};
