"use strict";(self["webpackChunknextdebug"]=self["webpackChunknextdebug"]||[]).push([[254],{6254:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{"text-align":"center"}},[a("b-col",[a("b-img",{attrs:{thumbnail:"",fluid:"",src:t.baseurl+"avatar?src="+t.user.avatar,width:"200"}})],1)],1),a("div",{staticStyle:{"text-align":"center"}},[a("h3",[t.user?a("span",[t._v(t._s(t.user.nick_name))]):t._e()])])])},s=[],u=a(3019),i=a(4665),r={data:function(){return{baseurl:"https://api.debug.pink:8080/api/",user:{ID:0}}},mounted:function(){this.onLoad()},methods:(0,u.Z)((0,u.Z)({},(0,i.nv)("userModule",{getUserDetail:"userDetail"})),{},{onLoad:function(){var t=this;this.user.ID=parseInt(this.$route.params.id,10),this.$store.dispatch("userModule/userDetail",this.user).then((function(e){t.user=e.data.data.user})).catch((function(e){t.makeToast("提示",e.response.data.msg,"danger",!1)}))},makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast(e,{title:t,variant:a,autoHideDelay:5e3,appendToast:n})}})},l=r,o=a(1001),d=(0,o.Z)(l,n,s,!1,null,null,null),c=d.exports}}]);
//# sourceMappingURL=254-legacy.b8c59fec.js.map