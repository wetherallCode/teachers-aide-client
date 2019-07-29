(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "input.form-textbox {\n\theight: 250px;\n\tmin-height: 25px;\n}\n/* Logo color ideas: #004175,  #103e87, #var(--blue) */\n.App {\n\tbackground-color: var(--white);\n}\n.Header {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 4fr;\n\tbackground-color: var(--blue);\n\tmin-height: 5vh;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--white);\n}\n.SubHeader {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 4fr;\n\tgrid-template-rows: 1fr 5fr;\n\tbackground-color: var(--blue);\n\tmin-height: 5vh;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--white);\n}\n\n.button {\n\tbackground-color: var(--grey);\n\tborder: 0.01px solid black;\n\twidth: 100px;\n\theight: 50px;\n\tcolor: var(--blue);\n\ttext-decoration: none;\n\tfont-size: 75%;\n\tfont-weight: bolder;\n\tbox-shadow: 3px 3px 3px black;\n\ttext-shadow: 2px 2px 2px #888;\n}\n.blueButton {\n\tfont-size: 70%;\n\theight: 50px;\n\twidth: 30%;\n\ttext-decoration: none;\n\tcolor: var(--white);\n\tbackground-color: var(--blue);\n}\n.redButton {\n\tfont-size: 70%;\n\theight: 50px;\n\twidth: 30%;\n\ttext-decoration: none;\n\tcolor: var(--white);\n\tbackground-color: var(--red);\n}\n.whiteButton {\n\tfont-size: 70%;\n\theight: 50px;\n\twidth: 30%;\n\ttext-decoration: none;\n\tcolor: var(--blue);\n\tbackground-color: var(--white);\n}\n\n.Header a {\n\tcolor: var(--white);\n\tfont-size: 150%;\n\ttext-decoration: none;\n\ttext-shadow: '10px 10px 5px #888';\n}\n\n.class-room-desk-pair {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: flex-end;\n}\n\n.classroom-desks {\n\twidth: 40%;\n\theight: 70%;\n\tbackground-color: var(--blue);\n\tcolor: var(--white);\n\ttext-decoration: none;\n\tborder-radius: 5px;\n}\n\n.student-info-mutator-blue {\n\tbackground-color: var(--blue);\n\tcolor: var(--white);\n\twidth: 5rem;\n\theight: 3rem;\n\tmargin: 10px;\n\tfont-size: 200%;\n\tbox-shadow: 1px 1px 2px 1px var(--blue);\n\tborder-radius: 5px;\n}\n.student-info-mutator-red {\n\tbackground-color: var(--red);\n\tcolor: var(--white);\n\twidth: 5rem;\n\theight: 3rem;\n\tmargin: 10px;\n\tfont-size: 200%;\n\tbox-shadow: 1px 1px 2px 1px var(--blue);\n\tborder-radius: 5px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n\t\t'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tbackground-color: var(--white);\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n\n:root {\n\t--blue: #0e3c61;\n\t--grey: #c0c3c4;\n\t--darkGrey: #7d7e80;\n\t--red: #730000;\n\t--white: #fffdfa;\n}\n/* #8f1010 */\n/* #fffdfa */\n/* #fff7ed */\n/* #7d7e80 */\n/* #96a2b4 */\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _teacher_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-dashboard/dashboard */ "./src/teacher-dashboard/dashboard.js");
/* harmony import */ var _student_dashboard_StudentDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-dashboard/StudentDashboard */ "./src/student-dashboard/StudentDashboard.js");
/* harmony import */ var _website_WebSite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./website/WebSite */ "./src/website/WebSite.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/App.js";








const App = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: Home,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/dashboard",
    component: _teacher_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/students",
    component: _student_dashboard_StudentDashboard__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/website",
    component: _website_WebSite__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })));
}; //  #383b3d


const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
  className: "Header",
  style: {
    textShadow: '2px 2px 8px #474747',
    borderBottom: '3px solid var(--white)'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  style: {
    padding: '2%'
  },
  to: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "MrWetherall.org"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-end'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  style: {
    margin: '1%'
  },
  to: "/dashboard",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  style: {
    margin: '1%'
  },
  to: "/students",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Student")));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.ts");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/index.js";







const defaultState = {
  isEditStudentMode: false,
  showHiddenStudents: false,
  removeStudentScreen: false,
  gradeBookToggle: false
};
const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_3__["default"]({
  uri: "http://localhost:4001/graphql",
  credentials: 'include',
  clientState: {
    defaults: defaultState,
    resolvers: {}
  }
});
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
  client: client,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["register"]();

/***/ }),

/***/ "./src/serviceWorker.ts":
/*!******************************!*\
  !*** ./src/serviceWorker.ts ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/student-dashboard/StudentDashboard.js":
/*!***************************************************!*\
  !*** ./src/student-dashboard/StudentDashboard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/student-dashboard/StudentDashboard.js";



const StudentDashboard = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "Student Site");
};

/* harmony default export */ __webpack_exports__["default"] = (StudentDashboard);

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/ClassPeriodSelector.js":
/*!****************************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/ClassPeriodSelector.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");

var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/ClassPeriodSelector.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery getPeriodNames {\n\t\tperiodName: __type(name: \"periodName\") {\n\t\t\tenumValues {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const GET_PERIOD_NAMES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());

const ClassPeriodSelector = ({
  match
}) => {
  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PERIOD_NAMES),
        data = _useQuery.data,
        loading = _useQuery.loading,
        error = _useQuery.error;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Loading");
  if (error) console.log(error);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--grey)',
      height: '100vh',
      color: 'var(--white)',
      textShadow: '2px 2px 2px #888',
      textAlign: 'center',
      display: 'grid',
      gridTemplateRows: '1fr 7fr',
      borderBottom: '1px solid black',
      overflow: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: '0px',
      alignContent: 'center',
      justifyContent: 'flex-start',
      paddingTop: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Class Period")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      fontSize: '200%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ClassPeriodItems, {
    match: match,
    items: data.periodName.enumValues.map(period => period.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }))));
};

const ClassPeriodItems = ({
  items,
  match
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, items.map((period, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    key: period,
    to: "/dashboard/classroom/class-period-selector/".concat(period, "/").concat(Math.floor(Math.random() * 24 + 1)),
    style: {
      marginTop: '4%',
      fontSize: '120%',
      textDecoration: 'none',
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      width: '80%',
      height: '5rem',
      fontSize: '70%',
      textDecoration: 'none',
      color: 'var(--white)',
      backgroundColor: 'var(--blue)',
      boxShadow: '3px 3px 3px var(--darkgray)',
      overflow: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Period ", period))));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassPeriodSelector);

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/ClassRoom.js":
/*!******************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/ClassRoom.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _DeskSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeskSelector */ "./src/teacher-dashboard/class-tool-components/DeskSelector.js");
/* harmony import */ var _ClassRoomTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClassRoomTools */ "./src/teacher-dashboard/class-tool-components/ClassRoomTools.js");
/* harmony import */ var _StudentInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StudentInfo */ "./src/teacher-dashboard/class-tool-components/StudentInfo.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/ClassRoom.js";








