(this["webpackJsonpfrontend-react-pokemon"]=this["webpackJsonpfrontend-react-pokemon"]||[]).push([[0],{47:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n.n(s),i=n(20),r=n.n(i),l=n(5),o=n.n(l),j=n(7),u=n(4),b=n(8),d=n.n(b),p=n(66),h=(n(47),function(e){var t=e.name,n=Object(s.useState)(null),a=Object(u.a)(n,2),i=a[0],r=a[1];return Object(s.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:n=e.sent,console.log(n.data),r(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(c.jsx)("div",{class:"pokemon-card",children:i?Object(c.jsxs)("div",{children:[Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("h3",{children:i.name})}),Object(c.jsx)("li",{className:"image",children:Object(c.jsx)("img",{src:i.sprites.front_default,alt:"Afbeelding ".concat(i.name)})}),Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:"Moves: "}),i.moves.length]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:"Weight: "}),i.weight]})]}),Object(c.jsxs)("ul",{className:"abilities",children:[Object(c.jsx)("li",{children:Object(c.jsxs)("h4",{children:[Object(c.jsx)(p.a,{}),"Abilities"]})}),i.abilities.map((function(e){var t=e.ability;return Object(c.jsx)("li",{children:t.name})}))]})]}):Object(c.jsx)("span",{className:"loading",children:"loading..."})})}),O=(n(52),n(67)),x=n(68),f=(n(53),function(e){var t=e.previousUrl,n=e.nextUrl,s=e.setUrl;return Object(c.jsxs)("div",{className:"nav-buttons",children:[Object(c.jsx)("button",{type:"button",className:"previous",disabled:!t&&!0,onClick:function(){t&&s(t)},children:Object(c.jsxs)("span",{children:[Object(c.jsx)(O.a,{}),"Vorige"]})}),Object(c.jsx)("button",{type:"button",className:"next",disabled:!n&&!0,onClick:function(){n&&s(n)},children:Object(c.jsxs)("span",{children:["Volgende",Object(c.jsx)(x.a,{})]})})]})}),m=n.p+"static/media/pokemon-logo.03c029a4.png";var v=function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(null),r=Object(u.a)(i,2),l=r[0],b=r[1],p=Object(s.useState)(null),O=Object(u.a)(p,2),x=O[0],v=O[1],g=Object(s.useState)("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"),k=Object(u.a)(g,2),y=k[0],w=k[1];return Object(s.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(y);case 3:t=e.sent,b(t.data.previous),v(t.data.next),a(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[y]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{children:Object(c.jsx)("img",{alt:"pokemon-logo",src:m})}),Object(c.jsx)(f,{previousUrl:l,nextUrl:x,setUrl:w}),Object(c.jsx)("ul",{class:"pokemon-list",children:n?n.results.map((function(e){var t=e.name;return Object(c.jsx)("li",{children:Object(c.jsx)(h,{name:t})},t)})):Object(c.jsx)("h1",{children:"loading..."})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),g()}},[[54,1,2]]]);
//# sourceMappingURL=main.c5a71e03.chunk.js.map