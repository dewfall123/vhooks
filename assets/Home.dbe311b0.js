import{l as e,m as a,n as t,p as s,u as l,o,c,b as n,q as r,t as i,_ as u,s as v,v as d,x as f,F as m,y as p,r as h,z as k}from"./app.81266776.js";const x=v("data-v-4aeb51c6");d("data-v-4aeb51c6");const y={key:0,class:"home-hero"},g={key:0,class:"figure"},$={key:1,id:"main-title",class:"title"},_={key:2,class:"description"};f();var I=e({expose:[],setup(e){const v=a(),d=t(),f=s((()=>d.value.heroImage||m.value||h.value||I.value)),m=s((()=>null!==d.value.heroText)),p=s((()=>d.value.heroText||v.value.title)),h=s((()=>null!==d.value.tagline)),k=s((()=>d.value.tagline||v.value.description)),I=s((()=>d.value.actionLink&&d.value.actionText)),b=s((()=>d.value.altActionLink&&d.value.altActionText));return x(((e,a)=>l(f)?(o(),c("header",y,[e.$frontmatter.heroImage?(o(),c("figure",g,[n("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):r("",!0),l(m)?(o(),c("h1",$,i(l(p)),1)):r("",!0),l(h)?(o(),c("p",_,i(l(k)),1)):r("",!0),l(I)?(o(),c(u,{key:3,item:{link:l(d).actionLink,text:l(d).actionText},class:"action"},null,8,["item"])):r("",!0),l(b)?(o(),c(u,{key:4,item:{link:l(d).altActionLink,text:l(d).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)))}});I.__scopeId="data-v-4aeb51c6";const b=v("data-v-793c2722");d("data-v-793c2722");const T={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},w={class:"features"},j={key:0,class:"title"},q={key:1,class:"details"};f();var z=e({expose:[],setup(e){const a=t(),u=s((()=>a.value.features&&a.value.features.length>0)),v=s((()=>a.value.features?a.value.features:[]));return b(((e,a)=>l(u)?(o(),c("div",T,[n("div",A,[n("div",L,[n("div",w,[(o(!0),c(m,null,p(l(v),((e,a)=>(o(),c("section",{key:a,class:"feature"},[e.title?(o(),c("h2",j,i(e.title),1)):r("",!0),e.details?(o(),c("p",q,i(e.details),1)):r("",!0)])))),128))])])])])):r("",!0)))}});z.__scopeId="data-v-793c2722";const B={},C=v("data-v-41020908");d("data-v-41020908");const F={key:0,class:"footer"},D={class:"container"},E={class:"text"};f();const G=C(((e,a)=>e.$frontmatter.footer?(o(),c("footer",F,[n("div",D,[n("p",E,i(e.$frontmatter.footer),1)])])):r("",!0)));B.render=G,B.__scopeId="data-v-41020908";const H=v("data-v-cc1f894c");d("data-v-cc1f894c");const J={class:"home","aria-labelledby":"main-title"},K={class:"home-content"};f();var M=e({expose:[],setup:e=>H(((e,a)=>{const t=h("Content");return o(),c("main",J,[n(I),k(e.$slots,"hero"),n(z),n("div",K,[n(t)]),k(e.$slots,"features"),n(B),k(e.$slots,"footer")])}))});M.__scopeId="data-v-cc1f894c";export default M;