const ClassRoom = ({
  match
}) => {
  const url = match.url;
  const periodName = match.params.periodName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--white)',
      display: 'grid',
      gridTemplateRows: '3fr 1fr',
      gridGap: '1px',
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeskSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    match: match,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClassRoomTools__WEBPACK_IMPORTED_MODULE_3__["default"], {
    period: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(url, "/:deskNumber"),
    render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StudentInfo__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, {
      periodName: periodName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassRoom);

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/ClassRoomTools.js":
/*!***********************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/ClassRoomTools.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _RandomDeskSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RandomDeskSelector */ "./src/teacher-dashboard/class-tool-components/RandomDeskSelector.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _ClassToolsDisplayBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ClassToolsDisplayBox */ "./src/teacher-dashboard/class-tool-components/ClassToolsDisplayBox.js");


var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/ClassRoomTools.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tquery findEligibleStudents($period: periodName!) {\n\t\tclassRoster(period: $period) {\n\t\t\tdesk\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const FIND_ELIGIBLE_STUDENTS_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

const ClassRoomTools = ({
  period
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        _useState2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        selectorSwitch = _useState2[0],
        setSelectorSwitch = _useState2[1];

  if (selectorSwitch > 2) setSelectorSwitch(0);
  if (selectorSwitch < 0) setSelectorSwitch(2);

  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(FIND_ELIGIBLE_STUDENTS_QUERY, {
    variables: {
      period: period
    }
  }),
        data = _useQuery.data,
        loading = _useQuery.loading,
        error = _useQuery.error;

  if (loading) return null;
  if (error) console.log(error);
  const classRoster = data.classRoster;
  const eligibleStudentList = [];
  classRoster.forEach(({
    desk
  }) => {
    eligibleStudentList.unshift(desk);
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--blue)',
      display: 'grid',
      gridTemplateColumns: '1fr 4fr 1fr'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: 'var(--blue)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, eligibleStudentList.length > 2 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RandomDeskSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    eligibleStudentList: eligibleStudentList,
    period: period,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '1fr 3fr'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      textDecoration: 'none'
    },
    to: "/dashboard/classroom/class-period-selector",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: {
      backgroundColor: 'var(--white)',
      color: 'var(--blue)',
      marginTop: '3px',
      height: '2rem',
      paddingLeft: '30%',
      paddingRight: '30%',
      fontSize: '150%',
      border: '1px solid black',
      boxShadow: '1px 1px 1px black',
      textShadow: '3px 3px 3px var(--grey)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Period ", period)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ClassToolsDisplayBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selector: selectorSwitch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '(1fr 1fr)',
      justifyContent: 'center',
      backgroundColor: 'var(--blue)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: {
      height: '5rem',
      width: '8rem',
      margin: '2%',
      fontSize: '130%',
      color: 'var(--blue)',
      backgroundColor: 'var(--white)',
      borderRadius: '5px'
    },
    onClick: () => setSelectorSwitch(selectorSwitch + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Up"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: {
      height: '5rem',
      width: '8rem',
      margin: '2%',
      fontSize: '130%',
      color: 'var(--blue)',
      backgroundColor: 'var(--white)',
      borderRadius: '5px'
    },
    onClick: () => setSelectorSwitch(selectorSwitch - 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Down")));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassRoomTools);

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/ClassToolsDisplayBox.js":
/*!*****************************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/ClassToolsDisplayBox.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_compound_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-compound-timer */ "./node_modules/react-compound-timer/build/index.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/ClassToolsDisplayBox.js";



const ClassToolsDisplayBox = ({
  selector
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, selector === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "whiteButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "whiteButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "whiteButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 'auto',
      backgroundColor: 'var(--white)',
      width: '90%',
      overflow: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "button")) : selector === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    initialTime: 0,
    startImmediately: false,
    style: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, ({
    start,
    resume,
    pause,
    stop,
    reset
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        fontSize: '400%',
        height: '4rem',
        backgroundColor: 'var(-white)',
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_1__["default"].Minutes, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }), ":", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_1__["default"].Seconds, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: '3.5%',
        marginBottom: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "whiteButton",
      style: {
        width: '15%',
        height: '2rem',
        fontSize: '120%'
      },
      onClick: start,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "whiteButton",
      style: {
        width: '15%',
        height: '2rem',
        fontSize: '120%'
      },
      onClick: pause,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, "Pause"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "whiteButton",
      style: {
        width: '15%',
        height: '2rem',
        fontSize: '120%'
      },
      onClick: resume,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, "Resume"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "whiteButton",
      style: {
        width: '15%',
        height: '2rem',
        fontSize: '120%'
      },
      onClick: stop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, "Stop"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "whiteButton",
      style: {
        width: '15%',
        height: '2rem',
        fontSize: '120%'
      },
      onClick: reset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, "Reset")));
  }) : selector === 2 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "whiteButton",
    style: {
      backgroundColor: 'var(--grey)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "whiteButton",
    style: {
      backgroundColor: 'var(--grey)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "whiteButton",
    style: {
      backgroundColor: 'var(--grey)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 'auto',
      backgroundColor: 'var(--white)',
      width: '90%',
      overflow: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "button")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "whiteButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "whiteButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "whiteButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 'auto',
      backgroundColor: 'var(--white)',
      width: '90%',
      overflow: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "button")));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassToolsDisplayBox);

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/Classes.js":
/*!****************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/Classes.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ClassPeriodSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClassPeriodSelector */ "./src/teacher-dashboard/class-tool-components/ClassPeriodSelector.js");
/* harmony import */ var _ClassRoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClassRoom */ "./src/teacher-dashboard/class-tool-components/ClassRoom.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/Classes.js";





const Classes = ({
  match
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "".concat(match.url, "/class-period-selector"),
    component: _ClassPeriodSelector__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      gridGap: '1px',
      backgroundColor: 'var(--white)',
      color: 'var(--white)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(match.url, "/class-period-selector/:periodName"),
    component: _ClassRoom__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Classes);

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/Desk.js":
/*!*************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/Desk.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");

var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/Desk.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery FindStudent($period: periodName!, $desk: Int!) {\n\t\tfindStudentByPeriodAndDesk(period: $period, desk: $desk) {\n\t\t\t_id\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tresponsibilityPoints\n\t\t\tisHiddenFromRoster\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const FIND_STUDENT_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());

const Desk = ({
  match,
  deskNumber,
  periodName
}) => {
  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(FIND_STUDENT_QUERY, {
    variables: {
      period: periodName,
      desk: deskNumber
    }
  }),
        data = _useQuery.data,
        loading = _useQuery.loading,
        error = _useQuery.error;

  if (loading) return null;
  if (error) console.log(error);
  const url = match.url;
  const findStudentByPeriodAndDesk = data.findStudentByPeriodAndDesk;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, findStudentByPeriodAndDesk && !findStudentByPeriodAndDesk.isHiddenFromRoster ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "classroom-desks",
    to: "".concat(url, "/").concat(deskNumber),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      width: '100%',
      height: '100%',
      fontSize: '150%',
      textDecoration: 'none',
      backgroundColor: 'var(--blue)',
      color: 'var(--white)',
      borderRadius: '5px',
      boxShadow: '1x 1px 1px var(--darkgrey)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, findStudentByPeriodAndDesk.firstName)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "classroom-desks",
    to: "".concat(url),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      width: '100%',
      height: '100%',
      textDecoration: 'none',
      backgroundColor: 'var(--darkGrey)',
      color: 'var(--white)',
      boxShadow: '1x 1px 1px var(--darkgrey)',
      borderRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Desk);

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/DeskSelector.js":
/*!*********************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/DeskSelector.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Desk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Desk */ "./src/teacher-dashboard/class-tool-components/Desk.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/DeskSelector.js";
 // import { Route, Link } from 'react-router-dom'



const DeskSelector = ({
  match,
  periodName
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--white)',
      display: 'grid',
      gridGap: '1px',
      gridTemplateRows: '1fr 1fr 1fr 1fr',
      gridTemplateColumns: '1fr 1fr 1fr',
      paddingBottom: '4%',
      border: '1px solid var(--blue)' // paddingTop: '2%',

    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 1,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 2,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 3,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 4,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 5,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 6,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 7,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 8,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 9,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 10,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 11,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 12,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 13,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 14,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 15,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 16,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 17,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 18,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 19,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 20,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 21,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 22,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "class-room-desk-pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 23,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Desk__WEBPACK_IMPORTED_MODULE_1__["default"], {
    match: match,
    deskNumber: 24,
    periodName: periodName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DeskSelector);

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/RandomDeskSelector.js":
/*!***************************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/RandomDeskSelector.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/RandomDeskSelector.js";


 //needs an array of all available desks to choose from
//needs a array of already selected students (10-15) to keep from having to many repeats
//needs to display the selected student in the studentInfo

const calledOnStudents = [];

const RandomDeskSelector = ({
  eligibleStudentList,
  period
}) => {
  const calledOnStudentListSize = Math.ceil(eligibleStudentList.length * 0.4);

  const randomizer = () => {
    const student = Math.floor(Math.random() * 24 + 1);

    if (eligibleStudentList.includes(student)) {
      if (!calledOnStudents.includes(student)) {
        calledOnStudents.unshift(student);

        if (calledOnStudents.length > calledOnStudentListSize) {
          calledOnStudents.pop(student);
        }

        return student;
      } else return randomizer();
    } else return randomizer();
  };

  let rando = randomizer();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RandomDeskSelectorDisplay, {
    student: rando,
    period: period,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  });
};

const RandomDeskSelectorDisplay = ({
  period,
  student
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/dashboard/classroom/class-period-selector/".concat(period, "/").concat(student),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      fontSize: '130%',
      height: '10rem',
      width: '8rem',
      textDecoration: 'none',
      color: 'var(--blue)',
      backgroundColor: 'var(--white)',
      borderRadius: '5px',
      boxShadow: '1px 1px 1px black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Random Student Generator"));
};

/* harmony default export */ __webpack_exports__["default"] = (RandomDeskSelector);

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/StudentInfo.js":
/*!********************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/StudentInfo.js ***!
  \********************************************************************/
/*! exports provided: FIND_STUDENT_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_STUDENT_QUERY", function() { return FIND_STUDENT_QUERY; });
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _StudentInfoDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StudentInfoDisplay */ "./src/teacher-dashboard/class-tool-components/StudentInfoDisplay.js");
/* harmony import */ var _StudentInfoMutator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StudentInfoMutator */ "./src/teacher-dashboard/class-tool-components/StudentInfoMutator.js");

