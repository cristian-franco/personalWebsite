"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/context/appReducer.js
const appReducer = (state, action)=>{
    switch(action.type){
        case "SET_BLURRED":
             false ? 0 : null;
            return {
                ...state,
                blurredBg: action.payload
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/context/appContext.js



const initialState = {
    blurredBg: false
};
const AppContext = /*#__PURE__*/ (0,external_react_.createContext)(initialState);
const appActions = (dispatch)=>{
    return {
        setBlurred: (value)=>dispatch({
                type: "SET_BLURRED",
                payload: value
            })
    };
};
const AppProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(appReducer, initialState);
    const actions = appActions(dispatch);
    return /*#__PURE__*/ jsx_runtime_.jsx(AppContext.Provider, {
        value: {
            ...state,
            ...actions
        },
        children: children
    });
};
const useAppContext = ()=>{
    return useContext(AppContext);
};


// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: external "react-query/devtools"
const devtools_namespaceObject = require("react-query/devtools");
// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(7446);
;// CONCATENATED MODULE: ./src/pages/_app.js














external_nprogress_default().configure({
    showSpinner: true
});
router_default().events.on("routeChangeStart", ()=>external_nprogress_default().start()
);
router_default().events.on("routeChangeComplete", ()=>external_nprogress_default().done()
);
router_default().events.on("routeChangeError", ()=>external_nprogress_default().done()
);
function MyApp({ Component , pageProps  }) {
    const queryClientRef = (0,external_react_.useRef)();
    if (!queryClientRef.current) {
        queryClientRef.current = new external_react_query_.QueryClient();
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
        client: queryClientRef.current,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AppProvider, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1 maximum-scale=1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "description"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "robots",
                            content: "noindex, nofollow"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "keywords",
                            content: "React Template, Portfolio Template"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "author",
                            content: "Nuclear Themes"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "theme-color",
                            content: "#72E2AE"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "shortcut icon",
                            href: "/favicon.ico",
                            type: "image/x-icon"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            href: "/icon-192x192.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Bieber - React Personal Portfolio Template"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.ParallaxProvider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.Hydrate, {
                        state: pageProps.dehydratedState,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 7446:
/***/ ((module) => {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4376));
module.exports = __webpack_exports__;

})();