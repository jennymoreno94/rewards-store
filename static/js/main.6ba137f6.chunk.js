(this["webpackJsonpstore-moreno-vallejo-jenny"]=this["webpackJsonpstore-moreno-vallejo-jenny"]||[]).push([[0],{41:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),i=t.n(c),o=t(30),a=t.n(o),s=(t(41),t(4)),u=t(6),d={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdjYmFiMjc2NmZiNTAwMjRhYTg3OWMiLCJpYXQiOjE2MTg3ODY5OTR9.WYYaYuoIw0y3C3-1bAog7PKvB5RclZcms3sK0d_ev38"},f={getUser:"https://coding-challenge-api.aerolab.co/user/me",postPoints:"https://coding-challenge-api.aerolab.co/user/points",getHistory:"https://coding-challenge-api.aerolab.co/user/history",postRedeem:"https://coding-challenge-api.aerolab.co/redeem",getProducts:"https://coding-challenge-api.aerolab.co/products"},j="GET",l={getUser:function(){return new Promise((function(n,e){fetch(f.getUser,{method:j,headers:d}).then((function(e){return n(e.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.getUser,":")+n.message),e(n)}))}))},getProducts:function(){return new Promise((function(n,e){fetch(f.getProducts,{method:j,headers:d}).then((function(e){return n(e.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.getProducts,":")+n.message),e(n)}))}))},getHistory:function(){return new Promise((function(n,e){fetch(f.getHistory,{method:j,headers:d}).then((function(n){return n.json()})).then((function(e){return n(e),e})).catch((function(n){console.log("Error petici\xf3n ".concat(f.getHistory,":")+n.message),e(n)}))}))}},h=function(n,e){var t=Object(c.useState)(1),r=Object(u.a)(t,2),i=r[0],o=r[1],a=Math.ceil(n.length/e);return{currentData:n.slice((i-1)*e,i*e),currentPage:i,maxPage:a,nextPage:function(){o(i+1)},prevPage:function(){o(i-1)},jumpTo:function(n){o(n)},setCurrentPage:o}},b="Reedem now",m="Reedem",p="yes",g="no",O="Error!",x="Success!",v="TRY AGAIN",w="CONTINUE",y="Are you sure?",k="You need ",C="(min-width: 768px)",S="All Products",P="Lowest price",F="Highest price",z="Sort by:",E="todos",I="order",M="History",H="Home",T="Electronics",B="1000",L="5000",R="7500",A="Add Coins",U="/history",D="/rewards-store",J=i.a.createContext();function W(n){var e=n.children,t=Object(c.useState)([]),i=Object(u.a)(t,2),o=i[0],a=i[1],s=Object(c.useState)([]),d=Object(u.a)(s,2),f=d[0],j=d[1],b=Object(c.useState)([]),m=Object(u.a)(b,2),p=m[0],g=m[1],O=Object(c.useState)(!1),x=Object(u.a)(O,2),v=x[0],w=x[1],y=Object(c.useState)([]),k=Object(u.a)(y,2),C=k[0],S=k[1],P=h(v?p:0===Object.entries(f).length?o:f,16),F=Object(c.useState)({category:E,order:0}),z=Object(u.a)(F,2),I=z[0],M=z[1];return Object(c.useEffect)((function(){return l.getProducts().then((function(n){a(n)}))}),[o===[]]),Object(c.useEffect)((function(){return l.getUser().then((function(n){S(n)}))}),[C===[]]),Object(c.useEffect)((function(){return l.getHistory().then((function(n){g(n)}))}),[v]),Object(r.jsx)(J.Provider,{value:{productsList:o,user:C,setUser:S,history:p,isHistory:v,setIsHistory:w,setProductsList:a,filtersList:f,setFiltersList:j,filters:I,setFilters:M,pagination:P},children:e})}var Y=t(2),N=t(3),Q=t.p+"static/media/header-x1.b6f067c6.png";function _(){var n=Object(Y.a)(["\n    height: auto;\n    font-family:'Source Sans Pro', sans-serif;\n    font-size:10px;\n    color:black;\n    align-self: center;\n    margin:0px;\n    margin-left:0.5rem;\n    padding: 0.5rem 0rem 0.5rem 0rem;\n    "," {\n        font-size:16px;\n    }\n"]);return _=function(){return n},n}function G(){var n=Object(Y.a)(["\n  width: 25px;\n  height: 25px; \n   "," {\n        padding: 0.1rem;\n        width: 36px;\n        height: 36px;\n    }\n"]);return G=function(){return n},n}function K(){var n=Object(Y.a)(["\n    font-family:'Source Sans Pro', sans-serif;\n    font-size:20px;\n    color:#ffffff;\n    align-self: center;\n    padding-top: 1.5rem;\n    padding-left: 2rem;\n    margin:0px;\n    "," {\n        font-size:64px;\n        padding-top: 5rem;\n        padding-left: 4rem;\n    }\n"]);return K=function(){return n},n}function X(){var n=Object(Y.a)(["\n    width:80%;\n    display: flex;\n    flex-direction: row; \n    padding: 1rem 0.5rem 1rem 2rem;\n    "," {\n        padding: 1rem 2rem 1rem 0rem;\n        width:40%;\n    }\n"]);return X=function(){return n},n}function Z(){var n=Object(Y.a)(["\n  width: 25px;\n  height: 25px;\n  display: block;\n  padding: 1rem 0rem 1rem 2rem;\n   "," {\n        width: 36px;\n        height: 36px;\n    }\n"]);return Z=function(){return n},n}function V(){var n=Object(Y.a)(["\n    width:100%;\n    display:flex;\n    justify-content: space-between;\n    \n"]);return V=function(){return n},n}function q(){var n=Object(Y.a)(["\n    width:100%;\n    display:flex;\n    background-image: url(",");\n    height:30vw;\n    background-size:cover;\n"]);return q=function(){return n},n}function $(){var n=Object(Y.a)(["\n    width:100%;\n"]);return $=function(){return n},n}var nn="@media(min-width: 768px)",en=N.a.div($()),tn=N.a.div(q(),Q),rn=N.a.div(V()),cn=N.a.img.attrs({alt:"Logo"})(Z(),nn),on=N.a.div(X(),nn),an=N.a.h6(K(),nn),sn=N.a.img.attrs({alt:"Coin"})(G(),nn),un=N.a.h6(_(),nn),dn={backgroundColor:"#e9e8e8"},fn={colorHovered:"#e9e7e7",backgroundColor:"#e9e7e7",cursor:"auto"},jn=function(n){return{color:n?"#FFCF00":"#FF8000",fontSize:"25px",padding:"0.2rem"}},ln=function(n){return{colorHovered:n?"#15dbff":"#FFFFFF"}},hn=t.p+"static/media/aerolab-logo.0a8fb170.svg",bn=t.p+"static/media/coin.b8bc711d.svg";function mn(){var n=Object(Y.a)(["\n   font-family:'Source Sans Pro', sans-serif;\n   color: #ffffff;\n   font-size:20px;\n   margin: 0.5rem 1rem;\n   line-height: 2rem; \n"]);return mn=function(){return n},n}function pn(){var n=Object(Y.a)(["\n    display:flex;\n    justify-content: space-between;\n    background: #15dbff;\n    width:100%;\n    height:auto;\n    padding:0.5rem 0rem;\n    border-radius:1rem 1rem 0rem 0rem;\n"]);return pn=function(){return n},n}function gn(){var n=Object(Y.a)(["\n    width:100%;\n    display: flex;\n    justify-content: space-evenly;\n    margin:1rem 0.5rem;\n"]);return gn=function(){return n},n}function On(){var n=Object(Y.a)(["\n    background: #fbfbfb;\n    width:  ",";\n    height: ",";\n    border-radius:1rem;\n"]);return On=function(){return n},n}function xn(){var n=Object(Y.a)(["\n    background-color: ",";  //rgba(0,0,0, .85);\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    display: ",";\n    justify-content: center;\n    align-items: center;\n"]);return xn=function(){return n},n}var vn=N.a.div(xn(),(function(n){return n.theme.backgroundColor}),(function(n){return n.open?"flex":"none"})),wn=N.a.div(On(),(function(n){return n.theme.width}),(function(n){return n.theme.height})),yn=N.a.div(gn()),kn=N.a.div(pn()),Cn=N.a.p(mn()),Sn=t(13),Pn=t(12);function Fn(n){var e=Object(c.useState)({matches:window.innerWidth>768}),t=Object(u.a)(e,2),i=t[0],o=t[1];Object(c.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){var e=n.matches;o(Object(s.a)(Object(s.a)({},i),{},{matches:e}))}))}));return Object(r.jsx)("section",{children:Object(r.jsx)(vn,{theme:n.propsModal,open:n.isOpenModal,children:Object(r.jsxs)(wn,{theme:n.propsModal,children:[Object(r.jsxs)(kn,{children:[Object(r.jsx)(Cn,{children:n.tittle}),Object(r.jsx)(Sn.a,{open:n.isOpenModal,onClick:function(){n.setIsOpenModal(!1)},icon:Pn.e,style:{color:"#ffffff",fontSize:"30px",margin:"0.5rem 1rem",cursor:"pointer"}})]}),Object(r.jsxs)(yn,{children:[" ",n.children," "]})]})})})}function zn(){var n=Object(Y.a)(["\n   font-family:",";\n   font-size:",";\n   margin: ",";\n   padding:",";\n   line-height: ",";\n   color:",";\n  \n"]);return zn=function(){return n},n}function En(){var n=Object(Y.a)(["\n   height : ",";\n   width : ",";\n   background-color: ",";\n   border: none;\n   display:flex;\n   justify-content: space-between;\n   padding:",";\n   border-radius: ",";\n   margin: ",";\n   outline: none;\n   cursor: ",";\n   &:hover{\n     background-color: ",";\n  }\n"]);return En=function(){return n},n}var In=N.a.button(En(),(function(n){return n.theme.height}),(function(n){return n.theme.width}),(function(n){return n.theme.backgroundColor}),(function(n){return n.theme.padding}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.margin}),(function(n){return n.theme.cursor}),(function(n){return n.theme.colorHovered})),Mn=N.a.p(zn(),(function(n){return n.theme.fontFamily}),(function(n){return n.theme.fontSize}),(function(n){return n.theme.marginText}),(function(n){return n.theme.paddingText}),(function(n){return n.theme.lineHeight}),(function(n){return n.theme.color}));function Hn(n){return Object(r.jsxs)(In,{disabled:n.disabled,onClick:n.onClick,theme:n.propsButton,children:[Object(r.jsx)(Mn,{theme:n.propsButton,children:n.tittle}),n.children]})}var Tn="POST",Bn={postPoints:function(n){return new Promise((function(e,t){fetch(f.postPoints,{method:Tn,headers:d,body:JSON.stringify({amount:n})}).then((function(n){return e(n.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.postPoints,":")+n.message),t(n)}))}))},postRedeem:function(n){return new Promise((function(e,t){fetch(f.postRedeem,{method:Tn,headers:d,body:JSON.stringify({productId:n})}).then((function(n){e(n.json())})).catch((function(n){console.log("Error petici\xf3n ".concat(f.postPoints,":")+n.message),t(n)}))}))}},Ln=t(34),Rn=t.n(Ln),An=t(7);function Un(){var n,e=Object(An.f)(),t=Object(c.useContext)(J),i=t.user,o=t.setIsHistory,a=t.isHistory,d=t.setUser,f=t.pagination,j=Object(c.useState)(!1),h=Object(u.a)(j,2),b=h[0],m=h[1],p=Object(c.useState)({matches:window.innerWidth>768}),g=Object(u.a)(p,2),O=g[0],x=g[1],v={height:(n=O.matches)?"40px":"30px",backgroundColor:n?"#e9e7e7":"#ffffff",padding:"0.2rem",borderRadius:"1rem",margin:"0 0 0 0.2rem",cursor:"pointer",fontFamily:"'Source Sans Pro', sans-serif",fontSize:n?"25px":"20px",marginText:"0 auto",paddingText:"0 0 0 0.5rem",lineHeight:n?"2rem":"1.314rem",colorHovered:"#15dbff"},w=function(n){return{width:n?"400px":"300px",height:"150px",backgroundColor:"rgba(0,0,0, .85)"}}(O.matches);Object(c.useEffect)((function(){window.matchMedia(C).addEventListener("change",(function(n){var e=n.matches;x(Object(s.a)(Object(s.a)({},O),{},{matches:e}))}))}));var y=function(n){Bn.postPoints(n).then((function(n){m(!1),l.getUser().then((function(e){return d(e),Rn()("Good job!","".concat(n.message),"success")}))}))};return Object(r.jsx)("section",{children:Object(r.jsxs)(en,{children:[Object(r.jsxs)(rn,{children:[Object(r.jsx)(cn,{src:hn}),Object(r.jsxs)(Fn,{isOpenModal:b,setIsOpenModal:m,tittle:A,propsModal:w,children:[Object(r.jsx)(Hn,{onClick:function(){y(1e3)},propsButton:Object(s.a)(Object(s.a)({},v),dn),tittle:B,children:Object(r.jsx)(sn,{src:bn})}),Object(r.jsx)(Hn,{onClick:function(){y(5e3)},propsButton:Object(s.a)(Object(s.a)({},v),dn),tittle:L,children:Object(r.jsx)(sn,{src:bn})}),Object(r.jsx)(Hn,{onClick:function(){y(7500)},propsButton:Object(s.a)(Object(s.a)({},v),dn),tittle:R,children:Object(r.jsx)(sn,{src:bn})})]}),Object(r.jsxs)(on,{children:[Object(r.jsx)(Hn,{propsButton:Object(s.a)(Object(s.a)({},v),ln(O.matches)),onClick:function(){m(!0)},tittle:O.matches?A:null,children:Object(r.jsx)(Sn.a,{icon:Pn.c,style:jn(!0)})}),Object(r.jsx)(Hn,{propsButton:Object(s.a)(Object(s.a)({},v),ln(O.matches)),onClick:function(){var n=!a;e.push(n?U:D),o(n),f.setCurrentPage(1)},tittle:O.matches?a?H:M:null,children:Object(r.jsx)(Sn.a,{icon:a?Pn.b:Pn.a,style:jn(!1)})}),Object(r.jsxs)(un,{children:[" ",i.name," "]}),Object(r.jsx)(Hn,{propsButton:Object(s.a)(Object(s.a)({},v),fn),tittle:i.points,children:Object(r.jsx)(sn,{src:bn})})]})]}),Object(r.jsx)(tn,{children:Object(r.jsxs)(an,{children:[" ",a?M:T]})})]})})}function Dn(){var n=Object(Y.a)(["\n  font-family: Quicksand, arial, sans-serif;\n  margin-left: 16px;\n"]);return Dn=function(){return n},n}function Jn(){var n=Object(Y.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 0.1rem;\n    flex-direction:row; \n"]);return Jn=function(){return n},n}function Wn(){var n=Object(Y.a)(["\n   font-family:'Source Sans Pro', sans-serif;\n   color: #000000;\n   font-size:20px;\n   margin: 0.5rem 1rem;\n   line-height: 2rem; \n"]);return Wn=function(){return n},n}function Yn(){var n=Object(Y.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 0.1rem;\n    flex-direction:column;\n\n"]);return Yn=function(){return n},n}function Nn(){var n=Object(Y.a)(["\n  color:#000000;\n  text-align:center;\n  padding-top:1rem;\n  font-size:36px;\n"]);return Nn=function(){return n},n}function Qn(){var n=Object(Y.a)(["\n  width:100%;\n  margin-top:4rem;\n"]);return Qn=function(){return n},n}function _n(){var n=Object(Y.a)(["\n  font-family: Quicksand, arial, sans-serif;\n  margin-left: 18px;\n  text-align:",";\n  color:",";\n"]);return _n=function(){return n},n}function Gn(){var n=Object(Y.a)(["\n  font-family: Quicksand, arial, sans-serif;\n  margin-left: 16px;\n  text-align: ",";\n  color: ",";\n"]);return Gn=function(){return n},n}function Kn(){var n=Object(Y.a)(["\n  width: ",";\n  height: ",";\n  vertical-align:middle;\n"]);return Kn=function(){return n},n}function Xn(){var n=Object(Y.a)(["\n  opacity: ",";\n  background: ",";\n  border-radius: 100px;\n  height:42px;\n  font-family:'Source Sans Pro', sans-serif;\n  font-size:20px;\n  margin: 1rem;\n  padding-left: 0.8rem;\n  padding-right:0.5rem;\n  line-height: 2.314rem; \n  text-align:center;\n  color:",";\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(Y.a)(["\n  width:100%;\n  display: flex;\n  flex-direction:row-reverse;\n"]);return Zn=function(){return n},n}function Vn(){var n=Object(Y.a)(["\n  margin: 0rem 1.5rem;\n  height: 1px;\n  background-color: #dcdcdc;\n  border: none; \n"]);return Vn=function(){return n},n}function qn(){var n=Object(Y.a)(["\n  display: block;\n  width: ",";\n  height: ",";\n"]);return qn=function(){return n},n}function $n(){var n=Object(Y.a)(["\n   display: flex;\n   justify-content: center;\n   width: 100%;\n"]);return $n=function(){return n},n}function ne(){var n=Object(Y.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity:0;\n  transition: .5s ease;\n  background-image:linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);\n  border-radius: 10px;\n  &:hover{\n      opacity: 0.8;\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(Y.a)(["\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 10px rgba(0, 0, 0, 0.08);\n    width:100%;\n    border-radius: 10px;\n    padding-bottom: 1px;\n    margin: 0.5rem;\n    min-width: 300px;\n    position: relative;\n    background: ",";\n"]);return ee=function(){return n},n}function te(){var n=Object(Y.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  margin-top: 2rem;\n  gap: 1vw;\n"]);return te=function(){return n},n}var re=N.a.div(te()),ce=N.a.div(ee(),(function(n){return n.theme.background})),ie=N.a.div(ne()),oe=N.a.div($n()),ae=N.a.img.attrs({alt:"cardImage",width:"100%",height:"auto"})(qn(),(function(n){return n.theme.widthImage?n.theme.widthImage:"100%"}),(function(n){return n.theme.heightImage?n.theme.heightImage:"auto"})),se=N.a.hr(Vn()),ue=N.a.div(Zn()),de=N.a.div(Xn(),(function(n){return n.theme.opacity?n.theme.opacity:.6}),(function(n){return n.theme.background?n.theme.background:"#616161"}),(function(n){return n.theme.background?n.theme.background:"#ffffff"})),fe=N.a.img.attrs({alt:"coin"})(Kn(),(function(n){return n.theme.width?n.theme.width:"25px"}),(function(n){return n.theme.height?n.theme.height:"25px"})),je=N.a.h3(Gn(),(function(n){return n.theme.textAlign}),(function(n){return n.theme.color})),le=N.a.h4(_n(),(function(n){return n.theme.textAlign}),(function(n){return n.theme.color})),he=N.a.div(Qn()),be=N.a.h3(Nn()),me=N.a.div(Yn()),pe=N.a.p(Wn()),ge=N.a.div(Jn()),Oe=(N.a.h3(Dn()),function(n){return{marginText:"1rem",backgroundColor:"#e9e8e8",paddingText:n?"0 1rem":"0 0 0 0.5rem"}}),xe={colorHovered:"#fbfbfb"},ve=function(n,e){return{margin:"0rem 2rem 3rem",paddingText:n?"0 4rem 0 4rem":"0 0 0 0.5rem",color:e?"#bf0000":"#009a00",colorHovered:"#fbfbfb"}},we={textAlign:"center",color:"#f0faff"},ye=function(n){return{backgroundColor:n?"#0AD4FA":"#FFFFFF",color:n?"#FFFFFF":"#0AD4FA",fontSize:"25px",borderRadius:"50%",padding:"0.5rem",margin:"1rem"}},ke={opacity:"1",background:"#fbfbfb",color:"#616161"},Ce={widthImage:"60%",heightImage:"auto"},Se={width:"50px",height:"50px"},Pe=function(n){return{background:n?"linear-gradient(to left, #ed213a, #93291e);":"linear-gradient(to right, #78ffd6, #a8ff78)"}},Fe=t.p+"static/media/smiley.c314f0e8.svg",ze=t.p+"static/media/sad.d72c3dc6.svg";function Ee(){var n=Object(c.useContext)(J),e=n.user,t=n.pagination,i=n.setUser,o=Object(c.useState)(!1),a=Object(u.a)(o,2),d=a[0],f=a[1],j=Object(c.useState)(!1),h=Object(u.a)(j,2),S=h[0],P=h[1],F=Object(c.useState)(!1),z=Object(u.a)(F,2),E=z[0],I=z[1],M=Object(c.useState)(""),H=Object(u.a)(M,2),T=H[0],B=H[1],L=Object(c.useState)(""),R=Object(u.a)(L,2),A=R[0],U=R[1],D=Object(c.useState)(!1),W=Object(u.a)(D,2),Y=W[0],N=W[1],Q=Object(c.useState)({matches:window.innerWidth>768}),_=Object(u.a)(Q,2),G=_[0],K=_[1];Object(c.useEffect)((function(){window.matchMedia(C).addEventListener("change",(function(n){var e=n.matches;K(Object(s.a)(Object(s.a)({},G),{},{matches:e}))}))}));var X,Z=function(n,e){f(n),P(!1),U(e)},V=function(){P(!1)},q={height:"auto",width:"80%",backgroundColor:"#fbfbfb",borderRadius:"2rem",margin:"0rem 2rem 0rem",cursor:"pointer",fontFamily:"'Source Sans Pro', sans-serif",fontSize:"18px",color:"#616161",colorHovered:"#15dbff",marginText:(X=G.matches)?"1.2rem 0 1.2rem 1rem":"1.5rem 0 1.5rem 4rem",paddingText:X?"0 0 0 3rem":"0 0 0 0.5rem"},$=function(n){return{height:"auto",backgroundColor:"rgba(0,0,0, .35)",width:n?"400px":"300px"}}(G.matches);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(re,{children:0===Object.entries(t.currentData).length?Object(r.jsx)("h1",{children:"Sin datos"}):t.currentData.map((function(n,t){return Object(r.jsx)("section",{children:Object(r.jsx)(ce,{onMouseOver:function(){return N(!0)},onMouseLeave:function(){return N(!1)},theme:A===n._id&&S?Pe(E):null,children:A===n._id&&S?Object(r.jsxs)("div",{children:[Object(r.jsx)(oe,{children:Object(r.jsx)(ae,{theme:Ce,src:E?ze:Fe})}),Object(r.jsx)(je,{theme:we,children:E?O:x}),Object(r.jsx)(le,{theme:we,children:T}),Object(r.jsx)(Hn,{onClick:V,propsButton:Object(s.a)(Object(s.a)({},q),ve(G.matches,E)),tittle:E?v:w})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)(ue,{children:e.points>n.cost?Object(r.jsx)(Sn.a,{icon:Pn.d,style:ye(!0)}):Object(r.jsxs)(de,{children:[k," ",n.cost-e.points," ",Object(r.jsx)(fe,{src:bn})," "]})}),Object(r.jsx)(oe,{children:Object(r.jsx)(ae,{src:n.img.url})}),Object(r.jsx)(se,{}),Object(r.jsx)(je,{children:n.category}),Object(r.jsx)(le,{children:n.name}),Object(r.jsx)(Fn,{isOpenModal:d,setIsOpenModal:f,tittle:m,propsModal:$,children:Object(r.jsxs)(me,{children:[Object(r.jsx)(pe,{children:y}),Object(r.jsxs)(ge,{children:[Object(r.jsx)(Hn,{onClick:function(){!function(n){Bn.postRedeem(n).then((function(n){void 0===n.error||""===n.error?(I(!1),B(n.message),l.getUser().then((function(n){i(n)}))):(I(!0),B(n.error)),f(!1),P(!0)})).catch((function(n){B(n),I(!0)}))}(A)},propsButton:Object(s.a)(Object(s.a)({},q),Oe(G.matches)),tittle:p}),Object(r.jsx)(Hn,{onClick:function(){Z(!1,A)},propsButton:Object(s.a)(Object(s.a)({},q),Oe(G.matches)),tittle:g})]})]})}),Y?Object(r.jsxs)(ie,{children:[Object(r.jsx)(ue,{children:e.points>n.cost?Object(r.jsx)(Sn.a,{icon:Pn.d,style:ye(!1)}):Object(r.jsxs)(de,{theme:ke,children:[k," ",n.cost-e.points," ",Object(r.jsx)(fe,{src:bn})," "]})}),Object(r.jsxs)(he,{children:[Object(r.jsxs)(be,{children:[n.cost,Object(r.jsx)(fe,{theme:Se,src:bn})]}),Y&&e.points>n.cost?Object(r.jsx)(Hn,{onClick:function(){Z(!0,n._id)},propsButton:Object(s.a)(Object(s.a)({},q),xe),tittle:b}):null]})]}):null]})})},n._id)}))})})}var Ie=t(35),Me=t(20);function He(){var n=Object(Y.a)(["\n  border-radius: 10px;\n  width: 95%;\n  height: 35px;\n  background: white;\n  color: gray;\n  padding-left: 5px;\n  font-size: 14px;\n  margin: 1.5rem 1rem;\n  option {\n    color: black;\n    background: white;\n    display: flex;\n    white-space: pre;\n    min-height: 20px;\n    padding: 0px 2px 1px;\n  }\n  "," {\n    width: 25%;\n    }\n"]);return He=function(){return n},n}function Te(){var n=Object(Y.a)(["\n  margin: 0rem 1.5rem;\n  height: 1px;\n  background-color: #dcdcdc;\n  border: none; \n"]);return Te=function(){return n},n}function Be(){var n=Object(Y.a)(["\n  color: #908e8e;\n  font-size:20px;\n  "," {\n    font-size:24px;\n    margin-right: 1rem;\n  }\n"]);return Be=function(){return n},n}function Le(){var n=Object(Y.a)(["\n  margin: 0 0.3rem;\n  border:thin solid #d9d9d9;\n  "," {\n    margin: 0 1rem;\n  } \n"]);return Le=function(){return n},n}function Re(){var n=Object(Y.a)(["\n  font-size:20px;\n  color: #616161;\n  text-align: center;\n  "," {\n    width: 40%;\n    margin-left: 0.5rem;\n    font-size: 24px;\n    line-height: 24px;\n  }\n"]);return Re=function(){return n},n}function Ae(){var n=Object(Y.a)(["\n    display: flex;\n    margin: 1rem;\n    flex-direction:column;\n    "," {\n      flex-direction:row;\n    }\n"]);return Ae=function(){return n},n}function Ue(){var n=Object(Y.a)(["\n    width:100%;\n    margin-top: 0px;\n"]);return Ue=function(){return n},n}var De="@media(min-width: 768px)",Je=N.a.div(Ue()),We=N.a.div(Ae(),De),Ye=N.a.h3(Re(),De),Ne=N.a.span(Le(),De),Qe=N.a.span(Be(),De),_e=N.a.hr(Te()),Ge=N.a.select(He(),De),Ke=function(n){return{height:n?"30%":"auto",width:n?"15%":"100%",backgroundColor:"#ededed",padding:"0 2.5rem",borderRadius:"2rem",margin:"0.3rem 1rem 0.3rem 0",cursor:"pointer",fontFamily:"'Source Sans Pro', sans-serif",fontSize:"18px",color:"#616161",marginText:n?"1.2rem 0 1.2rem 1rem":"1.5rem 0 1.5rem 4rem",colorHovered:"#15dbff"}};function Xe(){var n=Object(Y.a)(["\n  width: 40px;\n  height: 40px; \n   "," {\n        padding: 0.1rem;\n    }\n"]);return Xe=function(){return n},n}function Ze(){var n=Object(Y.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 0.1rem;\n    flex-direction:row;\n    "," {\n      margin-left: 10rem;\n    }\n"]);return Ze=function(){return n},n}var Ve="@media(min-width: 768px)",qe=N.a.div(Ze(),Ve),$e=N.a.img(Xe(),Ve),nt={height:"40px",width:"40px",backgroundColor:"#ffffff",padding:"0",borderRadius:"100%",margin:"1rem",colorHovered:"#eceff1"},et=t.p+"static/media/arrow-left.48260431.svg",tt=t.p+"static/media/arrow-right.ec702bfd.svg";function rt(){var n=Object(c.useContext)(J).pagination,e=Object(c.useState)({matches:window.innerWidth>768}),t=Object(u.a)(e,2),i=t[0],o=t[1];return Object(c.useEffect)((function(){window.matchMedia(C).addEventListener("change",(function(n){var e=n.matches;o(Object(s.a)(Object(s.a)({},i),{},{matches:e}))}))})),Object(r.jsx)("section",{children:Object(r.jsxs)(qe,{children:[Object(r.jsx)(Hn,{disabled:n.currentPage<=1,onClick:function(){n.prevPage()},propsButton:nt,children:Object(r.jsx)($e,{src:et,alt:"arrowLeft"})}),Object(r.jsx)(Hn,{disabled:n.currentPage>=n.maxPage,onClick:function(){n.nextPage()},propsButton:nt,children:Object(r.jsx)($e,{src:tt,alt:"arrowRight"})})]})})}function ct(){var n=Object(c.useContext)(J),e=n.productsList,t=n.setFiltersList,i=n.filters,o=n.setFilters,a=n.pagination,d=Object(c.useState)(i),f=Object(u.a)(d,1)[0],j=Object(c.useState)({matches:window.innerWidth>768}),l=Object(u.a)(j,2),h=l[0],b=l[1];Object(c.useEffect)((function(){window.matchMedia(C).addEventListener("change",(function(n){var e=n.matches;b(Object(s.a)(Object(s.a)({},h),{},{matches:e}))}))})),Object(c.useEffect)((function(){var n=e;switch(i.order){case 1:n=e.sort((function(n,e){return n.cost-e.cost}));break;case 2:n=e.sort((function(n,e){return e.cost-n.cost}))}n=n.filter((function(n){return i.category!==E&&n.category===i.category||i.category===E})),t(n),n.length<=16&&a.setCurrentPage(1)}),[i,t]);var m=function(n,e){var t=void 0===e.target?e:e.target.value;o((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(Me.a)({},n,t))}))};return Object(r.jsx)("section",{children:Object(r.jsxs)(Je,{children:[Object(r.jsxs)(We,{children:[Object(r.jsxs)(Ye,{children:["Page ".concat(a.currentPage," of ").concat(a.maxPage)," ",Object(r.jsx)(Ne,{})," ",Object(r.jsxs)(Qe,{children:[z," "]})]}),Object(r.jsxs)(Ge,{name:"category",value:i.category,onChange:function(n){return m(n.target.name,n)},children:[Object(r.jsx)("option",{value:E,children:"Todos los Productos"}),Object(Ie.a)(new Set(e.map((function(n){return n.category})))).map((function(n){return Object(r.jsx)("option",{children:n},n)}))]}),Object(r.jsx)(Hn,{onClick:function(){o(f)},propsButton:Ke(h.matches),tittle:S}),Object(r.jsx)(Hn,{onClick:function(){m(I,1)},propsButton:Ke(h.matches),tittle:P}),Object(r.jsx)(Hn,{onClick:function(){m(I,2)},propsButton:Ke(h.matches),tittle:F}),Object(r.jsx)(rt,{})]}),Object(r.jsx)(_e,{})]})})}function it(){var n=Object(Y.a)(["\n   padding: 4px 8px;\n   flex: ",";\n   ",";\n"]);return it=function(){return n},n}function ot(){var n=Object(Y.a)(["\n    display:flex;\n    padding: 4px 8px;\n    border: 1px solid #ddd;\n    background-color: ",";//#15dbff;\n"]);return ot=function(){return n},n}function at(){var n=Object(Y.a)(["\n    width:100%;\n    height:auto;\n    &:nth-child(even) {\n      background: #ebe7e7\n    } \n"]);return at=function(){return n},n}function st(){var n=Object(Y.a)(["\n    width:98%;\n    margin: 2rem 1rem 0px 0.5rem;\n"]);return st=function(){return n},n}var ut=N.a.div(st()),dt=N.a.div(at()),ft=N.a.div(ot(),(function(n){return n.backgroungColor})),jt={xs:function(n){return"\n    '@media(min-width: 768px)'{\n        ".concat(n,"\n    }\n")}},lt=N.a.div(it(),(function(n){return n.size}),(function(n){return n.collapse&&jt[n.collapse]("\n        display:none;\n  ")}));function ht(){var n=Object(c.useContext)(J).pagination,e=Object(c.useState)({matches:window.innerWidth>768}),t=Object(u.a)(e,2),i=t[0],o=t[1];return Object(c.useEffect)((function(){window.matchMedia(C).addEventListener("change",(function(n){var e=n.matches;o(Object(s.a)(Object(s.a)({},i),{},{matches:e}))}))})),Object(r.jsx)("section",{children:i.matches?Object(r.jsxs)(ut,{children:[Object(r.jsxs)(ft,{backgroungColor:"#7de1fa",children:[Object(r.jsx)(lt,{size:1,collapse:"xs",children:"Id"}),Object(r.jsx)(lt,{size:1,collapse:"xs",children:"Product"}),Object(r.jsx)(lt,{size:1,collapse:"xs",children:"Category"}),Object(r.jsx)(lt,{size:1,collapse:"xs",children:"Cost"})]}),n.currentData.map((function(n,e){return Object(r.jsx)(dt,{children:Object(r.jsxs)(ft,{children:[Object(r.jsx)(lt,{size:1,collapse:"xs",children:n.productId}),Object(r.jsx)(lt,{size:1,collapse:"xs",children:n.name}),Object(r.jsx)(lt,{size:1,collapse:"xs",children:n.category}),Object(r.jsx)(lt,{size:1,collapse:"xs",children:n.cost})]})},e)}))]}):Object(r.jsx)(re,{children:n.currentData.map((function(n,e){return Object(r.jsxs)(ce,{children:[Object(r.jsx)(oe,{children:Object(r.jsx)(ae,{src:n.img.url})}),Object(r.jsx)(se,{}),Object(r.jsx)(je,{children:n.category}),Object(r.jsx)(le,{children:n.name}),Object(r.jsx)(le,{children:" Cost: ".concat(n.cost)})]})}))})})}function bt(){var n=Object(Y.a)(["\n    width:100%;\n"]);return bt=function(){return n},n}function mt(){var n=Object(Y.a)(["\n    display: flex;\n    margin: 1rem;\n    flex-direction:column;\n    "," {\n      flex-direction:row;\n    }\n"]);return mt=function(){return n},n}function pt(){var n=Object(Y.a)(["\n  font-size:20px;\n  color: #616161;\n  text-align: center;\n  "," {\n    width: 15%;\n    margin-left: 0.5rem;\n    font-size: 24px;\n    line-height: 24px;\n  }\n"]);return pt=function(){return n},n}function gt(){var n=Object(Y.a)(["\n    width:100%;\n"]);return gt=function(){return n},n}var Ot="@media(min-width: 768px)",xt=N.a.div(gt()),vt=N.a.h3(pt(),Ot),wt=N.a.div(mt(),Ot),yt=N.a.div(bt());function kt(){var n=Object(c.useContext)(J).pagination;return Object(r.jsx)("section",{children:Object(r.jsx)(xt,{children:Object(r.jsxs)(wt,{children:[Object(r.jsx)(yt,{children:Object(r.jsx)(vt,{children:"Page ".concat(n.currentPage," of ").concat(n.maxPage)})}),Object(r.jsx)(rt,{})]})})})}var Ct=t(25);var St=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(W,{children:[Object(r.jsxs)(Ct.a,{children:[Object(r.jsx)(Un,{}),Object(r.jsxs)(An.c,{children:[Object(r.jsxs)(An.a,{exact:!0,path:"/rewards-store",children:[Object(r.jsx)(ct,{}),Object(r.jsx)(Ee,{})]}),Object(r.jsx)(An.a,{path:"/history",component:ht})]})]}),Object(r.jsx)(kt,{})]})})},Pt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(St,{})}),document.getElementById("root")),Pt()}},[[47,1,2]]]);
//# sourceMappingURL=main.6ba137f6.chunk.js.map