/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/appContext.js":
/*!***********************************!*\
  !*** ./src/context/appContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"AppProvider\": () => (/* binding */ AppProvider),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appReducer */ \"./src/context/appReducer.js\");\n\n\n\nconst initialState = {\n    blurredBg: false\n};\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nconst appActions = (dispatch)=>{\n    return {\n        setBlurred: (value)=>dispatch({\n                type: \"SET_BLURRED\",\n                payload: value\n            })\n    };\n};\nconst AppProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_appReducer__WEBPACK_IMPORTED_MODULE_2__.appReducer, initialState);\n    const actions = appActions(dispatch);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            ...state,\n            ...actions\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/context/appContext.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\nconst useAppContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hcHBDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBcUU7QUFDM0I7QUFFMUMsTUFBTUssWUFBWSxHQUFHO0lBQ2pCQyxTQUFTLEVBQUUsS0FBSztDQUNuQjtBQUVELE1BQU1DLFVBQVUsaUJBQUdOLG9EQUFhLENBQUNJLFlBQVksQ0FBQztBQUU5QyxNQUFNRyxVQUFVLEdBQUcsQ0FBQ0MsUUFBUSxHQUFLO0lBQzdCLE9BQU87UUFDSEMsVUFBVSxFQUFFLENBQUNDLEtBQUssR0FDZEYsUUFBUSxDQUFDO2dCQUFFRyxJQUFJLEVBQUUsYUFBYTtnQkFBRUMsT0FBTyxFQUFFRixLQUFLO2FBQUUsQ0FBQztLQUN4RCxDQUFDO0NBQ0w7QUFFRCxNQUFNRyxXQUFXLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUNsQyxNQUFNLEVBakJWLEdBaUJXQyxLQUFLLEdBakJoQixHQWlCa0JQLFFBQVEsTUFBSVAsaURBQVUsQ0FBQ0UsbURBQVUsRUFBRUMsWUFBWSxDQUFDO0lBQzlELE1BQU1ZLE9BQU8sR0FBR1QsVUFBVSxDQUFDQyxRQUFRLENBQUM7SUFDcEMscUJBQ0ksOERBQUNGLFVBQVUsQ0FBQ1csUUFBUTtRQUFDUCxLQUFLLEVBQUU7WUFBRSxHQUFHSyxLQUFLO1lBQUUsR0FBR0MsT0FBTztTQUFFO2tCQUMvQ0YsUUFBUTs7Ozs7aUJBQ1MsQ0FDeEI7Q0FDTDtBQUVELE1BQU1JLGFBQWEsR0FBRyxJQUFNO0lBQ3hCLE9BQU9oQixpREFBVSxDQUFDSSxVQUFVLENBQUMsQ0FBQztDQUNqQztBQUVpRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZWJlci8uL3NyYy9jb250ZXh0L2FwcENvbnRleHQuanM/ZDM3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXBwUmVkdWNlciB9IGZyb20gXCIuL2FwcFJlZHVjZXJcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGJsdXJyZWRCZzogZmFsc2UsXG59O1xuXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpO1xuXG5jb25zdCBhcHBBY3Rpb25zID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Qmx1cnJlZDogKHZhbHVlKSA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9CTFVSUkVEXCIsIHBheWxvYWQ6IHZhbHVlIH0pLFxuICAgIH07XG59O1xuXG5jb25zdCBBcHBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoYXBwUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCBhY3Rpb25zID0gYXBwQWN0aW9ucyhkaXNwYXRjaCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgLi4uc3RhdGUsIC4uLmFjdGlvbnMgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuY29uc3QgdXNlQXBwQ29udGV4dCA9ICgpID0+IHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbn07XG5cbmV4cG9ydCB7IEFwcFByb3ZpZGVyLCBBcHBDb250ZXh0LCB1c2VBcHBDb250ZXh0IH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsInVzZUNvbnRleHQiLCJhcHBSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiYmx1cnJlZEJnIiwiQXBwQ29udGV4dCIsImFwcEFjdGlvbnMiLCJkaXNwYXRjaCIsInNldEJsdXJyZWQiLCJ2YWx1ZSIsInR5cGUiLCJwYXlsb2FkIiwiQXBwUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiYWN0aW9ucyIsIlByb3ZpZGVyIiwidXNlQXBwQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/appContext.js\n");

/***/ }),

