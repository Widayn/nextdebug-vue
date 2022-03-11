(function(){var e={6744:function(){},1981:function(e,t,n){"use strict";var r=n(8935),o=n(2424),a=n(8262),i=n(3266),s=n(6166),u=n.n(s),c=n(9483),l=n(4635),d=n.n(l),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("b-container",[n("router-view")],1)],1)},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{staticClass:"top-NavBar",attrs:{toggleable:"lg",type:"light",variant:"default"}},[n("b-container",[n("b-navbar-brand",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.$router.push({name:"home"})}}},[e._v("nextDebug")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"mr-auto"},[n("b-nav-item",{on:{click:function(t){return e.$router.replace({name:"home"})}}},[e._v("develop")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",[n("div",{staticClass:"input-group"},[n("span",[e._v("@")]),n("div",{staticClass:"nd-input-df-warp"},[n("input",{staticClass:"nd-input",staticStyle:{width:"7em"},attrs:{type:"text","aria-label":"Username",placeholder:"username"}})])])]),e.userInfo?n("b-avatar",{attrs:{variant:"info",src:e.baseurl+"avatar?src="+e.userInfo.avatar}}):e._e(),e.userInfo?n("b-nav-item-dropdown",{attrs:{right:""}},[n("strong",[n("b-dropdown-text",{staticStyle:{"font-weight":"bolder"}},[e._v(e._s(e.userInfo.nick_name))])],1),n("b-dropdown-divider"),n("b-dropdown-item",{on:{click:function(t){return e.$router.push({name:"userDetail",params:{id:e.userInfo.id}})}}},[e._v(" 个人主页")]),n("b-dropdown-item",{on:{click:function(t){return e.$router.push({name:"profile"})}}},[e._v("设置")]),n("b-dropdown-item",{on:{click:e.logout}},[e._v("登出")])],1):e._e()],1)],1)],1)],1)],1)},h=[],b=n(4665),v={data(){return{baseurl:"https://api.debug.pink:8080/api/"}},computed:(0,b.rn)({userInfo:e=>e.userModule.userInfo}),methods:(0,b.nv)("userModule",["logout"])},g=v,_=n(1001),w=(0,_.Z)(g,f,h,!1,null,null,null),E=w.exports,y={components:{NavBar:E},data(){return{}}},O=y,S=n(6744),k=n.n(S),N=(0,_.Z)(O,p,m,!1,null,null,null);"function"===typeof k()&&k()(N);var I=N.exports,P=n(2809);const T="nextdebug",x=`${T}_user_`,U=`${x}token`,j=`${x}info`,R=e=>{localStorage.removeItem(e)},D=(e,t)=>{localStorage.setItem(e,t)},$=e=>localStorage.getItem(e);var C={clear:R,set:D,get:$,USER_TOKEN:U,USER_INFO:j};const F=u().create({baseURL:"https://api.debug.pink:8080/api/",timeout:5e3});F.interceptors.request.use((e=>(Object.assign(e.headers,{Authorization:`Bearer ${C.get(C.USER_TOKEN)}`}),e)),(e=>Promise.reject(e)));var M=F;const Z=({Email:e,Name:t,Password:n})=>M.post("auth/register",{Email:e,Name:t,Password:n}),K=({name:e,password:t})=>M.post("auth/login",{name:e,password:t}),L=()=>M.get("auth/info"),A=({ID:e})=>M.post("auth/userDetail",{ID:e});var B={register:Z,login:K,info:L,userDetail:A};const J=({context:e})=>M.post("upload/avatar",{context:e});var q={uploadavatar:J};const z={namespaced:!0,state:{token:C.get(C.USER_TOKEN),userInfo:C.get(C.USER_INFO)?JSON.parse(C.get(C.USER_INFO)):null},mutations:{SET_TOKEN(e,t){C.set(C.USER_TOKEN,t),e.token=t},SET_USERINFO(e,t){C.set(C.USER_INFO,JSON.stringify(t)),e.userInfo=t}},actions:{register(e,{Email:t,Name:n,Password:r}){return new Promise(((o,a)=>{B.register({Email:t,Name:n,Password:r}).then((t=>(e.commit("SET_TOKEN",t.data.data.token),B.info()))).then((t=>{e.commit("SET_USERINFO",t.data.data.user),o(t)})).catch((e=>{a(e)}))}))},login(e,{name:t,password:n}){return new Promise(((r,o)=>{B.login({name:t,password:n}).then((t=>(e.commit("SET_TOKEN",t.data.data.token),B.info()))).then((t=>{e.commit("SET_USERINFO",t.data.data.user),r(t)})).catch((e=>{o(e)}))}))},logout({commit:e}){e("SET_TOKEN",""),C.clear(C.USER_TOKEN),e("SET_USERINFO",""),C.clear(C.USER_INFO),window.location.reload()},uploadavatar(e,{context:t}){return new Promise(((n,r)=>{q.uploadavatar({context:t}).then((t=>{e.commit("SET_USERINFO",t.data.data.user),n(t),window.location.reload()})).catch((e=>{r(e)}))}))},userDetail(e,{ID:t}){return new Promise(((e,n)=>{B.userDetail({ID:t}).then((t=>{e(t)})).catch((e=>{n(e)}))}))}}};var G=z;const X=({type:e,from:t,to:n})=>M.post("list/sort_problem",{type:e,from:t,to:n}),H=({id:e})=>M.get(`problems/${e}`,{}),Q=({name:e,from:t,problemLink:n,description:r})=>M.post("problems",{name:e,from:t,problem_link:n,description:r});var V={sort:X,get:H,create:Q};const W={namespaced:!0,actions:{sort(e,{type:t,from:n,to:r}){return new Promise(((e,o)=>{V.sort({type:t,from:n,to:r}).then((t=>{e(t)})).catch((e=>{o(e)}))}))},get(e,{id:t}){return new Promise(((e,n)=>{V.get({id:t}).then((t=>{e(t)})).catch((e=>{n(e)}))}))},create(e,{name:t,from:n,problemLink:r,description:o}){return new Promise(((e,a)=>{V.create({name:t,from:n,problemLink:r,description:o}).then((t=>{e(t)})).catch((e=>{a(e)}))}))}}};var Y=W;const ee=({type:e,from:t,to:n})=>M.post("list/sort_online_judge",{type:e,from:t,to:n}),te=({id:e})=>M.get(`/online_judge/${e}`,{});var ne={sort:ee,get:te};const re={namespaced:!0,actions:{sort(e,{type:t,from:n,to:r}){return new Promise(((e,o)=>{ne.sort({type:t,from:n,to:r}).then((t=>{e(t)})).catch((e=>{o(e)}))}))},get(e,{id:t}){return new Promise(((e,n)=>{ne.get({id:t}).then((t=>{e(t)})).catch((e=>{n(e)}))}))}}};var oe=re;const ae=({id:e})=>M.post("list/sort_test_set",{id:e}),ie=({id:e})=>M.get(`test_set/${e}`,{}),se=({name:e,from:t,problemLink:n,description:r})=>M.post("test_set",{name:e,from:t,problem_link:n,description:r});var ue={sort:ae,get:ie,create:se};const ce={namespaced:!0,actions:{sort(e,{id:t}){return new Promise(((e,n)=>{ue.sort({id:t}).then((t=>{e(t)})).catch((e=>{n(e)}))}))},get(e,{id:t}){return new Promise(((e,n)=>{ue.get({id:t}).then((t=>{e(t)})).catch((e=>{n(e)}))}))},create(e,{ProblemID:t,Uploader:n,Input:r,Output:o}){return new Promise(((e,a)=>{ue.create({ProblemID:t,Uploader:n,Input:r,Output:o}).then((t=>{e(t)})).catch((e=>{a(e)}))}))}}};var le=ce;r["default"].use(b.ZP);var de=new b.ZP.Store({strict:!1,state:{},getters:{},mutations:{},actions:{},modules:{testSetModule:le,problemModule:Y,userModule:G,onlineJudgeModule:oe}});const pe=[{path:"/register",name:"register",component:()=>n.e(311).then(n.bind(n,7311))},{path:"/login",name:"login",component:()=>n.e(686).then(n.bind(n,7686))},{path:"/profile",name:"profile",meta:{auth:!0},component:()=>n.e(243).then(n.bind(n,3243))},{path:"/userDetail/:id",name:"userDetail",component:()=>n.e(254).then(n.bind(n,6254))}];var me=pe;const fe=[{path:"/problem/create",name:"problem_create",meta:{auth:!0},component:()=>n.e(479).then(n.bind(n,3479))},{path:"/problem/:id",name:"problem_detail",component:()=>n.e(271).then(n.bind(n,5271))},{path:"/problem",name:"problem_list",component:()=>n.e(177).then(n.bind(n,7177))}];var he=fe;r["default"].use(P.Z);const be=[{path:"/",name:"home",component:()=>n.e(107).then(n.bind(n,6107))},{path:"/about",name:"about",component:()=>n.e(830).then(n.bind(n,5830))},...he,...me],ve=new P.Z({mode:"history",base:"/",routes:be}),ge=P.Z.prototype.push;P.Z.prototype.push=function(e){return ge.call(this,e).catch((e=>e))},ve.beforeEach(((e,t,n)=>{e.meta.auth?de.state.userModule.token?n():ve.push({name:"login"}):n()}));var _e=ve;n(44);r["default"].config.productionTip=!1,r["default"].prototype.Clipboard=d(),r["default"].use(a.XG7),r["default"].use(i.A7),r["default"].use(o.ZP),r["default"].use(c.Z,u()),new r["default"]({router:_e,store:de,render:e=>e(I)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{107:"3ee95fcb",177:"24500a71",243:"0a9c3f1d",254:"e0524988",271:"73acd5c9",311:"a6133ab8",479:"9c38045e",686:"7d1ed53b",830:"bf1f8163"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="nextdebug:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunknextdebug"]=self["webpackChunknextdebug"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1981)}));r=n.O(r)})();
//# sourceMappingURL=app.47e06ad4.js.map