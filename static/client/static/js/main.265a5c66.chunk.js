(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{436:function(e,t,n){},437:function(e,t,n){},439:function(e,t,n){"use strict";n.r(t);var c=n(3),r=(n(219),n(229),n(0)),a=n.n(r),i=n(42),o=n.n(i),s=n(4),u=n(21),d=n(17),l=n(208),j=n(210),b=Object(r.createContext)(),h=n(106);var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,n=Object(r.useState)(),o=Object(d.a)(n,2),s=o[0],u=o[1];function l(e){var t=e.children,n=Object(h.a)(e,["children"]);return s?Object(i.createPortal)(a.a.cloneElement(t,n),s):Object(c.jsx)(c.Fragment,{})}return Object(r.useEffect)((function(){var e=t||window.document.body,n=window.document.createElement("div");return e.appendChild(n),u(n),function(){u(),e.removeChild(n)}}),[]),{Portal:l}},f=n(13),O=n.n(f),m=n(15),g=n(28),x=n(209),v=n.n(x).a.create({timeout:12e3,withCredentials:!0});v.interceptors.response.use((function(e){if(0!==e.data.status)throw console.log("\u9519\u8bef",e.data.message),new Error(e.data.message);return e}));var y=v,w="";function E(e){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(O.a.mark((function e(t){var n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post("/user/signin",Object(m.a)({},t));case 2:return n=e.sent,c=n.data,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return L.apply(this,arguments)}function L(){return(L=Object(g.a)(O.a.mark((function e(t){var n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/shop/list",{params:t});case 2:return n=e.sent,c=n.data,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return k.apply(this,arguments)}function k(){return(k=Object(g.a)(O.a.mark((function e(t){var n,c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,y.get("/shop/shop/"+n);case 3:return c=e.sent,r=c.data,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return z.apply(this,arguments)}function z(){return(z=Object(g.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/web/config/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return e&&e.startsWith("http")?e:"".concat(w).concat(e)}function H(){var e=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: white;\n  z-index: 999;\n"]);return H=function(){return e},e}var X=j.a.div(H());var Y=function(e){e.history;var t=a.a.useState(""),n=Object(d.a)(t,2),i=(n[0],n[1],Object(r.useContext)(b)),o=p().Portal;return Object(c.jsx)(s.a,{height:80,children:Object(c.jsx)(o,{children:Object(c.jsx)(X,{color:"white",width:"100%",children:Object(c.jsxs)(s.a,{display:"flex",alignItems:"center",children:[Object(c.jsx)(s.a,{padding:3,children:Object(c.jsx)("img",{src:P(i.logo),width:35,height:35})}),Object(c.jsx)(s.a,{padding:2,children:Object(c.jsx)(s.f,{color:"red",size:"sm",children:i.title})})]})})})})},F=n(51);n(442),n(441);function I(e){var t=[];return function e(n){Array.isArray(n)?n.forEach(e):n instanceof Object?Object.values(n).forEach(e):t.push(n)}(e),t}function R(e,t){var n=t.defaultData,c=Object(r.useState)(n||{}),a=Object(d.a)(c,2),i=a[0],o=a[1],s=Object(r.useState)(!1),u=Object(d.a)(s,2),l=u[0],j=u[1],b=Object(r.useState)(null),h=Object(d.a)(b,2),p=h[0],f=h[1],O=Object(r.useRef)();return Object(r.useEffect)((function(){return O.current=!0,function(){O.current=!1}}),[]),{fetch:function(t,n){var c=n.onError,r=n.onSuccess,a=n.updateQuery,s=n.title,u=void 0===s?"\u8bf7\u6c42":s;j(!0),f(null),e(t).then((function(e){O.current&&(r&&r({type:"success",message:"".concat(u,"\u6210\u529f")},e),j(!1),a&&(e=a(i,e,t)),o(e))})).catch((function(e){O.current&&(j(!1),f(e.message),c&&c({type:"error",message:"".concat(e.message||e.msg)}))}))},data:i,loading:l,error:p,setError:f,updateCache:function(e){o(e(i))},setLoading:j}}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=R(e,n),a=n.defaultData,i=Object(r.useRef)();return Object(r.useEffect)((function(){var e=i.current||!a||0==Object.keys(a).length;i.current=!0,e&&(n.stop||(n.hold?c.setLoading(!0):c.fetch(t,n)))}),I(t)),Object(m.a)(Object(m.a)({},c),{},{fetchMore:function(e,r,a){c.fetch(Object(m.a)(Object(m.a)({},t),e),Object(m.a)(Object(m.a)({updateQuery:a},n),r))},update:function(){c.fetch(t,n)}})}var D=n(214);n(436);var W=function(e){var t=1==new URLSearchParams(e.location.search).get("proxy"),n=Object(r.useState)([]),a=Object(d.a)(n,2),i=a[0],o=a[1],u=Object(r.useState)(0),l=Object(d.a)(u,2),j=l[0],b=l[1],h=(B(T,{id:e.match.params.id},{onSuccess:function(e,n){console.log(n);var r=n.photo.map((function(e){return{src:P(e.url),intro:Object(c.jsxs)(s.a,{children:[Object(c.jsx)(s.a,{marginTop:2,children:Object(c.jsxs)(s.f,{color:"white",size:"sm",children:["\uffe5 ",t?n.proxy_price:n.price]})}),Object(c.jsx)(s.a,{marginTop:5,children:Object(c.jsx)(s.i,{color:"white",weight:"bold",children:n.brand})}),Object(c.jsx)(s.a,{children:Object(c.jsx)(s.i,{color:"white",truncate:!0,children:t?n.proxy_name:n.name})})]})}}));o(r),O(!0)}}).data,Object(r.useState)(!1)),p=Object(d.a)(h,2),f=p[0],O=p[1];return Object(c.jsx)(s.a,{color:"darkGray",minHeight:"100%",children:Object(c.jsx)(D.a,{images:i,visible:f,onClose:function(){O(!1),setTimeout((function(){e.history.goBack()}),300)},maskClosable:!1,index:j,onIndexChange:b})})},A=n(32),M=n(22);var Q=function(e){var t,n=e.data,r=e.proxy;return Object(c.jsx)(F.b,{to:"/shop/".concat(n.id,"?proxy=").concat(r?1:0),children:Object(c.jsxs)(s.a,{padding:3,rounding:3,color:"white",overflow:"hidden",children:[Object(c.jsx)(s.a,{margin:-3,children:Object(c.jsx)(s.g,{alt:"example.com",naturalHeight:564,naturalWidth:564,src:P(null===(t=n.photo[0])||void 0===t?void 0:t.url)})}),Object(c.jsx)(s.a,{marginTop:5,children:Object(c.jsx)(s.i,{weight:"bold",children:n.brand})}),Object(c.jsx)(s.a,{children:Object(c.jsx)(s.i,{truncate:!0,children:r?n.proxy_name:n.name})}),Object(c.jsx)(s.a,{marginTop:2,children:Object(c.jsxs)(s.f,{size:"sm",children:["\uffe5 ",r?n.proxy_price:n.price]})}),Object(c.jsx)(s.a,{marginTop:2,children:Object(c.jsx)(s.i,{size:"md",children:"\u81ea\u8425 | \u5927\u9646"})})]})})};function G(){return document.documentElement.scrollTop||document.body.scrollTop}function J(e,t){Object(r.useEffect)((function(){var t=document.documentElement;function n(n){G()+t.clientHeight>=t.scrollHeight-100&&e()}return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}}),t)}var U={};function V(e,t){console.log(e,t),Object(r.useEffect)((function(){var n,c="pageScroll_".concat(e),r=U[c+"_s"],a=U[c+"_h"];r&&"POP"==t&&(document.body.style.minHeight=a+"px",n=r,document.body.scrollTop=n,document.documentElement.scrollTop=n);var i=0,o=0;function s(){i=G(),o=document.body.offsetHeight,U[c+"_s"]=i,U[c+"_h"]=o}return document.addEventListener("scroll",s),function(){document.removeEventListener("scroll",s)}}),[])}var q=null;var K=function(e){var t=e.location,n=e.history,a=new URLSearchParams(t.search),i=Object(r.useState)(""),o=Object(d.a)(i,2),u=o[0],l=(o[1],B(C,{status:a.get("status")||0,keyword:u,page_size:20},{updateQuery:function(e,t,n){var c=e.list||[];return Object(m.a)(Object(m.a)({},t),{},{list:[].concat(Object(M.a)(c),Object(M.a)(t.list))})},defaultData:q})),j=l.data,b=(l.update,l.loading),h=l.fetchMore;q=j;var p=j.list,f=j.page,O=j.total_page;return j.page_size,J((function(){!b&&f<O&&h({page:f?f+1:1})}),[f,O,b]),V(t.pathname,n.action),Object(c.jsxs)(s.a,{minHeight:"110vh",color:"lightGray",children:[Object(c.jsx)(Y,{}),Object(c.jsxs)(s.a,{padding:1,display:"flex",direction:"column",alignItems:"center",children:[Object(c.jsx)(s.a,{display:"flex",wrap:!0,maxWidth:"100%",width:"1200px",children:null===p||void 0===p?void 0:p.map((function(e){var t;return Object(c.jsx)(s.a,(t={column:6,smColumn:6,mdColumn:3},Object(A.a)(t,"mdColumn",2),Object(A.a)(t,"children",Object(c.jsx)(s.a,{margin:1,children:Object(c.jsx)(Q,{data:e,proxy:1==a.get("proxy")})})),t),e.id)}))}),Object(c.jsx)(s.h,{show:b,accessibilityLabel:"\u52a0\u8f7d\u4e2d",size:"sm"})]})]})};var N=function(e){var t=B(_),n=t.data;return t.loading,Object(c.jsx)(b.Provider,{value:n,children:Object(c.jsxs)(u.c,{location:e.location,children:[Object(c.jsx)(u.a,{path:"/shop/:id",component:W}),Object(c.jsx)(u.a,{path:"/",component:K})]})})},Z=n(215),$=Object(r.forwardRef)((function(e,t){var n=e.defaultValue,a=e.onChange,i=e.com,o=Object(h.a)(e,["defaultValue","onChange","com"]),s=Object(r.useState)(n),u=Object(d.a)(s,2),l=u[0],j=u[1],b=i;return Object(c.jsx)(b,Object(m.a)(Object(m.a)({},o),{},{id:o.name,onChange:function(e){j(e.value),a&&a(e)},value:l,ref:t}))}));var ee=function(e){var t=e.history,n=function(e,t,n){var c=R(e,n);return Object(m.a)(Object(m.a)({},c),{},{fetch:function(e,r){c.fetch(Object(m.a)(Object(m.a)({},t),e),Object(m.a)(Object(m.a)({},n),r))}})}(E,null,{onSuccess:function(){t.push("/shop")}}),r=n.fetch,a=n.error,i=n.loading,o=Object(Z.a)(),u=o.register,d=o.handleSubmit;return o.errors,Object(c.jsx)(s.a,{display:"flex",justifyContent:"center",height:"100%",children:Object(c.jsxs)(s.a,{borderStyle:"sm",display:"flex",margin:"auto",marginTop:"auto",wrap:!0,width:"100%",direction:"column",maxWidth:800,children:[Object(c.jsx)(s.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)(s.f,{size:"sm",accessibilityLevel:2,children:"\u767b\u5f55\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"})}),Object(c.jsx)(s.a,{paddingX:1,paddingY:1,children:a&&Object(c.jsx)(s.c,{type:"error",iconAccessibilityLabel:"Error icon",message:a})}),Object(c.jsxs)("form",{onSubmit:d((function(e){r(e)})),children:[Object(c.jsx)(s.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)($,{com:s.j,name:"name",label:"\u8d26\u53f7",placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7",ref:u})}),Object(c.jsx)(s.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)($,{com:s.j,name:"password",label:"\u5bc6\u7801",type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",ref:u})}),Object(c.jsx)(s.h,{show:i,accessibilityLabel:"\u767b\u5f55\u4e2d",size:"sm"}),Object(c.jsx)(s.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(c.jsx)(s.a,{justifyContent:"end",marginStart:-1,marginEnd:-1,marginTop:-1,marginBottom:-1,display:"flex",wrap:!0,children:Object(c.jsx)(s.a,{paddingX:1,paddingY:1,children:Object(c.jsx)(s.b,{text:"\u767b\u5f55",color:"red",size:"lg",type:"submit"})})})})]})]})})};var te=function(e){return Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/signin",component:ee}),Object(c.jsx)(u.a,{path:"/",component:N})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,443)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n(437),n(438);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(F.a,{children:Object(c.jsx)(te,{})})}),document.getElementById("root")),ne()}},[[439,1,2]]]);
//# sourceMappingURL=main.265a5c66.chunk.js.map