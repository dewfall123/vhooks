import{k as t,d as e,e as o,C as a,E as r,c as s}from"./common-ec3338d0.js";import"./common-8f5b8761.js";import"./common-4578e2e0.js";import"./common-82144c68.js";import"./common-72d45524.js";import{s as i}from"./common-e2f919a0.js";var d={components:{demo4:i}};const n='{"title":"useInViewport","frontmatter":{},"headers":[{"level":2,"title":"代码演示","slug":"代码演示"},{"level":3,"title":"基本用法","slug":"基本用法"},{"level":3,"title":"传入 DOM 元素","slug":"传入-dom-元素"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"参数","slug":"参数"},{"level":3,"title":"结果","slug":"结果"}],"relativePath":"packages/vhooks/src/useInViewport/index.zh-CN.md","lastUpdated":1603360120573.9998}',l=r('',4),p=r('',7);d.render=function(r,i,d,n,A,h){const B=t("demo4"),c=t("demo");return s(),e("div",null,[l,o("p",null,[o(c,{src:"./demo/demo1.vue",title:"基本用法",desc:"使用 ref 监听节点在视图变化或者滚动时是否在可视范围之内",componentName:"demo4",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%26lt%3Btemplate%26gt%3B%0A%20%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%26lt%3Bdiv%0A%20%20%20%20%20%20ref%3D%26quot%3BdivRef%26quot%3B%0A%20%20%20%20%20%20style%3D%26quot%3B%0A%20%20%20%20%20%20%20%20width%3A%20100px%3B%0A%20%20%20%20%20%20%20%20height%3A%20100px%3B%0A%20%20%20%20%20%20%20%20background%3A%20rgba(0%2C%200%2C%200%2C%200.1)%3B%0A%20%20%20%20%20%20%20%20margin-bottom%3A%20300px%3B%0A%20%20%20%20%20%20%26quot%3B%0A%20%20%20%20%26gt%3B%26lt%3B%2Fdiv%26gt%3B%0A%20%20%20%20isInViewport%3A%20%26lt%3Bspan%20style%3D%26quot%3Bcolor%3A%20blue%26quot%3B%26gt%3B%7B%7B%20isInViewport%20%7D%7D%26lt%3B%2Fspan%26gt%3B%0A%20%20%26lt%3B%2Fdiv%26gt%3B%0A%26lt%3B%2Ftemplate%26gt%3B%0A%0A%26lt%3Bscript%20lang%3D%26quot%3Bts%26quot%3B%26gt%3B%0Aimport%20%7B%20useInViewport%20%7D%20from%20%26%2339%3B%40dewfall%2Fvhooks%26%2339%3B%3B%0Aimport%20%7B%20ref%20%7D%20from%20%26%2339%3Bvue%26%2339%3B%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20divRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20isInViewport%20%3D%20useInViewport(divRef)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20divRef%2C%0A%20%20%20%20%20%20isInViewport%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%26lt%3B%2Fscript%26gt%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20ref%3D%22divRef%22%0A%20%20%20%20%20%20style%3D%22%0A%20%20%20%20%20%20%20%20width%3A%20100px%3B%0A%20%20%20%20%20%20%20%20height%3A%20100px%3B%0A%20%20%20%20%20%20%20%20background%3A%20rgba(0%2C%200%2C%200%2C%200.1)%3B%0A%20%20%20%20%20%20%20%20margin-bottom%3A%20300px%3B%0A%20%20%20%20%20%20%22%0A%20%20%20%20%3E%3C%2Fdiv%3E%0A%20%20%20%20isInViewport%3A%20%3Cspan%20style%3D%22color%3A%20blue%22%3E%7B%7B%20isInViewport%20%7D%7D%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useInViewport%20%7D%20from%20'%40dewfall%2Fvhooks'%3B%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20divRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20isInViewport%20%3D%20useInViewport(divRef)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20divRef%2C%0A%20%20%20%20%20%20isInViewport%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{default:a(()=>[o(B)]),_:1})]),p])};export default d;export{n as __pageData};