/***/ "./src/context/appReducer.js":
/*!***********************************!*\
  !*** ./src/context/appReducer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appReducer\": () => (/* binding */ appReducer)\n/* harmony export */ });\nconst appReducer = (state, action)=>{\n    switch(action.type){\n        case \"SET_BLURRED\":\n             false ? 0 : null;\n            return {\n                ...state,\n                blurredBg: action.payload\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hcHBSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxVQUFVLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7SUFDekMsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2YsS0FBSyxhQUFhO1lBQ2QsTUFBNkIsR0FDdkJDLENBQWtELEdBQ2xELElBQUksQ0FBQztZQUNYLE9BQU87Z0JBQUUsR0FBR0gsS0FBSztnQkFBRU0sU0FBUyxFQUFFTCxNQUFNLENBQUNJLE9BQU87YUFBRSxDQUFDO1FBRW5EO1lBQ0ksT0FBT0wsS0FBSyxDQUFDO0tBQ3BCO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZWJlci8uL3NyYy9jb250ZXh0L2FwcFJlZHVjZXIuanM/YmQzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiU0VUX0JMVVJSRURcIjpcbiAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICA/IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiSVNfQkxVUlJFRFwiLCBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYmx1cnJlZEJnOiBhY3Rpb24ucGF5bG9hZCB9O1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcbiJdLCJuYW1lcyI6WyJhcHBSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInBheWxvYWQiLCJibHVycmVkQmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/appReducer.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/appContext */ \"./src/context/appContext.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll-parallax */ \"react-scroll-parallax\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_3___default().configure({\n    showSpinner: true\n});\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().start()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done()\n);\nfunction MyApp({ Component , pageProps  }) {\n    const queryClientRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    if (!queryClientRef.current) {\n        queryClientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {\n        client: queryClientRef.current,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_appContext__WEBPACK_IMPORTED_MODULE_5__.AppProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1 maximum-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"robots\",\n                            content: \"noindex, nofollow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"keywords\",\n                            content: \"React Template, Portfolio Template\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"author\",\n                            content: \"Nuclear Themes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: \"#72E2AE\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            httpEquiv: \"X-UA-Compatible\",\n                            content: \"IE=edge\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"/manifest.json\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"shortcut icon\",\n                            href: \"/favicon.ico\",\n                            type: \"image/x-icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            href: \"/icon-192x192.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Bieber - React Personal Portfolio Template\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__.ParallaxProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_6__.Hydrate, {\n                        state: pageProps.dehydratedState,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cristianfranco/Documents/personalWebsite/src/pages/_app.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDSTtBQUNDO0FBQ0g7QUFDcUI7QUFDb0I7QUFDZDtBQUNEO0FBQ2xDO0FBQ1U7QUFDYjtBQUNXO0FBQ0M7QUFFaENFLDBEQUFtQixDQUFDO0lBQUVTLFdBQVcsRUFBRSxJQUFJO0NBQUUsQ0FBQyxDQUFDO0FBQzNDViw0REFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFNQyxzREFBZSxFQUFFO0FBQUEsQ0FBQyxDQUFDO0FBQzlERCw0REFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxJQUFNQyxxREFBYyxFQUFFO0FBQUEsQ0FBQyxDQUFDO0FBQ2hFRCw0REFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFNQyxxREFBYyxFQUFFO0FBQUEsQ0FBQyxDQUFDO0FBRTdELFNBQVNjLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLE1BQU1DLGNBQWMsR0FBR2hCLDZDQUFNLEVBQUU7SUFFL0IsSUFBSSxDQUFDZ0IsY0FBYyxDQUFDQyxPQUFPLEVBQUU7UUFDM0JELGNBQWMsQ0FBQ0MsT0FBTyxHQUFHLElBQUlkLG9EQUFXLEVBQUUsQ0FBQztLQUM1QztJQUVELHFCQUNFLDhEQUFDQyw0REFBbUI7UUFBQ2MsTUFBTSxFQUFFRixjQUFjLENBQUNDLE9BQU87a0JBQ2pELDRFQUFDaEIsNERBQVc7OzhCQUNWLDhEQUFDSixrREFBSTs7c0NBQ0gsOERBQUNzQixNQUFJOzRCQUNIQyxJQUFJLEVBQUMsVUFBVTs0QkFDZkMsT0FBTyxFQUFDLHFEQUFxRDs7Ozs7Z0NBQzdEO3NDQUNGLDhEQUFDRixNQUFJOzRCQUFDQyxJQUFJLEVBQUMsYUFBYTs0QkFBQ0MsT0FBTyxFQUFDLGFBQWE7Ozs7O2dDQUFHO3NDQUNqRCw4REFBQ0YsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFFBQVE7NEJBQUNDLE9BQU8sRUFBQyxtQkFBbUI7Ozs7O2dDQUFHO3NDQUNsRCw4REFBQ0YsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFVBQVU7NEJBQUNDLE9BQU8sRUFBQyxvQ0FBb0M7Ozs7O2dDQUFHO3NDQUNyRSw4REFBQ0YsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFFBQVE7NEJBQUNDLE9BQU8sRUFBQyxnQkFBZ0I7Ozs7O2dDQUFHO3NDQUMvQyw4REFBQ0YsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLGFBQWE7NEJBQUNDLE9BQU8sRUFBQyxTQUFTOzs7OztnQ0FBRztzQ0FDN0MsOERBQUNGLE1BQUk7NEJBQUNHLFNBQVMsRUFBQyxpQkFBaUI7NEJBQUNELE9BQU8sRUFBQyxTQUFTOzs7OztnQ0FBRztzQ0FDdEQsOERBQUNFLE1BQUk7NEJBQUNDLEdBQUcsRUFBQyxVQUFVOzRCQUFDQyxJQUFJLEVBQUMsZ0JBQWdCOzs7OztnQ0FBRztzQ0FDN0MsOERBQUNGLE1BQUk7NEJBQUNDLEdBQUcsRUFBQyxlQUFlOzRCQUFDQyxJQUFJLEVBQUMsY0FBYzs0QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7O2dDQUFHO3NDQUNwRSw4REFBQ0gsTUFBSTs0QkFBQ0MsR0FBRyxFQUFDLGtCQUFrQjs0QkFBQ0MsSUFBSSxFQUFDLG1CQUFtQjs7Ozs7Z0NBQUc7c0NBQ3hELDhEQUFDRSxPQUFLO3NDQUFDLDRDQUEwQzs7Ozs7Z0NBQVE7Ozs7Ozt3QkFDcEQ7OEJBQ1AsOERBQUNyQixtRUFBZ0I7OEJBQ2YsNEVBQUNKLGdEQUFPO3dCQUFDMEIsS0FBSyxFQUFFYixTQUFTLENBQUNjLGVBQWU7a0NBQ3ZDLDRFQUFDZixTQUFTOzRCQUFFLEdBQUdDLFNBQVM7Ozs7O2dDQUFJOzs7Ozs0QkFDcEI7Ozs7O3dCQUNPOzs7Ozs7Z0JBQ1A7Ozs7O1lBRU0sQ0FDdEI7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWViZXIvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9hcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBIeWRyYXRlLCBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSBcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCI7XG5pbXBvcnQgeyBQYXJhbGxheFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXNjcm9sbC1wYXJhbGxheFwiO1xuaW1wb3J0IFwibm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwibnByb2dyZXNzL25wcm9ncmVzcy5jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xuXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHsgc2hvd1NwaW5uZXI6IHRydWUgfSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgcXVlcnlDbGllbnRSZWYgPSB1c2VSZWYoKTtcblxuICBpZiAoIXF1ZXJ5Q2xpZW50UmVmLmN1cnJlbnQpIHtcbiAgICBxdWVyeUNsaWVudFJlZi5jdXJyZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnRSZWYuY3VycmVudH0+XG4gICAgICA8QXBwUHJvdmlkZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIG1heGltdW0tc2NhbGU9MVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgbm9mb2xsb3dcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJSZWFjdCBUZW1wbGF0ZSwgUG9ydGZvbGlvIFRlbXBsYXRlXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIk51Y2xlYXIgVGhlbWVzXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzcyRTJBRVwiIC8+XG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL2ljb24tMTkyeDE5Mi5wbmdcIiAvPlxuICAgICAgICAgIDx0aXRsZT5CaWViZXIgLSBSZWFjdCBQZXJzb25hbCBQb3J0Zm9saW8gVGVtcGxhdGU8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxQYXJhbGxheFByb3ZpZGVyPlxuICAgICAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0h5ZHJhdGU+XG4gICAgICAgIDwvUGFyYWxsYXhQcm92aWRlcj5cbiAgICAgIDwvQXBwUHJvdmlkZXI+XG4gICAgICB7LyogPFJlYWN0UXVlcnlEZXZ0b29scyBpbml0aWFsSXNPcGVuPXtmYWxzZX0gLz4gKi99XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUm91dGVyIiwiTlByb2dyZXNzIiwidXNlUmVmIiwiQXBwUHJvdmlkZXIiLCJIeWRyYXRlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwiUGFyYWxsYXhQcm92aWRlciIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiZXZlbnRzIiwib24iLCJzdGFydCIsImRvbmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInF1ZXJ5Q2xpZW50UmVmIiwiY3VycmVudCIsImNsaWVudCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImh0dHBFcXVpdiIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsInRpdGxlIiwic3RhdGUiLCJkZWh5ZHJhdGVkU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/navigation/navigation.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.min.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-parallax");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();