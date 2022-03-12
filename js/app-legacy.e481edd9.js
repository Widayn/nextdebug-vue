(function(){var t={9642:function(){},7795:function(t,e,n){"use strict";n(6992),n(8674),n(9601),n(7727);var r=n(8935),o=n(2424),a=n(8262),i=n(3266),u=n(6166),c=n.n(u),s=n(6762),l=n(4635),f=n.n(l),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("NavBar")],1),n("b-row",[n("b-container",{staticClass:"col-lg-2"},[n("LeftSideBar")],1),n("b-container",{staticClass:"col-lg-8"},[n("router-view")],1),n("b-container",{staticClass:"col-lg-1"},[n("RightSideBar")],1)],1),n("footer",[n("Footer")],1)],1)},m=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"top-NavBar",attrs:{toggleable:"lg",type:"light",variant:"default",id:"code-font"}},[n("b-container",[n("b-navbar-brand",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v("nextDebug")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"mr-auto"},[n("b-nav-item",{staticClass:"nd-nav-item nd-nav-item-selected",on:{click:function(e){return t.$router.replace({name:"home"})}}},[t._v("problem")]),n("b-nav-item",{staticClass:"nd-nav-item",on:{click:function(e){return t.$router.replace({name:"home"})}}},[t._v("develop")]),n("b-nav-item",{staticClass:"nd-nav-item",on:{click:function(e){return t.$router.replace({name:"home"})}}},[t._v("debug")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",[n("div",{staticClass:"input-group"},[n("span",[t._v("@")]),t.userInfo?t._e():n("div",{staticClass:"nd-input-df-warp"},[n("input",{staticClass:"nd-input",staticStyle:{width:"7em"},attrs:{type:"text","aria-label":"Username",placeholder:"username"}})]),t.userInfo?n("div",{staticStyle:{width:"7em"}},[t._v(" "+t._s(t.userInfo.nick_name)+" ")]):t._e()])])],1)],1)],1)],1),t._m(0)],1)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nd-breadcrumb-df",attrs:{"aria-label":"breadcrumb",id:"code-font"}},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("a",{staticClass:"nd-link-df",attrs:{href:"#"}},[t._v("home")])]),n("li",{staticClass:"breadcrumb-item"},[n("a",{staticClass:"nd-link-df",attrs:{href:"#"}},[t._v("problem list")])]),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("(current)")])])])}],b=n(4665),h={data:function(){return{baseurl:"https://api.debug.pink:8080/api/"}},computed:(0,b.rn)({userInfo:function(t){return t.userModule.userInfo}}),methods:(0,b.nv)("userModule",["logout"])},g=h,_=n(1001),E=(0,_.Z)(g,p,v,!1,null,null,null),w=E.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("ProblemSet")]),n("hr")])}],O={},P=O,k=(0,_.Z)(P,S,y,!1,null,null,null),I=k.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Profile")]),n("hr"),t.userInfo?n("b-avatar",{attrs:{variant:"info",src:t.baseurl+"avatar?src="+t.userInfo.avatar}}):t._e()],1)},C=[],T={data:function(){return{baseurl:"https://api.debug.pink:8080/api/"}},computed:(0,b.rn)({userInfo:function(t){return t.userModule.userInfo}})},x=T,U=(0,_.Z)(x,N,C,!1,null,null,null),j=U.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"navbar bottom-NavBar",attrs:{id:"code-font"}},[n("p",{staticClass:"m-auto"},[t._v("Copyright © 2022 PRMLK. All rights reserved. ")])])}],F={},M=(0,_.Z)(F,R,Z,!1,null,null,null),D=M.exports,$={components:{NavBar:w,LeftSideBar:I,RightSideBar:j,Footer:D},data:function(){return{}}},B=$,K=n(9642),L=n.n(K),A=(0,_.Z)(B,d,m,!1,null,null,null);"function"===typeof L()&&L()(A);var J=A.exports,q=n(4479),z=(n(2222),n(1539),n(8783),n(3948),n(2809)),G=(n(8862),n(8309),"nextdebug"),X="".concat(G,"_user_"),H="".concat(X,"token"),Q="".concat(X,"info"),V=function(t){localStorage.removeItem(t)},W=function(t,e){localStorage.setItem(t,e)},Y=function(t){return localStorage.getItem(t)},tt={clear:V,set:W,get:Y,USER_TOKEN:H,USER_INFO:Q},et=c().create({baseURL:"https://api.debug.pink:8080/api/",timeout:5e3});et.interceptors.request.use((function(t){return Object.assign(t.headers,{Authorization:"Bearer ".concat(tt.get(tt.USER_TOKEN))}),t}),(function(t){return Promise.reject(t)}));var nt=et,rt=function(t){var e=t.Email,n=t.Name,r=t.Password;return nt.post("auth/register",{Email:e,Name:n,Password:r})},ot=function(t){var e=t.name,n=t.password;return nt.post("auth/login",{name:e,password:n})},at=function(){return nt.get("auth/info")},it=function(t){var e=t.ID;return nt.post("auth/userDetail",{ID:e})},ut={register:rt,login:ot,info:at,userDetail:it},ct=function(t){var e=t.context;return nt.post("upload/avatar",{context:e})},st={uploadavatar:ct},lt={namespaced:!0,state:{token:tt.get(tt.USER_TOKEN),userInfo:tt.get(tt.USER_INFO)?JSON.parse(tt.get(tt.USER_INFO)):null},mutations:{SET_TOKEN:function(t,e){tt.set(tt.USER_TOKEN,e),t.token=e},SET_USERINFO:function(t,e){tt.set(tt.USER_INFO,JSON.stringify(e)),t.userInfo=e}},actions:{register:function(t,e){var n=e.Email,r=e.Name,o=e.Password;return new Promise((function(e,a){ut.register({Email:n,Name:r,Password:o}).then((function(e){return t.commit("SET_TOKEN",e.data.data.token),ut.info()})).then((function(n){t.commit("SET_USERINFO",n.data.data.user),e(n)})).catch((function(t){a(t)}))}))},login:function(t,e){var n=e.name,r=e.password;return new Promise((function(e,o){ut.login({name:n,password:r}).then((function(e){return t.commit("SET_TOKEN",e.data.data.token),ut.info()})).then((function(n){t.commit("SET_USERINFO",n.data.data.user),e(n)})).catch((function(t){o(t)}))}))},logout:function(t){var e=t.commit;e("SET_TOKEN",""),tt.clear(tt.USER_TOKEN),e("SET_USERINFO",""),tt.clear(tt.USER_INFO),window.location.reload()},uploadavatar:function(t,e){var n=e.context;return new Promise((function(e,r){st.uploadavatar({context:n}).then((function(n){t.commit("SET_USERINFO",n.data.data.user),e(n),window.location.reload()})).catch((function(t){r(t)}))}))},userDetail:function(t,e){var n=e.ID;return new Promise((function(t,e){ut.userDetail({ID:n}).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}},ft=lt,dt=(n(2707),n(2526),n(1817),function(t){var e=t.type,n=t.from,r=t.to;return nt.post("list/sort_problem",{type:e,from:n,to:r})}),mt=function(t){var e=t.id;return nt.get("problems/".concat(e),{})},pt=function(t){var e=t.name,n=t.from,r=t.problemLink,o=t.description;return nt.post("problems",{name:e,from:n,problem_link:r,description:o})},vt={sort:dt,get:mt,create:pt},bt={namespaced:!0,actions:{sort:function(t,e){var n=e.type,r=e.from,o=e.to;return new Promise((function(t,e){vt.sort({type:n,from:r,to:o}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},get:function(t,e){var n=e.id;return new Promise((function(t,e){vt.get({id:n}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},create:function(t,e){var n=e.name,r=e.from,o=e.problemLink,a=e.description;return new Promise((function(t,e){vt.create({name:n,from:r,problemLink:o,description:a}).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}},ht=bt,gt=function(t){var e=t.type,n=t.from,r=t.to;return nt.post("list/sort_online_judge",{type:e,from:n,to:r})},_t=function(t){var e=t.id;return nt.get("/online_judge/".concat(e),{})},Et={sort:gt,get:_t},wt={namespaced:!0,actions:{sort:function(t,e){var n=e.type,r=e.from,o=e.to;return new Promise((function(t,e){Et.sort({type:n,from:r,to:o}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},get:function(t,e){var n=e.id;return new Promise((function(t,e){Et.get({id:n}).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}},St=wt,yt=function(t){var e=t.id;return nt.post("list/sort_test_set",{id:e})},Ot=function(t){var e=t.id;return nt.get("test_set/".concat(e),{})},Pt=function(t){var e=t.name,n=t.from,r=t.problemLink,o=t.description;return nt.post("test_set",{name:e,from:n,problem_link:r,description:o})},kt={sort:yt,get:Ot,create:Pt},It={namespaced:!0,actions:{sort:function(t,e){var n=e.id;return new Promise((function(t,e){kt.sort({id:n}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},get:function(t,e){var n=e.id;return new Promise((function(t,e){kt.get({id:n}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},create:function(t,e){var n=e.ProblemID,r=e.Uploader,o=e.Input,a=e.Output;return new Promise((function(t,e){kt.create({ProblemID:n,Uploader:r,Input:o,Output:a}).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}},Nt=It;r["default"].use(b.ZP);var Ct=new b.ZP.Store({strict:!1,state:{},getters:{},mutations:{},actions:{},modules:{testSetModule:Nt,problemModule:ht,userModule:ft,onlineJudgeModule:St}}),Tt=[{path:"/register",name:"register",component:function(){return Promise.all([n.e(254),n.e(311)]).then(n.bind(n,7311))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e(254),n.e(686)]).then(n.bind(n,7686))}},{path:"/profile",name:"profile",meta:{auth:!0},component:function(){return n.e(243).then(n.bind(n,3243))}},{path:"/userDetail/:id",name:"userDetail",component:function(){return n.e(213).then(n.bind(n,6254))}}],xt=Tt,Ut=[{path:"/problem/create",name:"problem_create",meta:{auth:!0},component:function(){return Promise.all([n.e(254),n.e(479)]).then(n.bind(n,3479))}},{path:"/problem/:id",name:"problem_detail",component:function(){return n.e(271).then(n.bind(n,5271))}},{path:"/problem",name:"problem_list",component:function(){return n.e(177).then(n.bind(n,7177))}}],jt=Ut;r["default"].use(z.Z);var Rt=[{path:"/",name:"home",component:function(){return n.e(107).then(n.bind(n,6107))}},{path:"/about",name:"about",component:function(){return n.e(830).then(n.bind(n,5830))}}].concat((0,q.Z)(jt),(0,q.Z)(xt)),Zt=new z.Z({mode:"history",base:"/",routes:Rt}),Ft=z.Z.prototype.push;z.Z.prototype.push=function(t){return Ft.call(this,t).catch((function(t){return t}))},Zt.beforeEach((function(t,e,n){t.meta.auth?Ct.state.userModule.token?n():Zt.push({name:"login"}):n()}));var Mt=Zt;n(44);r["default"].config.productionTip=!1,r["default"].prototype.Clipboard=f(),r["default"].use(a.XG7),r["default"].use(i.A7),r["default"].use(o.ZP),r["default"].use(s.Z,c()),new r["default"]({router:Mt,store:Ct,render:function(t){return t(J)}}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{107:"3ee95fcb",177:"8d770113",213:"3598e22f",243:"6e5bd761",254:"9596ad41",271:"6bb8d7a0",311:"a886b63a",479:"b451d4fa",686:"8bcd03dc",830:"bf1f8163"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="nextdebug:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[o];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunknextdebug"]=self["webpackChunknextdebug"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7795)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.e481edd9.js.map