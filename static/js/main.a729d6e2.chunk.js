(this["webpackJsonpportfolio-santiago-ruiz-ts"]=this["webpackJsonpportfolio-santiago-ruiz-ts"]||[]).push([[0],{21:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(28),c=n.n(s),r=n(6),l=n(59),o=n(3),j=(n(35),n(36),n.p+"static/media/crossHorizontal.862433b3.svg"),d=n.p+"static/media/crossVertical.fb791d70.svg",u=n(58),p=a.a.createContext({}),b=n(2);var m,g=function(){var e=Object(i.useContext)(p),t=function(){e.setDisplay("transitionMenu"),setTimeout((function(){return e.setDisplay("hideMenu")}),150)},n=function(n){e.setCategory(n),"showMenu"===e.display&&(e.handleRotation(),t())};return Object(i.useEffect)((function(){window.innerWidth<960&&e.setDisplay("hideMenu")}),[]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"topContainer",children:[Object(b.jsx)(r.b,{to:"/",onClick:function(){return n("default")},children:Object(b.jsx)("h1",{children:"SANTIAGO RUIZ"})}),Object(b.jsxs)("div",{className:"menuLogoContainer",children:[Object(b.jsx)("img",{src:j,alt:"menu"}),Object(b.jsx)(u.a.img,{src:d,alt:"menu",animate:{rotate:e.rotation},transition:{type:"tween"},onClick:function(){e.handleRotation(),"showMenu"===e.display?t():e.setDisplay("showMenu")}})]})]}),Object(b.jsx)("div",{className:e.display,children:Object(b.jsxs)("div",{className:"dropdownMenu",children:[Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)(r.b,{to:"/about",onClick:function(){return n("about")},children:["about"===e.category&&Object(b.jsx)("p",{className:"linkSelected",children:"About"}),"default"===e.category&&Object(b.jsx)("p",{children:"About"}),"about"!==e.category&&"default"!==e.category&&Object(b.jsx)("p",{className:"unpressedLink",children:"About"})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)(r.b,{to:"/industrialDesign",onClick:function(){return n("industrialDesign")},children:["industrialDesign"===e.category&&Object(b.jsx)("p",{className:"linkSelected",children:"Industrial Design"}),"default"===e.category&&Object(b.jsx)("p",{children:"Industrial Design"}),"industrialDesign"!==e.category&&"default"!==e.category&&Object(b.jsx)("p",{className:"unpressedLink",children:"Industrial Design"})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)(r.b,{to:"/CGI",onClick:function(){return n("CGI")},children:["CGI"===e.category&&Object(b.jsx)("p",{className:"linkSelected",children:"CGI"}),"default"===e.category&&Object(b.jsx)("p",{children:"CGI"}),"CGI"!==e.category&&"default"!==e.category&&Object(b.jsx)("p",{className:"unpressedLink",children:"CGI"})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)(r.b,{to:"/graphics",onClick:function(){return n("graphics")},children:["graphics"===e.category&&Object(b.jsx)("p",{className:"linkSelected",children:"Graphics"}),"default"===e.category&&Object(b.jsx)("p",{children:"Graphics"}),"graphics"!==e.category&&"default"!==e.category&&Object(b.jsx)("p",{className:"unpressedLink",children:"Graphics"})]})})]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)(r.b,{to:"contact",onClick:function(){return n("contact")},children:["contact"===e.category&&Object(b.jsx)("p",{className:"linkSelected",children:"Contact"}),"default"===e.category&&Object(b.jsx)("p",{children:"Contact"}),"contact"!==e.category&&"default"!==e.category&&Object(b.jsx)("p",{className:"unpressedLink",children:"Contact"})]})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.instagram.com/ruizsantiago/",rel:"noreferrer noopener",target:"_blank",className:"instagram "+("default"!==e.category&&"unpressedLink"),children:"Instagram"})})]})]})})]})},h=n(29),O=n(7),x=String.raw,f="\n    name\n    slug {\n      current\n    }\n    category {\n      name\n    }\n    year\n    coverImage {\n      asset {\n        url\n        metadata {\n          lqip\n        }\n      }\n    }\n    span\n    projectImages {\n      asset {\n        url\n      }\n    }\n    projectDescription\n";var v=function(e){var t=e.children,n=Object(i.useState)(!0),a=Object(O.a)(n,2),s=a[0],c=a[1],r=Object(i.useState)({CGI:[{name:"",slug:{current:""},category:""}],general:[{name:"",slug:{current:""},category:""}],graphics:[{name:"",slug:{current:""},category:""}],industrialDesign:[{name:"",slug:{current:""},category:""}]}),l=Object(O.a)(r,2),o=l[0],j=l[1];Object(i.useEffect)((function(){fetch("https://0ineey38.api.sanity.io/v1/graphql/production/default",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:x(m||(m=Object(h.a)(['\n          query {\n            SiteSettings(id: "portfolio") {\n              general {\n                ',"\n              }\n              CGI {\n                ","\n              }\n              industrialDesign {\n                ","\n              }\n              graphics {\n                ","\n              }\n            }\n          }\n        "])),f,f,f,f)})}).then((function(e){return e.json()})).then((function(e){j(e.data.SiteSettings),c(!1)}))}),[]);var d=[],u=[],g=[],v=[];!function(){for(var e=0;e<o.general.length;e++)d.push(o.general[e].slug.current);for(var t=0;t<o.CGI.length;t++)u.push(o.CGI[t].slug.current);for(var n=0;n<o.graphics.length;n++)g.push(o.graphics[n].slug.current);for(var i=0;i<o.industrialDesign.length;i++)v.push(o.industrialDesign[i].slug.current)}();var y=Object(i.useState)(0),C=Object(O.a)(y,2),N=C[0],I=C[1],G=Object(i.useState)(""),D=Object(O.a)(G,2),S=D[0],k=D[1],w=Object(i.useState)("default"),T=Object(O.a)(w,2),M=T[0],L=T[1];return Object(b.jsx)(p.Provider,{value:{loading:s,projects:o,projectGeneral:d,projectCGI:u,projectGraphics:g,projectIndustrialDesign:v,rotation:N,handleRotation:function(){I(0===N?N-90:0)},display:S,setDisplay:k,category:M,setCategory:L},children:t})},y=n.p+"static/media/aboutPhoto.59f85064.png",C=(n(38),{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),N={duration:.25},I=function(){return Object(b.jsxs)(u.a.div,{className:"aboutContainer",initial:"initial",animate:"animate",exit:"exit",variants:C,transition:N,children:[Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipiscing elit nibh dignissim mauris tempus, arcu aenean vel tempor ad vitae feugiat suspendisse ullamcorper magnis. Porta non iaculis parturient metus netus molestie nascetur velit nisi aliquam volutpat venenatis egestas id, maecenas fermentum sem gravida praesent mattis condimentum diam torquent faucibus pretium blandit. Senectus egestas libero duis feugiat eu vestibulum sagittis etiam in dis mus magnis, ornare"}),Object(b.jsx)("p",{children:"What I do:"}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipiscing elit nibh dignissim mauris tempus, arcu aenean vel tempor ad vitae feugiat suspendisse ullamcorper magnis."}),Object(b.jsx)("p",{children:"a film director: Gaspar No\xe9"}),Object(b.jsx)("p",{children:"a musician: Gustavo Santaolalla"}),Object(b.jsx)("p",{children:"a painter: Guillermo Lorca Garc\xeda H."}),Object(b.jsx)("p",{children:"a person: Elena Romero (my grandmother)"}),Object(b.jsx)("img",{src:y,alt:"Myself",loading:"lazy"})]})},G=(n(21),function(){var e=Object(i.useContext)(p);return e.loading?Object(b.jsx)(b.Fragment,{}):Object(b.jsx)(u.a.div,{className:"projectContainer",initial:"initial",animate:"animate",exit:"exit",variants:C,transition:N,children:Object(b.jsx)("div",{className:"imgGrid",children:e.projectCGI.map((function(t,n){var i=e.projects.CGI[n].span;return Object(b.jsx)(r.b,{to:"/CGI/"+t,className:"span"+i,children:Object(b.jsx)("img",{src:e.projects.CGI[n].coverImage.asset.url,alt:e.projects.CGI[n].name,loading:"lazy"})},t)}))})})}),D=(n(39),function(){return Object(b.jsxs)(u.a.div,{className:"contactContainer",initial:"initial",animate:"animate",exit:"exit",variants:C,transition:N,children:[Object(b.jsx)("p",{children:"For job inquiries, questions or just say hi."}),Object(b.jsx)("p",{children:"email"}),Object(b.jsx)("a",{href:"mailto: abc@gmail.com",children:"hi@santigo-ruiz.com"}),Object(b.jsx)("p",{children:"phone"}),Object(b.jsx)("p",{children:"+54 381 6155819"}),Object(b.jsx)("p",{children:"Tucum\xe1n - Argentina"})]})}),S=n(25),k=n(30),w=n.n(k),T=(n(55),n.p+"static/media/leftArrow.4d31e7ef.svg"),M=n.p+"static/media/rightArrow.1a2ff506.svg",L=function(){var e=Object(i.useState)(0),t=Object(O.a)(e,2),n=t[0],a=t[1],s=Object(i.useContext)(p),c=Object(o.g)(),r=c.section,l=c.project,j=void 0!==r?r:"",d="project"+j.charAt(0).toUpperCase()+j.slice(1),m=null!=l?l:"",g=s[d].findIndex((function(e){return e===m})),h=Object(i.useState)(g),x=Object(O.a)(h,2),f=x[0],v=x[1],y=Object(i.useState)(g),I=Object(O.a)(y,2),G=(I[0],I[1]),D=Object(o.f)(),k=Object(i.useRef)({slickNext:function(){},slickPrev:function(){}}),L={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,initialSlide:g,onSwipe:function(){return console.log(s[d][f])},beforeChange:function(e,t){return v(t)},afterChange:function(e){return G(e)},prevArrow:void b.Fragment,nextArrow:void b.Fragment};return Object(i.useEffect)((function(){s.loading||setTimeout((function(){return D("/"+r+"/"+s[d][f])}),400),window.scrollTo({top:0,behavior:"smooth"});var e=document.getElementById("scrollToTop");null===e||void 0===e||e.scrollTo({top:0,behavior:"smooth"})}),[f]),Object(i.useEffect)((function(){a(window.innerHeight-74)}),[]),s.loading?Object(b.jsx)(b.Fragment,{}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(u.a.div,{className:s.display+"Details detailsContainer",style:{height:n},id:"scrollToTop",initial:"initial",animate:"animate",exit:"exit",variants:C,transition:N,children:[Object(b.jsxs)("div",{className:"projectInfo",children:[Object(b.jsx)("p",{className:"detailName",children:s.projects[j][g].name}),Object(b.jsx)("p",{className:"detailYear",children:s.projects[j][g].year}),Object(b.jsx)("div",{className:"detailText",children:s.projects[j][g].projectDescription.map((function(e,t){return Object(b.jsx)("p",{className:"detailLines",children:e},e+t)}))})]}),Object(b.jsx)(w.a,Object(S.a)(Object(S.a)({},L),{},{ref:k,className:"slider",children:s.projects[j].map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:s.display+"Details detailsPhotoContainer",children:[Object(b.jsxs)("div",{className:"projectInfoMobile",children:[Object(b.jsx)("p",{className:"detailNameMobile",children:e.name}),Object(b.jsx)("p",{className:"detailYearMobile",children:e.year}),Object(b.jsx)("div",{className:"detailTextMobile",children:e.projectDescription.map((function(e,t){return Object(b.jsx)("p",{className:"detailLinesMobile",children:e},e+t)}))})]}),e.projectImages.map((function(e,t){return Object(b.jsx)("img",{src:e.asset.url,alt:s.projects[j][g].name,loading:"lazy"},e.asset.url+t)}))]},e.name+e.year),Object(b.jsxs)("div",{className:s.display+"Details mobileBottomBox",children:[Object(b.jsx)("img",{src:T,alt:"Left arrow",onClick:k.current.slickPrev}),Object(b.jsx)("p",{className:"detailNameMobile",children:e.name}),Object(b.jsx)("img",{src:M,alt:"Right arrow",onClick:k.current.slickNext})]})]},e.name)}))}))]})})},z=function(){var e=Object(i.useContext)(p);return e.loading?Object(b.jsx)(b.Fragment,{}):Object(b.jsx)(u.a.div,{className:"projectContainer",initial:"initial",animate:"animate",exit:"exit",variants:C,transition:N,children:Object(b.jsx)("div",{className:"imgGrid",children:e.projectGraphics.map((function(t,n){var i=e.projects.graphics[n].span;return Object(b.jsx)(r.b,{to:"/graphics/"+t,className:"span"+i,children:Object(b.jsx)("img",{src:e.projects.graphics[n].coverImage.asset.url,alt:e.projects.graphics[n].name,loading:"lazy"})},t)}))})})},A=function(){var e=Object(i.useContext)(p);return e.loading?Object(b.jsx)(b.Fragment,{}):Object(b.jsx)(u.a.div,{className:"projectContainer",initial:"initial",animate:"animate",exit:"exit",variants:C,transition:N,children:Object(b.jsx)("div",{className:"imgGrid",children:e.projectIndustrialDesign.map((function(t,n){var i=e.projects.industrialDesign[n].span;return Object(b.jsx)(r.b,{to:"/industrialDesign/"+t,className:"span"+i,children:Object(b.jsx)("img",{src:e.projects.industrialDesign[n].coverImage.asset.url,alt:e.projects.industrialDesign[n].name,loading:"lazy"})},t)}))})})},F=function(){var e=Object(i.useContext)(p);return e.loading?Object(b.jsx)(b.Fragment,{}):Object(b.jsx)(u.a.div,{className:"projectContainer",initial:"initial",animate:"animate",exit:"exit",variants:C,transition:N,children:Object(b.jsx)("div",{className:"imgGrid",children:e.projectGeneral.map((function(t,n){var i=e.projects.general[n].span;return Object(b.jsx)(r.b,{to:"/general/"+t,className:"span"+i,children:Object(b.jsx)("img",{src:e.projects.general[n].coverImage.asset.url,alt:e.projects.general[n].name,loading:"lazy"})},t)}))})})};var q=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(v,{children:[Object(b.jsx)(g,{}),Object(b.jsx)(l.a,{exitBeforeEnter:!0,children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(F,{})}),Object(b.jsx)(o.a,{path:"/about",element:Object(b.jsx)(I,{})}),Object(b.jsx)(o.a,{path:"/contact",element:Object(b.jsx)(D,{})}),Object(b.jsx)(o.a,{path:"/industrialDesign",element:Object(b.jsx)(A,{})}),Object(b.jsx)(o.a,{path:"/CGI",element:Object(b.jsx)(G,{})}),Object(b.jsx)(o.a,{path:"/graphics",element:Object(b.jsx)(z,{})}),Object(b.jsx)(o.a,{path:"/:section/:project",element:Object(b.jsx)(L,{})})]})})]})})};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(r.a,{basename:"/SantiagoRuizPortfolio-V2",children:Object(b.jsx)(q,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.a729d6e2.chunk.js.map