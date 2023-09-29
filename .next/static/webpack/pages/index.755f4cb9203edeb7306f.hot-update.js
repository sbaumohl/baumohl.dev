"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FrontPage/FrontPage.tsx":
/*!********************************************!*\
  !*** ./components/FrontPage/FrontPage.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FrontPage; }
/* harmony export */ });
/* harmony import */ var _home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_resume__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/resume */ "./lib/resume.ts");
/* harmony import */ var _FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FrontPage.module.scss */ "./components/FrontPage/FrontPage.module.scss");
/* harmony import */ var _FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/simba/personal_repos/PersonalWebsite-Bootstrap/components/FrontPage/FrontPage.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var resumeLinks = [];

var _iterator = _createForOfIteratorHelper(_lib_resume__WEBPACK_IMPORTED_MODULE_7__.linksList),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var link = _step.value;
    resumeLinks.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
        href: link.link,
        type: "button",
        target: "_blank",
        rel: "noopener",
        className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().link),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
          icon: link.icon,
          size: "2x"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }, undefined)
      }, link.link, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, undefined));
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var resumeSkills = [];

var _iterator2 = _createForOfIteratorHelper(_lib_resume__WEBPACK_IMPORTED_MODULE_7__.skillList),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var skill = _step2.value;
    resumeSkills.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().skill),
      children: [skill.isDevicon ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("i", {
        className: skill.icon,
        style: {
          fontSize: "9rem"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
        icon: skill.icon,
        size: "6x",
        style: {
          fontSize: "9rem"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
        children: skill.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, undefined));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var resumeProjects = [];

var _iterator3 = _createForOfIteratorHelper(_lib_resume__WEBPACK_IMPORTED_MODULE_7__.projectList),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var project = _step3.value;
    resumeProjects.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h5", {
          style: {
            textAlign: "left"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("strong", {
            children: project.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          children: project.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          href: project.sourceUrl,
          className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faGithub,
            size: "2x"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, undefined), project.projectUrl !== undefined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          href: project.projectUrl,
          className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faArrowRight,
            size: "2x",
            style: {
              marginLeft: "10px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {}, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, undefined));
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

var FrontPage = /*#__PURE__*/function (_React$Component) {
  (0,_home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(FrontPage, _React$Component);

  var _super = _createSuper(FrontPage);

  function FrontPage() {
    (0,_home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, FrontPage);

    return _super.apply(this, arguments);
  }

  (0,_home_simba_personal_repos_PersonalWebsite_Bootstrap_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(FrontPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById("__next").classList.add("canvas");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.getElementById("__next").classList.remove("canvas");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().nameHeader),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headerChild),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
              children: "Samuel Baumohl"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h4", {
              children: "Hi there! I'm a software developer from Saint Louis, Missouri"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              "aria-label": "Site Links",
              className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().siteLinksGroup),
              children: resumeLinks
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().section),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {
            className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().line)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
            children: "Skills"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().skillParent),
            children: resumeSkills
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().section),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {
            className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().line)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().projects),
            children: resumeProjects
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }, this)]
      }, void 0, true);
    }
  }]);

  return FrontPage;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzU1ZjRjYjkyMDNlZGViNzMwNmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUSxXQUE4QixHQUFHLEVBQXZDOzsyQ0FDbUJKOzs7O0FBQW5CLHNEQUE4QjtBQUFBLFFBQW5CSyxJQUFtQjtBQUM1QkQsSUFBQUEsV0FBVyxDQUFDRSxJQUFaLGVBQ0U7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBRUQsSUFBSSxDQUFDQSxJQURiO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxjQUFNLEVBQUMsUUFIVDtBQUlFLFdBQUcsRUFBQyxVQUpOO0FBTUUsaUJBQVMsRUFBRUYsb0VBTmI7QUFBQSwrQkFRRSw4REFBQywyRUFBRDtBQUFpQixjQUFJLEVBQUVFLElBQUksQ0FBQ0UsSUFBNUI7QUFBa0MsY0FBSSxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRixTQUtPRixJQUFJLENBQUNBLElBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFjRDs7Ozs7OztBQUVELElBQU1HLFlBQStCLEdBQUcsRUFBeEM7OzRDQUNvQk47Ozs7QUFBcEIseURBQStCO0FBQUEsUUFBcEJPLEtBQW9CO0FBQzdCRCxJQUFBQSxZQUFZLENBQUNGLElBQWIsZUFDRTtBQUFLLGVBQVMsRUFBRUgscUVBQWhCO0FBQUEsaUJBQ0dNLEtBQUssQ0FBQ0MsU0FBTixnQkFDQztBQUFHLGlCQUFTLEVBQUVELEtBQUssQ0FBQ0YsSUFBcEI7QUFBb0MsYUFBSyxFQUFFO0FBQUVJLFVBQUFBLFFBQVEsRUFBRTtBQUFaO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZ0JBR0MsOERBQUMsMkVBQUQ7QUFDRSxZQUFJLEVBQUVGLEtB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O0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWVFO0FBQUssbUJBQVMsRUFBRUwsdUVBQWhCO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFQSxvRUFBVzZCO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUsscUJBQVMsRUFBRTdCLHdFQUFoQjtBQUFBLHNCQUFrQ1U7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQSxzQkFERjtBQXVCRDs7OztFQWpDb0NkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRnJvbnRQYWdlL0Zyb250UGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkRlZmluaXRpb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWNvbW1vbi10eXBlc1wiO1xuaW1wb3J0IHsgZmFHaXRodWIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbGlua3NMaXN0LCBwcm9qZWN0TGlzdCwgc2tpbGxMaXN0IH0gZnJvbSBcIi4uLy4uL2xpYi9yZXN1bWVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRnJvbnRQYWdlLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IHJlc3VtZUxpbmtzOiBSZWFjdC5SZWFjdE5vZGVbXSA9IFtdO1xuZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzTGlzdCkge1xuICByZXN1bWVMaW5rcy5wdXNoKFxuICAgIDxkaXY+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtsaW5rLmxpbmt9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgIGtleT17bGluay5saW5rfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW5rfVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2xpbmsuaWNvbn0gc2l6ZT1cIjJ4XCI+PC9Gb250QXdlc29tZUljb24+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IHJlc3VtZVNraWxsczogUmVhY3QuUmVhY3ROb2RlW10gPSBbXTtcbmZvciAoY29uc3Qgc2tpbGwgb2Ygc2tpbGxMaXN0KSB7XG4gIHJlc3VtZVNraWxscy5wdXNoKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2tpbGx9PlxuICAgICAge3NraWxsLmlzRGV2aWNvbiA/IChcbiAgICAgICAgPGkgY2xhc3NOYW1lPXtza2lsbC5pY29uIGFzIHN0cmluZ30gc3R5bGU9e3sgZm9udFNpemU6IFwiOXJlbVwiIH19PjwvaT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICBpY29uPXtza2lsbC5pY29uIGFzIEljb25EZWZpbml0aW9ufVxuICAgICAgICAgIHNpemU9XCI2eFwiXG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiOXJlbVwiIH19XG4gICAgICAgID48L0ZvbnRBd2Vzb21lSWNvbj5cbiAgICAgICl9XG5cbiAgICAgIDxoMz57c2tpbGwubmFtZX08L2gzPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCByZXN1bWVQcm9qZWN0czogUmVhY3QuUmVhY3ROb2RlW10gPSBbXTtcbmZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICByZXN1bWVQcm9qZWN0cy5wdXNoKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDUgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cbiAgICAgICAgICA8c3Ryb25nPntwcm9qZWN0LnRpdGxlfTwvc3Ryb25nPlxuICAgICAgICA8L2g1PlxuICAgICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxhIGhyZWY9e3Byb2plY3Quc291cmNlVXJsfSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifSBzaXplPVwiMnhcIj48L0ZvbnRBd2Vzb21lSWNvbj5cbiAgICAgICAgPC9hPlxuICAgICAgICB7cHJvamVjdC5wcm9qZWN0VXJsICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5wcm9qZWN0VXJsfSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgaWNvbj17ZmFBcnJvd1JpZ2h0fVxuICAgICAgICAgICAgICBzaXplPVwiMnhcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PjwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcm9udFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9fbmV4dFwiKSEuY2xhc3NMaXN0LmFkZChcImNhbnZhc1wiKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX19uZXh0XCIpIS5jbGFzc0xpc3QucmVtb3ZlKFwiY2FudmFzXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVIZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ2hpbGR9PlxuICAgICAgICAgICAgPGgxPlNhbXVlbCBCYXVtb2hsPC9oMT5cbiAgICAgICAgICAgIDxoND5IaSB0aGVyZSEgSSdtIGEgc29mdHdhcmUgZGV2ZWxvcGVyIGZyb20gU2FpbnQgTG91aXMsIE1pc3NvdXJpPC9oND5cbiAgICAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlNpdGUgTGlua3NcIiBjbGFzc05hbWU9e3N0eWxlcy5zaXRlTGlua3NHcm91cH0+XG4gICAgICAgICAgICAgIHtyZXN1bWVMaW5rc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0gLz5cbiAgICAgICAgICA8aDE+U2tpbGxzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsUGFyZW50fT57cmVzdW1lU2tpbGxzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0gLz5cbiAgICAgICAgICA8aDE+UHJvamVjdHM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdHN9PntyZXN1bWVQcm9qZWN0c308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmFHaXRodWIiLCJmYUFycm93UmlnaHQiLCJGb250QXdlc29tZUljb24iLCJSZWFjdCIsImxpbmtzTGlzdCIsInByb2plY3RMaXN0Iiwic2tpbGxMaXN0Iiwic3R5bGVzIiwicmVzdW1lTGlua3MiLCJsaW5rIiwicHVzaCIsImljb24iLCJyZXN1bWVTa2lsbHMiLCJza2lsbCIsImlzRGV2aWNvbiIsImZvbnRTaXplIiwibmFtZSIsInJlc3VtZVByb2plY3RzIiwicHJvamVjdCIsInRleHRBbGlnbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb3VyY2VVcmwiLCJwcm9qZWN0VXJsIiwidW5kZWZpbmVkIiwibWFyZ2luTGVmdCIsIkZyb250UGFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYW1lSGVhZGVyIiwiaGVhZGVyQ2hpbGQiLCJzaXRlTGlua3NHcm91cCIsInNlY3Rpb24iLCJsaW5lIiwic2tpbGxQYXJlbnQiLCJwcm9qZWN0cyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=