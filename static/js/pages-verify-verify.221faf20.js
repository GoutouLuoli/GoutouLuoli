(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-verify-verify"],{"0a0b":function(e,n,t){t("5c47"),t("a1c1"),t("9db6"),t("5ef2"),e.exports={navigateBack:function(){uni.navigateBack({delta:1,fail:function(e){uni.switchTab({url:"/pages/index/index"})}})},jiangqie:function(){uni.navigateTo({url:"/pages/webview/webview"})},openLink:function(e){if(e)return e.startsWith("/pages/")?(e=function(e){var n="";return 0===e.length?"":(n=e.replace(/&amp;/g,"&"),n=n.replace(/&lt;/g,"<"),n=n.replace(/&gt;/g,">"),n=n.replace(/&nbsp;/g," "),n=n.replace(/&#39;/g,"'"),n=n.replace(/&quot;/g,'"'),n)}(e),void uni.navigateTo({url:e,fail:function(){uni.redirectTo({url:e})}})):void uni.navigateToMiniProgram({appId:e,fail:function(e){e.errMsg&&e.errMsg.indexOf("cancel")<0&&uni.showToast({icon:"none",title:e.errMsg})}})}}},"0ed6":function(e,n,t){"use strict";t.r(n);var i=t("cc94"),a=t("fc29");for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("7c9d");var r=t("828b"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"036ada2b",null,!1,i["a"],void 0);n["default"]=c.exports},"66f9":function(e,n,t){var i=t("c86c");n=i(!1),n.push([e.i,".content[data-v-036ada2b]{position:fixed;height:100%;width:100%;overflow-y:scroll}.jiangqie-info-form-box[data-v-036ada2b]{padding:%?20?%;margin-bottom:%?160?%}.jiangqie-verify-box[data-v-036ada2b]{padding:%?80?% %?120?%;text-align:center}.jiangqie-verify-info[data-v-036ada2b]{padding-bottom:%?80?%}.jiangqie-verify-info uni-button[data-v-036ada2b],\n.jiangqie-verify-info uni-button[data-v-036ada2b]::after{border:none;background:none}.jiangqie-verify-line[data-v-036ada2b]{padding:%?30?% 0;border-bottom:%?1?% solid #ddd}.jiangqie-verify-line uni-image[data-v-036ada2b]{height:%?180?%;width:%?180?%;border-radius:50%;margin-bottom:%?10?%}.jiangqie-verify-text[data-v-036ada2b]{font-size:%?30?%;font-weight:500}.jiangqie-verify-line uni-input[data-v-036ada2b]{font-size:%?30?%;height:%?72?%;line-height:%?72?%}.jiangqie-verify-button[data-v-036ada2b]{display:flex;align-items:center;flex-wrap:wrap;justify-content:center}.jiangqie-verify-button uni-view[data-v-036ada2b]{width:%?360?%;text-align:center;height:%?96?%;line-height:%?96?%;border-radius:%?96?%;font-size:%?28?%;font-weight:400;color:#999;margin-bottom:%?40?%}.jiangqie-verify-button uni-view[data-v-036ada2b]:nth-child(1){color:#fff;background:#010101;font-size:%?32?%}",""]),e.exports=n},"7c9d":function(e,n,t){"use strict";var i=t("d4c0"),a=t.n(i);a.a},"819d":function(e,n,t){"use strict";t("6a54");var i=t("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("0a0b")),o=i(t("2b7b")),r=i(t("e638")),c=i(t("e2e2")),u={data:function(){return{nickname:"",avatar:"/static/images/default_avatar.jpg"}},onLoad:function(e){},methods:{openLink:function(e){a.default.openLink(e)},onChooseAvatar:function(e){var n=this;c.default.upload(r.default.JIANGQIE_OTHER_UPLOAD,e.detail.avatarUrl).then((function(e){n.avatar=e.data.src}),(function(e){console.log(e)}))},onNicknameBlur:function(e){this.nickname=e.detail.value},clickSubmit:function(){var e=this;c.default.post(r.default.JIANGQIE_USER_SET_INFO,{nickname:this.nickname,avatar:this.avatar}).then((function(n){if(0==n.code){uni.showToast({icon:"none",title:n.msg});var t=o.default.getUser();t.nickname=e.nickname,t.avatar=e.avatar,o.default.setUser(t),setTimeout((function(){a.default.navigateBack()}),1500)}else uni.showToast({icon:"none",title:n.msg})}),(function(e){console.log(e)}))},clickBack:function(){a.default.navigateBack()}}};n.default=u},a32e:function(e,n){e.exports={JQ_DOMAIN:"kongjian.beidewu.cn"}},cc94:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"jiangqie-verify-box"},[t("v-uni-view",{staticClass:"jiangqie-verify-info"},[t("v-uni-button",{staticClass:"jiangqie-verify-line",attrs:{"open-type":"chooseAvatar"},on:{chooseavatar:function(n){arguments[0]=n=e.$handleEvent(n),e.onChooseAvatar.apply(void 0,arguments)}}},[t("v-uni-view",[t("v-uni-image",{attrs:{mode:"aspectFill",src:e.avatar}})],1),t("v-uni-view",{staticClass:"jiangqie-verify-text"},[e._v("QQ小程序用户暂时不支持更换头像")])],1),t("v-uni-view",{staticClass:"jiangqie-verify-line"},[t("v-uni-view",{staticClass:"jiangqie-verify-text"},[e._v("你这么帅，不换个昵称吗")]),t("v-uni-view",[t("v-uni-input",{attrs:{type:"nickname",placeholder:"请输入昵称"},on:{blur:function(n){arguments[0]=n=e.$handleEvent(n),e.onNicknameBlur.apply(void 0,arguments)}},model:{value:e.nickname,callback:function(n){e.nickname=n},expression:"nickname"}})],1)],1)],1),t("v-uni-view",{staticClass:"jiangqie-verify-button"},[t("v-uni-view",{on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clickSubmit.apply(void 0,arguments)}}},[e._v("提交")]),t("v-uni-view",{on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clickBack.apply(void 0,arguments)}}},[e._v("跳过")])],1)],1)],1)},a=[]},d4c0:function(e,n,t){var i=t("66f9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("967d").default;a("045640f0",i,!0,{sourceMap:!1,shadowMode:!1})},e2e2:function(e,n,t){var i=t("bdbb").default;t("bf0f");var a=t("2b7b");function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(i,o){uni.showLoading(),n.token=a.getToken(),"GET"==t&&(n.t=(new Date).getTime(),n.r=Math.floor(1e4*Math.random())),uni.request({url:e,data:n,method:t,success:function(e){200==e.statusCode?-1!=e.data.code?-11!=e.data.code?0!=e.data.code?o(e.data):i(e.data):uni.navigateTo({url:"/pages/login/login?type=mobile"}):uni.navigateTo({url:"/pages/login/login"}):o(e.errMsg)},fail:function(e){o(e)},complete:function(){uni.hideLoading()}})}))}e.exports={get:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(e,n,"GET")},post:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(e,n,"POST")},upload:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,r){uni.showLoading({title:"上传中……"}),t.token=a.getToken(),uni.uploadFile({url:e,filePath:n,name:"image",formData:t,success:function(e){if(200==e.statusCode){var n=void 0;n=e.data instanceof String||"string"==i(e.data).toLowerCase()?JSON.parse(e.data):e.data,-1!=n.code?o(n):uni.navigateTo({url:"/pages/login/login"})}else r(e.errMsg)},fail:function(e){console.log(e)},complete:function(){uni.hideLoading()}})}))}}},e638:function(e,n,t){t("c223");var i=t("a32e");function a(e,n){return"https://".concat(i.JQ_DOMAIN,"/wp-json/jiangqie/v1/").concat(e,"/").concat(n)}e.exports={JIANGQIE_SETTING_HOME:a("setting","home"),JIANGQIE_SETTING_HOT:a("setting","hot"),JIANGQIE_SETTING_CATEGORY:a("setting","category"),JIANGQIE_SETTING_UCENTER:a("setting","ucenter"),JIANGQIE_SETTING_LOGIN:a("setting","login"),JIANGQIE_CATEGORY_INDEX:a("category","index"),JIANGQIE_POSTS_LAST:a("posts","last"),JIANGQIE_POSTS_CATEGORY:a("posts","category"),JIANGQIE_POSTS_TAG:a("posts","tag"),JIANGQIE_POSTS_HOT:a("posts","hot"),JIANGQIE_POSTS_SEARCH:a("posts","search"),JIANGQIE_POSTS_SEARCH_HOT:a("posts","search/hot"),JIANGQIE_POSTS_MY:a("posts","my"),JIANGQIE_POST_DETAIL:a("posts","detail"),JIANGQIE_POST_PAGE:a("posts","page"),JIANGQIE_POST_WX_ACODE:a("posts","wxacode"),JIANGQIE_POST_BD_ACODE:a("posts","bdacode"),JIANGQIE_POST_QQ_ACODE:a("posts","qqacode"),JIANGQIE_USER_LOGIN:a("user","login3"),JIANGQIE_USER_LOGIN_TEST:a("user","logintest"),JIANGQIE_USER_INDEX:a("user","index"),JIANGQIE_USER_LIKE:a("user","like"),JIANGQIE_USER_FAVORITE:a("user","favorite"),JIANGQIE_USER_SET_MOBILE:a("user","set_mobile"),JIANGQIE_USER_SET_INFO:a("user","set_info"),JIANGQIE_COMMENT_INDEX:a("comment","index"),JIANGQIE_COMMENT_ADD:a("comment","add"),JIANGQIE_COMMENT_DELETE:a("comment","delete"),JIANGQIE_OTHER_UPLOAD:a("other","upload")}},fc29:function(e,n,t){"use strict";t.r(n);var i=t("819d"),a=t.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a}}]);