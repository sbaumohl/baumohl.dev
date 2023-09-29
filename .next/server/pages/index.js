(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/FrontPage/FrontPage.tsx":
/*!********************************************!*\
  !*** ./components/FrontPage/FrontPage.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FrontPage)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_resume__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/resume */ "./lib/resume.ts");
/* harmony import */ var _FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FrontPage.module.scss */ "./components/FrontPage/FrontPage.module.scss");
/* harmony import */ var _FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/simba/personal_repos/PersonalWebsite-Bootstrap/components/FrontPage/FrontPage.tsx";








const resumeLinks = [];

for (const link of _lib_resume__WEBPACK_IMPORTED_MODULE_4__.linksList) {
  resumeLinks.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
      href: link.link,
      type: "button",
      target: "_blank",
      rel: "noopener",
      className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().link),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
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

const resumeSkills = [];

for (const skill of _lib_resume__WEBPACK_IMPORTED_MODULE_4__.skillList) {
  resumeSkills.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().skill),
    children: [skill.isDevicon ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
      className: skill.icon,
      style: {
        fontSize: "9rem"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
      icon: skill.icon,
      size: "6x",
      style: {
        fontSize: "9rem"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
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

const resumeProjects = [];

for (const project of _lib_resume__WEBPACK_IMPORTED_MODULE_4__.projectList) {
  resumeProjects.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h5", {
        style: {
          textAlign: "left"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("strong", {
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        children: project.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        href: project.sourceUrl,
        className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().link),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGithub,
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
      }, undefined), project.projectUrl !== undefined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        href: project.projectUrl,
        className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().link),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowRight,
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
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, false)]
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

class FrontPage extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  componentDidMount() {
    document.getElementById("__next").classList.add("canvas");
  }

  componentWillUnmount() {
    document.getElementById("__next").classList.remove("canvas");
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().nameHeader),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headerChild),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            children: "Samuel Baumohl"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h4", {
            children: "Hi there! I'm a software developer from Saint Louis, Missouri."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            "aria-label": "Site Links",
            className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().siteLinksGroup),
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().section),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("hr", {
          className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().line)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: "Skills"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().skillParent),
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().section),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("hr", {
          className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().line)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().projects),
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

}

/***/ }),

/***/ "./lib/resume.ts":
/*!***********************!*\
  !*** ./lib/resume.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skillList": () => (/* binding */ skillList),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "linksList": () => (/* binding */ linksList)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);


