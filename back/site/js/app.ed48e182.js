(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"64607fcb","chunk-4e0dfe9b":"09102b6d","chunk-5396bcb0":"a2bc5350"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-4e0dfe9b":1,"chunk-5396bcb0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-4e0dfe9b":"10e93a2e","chunk-5396bcb0":"5d848098"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],m.parentNode.removeChild(m),n(i)},m.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1193:function(e,t,n){e.exports=n.p+"img/imagen3.41c2ced5.png"},"328a":function(e,t,n){"use strict";var r=n("bc3a"),o=n.n(r),a=o.a.create({timeout:3e3,headers:{"Content-Type":"application/json"}});t["a"]=a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[e._v(" "+e._s(e.title)+" ")]),n("v-list-item-subtitle",[e._v(" "+e._s(e.username)+" ")]),n("v-list-item-subtitle",[e._v(" "+e._s(e.role)+" ")])],1)],1),n("v-divider"),n("Menu")],1),n("v-app-bar",{attrs:{color:"white",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v(e._s(e.title))]),n("v-spacer"),n("account-button",{on:{"open-login":function(t){e.showLogin=!0}}})],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}}),n("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:e.showLogin,callback:function(t){e.showLogin=t},expression:"showLogin"}},[n("Login",{on:{"login-success":function(t){e.showLogin=!1}}})],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[e._v("mdi-account")])],1)]}}])},[n("v-list",[e.isLoggedIn?e._e():n("v-list-item",{attrs:{link:""},on:{click:function(t){return e.openLogin()}}},[n("v-list-item-title",[e._v("Iniciar sesión")])],1),e.isLoggedIn?n("v-list-item",{attrs:{link:""}},[n("v-list-item-title",[e._v("Perfil")])],1):e._e(),e.isLoggedIn?n("v-list-item",{attrs:{link:""},on:{click:function(t){return e.logOut()}}},[n("v-list-item-title",[e._v("Cerrar sesión")])],1):e._e()],1)],1)},s=[],c={data:function(){return{}},methods:{openLogin:function(){console.log("Abrir login"),this.$emit("open-login",null)},logOut:function(){sessionStorage.removeItem("username"),sessionStorage.removeItem("role"),window.location.reload()}},computed:{isLoggedIn:function(){return void 0!=sessionStorage.getItem("username")}}},u=c,l=n("2877"),d=n("6544"),m=n.n(d),p=n("8336"),f=n("132d"),v=n("8860"),h=n("da13"),g=n("5d23"),b=n("e449"),w=Object(l["a"])(u,i,s,!1,null,null,null),_=w.exports;m()(w,{VBtn:p["a"],VIcon:f["a"],VList:v["a"],VListItem:h["a"],VListItemTitle:g["c"],VMenu:b["a"]});var I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Autenticación")]),n("v-card-text",[n("v-text-field",{attrs:{rules:e.rulesUsername,label:"Usuario","prepend-icon":"mdi-account-circle"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{rules:e.rulesPassword,type:e.showPassword?"text":"password",label:"Contraseña","prepend-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-alert",{attrs:{border:"left",color:"red lighten-2",dark:""},model:{value:e.showError,callback:function(t){e.showError=t},expression:"showError"}},[e._v(" "+e._s(e.error)+" ")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"info"},on:{click:function(t){return e.login()}}},[e._v("Ingresar")])],1)],1)},V=[],k=n("328a"),y="/api/authenticate",L=function(e,t){var n={username:e,password:t};return k["a"].post(y,n)},x={data:function(){return{showPassword:!1,username:"",password:"",rulesUsername:[function(e){return!!e||"Requerido."},function(e){return e&&e.length<=50}],rulesPassword:[function(e){return!!e||"Requerido."},function(e){return e&&e.length<=50}],showError:!1,error:""}},methods:{login:function(){var e=this;L(this.username,this.password).then((function(t){var n=t.data;sessionStorage.setItem("username",n.username),sessionStorage.setItem("role",n.role),e.$emit("login-success",e.username),window.location.reload()})).catch((function(t){e.showError=!0,e.error=t.response.data.message,setInterval((function(){e.showError=!1}),3e3)}))}}},E=x,S=n("0798"),P=n("b0af"),C=n("99d9"),O=n("2fa4"),T=n("8654"),j=Object(l["a"])(E,I,V,!1,null,null,null),A=j.exports;m()(j,{VAlert:S["a"],VBtn:p["a"],VCard:P["a"],VCardActions:C["a"],VCardText:C["c"],VCardTitle:C["d"],VSpacer:O["a"],VTextField:T["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return n("div",{key:t.title},[t.show?n("v-list-item",{attrs:{link:"",to:t.url}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1):e._e()],1)})),0)},B=[],M={data:function(){return{items:[{title:"Inicio",icon:"mdi-home",url:"/",show:!0},{title:"Productos",icon:"mdi-image",url:"/products",show:this.hasRole("admin")},{title:"About",icon:"mdi-help-box",url:"/about",show:!0}]}},methods:{hasRole:function(e){return sessionStorage.getItem("role")==e}}},N=M,$=n("34c3"),R=Object(l["a"])(N,D,B,!1,null,null,null),q=R.exports;m()(R,{VIcon:f["a"],VList:v["a"],VListItem:h["a"],VListItemContent:g["a"],VListItemIcon:$["a"],VListItemTitle:g["c"]});var U={components:{Menu:q,AccountButton:_,Login:A},data:function(){return{showLogin:!1,drawer:!0,title:"Cesar's Store"}},computed:{username:function(){return sessionStorage.getItem("username")},role:function(){return sessionStorage.getItem("role")}}},F=U,H=n("7496"),J=n("40dc"),G=n("5bc1"),K=n("a523"),z=n("169a"),Q=n("ce7e"),W=n("553a"),X=n("f6c4"),Y=n("f774"),Z=n("2a7f"),ee=Object(l["a"])(F,o,a,!1,null,null,null),te=ee.exports;m()(ee,{VApp:H["a"],VAppBar:J["a"],VAppBarNavIcon:G["a"],VContainer:K["a"],VDialog:z["a"],VDivider:Q["a"],VFooter:W["a"],VListItem:h["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VMain:X["a"],VNavigationDrawer:Y["a"],VSpacer:O["a"],VToolbarTitle:Z["a"]});n("d3b7"),n("3ca3"),n("ddb0");var ne=n("8c4f"),re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("This is an home page")]),n("v-list",[n("v-subheader",[e._v("REPORTS")]),n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.items,(function(t,r){return n("v-list-item",{key:r},[n("v-list-item-icon",[n("v-img",{attrs:{"max-height":"24","max-width":"24",src:t.image}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)],1)})),1)],1)],1)},oe=[],ae={data:function(){return{selectedItem:1,items:[{name:"Dato 1",image:n("d5df")},{name:"Dato 2",image:n("6eb3")},{name:"Dato 3",image:n("1193")},{name:"Dato 4",image:n("ac5a")}]}}},ie=ae,se=n("adda"),ce=n("1baa"),ue=n("e0c7"),le=Object(l["a"])(ie,re,oe,!1,null,null,null),de=le.exports;m()(le,{VImg:se["a"],VList:v["a"],VListItem:h["a"],VListItemContent:g["a"],VListItemGroup:ce["a"],VListItemIcon:$["a"],VListItemTitle:g["c"],VSubheader:ue["a"]}),r["a"].use(ne["a"]);var me=function(e,t,n){var r=!1;sessionStorage.getItem("username")&&(r=!0),r?n():n("/")},pe=[{path:"/",name:"Home",component:de},{path:"/products",name:"Products",component:function(){return n.e("chunk-5396bcb0").then(n.bind(null,"c24e"))},beforeEnter:me},{path:"/products/new",name:"New Product",component:function(){return n.e("chunk-4e0dfe9b").then(n.bind(null,"cd68"))},beforeEnter:me},{path:"/products/:code",name:"Edit Product",component:function(){return n.e("chunk-4e0dfe9b").then(n.bind(null,"cd68"))},beforeEnter:me},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],fe=new ne["a"]({mode:"history",base:"/",routes:pe}),ve=fe,he=n("f309");r["a"].use(he["a"]);var ge=new he["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ve,vuetify:ge,render:function(e){return e(te)}}).$mount("#app")},"6eb3":function(e,t,n){e.exports=n.p+"img/imagen2.8d68b767.png"},ac5a:function(e,t,n){e.exports=n.p+"img/imagen4.7972a253.png"},d5df:function(e,t,n){e.exports=n.p+"img/imagen1.71bacda2.png"}});
//# sourceMappingURL=app.ed48e182.js.map