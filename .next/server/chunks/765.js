"use strict";
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_vcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6949);
/* harmony import */ var react_vcode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_vcode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7398);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ahooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3250);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
([_services__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Footer = ()=>{
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    const nameTxt = intl.formatMessage({
        id: "footer.form.name"
    });
    const tel = intl.formatMessage({
        id: "footer.form.tel"
    });
    const emailTxt = intl.formatMessage({
        id: "footer.form.email"
    });
    const recaptcha = intl.formatMessage({
        id: "footer.form.recaptcha"
    });
    const inquiry = intl.formatMessage({
        id: "footer.form.inquiry"
    });
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [vcode, setVcode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const vcodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { run: handleSubmit  } = (0,ahooks__WEBPACK_IMPORTED_MODULE_4__.useThrottleFn)(()=>{
        setLoading(true);
        if (!name || !phone || !email || !code || !content) {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warn("请填写完整信息");
            return false;
        }
        if (vcode.toLocaleLowerCase() !== code.toLocaleLowerCase()) {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warn("验证码输入有误");
            vcodeRef.current.onClick();
            return false;
        }
        (0,_services__WEBPACK_IMPORTED_MODULE_5__/* .saveConsult */ .eE)({
            name,
            phone,
            email,
            content
        }).then(({ code  })=>{
            vcodeRef.current.onClick();
            setName("");
            setPhone("");
            setEmail("");
            setCode("");
            setContent("");
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("感谢您的反馈，您的问题已经提交，我们会及时联系您！");
            setLoading(false);
        });
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: "site-footer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "site-footer__upper",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "contact-form-wrapper wow fadeInLeft",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            onSubmit: (e)=>e.preventDefault(),
                                            className: "contact-form",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form_group",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "form_title",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                            id: "footer.form.title"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form_group_grid block sm:flex",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "form_group_grid-item",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "form_group",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "far fa-user"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "text",
                                                                            className: "form_control",
                                                                            placeholder: nameTxt,
                                                                            value: name,
                                                                            onChange: (e)=>setName(e.target.value),
                                                                            name: "name",
                                                                            required: true
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "form_group",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "far fa-phone-plus"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "tel",
                                                                            className: "form_control",
                                                                            placeholder: tel,
                                                                            value: phone,
                                                                            onChange: (e)=>setPhone(e.target.value),
                                                                            name: "number",
                                                                            required: true
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "form_group",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "far fa-envelope"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "email",
                                                                            className: "form_control",
                                                                            placeholder: emailTxt,
                                                                            value: email,
                                                                            name: "email",
                                                                            onChange: (e)=>setEmail(e.target.value),
                                                                            required: true
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "form_group",
                                                                    style: {
                                                                        display: "flex"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "far fa-map-marker-exclamation"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "text",
                                                                            className: "form_control",
                                                                            value: code,
                                                                            placeholder: recaptcha,
                                                                            onChange: (e)=>setCode(e.target.value),
                                                                            name: "code",
                                                                            maxLength: 4,
                                                                            required: true
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_vcode__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            ref: vcodeRef,
                                                                            className: "verify-code",
                                                                            id: "vcode",
                                                                            width: 90,
                                                                            onChange: (value)=>setVcode(value)
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "form_group_grid-item",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form_group_out",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "far fa-pen-fancy"
                                                                            }),
                                                                            inquiry
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                        className: "form_control",
                                                                        rows: 3,
                                                                        placeholder: "",
                                                                        name: "message",
                                                                        value: content,
                                                                        onChange: (e)=>setContent(e.target.value)
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form_group",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "main-btn primary-btn",
                                                        onClick: handleSubmit,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                            id: "footer.form.submit"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "footer-widget__links-wrap wow fadeInRight",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "footer-widget mt-12",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "list-unstyled footer-widget__links-list",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "footer-widget__links-list-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                                        id: "footer.info.website"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "https://www.autu.finance/"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "footer-widget__links-list-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                                        id: "footer.info.email"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "cs@autu.finance"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "footer-widget__links-list-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                                        id: "footer.info.address"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Autu Securities International Inc."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                                            id: "footer.info.vanuatu"
                                                                        }),
                                                                        "Law Partners House, Kumul Highway, Port Vila Republic of Vanuatu."
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "AUTU MARKETS PTY LIMITED"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                                            id: "footer.info.australia"
                                                                        }),
                                                                        "Suite 135, 78 Gawler Place, Adelaide, SA 5000, Australia"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "footer-widget__links-list-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                                        id: "footer.info.tel"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                                            id: "footer.info.hk"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "tel:+852 56413620",
                                                                            children: "+852 56413620"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                                            id: "footer.info.vanuatu"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "tel:+678 7575889",
                                                                            children: "+678 7575889"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                                            id: "footer.info.australia"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "tel:+61 0426660218",
                                                                            children: "+61 0426660218"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "site-footer__bottom",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "site-footer__bottom-contain",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/images/logo@2x.png"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "px-4 sm:px-0 wow fadeInDown",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                        id: "footer.info.disclaimer"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "px-4 sm:px-0 wow fadeInDown",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                        id: "footer.info.disclaimer.content"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container text-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "site-footer__bottom-links",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/conditions",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "footer.list.agreement"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "footer.list.risk"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "footer.list.amlAndCtf"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/privacypolicy",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "footer.list.policy.agreement"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "footer.list.interest.conflicts.policy"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "footer.list.execution.policy"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;