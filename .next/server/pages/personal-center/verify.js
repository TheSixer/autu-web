"use strict";
(() => {
var exports = {};
exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 6518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7236);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6115);
/* harmony import */ var _mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8369);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7398);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ahooks__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2113);
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1929);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3250);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3590);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_15__, react_toastify__WEBPACK_IMPORTED_MODULE_17__]);
([_components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_15__, react_toastify__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const getServerSideProps = async (context)=>{
    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_13__.getServerSession)(context.req, context.res, _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_14__/* .authOptions */ .L);
    const res = await fetch("https://autu.finance/autu-api" + "/user/info", {
        headers: {
            token: session.user.accessToken
        }
    });
    const { code , data  } = await res.json();
    const resp = await fetch("https://autu.finance/autu-api" + "/oss/verify/policy", {
        headers: {
            token: session.user.accessToken
        }
    });
    const { data: policy  } = await resp.json();
    if (code) {
        return {
            redirect: {
                permanent: false,
                destination: "/personal-center"
            }
        };
    }
    return {
        // 在组件 props 中 可以拿到 data
        props: {
            userInfo: data,
            policy
        }
    };
};
const HomePage = ({ userInfo , policy  })=>{
    const { idCardInfo  } = userInfo;
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [frontPhotoUrl, setFrontPhotoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [backendPhotoUrl, setBackendPhotoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [frontPhoto, setFrontPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [backendPhoto, setBackendPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_18__.useIntl)();
    const noUploadTxt = intl.formatMessage({
        id: "verify.noUpload"
    });
    const waitingAduitTxt = intl.formatMessage({
        id: "verify.waiting.aduit"
    });
    const underReviewTxt = intl.formatMessage({
        id: "mine.index.personal.underReview"
    });
    const passedTxt = intl.formatMessage({
        id: "mine.index.personal.passed"
    });
    const rejectedTxt = intl.formatMessage({
        id: "mine.index.personal.rejected"
    });
    const realnameTxt = intl.formatMessage({
        id: "mine.index.personal.realname"
    });
    const { run: handleSubmit  } = (0,ahooks__WEBPACK_IMPORTED_MODULE_12__.useThrottleFn)(()=>{
        setLoading(true);
        (0,_services__WEBPACK_IMPORTED_MODULE_15__/* .saveCardPic */ .$v)({
            frontPhotoUrl,
            backendPhotoUrl,
            name: userName
        }).then(({ code  })=>{
            if (!code) {
                react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast.success(waitingAduitTxt, {
                    autoClose: 2000,
                    onClose: ()=>router.push("/personal-center")
                });
            }
        });
    });
    const onChange = (file, id)=>{
        uploadImg(policy, file, id);
    };
    const uploadImg = (params, file, id)=>{
        const formdata = new FormData();
        formdata.append("OSSAccessKeyId", params.accessid);
        formdata.append("key", params.dir + "/" + file.name);
        formdata.append("success_action_status", "200");
        formdata.append("policy", params.policy);
        formdata.append("signature", params.signature);
        formdata.append("file", file);
        fetch(params.host, {
            method: "POST",
            body: formdata
        }).then((res)=>{
            !id ? setFrontPhotoUrl(`${params.dir}/${file.name}`) : setBackendPhotoUrl(`${params.dir}/${file.name}`);
            fetchImg(`${params.dir}/${file.name}`, id);
        });
    };
    const fetchImg = async (url, id)=>{
        const { code , data  } = await (0,_services__WEBPACK_IMPORTED_MODULE_15__/* .getImgUrl */ .wD)(url);
        if (!code) {
            !id ? setFrontPhoto(data) : setBackendPhoto(data);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "p-2 mb-8 sm:mb-20",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/personal-center",
                        className: "inline-flex items-center text-sm",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "w-4 h-4 rotate-180 mr-1",
                                src: "/assets/images/arrow.png"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
                                    id: "head.menu.back"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default()), {
                    className: "mt-4 mx-auto max-w-sm",
                    variant: "outlined",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                    className: "text-black font-semibold",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
                                            id: "verify.userInfo"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            size: "small",
                                            label: idCardInfo?.auditStatus === 0 ? underReviewTxt : idCardInfo?.auditStatus === 1 ? passedTxt : idCardInfo?.auditStatus === 2 ? rejectedTxt : noUploadTxt,
                                            color: "success",
                                            variant: "outlined"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-2 mb-4 text-sm text-gray-500",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
                                        id: "verify.provideTxt"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    className: "w-full h-36 border border-gray-400 bg-gray-100",
                                    "aria-label": "upload picture",
                                    sx: {
                                        borderRadius: "10px"
                                    },
                                    component: "label",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            hidden: true,
                                            accept: "image/*",
                                            type: "file",
                                            onChange: (e)=>onChange(e.target.files[0], 0)
                                        }),
                                        !frontPhoto && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            fontSize: "large"
                                        }),
                                        frontPhoto && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "w-full h-full",
                                            src: frontPhoto
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    className: "w-full h-36 border border-gray-400 bg-gray-100",
                                    "aria-label": "upload picture",
                                    sx: {
                                        my: 4,
                                        borderRadius: "10px"
                                    },
                                    component: "label",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            hidden: true,
                                            accept: "image/*",
                                            type: "file",
                                            onChange: (e)=>onChange(e.target.files[0], 1)
                                        }),
                                        !backendPhoto && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            fontSize: "large"
                                        }),
                                        backendPhoto && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "w-full h-full",
                                            src: backendPhoto
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    label: realnameTxt,
                                    value: userName,
                                    onChange: (e)=>setUserName(e.target.value),
                                    fullWidth: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    className: `${!loading ? "bg-blue-900" : ""}`,
                                    loading: loading,
                                    disabled: !frontPhotoUrl || !backendPhotoUrl || !userName,
                                    sx: {
                                        mt: 4,
                                        py: 1.5,
                                        borderRadius: 6
                                    },
                                    variant: "contained",
                                    onClick: handleSubmit,
                                    fullWidth: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
                                        id: "mine.index.submit"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

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

/***/ 6115:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PhotoCamera");

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

/***/ 9001:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Wallet");

/***/ }),

/***/ 6829:
/***/ ((module) => {

module.exports = require("@mui/lab/LoadingButton");

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

/***/ 8369:
/***/ ((module) => {

module.exports = require("@mui/material/Chip");

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

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 2113:
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,866,250,582,236,929], () => (__webpack_exec__(6518)));
module.exports = __webpack_exports__;

})();