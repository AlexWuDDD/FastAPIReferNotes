(window.webpackJsonp=window.webpackJsonp||[]).push([["main-profile"],{"239a":function(t,e,r){"use strict";r.r(e);var o=r("0a8e"),n=r("b2e6"),i=r("2963");function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(UserProfile,t);var e=function _createSuper(t){return function(){var e,r=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return _possibleConstructorReturn(this,e)}}(UserProfile);function UserProfile(){return _classCallCheck(this,UserProfile),e.apply(this,arguments)}return function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(UserProfile,[{key:"goToEdit",value:function goToEdit(){this.$router.push("/main/profile/edit")}},{key:"goToPassword",value:function goToPassword(){this.$router.push("/main/profile/password")}},{key:"userProfile",get:function get(){return Object(i.h)(this.$store)}}]),UserProfile}(n.b),a=s=Object(o.a)([n.a],s),l=r("e90a"),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-card",{staticClass:"ma-3 pa-3"},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticClass:"headline primary--text"},[t._v("User Profile")])]),r("v-card-text",[r("div",{staticClass:"my-4"},[r("div",{staticClass:"subheading secondary--text text--lighten-3"},[t._v("Full Name")]),t.userProfile&&t.userProfile.full_name?r("div",{staticClass:"title primary--text text--darken-2"},[t._v(t._s(t.userProfile.full_name))]):r("div",{staticClass:"title primary--text text--darken-2"},[t._v("-----")])]),r("div",{staticClass:"my-3"},[r("div",{staticClass:"subheading secondary--text text--lighten-3"},[t._v("Email")]),t.userProfile&&t.userProfile.email?r("div",{staticClass:"title primary--text text--darken-2"},[t._v(t._s(t.userProfile.email))]):r("div",{staticClass:"title primary--text text--darken-2"},[t._v("-----")])])]),r("v-card-actions",[r("v-btn",{attrs:{to:"/main/profile/edit"}},[t._v("Edit")]),r("v-btn",{attrs:{to:"/main/profile/password"}},[t._v("Change password")])],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);
//# sourceMappingURL=main-profile.2401cc9f.js.map