var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/StudentInfo.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery FindStudent($period: periodName!, $desk: Int!) {\n\t\tfindStudentByPeriodAndDesk(period: $period, desk: $desk) {\n\t\t\t_id\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tresponsibilityPoints\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





 // import { Query } from 'react-apollo'

const FIND_STUDENT_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

const StudentInfo = ({
  match,
  periodName
}) => {
  const deskNumber = match.params.deskNumber;
  const numberizedDeskNumber = parseInt(deskNumber, 10);

  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(FIND_STUDENT_QUERY, {
    variables: {
      period: periodName,
      desk: numberizedDeskNumber
    }
  }),
        data = _useQuery.data,
        loading = _useQuery.loading,
        error = _useQuery.error;

  if (loading) return null;
  if (error) console.log(error);
  const findStudentByPeriodAndDesk = data.findStudentByPeriodAndDesk;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, findStudentByPeriodAndDesk ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '2fr 3fr',
      gridGap: '2px',
      backgroundColor: 'var(--white)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StudentInfoDisplay__WEBPACK_IMPORTED_MODULE_4__["default"], {
    student: findStudentByPeriodAndDesk,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StudentInfoMutator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    match: match,
    student: findStudentByPeriodAndDesk,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      textDecoration: 'underline',
      textAlign: 'center',
      textShadow: '2px 2px 2x black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "No Student"));
};

/* harmony default export */ __webpack_exports__["default"] = (StudentInfo); // {

/* <Query
			query={FIND_STUDENT_QUERY}
			variables={{ period: periodName, desk: numberizedDeskNumber }}>
			{({ loading, error, data, refetching }) => {
				if (loading && !refetching) return <h1>Loading</h1>
				if (error) return <h2>{`Error: ${error}`}</h2>
				const { firstName, lastName, responsibilityPoints } = data.findStudentByPeriodAndDesk
				return (
					<div>
						{data ? (
							<div>
								<h3>First Name: {firstName}</h3>
								<h3>Last Name: {lastName}</h3>
								<h3>Points: {responsibilityPoints}</h3>
							</div>
						) : (
							<h3>No one sits here</h3>
						)}
					</div>
			}}
		</Query> */
// }

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/StudentInfoDisplay.js":
/*!***************************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/StudentInfoDisplay.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/StudentInfoDisplay.js";



const StudentInfoDisplay = ({
  student
}) => {
  const firstName = student.firstName,
        lastName = student.lastName,
        responsibilityPoints = student.responsibilityPoints,
        _id = student._id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: '2%',
      backgroundColor: 'var(--blue)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, student ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, firstName + ' ' + lastName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Points: ", responsibilityPoints), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/dashboard/roster-profile/student/".concat(_id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      fontSize: '130%',
      borderRadius: '5px',
      backgroundColor: 'var(--white)',
      height: '3rem',
      width: '7rem',
      boxShadow: '1px 1px 1px black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Info"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "No Student")));
};

/* harmony default export */ __webpack_exports__["default"] = (StudentInfoDisplay);

/***/ }),

/***/ "./src/teacher-dashboard/class-tool-components/StudentInfoMutator.js":
/*!***************************************************************************!*\
  !*** ./src/teacher-dashboard/class-tool-components/StudentInfoMutator.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");


var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/class-tool-components/StudentInfoMutator.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tmutation updateResponsibilityPoints($_id: ID!, $responsibilityPoints: Int!) {\n\t\tupdateResponsibilityPoints(_id: $_id, responsibilityPoints: $responsibilityPoints) {\n\t\t\tresponsibilityPoints\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const UPDATE_RESPONSIBILTY_POINTS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

const StudentInfoMutator = ({
  match,
  periodName,
  student
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        BehaviorPointsToggle = _useState2[0],
        setBehaviorPointsToggle = _useState2[1];

  const _id = student._id;

  const _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(UPDATE_RESPONSIBILTY_POINTS, {
    refetchQueries: ['FindStudent']
  }),
        _useMutation2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
        updateResponsibilityPoints = _useMutation2[0];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--grey)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlign: 'center',
      overflow: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: {
      textDecoration: 'underline',
      width: '70%',
      height: '3rem',
      marginTop: '25px',
      backgroundColor: 'var(--blue)',
      color: 'var(--white)',
      fontSize: '150%',
      fontWeight: 'bolder',
      boxShadow: '1px 1px 2px 1px var(--blue)',
      borderRadius: '5px'
    },
    onClick: () => {
      setBehaviorPointsToggle(!BehaviorPointsToggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Behavior Points"), BehaviorPointsToggle && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "student-info-mutator-blue",
    onClick: () => {
      updateResponsibilityPoints({
        variables: {
          _id: _id,
          responsibilityPoints: 1
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "+1"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "student-info-mutator-blue",
    onClick: () => {
      updateResponsibilityPoints({
        variables: {
          _id: _id,
          responsibilityPoints: 2
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "+2"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "student-info-mutator-red",
    onClick: () => {
      updateResponsibilityPoints({
        variables: {
          _id: _id,
          responsibilityPoints: -1
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "-1"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "student-info-mutator-red",
    onClick: () => {
      updateResponsibilityPoints({
        variables: {
          _id: _id,
          responsibilityPoints: -2
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "-2")));
};

/* harmony default export */ __webpack_exports__["default"] = (StudentInfoMutator);

/***/ }),

/***/ "./src/teacher-dashboard/dashboard.js":
/*!********************************************!*\
  !*** ./src/teacher-dashboard/dashboard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _roster_components_rosterNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roster-components/rosterNavigation */ "./src/teacher-dashboard/roster-components/rosterNavigation.js");
/* harmony import */ var _roster_components_rosterView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roster-components/rosterView */ "./src/teacher-dashboard/roster-components/rosterView.js");
/* harmony import */ var _roster_components_AllStudentRoster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roster-components/AllStudentRoster */ "./src/teacher-dashboard/roster-components/AllStudentRoster.js");
/* harmony import */ var _roster_components_Student__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roster-components/Student */ "./src/teacher-dashboard/roster-components/Student.js");
/* harmony import */ var _roster_components_StudentAdder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roster-components/StudentAdder */ "./src/teacher-dashboard/roster-components/StudentAdder.js");
/* harmony import */ var _class_tool_components_Classes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./class-tool-components/Classes */ "./src/teacher-dashboard/class-tool-components/Classes.js");
/* harmony import */ var _school_day_SchoolDay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./school-day/SchoolDay */ "./src/teacher-dashboard/school-day/SchoolDay.js");
/* harmony import */ var _lesson_planner_LessonPlanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lesson-planner/LessonPlanner */ "./src/teacher-dashboard/lesson-planner/LessonPlanner.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/dashboard.js";









 // import * as ApolloTypes from './__generated__/getAllStudents'

const DashBoardNavigation = ({
  match
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "Header",
    style: {
      borderBottom: '3px solid var(--white)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    style: {
      padding: '2%'
    },
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "MrWetherall.org"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'flex-end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    style: {
      margin: '1%'
    },
    to: "".concat(match.url, "/roster-view"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Rosters"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    style: {
      margin: '1%'
    },
    to: "".concat(match.url, "/classroom/class-period-selector"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Class"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    style: {
      margin: '1%'
    },
    to: "".concat(match.url, "/lesson-planner/"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Lesson Planner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    style: {
      margin: '1%'
    },
    to: "".concat(match.url, "/school-day"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "School Day"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "test",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 4fr'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(match.path, "/roster-view/"),
    component: _roster_components_rosterNavigation__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(match.path, "/roster-view/:periodName"),
    component: _roster_components_rosterView__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/dashboard/allStudent",
    component: _roster_components_AllStudentRoster__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/dashboard/roster-profile/student/:studentInfo",
    component: _roster_components_Student__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/dashboard/rosters/addNewStudent",
    component: _roster_components_StudentAdder__WEBPACK_IMPORTED_MODULE_6__["StudentInfoLoader"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(match.path, "/classroom/"),
    component: _class_tool_components_Classes__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(match.path, "/lesson-planner/"),
    component: _lesson_planner_LessonPlanner__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(match.path, "/school-day"),
    component: _school_day_SchoolDay__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DashBoardNavigation);

/***/ }),

/***/ "./src/teacher-dashboard/lesson-planner/AssignmentCreator.js":
/*!*******************************************************************!*\
  !*** ./src/teacher-dashboard/lesson-planner/AssignmentCreator.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/lesson-planner/AssignmentCreator.js";



const AssignmentCreator = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Assignment Creator"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AssignmentCreator);

/***/ }),

