(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("1356"),r=a.n(n);r.a},"0a6e":function(t,e,a){},1356:function(t,e,a){},"36f5":function(t,e,a){"use strict";var n=a("c9b8"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md",theme:{primary:"#20AA76",secondary:"#51BE95",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[t.user?t._e():a("div"),t.user?a("div",[a("v-toolbar",{attrs:{color:"#FAFAFA",app:"",flat:""}},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{color:"primary",dark:"",flat:"",icon:""}},n),[a("flag",{attrs:{iso:t.currentLocale}})],1)]}}],null,!1,1194185064)},[a("v-list",t._l(t.locales,function(e,n){return a("v-list-tile",{key:e+n,on:{click:function(a){t.currentLocale=e.id}}},[a("v-list-tile-title",[t._v(t._s(e.name))])],1)}),1)],1),a("v-toolbar-title",{staticClass:"primary--text",attrs:{dark:""}},[t._v("\n\n          Accountrider\n        ")]),a("v-spacer"),t.user?a("div",[t._l(t.items,function(e){return a("v-btn",{key:e.title,attrs:{round:"",color:"primary",flat:"",to:e.link}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n                "+t._s(e.title)+"\n            ")],1)}),a("v-btn",{attrs:{round:"",color:"primary"},on:{click:t.onProfile}},[t._v(t._s(t.$t("profile")))]),a("v-btn",{attrs:{round:"",color:"primary"},on:{click:t.onLogout}},[t._v(t._s(t.$t("logout")))])],2):t._e()],1)],1):t._e(),a("v-content",[a("router-view")],1)],1)},i=[],s=a("a925"),l=a("6ee6"),c=a("2f62"),u=a("8206"),d=a.n(u),p=a("a7fe"),f=a.n(p),m="https://api.sandbox.paypal.com/v1/invoicing/invoices?page=3&page_size=4&total_count_required=true",h={init:function(){n["a"].use(f.a,d.a),n["a"].axios.defaults.baseURL=m,n["a"].axios.defaults.headers.common["Authorization"]="Bearer ".concat("A21AAHaWX3miAvxJUXHRmWZ2I3rGvColt7IQaO93Yrnw1f6GmsSCNQYdSyEFw6cpH5yGqHIOh8e4jdHSWd7ovH98whx2JBWsA")},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n["a"].axios.get("".concat(t,"/").concat(e)).catch(function(t){throw new Error("[RWV] ApiService ".concat(t))})},post:function(t,e){return n["a"].axios.post("".concat(t),e)},update:function(t,e,a){return n["a"].axios.put("".concat(t,"/").concat(e),a)},put:function(t,e){return n["a"].axios.put("".concat(t),e)},delete:function(t){return n["a"].axios.delete(t).catch(function(t){throw new Error("[RWV] ApiService ".concat(t))})}},v=h,g=a("04e1"),b=a.n(g),w=d.a.create({baseURL:"https://api.sandbox.paypal.com",timeout:3e4,headers:{"Content-Type":"application/json",Accept:"application/json"}}),x=w;n["a"].use(c["a"]);var y=new c["a"].Store({state:{user:{},locale:"nl",isAuthenticated:!!localStorage.token},actions:{setAuthorisationHeader:function(t,e){Object(l["a"])(t),e?x.defaults.headers.common["Authorization"]="Bearer ".concat(e):delete x.defaults.headers.common["Authorization"]},testPaypal:function(t,e){alert(e),t.dispatch("setAuthorisationHeader",e)},LOGIN:function(t,e){return v.post("auth/login",{email:e.email,password:e.password}).catch(function(t){console.error(t)})},Authorise:function(t,e){return v.get("ownercredentials",e)},SetUserOutOfToken:function(t,e){localStorage.token=e.data;var a=b()(e.data),n={id:a.id,email:a.email};t.commit("SET_AUTH",n)},REGISTER:function(t,e){return v.post("auth/register",{email:e.email,password:e.password}).catch(function(t){console.error(t)})},CHECK_AUTH:function(t){var e=b()(localStorage.token);if(e.exp<Date.now()/1e3)return alert("token has expired"),t.commit("LOGOUT",null),!1;v.setHeader();var a=b()(localStorage.token),n={id:a.id,email:a.email};return t.commit("SET_AUTH",n),!0},logout:function(){this.commit("LOGOUT",null),delete localStorage.token}},mutations:{setLocale:function(t,e){t.locale=e},SET_AUTH:function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={}},LOGOUT:function(t){t.isAuthenticated=!1,t.user={},t.errors={},delete localStorage.token}},getters:{locale:function(t){return t.locale},user:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}}}),_={test:"hello",bills:"bills",vehicle:"vehicle",personal_data:"personal date",profile:"profile",logout:"logout",loginHoofdtekst:"Sign in with your",registerHoofdtekst:"Sign up with your",AccountriderID:"Accountrider ID",Signin:"signin",Signup:"signup",email:"email",password:"password",BSN:"BSN",Authorize:"authorize",BSNCredentials:"Fill in your bsn",OLDpassword:"type in your old password",NEWpassword:"type in your new password",Update:"update"},S={test:"hallo",bills:"rekeningen",vehicle:"auto",personal_data:"persoonsgegevens",profile:"profiel",logout:"uitloggen",loginHoofdtekst:"Log in met uw",registerHoofdtekst:"Register in met uw",AccountriderID:"Accountrider ID",Signin:"Inloggen",Signup:"Registreren",email:"email",password:"wachtwoord",BSN:"BSN",Authorize:"valideren",BSNCredentials:"Vul hier je BSN in",OLDpassword:"type hier uw oude wachtwoord",NEWpassword:"type hier uw nieuwe wachtwoord",update:"bewerken"},k={en:_,nl:S};n["a"].use(s["a"]);var C=new s["a"]({locale:y.getters.locale,fallbackLocale:"en",silentTranslationWarn:!0,messages:k}),$=C,V={name:"App",data:function(){return{currentLocale:null,locales:[{id:"gb",name:"English"},{id:"nl",name:"Nederlands"}]}},computed:{user:function(){return{email:"alegou20@hotmail.com"}},items:function(){return[{icon:"lock_open",title:this.$t("bills"),link:"/bills"},{icon:"directions_car",title:this.$t("vehicle"),link:"/vehicle"},{icon:"face",title:this.$t("personal_data"),link:"/personalData"}]},locale:function(){return this.$store.getters.locale}},watch:{currentLocale:function(t){t&&($.locale=t,this.$store.commit("setLocale",t))}},methods:{onLogout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push({name:"login"})})},onProfile:function(){this.$router.push({name:"profile"})}},mounted:function(){this.currentLocale=this.locale}},A=V,T=(a("034f"),a("2877")),O=a("6544"),B=a.n(O),j=a("7496"),L=a("8336"),F=a("549c"),N=a("132d"),E=a("8860"),H=a("ba95"),P=a("5d23"),U=a("e449"),D=a("9910"),I=a("71d9"),R=a("2a7f"),z=Object(T["a"])(A,o,i,!1,null,null,null),G=z.exports;B()(z,{VApp:j["a"],VBtn:L["a"],VContent:F["a"],VIcon:N["a"],VList:E["a"],VListTile:H["a"],VListTileTitle:P["b"],VMenu:U["a"],VSpacer:D["a"],VToolbar:I["a"],VToolbarTitle:R["a"]});var W=a("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{staticClass:"position-relative",attrs:{round:"",width:"450",height:"600"}},[a("v-toolbar",{attrs:{dark:"",flat:"",color:"white"}}),a("v-card-text",[a("v-form",[a("p",{staticClass:"indigo--text text-xs-center headline"},[t._v(t._s(t.$t("loginHoofdtekst")))]),a("p",{staticClass:"indigo--text text-xs-center headline font-weight-bold"},[t._v("Accountrider ID")]),a("v-text-field",{attrs:{width:"10px",name:"email",label:t.$t("email"),id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{name:"password",label:t.$t("password"),id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticClass:"text-xs-center"},[a("v-btn",{staticClass:"white--text",attrs:{to:{name:"owner"},round:"",large:"",color:"orange"}},[t._v(t._s(t.$t("Signup")))]),a("v-btn",{staticClass:"white--text",attrs:{round:"",large:"",color:"#099CEC"},on:{click:t.onSignin}},[t._v(t._s(t.$t("Signin")))])],1)],1)],1)],1)],1)],1)],1)},M=[],J={data:function(){return{email:null,password:null,auth:""}},methods:{onSignin:function(){var t=this;this.$store.dispatch("LOGIN",{email:this.email,password:this.password}).then(function(e){null!=e.data&&(t.$store.dispatch("SetUserOutOfToken",{data:e.data}),t.$router.push({name:"home"}))})}}},Q=J,X=(a("f952"),a("b0af")),K=a("99d9"),Y=a("a523"),Z=a("4bd4"),tt=a("a722"),et=a("2677"),at=Object(T["a"])(Q,q,M,!1,null,"308cc53d",null),nt=at.exports;B()(at,{VBtn:L["a"],VCard:X["a"],VCardText:K["a"],VContainer:Y["a"],VForm:Z["a"],VLayout:tt["a"],VTextField:et["a"],VToolbar:I["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{"single-line":"",outline:"",disabled:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("v-text-field",{attrs:{"single-line":"",outline:"",label:t.$t("OLDpassword")},model:{value:t.oldPassword,callback:function(e){t.oldPassword=e},expression:"oldPassword"}}),a("v-text-field",{attrs:{"single-line":"",outline:"",label:t.$t("NEWpassword")},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{attrs:{block:"",round:"",color:"primary"},on:{click:t.update}},[t._v(t._s(t.$t("update")))])],1)],1)],1)},ot=[],it={data:function(){return{oldPassword:"",password:""}},computed:{user:function(){return this.$store.getters.user}},methods:{update:function(){alert("update")}}},st=it,lt=a("0e8f"),ct=Object(T["a"])(st,rt,ot,!1,null,"40e3b0f4",null),ut=ct.exports;B()(ct,{VBtn:L["a"],VContainer:Y["a"],VFlex:lt["a"],VLayout:tt["a"],VTextField:et["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"register"}},[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{staticClass:"position-relative",attrs:{round:"",width:"450",height:"600"}},[a("v-toolbar",{attrs:{dark:"",flat:"",color:"white"}}),a("v-card-text",[a("v-form",[a("p",{staticClass:"primary--text text-xs-center headline"},[t._v(t._s(t.$t("registerHoofdtekst")))]),a("p",{staticClass:"primary--text text-xs-center headline font-weight-bold"},[t._v("Accountrider ID")]),a("v-text-field",{attrs:{width:"10px",name:"email",label:t.$t("email"),id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{name:"password",label:t.$t("password"),id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticClass:"text-xs-center"},[a("v-btn",{staticClass:"white--text",attrs:{round:"",large:"",color:"primary"},on:{click:t.onSignUp}},[t._v(t._s(t.$t("Signup")))])],1)],1)],1)],1)],1)],1)],1)},pt=[],ft={data:function(){return{email:"",password:null,auth:""}},methods:{onSignUp:function(){var t=this;this.$store.dispatch("REGISTER",{email:this.email,password:this.password}).then(function(e){t.auth=e.data,t.auth&&t.$router.push({name:"login"})})}}},mt=ft,ht=(a("36f5"),Object(T["a"])(mt,dt,pt,!1,null,"6c30eb9d",null)),vt=ht.exports;B()(ht,{VBtn:L["a"],VCard:X["a"],VCardText:K["a"],VContainer:Y["a"],VForm:Z["a"],VLayout:tt["a"],VTextField:et["a"],VToolbar:I["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-layout",{staticClass:"mt-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"mt-5",attrs:{xs12:"",sm:""}},[a("div",{staticClass:"text-xs-center"},[a("div",{staticClass:"font-weight-medium mt-5 display-3"},[t._v("Accountrider")])])])],1)],1)},bt=[],wt={name:"Home",data:function(){return{}}},xt=wt,yt=Object(T["a"])(xt,gt,bt,!1,null,"09a0b6aa",null),_t=yt.exports;B()(yt,{VFlex:lt["a"],VLayout:tt["a"]});var St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(t._s(t.$t("test")))])},kt=[],Ct={},$t=Object(T["a"])(Ct,St,kt,!1,null,null,null),Vt=$t.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"OwnerCredentials"}},[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{staticClass:"position-relative",attrs:{width:"450",height:"300"}},[a("v-toolbar",{attrs:{dark:"",flat:"",color:"white"}},[a("v-toolbar-title",[t._v("Sign up")])],1),a("v-card-text",[a("v-form",[a("p",{staticClass:"primary--text text-xs-center headline"},[t._v(t._s(t.$t("BSNCredentials")))]),a("v-text-field",{attrs:{width:"10px",name:"BSN",label:t.$t("BSN"),id:"BSN",type:"BSN",required:""},model:{value:t.BSN,callback:function(e){t.BSN=e},expression:"BSN"}}),a("div",{staticClass:"text-xs-center"},[a("v-btn",{staticClass:"white--text",attrs:{round:"",large:"",color:"orange"},on:{click:t.onAuthorise}},[t._v(t._s(t.$t("Authorize")))])],1)],1)],1)],1)],1)],1)],1)},Tt=[],Ot={data:function(){return{BSN:null}},methods:{onAuthorise:function(){var t=this;this.$store.dispatch("Authorise",this.BSN).then(function(e){t.auth=e.data,t.auth&&t.$router.push({name:"register"})})}}},Bt=Ot,jt=(a("6352"),Object(T["a"])(Bt,At,Tt,!1,null,"4bb14ad1",null)),Lt=jt.exports;B()(jt,{VBtn:L["a"],VCard:X["a"],VCardText:K["a"],VContainer:Y["a"],VForm:Z["a"],VLayout:tt["a"],VTextField:et["a"],VToolbar:I["a"],VToolbarTitle:R["a"]});var Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mt-5 pa-3 elevation-12",attrs:{light:"",flat:""}},[a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("h1",{staticClass:"headline"},[t._v("Filter bills")]),a("v-layout",{staticClass:"mb-3",attrs:{"align-center":"","justify-center":"",wrap:"",row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-select",{attrs:{items:t.carTrackers,clearable:"","item-text":"hardware","item-value":"id",label:"Car tracker"},model:{value:t.filters.carTracker,callback:function(e){t.$set(t.filters,"carTracker",e)},expression:"filters.carTracker"}})],1),t.bs?t._e():a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-select",{attrs:{clearable:"",items:t.ownerCredentials,"item-text":"name","item-value":"id",label:"Owner credentials"},model:{value:t.filters.ownerCredentials,callback:function(e){t.$set(t.filters,"ownerCredentials",e)},expression:"filters.ownerCredentials"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-select",{attrs:{clearable:"",items:t.paymentStatusses,label:"Payment status"},model:{value:t.filters.paymentStatus,callback:function(e){t.$set(t.filters,"paymentStatus",e)},expression:"filters.paymentStatus"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-select",{attrs:{clearable:"",items:t.months,label:"Select month"},model:{value:t.filters.month,callback:function(e){t.$set(t.filters,"month",e)},expression:"filters.month"}})],1)],1)],1),t.billsFiltered?a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.billsFiltered,light:""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",{on:{click:function(a){return t.selectBill(e.item)}}},[a("td",[t._v(t._s(e.item.id))]),a("td",[t._v(t._s(e.item.ownerCredentials.name))]),a("td",[t._v("€ "+t._s(e.item.totalAmount))]),a("td",[t._v(t._s(t._f("date")(e.item.createDateFormatted)))]),a("td",[t._v(t._s(e.item.monthName))]),a("td",[t._v(t._s(e.item.paymentStatus))])])]}}],null,!1,4188029529)}),a("bill",{staticClass:"mt-4"})],1):a("div",[a("p",[t._v("No bills found")])])],1)],1)},Nt=[],Et={props:["bs"],data:function(){return{headers:[{text:"ID #",value:"id"},{text:"Billed to",value:"ownerCredentials"},{text:"Total Amount",value:"totalAmount"},{text:"Create date",value:"createDate"},{text:"Month",value:"monthName"},{text:"Payment Status",value:"paymentStatus"}],filters:{carTracker:null,ownerCredentials:null,paymentStatus:null,month:null}}},computed:{billsFiltered:function(){return this.bs?this.filterBills(this.bs):this.filterBills(this.$store.getters.bills)},months:function(){return this.$store.getters.months},paymentStatusses:function(){return this.$store.getters.paymentStatusses},carTrackers:function(){return this.$store.getters.carTrackers},ownerCredentials:function(){return this.$store.getters.ownerCredentials}},methods:{selectBill:function(t){this.$store.commit("setBill",t)},filterBills:function(t){var e=this;return this.filters.carTracker&&(t=t.filter(function(t){return t.carTracker.id===e.filters.carTracker})),this.filters.ownerCredentials&&(t=t.filter(function(t){return t.ownerCredentials.id===e.filters.ownerCredentials})),this.filters.paymentStatus&&(t=t.filter(function(t){return t.paymentStatus===e.filters.paymentStatus})),this.filters.month&&(t=t.filter(function(t){return t.monthName===e.filters.month})),t}},created:function(){this.bs||this.$store.dispatch("getBills"),this.$store.dispatch("getCarTrackers"),this.$store.dispatch("getRateCategories"),this.$store.dispatch("getOwnerCredentials")}},Ht=Et,Pt=a("8fea"),Ut=a("b56d"),Dt=Object(T["a"])(Ht,Ft,Nt,!1,null,null,null),It=Dt.exports;B()(Dt,{VCard:X["a"],VContainer:Y["a"],VDataTable:Pt["a"],VFlex:lt["a"],VLayout:tt["a"],VSelect:Ut["a"]});var Rt,zt,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-layout",{staticClass:"mt-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"mt-5",attrs:{xs12:"",sm:""}},[a("div",{staticClass:"text-xs-center"},[a("div",{staticClass:"font-weight-medium mt-5 display-3"},[t._v("Personal data")])])])],1)],1)},Wt=[],qt={name:"PersonData"},Mt=qt,Jt=Object(T["a"])(Mt,Gt,Wt,!1,null,"8c70142a",null),Qt=Jt.exports;B()(Jt,{VFlex:lt["a"],VLayout:tt["a"]});var Xt={},Kt=Object(T["a"])(Xt,Rt,zt,!1,null,null,null),Yt=Kt.exports,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"paypal"}},[a("v-content",[a("v-container",[a("paypal-checkout",{attrs:{amount:"300.00",currency:"USD",env:"sandbox",client:t.paypal}})],1)],1)],1)},te=[],ee={data:function(){return{paypal:{sandbox:"AZL__AdhzORKlm5xlESvVMLmFXaQTl-P9CUVJJ5cjVnAHzb_PcmyzwqaAGg7iUJvEMwSDNdegcdnxEUj"}}}},ae=ee,ne=Object(T["a"])(ae,Zt,te,!1,null,"0d41021a",null),re=ne.exports;B()(ne,{VContainer:Y["a"],VContent:F["a"]});var oe=[{path:"/",name:"home",component:_t},{path:"/login",name:"login",component:nt},{path:"/paypal",name:"paypal",component:re},{path:"/register",name:"register",component:vt},{path:"/owner",name:"owner",component:Lt},{path:"/vehicle",name:"vehicle",component:Yt},{path:"/personaldata",name:"personaldata",component:Qt},{path:"/bills",name:"bills",component:It},{path:"/profile",name:"profile",component:ut},{path:"/about",name:"about",component:Vt}];n["a"].use(W["a"]);var ie=new W["a"]({routes:oe,mode:"history"}),se=ie,le=a("9483");Object(le["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var ce=a("afb1"),ue=a("d61f");n["a"].component("paypal-checkout",ce["a"]),n["a"].config.productionTip=!1,n["a"].use(ue["a"]),v.init(),new n["a"]({router:se,store:y,i18n:$,render:function(t){return t(G)}}).$mount("#app")},6352:function(t,e,a){"use strict";var n=a("0a6e"),r=a.n(n);r.a},c9b8:function(t,e,a){},eb5a:function(t,e,a){},f952:function(t,e,a){"use strict";var n=a("eb5a"),r=a.n(n);r.a}});
//# sourceMappingURL=app.cd375769.js.map