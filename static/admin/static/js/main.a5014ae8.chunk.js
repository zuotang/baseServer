(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{234:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(21),s=n.n(i),o=n(6),l=n(3),d=n(9),j=n(7),u=n(11),b=n(4),p=n.n(b),h=n(8),x=n(25),f=n.n(x),O=f.a.create({timeout:12e3,withCredentials:!0});O.interceptors.response.use((function(e){if(0!==e.data.status)throw console.log("\u9519\u8bef",e.data.message),new Error(e.data.message);return e}));var g=O,m="";function v(e){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/user/signin",Object(o.a)({},t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/user/info",Object(o.a)({},t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return S.apply(this,arguments)}function S(){return(S=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/web/config/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return e&&e.startsWith("http")?e:"".concat(m).concat(e)}var X=Object(c.createContext)();var L=function(e){var t=e.history,n=r.a.useState(""),i=Object(j.a)(n,2),s=(i[0],i[1],Object(c.useContext)(X));return Object(a.jsxs)(l.a,{color:"white",rounding:2,padding:3,display:"flex",alignItems:"center",children:[Object(a.jsxs)(l.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(l.a,{children:Object(a.jsx)("img",{src:Y(s.logo),width:35,height:35})}),Object(a.jsx)(l.a,{padding:2,children:Object(a.jsx)(l.i,{color:"red",size:"sm",children:s.title})})]}),Object(a.jsx)(l.a,{padding:2,children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(u.c,{exact:!0,activeClassName:"selected",to:"/",children:Object(a.jsx)(l.b,{text:"\u4e3b\u9875",color:"transparent"})}),Object(a.jsx)(l.f,{}),Object(a.jsx)(u.c,{activeClassName:"selected",to:"/shop",children:Object(a.jsx)(l.b,{text:"\u5546\u54c1",color:"transparent"})}),Object(a.jsx)(u.c,{activeClassName:"selected",to:"/system",children:Object(a.jsx)(l.b,{text:"\u7cfb\u7edf",color:"transparent"})})]})}),Object(a.jsx)(l.a,{flex:"grow",paddingX:2}),Object(a.jsx)(l.a,{paddingX:2,children:Object(a.jsx)(l.j,{accessibilityLabel:"\u9000\u51fa",icon:"logout",size:"md",onClick:function(e){!function(){var e=new Date;e.setTime(e.getTime()-1e4);var t=document.cookie.match(/[^ =;]+(?=\=)/g);if(console.log("\u9700\u8981\u5220\u9664\u7684cookie\u540d\u5b57\uff1a"+t),t)for(var n=t.length;n--;)document.cookie=t[n]+"=0; expire="+e.toGMTString()+"; path=/"}(),t.push("/signin")}})})]})};n(56);var z=function(){return Object(a.jsx)(l.a,{padding:12,children:Object(a.jsx)(l.i,{align:"center",children:"\u6b63\u5728\u5f00\u53d1\u4e2d!"})})},E=n(12);function q(e){return T.apply(this,arguments)}function T(){return(T=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/web/list");case 2:return n=e.sent,a=n.data,e.abrupt("return",{list:a.data});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return R.apply(this,arguments)}function R(){return(R=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/web/edit",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H={data:{},set:function(e,t,n){"memory"==n?H.data[e]=t:"local"==n&&localStorage.setItem(e,JSON.stringify(t))},get:function(e,t){return"memory"==t?H.data[e]:"local"==t?JSON.parse(localStorage.getItem(e)):void 0},his:function(e,t){return"memory"==t?!!H.data[e]:"local"==t?localStorage.hisItem(e):void 0},remove:function(e,t){if("memory"==t)delete H.data[e];else if("local"==t)return localStorage.removeItem(e)}};function I(e){var t=[];return function e(n){Array.isArray(n)?n.forEach(e):n instanceof Object?Object.values(n).forEach(e):t.push(n)}(e),t}function P(e,t){var n=I(t).join("-");return"".concat(e.name,"_").concat(e.toString().length,"_").concat(n)}function F(e,t){var n=t.defaultData,a=Object(c.useState)(n||{}),r=Object(j.a)(a,2),i=r[0],s=r[1],l=Object(c.useState)(!1),d=Object(j.a)(l,2),u=d[0],b=d[1],x=Object(c.useState)(null),f=Object(j.a)(x,2),O=f[0],g=f[1],m=Object(c.useRef)(),v=Object(c.useRef)();function y(){return(y=Object(h.a)(p.a.mark((function t(n,a){var c,r,o,l,d,j,u,h,x,f;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a.onError,r=a.onSuccess,o=a.updateQuery,l=a.title,d=void 0===l?"\u8bf7\u6c42":l,j=a.cachePolicy,u=void 0===j?"none":j,h=a.isUpdate,x=void 0!==h&&h,v.current={key:P(e,n),policy:u},f=!x&&H.get(v.current.key,v.current.policy)){t.next=9;break}return b(!0),g(null),t.next=8,e(n).then((function(e){return H.set(v.current.key,e,v.current.policy),e})).catch((function(e){m.current&&(b(!1),g(e.message),c&&c({type:"error",message:"".concat(e.message||e.msg)}))}));case 8:f=t.sent;case 9:if(!f){t.next=16;break}if(m.current){t.next=12;break}return t.abrupt("return");case 12:r&&r({type:"success",message:"".concat(d,"\u6210\u529f")},f),b(!1),o&&(f=o(i,f,n)),s(f);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){return m.current=!0,function(){m.current=!1}}),[]),{fetch:function(e,t){return y.apply(this,arguments)},data:i,loading:u,error:O,setError:g,updateCache:function(e){var t=e(Object(o.a)({},i));v.current&&H.set(v.current.key,t,v.current.policy),m.current&&s(t)},setLoading:b}}function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=F(e,n);return Object(o.a)(Object(o.a)({},a),{},{fetch:function(e,c){a.fetch(Object(o.a)(Object(o.a)({},t),e),Object(o.a)(Object(o.a)({},n),c))}})}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=F(e,n),r=n.defaultData,i=Object(c.useRef)();return Object(c.useEffect)((function(){var e=i.current||!r||0==Object.keys(r).length;i.current=!0,e&&(n.stop||(n.hold?a.setLoading(!0):a.fetch(t,n)))}),I(t)),Object(o.a)(Object(o.a)({},a),{},{fetchMore:function(e,c,r){a.fetch(Object(o.a)(Object(o.a)({},t),e),Object(o.a)(Object(o.a)({updateQuery:r},n),c))},update:function(){a.fetch(t,Object(o.a)(Object(o.a)({},n),{},{isUpdate:!0}))}})}var D=function(e){var t=e.message,n=void 0===t?{type:"",message:""}:t,r=e.time,i=void 0===r?2e3:r,s=Object(c.useState)(!1),o=Object(j.a)(s,2),d=o[0],u=o[1];return Object(c.useEffect)((function(){n.message&&(u(!0),setTimeout((function(){u(!1)}),i))}),[n.message]),Object(a.jsx)(l.a,{fit:!0,dangerouslySetInlineStyle:{__style:{bottom:50,left:"50%",transform:"translateX(-50%)"}},paddingX:1,position:"fixed",children:d&&Object(a.jsx)(l.s,{text:n.message||""})})};var G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=Object(c.useRef)({fn:e,timer:null}),r=a.current;return Object(c.useEffect)((function(){r.fn=e}),[e]),Object(c.useCallback)((function(){for(var e=this,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];r.timer&&clearTimeout(r.timer),r.timer=setTimeout((function(){var t;(t=r.fn).call.apply(t,[e].concat(a))}),t)}),n)};function B(e){var t,n=e.data,c=e.onChange;return"Image"==n.type?Object(a.jsx)(U,{data:n,onChange:c}):Object(a.jsx)(M,{data:n,onChange:c,type:null===(t=n.type)||void 0===t?void 0:t.toLowerCase()})}function M(e){var t=e.data,n=e.onChange,r=e.type,i=void 0===r?"string":r,s=Object(c.useState)(t.value),d=Object(j.a)(s,2),u=d[0],b=d[1],p=N(_),h=p.fetch,x=(p.error,p.loading),f=G((function(e){h(Object(o.a)(Object(o.a)({},t),{},{value:e.value}),{onSuccess:function(){n()}})}),500);return Object(a.jsx)(l.a,{display:"flex",wrap:!0,children:Object(a.jsxs)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:[Object(a.jsx)(l.r,{name:t.name,label:t.name,id:t.name,onChange:function(e){b(e.value),f(e)},value:u,helperText:t.note,type:i}),Object(a.jsx)(l.o,{show:x,accessibilityLabel:"Example spinner"})]})})}function U(e){var t=e.data,n=e.onChange,r=Object(c.useState)(t.value),i=Object(j.a)(r,2),s=i[0],d=i[1],u=N(_),b=u.fetch,p=(u.error,u.loading);function h(e){var a=new FormData;a.append("file",e),f.a.post("".concat(m,"/file/uploadfile"),a,{onUploadProgress:function(e){Math.floor(e.loaded/e.total*100)}}).then((function(e){var a=e.data.data.url;b(Object(o.a)(Object(o.a)({},t),{},{value:a}),{onSuccess:function(e,t){d(a),n()}})}))}return Object(a.jsx)(l.a,{display:"flex",wrap:!0,children:Object(a.jsxs)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:[Object(a.jsx)(l.q,{size:"sm",children:t.name}),Object(a.jsx)("img",{src:Y(s),height:50,width:50,alt:t.not}),Object(a.jsx)("input",{type:"file",onChange:function(e){!function(e){var t,n=Object(E.a)(e);try{for(n.s();!(t=n.n()).done;)h(t.value)}catch(a){n.e(a)}finally{n.f()}}(e.target.files)}}),Object(a.jsx)(l.q,{size:"sm",children:t.note}),Object(a.jsx)(l.o,{show:p,size:"sm",accessibilityLabel:"Example spinner"})]})})}var V=function(e){var t,n=Object(c.useState)(""),r=Object(j.a)(n,2),i=r[0],s=(r[1],A(q)),o=s.data,d=s.error,u=(s.loading,Object(c.useContext)(X));return Object(a.jsx)(l.a,{padding:3,children:Object(a.jsx)(l.g,{justifyContent:"center",children:Object(a.jsxs)(l.a,{direction:"column",display:"flex",maxWidth:1200,width:"100%",wrap:!0,children:[Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(l.i,{accessibilityLevel:2,size:"md",children:"\u7f51\u7ad9\u8bbe\u7f6e"})}),Object(a.jsx)(D,{message:i}),Object(a.jsx)(l.a,{paddingX:1,paddingY:1,children:d&&Object(a.jsx)(l.d,{type:"error",iconAccessibilityLabel:"Error icon",message:d})}),null===(t=o.list)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(B,{data:e,onChange:function(e){u.update()}},e.id)}))]})})})};var W=function(e){return Object(a.jsxs)(l.a,{display:"flex",direction:"row",paddingY:2,children:[Object(a.jsx)(l.e,{span:2,children:Object(a.jsx)(l.a,{color:"lightGray",padding:1,children:Object(a.jsxs)(l.a,{color:"white",paddingY:2,children:[Object(a.jsx)(u.b,{to:"/system/",children:Object(a.jsx)(l.b,{text:"\u7f51\u7ad9\u8bbe\u7f6e",color:"transparent"})}),Object(a.jsx)(l.f,{}),Object(a.jsx)(u.b,{to:"/system/config",children:Object(a.jsx)(l.b,{text:"\u73af\u5883\u53d8\u91cf",color:"transparent"})})]})})}),Object(a.jsx)(l.e,{span:10,children:Object(a.jsx)(l.a,{color:"lightGray",padding:1,children:Object(a.jsx)(l.a,{color:"white",paddingY:2,overflow:"hidden",minHeight:800,children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{exact:!0,path:"/system/",component:V}),Object(a.jsx)(d.a,{path:"/system/config",component:z})]})})})})]})};function J(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(h.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/shop/shop/"+t.id);case 2:return n=e.sent,a=n.data,0==(c=a.data).attr.length&&(c.attr=[{}]),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/shop/add",Object(o.a)({},t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/shop/edit",Object(o.a)({},t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){return ne.apply(this,arguments)}function ne(){return(ne=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/shop/status",{id:t.id,status:1});case 2:return n=e.sent,a=n.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/shop/status",{id:t.id,status:0});case 2:return n=e.sent,a=n.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/shop/list",{params:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/shop/attr/edit",Object(o.a)({},t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=function(e){e.history;var t=e.page,n=e.onChange,c=e.total_page,r=void 0===c?0:c,i=Array.from(Array(r+1),(function(e,t){return t}));return 0==r?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)(l.a,{children:Object(a.jsx)(l.a,{display:"flex",justifyContent:"center",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.j,{icon:"arrow-back",size:"sm",color:"transparent",disabled:0==t,onClick:function(e){n({page:t-1})}}),i.map((function(e){return Object(a.jsx)(l.b,{text:e+1,size:"sm",color:t==e?"red":"transparent",onClick:function(t){n({page:e})}},e)})),Object(a.jsx)(l.j,{icon:"arrow-forward",size:"sm",color:"transparent",disabled:t==r,onClick:function(e){n({page:t+1})}})]})})})},de=n(33),je=n(34);function ue(){var e=Object(de.a)(["\n  display: flex;\n  border-bottom: 1px solid var(--g-colorGray150);\n"]);return ue=function(){return e},e}function be(){var e=Object(de.a)(["\n  border: none;\n  background: none;\n  width: 80px;\n  color: var(--g-colorRed100);\n  margin: 0 10px;\n"]);return be=function(){return e},e}var pe=je.a.input(be()),he=je.a.div(ue());function xe(e){var t=e.data,n=e.onChange,r=Object(c.useState)(+t.value),i=Object(j.a)(r,2),s=i[0],d=i[1],u=N(se),b=u.fetch,p=u.loading;function h(e){var a=Object(o.a)(Object(o.a)({},t),{},{value:e});b(a,{onSuccess:function(){d(e),n&&n(a)}})}return Object(a.jsxs)(he,{children:[Object(a.jsx)(l.q,{align:"left",children:t.name}),Object(a.jsx)(pe,{value:s,onChange:function(e){h(+e.target.value)},type:"number"}),Object(a.jsx)(l.j,{disabled:p,color:"red",icon:"add",size:"xs",onClick:function(e){h(s+1)}}),Object(a.jsx)(l.j,{disabled:p,color:"red",icon:"dash",size:"xs",onClick:function(e){h(s-1)}})]})}var fe=function(e){var t=e.num,n=e.data,c=e.onChange,i=r.a.useState(!1),s=Object(j.a)(i,2),o=s[0],d=s[1],u=r.a.useRef();return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(l.a,{display:"inlineBlock",ref:u,children:Object(a.jsx)(l.b,{accessibilityExpanded:!!o,accessibilityHaspopup:!0,onClick:function(){return d(!o)},text:t})}),o&&Object(a.jsx)(l.l,{children:Object(a.jsx)(l.h,{anchor:u.current,idealDirection:"down",onDismiss:function(){return d(!1)},positionRelativeToAnchor:!1,size:"xl",children:Object(a.jsx)(l.a,{padding:3,children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(a.jsx)(xe,{data:e,onChange:function(e){c&&c(e,t)}},e.id)}))})})})]})},Oe={};var ge=function(e){var t=e.location.pathname,n=new URLSearchParams(e.location.search),r=Object(c.useState)(""),i=Object(j.a)(r,2),s=i[0],o=i[1],d=A(re,{status:n.get("status")||0,keyword:s},{defaultData:"POP"==e.history.action&&Oe[t]}),b=d.data,p=d.update,h=d.loading,x=d.fetchMore,f=d.updateCache,O=N(te,{},{onSuccess:function(){return p()}}).fetch;Oe[t]=b;var g=b.list,m=b.page,v=b.total_page,y=b.page_size;return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(l.a,{padding:2,children:Object(a.jsx)(l.a,{width:250,marginStart:"auto",children:Object(a.jsx)(l.n,{accessibilityLabel:"\u641c\u7d22",id:"searchField",onChange:function(e){var t=e.value;return o(t)},placeholder:"\u641c\u7d22",value:s})})}),Object(a.jsxs)(l.p,{children:[Object(a.jsx)(l.p.Header,{sticky:!0,children:Object(a.jsxs)(l.p.Row,{children:[Object(a.jsx)(l.p.HeaderCell,{children:Object(a.jsx)(l.q,{weight:"bold",children:"\u56fe\u7247"})}),Object(a.jsx)(l.p.HeaderCell,{children:Object(a.jsx)(l.q,{weight:"bold",children:"\u5546\u54c1\u540d"})}),Object(a.jsx)(l.p.HeaderCell,{children:Object(a.jsx)(l.q,{weight:"bold",children:"\u4ef7\u683c"})}),Object(a.jsx)(l.p.HeaderCell,{children:Object(a.jsx)(l.q,{weight:"bold",children:"\u4ee3\u7406\u5546\u54c1\u540d"})}),Object(a.jsx)(l.p.HeaderCell,{children:Object(a.jsx)(l.q,{weight:"bold",children:"\u4ee3\u7406\u4ef7\u683c"})}),Object(a.jsx)(l.p.HeaderCell,{children:Object(a.jsx)(l.q,{weight:"bold",children:"\u5e93\u5b58"})}),Object(a.jsx)(l.p.HeaderCell,{children:Object(a.jsx)(l.q,{weight:"bold",children:"\u7f16\u8f91"})})]})}),Object(a.jsx)(l.p.Body,{children:null===g||void 0===g?void 0:g.map((function(e,t){var n;return Object(a.jsxs)(l.p.Row,{children:[Object(a.jsx)(l.p.Cell,{children:Object(a.jsxs)(l.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(l.a,{width:80,children:e.photo&&Object(a.jsx)(l.m,{rounding:2,wash:!0,children:Object(a.jsx)(l.k,{alt:"Luna",src:Y(null===(n=e.photo[0])||void 0===n?void 0:n.url),naturalHeight:50,naturalWidth:50})})}),Object(a.jsx)(l.a,{paddingX:1,children:Object(a.jsxs)(l.q,{children:["+",e.photo.length]})})]})}),Object(a.jsx)(l.p.Cell,{children:Object(a.jsx)(l.q,{children:e.name})}),Object(a.jsx)(l.p.Cell,{children:Object(a.jsx)(l.q,{children:e.price})}),Object(a.jsx)(l.p.Cell,{children:Object(a.jsx)(l.q,{children:e.proxy_name})}),Object(a.jsx)(l.p.Cell,{children:Object(a.jsx)(l.q,{children:e.proxy_price})}),Object(a.jsx)(l.p.Cell,{children:Object(a.jsx)(fe,{num:e.attr_num,data:e.attr,onChange:function(e,n){f((function(a){a.list[t].attr[n]=e;var c=a.list[t].attr.reduce((function(e,t){return Number(e)+Number(t.value)}),0);return a.list[t].attr_num=c.toString(),a}))}})}),Object(a.jsx)(l.p.Cell,{children:Object(a.jsxs)(l.a,{display:"flex",children:[Object(a.jsx)(u.b,{to:"/shop/edit/".concat(e.id),children:Object(a.jsx)(l.j,{icon:"edit"})}),0===e.status&&Object(a.jsx)(l.j,{icon:"cancel",onClick:function(t){O({id:e.id})}})]})})]},e.id)}))})]}),Object(a.jsx)(l.o,{show:h,accessibilityLabel:"\u52a0\u8f7d\u4e2d",size:"sm"}),Object(a.jsx)(le,{page:m,page_size:y,total_page:v,onChange:x})]})},me=n(95),ve=Object(c.forwardRef)((function(e,t){var n=e.defaultValue,r=e.onChange,i=e.com,s=Object(me.a)(e,["defaultValue","onChange","com"]),l=Object(c.useState)(n),d=Object(j.a)(l,2),u=d[0],b=d[1],p=i;return Object(a.jsx)(p,Object(o.a)(Object(o.a)({},s),{},{id:s.name,onChange:function(e){b(e.value),r&&r(e)},value:u,ref:t}))})),ye=n(20);function we(){var e=Object(de.a)(["\n  width:200px;\n  img{\n    width:100%;\n  }\n"]);return we=function(){return e},e}var Ce=je.a.div(we());var ke=function(e){var t=e.name,n=e.formCtx,r=e.label,i=(e.type,n.control),s=n.register,o=Object(ye.a)({control:i,name:t}),d=o.fields,j=o.append,u=(o.prepend,o.remove),b=(o.swap,o.move,o.insert,Object(c.useRef)());function p(e){var t=new FormData;t.append("file",e),f.a.post("".concat(m,"/file/uploadfile"),t,{onUploadProgress:function(e){Math.floor(e.loaded/e.total*100)}}).then((function(e){var t=e.data;j(t.data)}))}return Object(c.useEffect)((function(){if(d){var e=[];d.map((function(t){e.push({url:t.url,pre:100})}))}}),[d]),Object(a.jsxs)(a.Fragment,{children:[d.map((function(e,n){return Object(a.jsx)("div",{style:{display:"none"},children:Object(a.jsx)("input",{name:"".concat(t,"[").concat(n,"].url"),defaultValue:e.url,ref:s()})},e.id)})),Object(a.jsx)(l.a,{display:"flex",marginBottom:2,wrap:!0,children:d.map((function(e,t){return Object(a.jsxs)(l.a,{position:"relative",color:"lightGray",margin:1,children:[Object(a.jsxs)(Ce,{children:[Object(a.jsx)("img",{src:"".concat(m).concat(e.url)}),Object(a.jsx)(l.a,{position:"absolute",color:"white",bottom:!0,children:Object(a.jsx)(l.q,{size:"sm",children:e.url})})]}),Object(a.jsx)(l.a,{position:"absolute",top:!0,right:!0,children:Object(a.jsx)(l.j,{accessibilityLabel:"clear",iconColor:"darkGray",icon:"clear",onClick:function(e){return u(t)}})})]},e.url)}))}),Object(a.jsx)(l.b,{text:r||"\u4e0a\u4f20\u6587\u4ef6",onClick:function(e){b.current.click()},inline:!0}),Object(a.jsx)("input",{type:"file",multiple:!0,ref:b,style:{display:"none"},onChange:function(e){!function(e){console.log(e);var t,n=Object(E.a)(e);try{for(n.s();!(t=n.n()).done;)p(t.value)}catch(a){n.e(a)}finally{n.f()}}(e.target.files)}})]})};var Se=function(e){var t=e.name,n=e.formCtx,r=n.control,i=n.register,s=Object(ye.a)({control:r,name:t}),o=s.fields,d=s.append,j=(s.prepend,s.remove),u=(s.swap,s.move,s.insert);return Object(c.useEffect)((function(){0==o.length&&d({})}),[]),Object(a.jsx)(a.Fragment,{children:o.map((function(e,n){return e&&Object(a.jsxs)(l.a,{display:"flex",wrap:!0,children:[Object(a.jsx)(l.a,{column:3,paddingX:3,paddingY:3,children:Object(a.jsx)(ve,{com:l.r,name:"".concat(t,"[").concat(n,"].name"),defaultValue:e.name,label:"\u540d\u79f0",ref:i()})}),Object(a.jsx)(l.a,{column:2,paddingX:3,paddingY:3,children:Object(a.jsx)(ve,{com:l.r,name:"".concat(t,"[").concat(n,"].value"),defaultValue:e.value,label:"\u503c",type:"number",ref:i()})}),Object(a.jsx)(l.a,{marginTop:9,children:Object(a.jsx)(l.j,{accessibilityLabel:"clear",icon:"cancel",onClick:function(e){j(n)}})}),Object(a.jsx)(l.a,{marginTop:9,children:Object(a.jsx)(l.j,{accessibilityLabel:"\u6dfb\u52a0",icon:"add",onClick:function(e){n==o.length-1?d({}):u(n+1,{})}})})]},e.id)}))})},Ye=n(94),Xe=n.n(Ye);n(233);var Le=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useRef)(),Object(a.jsx)("div",{children:Object(a.jsx)(Xe.a,{theme:"snow",modules:{toolbar:[["bold","italic","underline"],["blockquote","code-block"],[{header:1},{header:2}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{align:[]}],[{color:[]},{background:[]}],["link","image"],["clean"]]},value:n,onChange:r,ref:function(e){e}})})};var ze=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],i=n[1],s=e.match.params.id,d="undefined"!==typeof s,u=Object(ye.b)(),b=u.control,p=u.register,h=u.reset,x=u.handleSubmit,f=u.watch,O={control:b,register:p,reset:h,handleSubmit:x,watch:f},g=N(d?$:K,null,{onSuccess:function(t,n){i(t),e.history.replace("/shop")}}),m=g.fetch,v=g.error,y=N(ae,{id:s},{onSuccess:i}).fetch,w=A(J,{id:s},{stop:!s,onSuccess:function(e,t){return h(t)}}).data;return Object(a.jsx)(l.a,{padding:3,children:Object(a.jsx)(l.g,{justifyContent:"center",children:Object(a.jsxs)(l.a,{direction:"column",display:"flex",maxWidth:1200,width:"100%",wrap:!0,children:[Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(l.i,{accessibilityLevel:2,size:"md",children:"\u6dfb\u52a0\u5546\u54c1"})}),Object(a.jsx)(D,{message:r}),Object(a.jsx)(l.a,{paddingX:1,paddingY:1,children:v&&Object(a.jsx)(l.d,{type:"error",iconAccessibilityLabel:"Error icon",message:v})}),Object(a.jsxs)("form",{onSubmit:x((function(e){return m(d?Object(o.a)({id:s},e):e)})),children:[Object(a.jsx)(l.a,{display:"flex",wrap:!0,children:Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(ve,{com:l.r,name:"brand",label:"\u54c1\u724c",ref:p()})})}),Object(a.jsxs)(l.a,{display:"flex",wrap:!0,children:[Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(ve,{com:l.r,name:"name",label:"\u540d\u5b57",ref:p()})}),Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(ve,{com:l.r,name:"proxy_name",label:"\u4ee3\u7406\u540d\u5b57",ref:p()})})]}),Object(a.jsxs)(l.a,{display:"flex",wrap:!0,children:[Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(ve,{com:l.r,name:"price",label:"\u4ef7\u683c",type:"number",ref:p()})}),Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(ve,{com:l.r,name:"proxy_price",label:"\u4ee3\u7406\u4ef7\u683c",type:"number",ref:p()})})]}),Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(ke,{name:"photo",label:"\u4e0a\u4f20\u5c01\u9762",formCtx:O})}),Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(l.i,{accessibilityLevel:2,size:"sm",children:"\u9644\u52a0\u5c5e\u6027"})}),Object(a.jsx)(Se,{name:"attr",formCtx:O}),Object(a.jsx)(Le,{}),Object(a.jsxs)(l.a,{display:"flex",justifyContent:"end",paddingX:3,paddingY:3,marginTop:2,children:[Object(a.jsx)(l.a,{margin:1,children:Object(a.jsx)(l.b,{text:"\u8fd4\u56de",inline:!0,onClick:function(t){return e.history.goBack()}})}),1==w.status&&Object(a.jsx)(l.a,{margin:1,children:Object(a.jsx)(l.b,{text:"\u4ece\u56de\u6536\u7ad9\u6062\u590d",inline:!0,onClick:function(e){return y()}})}),Object(a.jsx)(l.a,{margin:1,children:Object(a.jsx)(l.b,{text:"\u4fdd\u5b58\u5546\u54c1",color:"red",inline:!0,type:"submit"})})]})]})]})})})};var Ee=function(e){return Object(a.jsxs)(l.a,{display:"flex",direction:"row",paddingY:2,children:[Object(a.jsx)(l.e,{span:2,children:Object(a.jsx)(l.a,{color:"lightGray",padding:1,children:Object(a.jsxs)(l.a,{color:"white",paddingY:2,children:[Object(a.jsx)(u.c,{exact:!0,activeClassName:"selected",to:"/shop",children:Object(a.jsx)(l.b,{text:"\u5546\u54c1\u5217\u8868",color:"transparent"})}),Object(a.jsx)(l.f,{}),Object(a.jsx)(u.c,{activeClassName:"selected",to:"/shop/add",children:Object(a.jsx)(l.b,{text:"\u6dfb\u52a0\u5546\u54c1",color:"transparent"})}),Object(a.jsx)(l.f,{}),Object(a.jsx)(u.c,{activeClassName:"selected",to:"/shop/recovery?status=1",children:Object(a.jsx)(l.b,{text:"\u56de\u6536\u7ad9",color:"transparent"})})]})})}),Object(a.jsx)(l.e,{span:10,children:Object(a.jsx)(l.a,{color:"lightGray",padding:1,children:Object(a.jsx)(l.a,{color:"white",paddingY:2,minHeight:900,children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/shop/add",component:ze}),Object(a.jsx)(d.a,{path:"/shop/edit/:id",component:ze}),Object(a.jsx)(d.a,{path:"/shop/recovery",component:ge}),Object(a.jsx)(d.a,{path:"/shop",component:ge})]})})})})]})};var qe=function(){return Object(a.jsx)(l.a,{padding:12,children:Object(a.jsx)(l.i,{align:"center",children:"\u4e3b\u9875\u6b63\u5728\u5f00\u53d1\u4e2d!"})})};var Te=function(e){var t=A(w,null,{onError:function(t,n){e("/signin")},onSuccess:function(t,n){"admin"!==n.role&&e("/signin")}});return{data:t.data,update:t.update,error:t.error,loading:t.loading}},_e=r.a.createContext(null);var Re=function(e){var t=A(k,{},{cachePolicy:"local"}),n=t.data,c=t.update,r=(t.loading,Te(e.history.push)),i=r.data,s=r.update;return i.id?Object(a.jsx)(X.Provider,{value:Object(o.a)(Object(o.a)({},n),{},{update:c}),children:Object(a.jsxs)(_e.Provider,{value:Object(o.a)(Object(o.a)({},i),{},{update:s}),children:[Object(a.jsx)(L,Object(o.a)({},e)),Object(a.jsxs)(d.c,{location:e.location,children:[Object(a.jsx)(d.a,{path:"/system",component:W}),Object(a.jsx)(d.a,{path:"/shop",component:Ee}),Object(a.jsx)(d.a,{path:"/",component:qe})]})]})}):Object(a.jsx)(l.a,{paddingY:12,children:Object(a.jsx)(l.o,{show:!0,accessibilityLabel:"\u83b7\u53d6\u7528\u6237\u6570\u636e"})})};var He=function(e){var t=e.history,n=N(v,null,{onSuccess:function(){t.push("/shop")}}),c=n.fetch,r=n.error,i=n.loading,s=Object(ye.b)(),o=s.register,d=s.handleSubmit;return s.errors,Object(a.jsx)(l.a,{display:"flex",justifyContent:"center",height:"100%",children:Object(a.jsxs)(l.a,{borderStyle:"sm",display:"flex",margin:"auto",marginTop:"auto",wrap:!0,width:"100%",direction:"column",maxWidth:800,children:[Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(l.i,{size:"sm",accessibilityLevel:2,children:"\u767b\u5f55\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"})}),Object(a.jsx)(l.a,{paddingX:1,paddingY:1,children:r&&Object(a.jsx)(l.d,{type:"error",iconAccessibilityLabel:"Error icon",message:r})}),Object(a.jsxs)("form",{onSubmit:d((function(e){c(e)})),children:[Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(ve,{com:l.r,name:"name",label:"\u8d26\u53f7",placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7",ref:o})}),Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(ve,{com:l.r,name:"password",label:"\u5bc6\u7801",type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",ref:o})}),Object(a.jsx)(l.o,{show:i,accessibilityLabel:"\u767b\u5f55\u4e2d",size:"sm"}),Object(a.jsx)(l.a,{flex:"grow",paddingX:3,paddingY:3,children:Object(a.jsx)(l.a,{justifyContent:"end",marginStart:-1,marginEnd:-1,marginTop:-1,marginBottom:-1,display:"flex",wrap:!0,children:Object(a.jsx)(l.a,{paddingX:1,paddingY:1,children:Object(a.jsx)(l.b,{text:"\u767b\u5f55",color:"red",size:"lg",type:"submit"})})})})]})]})})};var Ie=function(e){return Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/signin",component:He}),Object(a.jsx)(d.a,{path:"/",component:Re})]})},Pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,237)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(234),n(235);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(u.a,{children:Object(a.jsx)(Ie,{})})}),document.getElementById("root")),Pe()}},[[236,1,2]]]);
//# sourceMappingURL=main.a5014ae8.chunk.js.map