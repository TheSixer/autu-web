"use strict";
(() => {
var exports = {};
exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 3457:
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
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2113);
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1929);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7236);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5374);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6563);
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6096);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6115);
/* harmony import */ var _mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2268);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(7398);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ahooks__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(3250);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(3590);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_31__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_6__, _services__WEBPACK_IMPORTED_MODULE_28__, react_toastify__WEBPACK_IMPORTED_MODULE_30__]);
([_components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_6__, _services__WEBPACK_IMPORTED_MODULE_28__, react_toastify__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
































const getServerSideProps = async (context)=>{
    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(context.req, context.res, _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__/* .authOptions */ .L);
    const resp = await fetch("https://autu.finance/autu-api" + "/exchange/rate/list", {
        headers: {
            token: session.user.accessToken
        }
    });
    const { code , data: rate  } = await resp.json();
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
            rate
        }
    };
};
const types = [
    {
        name: "USDT-TRC20",
        payName: "TNwzeoaW3gLRLEugxa8ghUhtMK3RFGjDNm",
        barcode: "https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/trc20.jpg"
    },
    {
        name: "USDC-TRC20",
        payName: "TNwzeoaW3gLRLEugxa8ghUhtMK3RFGjDNm",
        barcode: "https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/trc20.jpg"
    },
    {
        name: "ETH-ERC20",
        payName: "0x0fc51e38582596Dfa9DaE5150972c69fC8Fbc5D1",
        barcode: "https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/erc20.jpg"
    },
    {
        name: "USDT-ERC20",
        payName: "0x0fc51e38582596Dfa9DaE5150972c69fC8Fbc5D1",
        barcode: "https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/erc20.jpg"
    },
    {
        name: "USDC-ERC20",
        payName: "0x0fc51e38582596Dfa9DaE5150972c69fC8Fbc5D1",
        barcode: "https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/erc20.jpg"
    },
    {
        name: "UDST-BEP20",
        payName: "0xC968969483eD38b3144B639332432a70c86192A8",
        barcode: "https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/bep20.jpg"
    },
    {
        name: "USDC-BEP20",
        payName: "0xC968969483eD38b3144B639332432a70c86192A8",
        barcode: "https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/bep20.jpg"
    },
    {
        name: "BUSD-BEP20",
        payName: "0xC968969483eD38b3144B639332432a70c86192A8",
        barcode: "https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/bep20.jpg"
    }
];
// const VisaHelpIcon = ({disabled}) => (
//   <Stack>
//     <img className={`h-16 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/visa_help@2x.png" />
//     <span>第三方支付</span>
//   </Stack>
// );
const VisaIcon = ({ disabled  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: `h-16 ${disabled ? "filter grayscale" : ""}`,
                src: "/assets/images/pay/visa@2x.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                    id: "mine.index.recharge.thirdPay"
                })
            })
        ]
    });
const USDTHelpIcon = ({ disabled  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: `h-16 ${disabled ? "filter grayscale" : ""}`,
                src: "/assets/images/pay/usdt_help@2x.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                    id: "mine.index.recharge.tnternationalWire"
                })
            })
        ]
    });
const USDTIcon = ({ disabled  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: `h-16 ${disabled ? "filter grayscale" : ""}`,
                src: "/assets/images/pay/usdt@2x.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                    id: "mine.index.recharge.digitalCurrency"
                })
            })
        ]
    });
