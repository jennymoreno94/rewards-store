(this["webpackJsonpstore-moreno-vallejo-jenny"]=this["webpackJsonpstore-moreno-vallejo-jenny"]||[]).push([[0],{31:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),i=t.n(c),o=t(20),a=t.n(o),s=(t(31),t(4)),u=t(5),d={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdjYmFiMjc2NmZiNTAwMjRhYTg3OWMiLCJpYXQiOjE2MTg3ODY5OTR9.WYYaYuoIw0y3C3-1bAog7PKvB5RclZcms3sK0d_ev38"},f={getUser:"https://coding-challenge-api.aerolab.co/user/me",postPoints:"https://coding-challenge-api.aerolab.co/user/points",getHistory:"https://coding-challenge-api.aerolab.co/user/history",postRedeem:"https://coding-challenge-api.aerolab.co/redeem",getProducts:"https://coding-challenge-api.aerolab.co/products"},l="GET",j={getUser:function(){return new Promise((function(n,e){fetch(f.getUser,{method:l,headers:d}).then((function(e){return n(e.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.getUser,":")+n.message),e(n)}))}))},getProducts:function(){return new Promise((function(n,e){fetch(f.getProducts,{method:l,headers:d}).then((function(e){return n(e.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.getProducts,":")+n.message),e(n)}))}))},getHistory:function(){return new Promise((function(n,e){fetch(f.getHistory,{method:l,headers:d}).then((function(n){return n.json()})).then((function(e){return n(e),e})).catch((function(n){console.log("Error petici\xf3n ".concat(f.getHistory,":")+n.message),e(n)}))}))}},b=function(n,e){var t=Object(c.useState)(1),r=Object(u.a)(t,2),i=r[0],o=r[1],a=Math.ceil(n.length/e);return{currentData:n.slice((i-1)*e,i*e),currentPage:i,maxPage:a,nextPage:function(){o(i+1)},prevPage:function(){o(i-1)},jumpTo:function(n){o(n)},setCurrentPage:o}},h=i.a.createContext();function m(n){var e=n.children,t=Object(c.useState)([]),i=Object(u.a)(t,2),o=i[0],a=i[1],d=Object(c.useState)([]),f=Object(u.a)(d,2),l=f[0],m=f[1],p=Object(c.useState)([]),g=Object(u.a)(p,2),x=g[0],O=g[1],v=Object(c.useState)(!1),w=Object(u.a)(v,2),y=w[0],C=w[1],k=Object(c.useState)([]),S=Object(u.a)(k,2),P=S[0],z=S[1],F=b(y?x:0===Object.entries(l).length?o:l,16),I=Object(c.useState)({category:"todos",order:0}),E=Object(u.a)(I,2),M=E[0],H=E[1];return Object(c.useEffect)((function(){return j.getProducts().then((function(n){a(n)}))}),[o===[]]),Object(c.useEffect)((function(){return j.getUser().then((function(n){z(n)}))}),[P===[]]),Object(c.useEffect)((function(){return j.getHistory().then((function(n){var e=n.reduce((function(n,e,t){var r=n.findIndex((function(n){return void 0!==n?n.productId===e.productId:null}));return-1!==r?t=r:t>=1&&(t=n.length),n[t]=n[t]||Object(s.a)(Object(s.a)({},e),{},{cost:0}),n[t].cost+=e.cost,n}),[]);O(e)}))}),[y]),Object(r.jsx)(h.Provider,{value:{productsList:o,user:P,setUser:z,history:x,isHistory:y,setIsHistory:C,setProductsList:a,filtersList:l,setFiltersList:m,filters:M,setFilters:H,pagination:F},children:e})}var p=t(2),g=t(3),x=t.p+"static/media/header-x1.b6f067c6.png";function O(){var n=Object(p.a)(["\n    height: auto;\n    font-family:'Source Sans Pro', sans-serif;\n    font-size:10px;\n    color:black;\n    align-self: center;\n    margin:0px;\n    margin-left:0.5rem;\n    padding: 0.5rem 0rem 0.5rem 0rem;\n    "," {\n        font-size:16px;\n    }\n"]);return O=function(){return n},n}function v(){var n=Object(p.a)(["\n  width: 25px;\n  height: 25px; \n   "," {\n        padding: 0.1rem;\n        width: 36px;\n        height: 36px;\n    }\n"]);return v=function(){return n},n}function w(){var n=Object(p.a)(["\n    font-family:'Source Sans Pro', sans-serif;\n    font-size:20px;\n    color:#ffffff;\n    align-self: center;\n    padding-top: 1.5rem;\n    padding-left: 2rem;\n    margin:0px;\n    "," {\n        font-size:64px;\n        padding-top: 5rem;\n        padding-left: 4rem;\n    }\n"]);return w=function(){return n},n}function y(){var n=Object(p.a)(["\n    width:80%;\n    display: flex;\n    flex-direction: row; \n    padding: 1rem 0.5rem 1rem 2rem;\n    "," {\n        padding: 1rem 2rem 1rem 0rem;\n        width:40%;\n    }\n"]);return y=function(){return n},n}function C(){var n=Object(p.a)(["\n  width: 25px;\n  height: 25px;\n  display: block;\n  padding: 1rem 0rem 1rem 2rem;\n   "," {\n        width: 36px;\n        height: 36px;\n    }\n"]);return C=function(){return n},n}function k(){var n=Object(p.a)(["\n    width:100%;\n    display:flex;\n    justify-content: space-between;\n    \n"]);return k=function(){return n},n}function S(){var n=Object(p.a)(["\n    width:100%;\n    display:flex;\n    background-image: url(",");\n    height:30vw;\n    background-size:cover;\n"]);return S=function(){return n},n}function P(){var n=Object(p.a)(["\n    width:100%;\n"]);return P=function(){return n},n}var z="@media(min-width: 768px)",F=g.a.div(P()),I=g.a.div(S(),x),E=g.a.div(k()),M=g.a.img(C(),z),H=g.a.div(y(),z),T=g.a.h6(w(),z),B=g.a.img(v(),z),L=g.a.h6(O(),z),R=t.p+"static/media/aerolab-logo.0a8fb170.svg",A=t.p+"static/media/coin.b8bc711d.svg";function U(){var n=Object(p.a)(["\n   font-family:'Source Sans Pro', sans-serif;\n   color: #ffffff;\n   font-size:20px;\n   margin: 0.5rem 1rem;\n   line-height: 2rem; \n"]);return U=function(){return n},n}function Y(){var n=Object(p.a)(["\n    display:flex;\n    justify-content: space-between;\n    background: #15dbff;\n    width:100%;\n    height:auto;\n    padding:0.5rem 0rem;\n    border-radius:1rem 1rem 0rem 0rem;\n"]);return Y=function(){return n},n}function D(){var n=Object(p.a)(["\n    width:100%;\n    display: flex;\n    justify-content: space-evenly;\n    margin:1rem 0.5rem;\n"]);return D=function(){return n},n}function W(){var n=Object(p.a)(["\n    background: #fbfbfb;\n    width:  ",";\n    height: ",";\n    border-radius:1rem;\n"]);return W=function(){return n},n}function J(){var n=Object(p.a)(["\n    background-color: ",";  //rgba(0,0,0, .85);\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    display: ",";\n    justify-content: center;\n    align-items: center;\n"]);return J=function(){return n},n}var N=g.a.div(J(),(function(n){return n.theme.backgroundColor}),(function(n){return n.open?"flex":"none"})),Q=g.a.div(W(),(function(n){return n.theme.width}),(function(n){return n.theme.height})),_=g.a.div(D()),G=g.a.div(Y()),K=g.a.p(U()),X=t(8),Z=t(7);function V(n){var e=Object(c.useState)({matches:window.innerWidth>768}),t=Object(u.a)(e,2),i=t[0],o=t[1];Object(c.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;o(Object(s.a)(Object(s.a)({},i),{},{matches:e}))}))}));return Object(r.jsx)("section",{children:Object(r.jsx)(N,{theme:n.propsModal,open:n.isOpenModal,children:Object(r.jsxs)(Q,{theme:n.propsModal,children:[Object(r.jsxs)(G,{children:[Object(r.jsx)(K,{children:n.tittle}),Object(r.jsx)(X.a,{open:n.isOpenModal,onClick:function(){n.setIsOpenModal(!1)},icon:Z.e,style:{color:"#ffffff",fontSize:"30px",margin:"0.5rem 1rem",cursor:"pointer"}})]}),Object(r.jsxs)(_,{children:[" ",n.children," "]})]})})})}function q(){var n=Object(p.a)(["\n   font-family:",";\n   font-size:",";\n   margin: ",";\n   padding:",";\n   line-height: ",";\n   color:",";\n  \n"]);return q=function(){return n},n}function $(){var n=Object(p.a)(["\n   height : ",";\n   width : ",";\n   background-color: ",";\n   border: none;\n   display:flex;\n   justify-content: space-between;\n   padding:",";\n   border-radius: ",";\n   margin: ",";\n   outline: none;\n   cursor: ",";\n   &:hover{\n     background-color: ",";\n  }\n"]);return $=function(){return n},n}var nn=g.a.button($(),(function(n){return n.theme.height}),(function(n){return n.theme.width}),(function(n){return n.theme.backgroundColor}),(function(n){return n.theme.padding}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.margin}),(function(n){return n.theme.cursor}),(function(n){return n.theme.colorHovered})),en=g.a.p(q(),(function(n){return n.theme.fontFamily}),(function(n){return n.theme.fontSize}),(function(n){return n.theme.marginText}),(function(n){return n.theme.paddingText}),(function(n){return n.theme.lineHeight}),(function(n){return n.theme.color}));function tn(n){return Object(r.jsxs)(nn,{disabled:n.disabled,onClick:n.onClick,theme:n.propsButton,children:[Object(r.jsx)(en,{theme:n.propsButton,children:n.tittle}),n.children]})}var rn="POST",cn={postPoints:function(n){return new Promise((function(e,t){fetch(f.postPoints,{method:rn,headers:d,body:JSON.stringify({amount:n})}).then((function(n){return e(n.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.postPoints,":")+n.message),t(n)}))}))},postRedeem:function(n){return new Promise((function(e,t){fetch(f.postRedeem,{method:rn,headers:d,body:JSON.stringify({productId:n})}).then((function(n){e(n.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.postPoints,":")+n.message),t(n)}))}))}},on=t(24),an=t.n(on);function sn(){var n=Object(c.useContext)(h),e=n.user,t=n.setIsHistory,i=n.isHistory,o=n.setUser,a=Object(c.useState)(!1),d=Object(u.a)(a,2),f=d[0],l=d[1],b=Object(c.useState)({matches:window.innerWidth>768}),m=Object(u.a)(b,2),p=m[0],g=m[1],x={height:p.matches?"40px":"30px",backgroundColor:p.matches?"#e9e7e7":"#ffffff",padding:"0.2rem",borderRadius:"1rem",margin:"0 0 0 0.2rem",cursor:"pointer",fontFamily:"'Source Sans Pro', sans-serif",fontSize:p.matches?"25px":"20px",marginText:"0 auto",paddingText:"0 0 0 0.5rem",lineHeight:p.matches?"2rem":"1.314rem",colorHovered:"#15dbff"},O={width:p.matches?"400px":"300px",height:"150px",backgroundColor:"rgba(0,0,0, .85)"};Object(c.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;g(Object(s.a)(Object(s.a)({},p),{},{matches:e}))}))}));var v=function(n){cn.postPoints(n).then((function(n){l(!1),j.getUser().then((function(e){return o(e),an()("Good job!","".concat(n.message),"success")}))}))};return Object(r.jsx)("section",{children:Object(r.jsxs)(F,{children:[Object(r.jsxs)(E,{children:[Object(r.jsx)(M,{src:R,alt:"Logo"}),Object(r.jsxs)(V,{isOpenModal:f,setIsOpenModal:l,tittle:"Add Coins",propsModal:O,children:[Object(r.jsx)(tn,{onClick:function(){v(1e3)},propsButton:Object(s.a)(Object(s.a)({},x),{},{backgroundColor:"#e9e8e8"}),tittle:"1000",children:Object(r.jsx)(B,{src:A,alt:"Coin"})}),Object(r.jsx)(tn,{onClick:function(){v(5e3)},propsButton:Object(s.a)(Object(s.a)({},x),{},{backgroundColor:"#e9e8e8"}),tittle:"5000",children:Object(r.jsx)(B,{src:A,alt:"Coin"})}),Object(r.jsx)(tn,{onClick:function(){v(7500)},propsButton:Object(s.a)(Object(s.a)({},x),{},{backgroundColor:"#e9e8e8"}),tittle:"7500",children:Object(r.jsx)(B,{src:A,alt:"Coin"})})]}),Object(r.jsxs)(H,{children:[Object(r.jsx)(tn,{propsButton:x,onClick:function(){l(!0)},tittle:p.matches?"AddCoins":null,children:Object(r.jsx)(X.a,{icon:Z.c,style:{color:"#FFCF00",fontSize:"25px",padding:"0.2rem"}})}),Object(r.jsx)(tn,{propsButton:x,onClick:function(){t(!i)},tittle:p.matches?i?"Home":"History":null,children:Object(r.jsx)(X.a,{icon:i?Z.b:Z.a,style:{color:"#FF8000",fontSize:"25px",padding:"0.2rem"}})}),Object(r.jsxs)(L,{children:[" ",e.name," "]}),Object(r.jsx)(tn,{propsButton:Object(s.a)(Object(s.a)({},x),{},{colorHovered:"#e9e7e7",backgroundColor:"#e9e7e7",cursor:"auto"}),tittle:e.points,children:Object(r.jsx)(B,{src:A,alt:"Coin"})})]})]}),Object(r.jsx)(I,{children:Object(r.jsxs)(T,{children:[" ",i?"History":"Electronics"]})})]})})}function un(){var n=Object(p.a)(["\n  font-family: Quicksand, arial, sans-serif;\n  margin-left: 16px;\n"]);return un=function(){return n},n}function dn(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 0.1rem;\n    flex-direction:row; \n"]);return dn=function(){return n},n}function fn(){var n=Object(p.a)(["\n   font-family:'Source Sans Pro', sans-serif;\n   color: #000000;\n   font-size:20px;\n   margin: 0.5rem 1rem;\n   line-height: 2rem; \n"]);return fn=function(){return n},n}function ln(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 0.1rem;\n    flex-direction:column;\n\n"]);return ln=function(){return n},n}function jn(){var n=Object(p.a)(["\n  color:#000000;\n  text-align:center;\n  padding-top:1rem;\n  font-size:36px;\n"]);return jn=function(){return n},n}function bn(){var n=Object(p.a)(["\n  width:100%;\n  margin-top:4rem;\n"]);return bn=function(){return n},n}function hn(){var n=Object(p.a)(["\n  font-family: Quicksand, arial, sans-serif;\n  margin-left: 18px;\n  text-align:",";\n  color:",";\n"]);return hn=function(){return n},n}function mn(){var n=Object(p.a)(["\n  font-family: Quicksand, arial, sans-serif;\n  margin-left: 16px;\n  text-align: ",";//center;\n  color: ","; //#f0faff\n"]);return mn=function(){return n},n}function pn(){var n=Object(p.a)(["\n  width: 25px;\n  height: 25px;\n  vertical-align:middle;\n"]);return pn=function(){return n},n}function gn(){var n=Object(p.a)(["\n  opacity:0.6;\n  background:#616161;\n  border-radius: 100px;\n  height:42px;\n  font-family:'Source Sans Pro', sans-serif;\n  font-size:20px;\n  margin: 1rem;\n  padding-left: 0.8rem;\n  padding-right:0.5rem;\n  line-height: 2.314rem; \n  text-align:center;\n  color:#ffffff;\n"]);return gn=function(){return n},n}function xn(){var n=Object(p.a)(["\n  width:100%;\n  display: flex;\n  flex-direction:row-reverse;\n"]);return xn=function(){return n},n}function On(){var n=Object(p.a)(["\n  margin: 0rem 1.5rem;\n  height: 1px;\n  background-color: #dcdcdc;\n  border: none; \n"]);return On=function(){return n},n}function vn(){var n=Object(p.a)(["\n  display: block;\n  width: ",";\n  height: ",";\n"]);return vn=function(){return n},n}function wn(){var n=Object(p.a)(["\n   display: flex;\n   justify-content: center;\n   width: 100%;\n"]);return wn=function(){return n},n}function yn(){var n=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity:0;\n  transition: .5s ease;\n  background-image:linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);\n  border-radius: 10px;\n  &:hover{\n      opacity: 0.8;\n  }\n"]);return yn=function(){return n},n}function Cn(){var n=Object(p.a)(["\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 10px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n    padding-bottom: 1px;\n    margin: 0.5rem;\n    position: relative;\n    background: ",";  //linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n"]);return Cn=function(){return n},n}function kn(){var n=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  grid-gap: 1vw;\n  margin-top: 2rem;\n"]);return kn=function(){return n},n}var Sn=g.a.div(kn()),Pn=g.a.div(Cn(),(function(n){return n.background})),zn=g.a.div(yn()),Fn=g.a.div(wn()),In=g.a.img.attrs({alt:"cardImage"})(vn(),(function(n){return n.widthImage?n.widthImage:"100%"}),(function(n){return n.heightImage?n.widthImage:"auto"})),En=g.a.hr(On()),Mn=g.a.div(xn()),Hn=g.a.div(gn()),Tn=g.a.img.attrs({alt:"coin"})(pn()),Bn=g.a.h3(mn(),(function(n){return n.textAlign}),(function(n){return n.color})),Ln=g.a.h4(hn(),(function(n){return n.textAlign}),(function(n){return n.color})),Rn=g.a.div(bn()),An=g.a.h3(jn()),Un=g.a.div(ln()),Yn=g.a.p(fn()),Dn=g.a.div(dn()),Wn=(g.a.h3(un()),t.p+"static/media/smiley.c314f0e8.svg"),Jn=t.p+"static/media/sad.d72c3dc6.svg";function Nn(){var n=Object(c.useContext)(h),e=n.user,t=n.isHistory,i=n.pagination,o=n.setUser,a=Object(c.useState)(!1),d=Object(u.a)(a,2),f=d[0],l=d[1],b=Object(c.useState)(!1),m=Object(u.a)(b,2),p=m[0],g=m[1],x=Object(c.useState)(!1),O=Object(u.a)(x,2),v=O[0],w=O[1],y=Object(c.useState)(""),C=Object(u.a)(y,2),k=C[0],S=C[1],P=Object(c.useState)(""),z=Object(u.a)(P,2),F=z[0],I=z[1],E=Object(c.useState)(!1),M=Object(u.a)(E,2),H=M[0],T=M[1],B=Object(c.useState)({matches:window.innerWidth>768}),L=Object(u.a)(B,2),R=L[0],U=L[1];Object(c.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;U(Object(s.a)(Object(s.a)({},R),{},{matches:e}))}))}));var Y=function(n,e){l(n),g(!1),I(e)},D=function(){g(!1)},W={height:"auto",width:"80%",backgroundColor:"#fbfbfb",borderRadius:"2rem",margin:"0rem 2rem 0rem",cursor:"pointer",fontFamily:"'Source Sans Pro', sans-serif",fontSize:"18px",color:"#616161",marginText:R.matches?"1.2rem 0 1.2rem 1rem":"1.5rem 0 1.5rem 4rem",paddingText:R.matches?"0 0 0 3rem":"0 0 0 0.5rem",colorHovered:"#15dbff"},J={width:R.matches?"400px":"300px",height:"auto",backgroundColor:"rgba(0,0,0, .35)"};return Object(r.jsx)(r.Fragment,{children:t?null:Object(r.jsx)(Sn,{children:0===Object.entries(i.currentData).length?Object(r.jsx)("h1",{children:"Sin datos"}):i.currentData.map((function(n,t){return Object(r.jsx)("section",{children:Object(r.jsx)(Pn,{onMouseOver:function(){return T(!0)},onMouseLeave:function(){return T(!1)},background:F===n._id&&p?v?"linear-gradient(to left, #ed213a, #93291e);":"linear-gradient(to right, #78ffd6, #a8ff78)":null,children:F===n._id&&p?Object(r.jsxs)("div",{children:[Object(r.jsx)(Fn,{children:Object(r.jsx)(In,{widthImage:"60%",heightImage:"auto",src:v?Jn:Wn})}),Object(r.jsx)(Bn,{textAlign:"center",color:"#f0faff",children:v?"Error!":"Success!"}),Object(r.jsx)(Ln,{textAlign:"center",color:"#f0faff",children:k}),Object(r.jsx)(tn,{onClick:D,propsButton:Object(s.a)(Object(s.a)({},W),{},{margin:"0rem 2rem 3rem",paddingText:R.matches?"0 4rem 0 4rem":"0 0 0 0.5rem",color:v?"#bf0000":"#009a00",colorHovered:"#fbfbfb"}),tittle:v?"TRY AGAIN":"CONTINUE"})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)(Mn,{children:e.points>n.cost?Object(r.jsx)(X.a,{icon:Z.d,style:{backgroundColor:"#0AD4FA",color:"#FFFFFF",fontSize:"25px",borderRadius:"50%",padding:"0.5rem",margin:"1rem"}}):Object(r.jsxs)(Hn,{children:["You need ",n.cost-e.points," ",Object(r.jsx)(Tn,{src:A})," "]})}),Object(r.jsx)(Fn,{children:Object(r.jsx)(In,{src:n.img.url})}),Object(r.jsx)(En,{}),Object(r.jsx)(Bn,{children:n.category}),Object(r.jsx)(Ln,{children:n.name}),Object(r.jsx)(V,{isOpenModal:f,setIsOpenModal:l,tittle:"Reedem",propsModal:J,children:Object(r.jsxs)(Un,{children:[Object(r.jsx)(Yn,{children:"Are you sure?"}),Object(r.jsxs)(Dn,{children:[Object(r.jsx)(tn,{onClick:function(){!function(n){cn.postRedeem(n).then((function(n){void 0===n.error||""===n.error?(w(!1),S(n.message),j.getUser().then((function(n){o(n)}))):(w(!0),S(n.error)),l(!1),g(!0)})).catch((function(n){S(n),w(!0)}))}(F)},propsButton:Object(s.a)(Object(s.a)({},W),{},{marginText:"1rem",paddingText:R.matches?"0 1rem":"0 0 0 0.5rem",backgroundColor:"#e9e8e8"}),tittle:"Yes"}),Object(r.jsx)(tn,{onClick:function(){Y(!1,F)},propsButton:Object(s.a)(Object(s.a)({},W),{},{marginText:"1rem",paddingText:R.matches?"0 1rem":"0 0 0 0.5rem",backgroundColor:"#e9e8e8"}),tittle:"No"})]})]})}),H?Object(r.jsxs)(zn,{children:[Object(r.jsx)(Mn,{children:e.points>n.cost?Object(r.jsx)(X.a,{icon:Z.d,style:{backgroundColor:"#FFFFFF",color:"#0AD4FA",fontSize:"25px",borderRadius:"50%",padding:"0.5rem",margin:"1rem"}}):Object(r.jsxs)(Hn,{style:{opacity:"1",background:"#fbfbfb",color:"#616161"},children:["You need ",n.cost-e.points," ",Object(r.jsx)(Tn,{src:A})," "]})}),Object(r.jsxs)(Rn,{children:[Object(r.jsxs)(An,{children:[n.cost,Object(r.jsx)(Tn,{style:{width:"36px",height:"36px"},src:A})]}),H&&e.points>n.cost?Object(r.jsx)(tn,{onClick:function(){Y(!0,n._id)},propsButton:Object(s.a)(Object(s.a)({},W),{},{colorHovered:"#fbfbfb"}),tittle:"Reedem now"}):null]})]}):null]})})},n._id)}))})})}var Qn=t(25),_n=t(11);function Gn(){var n=Object(p.a)(["\n  border-radius: 10px;\n  width: 95%;\n  height: 35px;\n  background: white;\n  color: gray;\n  padding-left: 5px;\n  font-size: 14px;\n  margin: 1.5rem 1rem;\n  option {\n    color: black;\n    background: white;\n    display: flex;\n    white-space: pre;\n    min-height: 20px;\n    padding: 0px 2px 1px;\n  }\n  "," {\n    width: 25%;\n    }\n"]);return Gn=function(){return n},n}function Kn(){var n=Object(p.a)(["\n  margin: 0rem 1.5rem;\n  height: 1px;\n  background-color: #dcdcdc;\n  border: none; \n"]);return Kn=function(){return n},n}function Xn(){var n=Object(p.a)(["\n  color: #a3a3a3;\n  font-size:20px;\n  "," {\n    font-size:24px;\n    margin-right: 1rem;\n  }\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(p.a)(["\n  margin: 0 0.3rem;\n  border:thin solid #d9d9d9;\n  "," {\n    margin: 0 1rem;\n  } \n"]);return Zn=function(){return n},n}function Vn(){var n=Object(p.a)(["\n  font-size:20px;\n  color: #616161;\n  text-align: center;\n  "," {\n    width: 40%;\n    margin-left: 0.5rem;\n    font-size: 24px;\n    line-height: 24px;\n  }\n"]);return Vn=function(){return n},n}function qn(){var n=Object(p.a)(["\n    display: flex;\n    margin: 1rem;\n    flex-direction:column;\n    "," {\n      flex-direction:row;\n    }\n"]);return qn=function(){return n},n}function $n(){var n=Object(p.a)(["\n    width:100%;\n    margin-top: 0px;\n"]);return $n=function(){return n},n}var ne="@media(min-width: 768px)",ee=g.a.div($n()),te=g.a.div(qn(),ne),re=g.a.h3(Vn(),ne),ce=g.a.span(Zn(),ne),ie=g.a.span(Xn(),ne),oe=g.a.hr(Kn()),ae=g.a.select(Gn(),ne);function se(){var n=Object(p.a)(["\n  width: 40px;\n  height: 40px; \n   "," {\n        padding: 0.1rem;\n    }\n"]);return se=function(){return n},n}function ue(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 0.1rem;\n    flex-direction:row;\n    "," {\n      margin-left: 10rem;\n    }\n"]);return ue=function(){return n},n}var de="@media(min-width: 768px)",fe=g.a.div(ue(),de),le=g.a.img(se(),de),je=t.p+"static/media/arrow-left.48260431.svg",be=t.p+"static/media/arrow-right.ec702bfd.svg";function he(n){var e=Object(c.useContext)(h).pagination,t=Object(c.useState)({matches:window.innerWidth>768}),i=Object(u.a)(t,2),o=i[0],a=i[1];Object(c.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;a(Object(s.a)(Object(s.a)({},o),{},{matches:e}))}))}));var d={height:o.matches?"40px":"25px",width:o.matches?"40px":"25px",backgroundColor:"#ffffff",padding:"0",borderRadius:"100%",margin:"1rem",colorHovered:"#eceff1"};return Object(r.jsx)("section",{children:Object(r.jsxs)(fe,{children:[Object(r.jsx)(tn,{disabled:e.currentPage<=1,onClick:function(){e.prevPage()},propsButton:d,children:Object(r.jsx)(le,{src:je,alt:"arrowLeft"})}),Object(r.jsx)(tn,{disabled:e.currentPage>=e.maxPage,onClick:function(){e.nextPage()},propsButton:d,children:Object(r.jsx)(le,{src:be,alt:"arrowRight"})})]})})}function me(){var n=Object(c.useContext)(h),e=n.productsList,t=n.isHistory,i=n.setFiltersList,o=n.filters,a=n.setFilters,d=n.pagination,f=Object(c.useState)(o),l=Object(u.a)(f,1)[0],j=Object(c.useState)({matches:window.innerWidth>768}),b=Object(u.a)(j,2),m=b[0],p=b[1];Object(c.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;p(Object(s.a)(Object(s.a)({},m),{},{matches:e}))}))})),Object(c.useEffect)((function(){var n=e;switch(o.order){case 1:n=e.sort((function(n,e){return n.cost-e.cost}));break;case 2:n=e.sort((function(n,e){return e.cost-n.cost}))}n=n.filter((function(n){return"todos"!==o.category&&n.category===o.category||"todos"===o.category})),i(n),n.length<=16&&d.setCurrentPage(1)}),[o,i]);var g=function(n,e){var t=void 0===e.target?e:e.target.value;a((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(_n.a)({},n,t))}))},x={height:m.matches?"30%":"auto",width:m.matches?"15%":"100%",backgroundColor:"#ededed",padding:"0 2.5rem",borderRadius:"2rem",margin:"0.3rem 1rem 0.3rem 0",cursor:"pointer",fontFamily:"'Source Sans Pro', sans-serif",fontSize:"18px",color:"#616161",marginText:m.matches?"1.2rem 0 1.2rem 1rem":"1.5rem 0 1.5rem 4rem",colorHovered:"#15dbff"};return Object(r.jsx)("section",{children:Object(r.jsxs)(ee,{children:[t?null:Object(r.jsxs)(te,{children:[Object(r.jsxs)(re,{children:["Page ".concat(d.currentPage," of ").concat(d.maxPage)," ",Object(r.jsx)(ce,{})," ",Object(r.jsx)(ie,{children:"Sort by: "})]}),Object(r.jsxs)(ae,{name:"category",value:o.category,onChange:function(n){return g(n.target.name,n)},children:[Object(r.jsx)("option",{value:"todos",children:"Todos los Productos"}),Object(Qn.a)(new Set(e.map((function(n){return n.category})))).map((function(n){return Object(r.jsx)("option",{children:n},n)}))]}),Object(r.jsx)(tn,{onClick:function(){a(l)},propsButton:x,tittle:"Most recent"}),Object(r.jsx)(tn,{onClick:function(){g("order",1)},propsButton:x,tittle:"Lowest price"}),Object(r.jsx)(tn,{onClick:function(){g("order",2)},propsButton:x,tittle:"Highest price"}),Object(r.jsx)(he,{})]}),Object(r.jsx)(oe,{})]})})}function pe(){var n=Object(p.a)(["\n   padding: 4px 8px;\n   flex: ",";\n   ",";\n \n \n    \n   \n"]);return pe=function(){return n},n}function ge(){var n=Object(p.a)(["\n    display:flex;\n    padding: 4px 8px;\n    border: 1px solid #ddd;\n    background-color: ",";//#15dbff;\n"]);return ge=function(){return n},n}function xe(){var n=Object(p.a)(["\n    width:100%;\n    height:auto;\n    &:nth-child(even) {\n      background: #ebe7e7\n    } \n"]);return xe=function(){return n},n}function Oe(){var n=Object(p.a)(["\n    width:98%;\n    margin: 2rem 1rem 0px 0.5rem;\n"]);return Oe=function(){return n},n}var ve=g.a.div(Oe()),we=g.a.div(xe()),ye=g.a.div(ge(),(function(n){return n.backgroungColor})),Ce={xs:function(n){return"\n    '@media(min-width: 768px)'{\n        ".concat(n,"\n    }\n")}},ke=g.a.div(pe(),(function(n){return n.size}),(function(n){return n.collapse&&Ce[n.collapse]("\n        display:none;\n  ")}));function Se(){var n=Object(c.useContext)(h),e=n.isHistory,t=n.pagination,i=Object(c.useState)({matches:window.innerWidth>768}),o=Object(u.a)(i,2),a=o[0],d=o[1];return Object(c.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;d(Object(s.a)(Object(s.a)({},a),{},{matches:e}))}))})),Object(r.jsx)("section",{children:e?a.matches?Object(r.jsxs)(ve,{children:[Object(r.jsxs)(ye,{backgroungColor:"#7de1fa",children:[Object(r.jsx)(ke,{size:1,collapse:"xs",children:"Id"}),Object(r.jsx)(ke,{size:1,collapse:"xs",children:"Product"}),Object(r.jsx)(ke,{size:1,collapse:"xs",children:"Category"}),Object(r.jsx)(ke,{size:1,collapse:"xs",children:"Cost"})]}),t.currentData.map((function(n,e){return Object(r.jsx)(we,{children:Object(r.jsxs)(ye,{children:[Object(r.jsx)(ke,{size:1,collapse:"xs",children:n.productId}),Object(r.jsx)(ke,{size:1,collapse:"xs",children:n.name}),Object(r.jsx)(ke,{size:1,collapse:"xs",children:n.category}),Object(r.jsx)(ke,{size:1,collapse:"xs",children:n.cost})]})},e)}))]}):Object(r.jsx)(Sn,{children:t.currentData.map((function(n,e){return Object(r.jsxs)(Pn,{children:[Object(r.jsx)(Fn,{children:Object(r.jsx)(In,{src:n.img.url})}),Object(r.jsx)(En,{}),Object(r.jsx)(Bn,{children:n.category}),Object(r.jsx)(Ln,{children:n.name}),Object(r.jsx)(Ln,{children:" Cost: ".concat(n.cost)})]})}))}):null})}function Pe(){var n=Object(p.a)(["\n    width:100%;\n"]);return Pe=function(){return n},n}function ze(){var n=Object(p.a)(["\n    display: flex;\n    margin: 1rem;\n    flex-direction:column;\n    "," {\n      flex-direction:row;\n    }\n"]);return ze=function(){return n},n}function Fe(){var n=Object(p.a)(["\n  font-size:20px;\n  color: #616161;\n  text-align: center;\n  "," {\n    width: 15%;\n    margin-left: 0.5rem;\n    font-size: 24px;\n    line-height: 24px;\n  }\n"]);return Fe=function(){return n},n}function Ie(){var n=Object(p.a)(["\n    width:100%;\n"]);return Ie=function(){return n},n}var Ee="@media(min-width: 768px)",Me=g.a.div(Ie()),He=g.a.h3(Fe(),Ee),Te=g.a.div(ze(),Ee),Be=g.a.div(Pe());function Le(){var n=Object(c.useContext)(h).pagination;return Object(r.jsx)("section",{children:Object(r.jsx)(Me,{children:Object(r.jsxs)(Te,{children:[Object(r.jsx)(Be,{children:Object(r.jsx)(He,{children:"Page ".concat(n.currentPage," of ").concat(n.maxPage)})}),Object(r.jsx)(he,{})]})})})}var Re=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(m,{children:[Object(r.jsx)(sn,{}),Object(r.jsx)(me,{}),Object(r.jsx)(Nn,{}),Object(r.jsx)(Se,{}),Object(r.jsx)(Le,{})]})})},Ae=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Re,{})}),document.getElementById("root")),Ae()}},[[36,1,2]]]);
//# sourceMappingURL=main.5ce50f4d.chunk.js.map