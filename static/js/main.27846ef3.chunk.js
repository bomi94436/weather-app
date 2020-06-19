(this.webpackJsonpweather_webapp=this.webpackJsonpweather_webapp||[]).push([[0],{39:function(e,n,t){e.exports=t(68)},44:function(e,n,t){},45:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(34),i=t.n(c),o=(t(44),t(45),t(10)),l=t(1),u=t(3),s=t(4);function m(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 3rem 0rem;\n  .btn {\n    background-color: white;\n    border-radius: 50px;\n    border: 2px solid #2e7eff;\n    color: #2e7eff;\n    text-decoration: none;\n    padding: 0.7rem 0.5rem;\n    width: 6rem;\n    font-weight: 700;\n  }\n  .btn.active,\n  .btn:active {\n    background-color: #2e7eff;\n    color: white;\n  }\n"]);return m=function(){return e},e}var f=s.a.div(m()),p=function(){return a.a.createElement(f,null,a.a.createElement(o.c,{exact:!0,to:"/",className:"btn",activeClassName:"active"},"\ub2e8\uae30 \uc608\ubcf4"),a.a.createElement(o.c,{to:"/vilage-fcst",className:"btn",activeClassName:"active"},"\ub3d9\ub124 \uc608\ubcf4"))},v=t(9),d=t(17),g=t.n(d),b=function(e,n,t,r,a,c,i){return"/".concat(e,"?serviceKey=").concat("u%2FIOb5aDaOO7kHZB1raxzol%2Fcgb8GXAl%2FuDhRTLi6Sq8EXweb8fGwDdN1Pep8DzWSn4gMvpxr4wR7zUbCFDf8w%3D%3D","&dataType=JSON&numOfRows=").concat(n,"&pageNo=").concat(t,"&base_date=").concat(r,"&base_time=").concat(a,"&nx=").concat(c,"&ny=").concat(i)};function w(e){var n=e.getHours();e.getMinutes()<30&&!n&&e.setDate(e.getDate()-1);var t=e.getFullYear().toString(),r=(e.getMonth()+1).toString(),a=e.getDate().toString();return t+(r[1]?r:"0"+r[0])+(a[1]?a:"0"+a[0])}var E=t(22),h=function(e,n,t){return e.find((function(e){return e.fcstTime===n&&e.category===t})).fcstValue},y=function(e,n,t,r){return e.find((function(e){return e.fcstTime===n&&e.fcstDate===t&&e.category===r})).fcstValue},x=function(e,n){switch(e){case"0":switch(n){case"1":return"sunny";case"3":return"cloudy";case"4":return"blur";default:return"unknown"}case"1":return"rainy";case"2":return"sleet";case"3":return"snow";case"4":return"shower";default:return"unknown"}},j=t(21),O=t.n(j),k=t(38),D=function(e,n){var t=Object(r.useState)(!1),a=Object(v.a)(t,2),c=a[0],i=a[1],o=Object(r.useState)(null),l=Object(v.a)(o,2),u=l[0],s=l[1],m=Object(r.useState)(null),f=Object(v.a)(m,2),p=f[0],d=f[1];return Object(r.useEffect)((function(){Object(k.a)(O.a.mark((function n(){var t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),n.prev=1,n.next=4,e();case 4:t=n.sent,s(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),d(n.t0);case 11:i(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()}),n),[c,u,p]};function S(){var e=Object(u.a)(["\n  width: 13rem;\n  border-radius: 1rem;\n  padding: 2rem 0.5rem;\n  box-shadow: 5px 5px 18px #b8b8b8;\n  background-color: white;\n  margin: 3rem 1rem;\n  .time {\n    font-size: 2rem;\n  }\n  p {\n    margin: 0 auto;\n  }\n  img {\n    margin: 2rem 0rem;\n  }\n  .option {\n    display: flex;\n    justify-content: space-evenly;\n    margin-top: 1rem;\n    p {\n      font-weight: 700;\n    }\n  }\n"]);return S=function(){return e},e}var N=s.a.div(S()),T=function(e){var n=e.time,t=e.date,r=e.t1h,c=e.reh,i=e.rn1,o=e.sky,l=e.pty;n=Number(n)?Number(n)-1:23;var u="/icon/"+x(l,o)+".png";return a.a.createElement(N,null,a.a.createElement("p",null,t.substr(0,2),"\uc6d4 ",t.substr(2,2),"\uc77c"),a.a.createElement("p",{className:"time"},n,"\uc2dc"),a.a.createElement("img",{src:u,alt:"icon"}),a.a.createElement("div",{className:"option"},a.a.createElement("div",null,a.a.createElement("p",null,"\uae30\uc628"),r,"\xb0C"),a.a.createElement("div",null,a.a.createElement("p",null,"\uc2b5\ub3c4"),c,"%"),a.a.createElement("div",null,a.a.createElement("p",null,"\uac15\uc218\ub7c9"),function(e){return 0===e?"0mm":e<1?"0~1mm":e<5?"1~4mm":e<10?"5~9mm":e<20?"10~19mm":e<40?"20~39mm":e<70?"40~69mm":"70mm~"}(i))))};function H(){var e=Object(u.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  align-content: space-evenly;\n"]);return H=function(){return e},e}var F=s.a.div(H()),z=function(){var e={},n=[],t=D((function(){return g.a.get(b("getUltraSrtFcst","100","1",w(new Date),function(e){var n=e.getMinutes();n<30&&(e.setHours(e.getHours()-1),n=59);var t=e.getHours();return t=t.toString(),n=n.toString(),e.getSeconds().toString(),(t[1]?t:"0"+t[0])+(n[1]?n:"0"+n[0])}(new Date),"97","77"))}),[]),r=Object(v.a)(t,3),c=r[0],i=r[1],o=r[2];return c?a.a.createElement("div",null,"\ub85c\ub529\uc911 . . ."):o?(console.log(o),a.a.createElement("div",null,"error")):i?(n=function(e){var n=e.map((function(e){return e.fcstTime}));return n=Object(E.a)(new Set(n)),(new Date).getMinutes()<30&&n.shift(),n}(e=i.data.response.body.items.item),a.a.createElement(F,null,n.map((function(n){var t=e.find((function(e){return e.fcstTime===n})).fcstDate,r=h(e,n,"T1H"),c=h(e,n,"REH"),i=h(e,n,"RN1"),o=h(e,n,"SKY"),l=h(e,n,"PTY");return a.a.createElement(T,{key:n,time:n.substr(0,2),date:t.substr(4,4),t1h:r,reh:c,rn1:i,sky:o,pty:l})})))):null};function M(){var e=Object(u.a)(["\n  width: 30rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n\n  border-radius: 1rem;\n  box-shadow: 5px 5px 18px #b8b8b8;\n  background-color: white;\n\n  padding: 0.5rem 5rem;\n  margin: 1rem;\n  p {\n    margin: 1;\n  }\n  .time {\n    font-size: 2rem;\n    font-weight: 700;\n    float: left;\n  }\n  img {\n    margin: 2rem;\n  }\n  .option {\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: space-evenly;\n    margin-bottom: 1.5rem;\n    p {\n      font-weight: 700;\n    }\n    div {\n      margin: 0 1rem;\n    }\n  }\n"]);return M=function(){return e},e}var R=s.a.div(M()),C=function(e){var n=e.time,t=e.t3h,r=e.reh,c=e.pop,i=e.sky,o=e.pty,l="/icon/"+x(o,i)+".png";return a.a.createElement(R,null,a.a.createElement("p",{className:"time"},n,"\uc2dc"),a.a.createElement("img",{src:l,alt:"icon"}),a.a.createElement("div",{className:"option"},a.a.createElement("div",null,a.a.createElement("p",null,"\uae30\uc628"),t,"\xb0C"),a.a.createElement("div",null,a.a.createElement("p",null,"\uc2b5\ub3c4"),r,"%"),a.a.createElement("div",null,a.a.createElement("p",null,"\uac15\uc218\ud655\ub960"),c,"%")))};function P(){var e=Object(u.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n"]);return P=function(){return e},e}var Y=s.a.div(P()),_=function(e){var n=e.match,t=e.fcstField,r=e.item,c=n.params.date,i=t.filter((function(e){return c===e.fcstDate}));return a.a.createElement(Y,null,i.map((function(e){var n=e.fcstTime,t=n,i=y(r,n,c,"T3H"),o=y(r,n,c,"REH"),l=y(r,n,c,"POP"),u=y(r,n,c,"SKY"),s=y(r,n,c,"PTY");return a.a.createElement(C,{key:t,time:t.substr(0,2),t3h:i,reh:o,pop:l,sky:u,pty:s})})))};function B(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n  width: 30rem;\n  font-weight: 700;\n  margin-bottom: 3rem;\n\n  .link {\n    text-decoration: none;\n    color: black;\n    &.active {\n      color: #2e7eff;\n    }\n  }\n"]);return B=function(){return e},e}var J=s.a.div(B()),K=function(){var e=D((function(){return g.a.get(b("getVilageFcst","200","1",w(new Date),function(e){e.getMinutes()<10&&e.setHours(e.getHours()-1);var n=e.getHours();return 23===n||n<2?"2300":n<5?"0200":n<8?"0500":n<11?"0800":n<14?"1100":n<17?"1400":n<20?"1700":"2000"}(new Date),"97","77"))}),[]),n=Object(v.a)(e,3),t=n[0],r=n[1],c=n[2];if(t)return a.a.createElement("div",null,"\ub85c\ub529\uc911 . . .");if(c)return console.log(c),a.a.createElement("div",null,"error");if(!r)return null;var i=r.data.response.body.items.item,u=function(e){var n=e.map((function(e){return{fcstTime:e.fcstTime,fcstDate:e.fcstDate}}));return n=n.filter((function(e){var n=Object.keys(e).map((function(n){return e[n]})).join("|");if(!this[n])return this[n]=!0}),Object.create(null))}(i),s=function(e){var n=e.map((function(e){return e.fcstDate}));return n=Object(E.a)(new Set(n))}(u);return a.a.createElement("div",null,a.a.createElement(J,null,s.map((function(e){return a.a.createElement(o.b,{to:"/vilage-fcst/"+e,key:e,className:"link active"},e.substr(4,2),"\uc6d4 ",e.substr(6,2),"\uc77c")}))),a.a.createElement(l.a,{path:"/vilage-fcst/:date",component:function(e){var n=e.match;return a.a.createElement(_,{fcstField:u,match:n,item:i})}}))},V=function(){return a.a.createElement("div",null,"\uc694\uccad \ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")};function W(){var e=Object(u.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  font-size: 1rem;\n  font-weight: 700;\n  color: gray;\n  margin: 3rem 0rem;\n"]);return W=function(){return e},e}var A=s.a.div(W()),G=function(){return a.a.createElement(A,null,a.a.createElement("p",null,"\ubd80\uc0b0\uad11\uc5ed\uc2dc \ubd81\uad6c \ud654\uba85\ub3d9 \ub0a0\uc528"))};var I=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(o.a,null,a.a.createElement(p,null),a.a.createElement("div",null,a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:z}),a.a.createElement(l.a,{path:"/vilage-fcst",component:K}),a.a.createElement(l.a,{component:V}))),a.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.27846ef3.chunk.js.map