/***/ "./src/teacher-dashboard/lesson-planner/LessonCreator.js":
/*!***************************************************************!*\
  !*** ./src/teacher-dashboard/lesson-planner/LessonCreator.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");



var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/lesson-planner/LessonCreator.js";

function _templateObject6() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tquery getWorkDueTypeAssignemtnTypeEnumNames {\n\t\tAssignmentType: __type(name: \"AssignmentType\") {\n\t\t\tenumValues {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tquery getPartsOfSpeechEnumNames {\n\t\tpartsOfSpeechEnum: __type(name: \"partsOfSpeechEnum\") {\n\t\t\tenumValues {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tquery getSocraticQuestionsTypeEnumNames {\n\t\tsocraticQuestionsTypeEnum: __type(name: \"socraticQuestionsTypeEnum\") {\n\t\t\tenumValues {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tquery getmajorTextStructureEnumNames {\n\t\tmajorTextStructureEnum: __type(name: \"majorTextStructureEnum\") {\n\t\t\tenumValues {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tquery essentialQuestionTypeEnum {\n\t\tessentialQuestionTypeEnum: __type(name: \"essentialQuestionTypeEnum\") {\n\t\t\tenumValues {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tmutation createLesson($input: CreateLessonInput!) {\n\t\tcreateLesson(input: $input) {\n\t\t\t_id\n\t\t\tlessonName\n\t\t\tessentialQuestion {\n\t\t\t\ttype\n\t\t\t\ttextStructure\n\t\t\t\tquestion\n\t\t\t}\n\t\t\twarmup\n\t\t\tsocraticQuestions {\n\t\t\t\ttype\n\t\t\t\tquestion\n\t\t\t}\n\t\t\tvocabWords {\n\t\t\t\tword\n\t\t\t\tpartOfSpeech\n\t\t\t\tdefinition\n\t\t\t}\n\t\t\tworkDue {\n\t\t\t\tname\n\t\t\t\ttype\n\t\t\t\tdueDate\n\t\t\t}\n\t\t\treadings {\n\t\t\t\tpages\n\t\t\t\tsections\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const LESSON_CREATOR_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());
const ESSENTIAL_QUESTION_TYPE_ENUMS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject2());
const ESSENTIAL_QUESTION_TEXT_STRUCTURE_ENUMS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject3());
const SOCRATIC_QUESTION_TEXT_STRUCTURE_ENUMS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject4());
const PARTS_OF_SPEECH_ENUMS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject5());
const WORK_DUE_TYPE_ASSIGNMENT_TYPE_ENUMS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject6());

const AssignmentTypeEnumNames = () => {
  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(WORK_DUE_TYPE_ASSIGNMENT_TYPE_ENUMS),
        data = _useQuery.data,
        loading = _useQuery.loading;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Loading");
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PartsOfSPeechEnumNames, {
    assignmentTypeEnumNames: data.AssignmentType.enumValues.map(assignmentType => assignmentType.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  });
};

const PartsOfSPeechEnumNames = assignmentTypeEnumNames => {
  const _useQuery2 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(PARTS_OF_SPEECH_ENUMS),
        data = _useQuery2.data,
        loading = _useQuery2.loading;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Loading");
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SocraticQuestionsTypeEnumNames, {
    partsOfSpeechEnum: data.partsOfSpeechEnum.enumValues.map(partOfSpeechEnum => partOfSpeechEnum.name),
    assignmentTypeEnumNames: assignmentTypeEnumNames,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  });
};

const SocraticQuestionsTypeEnumNames = ({
  partsOfSpeechEnum,
  assignmentTypeEnumNames
}) => {
  const _useQuery3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(SOCRATIC_QUESTION_TEXT_STRUCTURE_ENUMS),
        data = _useQuery3.data,
        loading = _useQuery3.loading;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "Loading");
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(EssentialQuestionTextStructureEnumTypes, {
    socraticQuestionsTypeEnumNames: data.socraticQuestionsTypeEnum.enumValues.map(socraticQuestionType => socraticQuestionType.name),
    partsOfSpeechEnum: partsOfSpeechEnum,
    assignmentTypeEnumNames: assignmentTypeEnumNames,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  });
};

const EssentialQuestionTextStructureEnumTypes = ({
  socraticQuestionsTypeEnumNames,
  partsOfSpeechEnum,
  assignmentTypeEnumNames
}) => {
  const _useQuery4 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(ESSENTIAL_QUESTION_TEXT_STRUCTURE_ENUMS),
        data = _useQuery4.data,
        loading = _useQuery4.loading;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "Loading");
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(EssentialQuestionTypeEnumTypes, {
    essentialQuestionTextStructures: data.majorTextStructureEnum.enumValues.map(questionTextStructure => questionTextStructure.name),
    socraticQuestionsTypeEnumNames: socraticQuestionsTypeEnumNames,
    partsOfSpeechEnum: partsOfSpeechEnum,
    assignmentTypeEnumNames: assignmentTypeEnumNames,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  });
};

const EssentialQuestionTypeEnumTypes = ({
  essentialQuestionTextStructures,
  socraticQuestionsTypeEnumNames,
  partsOfSpeechEnum,
  assignmentTypeEnumNames
}) => {
  const _useQuery5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(ESSENTIAL_QUESTION_TYPE_ENUMS),
        data = _useQuery5.data,
        loading = _useQuery5.loading;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "Loading");
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LessonCreatorForm, {
    essentialQuestionTypes: data.essentialQuestionTypeEnum.enumValues.map(questionType => questionType.name),
    essentialQuestionTextStructures: essentialQuestionTextStructures,
    socraticQuestionsTypeEnumNames: socraticQuestionsTypeEnumNames,
    partsOfSpeechEnum: partsOfSpeechEnum,
    assignmentTypeEnumNames: assignmentTypeEnumNames,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  });
};

const LessonCreatorForm = ({
  essentialQuestionTypes,
  essentialQuestionTextStructures,
  socraticQuestionsTypeEnumNames,
  partsOfSpeechEnum,
  assignmentTypeEnumNames
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
        _useState2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        lessonName = _useState2[0],
        setLessonName = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
        _useState4 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        warmUp = _useState4[0],
        setWarmUp = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    type: essentialQuestionTypes[0],
    textStructure: essentialQuestionTextStructures[0],
    question: ''
  }),
        _useState6 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        essentialQuestion = _useState6[0],
        setEssentialQuestion = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    type: socraticQuestionsTypeEnumNames[0],
    question: ''
  }),
        _useState8 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
        socraticQuestions = _useState8[0],
        setSocraticQuestions = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
        _useState10 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
        socraticQuestionsList = _useState10[0],
        setSocraticQuestionsList = _useState10[1];

  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    word: '',
    partOfSpeech: partsOfSpeechEnum[0],
    definition: ''
  }),
        _useState12 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
        vocabWord = _useState12[0],
        setVocabWord = _useState12[1];

  const _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
        _useState14 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
        vocabWordList = _useState14[0],
        setVocabWordList = _useState14[1];

  const _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    pages: '',
    sections: ''
  }),
        _useState16 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
        readings = _useState16[0],
        setReadings = _useState16[1];

  const _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: '',
    type: assignmentTypeEnumNames.assignmentTypeEnumNames[0],
    dueDate: 'Wednesday'
  }),
        _useState18 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
        workDue = _useState18[0],
        setWorkDue = _useState18[1];

  const _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
        _useState20 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
        workDueList = _useState20[0],
        setWorkDueList = _useState20[1];

  const _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(LESSON_CREATOR_MUTATION, {
    variables: {
      input: {
        lessonName: lessonName,
        essentialQuestion: essentialQuestion,
        socraticQuestions: socraticQuestionsList,
        readings: readings,
        vocabWords: vocabWordList,
        warmup: warmUp,
        workDue: workDueList
      }
    }
  }),
        _useMutation2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
        createLesson = _useMutation2[0];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: e => {
      console.log('submitted');
      createLesson();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    style: {
      backgroundColor: 'purple',
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, "Lesson Creator"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundColor: 'blue'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }, "Name: "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "lessonName",
    placeholder: "Lesson Name",
    value: lessonName,
    onChange: e => setLessonName(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundColor: 'green'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, "Warm Up"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "warmup",
    placeholder: "Warm Up Activity",
    value: warmUp,
    onChange: e => setWarmUp(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundColor: 'yellow',
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }, "Readings"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "pages",
    placeholder: "Pages",
    value: readings.pages,
    onChange: e => setReadings(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, readings, {
      pages: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "sections",
    placeholder: "Sections",
    value: readings.sections,
    onChange: e => setReadings(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, readings, {
      sections: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundColor: 'orange'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, "Essential Question"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    onChange: e => setEssentialQuestion(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, essentialQuestion, {
      type: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, essentialQuestionTypes.map(type => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: type,
    value: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: undefined
  }, type))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }, "Text Structure"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    onChange: e => setEssentialQuestion(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, essentialQuestion, {
      textStructure: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }, essentialQuestionTextStructures.map(textStructure => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: textStructure,
    value: textStructure,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }, textStructure))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  }, "Question"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "Essential Question",
    placeholder: "Essential Question",
    value: essentialQuestion.question,
    onChange: e => setEssentialQuestion(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, essentialQuestion, {
      question: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundColor: 'Red',
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: undefined
  }, "Socratic Questions"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: undefined
  }, socraticQuestionsList.map((question, i) => {
    console.log(socraticQuestionsList);
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: undefined
    }, question.type + ': ' + question.question));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    onChange: e => setSocraticQuestions(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, socraticQuestions, {
      type: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: undefined
  }, socraticQuestionsTypeEnumNames.map(questionType => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: questionType,
    value: questionType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: undefined
  }, questionType))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "Socratic Question",
    placeholder: "Socratic Question",
    value: socraticQuestions.question,
    onChange: e => setSocraticQuestions(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, socraticQuestions, {
      question: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: e => {
      e.preventDefault();
      setSocraticQuestionsList(list => [socraticQuestions].concat(list));
      setSocraticQuestions({
        type: socraticQuestionsTypeEnumNames[0],
        question: ''
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: undefined
  }, "Add Socratic Question")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundColor: 'purple',
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: undefined
  }, "Vocab List"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: undefined
  }, vocabWordList.map((word, i) => {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: undefined
    }, word.word + ' ' + word.partOfSpeech + ' ' + word.definition));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "Vocab Word",
    placeholder: "Vocab Word",
    value: vocabWord.word,
    onChange: e => setVocabWord(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vocabWord, {
      word: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    onChange: e => setVocabWord(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vocabWord, {
      partOfSpeech: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: undefined
  }, partsOfSpeechEnum.map(partOfSpeech => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: partOfSpeech,
    value: partOfSpeech,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: undefined
  }, partOfSpeech))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "Vocab Definition",
    placeholder: "Definition",
    value: vocabWord.definition,
    onChange: e => setVocabWord(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vocabWord, {
      definition: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: e => {
      e.preventDefault();
      setVocabWordList(list => [vocabWord].concat(list));
      setVocabWord({
        word: '',
        partOfSpeech: partsOfSpeechEnum[0],
        definition: ''
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: undefined
  }, "Add Vocab Word")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundColor: 'blue'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: undefined
  }, "Homework"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: undefined
  }, workDueList.map((assignment, i) => {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: undefined
    }, assignment.name + ' ' + assignment.type + ': ' + assignment.dueDate));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: undefined
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Assignment Name",
    value: workDue.name,
    onChange: e => setWorkDue(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, workDue, {
      name: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: undefined
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    onChange: e => setWorkDue(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, workDue, {
      type: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: undefined
  }, assignmentTypeEnumNames.assignmentTypeEnumNames.map(assignmentType => {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      key: assignmentType,
      value: assignmentType,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: undefined
    }, assignmentType);
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: undefined
  }, "Due Date"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "dueDate",
    placeholder: "Assignment Due Date",
    value: workDue.dueDate,
    onChange: e => setWorkDue(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, workDue, {
      dueDate: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: e => {
      e.preventDefault();
      setWorkDueList(list => [workDue].concat(list));
      setWorkDue({
        name: '',
        type: assignmentTypeEnumNames.assignmentTypeEnumNames[0],
        dueDate: 'Wednesday'
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: undefined
  }, "Add an Assignment"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundColor: 'green'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: undefined
  }, "Submit Lesson"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AssignmentTypeEnumNames);

/***/ }),

