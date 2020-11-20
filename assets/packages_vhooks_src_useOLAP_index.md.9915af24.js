import{t as s,r as n,k as a,J as e,B as t,y as o,e as c,d as u,l as p,f as i,G as l,I as r}from"./common-34d19493.js";import{O as C,C as E}from"./common-ce15c7a5.js";const d={"=":(s,n)=>s===n,">":(s,n)=>s>n,"<":(s,n)=>s<n,">=":(s,n)=>s>=n,"<=":(s,n)=>s<=n,"!=":(s,n)=>s!==n};function m(c,u={}){e(c)||(c=o(c)),u.columns||(u.columns=a((()=>Object.keys(c.value[0]??[]).reduce(((s,n)=>(s[n]=n,s)),{})))),e(u.columns)||(u.columns=o(u.columns));const p=function(e,t){const o=n({list:[],cur:{field:"",operator:C.等于,value:""}}),c=a((()=>t.value)),u=C,p=a((()=>o.cur.field?Array.from(new Set(e.value.map((s=>s[o.cur.field])).filter((s=>void 0!==s)))):[]));function i(){o.cur.field="",o.cur.operator=C.等于,o.cur.value=""}const l=a((()=>o.cur.field&&o.cur.operator&&o.cur.value));return{...s(o),fieldOptions:c,operatorOptions:u,valueOptions:p,resetFilter:i,canAddFilter:l,addFilter:function(){l.value&&(o.list.push({field:o.cur.field,operator:o.cur.operator,value:o.cur.value}),i())}}}(c,u.columns),{cubeSettings:i,cubeOptions:l}=function(s,o={},c={}){const u=n({dimension:c.dimension,measure:c.measure,series:c.series,bySeries:c.bySeries??!1,countField:c.countField??E}),p=a((()=>o.dimensions?e(o.dimensions)?o.dimensions.value:o.dimensions:s.value)),i=a((()=>o.measures?e(o.measures)?o.measures.value:o.measures:{[E]:"次数",...s.value})),l=a((()=>o.series?e(o.series)?o.series.value:o.series:s.value));t(p,(()=>{u.dimension&&p.value[u.dimension]||(u.dimension=Object.keys(p.value??{})[0])}),{immediate:!0}),t(i,(()=>{u.measure&&i.value[u.measure]||(u.measure=Object.keys(i.value??{})[0])}),{immediate:!0}),t(l,(()=>{u.series&&l.value[u.series]||(u.series=Object.keys(l.value??{})[0])}),{immediate:!0});const r=a((()=>({dimension:p.value,measure:i.value,series:l.value})));return{cubeSettings:u,cubeOptions:r}}(u.columns,u.options,u.defaultValues),{cube:r,chartCube:m}=function(s,n,e){const t=a((()=>{const a=s.value.filter((s=>{for(const{field:a,operator:e,value:t}of n.value)if(!(0,d[e])(s[a],t))return!1;return!0})),{dimension:t,measure:o,series:c,bySeries:u,countField:p}=e;if(!t||!o||u&&!c)return[];function i(s,n,a){s[n]?s[n]+=o===p?1:Number(a[o])||0:s[n]=o===p?1:Number(a[o])||0}let l=[];if(u){const s={};for(const n of a){if(!(t in n))continue;const a=n[t];s[a]?s[a].push(n):s[a]=[n]}for(const n in s){const a={};for(const e of s[n])i(a,e[c],e);for(const s in a)l.push({[t]:n,[c]:s,[o]:a[s]})}}else{const s={};for(const n of a)t in n&&i(s,n[t],n);for(const n in s)l.push({[t]:n,[o]:s[n]})}return l=l.sort(((s,n)=>s[t]<n[t]?-1:1)),l})),o=a((()=>{const{dimension:s,measure:n,series:a,bySeries:o}=e,c=[s];if(o){const s=Array.from(new Set(t.value.map((s=>s[a]))));c.push(...s)}else c.push(n);let u=t.value;if(o){const e={};for(const o of t.value){const t=o[s],c=o[a],u=o[n];e[t]?e[t][c]=u:e[t]={[s]:t,[c]:u}}u=Object.values(e)}return{columns:c,rows:u}}));return{cube:t,chartCube:o}}(c,p.list,i);return{cube:r,chartCube:m,columns:u.columns,cubeSettings:i,cubeOptions:l,filter:p}}const k=[{date:"2020-08-08",name:"d",age:22,action:"pull",score:17},{date:"2020-08-05",name:"a",age:18,action:"push",score:13},{date:"2020-08-05",name:"b",age:20,action:"pull",score:0},{date:"2020-08-05",name:"c",age:24,action:"push",score:4},{date:"2020-08-05",name:"d",age:22,action:"pull",score:3},{date:"2020-08-06",name:"a",age:18,action:"pull",score:-3},{date:"2020-08-06",name:"d",age:22,action:"push",score:9},{date:"2020-08-07",name:"b",age:20,action:"pull",score:15},{date:"2020-08-07",name:"c",age:24,action:"push",score:0},{date:"2020-08-08",name:"a",age:18,action:"push",score:1},{date:"2020-08-09",name:"a",age:18,action:"push"}];var D={setup(){const{cube:s,cubeSettings:n}=m(k);return{cube:s,cubeSettings:n}}};D.render=function(s,n,a,e,t,o){return u(),c("div")};var F={components:{demo45:D}};const h='{"title":"useDocumentVisibility","frontmatter":{"map":{"realPath":"packages\\\\vhooks\\\\src\\\\useOLAP\\\\index.md"}},"headers":[{"level":2,"title":"代码演示","slug":"代码演示"},{"level":3,"title":"基本用法","slug":"基本用法"},{"level":3,"title":"参数","slug":"参数"}],"relativePath":"packages/vhooks/src/useOLAP/index.md","lastUpdated":1605879767118.202}',f=r('<h1 id="usedocumentvisibility"><a class="header-anchor" href="#usedocumentvisibility" aria-hidden="true">#</a> useDocumentVisibility</h1><p>分析多维数据的 hooks。</p><h2 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="基本用法"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>',4),g=r('<h3 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th style="text-align:right;">说明</th><th style="text-align:right;">类型</th><th style="text-align:right;">值</th></tr></thead><tbody><tr><td>documentVisibility</td><td style="text-align:right;">判断 document 是否在是否处于可见状态</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;visible&#39; | &#39;hidden&#39; | &#39;prerender&#39; | undefined</td></tr></tbody></table>',2);F.render=function(s,n,a,e,t,o){const r=p("demo45"),C=p("demo");return u(),c("div",null,[f,i("p",null,[i(C,{src:"./demo/demo.vue",language:"vue",title:"基本用法",desc:"分析多维数据",componentName:"demo45",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20useOLAP%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'ahooks-vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20data%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'.%2Fdata'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20cube%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20cubeSettings%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EuseOLAP%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Edata%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20cube%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20cubeSettings%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useOLAP%20%7D%20from%20'ahooks-vue'%3B%0Aimport%20%7B%20data%20%7D%20from%20'.%2Fdata'%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20%7B%20cube%2C%20cubeSettings%20%7D%20%3D%20useOLAP(data)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20cube%2C%0A%20%20%20%20%20%20cubeSettings%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{default:l((()=>[i(r)])),_:1})]),g])};export default F;export{h as __pageData};
