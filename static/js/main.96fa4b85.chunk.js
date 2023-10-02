(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=(c(33),c(34),c(7)),s=c(3),r=c(2),j=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("h1",{className:"title",children:"Home Page"})})},i=c(22),l=c(4),o=c(0),d=c(9),b=c.n(d),h=function(e){var t=e.person,c=t.name,n=t.sex,j=t.born,i=t.died,l=t.motherName,o=t.fatherName,d=t.mother,h=t.father,O=Object(s.r)().slug||"";return Object(r.jsxs)("tr",{"data-cy":"person",className:b()({"has-background-warning":O===t.slug}),children:[Object(r.jsx)("td",{children:Object(r.jsx)(a.b,{to:"../".concat(t.slug),className:b()({"has-text-danger":"f"===n}),children:c})}),Object(r.jsx)("td",{children:n}),Object(r.jsx)("td",{children:j}),Object(r.jsx)("td",{children:i}),Object(r.jsx)("td",{children:l?d?Object(r.jsx)(a.b,{className:b()({"has-text-danger":l}),to:"../".concat(null===d||void 0===d?void 0:d.slug),children:l}):"".concat(l):"-"}),Object(r.jsx)("td",{children:o?h?Object(r.jsx)(a.b,{className:b()({"has-text-safe":o}),to:"../".concat(null===h||void 0===h?void 0:h.slug),children:o}):"".concat(o):"-"})]})},O=function(e){var t=e.people;return Object(r.jsx)(r.Fragment,{children:t&&t.map((function(e){return Object(r.jsx)(h,{person:e},e.slug)}))})};function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(36);var u=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(o.useState)(),s=Object(l.a)(a,2),j=s[0],d=s[1],b=Object(o.useState)(!0),h=Object(l.a)(b,2),m=h[0],p=h[1];Object(o.useEffect)((function(){p(!0),x().then(n).catch((function(e){throw d("Something went wrong"),e})).finally((function(){p(!1)}))}),[]);var f=null===c||void 0===c?void 0:c.map((function(e){var t=c.find((function(t){return t.name===e.motherName})),n=c.find((function(t){return t.name===e.fatherName}));return Object(i.a)(Object(i.a)({},e),{},{mother:t,father:n})})),v=!c.length&&!j&&!m,g=j&&!m,N=!m&&!g&&!!c.length;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"title",children:"People Page"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsxs)("div",{className:"box table-container",children:[g&&Object(r.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:j}),v&&Object(r.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),m&&Object(r.jsx)(u,{}),N&&Object(r.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Sex"}),Object(r.jsx)("th",{children:"Born"}),Object(r.jsx)("th",{children:"Died"}),Object(r.jsx)("th",{children:"Mother"}),Object(r.jsx)("th",{children:"Father"})]})}),Object(r.jsx)("tbody",{children:Object(r.jsx)(O,{people:f})})]})]})})]})},p=(c(37),function(e){var t=e.isActive;return b()("navbar-item",{"has-background-grey-lighter":t})}),f=function(){return Object(r.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(a.c,{to:"/",className:p,children:"Home"}),Object(r.jsx)(a.c,{to:"/people",className:p,children:"People"})]})})})},v=function(){return Object(r.jsxs)("div",{"data-cy":"app",children:[Object(r.jsx)(f,{}),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)(s.b,{})})]})},g=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})},N=function(){return Object(r.jsx)(a.a,{children:Object(r.jsx)(s.e,{children:Object(r.jsxs)(s.c,{path:"/",element:Object(r.jsx)(v,{}),children:[Object(r.jsx)(s.c,{index:!0,element:Object(r.jsx)(j,{})}),Object(r.jsx)(s.c,{path:"people",children:Object(r.jsx)(s.c,{path:":slug?",element:Object(r.jsx)(m,{})})}),Object(r.jsx)(s.c,{path:"home",element:Object(r.jsx)(s.a,{to:"../.."})}),Object(r.jsx)(s.c,{path:"*",element:Object(r.jsx)(g,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(r.jsx)(N,{}))}},[[38,1,2]]]);
//# sourceMappingURL=main.96fa4b85.chunk.js.map