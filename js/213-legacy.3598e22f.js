"use strict";(self["webpackChunknextdebug"]=self["webpackChunknextdebug"]||[]).push([[213],{6254:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{"text-align":"center"}},[r("b-col",[r("b-img",{attrs:{thumbnail:"",fluid:"",src:e.baseurl+"avatar?src="+e.user.avatar,width:"200"}})],1)],1),r("div",{staticStyle:{"text-align":"center"}},[r("h3",[e.user?r("span",[e._v(e._s(e.user.nick_name))]):e._e()])])])},a=[],i=r(3019),u=r(4665),s={data:function(){return{baseurl:"https://api.debug.pink:8080/api/",user:{ID:0}}},mounted:function(){this.onLoad()},methods:(0,i.Z)((0,i.Z)({},(0,u.nv)("userModule",{getUserDetail:"userDetail"})),{},{onLoad:function(){var e=this;this.user.ID=parseInt(this.$route.params.id,10),this.$store.dispatch("userModule/userDetail",this.user).then((function(t){e.user=t.data.data.user})).catch((function(t){e.makeToast("提示",t.response.data.msg,"danger",!1)}))},makeToast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast(t,{title:e,variant:r,autoHideDelay:5e3,appendToast:n})}})},o=s,c=r(1001),l=(0,c.Z)(o,n,a,!1,null,null,null),d=l.exports},3019:function(e,t,r){r.d(t,{Z:function(){return i}});r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=213-legacy.3598e22f.js.map