/***/ "./src/teacher-dashboard/lesson-planner/LessonFinder.js":
/*!**************************************************************!*\
  !*** ./src/teacher-dashboard/lesson-planner/LessonFinder.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/lesson-planner/LessonFinder.js";


const LessonFinder = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, "Let's find a lesson");
};

/* harmony default export */ __webpack_exports__["default"] = (LessonFinder);

/***/ }),

/***/ "./src/teacher-dashboard/lesson-planner/LessonPlanner.js":
/*!***************************************************************!*\
  !*** ./src/teacher-dashboard/lesson-planner/LessonPlanner.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _LessonCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LessonCreator */ "./src/teacher-dashboard/lesson-planner/LessonCreator.js");
/* harmony import */ var _LessonFinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LessonFinder */ "./src/teacher-dashboard/lesson-planner/LessonFinder.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/lesson-planner/LessonPlanner.js";





const LessonPlanner = ({
  match
}) => {
  const url = match.url,
        path = match.path;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Lesson Planner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Lesson Creator"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(path, "lessonCreator"),
    component: _LessonCreator__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LessonPlanner);

/***/ }),

/***/ "./src/teacher-dashboard/roster-components/AllStudentRoster.js":
/*!*********************************************************************!*\
  !*** ./src/teacher-dashboard/roster-components/AllStudentRoster.js ***!
  \*********************************************************************/
/*! exports provided: ALL_STUDENT_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_STUDENT_QUERY", function() { return ALL_STUDENT_QUERY; });
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");

var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/roster-components/AllStudentRoster.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery getAllStudents {\n\t\tallStudents {\n\t\t\t_id\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tresponsibilityPoints\n\t\t\tperiod\n\t\t\tdesk\n\t\t\tteacher\n\t\t\tisHiddenFromRoster\n\t\t}\n\t\tshowHiddenStudents @client\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const ALL_STUDENT_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());

const AllStudentRoster = () => {
  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(ALL_STUDENT_QUERY),
        data = _useQuery.data,
        loading = _useQuery.loading,
        error = _useQuery.error;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Loading");
  if (error) return console.log("ALL_STUDENT_QUERY Error: ".concat(error));
  const allStudents = data.allStudents,
        showHiddenStudents = data.showHiddenStudents; // const {
  // 	_id,
  // 	firstName,
  // 	lastName,
  // 	responsibilityPoints,
  // 	period,
  // 	desk,
  // 	teacher,
  // 	isHiddenFromRoster,
  // } = allStudents

  let numberMaker = 1;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, client => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--white)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'Center',
      alignContent: 'center',
      alignItems: 'center',
      paddingBottom: '1%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      textAlign: 'center',
      color: 'var(--blue)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "All Students"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button",
    type: "button",
    style: {
      marginBottom: '2px'
    },
    onClick: () => client.writeData({
      data: {
        showHiddenStudents: !showHiddenStudents
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, !showHiddenStudents ? 'Show Hidden Students' : 'Hide Hidden Students')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      borderBottom: '1px solid black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, allStudents.map((student, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !student.isHiddenFromRoster && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: index,
    style: {
      borderTop: '1px solid black',
      paddingTop: '5x',
      paddingBottom: '5x',
      display: 'flex',
      alignContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: numberMaker % 2 ? {
      backgroundColor: 'whie',
      width: '100%'
    } : {
      backgroundColor: 'lightgray',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    style: {
      textDecoration: 'none',
      color: 'var(--blue)'
    },
    to: "/dashboard/roster-profile/student/".concat(student._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "".concat(numberMaker++, " ").concat(student.lastName, ", ").concat(student.firstName, " Class Period: ").concat(student.period, " Responsibility Points: ").concat(student.responsibilityPoints, " "))))))), showHiddenStudents && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, allStudents.map((student, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, student.isHiddenFromRoster && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: index,
    style: {
      borderBottom: '1px solid black',
      paddingTop: '5x',
      paddingBottom: '5x',
      display: 'flex',
      alignContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: numberMaker % 2 ? {
      backgroundColor: 'var(--white)',
      width: '100%'
    } : {
      backgroundColor: 'var(--grey)',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    style: {
      textDecoration: 'none',
      color: 'var(--red)'
    },
    to: "/dashboard/roster-profile/student/".concat(student._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "".concat(numberMaker++, " ").concat(student.lastName, ", ").concat(student.firstName, " ")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AllStudentRoster); // {

/* <div>
									{showHiddenStudents && student.isHiddenFromRoster && (
										<div
											key={index}
											style={{
												borderTop: '1px solid black',
												paddingTop: '5x',
												paddingBottom: '5x',
												display: 'flex',
												alignContent: 'center',
											}}>
											<div
												style={
													(index + 1) % 2
														? { backgroundColor: 'whie', width: '100%' }
														: { backgroundColor: 'lightgray', width: '100%' }
												}>
												<Link
													style={{ textDecoration: 'none', color: 'red' }}
													to={`/dashboard/roster-profile/student/${student._id}`}>
													{`${index + 1} ${student.firstName} ${student.lastName}`}
												</Link>
											</div>
											<div style={{ display: 'flex', alignContent: 'flex-end' }} />
										</div>
									)}
								</div> */
// }

/***/ }),

/***/ "./src/teacher-dashboard/roster-components/EditModeForm.js":
/*!*****************************************************************!*\
  !*** ./src/teacher-dashboard/roster-components/EditModeForm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rosterNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rosterNavigation */ "./src/teacher-dashboard/roster-components/rosterNavigation.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");



