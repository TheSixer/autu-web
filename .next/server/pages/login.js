"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 7775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(773);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7749);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7398);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ahooks__WEBPACK_IMPORTED_MODULE_12__);













const LoginForm = ({ token  })=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassward] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
    const enterEmail = intl.formatMessage({
        id: "login.enter.email"
    });
    const enterPwd = intl.formatMessage({
        id: "login.enter.password"
    });
    const handleClickShowPassword = ()=>{
        setShowPassword(!showPassword);
    };
    const { run: handleSubmit  } = (0,ahooks__WEBPACK_IMPORTED_MODULE_12__.useThrottleFn)(()=>{
        setLoading(true);
        fetch("/api/auth/callback/credentials", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName,
                password,
                csrfToken: token
            })
        }).then((res)=>{
            window.location.href = res.url;
        // setLoading(false);
        });
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "login-form w-screen h-screen bg-scroll bg-center bg-cover",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container flex items-center justify-center h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_9___default()), {
                className: "mx-auto w-96",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10___default()), {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "login-form-header px-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "login-form-header-title mb-9",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "text-lg font-bold",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                                            id: "login.title"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "login-form-logo mx-auto",
                                    src: "/assets/images/Autu-Securities@2x.png"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: "bg-white p-6 sm:p-10 pb-0 rounded-md",
                            noValidate: true,
                            autoComplete: "off",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "csrfToken",
                                    type: "hidden",
                                    defaultValue: token
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    name: "email",
                                    id: "outlined-name",
                                    value: userName,
                                    label: enterEmail,
                                    margin: "normal",
                                    variant: "outlined",
                                    onChange: (e)=>setUserName(e.target.value),
                                    autoFocus: true,
                                    fullWidth: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    name: "passward",
                                    className: "mb-0",
                                    value: password,
                                    type: showPassword ? "text" : "password",
                                    id: "outlined-error",
                                    label: enterPwd,
                                    margin: "normal",
                                    variant: "outlined",
                                    InputProps: {
                                        endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            position: "end",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                "aria-label": "Toggle password visibility",
                                                onClick: handleClickShowPassword,
                                                children: showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_6___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5___default()), {})
                                            })
                                        })
                                    },
                                    onChange: (e)=>setPassward(e.target.value),
                                    fullWidth: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-right",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        className: "text-sm text-blue-600",
                                        href: "/forget",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                                            id: "login.enter.forget.pwd"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    disabled: !userName || !password || loading,
                                    onClick: handleSubmit,
                                    className: "w-full py-2 bg-blue-900",
                                    sx: {
                                        mt: 4,
                                        borderRadius: "20px"
                                    },
                                    variant: "contained",
                                    children: "登录"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm text-blue-600 m-6 text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        href: "/register",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                                            id: "login.enter.signUpAnotherAccount"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);


/***/ }),

/***/ 4759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7345);
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5295);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(765);
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7775);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3590);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_Footer__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_9__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_Footer__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












//获取初始化csrfToken
async function getServerSideProps(context) {
    const token = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.getCsrfToken)(context);
    return {
        props: {
            csrfToken: token || null
        }
    };
}
const LoginPage = (props)=>{
    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useSearchParams)();
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const code = searchParams.get("code");
        if (code && !isNaN(code)) {
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(_constant__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z[locale][Number(code)]);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Preloader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Autu | Securities",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        btnClass: "main-nav__btn",
                        extraClassName: "site-header-one__fixed-top"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        token: props.csrfToken
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7549:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Group");

/***/ }),

/***/ 8790:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Handyman");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 8792:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Info");

/***/ }),

/***/ 6787:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LiveTv");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 2753:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Newspaper");

/***/ }),

/***/ 7458:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Storefront");

/***/ }),

/***/ 6171:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Translate");

/***/ }),

/***/ 7608:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VerifiedUser");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Visibility");

/***/ }),

/***/ 7749:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VisibilityOff");

/***/ }),

/***/ 9001:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Wallet");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1011:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 7398:
/***/ ((module) => {

module.exports = require("ahooks");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 3126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 6949:
/***/ ((module) => {

module.exports = require("react-vcode");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,332,866,250,765], () => (__webpack_exec__(4759)));
module.exports = __webpack_exports__;

})();