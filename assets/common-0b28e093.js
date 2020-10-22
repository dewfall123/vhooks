import{j as t,x as n,B as e,d as o,e as r,q as i,A as u,c as a}from"./common-ec3338d0.js";import"./common-4578e2e0.js";var l="object"==typeof global&&global&&global.Object===Object&&global,c="object"==typeof self&&self&&self.Object===Object&&self,f=l||c||Function("return this")(),s=f.Symbol,v=Object.prototype,d=v.hasOwnProperty,p=v.toString,b=s?s.toStringTag:void 0;var m=Object.prototype.toString;var g=s?s.toStringTag:void 0;function y(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?function(t){var n=d.call(t,b),e=t[b];try{t[b]=void 0;var o=!0}catch(t){}var r=p.call(t);return o&&(n?t[b]=e:delete t[b]),r}(t):function(t){return m.call(t)}(t)}function j(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}var h=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,x=/^0o[0-7]+$/i,w=parseInt;function C(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==y(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(h,"");var e=T.test(t);return e||x.test(t)?w(t.slice(2),e?2:8):O.test(t)?NaN:+t}var S=function(){return f.Date.now()},N=Math.max,E=Math.min;function $(t,n,e){var o,r,i,u,a,l,c=0,f=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(n){var e=o,i=r;return o=r=void 0,c=n,u=t.apply(i,e)}function p(t){return c=t,a=setTimeout(m,n),f?d(t):u}function b(t){var e=t-l;return void 0===l||e>=n||e<0||s&&t-c>=i}function m(){var t=S();if(b(t))return g(t);a=setTimeout(m,function(t){var e=n-(t-l);return s?E(e,i-(t-c)):e}(t))}function g(t){return a=void 0,v&&o?d(t):(o=r=void 0,u)}function y(){var t=S(),e=b(t);if(o=arguments,r=this,l=t,e){if(void 0===a)return p(l);if(s)return clearTimeout(a),a=setTimeout(m,n),d(l)}return void 0===a&&(a=setTimeout(m,n)),u}return n=C(n)||0,j(e)&&(f=!!e.leading,i=(s="maxWait"in e)?N(C(e.maxWait)||0,n):i,v="trailing"in e?!!e.trailing:v),y.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=r=a=void 0},y.flush=function(){return void 0===a?u:g(S())},y}function W(o,r,i){let u;u="function"==typeof o?t(o):o;const a=n(u.value),l=function(t,n,e){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return j(e)&&(o="leading"in e?!!e.leading:o,r="trailing"in e?!!e.trailing:r),$(t,n,{leading:o,maxWait:n,trailing:r})}(()=>{a.value=u.value},null!=r?r:1e3,i);return e(u,l),a}var M={setup(){const t=n(0),e=W(t,2e3);return{count:t,throlledCount:e,addCount:function(){t.value++}}}};const k=u(" count: "),q=u(" throlledCount: ");M.render=function(t,n,e,u,l,c){return a(),o("div",null,[r("p",null,[k,r("span",null,i(u.count),1)]),r("p",null,[q,r("span",null,i(u.throlledCount),1)]),r("button",{onClick:n[1]||(n[1]=(...t)=>u.addCount(...t))},"++count")])};export{M as s};