var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/roster-components/EditModeForm.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tmutation update(\n\t\t$_id: ID!\n\t\t$firstName: String!\n\t\t$lastName: String!\n\t\t$period: periodName!\n\t\t$desk: Int!\n\t\t$responsibilityPoints: Int!\n\t\t$teacher: String!\n\t) {\n\t\tupdateStudent(\n\t\t\t_id: $_id\n\t\t\tfirstName: $firstName\n\t\t\tlastName: $lastName\n\t\t\tperiod: $period\n\t\t\tdesk: $desk\n\t\t\tresponsibilityPoints: $responsibilityPoints\n\t\t\tteacher: $teacher\n\t\t) {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tperiod\n\t\t\tdesk\n\t\t\tresponsibilityPoints\n\t\t\tteacher\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const UPDATE_STUDENT_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());

const EditModeForm = ({
  studentInfo,
  isEditStudentMode
}) => {
  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(_rosterNavigation__WEBPACK_IMPORTED_MODULE_4__["GET_PERIOD_NAMES"]),
        data = _useQuery.data,
        loading = _useQuery.loading,
        error = _useQuery.error;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Loading");
  if (error) console.log(error);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(EditStudentInfo, {
    periodName: data.periodName.enumValues.map(period => period.name),
    studentInfo: studentInfo,
    isEditStudentMode: isEditStudentMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  });
};

const EditStudentInfo = ({
  studentInfo,
  periodName,
  history,
  isEditStudentMode
}) => {
  const _id = studentInfo._id,
        firstName = studentInfo.firstName,
        lastName = studentInfo.lastName,
        period = studentInfo.period,
        desk = studentInfo.desk,
        responsibilityPoints = studentInfo.responsibilityPoints,
        teacher = studentInfo.teacher;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    _id: _id,
    firstName: firstName,
    lastName: lastName,
    period: period,
    desk: desk,
    responsibilityPoints: responsibilityPoints,
    teacher: teacher
  }),
        _useState2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        updatedStudent = _useState2[0],
        setupdatedStudent = _useState2[1];

  const _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(UPDATE_STUDENT_MUTATION, {
    variables: {
      _id: updatedStudent._id,
      firstName: updatedStudent.firstName,
      lastName: updatedStudent.lastName,
      period: updatedStudent.period,
      desk: updatedStudent.desk,
      responsibilityPoints: updatedStudent.responsibilityPoints,
      teacher: updatedStudent.teacher
    },
    refetchQueries: ['getStudentInfo', 'rosterList', 'roster']
  }),
        _useMutation2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
        updateStudent = _useMutation2[0],
        error = _useMutation2[1].error;

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, client => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    onSubmit: e => {
      e.preventDefault();
      updateStudent();
      client.writeData({
        data: {
          isEditStudentMode: !isEditStudentMode
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "First Name:", ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    style: {
      backgroundColor: 'var(--white)'
    },
    name: "firstName",
    placeholder: updatedStudent.firstName,
    type: "text",
    value: updatedStudent.firstName,
    onChange: e => setupdatedStudent(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updatedStudent, {
      firstName: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Last Name:", ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    style: {
      backgroundColor: 'var(--white)'
    },
    name: "lastName",
    placeholder: updatedStudent.lastName,
    type: "text",
    value: updatedStudent.lastName,
    onChange: e => setupdatedStudent(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updatedStudent, {
      lastName: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Desk Number:", ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    style: {
      backgroundColor: 'var(--white)'
    },
    name: "desk",
    placeholder: updatedStudent.desk,
    type: "number",
    min: "1",
    max: "24",
    value: updatedStudent.desk,
    onChange: e => setupdatedStudent(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updatedStudent, {
      desk: parseInt(e.target.value, 10)
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "Responsibility Points:", ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    style: {
      backgroundColor: 'var(--white)'
    },
    name: "responsibilityPoints",
    placeholder: updatedStudent.responsibilityPoints,
    type: "number",
    min: "1",
    value: updatedStudent.responsibilityPoints,
    onChange: e => setupdatedStudent(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updatedStudent, {
      responsibilityPoints: parseInt(e.target.value, 10)
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, "Class Period:", ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    style: {
      backgroundColor: 'var(--white)'
    },
    onChange: e => setupdatedStudent(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updatedStudent, {
      period: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, periodName.map(period => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: period,
    value: period,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, "Period ", period)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, "Teacher's Name:", ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    style: {
      backgroundColor: 'var(--white)'
    },
    name: "teacher",
    placeholder: updatedStudent.teacher,
    type: "text",
    value: updatedStudent.teacher,
    onChange: e => setupdatedStudent(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updatedStudent, {
      teacher: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "blueButton",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, "Edit Student"))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditModeForm);

/***/ }),

/***/ "./src/teacher-dashboard/roster-components/EditModeToggle.js":
/*!*******************************************************************!*\
  !*** ./src/teacher-dashboard/roster-components/EditModeToggle.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/roster-components/EditModeToggle.js";



const EditModeToggle = ({
  isEditStudentMode
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, client => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "blueButton",
    type: "button",
    onClick: () => client.writeData({
      data: {
        isEditStudentMode: !isEditStudentMode
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, isEditStudentMode ? 'Go Back' : 'Edit Mode'));
};

/* harmony default export */ __webpack_exports__["default"] = (EditModeToggle);

/***/ }),

/***/ "./src/teacher-dashboard/roster-components/RemoveStudentToggle.js":
/*!************************************************************************!*\
  !*** ./src/teacher-dashboard/roster-components/RemoveStudentToggle.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");

var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/roster-components/RemoveStudentToggle.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmutation removeStudent($_id: ID!) {\n\t\tremoveStudent(_id: $_id) {\n\t\t\tremoved\n\t\t\tstudent {\n\t\t\t\t_id\n\t\t\t\tfirstName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const REMOVE_STUDENT_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

const RemoveStudentToggle = ({
  removeStudentScreen
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, client => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      fontSize: '70%',
      height: '50px',
      width: '30%',
      textDecoration: 'none',
      color: 'var(--white)',
      backgroundColor: 'var(--red)' // var(--blue)

    },
    type: "button",
    onClick: () => {
      client.writeData({
        data: {
          removeStudentScreen: !removeStudentScreen
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, !removeStudentScreen ? 'Delete Student' : 'Go Back'));
};

/* harmony default export */ __webpack_exports__["default"] = (RemoveStudentToggle); // removeStudent()
// 						const goBack = () => {
// 							return history.push(`/dashboard/roster-view/${period}`)
// 						}
// 						goBack()

/***/ }),

/***/ "./src/teacher-dashboard/roster-components/Student.js":
/*!************************************************************!*\
  !*** ./src/teacher-dashboard/roster-components/Student.js ***!
  \************************************************************/
/*! exports provided: STUDENT_INFO_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDENT_INFO_QUERY", function() { return STUDENT_INFO_QUERY; });
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _EditModeToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditModeToggle */ "./src/teacher-dashboard/roster-components/EditModeToggle.js");
/* harmony import */ var _EditModeForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditModeForm */ "./src/teacher-dashboard/roster-components/EditModeForm.js");
/* harmony import */ var _StudentHider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StudentHider */ "./src/teacher-dashboard/roster-components/StudentHider.js");
/* harmony import */ var _RemoveStudentToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RemoveStudentToggle */ "./src/teacher-dashboard/roster-components/RemoveStudentToggle.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/roster-components/Student.js";

function _templateObject2() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tmutation removeStudent($_id: ID!) {\n\t\tremoveStudent(_id: $_id) {\n\t\t\tremoved\n\t\t\tstudent {\n\t\t\t\t_id\n\t\t\t\tdesk\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tquery getStudentInfo($_id: ID!) {\n\t\tstudent(_id: $_id) {\n\t\t\t_id\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tperiod\n\t\t\tteacher\n\t\t\tresponsibilityPoints\n\t\t\tdesk\n\t\t\tisHiddenFromRoster\n\t\t}\n\t\tisEditStudentMode @client\n\t\tremoveStudentScreen @client\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}










const STUDENT_INFO_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());
const REMOVE_STUDENT_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject2());
react_modal__WEBPACK_IMPORTED_MODULE_10___default.a.setAppElement(document.getElementById('root'));

const Student = ({
  match,
  history
}) => {
  const studentInfo = match.params.studentInfo;

  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(STUDENT_INFO_QUERY, {
    variables: {
      _id: studentInfo
    }
  }),
        data = _useQuery.data,
        loading = _useQuery.loading,
        error = _useQuery.error;

  const _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(REMOVE_STUDENT_MUTATION, {
    variables: {
      _id: studentInfo
    },
    refetchQueries: ['rosterList', 'getAllStudents', 'roster']
  }),
        _useMutation2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
        removeStudent = _useMutation2[0];

  if (loading) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Loading");
  if (error) console.log(error);
  const student = data.student,
        isEditStudentMode = data.isEditStudentMode,
        removeStudentScreen = data.removeStudentScreen;
  const firstName = student.firstName,
        lastName = student.lastName,
        period = student.period,
        teacher = student.teacher,
        responsibilityPoints = student.responsibilityPoints,
        desk = student.desk,
        isHiddenFromRoster = student.isHiddenFromRoster;
  const client = _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useApolloClient"];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, client => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: 'var(--blue)',
      padding: '1%',
      border: '1px solid black',
      width: '100%',
      backgroundColor: 'var(--grey)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, !removeStudentScreen ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, isEditStudentMode ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_EditModeToggle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "blueButton",
    isEditStudentMode: isEditStudentMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Edit Student"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_EditModeForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    clasName: "button",
    studentInfo: student,
    history: history,
    isEditStudentMode: isEditStudentMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "blueButton",
    to: "/dashboard/roster-view/".concat(period),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: {
      width: '99%',
      height: '2rem',
      backgroundColor: 'var(--blue)',
      color: 'var(--white)',
      fontSize: '200%',
      textShadow: '1px 3px 1px black',
      boxShadow: '1px 1px 1px black',
      border: '1px solid var(--white)',
      display: 'flex',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "Back to Roster")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    style: isHiddenFromRoster ? {
      color: 'var(--red)'
    } : {
      color: 'var(--blue)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, firstName + ' ' + lastName), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    style: {
      color: 'var(--red)',
      fontSize: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, isHiddenFromRoster && 'Hidden', ' ')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "Period: ".concat(period)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Seat: ".concat(desk)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "Responsibility Points: ".concat(responsibilityPoints)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "Teacher: ".concat(teacher)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      textShadow: '1px 3px 1px black',
      boxShadow: '1px 1px 1px black',
      border: '1px solid var(--white)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/dashboard/classroom/class-period-selector/".concat(period, "/").concat(desk),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: {
      width: '100%'
    },
    className: "blueButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "Back to Class")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_EditModeToggle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "blueButton",
    isEditStudentMode: isEditStudentMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_StudentHider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    studentInfo: student,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RemoveStudentToggle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "redButton",
    removeStudentScreen: removeStudentScreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  })))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RemoveStudentToggle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      backgroundColor: 'red',
      border: '0.01px solid black',
      width: '100px',
      height: '50px',
      color: '#var(--blue)',
      textDecoration: 'none',
      fontSize: '125%',
      fontWeight: 'bolder',
      boxShadow: '3px 3px 3px black',
      textShadow: '2px 2px 2px #888'
    },
    removeStudentScreen: removeStudentScreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      overlay: {
        backgroundColor: 'var(--darkGrey)'
      },
      content: {
        // marginTop: '10%',
        marginLeft: '20%',
        width: '40rem',
        height: '25rem'
      }
    },
    isOpen: removeStudentScreen,
    onRequestClose: () => client.writeData({
      data: {
        removeStudentScreen: !removeStudentScreen
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    style: {
      color: 'var(--red)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, "Are You Sure You want to Delete ", firstName, "!!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "blueButton",
    style: {
      width: '40rem',
      height: '10rem',
      fontSize: '170%',
      marginBottom: '10%'
    },
    onClick: () => client.writeData({
      data: {
        removeStudentScreen: !removeStudentScreen
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, "Don't Delete!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: {
      fontSize: '70%',
      height: '30px',
      width: '30rem',
      textDecoration: 'none',
      color: 'var(--white)',
      backgroundColor: 'var(--red)'
    },
    onClick: () => {
      removeStudent();

      const goBack = () => {
        client.writeData({
          data: {
            removeStudentScreen: !removeStudentScreen
          }
        });
        return !isHiddenFromRoster ? history.push("/dashboard/roster-view/".concat(period)) : history.push("/dashboard/allStudent");
      };

      goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, "Delete Student")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Student);

/***/ }),

/***/ "./src/teacher-dashboard/roster-components/StudentAdder.js":
/*!*****************************************************************!*\
  !*** ./src/teacher-dashboard/roster-components/StudentAdder.js ***!
  \*****************************************************************/
/*! exports provided: StudentInfoLoader, StudentAdder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInfoLoader", function() { return StudentInfoLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAdder", function() { return StudentAdder; });
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _rosterNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rosterNavigation */ "./src/teacher-dashboard/roster-components/rosterNavigation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/roster-components/StudentAdder.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tmutation addStudent(\n\t\t$firstName: String!\n\t\t$lastName: String!\n\t\t$period: periodName!\n\t\t$desk: Int!\n\t\t$responsibilityPoints: Int!\n\t\t$teacher: String!\n\t\t$isHiddenFromRoster: Boolean!\n\t) {\n\t\taddStudent(\n\t\t\tinput: {\n\t\t\t\tfirstName: $firstName\n\t\t\t\tlastName: $lastName\n\t\t\t\tperiod: $period\n\t\t\t\tdesk: $desk\n\t\t\t\tresponsibilityPoints: $responsibilityPoints\n\t\t\t\tteacher: $teacher\n\t\t\t\tisHiddenFromRoster: $isHiddenFromRoster\n\t\t\t}\n\t\t) {\n\t\t\t_id\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tperiod\n\t\t\tresponsibilityPoints\n\t\t\tdesk\n\t\t\tteacher\n\t\t\tisHiddenFromRoster\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

 // import { MutationResult } from '@apollo/react-common'




 // import * as ApolloTypes from './__generated__/addStudent'
// import GET_ALL_STUDENTS_QUERY from './dashboard'

const ADD_STUDENTS_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

const StudentInfoLoader = () => {
  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_rosterNavigation__WEBPACK_IMPORTED_MODULE_6__["GET_PERIOD_NAMES"]),
        data = _useQuery.data,
        loading = _useQuery.loading,
        error = _useQuery.error;

  console.log(data);
  if (loading) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Loading");
  if (error) console.log(error);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    className: "button",
    to: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Dashboard"), ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    className: "button",
    to: "/dashboard/roster-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Rosters"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Add Student"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StudentAdder, {
    periodName: data.periodName.enumValues.map(period => period.name),
    style: {
      borderBottom: '1px black solid',
      paddingBottom: '30px'
    },
    isRosterMode: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), ' ');
};

