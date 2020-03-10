(this.webpackJsonphookz=this.webpackJsonphookz||[]).push([[0],{107:function(e,a,t){e.exports=t(184)},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},184:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(2),o=t.n(l);t(112),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=t(68),s=t(19),m=(t(113),t(73)),i="".concat("https://api.hookz.dev","/webhooks"),u=function(){Object(m.a)(i).headers({"Access-Control-Allow-Origin":"*",crossDomain:!0}).post()},d=function(e){Object(m.a)("".concat(i,"/").concat(e,"/data")).headers({"Access-Control-Allow-Origin":"*",crossDomain:!0}).get()};var h=function(){return c.a.createElement("div",{className:"col-md-12 home"},c.a.createElement("h1",{className:"d-block mb-5"},"Webhooks tester is a free online tool for helping developers test/debug web hooks and other types of HTTP requests."),c.a.createElement("span",{className:"d-block mb-5 caption"},"To get started, click the button below to generate a URL to test your webhook requests."),c.a.createElement("button",{onClick:function(){u().json((function(e){e.id.name&&window.location.replace("/".concat(e.id.name))})).catch((function(){console.log("error making request")}))},className:"btn-custom"},c.a.createElement("span",null,"Create New Webhook")))},E=(t(114),t(48)),b=(t(115),t(45)),f=t.n(b),p=(t(116),function(e){var a=e.details,t=e.selectedWebhookIndex,n=JSON.parse(a.data);return c.a.createElement("div",null,a.id&&c.a.createElement("div",{className:"webhook-data-content"},c.a.createElement("p",{className:"selected-index"},"#",t),c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,n.method),c.a.createElement("td",null,n.url)),c.a.createElement("tr",null,c.a.createElement("td",null,"Date"),c.a.createElement("td",null,a.created_at)),c.a.createElement("tr",null,c.a.createElement("td",null,"Host"),c.a.createElement("td",null,n.ip)))),c.a.createElement("h3",{className:"headers"},"Headers"),c.a.createElement(f.a,{src:n.headers,theme:"ashes",iconStyle:"circle"}),c.a.createElement("h3",{className:"query"},"Query"),c.a.createElement(f.a,{src:n.query,theme:"google"}),c.a.createElement("h3",{className:"request-body"},"Request Body"),c.a.createElement(f.a,{src:n.body,theme:"greenscreen"})))}),v=t(194),N=t(103),k=t.n(N),w=t(193),g=t(192);var y=function(e){var a=e.webhook,t=e.select,n=e.index,l=e.active,o=JSON.parse(a.data);return c.a.createElement("li",{key:a.id,style:{cursor:"pointer"},onClick:function(){return t(a.id,n)},className:l?"selected":""},c.a.createElement("span",{className:"counter"},"#",n)," ",c.a.createElement("span",{className:"webhook-item-method webhook-item-method-".concat(o.method.toLowerCase())},o.method)," ",c.a.createElement("span",{className:"webhook-item-date"},c.a.createElement(v.a,{date:a.created_at})),c.a.createElement("br",null),c.a.createElement("span",{className:"webhook-item-http-version"},"HTTP Version: ",o.httpVersion))},x=function(){var e=g.a.Paragraph,a=g.a.Text,t=Object(s.f)().webhook,l="".concat("https://api.hookz.dev","/a/").concat(t),o=Object(n.useState)({}),r=Object(E.a)(o,2),m=r[0],i=r[1],u=Object(n.useState)({}),h=Object(E.a)(u,2),b=h[0],f=h[1],v=Object(n.useState)(1),N=Object(E.a)(v,2),x=N[0],j=N[1];Object(n.useEffect)((function(){w.a.locale(k.a),d(t).json((function(e){i(e);var a=e.find((function(a){return a.id===e[0].id}));f(a)})).catch((function(e){console.log("error getting all data ",e)}))}),[]);var q=function(e,a){var t=m.find((function(a){return a.id===e}));f(t),j(a)};return c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"webhooks-nav"},c.a.createElement("p",{className:"request-total"},c.a.createElement("span",null,m.length)," Total Requests"),c.a.createElement("ul",null,m.length>0&&m.map((function(e,a){return c.a.createElement(y,{key:e.id,select:q,webhook:e,index:a+1,active:a+1===x})})))),c.a.createElement("article",{className:"webhooks_content"},c.a.createElement("p",{className:"request-syntax"},"Here's your unique webhook URL. You can now make any kind of request.",c.a.createElement("span",null,c.a.createElement("b",null,c.a.createElement(e,{copyable:{text:l}},c.a.createElement(a,{strong:!0,code:!0},l))))),function(e){for(var a in e)if(e.hasOwnProperty(a))return!1;return!0}(b)?"No request data selected. You can now make any kind of request to ".concat(l):c.a.createElement(p,{details:b,selectedWebhookIndex:x})))};var j=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"site-wrap"},c.a.createElement("div",{className:"site-mobile-menu"},c.a.createElement("div",{className:"site-mobile-menu-header"},c.a.createElement("div",{className:"site-mobile-menu-close mt-3"},c.a.createElement("span",{className:"icon-close2 js-menu-toggle"}))),c.a.createElement("div",{className:"site-mobile-menu-body"})),c.a.createElement("header",{className:"site-navbar py-3",role:"banner"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-11 col-xl-2"},c.a.createElement("h1",{className:"mb-0"},c.a.createElement("a",{href:"/",className:"text-white h2 mb-0"},"Webhooks",c.a.createElement("span",{className:"text-primary"},"Tester")," "))),c.a.createElement("div",{className:"col-12 col-md-10 d-none d-xl-block"},c.a.createElement("nav",{className:"site-navigation position-relative text-right",role:"navigation"},c.a.createElement("ul",{className:"site-menu js-clone-nav mx-auto d-none d-lg-block"},c.a.createElement("li",{className:"active"},c.a.createElement("a",{href:"/"},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"About")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"Privacy")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"Github")),c.a.createElement("li",{className:"cta"},c.a.createElement("a",{href:"#",onClick:function(){u().json((function(e){e.id.name&&window.location.replace("/".concat(e.id.name))})).catch((function(){console.log("error making request")}))}},"New Webhook"))))),c.a.createElement("div",{className:"d-inline-block d-xl-none ml-md-0 mr-auto py-3"},c.a.createElement("a",{href:"#",className:"site-menu-toggle js-menu-toggle text-white"},c.a.createElement("span",{className:"icon-menu h3"}))))))),c.a.createElement("div",{className:"site-section site-hero"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:h}),c.a.createElement(s.a,{path:"/:webhook",exact:!0,component:x}))))))};o.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[107,1,2]]]);
//# sourceMappingURL=main.3ce168e6.chunk.js.map