(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),i=c.n(n),a=c(1),s=(c(9),c(10),c(11),c(4)),d=c(0),b=function(t){var e=t.tabs,c=Object(a.useState)(e[0]),n=Object(s.a)(c,2),i=n[0],b=n[1],o=e.find((function(t){return i.id===t.id}))||e[0],r=function(t){i.id!==t.id&&function(t){b(t)}(t)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h1",{className:"title",children:["Selected tab is"," ",i.title]}),Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{className:i.id===t.id?"is-active":"","data-cy":"Tab",children:Object(d.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(e){r(t),e.preventDefault()},children:t.title})},t.id)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:o.content})]})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],r=function(){return Object(d.jsx)("div",{className:"section",children:Object(d.jsx)(b,{tabs:o})})};i.a.render(Object(d.jsx)(r,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.db60d600.chunk.js.map