const StudentAdder = ({
  periodName,
  isRosterMode,
  unUsedDesk,
  roster
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    firstName: '',
    lastName: '',
    period: periodName[periodName] || periodName[0],
    responsibilityPoints: 100,
    teacher: 'Wetherall',
    isHiddenFromRoster: false
  }),
        _useState2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        NewStudent = _useState2[0],
        setNewStudent = _useState2[1];

  const firstName = NewStudent.firstName,
        lastName = NewStudent.lastName,
        period = NewStudent.period,
        desk = NewStudent.desk,
        responsibilityPoints = NewStudent.responsibilityPoints,
        teacher = NewStudent.teacher,
        isHiddenFromRoster = NewStudent.isHiddenFromRoster;

  const _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(ADD_STUDENTS_MUTATION, {
    variables: {
      firstName,
      lastName,
      period,
      desk: unUsedDesk,
      responsibilityPoints,
      teacher,
      isHiddenFromRoster
    },
    refetchQueries: ['rosterList', 'getAllStudents']
  }),
        _useMutation2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
        addStudent = _useMutation2[0],
        error = _useMutation2[1].error;

  if (error) {
    console.log('error', error);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    style: isRosterMode && {
      paddingLeft: '1%'
    },
    onSubmit: e => {
      e.preventDefault();
      addStudent();
      setNewStudent(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, NewStudent, {
        firstName: '',
        lastName: '',
        period: periodName[periodName] || periodName[0]
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    style: isRosterMode && {
      paddingLeft: '1%',
      width: '20%',
      fontSize: '70%',
      fontWeight: 'bold',
      height: '25px',
      textDecoration: 'none',
      color: 'var(--blue)',
      backgroundColor: '#var(--blue)'
    },
    name: "firstName",
    sytle: {
      height: '100px'
    },
    placeholder: "First Name",
    type: "text",
    value: NewStudent.firstName,
    onChange: e => setNewStudent(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, NewStudent, {
      firstName: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    style: isRosterMode && {
      paddingLeft: '1%',
      width: '20%',
      fontSize: '70%',
      fontWeight: 'bold',
      height: '25px',
      textDecoration: 'none',
      color: 'var(--blue)',
      backgroundColor: '#var(--blue)'
    },
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
    value: NewStudent.lastName,
    onChange: e => setNewStudent(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, NewStudent, {
      lastName: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }), !isRosterMode && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    onChange: e => setNewStudent(Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, NewStudent, {
      period: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, periodName.map(period => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: period,
    value: period,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, "Period ", period))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    style: {
      fontSize: '90%',
      height: '30px',
      width: '20%',
      textDecoration: 'none',
      color: 'var(--white)',
      backgroundColor: 'var(--blue)'
    },
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, "Create Student")));
};



/***/ }),

/***/ "./src/teacher-dashboard/roster-components/StudentHider.js":
/*!*****************************************************************!*\
  !*** ./src/teacher-dashboard/roster-components/StudentHider.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");


var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/roster-components/StudentHider.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tmutation studentHider($_id: ID!, $isHiddenFromRoster: Boolean!) {\n\t\thideStudentFromRoster(_id: $_id, isHiddenFromRoster: $isHiddenFromRoster) {\n\t\t\tfirstName\n\t\t\tisHiddenFromRoster\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const HIDE_STUDENT_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

const StudentHider = ({
  studentInfo
}) => {
  const _id = studentInfo._id,
        isHiddenFromRoster = studentInfo.isHiddenFromRoster;

  const _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(HIDE_STUDENT_MUTATION, {
    variables: {
      _id: studentInfo._id,
      isHiddenFromRoster: !studentInfo.isHiddenFromRoster
    },
    refetchQueries: ['getStudentInfo']
  }),
        _useMutation2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
        hideStudentFromRoster = _useMutation2[0];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "blueButton",
    type: "button",
    onClick: () => hideStudentFromRoster(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Hide Student");
};

/* harmony default export */ __webpack_exports__["default"] = (StudentHider);

/***/ }),

