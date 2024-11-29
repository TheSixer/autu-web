"use strict";
exports.id = 866;
exports.ids = [866];
exports.modules = {

/***/ 8:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/NavLinks.js
var NavLinks = __webpack_require__(3812);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(1011);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/icons-material/Home"
var Home_ = __webpack_require__(3467);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);
// EXTERNAL MODULE: external "@mui/icons-material/Handyman"
var Handyman_ = __webpack_require__(8790);
var Handyman_default = /*#__PURE__*/__webpack_require__.n(Handyman_);
// EXTERNAL MODULE: external "@mui/icons-material/LiveTv"
var LiveTv_ = __webpack_require__(6787);
var LiveTv_default = /*#__PURE__*/__webpack_require__.n(LiveTv_);
// EXTERNAL MODULE: external "@mui/icons-material/Newspaper"
var Newspaper_ = __webpack_require__(2753);
var Newspaper_default = /*#__PURE__*/__webpack_require__.n(Newspaper_);
// EXTERNAL MODULE: external "@mui/icons-material/Wallet"
var Wallet_ = __webpack_require__(9001);
var Wallet_default = /*#__PURE__*/__webpack_require__.n(Wallet_);
// EXTERNAL MODULE: external "@mui/icons-material/VerifiedUser"
var VerifiedUser_ = __webpack_require__(7608);
var VerifiedUser_default = /*#__PURE__*/__webpack_require__.n(VerifiedUser_);
// EXTERNAL MODULE: external "@mui/icons-material/Group"
var Group_ = __webpack_require__(7549);
var Group_default = /*#__PURE__*/__webpack_require__.n(Group_);
// EXTERNAL MODULE: external "@mui/icons-material/Info"
var Info_ = __webpack_require__(8792);
var Info_default = /*#__PURE__*/__webpack_require__.n(Info_);
// EXTERNAL MODULE: external "@mui/icons-material/Storefront"
var Storefront_ = __webpack_require__(7458);
var Storefront_default = /*#__PURE__*/__webpack_require__.n(Storefront_);
// EXTERNAL MODULE: external "@mui/icons-material/Translate"
var Translate_ = __webpack_require__(6171);
var Translate_default = /*#__PURE__*/__webpack_require__.n(Translate_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./components/SideMenu.js


























const SideMenu = (props)=>{
    const { isLogin  } = props;
    const [anchorEl, setAnchorEl] = external_react_.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const router = (0,router_.useRouter)();
    const { pathname , locale  } = (0,router_.useRouter)();
    const intl = (0,external_react_intl_.useIntl)();
    const home = intl.formatMessage({
        id: "head.menu.home"
    });
    const tools = intl.formatMessage({
        id: "head.menu.tools"
    });
    const market = intl.formatMessage({
        id: "head.menu.market"
    });
    const live = intl.formatMessage({
        id: "head.menu.live"
    });
    const news = intl.formatMessage({
        id: "head.menu.news"
    });
    const about = intl.formatMessage({
        id: "head.menu.about"
    });
    const ai = intl.formatMessage({
        id: "head.menu.ai"
    });
    const walletTxt = intl.formatMessage({
        id: "mine.index.personal.wallet"
    });
    const myAccount = intl.formatMessage({
        id: "mine.account"
    });
    const auditRecords = intl.formatMessage({
        id: "audit.records"
    });
    const navigate = (locale)=>{
        window.location.href = `${window.location.origin}${locale === "zh" ? "/zh" : ""}/${pathname}`;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
        sx: {
            width: 300
        },
        role: "presentation",
        onKeyDown: props.toggleDrawer,
        children: [
            isLogin ? /*#__PURE__*/ (0,jsx_runtime.jsxs)((List_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                            onClick: ()=>router.push("/personal-center"),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Wallet_default()), {
                                        sx: {
                                            color: "black"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    primary: walletTxt
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                            onClick: ()=>router.push("/personal-center/accounts"),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Group_default()), {
                                        sx: {
                                            color: "black"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    primary: myAccount
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                            onClick: ()=>router.push("/personal-center/approval-records"),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((VerifiedUser_default()), {
                                        sx: {
                                            color: "black"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    primary: auditRecords
                                })
                            ]
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                direction: "row",
                spacing: 2,
                sx: {
                    px: 4,
                    py: 2
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                        className: "bg-orange-400",
                        variant: "contained",
                        color: "warning",
                        onClick: ()=>window.location.href = "https://www.autubackend.com/login",
                        children: "登录"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                        variant: "outlined",
                        color: "warning",
                        onClick: ()=>window.location.href = "https://www.autubackend.com/register/trader",
                        children: "注册"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((List_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                            onClick: ()=>router.push("/"),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Home_default()), {
                                        sx: {
                                            color: "black"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    primary: home
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                            onClick: ()=>router.push("/market"),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Storefront_default()), {
                                        sx: {
                                            color: "black"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    primary: market
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                            onClick: ()=>router.push("/tools"),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Handyman_default()), {
                                        sx: {
                                            color: "black"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    primary: tools
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                            onClick: ()=>router.push("/promotion"),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((LiveTv_default()), {
                                        sx: {
                                            color: "black"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    primary: live
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                            onClick: ()=>router.push("/ai"),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Newspaper_default()), {
                                        sx: {
                                            color: "black"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    primary: ai
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                            onClick: ()=>router.push("/about"),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Info_default()), {
                                        sx: {
                                            color: "black"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    primary: about
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {}),
            /*#__PURE__*/ jsx_runtime.jsx((List_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                        onClick: handleClick,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                                children: /*#__PURE__*/ jsx_runtime.jsx((Translate_default()), {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                primary: locale === "en" ? "中文" : "English"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Menu_default()), {
                id: "basic-menu",
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                MenuListProps: {
                    "aria-labelledby": "basic-button"
                },
                children: router.locales.sort().map((locale)=>/*#__PURE__*/ jsx_runtime.jsx((MenuItem_default()), {
                        onClick: ()=>navigate(locale),
                        children: locale === "en" ? "English" : "中文"
                    }, locale))
            }),
            isLogin ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {}),
                    /*#__PURE__*/ jsx_runtime.jsx((List_default()), {
                        children: /*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                            children: /*#__PURE__*/ jsx_runtime.jsx((ListItemButton_default()), {
                                children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                    variant: "outlined",
                                    color: "warning",
                                    onClick: react_.signOut,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(external_react_intl_.FormattedMessage, {
                                        id: "head.menu.signOut"
                                    })
                                })
                            })
                        })
                    })
                ]
            }) : null
        ]
    });
};
/* harmony default export */ const components_SideMenu = (SideMenu);

// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(7898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var icons_material_Menu_ = __webpack_require__(3365);
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(5574);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.js

















const HeaderHome = (props)=>{
    const router = (0,router_.useRouter)();
    const [anchorEl, setAnchorEl] = (0,external_react_.useState)(null);
    const open = Boolean(anchorEl);
    const [sticky, setSticky] = (0,external_react_.useState)(false);
    const [isShowDrawer, setIsShowDrawer] = (0,external_react_.useState)();
    const { data: session  } = (0,react_.useSession)();
    const handleClick = (event)=>{
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const toggleDrawer = ()=>setIsShowDrawer(!isShowDrawer);
    const handleScroll = ()=>{
        if (window.scrollY > 70) {
            setSticky(true);
        } else if (window.scrollY < 70) {
            setSticky(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: `site-header-one stricky bg-black ${props.extraClassName} ${sticky === true ? "stricky-fixed stricked-menu" : " "}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "py-2 sm:py-5 container-fluid",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "site-header-one__logo flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "/",
                                children: props.thime === "white" ? /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/assets/images/Autu-Securities@2x.png",
                                    width: "258",
                                    alt: ""
                                }) : /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/assets/images/logo@2x.png",
                                    width: "258",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "ml-2 block laptop:hidden",
                                children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                    onClick: toggleDrawer,
                                    children: /*#__PURE__*/ jsx_runtime.jsx((icons_material_Menu_default()), {
                                        fontSize: "large",
                                        sx: {
                                            color: "#FFD936"
                                        }
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "main-nav__right",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "main-nav__main-navigation",
                                children: /*#__PURE__*/ jsx_runtime.jsx(NavLinks/* default */.Z, {})
                            }),
                            !session?.user ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "https://www.autubackend.com/register/trader",
                                        className: `thm-btn ${props.btnClass} active`,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx(external_react_intl_.FormattedMessage, {
                                                id: "head.menu.newAccount"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "https://www.autubackend.com/login",
                                        className: `thm-btn ${props.btnClass}`,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx(external_react_intl_.FormattedMessage, {
                                                id: "head.menu.signIn"
                                            })
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                sx: {
                                    ml: 2,
                                    cursor: "pointer"
                                },
                                direction: "row",
                                alignItems: "center",
                                spacing: 1,
                                onClick: handleClick,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                        sx: {
                                            width: 32,
                                            height: 32,
                                            bgcolor: colors_.deepPurple[500]
                                        },
                                        children: session?.user?.name.slice(0, 1)
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        variant: "button",
                                        children: session?.user?.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Menu_default()), {
                                        id: "basic-menu",
                                        anchorEl: anchorEl,
                                        open: open,
                                        onClose: handleClose,
                                        MenuListProps: {
                                            "aria-labelledby": "basic-button"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((MenuItem_default()), {
                                                sx: {
                                                    width: 160
                                                },
                                                onClick: ()=>router.push("/personal-center"),
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-base",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(external_react_intl_.FormattedMessage, {
                                                        id: "mine.index.personal.info"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((MenuItem_default()), {
                                                sx: {
                                                    width: 160
                                                },
                                                onClick: ()=>router.push("/personal-center/verify"),
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-base",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(external_react_intl_.FormattedMessage, {
                                                        id: "mine.index.personal.verify"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((MenuItem_default()), {
                                                sx: {
                                                    width: 160
                                                },
                                                onClick: react_.signOut,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-base",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(external_react_intl_.FormattedMessage, {
                                                        id: "head.menu.signOut"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Drawer_default()), {
                anchor: "left",
                open: isShowDrawer,
                onClose: toggleDrawer,
                children: /*#__PURE__*/ jsx_runtime.jsx(components_SideMenu, {
                    isLogin: !!session?.user,
                    toggleDrawer: toggleDrawer
                })
            })
        ]
    });
};
/* harmony default export */ const Header = (HeaderHome);


/***/ }),

/***/ 7345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9072);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
react_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Layout = (props)=>{
    const [scrollTop, setScrollTop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        try {
            localStorage.setItem("_lang", locale);
        } catch (error) {}
    }, []);
    const handleScrollTop = ()=>{
        if (window.scrollY > 70) {
            setScrollTop(true);
        } else if (window.scrollY < 70) {
            setScrollTop(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .animation */ .o)();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", handleScrollTop);
        return ()=>{
            window.removeEventListener("scroll", handleScrollTop);
        };
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "home",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "Autu Securities | 澳图证券：智能化时代全球领先的互联网券商"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: "提供便捷的全球金融资产投资通道，可在线交易港美股、股指、期货、黄金、原油、加密资产CFD和货币对等"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "https://www.autu.finance/assets/images/banner01@2x.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        itemprop: "description",
                        content: "提供便捷的全球金融资产投资通道，可在线交易港美股、股指、期货、黄金、原油、加密资产CFD和货币对等"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        itemprop: "name",
                        content: "Autu Securities | 澳图证券：智能化时代全球领先的互联网券商"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "美股,港股,中概股,期货,股指,加密货币,外汇,衍生品,黄金,原油,澳图证券,澳图,autu,autu securities, 澳图期货"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        itemprop: "image",
                        content: "https://www.autu.finance/assets/images/banner01@2x.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: props.pageTitle
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "light"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "page-wrapper",
                children: props.children
            }),
            scrollTop === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Link, {
                to: "home",
                smooth: true,
                duration: 500,
                className: "scroll-to-top",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fa fa-angle-up"
                })
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);



// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const NavLinks = ()=>{
    const [dropdownStatus, setDropdownStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleDropdownStatus = ()=>{
        setDropdownStatus(!dropdownStatus);
    };
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { locale , locales  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
    const home = intl.formatMessage({
        id: "head.menu.home"
    });
    const tools = intl.formatMessage({
        id: "head.menu.tools"
    });
    const market = intl.formatMessage({
        id: "head.menu.market"
    });
    const live = intl.formatMessage({
        id: "head.menu.live"
    });
    const news = intl.formatMessage({
        id: "head.menu.news"
    });
    const about = intl.formatMessage({
        id: "head.menu.about"
    });
    const ai = intl.formatMessage({
        id: "head.menu.ai"
    });
    const navigate = (locale)=>{
        window.location.href = `${window.location.origin}${locale === "zh" ? "/zh" : ""}`;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "main-nav__navigation-box",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `laptop:px-1.5 mxl:px-4 ${route.pathname === "/" ? "active" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    prefetch: false,
                    href: "/",
                    children: home
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `laptop:px-1.5 mxl:px-4 ${route.pathname === "/market" ? "active" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    prefetch: false,
                    href: "/market",
                    children: market
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `laptop:px-1.5 mxl:px-4 ${route.pathname === "/tools" ? "active" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    prefetch: false,
                    href: "/tools",
                    children: tools
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `laptop:px-1.5 mxl:px-4 ${route.pathname === "/promotion" ? "active" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    prefetch: false,
                    href: "/promotion",
                    children: live
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `laptop:px-1.5 mxl:px-4 ${route.pathname === "/ai" ? "active" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    prefetch: false,
                    href: "/ai",
                    children: ai
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `laptop:px-1.5 mxl:px-4 ${route.pathname === "/about" ? "active" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    prefetch: false,
                    href: "/about",
                    children: about
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "laptop:px-1.5 mxl:px-4 dropdown language",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-gray-50 hover:text-black",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                locale === "en" ? "中文" : "English",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-angle-down ml-2",
                                    onClick: handleDropdownStatus
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: dropdownStatus === true ? "active" : null,
                        children: [
                            ...locales
                        ].sort().map((locale)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    onClick: ()=>navigate(locale),
                                    children: locale === "en" ? "English" : "中文"
                                })
                            }, locale))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLinks);


/***/ }),

/***/ 5295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



// import PreloaderImage from "../assets/images/loader.png";
const Preloader = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleStart = (url)=>url !== router.pathname && setLoading(true);
        // handleComplete event was not firing
        const handleComplete = (url)=>url === router.pathname && setLoading(false);
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    });
    return loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "preloader",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "preloader__image bg-black w-24 h-24"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);


/***/ }),

/***/ 9072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ animation)
/* harmony export */ });
// animation
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};


/***/ })

};
;