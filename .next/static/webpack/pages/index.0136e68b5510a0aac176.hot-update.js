"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/resume.ts":
/*!***********************!*\
  !*** ./lib/resume.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skillList": function() { return /* binding */ skillList; },
/* harmony export */   "projectList": function() { return /* binding */ projectList; },
/* harmony export */   "linksList": function() { return /* binding */ linksList; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var skillList = [{
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faHtml5,
  name: "HTML"
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCss3Alt,
  name: "CSS"
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faJs,
  name: "Javascript"
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faJava,
  name: "Java"
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPython,
  name: "Python"
}, {
  icon: "devicon-linux-plain",
  name: "Linux",
  isDevicon: true
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faNodeJs,
  name: "Node.js"
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAngular,
  name: "Angular"
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faReact,
  name: "React"
}, {
  icon: "devicon-cplusplus-plain",
  name: "C++",
  isDevicon: true
}];
var projectList = [{
  title: "MyMICDS.net",
  description: "An all-in-one platform for MICDS student life.",
  projectUrl: "https://mymicds.net",
  sourceUrl: "https://github.com/MyMICDS/"
}, {
  title: "BYO Style-Based GAN",
  description: "A simple implementation of StyleGAN using PyTorch.",
  sourceUrl: "https://github.com/sbaumohl/BYO-GAN"
}];
var linksList = [{
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGithub,
  link: "https://github.com/sbaumohl",
  tooltip: "sbaumohl"
}, {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faKey,
  link: "/pgp/key.txt",
  tooltip: "PGP Public Key"
}, {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEnvelope,
  link: "mailto:mail@sambaumohl.me",
  tooltip: "mail@sambaumohl.me"
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faLinkedin,
  link: "https://www.linkedin.com/in/sam-baumohl09",
  tooltip: "LinkedIn Profile"
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faInstagram,
  link: "https://www.instagram.com/sam_b2327",
  tooltip: "@sam_b2327"
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTwitter,
  link: "",
  tooltip: "@s_baumohl"
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDEzNmU2OGI1NTEwYTBhYWMxNzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWVBO0FBcUJPLElBQU1jLFNBQWtCLEdBQUcsQ0FDaEM7QUFDRUMsRUFBQUEsSUFBSSxFQUFFZix1RUFEUjtBQUVFZ0IsRUFBQUEsSUFBSSxFQUFFO0FBRlIsQ0FEZ0MsRUFLaEM7QUFDRUQsRUFBQUEsSUFBSSxFQUFFZCx5RUFEUjtBQUVFZSxFQUFBQSxJQUFJLEVBQUU7QUFGUixDQUxnQyxFQVNoQztBQUNFRCxFQUFBQSxJQUFJLEVBQUVYLG9FQURSO0FBRUVZLEVBQUFBLElBQUksRUFBRTtBQUZSLENBVGdDLEVBYWhDO0FBQ0VELEVBQUFBLElBQUksRUFBRWIsc0VBRFI7QUFFRWMsRUFBQUEsSUFBSSxFQUFFO0FBRlIsQ0FiZ0MsRUFpQmhDO0FBQ0VELEVBQUFBLElBQUksRUFBRVosd0VBRFI7QUFFRWEsRUFBQUEsSUFBSSxFQUFFO0FBRlIsQ0FqQmdDLEVBcUJoQztBQUNFRCxFQUFBQSxJQUFJLEVBQUUscUJBRFI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLE9BRlI7QUFHRUMsRUFBQUEsU0FBUyxFQUFFO0FBSGIsQ0FyQmdDLEVBMEJoQztBQUNFRixFQUFBQSxJQUFJLEVBQUVULHdFQURSO0FBRUVVLEVBQUFBLElBQUksRUFBRTtBQUZSLENBMUJnQyxFQThCaEM7QUFDRUQsRUFBQUEsSUFBSSxFQUFFVix5RUFEUjtBQUVFVyxFQUFBQSxJQUFJLEVBQUU7QUFGUixDQTlCZ0MsRUFrQ2hDO0FBQUVELEVBQUFBLElBQUksRUFBRVIsdUVBQVI7QUFBaUJTLEVBQUFBLElBQUksRUFBRTtBQUF2QixDQWxDZ0MsRUFtQ2hDO0FBQ0VELEVBQUFBLElBQUksRUFBRSx5QkFEUjtBQUVFQyxFQUFBQSxJQUFJLEVBQUUsS0FGUjtBQUdFQyxFQUFBQSxTQUFTLEVBQUU7QUFIYixDQW5DZ0MsQ0FBM0I7QUEwQ0EsSUFBTUMsV0FBc0IsR0FBRyxDQUNwQztBQUNFQyxFQUFBQSxLQUFLLEVBQUUsYUFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsZ0RBRmY7QUFHRUMsRUFBQUEsVUFBVSxFQUFFLHFCQUhkO0FBSUVDLEVBQUFBLFNBQVMsRUFBRTtBQUpiLENBRG9DLEVBT3BDO0FBQ0VILEVBQUFBLEtBQUssRUFBRSxxQkFEVDtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsb0RBRmY7QUFHRUUsRUFBQUEsU0FBUyxFQUFFO0FBSGIsQ0FQb0MsQ0FBL0I7QUFjQSxJQUFNQyxTQUFvQixHQUFHLENBQ2xDO0FBQ0VSLEVBQUFBLElBQUksRUFBRVAsd0VBRFI7QUFFRWdCLEVBQUFBLElBQUksRUFBRSw2QkFGUjtBQUdFQyxFQUFBQSxPQUFPLEVBQUU7QUFIWCxDQURrQyxFQU1sQztBQUFFVixFQUFBQSxJQUFJLEVBQUVILG9FQUFSO0FBQWVZLEVBQUFBLElBQUksRUFBRSxjQUFyQjtBQUFxQ0MsRUFBQUEsT0FBTyxFQUFFO0FBQTlDLENBTmtDLEVBT2xDO0FBQ0VWLEVBQUFBLElBQUksRUFBRUYseUVBRFI7QUFFRVcsRUFBQUEsSUFBSSxFQUFFLDJCQUZSO0FBR0VDLEVBQUFBLE9BQU8sRUFBRTtBQUhYLENBUGtDLEVBWWxDO0FBQ0VWLEVBQUFBLElBQUksRUFBRU4sMEVBRFI7QUFFRWUsRUFBQUEsSUFBSSxFQUFFLDJDQUZSO0FBR0VDLEVBQUFBLE9BQU8sRUFBRTtBQUhYLENBWmtDLEVBaUJsQztBQUNFVixFQUFBQSxJQUFJLEVBQUVMLDJFQURSO0FBRUVjLEVBQUFBLElBQUksRUFBRSxxQ0FGUjtBQUdFQyxFQUFBQSxPQUFPLEVBQUU7QUFIWCxDQWpCa0MsRUFzQmxDO0FBQ0VWLEVBQUFBLElBQUksRUFBRUoseUVBRFI7QUFFRWEsRUFBQUEsSUFBSSxFQUFFLEVBRlI7QUFHRUMsRUFBQUEsT0FBTyxFQUFFO0FBSFgsQ0F0QmtDLENBQTdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9yZXN1bWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZmFIdG1sNSxcbiAgZmFDc3MzQWx0LFxuICBmYUphdmEsXG4gIGZhUHl0aG9uLFxuICBmYUpzLFxuICBmYUFuZ3VsYXIsXG4gIGZhTm9kZUpzLFxuICBmYVJlYWN0LFxuICBmYUdpdGh1YixcbiAgZmFMaW5rZWRpbixcbiAgZmFJbnN0YWdyYW0sXG4gIEljb25EZWZpbml0aW9uLFxuICBmYVR3aXR0ZXJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhS2V5LCBmYUVudmVsb3BlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5pbnRlcmZhY2UgU2tpbGwge1xuICBpY29uOiBJY29uRGVmaW5pdGlvbiB8IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpc0Rldmljb24/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgUHJvamVjdCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByb2plY3RVcmw/OiBzdHJpbmc7XG4gIHNvdXJjZVVybD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbnRhY3Qge1xuICBpY29uOiBJY29uRGVmaW5pdGlvbjtcbiAgbGluazogc3RyaW5nO1xuICB0b29sdGlwOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBza2lsbExpc3Q6IFNraWxsW10gPSBbXG4gIHtcbiAgICBpY29uOiBmYUh0bWw1LFxuICAgIG5hbWU6IFwiSFRNTFwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFDc3MzQWx0LFxuICAgIG5hbWU6IFwiQ1NTXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmYUpzLFxuICAgIG5hbWU6IFwiSmF2YXNjcmlwdFwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFKYXZhLFxuICAgIG5hbWU6IFwiSmF2YVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFQeXRob24sXG4gICAgbmFtZTogXCJQeXRob25cIixcbiAgfSxcbiAge1xuICAgIGljb246IFwiZGV2aWNvbi1saW51eC1wbGFpblwiLFxuICAgIG5hbWU6IFwiTGludXhcIixcbiAgICBpc0Rldmljb246IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmYU5vZGVKcyxcbiAgICBuYW1lOiBcIk5vZGUuanNcIixcbiAgfSxcbiAge1xuICAgIGljb246IGZhQW5ndWxhcixcbiAgICBuYW1lOiBcIkFuZ3VsYXJcIixcbiAgfSxcbiAgeyBpY29uOiBmYVJlYWN0LCBuYW1lOiBcIlJlYWN0XCIgfSxcbiAge1xuICAgIGljb246IFwiZGV2aWNvbi1jcGx1c3BsdXMtcGxhaW5cIixcbiAgICBuYW1lOiBcIkMrK1wiLFxuICAgIGlzRGV2aWNvbjogdHJ1ZSxcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0OiBQcm9qZWN0W10gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJNeU1JQ0RTLm5ldFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIGFsbC1pbi1vbmUgcGxhdGZvcm0gZm9yIE1JQ0RTIHN0dWRlbnQgbGlmZS5cIixcbiAgICBwcm9qZWN0VXJsOiBcImh0dHBzOi8vbXltaWNkcy5uZXRcIixcbiAgICBzb3VyY2VVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL015TUlDRFMvXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCWU8gU3R5bGUtQmFzZWQgR0FOXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBzaW1wbGUgaW1wbGVtZW50YXRpb24gb2YgU3R5bGVHQU4gdXNpbmcgUHlUb3JjaC5cIixcbiAgICBzb3VyY2VVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NiYXVtb2hsL0JZTy1HQU5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBsaW5rc0xpc3Q6IENvbnRhY3RbXSA9IFtcbiAge1xuICAgIGljb246IGZhR2l0aHViLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NiYXVtb2hsXCIsXG4gICAgdG9vbHRpcDogXCJzYmF1bW9obFwiLFxuICB9LFxuICB7IGljb246IGZhS2V5LCBsaW5rOiBcIi9wZ3Ava2V5LnR4dFwiLCB0b29sdGlwOiBcIlBHUCBQdWJsaWMgS2V5XCIgfSxcbiAge1xuICAgIGljb246IGZhRW52ZWxvcGUsXG4gICAgbGluazogXCJtYWlsdG86bWFpbEBzYW1iYXVtb2hsLm1lXCIsXG4gICAgdG9vbHRpcDogXCJtYWlsQHNhbWJhdW1vaGwubWVcIixcbiAgfSxcbiAge1xuICAgIGljb246IGZhTGlua2VkaW4sXG4gICAgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FtLWJhdW1vaGwwOVwiLFxuICAgIHRvb2x0aXA6IFwiTGlua2VkSW4gUHJvZmlsZVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFJbnN0YWdyYW0sXG4gICAgbGluazogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NhbV9iMjMyN1wiLFxuICAgIHRvb2x0aXA6IFwiQHNhbV9iMjMyN1wiLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFUd2l0dGVyLFxuICAgIGxpbms6IFwiXCIsXG4gICAgdG9vbHRpcDogXCJAc19iYXVtb2hsXCJcbiAgfVxuXTtcbiJdLCJuYW1lcyI6WyJmYUh0bWw1IiwiZmFDc3MzQWx0IiwiZmFKYXZhIiwiZmFQeXRob24iLCJmYUpzIiwiZmFBbmd1bGFyIiwiZmFOb2RlSnMiLCJmYVJlYWN0IiwiZmFHaXRodWIiLCJmYUxpbmtlZGluIiwiZmFJbnN0YWdyYW0iLCJmYVR3aXR0ZXIiLCJmYUtleSIsImZhRW52ZWxvcGUiLCJza2lsbExpc3QiLCJpY29uIiwibmFtZSIsImlzRGV2aWNvbiIsInByb2plY3RMaXN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb2plY3RVcmwiLCJzb3VyY2VVcmwiLCJsaW5rc0xpc3QiLCJsaW5rIiwidG9vbHRpcCJdLCJzb3VyY2VSb290IjoiIn0=