/***/ "./src/teacher-dashboard/roster-components/StudentListInRosterView.js":
/*!****************************************************************************!*\
  !*** ./src/teacher-dashboard/roster-components/StudentListInRosterView.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/roster-components/StudentListInRosterView.js";



const StudentListInRosterView = ({
  classRoster
}) => {
  let numberMaker = 1;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, classRoster.map((student, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, !student.isHiddenFromRoster && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      borderTop: '1px solid black',
      paddingTop: '5x',
      paddingBottom: '5x',
      display: 'flex',
      flextDirection: 'row',
      alignContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: numberMaker % 2 ? {
      backgroundColor: 'var(--white)',
      width: '100%',
      height: '100%',
      paddingLeft: '2%'
    } : {
      backgroundColor: 'var(--grey)',
      width: '100%',
      height: '100%',
      paddingLeft: '2%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    style: {
      textDecoration: 'none',
      color: 'var(--blue)'
    },
    to: "/dashboard/roster-profile/student/".concat(student._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "".concat(numberMaker++, " ").concat(student.lastName, ", ").concat(student.firstName, " ")))))) // .sort()
  );
};

/* harmony default export */ __webpack_exports__["default"] = (StudentListInRosterView);

/***/ }),

/***/ "./src/teacher-dashboard/roster-components/rosterNavigation.js":
/*!*********************************************************************!*\
  !*** ./src/teacher-dashboard/roster-components/rosterNavigation.js ***!
  \*********************************************************************/
/*! exports provided: GET_PERIOD_NAMES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PERIOD_NAMES", function() { return GET_PERIOD_NAMES; });
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/roster-components/rosterNavigation.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery getPeriodNames {\n\t\tperiodName: __type(name: \"periodName\") {\n\t\t\tenumValues {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t\tgradeBookToggle @client\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

 // import { QueryResult } from '@apollo/react-common'



 // import * as ApolloTypes from './__generated__/getAllStudents'

const GET_PERIOD_NAMES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

const RosterNavBar = ({
  match
}) => {
  const client = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useApolloClient"])();

  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PERIOD_NAMES),
        data = _useQuery.data,
        loading = _useQuery.loading,
        error = _useQuery.error;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Loading");
  if (error) console.log(error);
  const gradeBookToggle = data.gradeBookToggle;

  const toggleGradebook = () => client.writeData({
    data: {
      gradeBookToggle: !gradeBookToggle
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--darkGrey)',
      height: '100vh',
      color: 'var(--white)',
      textShadow: '2px 2px 2px #888',
      textAlign: 'center',
      display: 'grid',
      gridTemplateRows: '1fr 7fr',
      border: '1px solid var(--blue)',
      overflow: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: '0px',
      alignContent: 'center',
      justifyContent: 'flex-start',
      paddingTop: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    onClick: () => toggleGradebook(),
    style: {
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Grade Book")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      fontSize: '200%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RosterNavBarItems, {
    match: match,
    items: data.periodName.enumValues.map(period => period.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }))));
};

const RosterNavBarItems = ({
  items,
  match
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, items.map((period, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    key: period,
    to: "/dashboard/roster-view/".concat(period),
    style: {
      marginTop: '4%',
      marginBottom: '21%',
      fontSize: '120%',
      textDecoration: 'none',
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      width: '75%',
      height: '120%',
      fontSize: '70%',
      textDecoration: 'none',
      color: 'var(--white)',
      backgroundColor: 'var(--blue)',
      boxShadow: '1px 1px 1px black',
      borderRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Period ", period))));
};

/* harmony default export */ __webpack_exports__["default"] = (RosterNavBar);

/***/ }),

/***/ "./src/teacher-dashboard/roster-components/rosterView.js":
/*!***************************************************************!*\
  !*** ./src/teacher-dashboard/roster-components/rosterView.js ***!
  \***************************************************************/
/*! exports provided: GET_CLASS_ROSTER, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CLASS_ROSTER", function() { return GET_CLASS_ROSTER; });
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _StudentAdder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StudentAdder */ "./src/teacher-dashboard/roster-components/StudentAdder.js");
/* harmony import */ var _lesson_planner_LessonCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lesson-planner/LessonCreator */ "./src/teacher-dashboard/lesson-planner/LessonCreator.js");
/* harmony import */ var _StudentListInRosterView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StudentListInRosterView */ "./src/teacher-dashboard/roster-components/StudentListInRosterView.js");
/* harmony import */ var _AllStudentRoster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AllStudentRoster */ "./src/teacher-dashboard/roster-components/AllStudentRoster.js");


var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/roster-components/rosterView.js";

function _templateObject() {
  const data = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tquery rosterList($period: periodName) {\n\t\tclassRoster(period: $period) {\n\t\t\t_id\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tresponsibilityPoints\n\t\t\tperiod\n\t\t\tdesk\n\t\t\tteacher\n\t\t\tisHiddenFromRoster\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}









const GET_CLASS_ROSTER = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

const Rosters = ({
  match
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState2 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isAddStudentPressed = _useState2[0],
        setIsAddStudentPressed = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(24),
        _useState4 = Object(_Users_MrWetherall_code_teachers_aide_app_teachers_aide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        deskLimit = _useState4[0],
        setdeskLimit = _useState4[1];

  const periodName = match.params.periodName;

  const _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_CLASS_ROSTER, {
    variables: {
      period: periodName
    }
  }),
        data = _useQuery.data,
        loading = _useQuery.loading,
        error = _useQuery.error;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Loading");
  if (error) console.log(error);
  const lastNames = [];
  const classRoster = data.classRoster;
  classRoster.forEach(({
    lastName,
    firstName
  }) => lastNames.unshift({
    lastName: lastName,
    firstName: firstName
  }));
  const desks = [];
  classRoster.forEach(({
    desk
  }) => {
    desks.unshift(desk);
  });

  const deskPicker = () => {
    const desk = Math.floor(Math.random() * deskLimit + 1);

    if (desks.includes(desk) && desks.length < deskLimit) {
      return deskPicker();
    } else return desk;
  };

  let pickedDesk = deskPicker();
  console.log(match.params.periodName);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '1fr 7fr',
      alignContent: 'center',
      height: '100vh',
      marginBottom: '0px',
      backgroundColor: 'var(--white)',
      borderLeft: '3px solid var(--white)',
      borderBottom: '1px solid black',
      overflow: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: "SubHeader",
    style: {
      alignContent: 'center',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignText: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Period ", periodName)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignContent: 'center',
      paddingRight: '5%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, desks.length < deskLimit && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "button",
    style: {
      borderRadius: '5px'
    },
    onClick: () => setIsAddStudentPressed(!isAddStudentPressed),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, isAddStudentPressed ? 'Cancel' : 'Add Student')))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, isAddStudentPressed && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--grey)',
      paddingTop: '10px',
      paddingBottom: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_StudentAdder__WEBPACK_IMPORTED_MODULE_6__["StudentAdder"], {
    periodName: periodName,
    isRosterMode: true,
    unUsedDesk: pickedDesk,
    roster: classRoster,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, match.params.periodName === 'allStudents' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AllStudentRoster__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_StudentListInRosterView__WEBPACK_IMPORTED_MODULE_8__["default"], {
    classRoster: classRoster,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      borderBottom: '1px solid black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--grey)',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Rosters);

/***/ }),

/***/ "./src/teacher-dashboard/school-day/SchoolDay.js":
/*!*******************************************************!*\
  !*** ./src/teacher-dashboard/school-day/SchoolDay.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _lesson_planner_AssignmentCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lesson-planner/AssignmentCreator */ "./src/teacher-dashboard/lesson-planner/AssignmentCreator.js");
/* harmony import */ var _lesson_planner_LessonCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lesson-planner/LessonCreator */ "./src/teacher-dashboard/lesson-planner/LessonCreator.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/teacher-dashboard/school-day/SchoolDay.js";





const SchoolDay = ({
  match
}) => {
  const url = match.url,
        path = match.path;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "School Day Screen"));
};

/* harmony default export */ __webpack_exports__["default"] = (SchoolDay); // A School Day should have a list of classes for the day
// A way to track absences/resons for leaving the class for all students
// Be apart of the Dashboard?

/***/ }),

/***/ "./src/website/WebSite.js":
/*!********************************!*\
  !*** ./src/website/WebSite.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/website/WebSite.js";



const WebSite = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "Website");
};

/* harmony default export */ __webpack_exports__["default"] = (WebSite);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/MrWetherall/code/teachers-aide-app/teachers-aide-client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map