const NumericFormatRMB = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function NumericFormatCustom(props, ref) {
    const { onChange , ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_number_format__WEBPACK_IMPORTED_MODULE_17__.NumericFormat, {
        ...other,
        getInputRef: ref,
        onValueChange: (values)=>{
            onChange({
                target: {
                    name: props.name,
                    value: values.value
                }
            });
        },
        thousandSeparator: true,
        valueIsNumericString: true,
        prefix: "\xa5"
    });
});
const NumericFormatUSD = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function NumericFormatCustom(props, ref) {
    const { onChange , ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_number_format__WEBPACK_IMPORTED_MODULE_17__.NumericFormat, {
        ...other,
        getInputRef: ref,
        onValueChange: (values)=>{
            onChange({
                target: {
                    name: props.name,
                    value: values.value
                }
            });
        },
        thousandSeparator: true,
        valueIsNumericString: true,
        prefix: "$"
    });
});
const HomePage = ({ rate  })=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [tips, setTips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userPayImg, setUserPayImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [channel, setChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("cardPay");
    const [payType, setPayType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_29__.useRouter)();
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_31__.useIntl)();
    const rmbAmount = intl.formatMessage({
        id: "mine.index.personal.recharge.amount.rmb"
    });
    const usdAmount = intl.formatMessage({
        id: "mine.index.personal.recharge.amount.usd"
    });
    const lessAmount = intl.formatMessage({
        id: "mine.index.personal.recharge.amount.less"
    });
    const orderCreatedTxt = intl.formatMessage({
        id: "mine.index.personal.order.created"
    });
    const usdCurrency = rate.find(({ currency  })=>currency === "USD");
    const { run: handleConfirm  } = (0,ahooks__WEBPACK_IMPORTED_MODULE_27__.useThrottleFn)(()=>{
        setLoading(true);
        (0,_services__WEBPACK_IMPORTED_MODULE_28__/* .createOrder */ .LV)({
            // type: channel === '1012' ? 'cardPay' : channel,
            type: channel,
            amount: amount * 100,
            // channel: channel === '1012' ? '1012' : '',
            userPayImg
        }).then(({ code , data  })=>{
            if (!code) {
                if (channel === "cardPay") {
                    window.open(`${"http://coinpay99.com/pay"}?amount=${amount}&rate=${usdCurrency?.rate}`, "_blank ");
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_30__.toast.success(orderCreatedTxt);
                }
                setTips(true);
            }
            setLoading(false);
        });
    });
    // const handleSubmit = () => {
    //   if (channel === '1012') {
    //     handleConfirm();
    //   } else {
    //     handleConfirm();
    //   }
    // }
    const onFileChange = (file)=>{
        (0,_services__WEBPACK_IMPORTED_MODULE_28__/* .getPolicy */ .SP)().then(({ code , data  })=>{
            if (!code) {
                uploadImg(data, file);
            }
        });
    };
    const uploadImg = (params, file)=>{
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
        }).then(()=>{
            fetchImg(`${params.dir}/${file.name}`);
        });
    };
    const fetchImg = async (url)=>{
        (0,_services__WEBPACK_IMPORTED_MODULE_28__/* .getImgUrl */ .wD)(url).then(({ code , data  })=>{
            if (!code) {
                setUserPayImg(data);
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPayType(null);
        setAmount("");
        setUserPayImg("");
    }, [
        channel,
        tips
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container p-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-2 mb-8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/personal-center",
                            className: "inline-flex items-center text-sm",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "w-4 h-4 rotate-180 mr-1",
                                    src: "/assets/images/arrow.png"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                        id: "head.menu.back"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default()), {
                        sx: {
                            maxWidth: 850,
                            mx: "auto",
                            p: 2
                        },
                        className: "sm:p-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "mb-4 text-black font-semibold",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                    id: "mine.index.personal.recharge"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default()), {
                                className: "sm:px-32",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    direction: "column",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_15___default()), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                    id: "demo-radio-buttons-group-label",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                        id: "mine.index.recharge.payType"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                    row: true,
                                                    "aria-labelledby": "demo-radio-buttons-group-label",
                                                    value: channel,
                                                    onChange: (e)=>setChannel(e.target.value),
                                                    name: "radio-buttons-group",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                            value: "cardPay",
                                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_12___default()), {}),
                                                            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VisaIcon, {})
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                            value: "internationalTransfer",
                                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_12___default()), {}),
                                                            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(USDTHelpIcon, {})
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                            value: "digitalCurrency",
                                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_12___default()), {}),
                                                            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(USDTIcon, {})
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        channel === "cardPay" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_21___default()), {
                                            sx: {
                                                my: 2,
                                                maxWidth: 350
                                            },
                                            error: !!amount && amount < 100,
                                            label: rmbAmount,
                                            name: "numberformat",
                                            value: amount,
                                            helperText: amount && amount < 100 ? lessAmount : "",
                                            onChange: (e)=>setAmount(e.target.value),
                                            InputProps: {
                                                inputComponent: NumericFormatRMB
                                            },
                                            fullWidth: true
                                        }) : null,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_21___default()), {
                                            sx: {
                                                mt: 2,
                                                maxWidth: 350
                                            },
                                            label: usdAmount,
                                            name: "numberformat",
                                            value: channel === "internationalTransfer" || channel === "digitalCurrency" ? amount : usdCurrency ? Math.floor(amount / usdCurrency?.rate * 100) / 100 : 0,
                                            onChange: (e)=>setAmount(e.target.value),
                                            InputProps: {
                                                inputComponent: NumericFormatUSD
                                            },
                                            disabled: channel === "cardPay",
                                            fullWidth: true
                                        }),
                                        channel === "internationalTransfer" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                my: 2
                                            },
                                            variant: "outlined",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                sx: {
                                                    p: 2
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "mb-2 text-base font-semibold",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                            id: "mine.index.recharge.bankInfo"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex mb-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base flex-shrink-0 w-32",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                    id: "mine.index.recharge.bankName"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base break-words",
                                                                children: "Pacific Private Bank"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex mb-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base flex-shrink-0 w-32",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                    id: "mine.index.recharge.backAddress"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base break-words",
                                                                children: "1st floor, Govant Building, 278 Kumul Hwy, Port Vila"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex mb-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base flex-shrink-0 w-32",
                                                                children: "SWIFT："
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base break-words",
                                                                children: "PPBLVUVUXXX"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "my-2 text-base font-semibold",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                            id: "mine.index.recharge.recieveInfo"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex mb-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base flex-shrink-0 w-32",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                    id: "mine.index.recharge.recieveName"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base break-words",
                                                                children: "Autu Securities International Inc. – Client Account"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex mb-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base flex-shrink-0 w-32",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                    id: "mine.index.recharge.recieveAccount"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base break-words",
                                                                children: "6550-1-80008"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex mb-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base flex-shrink-0 w-32",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                    id: "mine.index.recharge.recieveCurrency"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base break-words",
                                                                children: "USD"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex mb-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base flex-shrink-0 w-32",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                    id: "mine.index.recharge.recieveAddress"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base break-words",
                                                                children: "Law Partners House, Po Box 212, Port Vila, Vanuatu"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: "text-base flex-shrink-0 w-32",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                        id: "mine.index.recharge.remark"
                                                                    }),
                                                                    "："
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-base break-words",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                    id: "mine.index.recharge.nameSpell"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }) : null,
                                        channel === "digitalCurrency" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mt-2 text-base text-gray-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                        id: "mine.index.recharge.currency"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    direction: "row",
                                                    flexWrap: "wrap",
                                                    children: types.map((opt)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            className: payType?.name === opt.name ? "bg-yellow-500" : "",
                                                            variant: payType?.name === opt.name ? "contained" : "outlined",
                                                            sx: {
                                                                m: 1
                                                            },
                                                            color: "warning",
                                                            onClick: ()=>setPayType(opt),
                                                            children: opt.name
                                                        }, opt.name))
                                                }),
                                                payType ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    sx: {
                                                        maxWidth: 520,
                                                        my: 2
                                                    },
                                                    variant: "outlined",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                className: "mb-4 text-base font-semibold",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                    id: "mine.index.recharge.billingInfo"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-base flex-shrink-0 w-24",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                            id: "mine.index.recharge.digitalCurrency"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-base break-words",
                                                                        children: payType.name
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex my-2",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-base flex-shrink-0 w-24",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                            id: "mine.index.recharge.walletAddress"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-base break-all",
                                                                        children: payType.payName
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-base flex-shrink-0 w-24",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                            id: "mine.index.recharge.barcode"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-base break-words",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            width: 180,
                                                                            src: payType.barcode
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "mt-4 text-base text-gray-500",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                                    id: "mine.index.recharge.warning"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }) : null
                                            ]
                                        }) : null,
                                        channel !== "cardPay" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "my-2 text-base text-gray-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                        id: "mine.index.recharge.uploadPaymentVoucher"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                    className: "w-64 h-36 border border-gray-400 bg-gray-100",
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
                                                            onChange: (e)=>onFileChange(e.target.files[0])
                                                        }),
                                                        !userPayImg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PhotoCamera__WEBPACK_IMPORTED_MODULE_20___default()), {
                                                            fontSize: "large"
                                                        }),
                                                        userPayImg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "w-full h-full",
                                                            src: userPayImg
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : null,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            className: `${!loading ? "bg-blue-900" : ""}`,
                                            loading: loading,
                                            disabled: !amount || !payType && channel === "digitalCurrency",
                                            sx: {
                                                mt: 4,
                                                py: 1.5,
                                                borderRadius: 6,
                                                maxWidth: 350
                                            },
                                            variant: "contained",
                                            onClick: handleConfirm,
                                            fullWidth: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_31__.FormattedMessage, {
                                                id: "mine.index.submit"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_22___default()), {
                open: tips,
                keepMounted: true,
                onClose: ()=>setTips(false),
                "aria-describedby": "alert-dialog-slide-description",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_26___default()), {
                        children: "提示"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_24___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_25___default()), {
                            id: "alert-dialog-slide-description",
                            children: "订单已提交，请确认您已完成转账支付，如支付已完成，您可前往审核页面查看当前充值记录"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_23___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                onClick: ()=>setTips(false),
                                children: "继续充值"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                onClick: ()=>router.push("/personal-center/approval-records"),
                                children: "立即前往"
                            })
                        ]
                    })
                ]
            })
        ]
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

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 9404:
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContentText");

/***/ }),

/***/ 2468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 8185:
/***/ ((module) => {

module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ 6096:
/***/ ((module) => {

module.exports = require("@mui/material/FormLabel");

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

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 5374:
/***/ ((module) => {

module.exports = require("@mui/material/Radio");

/***/ }),

/***/ 6563:
/***/ ((module) => {

module.exports = require("@mui/material/RadioGroup");

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

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,866,250,582,236,929], () => (__webpack_exec__(3457)));
module.exports = __webpack_exports__;

})();