const skillList = [{
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
const projectList = [{
  title: "MyMICDS.net",
  description: "An all-in-one platform for MICDS student life.",
  projectUrl: "https://mymicds.net",
  sourceUrl: "https://github.com/MyMICDS/"
}, {
  title: "BYO Style-Based GAN",
  description: "A simple implementation of StyleGAN using PyTorch.",
  sourceUrl: "https://github.com/sbaumohl/BYO-GAN"
}];
const linksList = [{
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
} // ,
// {
//   icon: faTwitter,
//   link: "",
//   tooltip: "@s_baumohl"
// }
];

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _components_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FrontPage/FrontPage */ "./components/FrontPage/FrontPage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/simba/personal_repos/PersonalWebsite-Bootstrap/pages/index.tsx";


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/FrontPage/FrontPage.module.scss":
/*!****************************************************!*\
  !*** ./components/FrontPage/FrontPage.module.scss ***!
  \****************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"nameHeader": "FrontPage_nameHeader__3gHnS",
	"headerChild": "FrontPage_headerChild__2BTdc",
	"siteLinksGroup": "FrontPage_siteLinksGroup__chYrC",
	"line": "FrontPage_line__sQp0L",
	"section": "FrontPage_section__1amXT",
	"skillParent": "FrontPage_skillParent__2lRSD",
	"skill": "FrontPage_skill__AnHI4",
	"faIcon": "FrontPage_faIcon__1FAOS",
	"projects": "FrontPage_projects__1iWEG",
	"link": "FrontPage_link__1FkJ1"
};


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUMsMkVBRFI7QUFFRTNDLEVBQUFBLElBQUksRUFBRSxxQ0FGUjtBQUdFOEMsRUFBQUEsT0FBTyxFQUFFO0FBSFgsQ0FqQmtDLENBc0JsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQmtDLENBQTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZQOztBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0UsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7Ozs7Ozs7Ozs7QUNSRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1iYXVtb2hsLWNvbS8uL2NvbXBvbmVudHMvRnJvbnRQYWdlL0Zyb250UGFnZS50c3giLCJ3ZWJwYWNrOi8vc2FtYmF1bW9obC1jb20vLi9saWIvcmVzdW1lLnRzIiwid2VicGFjazovL3NhbWJhdW1vaGwtY29tLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3NhbWJhdW1vaGwtY29tLy4vY29tcG9uZW50cy9Gcm9udFBhZ2UvRnJvbnRQYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NhbWJhdW1vaGwtY29tL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiIiwid2VicGFjazovL3NhbWJhdW1vaGwtY29tL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vc2FtYmF1bW9obC1jb20vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly9zYW1iYXVtb2hsLWNvbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2FtYmF1bW9obC1jb20vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uRGVmaW5pdGlvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtY29tbW9uLXR5cGVzXCI7XG5pbXBvcnQgeyBmYUdpdGh1YiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBsaW5rc0xpc3QsIHByb2plY3RMaXN0LCBza2lsbExpc3QgfSBmcm9tIFwiLi4vLi4vbGliL3Jlc3VtZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Gcm9udFBhZ2UubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgcmVzdW1lTGlua3M6IFJlYWN0LlJlYWN0Tm9kZVtdID0gW107XG5mb3IgKGNvbnN0IGxpbmsgb2YgbGlua3NMaXN0KSB7XG4gIHJlc3VtZUxpbmtzLnB1c2goXG4gICAgPGRpdj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e2xpbmsubGlua31cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAga2V5PXtsaW5rLmxpbmt9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17bGluay5pY29ufSBzaXplPVwiMnhcIj48L0ZvbnRBd2Vzb21lSWNvbj5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgcmVzdW1lU2tpbGxzOiBSZWFjdC5SZWFjdE5vZGVbXSA9IFtdO1xuZm9yIChjb25zdCBza2lsbCBvZiBza2lsbExpc3QpIHtcbiAgcmVzdW1lU2tpbGxzLnB1c2goXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za2lsbH0+XG4gICAgICB7c2tpbGwuaXNEZXZpY29uID8gKFxuICAgICAgICA8aSBjbGFzc05hbWU9e3NraWxsLmljb24gYXMgc3RyaW5nfSBzdHlsZT17eyBmb250U2l6ZTogXCI5cmVtXCIgfX0+PC9pPlxuICAgICAgKSA6IChcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgIGljb249e3NraWxsLmljb24gYXMgSWNvbkRlZmluaXRpb259XG4gICAgICAgICAgc2l6ZT1cIjZ4XCJcbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCI5cmVtXCIgfX1cbiAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxuICAgICAgKX1cblxuICAgICAgPGgzPntza2lsbC5uYW1lfTwvaDM+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IHJlc3VtZVByb2plY3RzOiBSZWFjdC5SZWFjdE5vZGVbXSA9IFtdO1xuZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gIHJlc3VtZVByb2plY3RzLnB1c2goXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoNSBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxuICAgICAgICAgIDxzdHJvbmc+e3Byb2plY3QudGl0bGV9PC9zdHJvbmc+XG4gICAgICAgIDwvaDU+XG4gICAgICAgIDxwPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGEgaHJlZj17cHJvamVjdC5zb3VyY2VVcmx9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9IHNpemU9XCIyeFwiPjwvRm9udEF3ZXNvbWVJY29uPlxuICAgICAgICA8L2E+XG4gICAgICAgIHtwcm9qZWN0LnByb2plY3RVcmwgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnByb2plY3RVcmx9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBpY29uPXtmYUFycm93UmlnaHR9XG4gICAgICAgICAgICAgIHNpemU9XCIyeFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICA+PC9Gb250QXdlc29tZUljb24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+PC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyb250UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX19uZXh0XCIpIS5jbGFzc0xpc3QuYWRkKFwiY2FudmFzXCIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfX25leHRcIikhLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW52YXNcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZUhlYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDaGlsZH0+XG4gICAgICAgICAgICA8aDE+U2FtdWVsIEJhdW1vaGw8L2gxPlxuICAgICAgICAgICAgPGg0PkhpIHRoZXJlISBJJ20gYSBzb2Z0d2FyZSBkZXZlbG9wZXIgZnJvbSBTYWludCBMb3VpcywgTWlzc291cmkuPC9oND5cbiAgICAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlNpdGUgTGlua3NcIiBjbGFzc05hbWU9e3N0eWxlcy5zaXRlTGlua3NHcm91cH0+XG4gICAgICAgICAgICAgIHtyZXN1bWVMaW5rc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0gLz5cbiAgICAgICAgICA8aDE+U2tpbGxzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsUGFyZW50fT57cmVzdW1lU2tpbGxzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0gLz5cbiAgICAgICAgICA8aDE+UHJvamVjdHM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdHN9PntyZXN1bWVQcm9qZWN0c308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBmYUh0bWw1LFxuICBmYUNzczNBbHQsXG4gIGZhSmF2YSxcbiAgZmFQeXRob24sXG4gIGZhSnMsXG4gIGZhQW5ndWxhcixcbiAgZmFOb2RlSnMsXG4gIGZhUmVhY3QsXG4gIGZhR2l0aHViLFxuICBmYUxpbmtlZGluLFxuICBmYUluc3RhZ3JhbSxcbiAgSWNvbkRlZmluaXRpb24sXG4gIGZhVHdpdHRlclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFLZXksIGZhRW52ZWxvcGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmludGVyZmFjZSBTa2lsbCB7XG4gIGljb246IEljb25EZWZpbml0aW9uIHwgc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzRGV2aWNvbj86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQcm9qZWN0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJvamVjdFVybD86IHN0cmluZztcbiAgc291cmNlVXJsPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ29udGFjdCB7XG4gIGljb246IEljb25EZWZpbml0aW9uO1xuICBsaW5rOiBzdHJpbmc7XG4gIHRvb2x0aXA6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHNraWxsTGlzdDogU2tpbGxbXSA9IFtcbiAge1xuICAgIGljb246IGZhSHRtbDUsXG4gICAgbmFtZTogXCJIVE1MXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmYUNzczNBbHQsXG4gICAgbmFtZTogXCJDU1NcIixcbiAgfSxcbiAge1xuICAgIGljb246IGZhSnMsXG4gICAgbmFtZTogXCJKYXZhc2NyaXB0XCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmYUphdmEsXG4gICAgbmFtZTogXCJKYXZhXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmYVB5dGhvbixcbiAgICBuYW1lOiBcIlB5dGhvblwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCJkZXZpY29uLWxpbnV4LXBsYWluXCIsXG4gICAgbmFtZTogXCJMaW51eFwiLFxuICAgIGlzRGV2aWNvbjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGljb246IGZhTm9kZUpzLFxuICAgIG5hbWU6IFwiTm9kZS5qc1wiLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFBbmd1bGFyLFxuICAgIG5hbWU6IFwiQW5ndWxhclwiLFxuICB9LFxuICB7IGljb246IGZhUmVhY3QsIG5hbWU6IFwiUmVhY3RcIiB9LFxuICB7XG4gICAgaWNvbjogXCJkZXZpY29uLWNwbHVzcGx1cy1wbGFpblwiLFxuICAgIG5hbWU6IFwiQysrXCIsXG4gICAgaXNEZXZpY29uOiB0cnVlLFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdExpc3Q6IFByb2plY3RbXSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIk15TUlDRFMubmV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW4gYWxsLWluLW9uZSBwbGF0Zm9ybSBmb3IgTUlDRFMgc3R1ZGVudCBsaWZlLlwiLFxuICAgIHByb2plY3RVcmw6IFwiaHR0cHM6Ly9teW1pY2RzLm5ldFwiLFxuICAgIHNvdXJjZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vTXlNSUNEUy9cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJZTyBTdHlsZS1CYXNlZCBHQU5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBTdHlsZUdBTiB1c2luZyBQeVRvcmNoLlwiLFxuICAgIHNvdXJjZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vc2JhdW1vaGwvQllPLUdBTlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzTGlzdDogQ29udGFjdFtdID0gW1xuICB7XG4gICAgaWNvbjogZmFHaXRodWIsXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vc2JhdW1vaGxcIixcbiAgICB0b29sdGlwOiBcInNiYXVtb2hsXCIsXG4gIH0sXG4gIHsgaWNvbjogZmFLZXksIGxpbms6IFwiL3BncC9rZXkudHh0XCIsIHRvb2x0aXA6IFwiUEdQIFB1YmxpYyBLZXlcIiB9LFxuICB7XG4gICAgaWNvbjogZmFFbnZlbG9wZSxcbiAgICBsaW5rOiBcIm1haWx0bzptYWlsQHNhbWJhdW1vaGwubWVcIixcbiAgICB0b29sdGlwOiBcIm1haWxAc2FtYmF1bW9obC5tZVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFMaW5rZWRpbixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYW0tYmF1bW9obDA5XCIsXG4gICAgdG9vbHRpcDogXCJMaW5rZWRJbiBQcm9maWxlXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmYUluc3RhZ3JhbSxcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2FtX2IyMzI3XCIsXG4gICAgdG9vbHRpcDogXCJAc2FtX2IyMzI3XCIsXG4gIH1cbiAgLy8gLFxuICAvLyB7XG4gIC8vICAgaWNvbjogZmFUd2l0dGVyLFxuICAvLyAgIGxpbms6IFwiXCIsXG4gIC8vICAgdG9vbHRpcDogXCJAc19iYXVtb2hsXCJcbiAgLy8gfVxuXTtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBGcm9udFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvRnJvbnRQYWdlL0Zyb250UGFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxGcm9udFBhZ2U+PC9Gcm9udFBhZ2U+XG4gICk7XG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYW1lSGVhZGVyXCI6IFwiRnJvbnRQYWdlX25hbWVIZWFkZXJfXzNnSG5TXCIsXG5cdFwiaGVhZGVyQ2hpbGRcIjogXCJGcm9udFBhZ2VfaGVhZGVyQ2hpbGRfXzJCVGRjXCIsXG5cdFwic2l0ZUxpbmtzR3JvdXBcIjogXCJGcm9udFBhZ2Vfc2l0ZUxpbmtzR3JvdXBfX2NoWXJDXCIsXG5cdFwibGluZVwiOiBcIkZyb250UGFnZV9saW5lX19zUXAwTFwiLFxuXHRcInNlY3Rpb25cIjogXCJGcm9udFBhZ2Vfc2VjdGlvbl9fMWFtWFRcIixcblx0XCJza2lsbFBhcmVudFwiOiBcIkZyb250UGFnZV9za2lsbFBhcmVudF9fMmxSU0RcIixcblx0XCJza2lsbFwiOiBcIkZyb250UGFnZV9za2lsbF9fQW5ISTRcIixcblx0XCJmYUljb25cIjogXCJGcm9udFBhZ2VfZmFJY29uX18xRkFPU1wiLFxuXHRcInByb2plY3RzXCI6IFwiRnJvbnRQYWdlX3Byb2plY3RzX18xaVdFR1wiLFxuXHRcImxpbmtcIjogXCJGcm9udFBhZ2VfbGlua19fMUZrSjFcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImZhR2l0aHViIiwiZmFBcnJvd1JpZ2h0IiwiRm9udEF3ZXNvbWVJY29uIiwiUmVhY3QiLCJsaW5rc0xpc3QiLCJwcm9qZWN0TGlzdCIsInNraWxsTGlzdCIsInN0eWxlcyIsInJlc3VtZUxpbmtzIiwibGluayIsInB1c2giLCJpY29uIiwicmVzdW1lU2tpbGxzIiwic2tpbGwiLCJpc0Rldmljb24iLCJmb250U2l6ZSIsIm5hbWUiLCJyZXN1bWVQcm9qZWN0cyIsInByb2plY3QiLCJ0ZXh0QWxpZ24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic291cmNlVXJsIiwicHJvamVjdFVybCIsInVuZGVmaW5lZCIsIm1hcmdpbkxlZnQiLCJGcm9udFBhZ2UiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZSIsInJlbmRlciIsIm5hbWVIZWFkZXIiLCJoZWFkZXJDaGlsZCIsInNpdGVMaW5rc0dyb3VwIiwic2VjdGlvbiIsImxpbmUiLCJza2lsbFBhcmVudCIsInByb2plY3RzIiwiZmFIdG1sNSIsImZhQ3NzM0FsdCIsImZhSmF2YSIsImZhUHl0aG9uIiwiZmFKcyIsImZhQW5ndWxhciIsImZhTm9kZUpzIiwiZmFSZWFjdCIsImZhTGlua2VkaW4iLCJmYUluc3RhZ3JhbSIsImZhS2V5IiwiZmFFbnZlbG9wZSIsInRvb2x0aXAiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==