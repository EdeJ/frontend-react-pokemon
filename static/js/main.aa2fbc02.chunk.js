(this["webpackJsonpfrontend-react-pokemon"]=this["webpackJsonpfrontend-react-pokemon"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n.n(s),r=n(18),i=n.n(r),o=n(5),l=n.n(o),j=n(7),u=n(4),b=n(8),p=n.n(b),d=(n(46),function(e){var t=e.name,n=Object(s.useState)(null),a=Object(u.a)(n,2),r=a[0],i=a[1];return Object(s.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:n=e.sent,console.log(n.data),i(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(c.jsx)("div",{class:"pokemon-card",children:r?Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("h3",{children:r.name})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:r.sprites.front_default,alt:"Afbeelding ".concat(r.name)})}),Object(c.jsxs)("li",{children:["Moves: ",r.moves.length]}),Object(c.jsxs)("li",{children:["Weight: ",r.weight]}),Object(c.jsxs)("li",{children:["Abilities:",Object(c.jsx)("ul",{children:r.abilities.map((function(e){var t=e.ability;return Object(c.jsx)("li",{children:t.name})}))})]})]}):Object(c.jsx)("span",{children:"loading..."})})}),h=(n(47),n(66)),O=n(67),f=(n(48),function(e){var t=e.previousUrl,n=e.nextUrl,s=e.setUrl;return Object(c.jsxs)("div",{className:"nav-buttons",children:[Object(c.jsx)("button",{type:"button",className:"previous",disabled:!t&&!0,onClick:function(){t&&s(t)},children:Object(c.jsxs)("span",{children:[Object(c.jsx)(h.a,{}),"Vorige"]})}),Object(c.jsx)("button",{type:"button",className:"next",disabled:!n&&!0,onClick:function(){n&&s(n)},children:Object(c.jsxs)("span",{children:["Volgende",Object(c.jsx)(O.a,{})]})})]})});var x=function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(null),i=Object(u.a)(r,2),o=i[0],b=i[1],h=Object(s.useState)(null),O=Object(u.a)(h,2),x=O[0],v=O[1],m=Object(s.useState)("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"),g=Object(u.a)(m,2),k=g[0],y=g[1];return Object(s.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(k);case 3:t=e.sent,b(t.data.previous),v(t.data.next),a(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{previousUrl:o,nextUrl:x,setUrl:y}),Object(c.jsx)("ul",{class:"pokemon-list",children:n?n.results.map((function(e){var t=e.name;return Object(c.jsx)("li",{children:Object(c.jsx)(d,{name:t})},t)})):Object(c.jsx)("h1",{children:"loading..."})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),v()}},[[53,1,2]]]);
//# sourceMappingURL=main.aa2fbc02.chunk.js.map