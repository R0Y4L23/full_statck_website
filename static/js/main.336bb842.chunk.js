(this["webpackJsonprestaurant-reviews"]=this["webpackJsonprestaurant-reviews"]||[]).push([[0],{58:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(21),a=c.n(i),r=(c(57),c(58),c(97)),o=c(95),j=c(98),d=c(17),l=c(99),u=c(24),b=c(1),h=function(e){var t=e.Name,c=e.Cuisine,n=e.Borough,i=e.id;return Object(b.jsx)(s.a.Fragment,{children:Object(b.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6",children:Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)(l.a,{style:{width:"20rem",margin:"0.5rem"},children:Object(b.jsxs)(l.a.Body,{children:[Object(b.jsx)(l.a.Title,{children:t}),Object(b.jsx)(l.a.Subtitle,{className:"mb-2 text-muted",children:c}),Object(b.jsx)(l.a.Text,{children:n}),Object(b.jsx)(u.b,{to:"/result/".concat(i),children:Object(b.jsx)(l.a.Link,{children:"Learn More"})})]})})})})})},O=c(94),m=c(38),x=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(1),r=Object(d.a)(a,2),o=r[0],j=r[1],l=function(){m.get("https://enigmatic-river-29675.herokuapp.com/".concat(20*(o-1),"/20")).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))};return Object(n.useEffect)((function(){m.get("https://enigmatic-river-29675.herokuapp.com/".concat(20*(o-1),"/20")).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}),[o]),Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsxs)("div",{className:"row",children:[0===c.length&&Object(b.jsx)("div",{className:"w-100 d-flex justify-content-center",children:Object(b.jsx)(O.a,{animation:"border"})}),c.length>0&&c.map((function(e){return Object(b.jsx)(h,{Name:e.name,Cuisine:e.cuisine,Borough:e.borough,id:e._id},e._id)}))]}),Object(b.jsxs)("div",{className:"container text-center py-3",children:[Object(b.jsxs)("button",{type:"button",className:"btn btn-outline-success",onClick:function(){j(1===o?1:o-1),l()},children:["<-"," Previous"]}),Object(b.jsx)("p",{children:o}),Object(b.jsxs)("button",{type:"button",className:"btn btn-outline-info",onClick:function(){j(o+1),l()},children:["Next ","->"]})]})]})},f=c(96),g=c(52),p=c(38),v=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)([]),r=Object(d.a)(a,2),o=r[0],j=r[1],l=Object(n.useState)([]),u=Object(d.a)(l,2),m=u[0],x=u[1],v=Object(n.useState)("cuisine"),N=Object(d.a)(v,2),y=N[0],k=N[1],w=Object(n.useState)("Indian"),S=Object(d.a)(w,2),C=S[0],B=S[1];return Object(n.useEffect)((function(){p.get("https://enigmatic-river-29675.herokuapp.com/distinct/cuisine").then((function(e){j(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){p.get("https://enigmatic-river-29675.herokuapp.com/distinct/borough").then((function(e){x(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsxs)("div",{className:"row m-3",children:[Object(b.jsx)("div",{className:"col-md-4 d-flex justify-content-center m-md-0 m-1",children:Object(b.jsxs)(f.a,{children:[Object(b.jsx)(f.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Cuisine"}),Object(b.jsx)(f.a.Menu,{children:o.map((function(e,t){return Object(b.jsx)(f.a.Item,{onClick:function(){k("cuisine"),B(e)},children:e},t)}))})]})}),Object(b.jsx)("div",{className:"col-md-4 d-flex justify-content-center  m-md-0 m-1",children:Object(b.jsxs)(f.a,{children:[Object(b.jsx)(f.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Borough"}),Object(b.jsx)(f.a.Menu,{children:m.map((function(e,t){return Object(b.jsx)(f.a.Item,{onClick:function(){k("borough"),B(e)},children:e},t)}))})]})}),Object(b.jsx)("div",{className:"col-md-4 d-flex justify-content-center  m-md-0 m-1",children:Object(b.jsx)(g.a,{variant:"success",onClick:function(){i([]),p.get("https://enigmatic-river-29675.herokuapp.com/query/".concat(y,"/").concat(C)).then((function(e){i(e.data.records)})).catch((function(e){console.log(e)}))},children:"Apply and Search"})})]}),Object(b.jsxs)("div",{className:"row",children:[0===c.length&&Object(b.jsx)("div",{className:"w-100 d-flex justify-content-center",children:Object(b.jsx)(O.a,{animation:"border"})}),c.length>0&&c.map((function(e){return Object(b.jsx)(h,{Name:e.name,Cuisine:e.cuisine,Borough:e.borough,id:e._id},e._id)}))]})]})},N=c(8),y=c(38),k=function(){var e=Object(N.e)().id,t=Object(n.useState)(null),c=Object(d.a)(t,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){y.get("https://enigmatic-river-29675.herokuapp.com/".concat(e)).then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[e]),Object(b.jsxs)(s.a.Fragment,{children:[!i&&Object(b.jsx)("div",{className:"w-100 d-flex justify-content-center",children:Object(b.jsx)(O.a,{animation:"border"})}),i&&Object(b.jsxs)("div",{className:"container text-center mt-4",children:[Object(b.jsxs)("div",{children:["Name : ",i.name]}),Object(b.jsxs)("div",{children:["Cuisine : ",i.cuisine]}),Object(b.jsxs)("div",{children:["Borough : ",i.borough]}),Object(b.jsxs)("div",{children:["Address : ",i.address.building," , ",i.address.street]}),Object(b.jsx)("div",{children:"Grades :"}),i.grades.map((function(e,t){return Object(b.jsxs)("div",{children:["Grade ",t+1," : ",e.grade," , Score : ",e.score," , Date : ",e.date]})}))]})]})};var w=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(r.a,{bg:"dark",variant:"dark",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(r.a.Brand,{href:"#home",children:"Restaurant API Test"}),Object(b.jsxs)(j.a,{className:"me-auto",children:[Object(b.jsxs)(u.b,{to:"/",children:[" ",Object(b.jsx)(j.a.Link,{href:"#home",children:"All Restaurants"})]}),Object(b.jsxs)(u.b,{to:"/query",children:[" ",Object(b.jsx)(j.a.Link,{href:"#features",children:"Apply Query"})]})]})]})}),Object(b.jsx)(N.a,{path:"/",component:x,exact:!0}),Object(b.jsx)(N.a,{path:"/query",component:v,exact:!0}),Object(b.jsx)(N.a,{path:"/result/:id",component:k,exact:!0})]})})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.336bb842.chunk.js.map