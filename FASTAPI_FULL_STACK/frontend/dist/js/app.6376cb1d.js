!function(e){function webpackJsonpCallback(t){for(var o,a,c=t[0],s=t[1],u=t[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(i&&i(t);p.length;)p.shift()();return r.push.apply(r,u||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,c=1;c<o.length;c++){var i=o[c];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=__webpack_require__(__webpack_require__.s=o[0]))}return e}var t={},n={app:0},r=[];function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.e=function requireEnsure(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,__webpack_require__.nc&&c.setAttribute("nonce",__webpack_require__.nc),c.src=function jsonpScriptSrc(e){return __webpack_require__.p+"js/"+({login:"login",main:"main","main-admin":"main-admin","main-admin-users":"main-admin-users","main-admin-users-create":"main-admin-users-create","main-admin-users-edit":"main-admin-users-edit","main-dashboard":"main-dashboard","main-profile":"main-profile","main-profile-edit":"main-profile-edit","main-profile-password":"main-profile-password","recover-password":"recover-password","reset-password":"reset-password",start:"start"}[e]||e)+"."+{login:"c877b36b",main:"eb40b25d","main-admin":"c3ca428a","main-admin-users":"2bc4b35e","main-admin-users-create":"011da7e4","main-admin-users-edit":"c0bc22c0","main-dashboard":"445dcc26","main-profile":"2401cc9f","main-profile-edit":"6f741579","main-profile-password":"a0ba968f","recover-password":"5e0267ad","reset-password":"1b15f987",start:"0b18aade"}[e]+".js"}(e);var i=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}n[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="/",__webpack_require__.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=webpackJsonpCallback,o=o.slice();for(var c=0;c<o.length;c++)webpackJsonpCallback(o[c]);var i=a;r.push([0,"chunk-vendors"]),checkDeferredModules()}({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));var r=n("0261"),o=n("8876"),a=n("635a"),c=n("2963"),i=n("d568"),s={state:{isLoggedIn:null,token:"",logInError:!1,userProfile:null,dashboardMiniDrawer:!1,dashboardShowDrawer:!0,notifications:[]},mutations:a.i,actions:i.a,getters:c.a},u=n("7c75"),f=n("0e8f"),p=n("0cc5"),l={state:{users:[]},mutations:u.c,actions:p.a,getters:f.a};r.default.use(o.a);var _={modules:{main:s,admin:l}},d=new o.a.Store(_);t.a=d},"0cc5":function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return y}));var r=n("a08c"),o=n.n(r),a=n("7f5d"),c=n("62c2"),i=n("7c75"),s=n("d568"),u=n("635a");function asyncGeneratorStep(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function _next(e){asyncGeneratorStep(a,r,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,r,o,_next,_throw,"throw",e)}_next(void 0)}))}}var f,p,l,_={actionGetUsers:(l=_asyncToGenerator(o.a.mark((function _callee(e){var t;return o.a.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.a.getUsers(e.rootState.main.token);case 3:(t=n.sent)&&Object(i.b)(e,t.data),n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,Object(s.b)(e,n.t0);case 11:case"end":return n.stop()}}),_callee,null,[[0,7]])}))),function actionGetUsers(e){return l.apply(this,arguments)}),actionUpdateUser:(p=_asyncToGenerator(o.a.mark((function _callee2(e,t){var n,r;return o.a.wrap((function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,n={content:"saving",showProgress:!0},Object(u.a)(e,n),o.t0=Promise,o.t1=a.a.updateUser(e.rootState.main.token,t.id,t.user),o.next=7,new Promise((function(e,t){return setTimeout((function(){return e()}),500)}));case 7:return o.t2=o.sent,o.t3=[o.t1,o.t2],o.next=11,o.t0.all.call(o.t0,o.t3);case 11:r=o.sent[0],Object(i.a)(e,r.data),Object(u.b)(e,n),Object(u.a)(e,{content:"User successfully updated",color:"success"}),o.next=21;break;case 17:return o.prev=17,o.t4=o.catch(0),o.next=21,Object(s.b)(e,o.t4);case 21:case"end":return o.stop()}}),_callee2,null,[[0,17]])}))),function actionUpdateUser(e,t){return p.apply(this,arguments)}),actionCreateUser:(f=_asyncToGenerator(o.a.mark((function _callee3(e,t){var n,r;return o.a.wrap((function _callee3$(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,n={content:"saving",showProgress:!0},Object(u.a)(e,n),o.t0=Promise,o.t1=a.a.createUser(e.rootState.main.token,t),o.next=7,new Promise((function(e,t){return setTimeout((function(){return e()}),500)}));case 7:return o.t2=o.sent,o.t3=[o.t1,o.t2],o.next=11,o.t0.all.call(o.t0,o.t3);case 11:r=o.sent[0],Object(i.a)(e,r.data),Object(u.b)(e,n),Object(u.a)(e,{content:"User successfully created",color:"success"}),o.next=21;break;case 17:return o.prev=17,o.t4=o.catch(0),o.next=21,Object(s.b)(e,o.t4);case 21:case"end":return o.stop()}}),_callee3,null,[[0,17]])}))),function actionCreateUser(e,t){return f.apply(this,arguments)})},d=Object(c.getStoreAccessors)("").dispatch,h=d(_.actionCreateUser),b=d(_.actionGetUsers),y=d(_.actionUpdateUser)},"0e8f":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n("62c2");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={adminUsers:function adminUsers(e){return e.users},adminOneUser:function adminOneUser(e){return function(t){var n=e.users.filter((function(e){return e.id===t}));if(n.length>0)return function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n[0])}}},a=Object(r.getStoreAccessors)("").read,c=a(o.adminOneUser),i=a(o.adminUsers)},2963:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return p})),n.d(t,"d",(function(){return l}));var r=n("62c2"),o={hasAdminAccess:function hasAdminAccess(e){return e.userProfile&&e.userProfile.is_superuser&&e.userProfile.is_active},loginError:function loginError(e){return e.logInError},dashboardShowDrawer:function dashboardShowDrawer(e){return e.dashboardShowDrawer},dashboardMiniDrawer:function dashboardMiniDrawer(e){return e.dashboardMiniDrawer},userProfile:function userProfile(e){return e.userProfile},token:function token(e){return e.token},isLoggedIn:function isLoggedIn(e){return e.isLoggedIn},firstNotification:function firstNotification(e){return e.notifications.length>0&&e.notifications[0]}},a=Object(r.getStoreAccessors)("").read,c=a(o.dashboardMiniDrawer),i=a(o.dashboardShowDrawer),s=a(o.hasAdminAccess),u=a(o.isLoggedIn),f=a(o.loginError),p=(a(o.token),a(o.userProfile)),l=a(o.firstNotification)},"5f03":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="http://".concat("localhost"),o="{{cookiecutter.project_name}}"},"5f86":function(e,t,n){"use strict";var r=n("0261"),o=n("1bee"),a=n("0a8e"),c=n("b2e6");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var i=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(RouterComponent,e);var t=function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}(RouterComponent);function RouterComponent(){return _classCallCheck(this,RouterComponent),t.apply(this,arguments)}return RouterComponent}(c.b),s=i=Object(a.a)([c.a],i),u=n("e90a"),f=Object(u.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("router-view")}),[],!1,null,null,null).exports;r.default.use(o.a);t.a=new o.a({mode:"history",base:"/",routes:[{path:"/",component:function component(){return n.e("start").then(n.bind(null,"cd28"))},children:[{path:"login",component:function component(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"recover-password",component:function component(){return n.e("recover-password").then(n.bind(null,"05eb"))}},{path:"reset-password",component:function component(){return n.e("reset-password").then(n.bind(null,"0813"))}},{path:"main",component:function component(){return n.e("main").then(n.bind(null,"6b61"))},children:[{path:"dashboard",component:function component(){return n.e("main-dashboard").then(n.bind(null,"f021"))}},{path:"profile",component:f,redirect:"profile/view",children:[{path:"view",component:function component(){return n.e("main-profile").then(n.bind(null,"239a"))}},{path:"edit",component:function component(){return n.e("main-profile-edit").then(n.bind(null,"3113"))}},{path:"password",component:function component(){return n.e("main-profile-password").then(n.bind(null,"b556"))}}]},{path:"admin",component:function component(){return n.e("main-admin").then(n.bind(null,"2542"))},redirect:"admin/users/all",children:[{path:"users",redirect:"users/all"},{path:"users/all",component:function component(){return n.e("main-admin-users").then(n.bind(null,"b654"))}},{path:"users/edit/:id",name:"main-admin-users-edit",component:function component(){return n.e("main-admin-users-edit").then(n.bind(null,"d291"))}},{path:"users/create",name:"main-admin-users-create",component:function component(){return n.e("main-admin-users-create").then(n.bind(null,"9bdd"))}}]}]}]},{path:"/*",redirect:"/"}]})},"635a":function(e,t,n){"use strict";n.d(t,"i",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return p})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return _}));var r=n("62c2"),o={setToken:function setToken(e,t){e.token=t},setLoggedIn:function setLoggedIn(e,t){e.isLoggedIn=t},setLogInError:function setLogInError(e,t){e.logInError=t},setUserProfile:function setUserProfile(e,t){e.userProfile=t},setDashboardMiniDrawer:function setDashboardMiniDrawer(e,t){e.dashboardMiniDrawer=t},setDashboardShowDrawer:function setDashboardShowDrawer(e,t){e.dashboardShowDrawer=t},addNotification:function addNotification(e,t){e.notifications.push(t)},removeNotification:function removeNotification(e,t){e.notifications=e.notifications.filter((function(e){return e!==t}))}},a=Object(r.getStoreAccessors)("").commit,c=a(o.setDashboardMiniDrawer),i=a(o.setDashboardShowDrawer),s=a(o.setLoggedIn),u=a(o.setLogInError),f=a(o.setToken),p=a(o.setUserProfile),l=a(o.addNotification),_=a(o.removeNotification)},"7c75":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n("62c2"),o={setUsers:function setUsers(e,t){e.users=t},setUser:function setUser(e,t){var n=e.users.filter((function(e){return e.id!==t.id}));n.push(t),e.users=n}},a=Object(r.getStoreAccessors)("").commit,c=a(o.setUser),i=a(o.setUsers)},"7f5d":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("a08c"),o=n.n(r),a=n("f753"),c=n.n(a),i=n("5f03");function asyncGeneratorStep(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function _next(e){asyncGeneratorStep(a,r,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,r,o,_next,_throw,"throw",e)}_next(void 0)}))}}function authHeaders(e){return{headers:{Authorization:"Bearer ".concat(e)}}}var s,u,f,p,l,_,d,h,b={logInGetToken:(h=_asyncToGenerator(o.a.mark((function _callee(e,t){var n;return o.a.wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return(n=new URLSearchParams).append("username",e),n.append("password",t),r.abrupt("return",c.a.post("".concat(i.a,"/api/v1/login/access-token"),n));case 4:case"end":return r.stop()}}),_callee)}))),function logInGetToken(e,t){return h.apply(this,arguments)}),getMe:(d=_asyncToGenerator(o.a.mark((function _callee2(e){return o.a.wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.get("".concat(i.a,"/api/v1/users/me"),authHeaders(e)));case 1:case"end":return t.stop()}}),_callee2)}))),function getMe(e){return d.apply(this,arguments)}),updateMe:(_=_asyncToGenerator(o.a.mark((function _callee3(e,t){return o.a.wrap((function _callee3$(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c.a.put("".concat(i.a,"/api/v1/users/me"),t,authHeaders(e)));case 1:case"end":return n.stop()}}),_callee3)}))),function updateMe(e,t){return _.apply(this,arguments)}),getUsers:(l=_asyncToGenerator(o.a.mark((function _callee4(e){return o.a.wrap((function _callee4$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.get("".concat(i.a,"/api/v1/users/"),authHeaders(e)));case 1:case"end":return t.stop()}}),_callee4)}))),function getUsers(e){return l.apply(this,arguments)}),updateUser:(p=_asyncToGenerator(o.a.mark((function _callee5(e,t,n){return o.a.wrap((function _callee5$(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",c.a.put("".concat(i.a,"/api/v1/users/").concat(t),n,authHeaders(e)));case 1:case"end":return r.stop()}}),_callee5)}))),function updateUser(e,t,n){return p.apply(this,arguments)}),createUser:(f=_asyncToGenerator(o.a.mark((function _callee6(e,t){return o.a.wrap((function _callee6$(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c.a.post("".concat(i.a,"/api/v1/users/"),t,authHeaders(e)));case 1:case"end":return n.stop()}}),_callee6)}))),function createUser(e,t){return f.apply(this,arguments)}),passwordRecovery:(u=_asyncToGenerator(o.a.mark((function _callee7(e){return o.a.wrap((function _callee7$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.post("".concat(i.a,"/api/v1/password-recovery/").concat(e)));case 1:case"end":return t.stop()}}),_callee7)}))),function passwordRecovery(e){return u.apply(this,arguments)}),resetPassword:(s=_asyncToGenerator(o.a.mark((function _callee8(e,t){return o.a.wrap((function _callee8$(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c.a.post("".concat(i.a,"/api/v1/reset-password/"),{new_password:e,token:t}));case 1:case"end":return n.stop()}}),_callee8)}))),function resetPassword(e,t){return s.apply(this,arguments)})}},cd49:function(e,t,n){"use strict";n.r(t);n("908e"),n("6f84"),n("e697"),n("e204"),n("ec25"),n("ed63"),n("e44b"),n("d703"),n("c904"),n("5ad9"),n("d6d4"),n("c2db"),n("cc57"),n("88c5"),n("7b4d"),n("2786"),n("37da"),n("bd3c"),n("8a8c"),n("cdb3"),n("6e73"),n("40af"),n("bca3"),n("b4aa"),n("d27b"),n("0970"),n("6e15"),n("574e"),n("f7c9"),n("ba67"),n("f654"),n("163d"),n("add6"),n("936a"),n("c982"),n("9d30"),n("3299"),n("7c83"),n("6e41"),n("5431"),n("a51b"),n("5f54"),n("d345"),n("7aa2"),n("1736"),n("9251"),n("cda4"),n("5ab2"),n("3da6"),n("68bb"),n("3734"),n("8cae"),n("d89e"),n("6c5f"),n("cdcd"),n("8fee"),n("a9e5"),n("e10e"),n("fe95"),n("041c"),n("de78"),n("6648"),n("f0e6"),n("354b"),n("fc58"),n("d288"),n("8ad2"),n("745a"),n("8f38"),n("0a5e"),n("44f8"),n("5a83"),n("25fa"),n("de7e"),n("1034"),n("6ffb"),n("9dd9"),n("190b"),n("9e76"),n("f548"),n("9a33"),n("c0c3"),n("2b45"),n("2aa3"),n("0b53"),n("309f"),n("41ca"),n("baf8"),n("be7a"),n("55ab"),n("41bc"),n("616f"),n("c86c"),n("9540"),n("d3a6"),n("f2d4"),n("8cf2"),n("7f85"),n("06a2"),n("5490"),n("70da"),n("7ced"),n("b9e6"),n("51f1"),n("a651"),n("6491"),n("962c"),n("4fd7"),n("238e"),n("4395"),n("d58b"),n("47e7"),n("f8b9"),n("5c65"),n("93b1"),n("0055"),n("3861"),n("435b"),n("154f"),n("c5c2"),n("b6f9"),n("9b8d"),n("595b"),n("6d57"),n("b449");var r=n("60ae");n.n(r).a.registerHooks(["beforeRouteEnter","beforeRouteLeave","beforeRouteUpdate"]);var o=n("0261"),a=n("511a"),c=n.n(a);o.default.use(c.a,{iconfont:"md"});var i=n("10c5");o.default.use(i.a);var s=n("a08c"),u=n.n(s),f=n("0a8e"),p=n("b2e6"),l=n("635a"),_=n("2963"),d=n("d568");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function asyncGeneratorStep(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function _next(e){asyncGeneratorStep(a,r,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,r,o,_next,_throw,"throw",e)}_next(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(NotificationsManager,e);var t,n,r,o,a,c=function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}(NotificationsManager);function NotificationsManager(){var e;return _classCallCheck(this,NotificationsManager),(e=c.apply(this,arguments)).show=!1,e.text="",e.showProgress=!1,e.currentNotification=!1,e}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(NotificationsManager,[{key:"hide",value:(a=_asyncToGenerator(u.a.mark((function _callee(){return u.a.wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return this.show=!1,e.next=3,new Promise((function(e,t){return setTimeout((function(){return e()}),500)}));case 3:case"end":return e.stop()}}),_callee,this)}))),function hide(){return a.apply(this,arguments)})},{key:"close",value:(o=_asyncToGenerator(u.a.mark((function _callee2(){return u.a.wrap((function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.hide();case 2:return e.next=4,this.removeCurrentNotification();case 4:case"end":return e.stop()}}),_callee2,this)}))),function close(){return o.apply(this,arguments)})},{key:"removeCurrentNotification",value:(r=_asyncToGenerator(u.a.mark((function _callee3(){return u.a.wrap((function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:this.currentNotification&&Object(l.b)(this.$store,this.currentNotification);case 1:case"end":return e.stop()}}),_callee3,this)}))),function removeCurrentNotification(){return r.apply(this,arguments)})},{key:"setNotification",value:(n=_asyncToGenerator(u.a.mark((function _callee4(e){return u.a.wrap((function _callee4$(t){for(;;)switch(t.prev=t.next){case 0:if(!this.show){t.next=3;break}return t.next=3,this.hide();case 3:e?(this.currentNotification=e,this.showProgress=e.showProgress||!1,this.show=!0):this.currentNotification=!1;case 4:case"end":return t.stop()}}),_callee4,this)}))),function setNotification(e){return n.apply(this,arguments)})},{key:"onNotificationChange",value:(t=_asyncToGenerator(u.a.mark((function _callee5(e,t){return u.a.wrap((function _callee5$(t){for(;;)switch(t.prev=t.next){case 0:if(e===this.currentNotification){t.next=4;break}return t.next=3,this.setNotification(e);case 3:e&&Object(d.f)(this.$store,{notification:e,timeout:6500});case 4:case"end":return t.stop()}}),_callee5,this)}))),function onNotificationChange(e,n){return t.apply(this,arguments)})},{key:"firstNotification",get:function get(){return Object(_.d)(this.$store)}},{key:"currentNotificationContent",get:function get(){return this.currentNotification&&this.currentNotification.content||""}},{key:"currentNotificationColor",get:function get(){return this.currentNotification&&this.currentNotification.color||"info"}}]),NotificationsManager}(p.b);Object(f.a)([Object(p.c)("firstNotification")],h.prototype,"onNotificationChange",null);var b=h=Object(f.a)([p.a],h),y=n("e90a"),v=Object(y.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-snackbar",{attrs:{"auto-height":"",color:e.currentNotificationColor},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.showProgress,expression:"showProgress"}],staticClass:"ma-2",attrs:{indeterminate:""}}),e._v(e._s(e.currentNotificationContent)+"\n        "),n("v-btn",{attrs:{flat:""},nativeOn:{click:function(t){return e.close(t)}}},[e._v("Close")])],1)],1)}),[],!1,null,null,null).exports;function Appvue_type_script_lang_ts_typeof(e){return(Appvue_type_script_lang_ts_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Appvue_type_script_lang_ts_asyncGeneratorStep(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function Appvue_type_script_lang_ts_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Appvue_type_script_lang_ts_defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Appvue_type_script_lang_ts_setPrototypeOf(e,t){return(Appvue_type_script_lang_ts_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function Appvue_type_script_lang_ts_possibleConstructorReturn(e,t){return!t||"object"!==Appvue_type_script_lang_ts_typeof(t)&&"function"!=typeof t?function Appvue_type_script_lang_ts_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Appvue_type_script_lang_ts_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Appvue_type_script_lang_ts_getPrototypeOf(e){return(Appvue_type_script_lang_ts_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function Appvue_type_script_lang_ts_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Appvue_type_script_lang_ts_setPrototypeOf(e,t)}(App,e);var t,n=function Appvue_type_script_lang_ts_createSuper(e){return function(){var t,n=Appvue_type_script_lang_ts_getPrototypeOf(e);if(Appvue_type_script_lang_ts_isNativeReflectConstruct()){var r=Appvue_type_script_lang_ts_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Appvue_type_script_lang_ts_possibleConstructorReturn(this,t)}}(App);function App(){return Appvue_type_script_lang_ts_classCallCheck(this,App),n.apply(this,arguments)}return function Appvue_type_script_lang_ts_createClass(e,t,n){return t&&Appvue_type_script_lang_ts_defineProperties(e.prototype,t),n&&Appvue_type_script_lang_ts_defineProperties(e,n),e}(App,[{key:"created",value:(t=function Appvue_type_script_lang_ts_asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function _next(e){Appvue_type_script_lang_ts_asyncGeneratorStep(a,r,o,_next,_throw,"next",e)}function _throw(e){Appvue_type_script_lang_ts_asyncGeneratorStep(a,r,o,_next,_throw,"throw",e)}_next(void 0)}))}}(u.a.mark((function _callee(){return u.a.wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(this.$store);case 2:case"end":return e.stop()}}),_callee,this)}))),function created(){return t.apply(this,arguments)})},{key:"loggedIn",get:function get(){return Object(_.f)(this.$store)}}]),App}(p.b),w=m=Object(f.a)([Object(p.a)({components:{NotificationsManager:v}})],m),g=Object(y.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",[null===this.loggedIn?t("v-content",[t("v-container",{attrs:{"fill-height":""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",[t("div",{staticClass:"text-xs-center"},[t("div",{staticClass:"headline my-5"},[this._v("Loading...")]),t("v-progress-circular",{attrs:{size:"100",indeterminate:"",color:"primary"}})],1)])],1)],1)],1):t("router-view"),t("NotificationsManager")],1)],1)}),[],!1,null,null,null).exports,O=n("5f86"),k=n("0613"),P=n("c730");Object(P.a)("".concat("/","service-worker.js"),{ready:function ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function cached(){console.log("Content has been cached for offline use.")},updated:function updated(){console.log("New content is available; please refresh.")},offline:function offline(){console.log("No internet connection found. App is running in offline mode.")},error:function error(e){console.error("Error during service worker registration:",e)}});n("001f");o.default.config.productionTip=!1,new o.default({router:O.a,store:k.a,render:function render(e){return e(g)}}).$mount("#app")},d568:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return C})),n.d(t,"i",(function(){return R})),n.d(t,"h",(function(){return U})),n.d(t,"f",(function(){return L})),n.d(t,"e",(function(){return I})),n.d(t,"g",(function(){return D}));var r=n("a08c"),o=n.n(r),a=n("7f5d"),c=n("5f86"),i=function getLocalToken(){return localStorage.getItem("token")},s=function saveLocalToken(e){return localStorage.setItem("token",e)},u=function removeLocalToken(){return localStorage.removeItem("token")},f=n("62c2"),p=n("635a");function asyncGeneratorStep(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function _next(e){asyncGeneratorStep(a,r,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,r,o,_next,_throw,"throw",e)}_next(void 0)}))}}var l,_,d,h,b,y,v,m,w,g,O,k={actionLogIn:(O=_asyncToGenerator(o.a.mark((function _callee(e,t){var n,r;return o.a.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,a.a.logInGetToken(t.username,t.password);case 3:if(n=o.sent,!(r=n.data.access_token)){o.next=17;break}return s(r),Object(p.g)(e,r),Object(p.f)(e,!0),Object(p.e)(e,!1),o.next=12,S(e);case 12:return o.next=14,N(e);case 14:Object(p.a)(e,{content:"Logged in",color:"success"}),o.next=19;break;case 17:return o.next=19,T(e);case 19:o.next=26;break;case 21:return o.prev=21,o.t0=o.catch(0),Object(p.e)(e,!0),o.next=26,T(e);case 26:case"end":return o.stop()}}),_callee,null,[[0,21]])}))),function actionLogIn(e,t){return O.apply(this,arguments)}),actionGetUserProfile:(g=_asyncToGenerator(o.a.mark((function _callee2(e){var t;return o.a.wrap((function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.a.getMe(e.state.token);case 3:(t=n.sent).data&&Object(p.h)(e,t.data),n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,x(e,n.t0);case 11:case"end":return n.stop()}}),_callee2,null,[[0,7]])}))),function actionGetUserProfile(e){return g.apply(this,arguments)}),actionUpdateUserProfile:(w=_asyncToGenerator(o.a.mark((function _callee3(e,t){var n,r;return o.a.wrap((function _callee3$(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,n={content:"saving",showProgress:!0},Object(p.a)(e,n),o.t0=Promise,o.t1=a.a.updateMe(e.state.token,t),o.next=7,new Promise((function(e,t){return setTimeout((function(){return e()}),500)}));case 7:return o.t2=o.sent,o.t3=[o.t1,o.t2],o.next=11,o.t0.all.call(o.t0,o.t3);case 11:r=o.sent[0],Object(p.h)(e,r.data),Object(p.b)(e,n),Object(p.a)(e,{content:"Profile successfully updated",color:"success"}),o.next=21;break;case 17:return o.prev=17,o.t4=o.catch(0),o.next=21,x(e,o.t4);case 21:case"end":return o.stop()}}),_callee3,null,[[0,17]])}))),function actionUpdateUserProfile(e,t){return w.apply(this,arguments)}),actionCheckLoggedIn:(m=_asyncToGenerator(o.a.mark((function _callee4(e){var t,n,r;return o.a.wrap((function _callee4$(o){for(;;)switch(o.prev=o.next){case 0:if(e.state.isLoggedIn){o.next=20;break}if((t=e.state.token)||(n=i())&&(Object(p.g)(e,n),t=n),!t){o.next=18;break}return o.prev=4,o.next=7,a.a.getMe(t);case 7:r=o.sent,Object(p.f)(e,!0),Object(p.h)(e,r.data),o.next=16;break;case 12:return o.prev=12,o.t0=o.catch(4),o.next=16,G(e);case 16:o.next=20;break;case 18:return o.next=20,G(e);case 20:case"end":return o.stop()}}),_callee4,null,[[4,12]])}))),function actionCheckLoggedIn(e){return m.apply(this,arguments)}),actionRemoveLogIn:(v=_asyncToGenerator(o.a.mark((function _callee5(e){return o.a.wrap((function _callee5$(t){for(;;)switch(t.prev=t.next){case 0:u(),Object(p.g)(e,""),Object(p.f)(e,!1);case 3:case"end":return t.stop()}}),_callee5)}))),function actionRemoveLogIn(e){return v.apply(this,arguments)}),actionLogOut:(y=_asyncToGenerator(o.a.mark((function _callee6(e){return o.a.wrap((function _callee6$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(e);case 2:return t.next=4,A(e);case 4:case"end":return t.stop()}}),_callee6)}))),function actionLogOut(e){return y.apply(this,arguments)}),actionUserLogOut:(b=_asyncToGenerator(o.a.mark((function _callee7(e){return o.a.wrap((function _callee7$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:Object(p.a)(e,{content:"Logged out",color:"success"});case 3:case"end":return t.stop()}}),_callee7)}))),function actionUserLogOut(e){return b.apply(this,arguments)}),actionRouteLogOut:function actionRouteLogOut(e){"/login"!==c.a.currentRoute.path&&c.a.push("/login")},actionCheckApiError:(h=_asyncToGenerator(o.a.mark((function _callee8(e,t){return o.a.wrap((function _callee8$(n){for(;;)switch(n.prev=n.next){case 0:if(401!==t.response.status){n.next=3;break}return n.next=3,T(e);case 3:case"end":return n.stop()}}),_callee8)}))),function actionCheckApiError(e,t){return h.apply(this,arguments)}),actionRouteLoggedIn:function actionRouteLoggedIn(e){"/login"!==c.a.currentRoute.path&&"/"!==c.a.currentRoute.path||c.a.push("/main")},removeNotification:(d=_asyncToGenerator(o.a.mark((function _callee9(e,t){return o.a.wrap((function _callee9$(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,r){setTimeout((function(){Object(p.b)(e,t.notification),n(!0)}),t.timeout)})));case 1:case"end":return n.stop()}}),_callee9)}))),function removeNotification(e,t){return d.apply(this,arguments)}),passwordRecovery:(_=_asyncToGenerator(o.a.mark((function _callee10(e,t){var n;return o.a.wrap((function _callee10$(r){for(;;)switch(r.prev=r.next){case 0:return n={content:"Sending password recovery email",showProgress:!0},r.prev=1,Object(p.a)(e,n),r.t0=Promise,r.t1=a.a.passwordRecovery(t.username),r.next=7,new Promise((function(e,t){return setTimeout((function(){return e()}),500)}));case 7:return r.t2=r.sent,r.t3=[r.t1,r.t2],r.next=11,r.t0.all.call(r.t0,r.t3);case 11:return r.sent[0],Object(p.b)(e,n),Object(p.a)(e,{content:"Password recovery email sent",color:"success"}),r.next=16,T(e);case 16:r.next=22;break;case 18:r.prev=18,r.t4=r.catch(1),Object(p.b)(e,n),Object(p.a)(e,{color:"error",content:"Incorrect username"});case 22:case"end":return r.stop()}}),_callee10,null,[[1,18]])}))),function passwordRecovery(e,t){return _.apply(this,arguments)}),resetPassword:(l=_asyncToGenerator(o.a.mark((function _callee11(e,t){var n;return o.a.wrap((function _callee11$(r){for(;;)switch(r.prev=r.next){case 0:return n={content:"Resetting password",showProgress:!0},r.prev=1,Object(p.a)(e,n),r.t0=Promise,r.t1=a.a.resetPassword(t.password,t.token),r.next=7,new Promise((function(e,t){return setTimeout((function(){return e()}),500)}));case 7:return r.t2=r.sent,r.t3=[r.t1,r.t2],r.next=11,r.t0.all.call(r.t0,r.t3);case 11:return r.sent[0],Object(p.b)(e,n),Object(p.a)(e,{content:"Password successfully reset",color:"success"}),r.next=16,T(e);case 16:r.next=22;break;case 18:r.prev=18,r.t4=r.catch(1),Object(p.b)(e,n),Object(p.a)(e,{color:"error",content:"Error resetting password"});case 22:case"end":return r.stop()}}),_callee11,null,[[1,18]])}))),function resetPassword(e,t){return l.apply(this,arguments)})},P=Object(f.getStoreAccessors)("").dispatch,x=P(k.actionCheckApiError),j=P(k.actionCheckLoggedIn),S=P(k.actionGetUserProfile),C=P(k.actionLogIn),T=P(k.actionLogOut),R=P(k.actionUserLogOut),G=P(k.actionRemoveLogIn),N=P(k.actionRouteLoggedIn),A=P(k.actionRouteLogOut),U=P(k.actionUpdateUserProfile),L=P(k.removeNotification),I=P(k.passwordRecovery),D=P(k.resetPassword)}});
//# sourceMappingURL=app.6376cb1d.js.map