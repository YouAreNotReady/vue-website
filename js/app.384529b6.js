(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-website/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"04c3":function(t,e,n){},"0c17":function(t,e,n){t.exports=n.p+"img/картон.60b2f658.jpg"},1471:function(t,e,n){"use strict";n("d27b")},"363d":function(t,e,n){},3968:function(t,e,n){"use strict";n("363d")},4182:function(t,e,n){},"47c5":function(t,e,n){t.exports=n.p+"img/макарон.4a9692a5.jpg"},"4d5a":function(t,e,n){t.exports=n.p+"img/пластиковые_контейнеры.bca428c2.jpg"},"54c5":function(t,e,n){"use strict";n("5a10")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view",[n("Main"),n("About")],1),n("subscribe"),n("Footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},c=[],s={name:"footer"},u=s,l=n("2877"),p=Object(l["a"])(u,i,c,!1,null,"238869b6",null),f=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[t._m(0),n("div",{staticClass:"menu"},[t._m(1),n("nav",[n("router-link",{attrs:{to:"./"}},[t._v("Каталог")]),n("router-link",{attrs:{to:"./about"}},[t._v("О компании")]),n("router-link",{attrs:{to:"./"}},[t._v("Контакты")])],1)])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("p",[t._v("Имя компании")]),n("a",{attrs:{href:"tel:+79992494636"}},[t._v("Telephone")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Название сайта")]),n("p",[t._v("Слоган")])])}],d={name:"navbar"},v=d,_=(n("3968"),Object(l["a"])(v,m,b,!1,null,"4bd4b102",null)),g=_.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("catalog")],1)},x=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("h2",[t._v("Каталог товаров")]),r("div",{staticClass:"grid"},[r("GridComponent",{attrs:{image:n("91e4"),text:"Упаковка"}}),r("GridComponent",{attrs:{image:n("0c17"),text:"Упаковка"}}),r("GridComponent",{attrs:{image:n("f491"),text:"Упаковка"}}),r("GridComponent",{attrs:{image:n("a859"),text:"Упаковка"}}),r("GridComponent",{attrs:{image:n("47c5"),text:"Упаковка"}}),r("GridComponent",{attrs:{image:n("bb1e"),text:"Упаковка"}}),r("GridComponent",{attrs:{image:n("4d5a"),text:"Упаковка"}}),r("GridComponent",{attrs:{image:n("d1e5"),text:"Упаковка"}})],1)])},j=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gridComponent"},[n("img",{attrs:{src:t.image,alt:"Упаковка"}}),n("p",[t._v(t._s(t.text))])])},y=[],E={name:"gridComponent",props:["image","text"]},$=E,w=(n("f29d"),Object(l["a"])($,O,y,!1,null,"60b9ab64",null)),G=w.exports,k={name:"catalog",components:{GridComponent:G}},M=k,P=(n("f148"),Object(l["a"])(M,C,j,!1,null,"7eb6f2a4",null)),S=P.exports,T={components:{catalog:S},name:"Main",props:{msg:String}},A=T,W=Object(l["a"])(A,h,x,!1,null,"db1b49d6",null),F=W.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subscribe"},[n("div",{staticClass:"text"},[n("h2",[t._v("Будь в курсе")]),n("p",[t._v("Акции, новинки, инновации отрасли")])]),n("div",{staticClass:"email"},[n("input",{attrs:{type:"email",placeholder:"Email"}}),n("button",[t._v("Подписаться")])])])}],q={name:"subscribe"},z=q,B=(n("54c5"),Object(l["a"])(z,J,N,!1,null,"c7816a86",null)),D=B.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"About"},[n("tab-wrapper"),n("to-catalog")],1)},I=[],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabWrapper"},[n("tab"),n("tab"),n("tab")],1)},L=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"})},R=[],U={name:"tab"},V=U,X=Object(l["a"])(V,Q,R,!1,null,"5411c152",null),Y=X.exports,Z={name:"tabWrapper",components:{tab:Y},methods:{}},tt=Z,et=Object(l["a"])(tt,K,L,!1,null,"24d371c9",null),nt=et.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toCatalog"},[n("div",{staticClass:"text"},[t._m(0),t._m(1),n("router-link",{attrs:{to:"/"}},[n("button",[t._v("Перейти к каталогу")])])],1)])},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("Упаковочная продукция "),n("br"),t._v(" компании «Каштан» — это:")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{},[n("li",[t._v(" Лучшее на рынке соотношение цены и качества ")]),n("li",[t._v(" Уникальные упаковочные дизайны собственной разработки. ")]),n("li",[t._v(" Лидирующие эксплуатационные характеристики среди всех присутствующих на рынке аналогов ")])])}],ot={name:"toCatalog"},it=ot,ct=(n("1471"),Object(l["a"])(it,rt,at,!1,null,"c37f3dc2",null)),st=ct.exports,ut={name:"About",components:{TabWrapper:nt,ToCatalog:st}},lt=ut,pt=Object(l["a"])(lt,H,I,!1,null,"35cdbf3d",null),ft=pt.exports,mt={name:"App",components:{Main:F,Navbar:g,Footer:f,subscribe:D,About:ft}},bt=mt,dt=(n("034f"),Object(l["a"])(bt,a,o,!1,null,null,null)),vt=dt.exports,_t=n("8c4f"),gt=new _t["a"]({routes:[{path:"*",component:F},{path:"*/about",component:ft}],mode:"history"});r["a"].config.productionTip=!1,r["a"].use(_t["a"]),new r["a"]({render:function(t){return t(vt)},router:gt}).$mount("#app")},"5a10":function(t,e,n){},"85ec":function(t,e,n){},"91e4":function(t,e,n){t.exports=n.p+"img/paper.f7f4fe1d.jpg"},a859:function(t,e,n){t.exports=n.p+"img/конфеты.5bc84951.jpg"},bb1e:function(t,e,n){t.exports=n.p+"img/НГ.79e8d32c.jpg"},d1e5:function(t,e,n){t.exports=n.p+"img/фонарь.18eaf29a.jpg"},d27b:function(t,e,n){},f148:function(t,e,n){"use strict";n("4182")},f29d:function(t,e,n){"use strict";n("04c3")},f491:function(t,e,n){t.exports=n.p+"img/контейнер.78ccdaea.jpg"}});
//# sourceMappingURL=app.384529b6.js.map