(this["webpackJsonpstore-moreno-vallejo-jenny"]=this["webpackJsonpstore-moreno-vallejo-jenny"]||[]).push([[0],{29:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),c=t.n(i),o=t(19),a=t.n(o),s=(t(29),t(4)),u=t(5),d={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdjYmFiMjc2NmZiNTAwMjRhYTg3OWMiLCJpYXQiOjE2MTg3ODY5OTR9.WYYaYuoIw0y3C3-1bAog7PKvB5RclZcms3sK0d_ev38"},f={getUser:"https://coding-challenge-api.aerolab.co/user/me",postPoints:"https://coding-challenge-api.aerolab.co/user/points",getHistory:"https://coding-challenge-api.aerolab.co/user/history",postRedeem:"https://coding-challenge-api.aerolab.co/redeem",getProducts:"https://coding-challenge-api.aerolab.co/products"},l="GET",j={getUser:function(){return new Promise((function(n,e){fetch(f.getUser,{method:l,headers:d}).then((function(e){return n(e.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.getUser,":")+n.message),e(n)}))}))},getProducts:function(){return new Promise((function(n,e){fetch(f.getProducts,{method:l,headers:d}).then((function(e){return n(e.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.getProducts,":")+n.message),e(n)}))}))},getHistory:function(){return new Promise((function(n,e){fetch(f.getHistory,{method:l,headers:d}).then((function(n){return n.json()})).then((function(e){return n(e),e})).catch((function(n){console.log("Error petici\xf3n ".concat(f.getHistory,":")+n.message),e(n)}))}))}},h=function(n,e){var t=Object(i.useState)(1),r=Object(u.a)(t,2),c=r[0],o=r[1],a=Math.ceil(n.length/e);return{currentData:n.slice((c-1)*e,c*e),currentPage:c,maxPage:a,nextPage:function(){o(c+1)},prevPage:function(){o(c-1)},jumpTo:function(n){o(n)},setCurrentPage:o}},b=c.a.createContext();function m(n){var e=n.children,t=Object(i.useState)([]),c=Object(u.a)(t,2),o=c[0],a=c[1],d=Object(i.useState)([]),f=Object(u.a)(d,2),l=f[0],m=f[1],p=Object(i.useState)([]),g=Object(u.a)(p,2),x=g[0],O=g[1],v=Object(i.useState)(!1),w=Object(u.a)(v,2),y=w[0],C=w[1],k=Object(i.useState)([]),S=Object(u.a)(k,2),P=S[0],z=S[1],I=h(y?x:0===Object.entries(l).length?o:l,16),E=Object(i.useState)({category:"todos",order:0}),M=Object(u.a)(E,2),T=M[0],B=M[1];return Object(i.useEffect)((function(){return j.getProducts().then((function(n){a(n)}))}),[o,a]),Object(i.useEffect)((function(){return j.getUser().then((function(n){z(n)}))}),[P,z]),Object(i.useEffect)((function(){return j.getHistory().then((function(n){var e=n.reduce((function(n,e,t){var r=n.findIndex((function(n){return void 0!==n?n.productId===e.productId:null}));return-1!==r?t=r:t>=1&&(t=n.length),n[t]=n[t]||Object(s.a)(Object(s.a)({},e),{},{cost:0}),n[t].cost+=e.cost,n}),[]);O(e)}))}),[x,O]),Object(r.jsx)(b.Provider,{value:{productsList:o,user:P,setUser:z,history:x,isHistory:y,setIsHistory:C,setProductsList:a,filtersList:l,setFiltersList:m,filters:T,setFilters:B,pagination:I},children:e})}var p=t(2),g=t(3),x=t.p+"static/media/header-x1.b6f067c6.png";function O(){var n=Object(p.a)(["\n   font-family:'Source Sans Pro', sans-serif;\n   font-size:15px;\n   margin: 0 auto;\n   padding-left:0.5rem;\n   line-height: 1.314rem; \n   "," {\n        font-size: 20px;\n        line-height: 2rem;\n    } \n"]);return O=function(){return n},n}function v(){var n=Object(p.a)(["\n    height: auto;\n    font-family:'Source Sans Pro', sans-serif;\n    font-size:10px;\n    color:black;\n    align-self: center;\n    margin:0px;\n    margin-left:0.5rem;\n    padding: 0.5rem 0rem 0.5rem 0rem;\n    "," {\n        font-size:16px;\n    }\n"]);return v=function(){return n},n}function w(){var n=Object(p.a)(["\n  width: 25px;\n  height: 25px; \n   "," {\n        padding: 0.1rem;\n        width: 36px;\n        height: 36px;\n    }\n"]);return w=function(){return n},n}function y(){var n=Object(p.a)(["\n    font-family:'Source Sans Pro', sans-serif;\n    font-size:20px;\n    color:#ffffff;\n    align-self: center;\n    padding-top: 1.5rem;\n    padding-left: 2rem;\n    margin:0px;\n    "," {\n        font-size:64px;\n        padding-top: 5rem;\n        padding-left: 4rem;\n    }\n"]);return y=function(){return n},n}function C(){var n=Object(p.a)(["\n   font-family:'Source Sans Pro', sans-serif;\n   font-size:20px;\n   margin: 0 auto;\n   padding-left:0.5rem;\n   line-height: 1.314rem; \n   "," {\n        font-size: 25px;\n        line-height: 2rem;\n    } \n"]);return C=function(){return n},n}function k(){var n=Object(p.a)(["\n   height: 30px;\n   background-color:#f8f8f8;\n   border: none;\n   display:flex;\n   justify-content: space-between;\n   padding:0.2rem;\n   border-radius: 1rem;\n   margin-left: 0.2rem;\n   outline: none;\n   cursor: pointer;\n    "," {\n        height: 40px;\n    }\n"]);return k=function(){return n},n}function S(){var n=Object(p.a)(["\n    width:80%;\n    display: flex;\n    flex-direction: row; \n    padding: 1rem 0.5rem 1rem 2rem;\n    "," {\n        padding: 1rem 2rem 1rem 0rem;\n        width:40%;\n    }\n"]);return S=function(){return n},n}function P(){var n=Object(p.a)(["\n  width: 25px;\n  height: 25px;\n  display: block;\n  padding: 1rem 0rem 1rem 2rem;\n   "," {\n        width: 36px;\n        height: 36px;\n    }\n"]);return P=function(){return n},n}function z(){var n=Object(p.a)(["\n    width:100%;\n    display:flex;\n    justify-content: space-between;\n    \n"]);return z=function(){return n},n}function I(){var n=Object(p.a)(["\n    width:100%;\n    display:flex;\n    background-image: url(",");\n    height:30vw;\n    background-size:cover;\n"]);return I=function(){return n},n}function E(){var n=Object(p.a)(["\n    width:100%;\n"]);return E=function(){return n},n}var M="@media(min-width: 768px)",T=g.a.div(E()),B=g.a.div(I(),x),F=g.a.div(z()),L=g.a.img(P(),M),H=g.a.div(S(),M),R=(g.a.button(k(),M),g.a.p(C(),M),g.a.h6(y(),M)),A=g.a.img(w(),M),Y=g.a.h6(v(),M),W=(g.a.p(O(),M),t.p+"static/media/aerolab-logo.0a8fb170.svg"),J=t.p+"static/media/coin.b8bc711d.svg";function N(){var n=Object(p.a)(["\n   font-family:'Source Sans Pro', sans-serif;\n   color: #ffffff;\n   font-size:20px;\n   margin: 0.5rem 1rem;\n   line-height: 2rem; \n"]);return N=function(){return n},n}function D(){var n=Object(p.a)(["\n    display:flex;\n    justify-content: space-between;\n    background: #15dbff;\n    width:100%;\n    height:auto;\n    padding:0.5rem 0rem;\n    border-radius:1rem 1rem 0rem 0rem;\n"]);return D=function(){return n},n}function U(){var n=Object(p.a)(["\n    width:100%;\n    display: flex;\n    justify-content: space-evenly;\n    margin:1rem 0.5rem;\n"]);return U=function(){return n},n}function Q(){var n=Object(p.a)(["\n    background: #fbfbfb;\n    //400px\n    width:  ",";\n    //150px\n    height: ",";\n    border-radius:1rem;\n"]);return Q=function(){return n},n}function _(){var n=Object(p.a)(["\n    background-color: ",";  //rgba(0,0,0, .85);\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    display: ",";\n    justify-content: center;\n    align-items: center;\n"]);return _=function(){return n},n}var G=g.a.div(_(),(function(n){return n.theme.backgroundColor}),(function(n){return n.open?"flex":"none"})),K=g.a.div(Q(),(function(n){return n.theme.width}),(function(n){return n.theme.height})),X=g.a.div(U()),Z=g.a.div(D()),V=g.a.p(N()),q=t(9),$=t(7);function nn(n){var e=Object(i.useState)({matches:window.innerWidth>768}),t=Object(u.a)(e,2),c=t[0],o=t[1];Object(i.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;o(Object(s.a)(Object(s.a)({},c),{},{matches:e}))}))}));return Object(r.jsx)("section",{children:Object(r.jsx)(G,{theme:n.propsModal,open:n.isOpenModal,children:Object(r.jsxs)(K,{theme:n.propsModal,children:[Object(r.jsxs)(Z,{children:[Object(r.jsx)(V,{children:n.tittle}),Object(r.jsx)(q.a,{open:n.isOpenModal,onClick:function(){n.setIsOpenModal(!1)},icon:$.d,style:{color:"#ffffff",fontSize:"30px",margin:"0.5rem 1rem",cursor:"pointer"}})]}),Object(r.jsxs)(X,{children:[" ",n.children," "]})]})})})}function en(){var n=Object(p.a)(["\n   font-family:",";\n   font-size:",";\n   margin: ",";\n   padding:",";\n   line-height: ",";\n   color:",";\n  \n"]);return en=function(){return n},n}function tn(){var n=Object(p.a)(["\n   //height: 30px;\n   height : ",";\n   width : ",";\n   background-color: ",";\n   border: none;\n   display:flex;\n   justify-content: space-between;\n   //padding:0.2rem;\n   padding:",";\n   border-radius: ",";\n   //border-radius: 1rem;\n   margin: ",";\n   //margin-left: 0.2rem;\n   outline: none;\n   cursor: ",";\n   //cursor: pointer\n"]);return tn=function(){return n},n}var rn=g.a.button(tn(),(function(n){return n.theme.height}),(function(n){return n.theme.width}),(function(n){return n.theme.backgroundColor}),(function(n){return n.theme.padding}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.margin}),(function(n){return n.theme.cursor})),cn=g.a.p(en(),(function(n){return n.theme.fontFamily}),(function(n){return n.theme.fontSize}),(function(n){return n.theme.marginText}),(function(n){return n.theme.paddingText}),(function(n){return n.theme.lineHeight}),(function(n){return n.theme.color}));function on(n){return Object(r.jsxs)(rn,{disabled:n.disabled,onClick:n.onClick,theme:n.propsButton,children:[Object(r.jsx)(cn,{theme:n.propsButton,children:n.tittle}),n.children]})}var an="POST",sn={postPoints:function(n){return new Promise((function(e,t){fetch(f.postPoints,{method:an,headers:d,body:JSON.stringify({amount:n})}).then((function(n){return e(n.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.postPoints,":")+n.message),t(n)}))}))},postRedeem:function(n){return new Promise((function(e,t){fetch(f.postRedeem,{method:an,headers:d,body:JSON.stringify({productId:n})}).then((function(n){e(n.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.postPoints,":")+n.message),t(n)}))}))}};function un(){var n=Object(i.useContext)(b),e=n.user,t=n.setIsHistory,c=n.isHistory,o=Object(i.useState)(!1),a=Object(u.a)(o,2),d=a[0],f=a[1],l=Object(i.useState)({matches:window.innerWidth>768}),j=Object(u.a)(l,2),h=j[0],m=j[1],p={height:h.matches?"40px":"30px",backgroundColor:h.matches?"#e9e7e7":"#ffffff",padding:"0.2rem",borderRadius:"1rem",margin:"0 0 0 0.2rem",cursor:"pointer",fontFamily:"'Source Sans Pro', sans-serif",fontSize:h.matches?"25px":"20px",marginText:"0 auto",paddingText:"0 0 0 0.5rem",lineHeight:h.matches?"2rem":"1.314rem"},g={width:h.matches?"400px":"300px",height:"150px",backgroundColor:"rgba(0,0,0, .85)"};Object(i.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;m(Object(s.a)(Object(s.a)({},h),{},{matches:e}))}))}));var x=function(n){return sn.postPoints(n)};return Object(r.jsxs)(T,{children:[Object(r.jsxs)(F,{children:[Object(r.jsx)(L,{src:W,alt:"Logo"}),Object(r.jsxs)(nn,{isOpenModal:d,setIsOpenModal:f,tittle:"Add Coins",propsModal:g,children:[Object(r.jsx)(on,{onClick:function(){x(1e3)},propsButton:Object(s.a)(Object(s.a)({},p),{},{backgroundColor:"#e9e8e8"}),tittle:"1000",children:Object(r.jsx)(A,{src:J,alt:"Coin"})}),Object(r.jsx)(on,{onClick:function(){x(5e3)},propsButton:Object(s.a)(Object(s.a)({},p),{},{backgroundColor:"#e9e8e8"}),tittle:"5000",children:Object(r.jsx)(A,{src:J,alt:"Coin"})}),Object(r.jsx)(on,{onClick:function(){x(7500)},propsButton:Object(s.a)(Object(s.a)({},p),{},{backgroundColor:"#e9e8e8"}),tittle:"7500",children:Object(r.jsx)(A,{src:J,alt:"Coin"})})]}),Object(r.jsxs)(H,{children:[Object(r.jsx)(on,{propsButton:p,onClick:function(){f(!0)},tittle:h.matches?"AddCoins":null,children:Object(r.jsx)(q.a,{icon:$.c,style:{color:"#FFCF00",fontSize:"25px",padding:"0.2rem"}})}),Object(r.jsx)(on,{propsButton:p,onClick:function(){t(!c)},tittle:h.matches?c?"Home":"History":null,children:Object(r.jsx)(q.a,{icon:c?$.b:$.a,style:{color:"#FF8000",fontSize:"25px",padding:"0.2rem"}})}),Object(r.jsxs)(Y,{children:[" ",e.name," "]}),Object(r.jsx)(on,{propsButton:Object(s.a)(Object(s.a)({},p),{},{backgroundColor:"#e9e7e7",cursor:"auto"}),tittle:e.points,children:Object(r.jsx)(A,{src:J,alt:"Coin"})})]})]}),Object(r.jsx)(B,{children:Object(r.jsx)(R,{children:" Electronics"})})]})}function dn(){var n=Object(p.a)(["\n  font-family: Quicksand, arial, sans-serif;\n  margin-left: 16px;\n"]);return dn=function(){return n},n}function fn(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 0.1rem;\n    flex-direction:row; \n"]);return fn=function(){return n},n}function ln(){var n=Object(p.a)(["\n   font-family:'Source Sans Pro', sans-serif;\n   color: #000000;\n   font-size:20px;\n   margin: 0.5rem 1rem;\n   line-height: 2rem; \n"]);return ln=function(){return n},n}function jn(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 0.1rem;\n    flex-direction:column;\n\n"]);return jn=function(){return n},n}function hn(){var n=Object(p.a)(["\n  color:#000000;\n  text-align:center;\n  padding-top:1rem;\n  font-size:36px;\n"]);return hn=function(){return n},n}function bn(){var n=Object(p.a)(["\n  width:100%;\n  margin-top:4rem;\n"]);return bn=function(){return n},n}function mn(){var n=Object(p.a)(["\n   font-family:'Source Sans Pro', sans-serif;\n   width:80%;\n   height:auto;\n   margin: 0rem 2rem 0rem;\n   border: none;\n   border-radius: 2rem;\n   outline: none;\n   padding:1rem;\n   cursor: pointer;  \n   background:#fbfbfb;  \n   font-size:18px;\n   color:#616161;\n   text-align:center;\n"]);return mn=function(){return n},n}function pn(){var n=Object(p.a)(["\n  font-family: Quicksand, arial, sans-serif;\n  margin-left: 18px;\n  text-align:",";\n  color:",";\n"]);return pn=function(){return n},n}function gn(){var n=Object(p.a)(["\n  font-family: Quicksand, arial, sans-serif;\n  margin-left: 16px;\n  text-align: ",";//center;\n  color: ","; //#f0faff\n"]);return gn=function(){return n},n}function xn(){var n=Object(p.a)(["\n  width: 25px;\n  height: 25px;\n  vertical-align:middle;\n"]);return xn=function(){return n},n}function On(){var n=Object(p.a)(["\n  opacity:0.6;\n  background:#616161;\n  border-radius: 100px;\n  height:42px;\n  font-family:'Source Sans Pro', sans-serif;\n  font-size:20px;\n  margin: 1rem;\n  padding-left: 0.8rem;\n  padding-right:0.5rem;\n  line-height: 2.314rem; \n  text-align:center;\n  color:#ffffff;\n"]);return On=function(){return n},n}function vn(){var n=Object(p.a)(["\n  margin:1rem;\n"]);return vn=function(){return n},n}function wn(){var n=Object(p.a)(["\n  width:100%;\n  display: flex;\n  flex-direction:row-reverse;\n"]);return wn=function(){return n},n}function yn(){var n=Object(p.a)(["\n  margin: 0rem 1.5rem;\n  height: 1px;\n  background-color: #dcdcdc;\n  border: none; \n"]);return yn=function(){return n},n}function Cn(){var n=Object(p.a)(["\n  display: block;\n  width: ",";\n  height: ",";\n"]);return Cn=function(){return n},n}function kn(){var n=Object(p.a)(["\n   display: flex;\n   justify-content: center;\n   width: 100%;\n"]);return kn=function(){return n},n}function Sn(){var n=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity:0;\n  transition: .5s ease;\n  background-image:linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);\n  border-radius: 10px;\n  &:hover{\n      opacity: 0.8;\n  }\n"]);return Sn=function(){return n},n}function Pn(){var n=Object(p.a)(["\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 10px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n    padding-bottom: 1px;\n    margin: 0.5rem;\n    position: relative;\n    background: ",";  //linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n"]);return Pn=function(){return n},n}function zn(){var n=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  grid-gap: 1vw;\n  margin-top: 2rem;\n"]);return zn=function(){return n},n}var In=g.a.div(zn()),En=g.a.div(Pn(),(function(n){return n.background})),Mn=g.a.div(Sn()),Tn=g.a.div(kn()),Bn=g.a.img(Cn(),(function(n){return n.widthImage?n.widthImage:"100%"}),(function(n){return n.heightImage?n.widthImage:"auto"})),Fn=g.a.hr(yn()),Ln=g.a.div(wn()),Hn=g.a.img(vn()),Rn=g.a.div(On()),An=g.a.img(xn()),Yn=g.a.h3(gn(),(function(n){return n.textAlign}),(function(n){return n.color})),Wn=g.a.h4(pn(),(function(n){return n.textAlign}),(function(n){return n.color})),Jn=(g.a.button(mn()),g.a.div(bn())),Nn=g.a.h3(hn()),Dn=g.a.div(jn()),Un=g.a.p(ln()),Qn=g.a.div(fn()),_n=(g.a.h3(dn()),t.p,t.p,t.p+"static/media/buy-white.9b6e6567.svg"),Gn=t.p+"static/media/smiley.c314f0e8.svg",Kn=t.p+"static/media/sad.d72c3dc6.svg";function Xn(){var n=Object(i.useContext)(b),e=n.user,t=n.isHistory,c=n.pagination,o=Object(i.useState)(!1),a=Object(u.a)(o,2),d=a[0],f=a[1],l=Object(i.useState)(!1),j=Object(u.a)(l,2),h=j[0],m=j[1],p=Object(i.useState)(!1),g=Object(u.a)(p,2),x=g[0],O=g[1],v=Object(i.useState)(""),w=Object(u.a)(v,2),y=w[0],C=w[1],k=Object(i.useState)(""),S=Object(u.a)(k,2),P=S[0],z=S[1],I=Object(i.useState)({matches:window.innerWidth>768}),E=Object(u.a)(I,2),M=E[0],T=E[1];Object(i.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;T(Object(s.a)(Object(s.a)({},M),{},{matches:e}))}))}));var B=function(n,e){f(n),m(!1),z(e)},F=function(){m(!1)},L={height:"auto",width:"80%",backgroundColor:"#fbfbfb",borderRadius:"2rem",margin:"0rem 2rem 0rem",cursor:"pointer",fontFamily:"'Source Sans Pro', sans-serif",fontSize:"18px",color:"#616161",marginText:M.matches?"1.2rem 0 1.2rem 1rem":"1.5rem 0 1.5rem 4rem",paddingText:M.matches?"0 0 0 3rem":"0 0 0 0.5rem"},H={width:M.matches?"400px":"300px",height:"auto",backgroundColor:"rgba(0,0,0, .35)"};return Object(r.jsx)(r.Fragment,{children:t?null:Object(r.jsx)(In,{children:0===Object.entries(c.currentData).length?Object(r.jsx)("h1",{children:"Sin datos"}):c.currentData.map((function(n,t){return Object(r.jsx)("section",{children:Object(r.jsx)(En,{background:P===n._id&&h?x?"linear-gradient(to left, #ed213a, #93291e);":"linear-gradient(to right, #78ffd6, #a8ff78)":null,children:P===n._id&&h?Object(r.jsxs)("div",{children:[Object(r.jsx)(Tn,{children:Object(r.jsx)(Bn,{widthImage:"60%",heightImage:"auto",src:x?Kn:Gn})}),Object(r.jsx)(Yn,{textAlign:"center",color:"#f0faff",children:x?"Error!":"Success!"}),Object(r.jsx)(Wn,{textAlign:"center",color:"#f0faff",children:y}),Object(r.jsx)(on,{onClick:F,propsButton:Object(s.a)(Object(s.a)({},L),{},{margin:"0rem 2rem 3rem",paddingText:M.matches?"0 4rem 0 4rem":"0 0 0 0.5rem",color:x?"#bf0000":"#009a00"}),tittle:x?"TRY AGAIN":"CONTINUE"})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)(Ln,{children:e.points>n.cost?Object(r.jsx)("div",{style:{margin:"2.3rem"}}):Object(r.jsxs)(Rn,{children:["You need ",n.cost-e.points," ",Object(r.jsx)(An,{src:J,alt:"Coin"})," "]})}),Object(r.jsx)(Tn,{children:Object(r.jsx)(Bn,{src:n.img.url})}),Object(r.jsx)(Fn,{}),Object(r.jsx)(Yn,{children:n.category}),Object(r.jsx)(Wn,{children:n.name}),Object(r.jsx)(nn,{isOpenModal:d,setIsOpenModal:f,tittle:"Reedem",propsModal:H,children:Object(r.jsxs)(Dn,{children:[Object(r.jsx)(Un,{children:"Are you sure?"}),Object(r.jsxs)(Qn,{children:[Object(r.jsx)(on,{onClick:function(){!function(n){sn.postRedeem(n).then((function(n){void 0===n.error||""===n.error?(O(!1),C(n.message)):(O(!0),C(n.error)),f(!1),m(!0)})).catch((function(n){C(n),O(!0)}))}(P)},propsButton:Object(s.a)(Object(s.a)({},L),{},{marginText:"1rem",paddingText:M.matches?"0 1rem":"0 0 0 0.5rem",backgroundColor:"#e9e8e8"}),tittle:"Yes"}),Object(r.jsx)(on,{onClick:function(){B(!1,P)},propsButton:Object(s.a)(Object(s.a)({},L),{},{marginText:"1rem",paddingText:M.matches?"0 1rem":"0 0 0 0.5rem",backgroundColor:"#e9e8e8"}),tittle:"No"})]})]})}),Object(r.jsxs)(Mn,{children:[Object(r.jsx)(Ln,{children:e.points>n.cost?Object(r.jsx)(Hn,{src:_n}):Object(r.jsxs)(Rn,{style:{opacity:"1",background:"#fbfbfb",color:"#616161"},children:["You need ",n.cost-e.points," ",Object(r.jsx)(An,{src:J,alt:"Coin"})," "]})}),Object(r.jsxs)(Jn,{children:[Object(r.jsxs)(Nn,{children:[n.cost,Object(r.jsx)(An,{style:{width:"36px",height:"36px"},src:J,alt:"Coin"})]}),e.points>n.cost?Object(r.jsx)(on,{onClick:function(){B(!0,n._id)},propsButton:L,tittle:"Reedem now"}):null]})]})]})})},n._id)}))})})}var Zn=t(23),Vn=t(11);function qn(){var n=Object(p.a)(["\n  border-radius: 10px;\n  width: 95%;\n  height: 35px;\n  background: white;\n  color: gray;\n  padding-left: 5px;\n  font-size: 14px;\n  margin: 1.5rem 1rem;\n  option {\n    color: black;\n    background: white;\n    display: flex;\n    white-space: pre;\n    min-height: 20px;\n    padding: 0px 2px 1px;\n  }\n  "," {\n    width: 25%;\n    }\n"]);return qn=function(){return n},n}function $n(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 0.1rem;\n    flex-direction:row;\n    "," {\n      margin-left: 10rem;\n    }\n"]);return $n=function(){return n},n}function ne(){var n=Object(p.a)(["\n  width: 40px;\n  height: 40px; \n   "," {\n        padding: 0.1rem;\n    }\n"]);return ne=function(){return n},n}function ee(){var n=Object(p.a)(["\n  margin: 0rem 1.5rem;\n  height: 1px;\n  background-color: #dcdcdc;\n  border: none; \n"]);return ee=function(){return n},n}function te(){var n=Object(p.a)(["\n  font-family:'Source Sans Pro', sans-serif;\n   width:100%;\n   height:auto;\n   margin: 0.3rem 1rem 0.3rem 0;\n   border: none;\n   border-radius: 2rem;\n   outline: none;\n   cursor: pointer;  \n   background:#ededed;  \n   font-size:18px;\n   color:#616161;\n   \n   \n   padding: 1rem 0;\n   "," {\n      width:15%;\n      height:63px;\n    }\n"]);return te=function(){return n},n}function re(){var n=Object(p.a)(["\n  color: #a3a3a3;\n  font-size:20px;\n  "," {\n    font-size:24px;\n    margin-right: 1rem;\n  }\n"]);return re=function(){return n},n}function ie(){var n=Object(p.a)(["\n  margin: 0 0.3rem;\n  border:thin solid #d9d9d9;\n  "," {\n    margin: 0 1rem;\n  } \n"]);return ie=function(){return n},n}function ce(){var n=Object(p.a)(["\n  font-size:20px;\n  color: #616161;\n  text-align: center;\n  "," {\n    width: 25%;\n    margin-left: 0.5rem;\n    font-size: 24px;\n    line-height: 24px;\n  }\n"]);return ce=function(){return n},n}function oe(){var n=Object(p.a)(["\n    display: flex;\n    margin: 1rem;\n    flex-direction:column;\n    "," {\n      flex-direction:row;\n    }\n"]);return oe=function(){return n},n}function ae(){var n=Object(p.a)(["\n    width:100%;\n    margin-top: 0px;\n"]);return ae=function(){return n},n}var se="@media(min-width: 768px)",ue=g.a.div(ae()),de=g.a.div(oe(),se),fe=g.a.h3(ce(),se),le=g.a.span(ie(),se),je=g.a.span(re(),se),he=(g.a.button(te(),se),g.a.hr(ee())),be=(g.a.img(ne(),se),g.a.div($n(),se),g.a.select(qn(),se)),me=t.p+"static/media/arrow-left.48260431.svg",pe=t.p+"static/media/arrow-right.ec702bfd.svg";function ge(){var n=Object(p.a)(["\n  width: 40px;\n  height: 40px; \n   "," {\n        padding: 0.1rem;\n    }\n"]);return ge=function(){return n},n}function xe(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 0.1rem;\n    flex-direction:row;\n    "," {\n      margin-left: 10rem;\n    }\n"]);return xe=function(){return n},n}var Oe="@media(min-width: 768px)",ve=g.a.div(xe(),Oe),we=g.a.img(ge(),Oe);function ye(n){var e=Object(i.useContext)(b).pagination,t=Object(i.useState)({matches:window.innerWidth>768}),c=Object(u.a)(t,2),o=c[0],a=c[1];Object(i.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;a(Object(s.a)(Object(s.a)({},o),{},{matches:e}))}))}));var d={height:o.matches?"40px":"25px",width:o.matches?"40px":"25px",backgroundColor:"#ffffff",padding:"0",borderRadius:"100%",margin:"1rem"};return Object(r.jsxs)(ve,{children:[Object(r.jsx)(on,{disabled:e.currentPage<=1,onClick:function(){e.prevPage()},propsButton:d,children:Object(r.jsx)(we,{src:me,alt:"arrowLeft"})}),Object(r.jsx)(on,{disabled:e.currentPage>=e.maxPage,onClick:function(){e.nextPage()},propsButton:d,children:Object(r.jsx)(we,{src:pe,alt:"arrowRight"})})]})}function Ce(){var n=Object(i.useContext)(b),e=n.productsList,t=n.isHistory,c=n.setFiltersList,o=n.filters,a=n.setFilters,d=n.pagination,f=Object(i.useState)(o),l=Object(u.a)(f,1)[0],j=Object(i.useState)({matches:window.innerWidth>768}),h=Object(u.a)(j,2),m=h[0],p=h[1];Object(i.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;p(Object(s.a)(Object(s.a)({},m),{},{matches:e}))}))})),Object(i.useEffect)((function(){var n=e;switch(o.order){case 1:n=e.sort((function(n,e){return n.cost-e.cost}));break;case 2:n=e.sort((function(n,e){return e.cost-n.cost}))}n=n.filter((function(n){return"todos"!==o.category&&n.category===o.category||"todos"===o.category})),c(n),n.length<=16&&d.setCurrentPage(1)}),[o,c]);var g=function(n,e){var t=void 0===e.target?e:e.target.value;a((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(Vn.a)({},n,t))}))},x={height:m.matches?"30%":"auto",width:m.matches?"15%":"100%",backgroundColor:"#ededed",padding:"0 2.5rem",borderRadius:"2rem",margin:"0.3rem 1rem 0.3rem 0",cursor:"pointer",fontFamily:"'Source Sans Pro', sans-serif",fontSize:"18px",color:"#616161",marginText:m.matches?"1.2rem 0 1.2rem 1rem":"1.5rem 0 1.5rem 4rem"};m.matches,m.matches;return Object(r.jsxs)(ue,{children:[t?null:Object(r.jsxs)(de,{children:[Object(r.jsxs)(fe,{children:["Page ".concat(d.currentPage," of ").concat(d.maxPage)," ",Object(r.jsx)(le,{})," ",Object(r.jsx)(je,{children:"Sort by: "})]}),Object(r.jsxs)(be,{name:"category",value:o.category,onChange:function(n){return g(n.target.name,n)},children:[Object(r.jsx)("option",{value:"todos",children:"Todos los Productos"}),Object(Zn.a)(new Set(e.map((function(n){return n.category})))).map((function(n){return Object(r.jsx)("option",{children:n},n)}))]}),Object(r.jsx)(on,{onClick:function(){a(l)},propsButton:x,tittle:"Most recent"}),Object(r.jsx)(on,{onClick:function(){g("order",1)},propsButton:x,tittle:"Lowest price"}),Object(r.jsx)(on,{onClick:function(){g("order",2)},propsButton:x,tittle:"Highest price"}),Object(r.jsx)(ye,{})]}),Object(r.jsx)(he,{})]})}function ke(){var n=Object(p.a)(["\n   padding: 4px 8px;\n   flex: ",";\n   ",";\n \n \n    \n   \n"]);return ke=function(){return n},n}function Se(){var n=Object(p.a)(["\n    display:flex;\n    padding: 4px 8px;\n    border: 1px solid #ddd;\n    background-color: ",";//#15dbff;\n"]);return Se=function(){return n},n}function Pe(){var n=Object(p.a)(["\n    width:100%;\n    height:auto;\n    &:nth-child(even) {\n      background: #ebe7e7\n    } \n"]);return Pe=function(){return n},n}function ze(){var n=Object(p.a)(["\n    width:98%;\n    margin: 2rem 1rem 0px 0.5rem;\n"]);return ze=function(){return n},n}var Ie=g.a.div(ze()),Ee=g.a.div(Pe()),Me=g.a.div(Se(),(function(n){return n.backgroungColor})),Te={xs:function(n){return"\n    '@media(min-width: 768px)'{\n        ".concat(n,"\n    }\n")}},Be=g.a.div(ke(),(function(n){return n.size}),(function(n){return n.collapse&&Te[n.collapse]("\n        display:none;\n  ")}));function Fe(){var n=Object(i.useContext)(b),e=(n.history,n.isHistory),t=n.pagination,c=Object(i.useState)({matches:window.innerWidth>768}),o=Object(u.a)(c,2),a=o[0],d=o[1];return Object(i.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;d(Object(s.a)(Object(s.a)({},a),{},{matches:e}))}))})),Object(r.jsx)("section",{children:e?a.matches?Object(r.jsxs)(Ie,{children:[Object(r.jsxs)(Me,{backgroungColor:"#7de1fa",children:[Object(r.jsx)(Be,{size:1,collapse:"xs",children:"Id"}),Object(r.jsx)(Be,{size:1,collapse:"xs",children:"Product"}),Object(r.jsx)(Be,{size:1,collapse:"xs",children:"Category"}),Object(r.jsx)(Be,{size:1,collapse:"xs",children:"Cost"})]}),t.currentData.map((function(n,e){return Object(r.jsx)(Ee,{children:Object(r.jsxs)(Me,{children:[Object(r.jsx)(Be,{size:1,collapse:"xs",children:n.productId}),Object(r.jsx)(Be,{size:1,collapse:"xs",children:n.name}),Object(r.jsx)(Be,{size:1,collapse:"xs",children:n.category}),Object(r.jsx)(Be,{size:1,collapse:"xs",children:n.cost})]})},e)}))]}):Object(r.jsx)(In,{children:t.currentData.map((function(n,e){return Object(r.jsxs)(En,{children:[Object(r.jsx)(Tn,{children:Object(r.jsx)(Bn,{src:n.img.url})}),Object(r.jsx)(Fn,{}),Object(r.jsx)(Yn,{children:n.category}),Object(r.jsx)(Wn,{children:n.name}),Object(r.jsx)(Wn,{children:" Cost: ".concat(n.cost)})]})}))}):null})}function Le(){var n=Object(p.a)(["\n    width:100%;\n"]);return Le=function(){return n},n}function He(){var n=Object(p.a)(["\n    display: flex;\n    margin: 1rem;\n    flex-direction:column;\n    "," {\n      flex-direction:row;\n    }\n"]);return He=function(){return n},n}function Re(){var n=Object(p.a)(["\n  margin: 0 0.3rem;\n  border:thin solid #d9d9d9;\n  "," {\n    \n  } \n"]);return Re=function(){return n},n}function Ae(){var n=Object(p.a)(["\n  font-size:20px;\n  color: #616161;\n  text-align: center;\n  "," {\n    width: 25%;\n    margin-left: 0.5rem;\n    font-size: 24px;\n    line-height: 24px;\n  }\n"]);return Ae=function(){return n},n}function Ye(){var n=Object(p.a)(["\n    width:100%;\n"]);return Ye=function(){return n},n}var We="@media(min-width: 768px)",Je=g.a.div(Ye()),Ne=g.a.h3(Ae(),We),De=g.a.span(Re(),We),Ue=g.a.div(He(),We),Qe=g.a.div(Le());function _e(){var n=Object(i.useContext)(b).pagination;return Object(r.jsx)(Je,{children:Object(r.jsxs)(Ue,{children:[Object(r.jsx)(Qe,{children:Object(r.jsxs)(Ne,{children:["Page ".concat(n.currentPage," of ").concat(n.maxPage)," ",Object(r.jsx)(De,{})]})}),Object(r.jsx)(ye,{})]})})}var Ge=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(m,{children:[Object(r.jsx)(un,{}),Object(r.jsx)(Ce,{}),Object(r.jsx)(Xn,{}),Object(r.jsx)(Fe,{}),Object(r.jsx)(_e,{})]})})},Ke=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),c(n),o(n)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Ge,{})}),document.getElementById("root")),Ke()}},[[35,1,2]]]);
//# sourceMappingURL=main.cf7b60f7.chunk.js.map