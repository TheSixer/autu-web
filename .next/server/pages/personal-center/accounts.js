"use strict";
(() => {
var exports = {};
exports.id = 847;
exports.ids = [847];
exports.modules = {

/***/ 3208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EnhancedTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7308);
/* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7398);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ahooks__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3250);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3590);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_25__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services__WEBPACK_IMPORTED_MODULE_23__, react_toastify__WEBPACK_IMPORTED_MODULE_24__]);
([_services__WEBPACK_IMPORTED_MODULE_23__, react_toastify__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























function EnhancedTableHead(props) {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_25__.useIntl)();
    const loginTxt = intl.formatMessage({
        id: "account.login"
    });
    const statusTxt = intl.formatMessage({
        id: "status"
    });
    const balanceTxt = intl.formatMessage({
        id: "balance"
    });
    const currencyTxt = intl.formatMessage({
        id: "currency"
    });
    const leverTxt = intl.formatMessage({
        id: "lever"
    });
    const actionsTxt = intl.formatMessage({
        id: "actions"
    });
    const headCells = [
        {
            id: "login",
            numeric: false,
            disablePadding: false,
            label: loginTxt
        },
        {
            id: "status",
            numeric: true,
            disablePadding: false,
            label: statusTxt
        },
        {
            id: "leverageInCents",
            numeric: true,
            disablePadding: false,
            label: leverTxt
        },
        {
            id: "balance",
            numeric: true,
            disablePadding: false,
            label: balanceTxt
        },
        {
            id: "depositCurrency",
            numeric: true,
            disablePadding: false,
            label: currencyTxt
        }
    ];
    const { order , orderBy  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default()), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9___default()), {
            children: [
                headCells.map((headCell)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                        align: headCell.numeric ? "right" : "left",
                        padding: headCell.disablePadding ? "none" : "normal",
                        sortDirection: orderBy === headCell.id ? order : false,
                        children: headCell.label
                    }, headCell.id)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                    align: "right",
                    children: actionsTxt
                })
            ]
        })
    });
}
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
function EnhancedTable({ balance , rate , onUpdate  }) {
    const [initLoading, setInitLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [dense, setDense] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(10);
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [currentRow, setCurrentRow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [dataList, setDataList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_25__.useIntl)();
    const inSuccessTxt = intl.formatMessage({
        id: "account.transfer.in.success"
    });
    const outSuccessTxt = intl.formatMessage({
        id: "account.transfer.out.success"
    });
    const noBalanceTxt = intl.formatMessage({
        id: "account.no.balance"
    });
    const noAccountsTxt = intl.formatMessage({
        id: "account.no.accounts"
    });
    const fundTxt = intl.formatMessage({
        id: "account.fund"
    });
    const withdrawTxt = intl.formatMessage({
        id: "account.withdraw"
    });
    const transferIn = intl.formatMessage({
        id: "account.transfer.in"
    });
    const transferOut = intl.formatMessage({
        id: "account.transfer.out"
    });
    const amountTxt = intl.formatMessage({
        id: "mine.index.personal.amount"
    });
    const confirmTxt = intl.formatMessage({
        id: "confirm"
    });
    const cancelTxt = intl.formatMessage({
        id: "cancel"
    });
    const handleClickOpen = (row, type)=>{
        setAmount("");
        setType(type);
        setCurrentRow(row);
        setOpen(true);
    };
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const usdCurrency = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!rate || !currentRow) {
            return null;
        }
        return rate.find(({ currency  })=>currency === currentRow.depositCurrency);
    }, [
        rate,
        currentRow
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchList();
    }, []);
    const fetchList = ()=>{
        (0,_services__WEBPACK_IMPORTED_MODULE_23__/* .fetchAccountList */ .EN)().then(({ code , data  })=>{
            if (!code) {
                setDataList(data);
                setInitLoading(false);
            }
        });
    };
    const { run: handleConfirm  } = (0,ahooks__WEBPACK_IMPORTED_MODULE_22__.useThrottleFn)(()=>{
        if (!type) {
            handleTransfer();
        } else {
            handleWithdraw();
        }
    });
    const handleTransfer = ()=>{
        setLoading(true);
        (0,_services__WEBPACK_IMPORTED_MODULE_23__/* .transferToTrader */ .R4)({
            login: currentRow.login,
            amount: amount * 100
        }).then(({ code  })=>{
            if (!code) {
                react_toastify__WEBPACK_IMPORTED_MODULE_24__.toast.success(inSuccessTxt);
                fetchList();
                onUpdate();
                setOpen(false);
            }
            setLoading(false);
        });
    };
    const handleWithdraw = ()=>{
        if (amount * 100 > currentRow.balance) {
            react_toastify__WEBPACK_IMPORTED_MODULE_24__.toast.warn(noBalanceTxt);
            return;
        }
        setLoading(true);
        (0,_services__WEBPACK_IMPORTED_MODULE_23__/* .transferToWallet */ .Zd)({
            login: currentRow.login,
            amount: amount * 100
        }).then(({ code  })=>{
            setLoading(false);
            if (!code) {
                react_toastify__WEBPACK_IMPORTED_MODULE_24__.toast.success(outSuccessTxt);
                fetchList();
                onUpdate();
                setOpen(false);
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_12___default()), {
                sx: {
                    width: "100%",
                    mb: 2,
                    py: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default()), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                minWidth: 750
                            },
                            "aria-labelledby": "tableTitle",
                            size: dense ? "small" : "medium",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EnhancedTableHead, {
                                    rowCount: dataList.length
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    children: [
                                        dataList.map((row, index)=>{
                                            const labelId = `enhanced-table-checkbox-${index}`;
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                hover: true,
                                                role: "checkbox",
                                                tabIndex: -1,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        align: "left",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                            direction: "column",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "cTrader"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: row.login
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        align: "right",
                                                        children: row.status
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        align: "right",
                                                        children: [
                                                            "1:",
                                                            row.leverageInCents / 100
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        align: "right",
                                                        children: Math.floor(row.balance) / 100
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        align: "right",
                                                        children: row.depositCurrency
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        align: "right",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                className: "bg-yellow-500",
                                                                size: "small",
                                                                disabled: row.status !== "FULL_ACCESS",
                                                                variant: "contained",
                                                                color: "warning",
                                                                onClick: ()=>handleClickOpen(row, 0),
                                                                children: "入金"
                                                            }),
                                                            row.balance ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                className: "ml-2",
                                                                size: "small",
                                                                disabled: row.status !== "FULL_ACCESS",
                                                                variant: "outlined",
                                                                color: "info",
                                                                onClick: ()=>handleClickOpen(row, 1),
                                                                children: "出金"
                                                            }) : null
                                                        ]
                                                    })
                                                ]
                                            }, row.login);
                                        }),
                                        emptyRows > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            style: {
                                                height: (dense ? 33 : 53) * emptyRows
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                colSpan: 6
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    !dataList.length && initLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 4
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default()), {})
                        })
                    }) : null,
                    !dataList.length && !initLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                        sx: {
                            mt: 4
                        },
                        variant: "overline",
                        align: "center",
                        display: "block",
                        gutterBottom: true,
                        children: noAccountsTxt
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_8___default()), {
                            rowsPerPageOptions: [
                                5,
                                10,
                                25
                            ],
                            component: "div",
                            count: dataList.length,
                            rowsPerPage: rowsPerPage,
                            page: page,
                            onPageChange: handleChangePage,
                            onRowsPerPageChange: handleChangeRowsPerPage
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_15___default()), {
                open: open,
                disableEscapeKeyDown: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_21___default()), {
                        children: type ? withdrawTxt : fundTxt
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_20___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_14___default()), {
                            sx: {
                                width: 320,
                                p: 2
                            },
                            spacing: 2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_16___default()), {
                                label: `${type ? transferOut : transferIn}${amountTxt}（${currentRow?.depositCurrency}）`,
                                value: amount,
                                onChange: (e)=>setAmount(e.target.value),
                                InputProps: {
                                    inputComponent: currentRow?.depositCurrency === "CNH" ? NumericFormatRMB : NumericFormatUSD
                                },
                                fullWidth: true
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_19___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default()), {
                                onClick: ()=>setOpen(false),
                                disabled: loading,
                                children: cancelTxt
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_18___default()), {
                                size: "small",
                                onClick: handleConfirm,
                                loading: loading,
                                disabled: loading || !amount,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        confirmTxt,
                                        type ? transferOut : transferIn
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7236);
/* harmony import */ var _components_AccountList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3208);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2113);
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1929);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3250);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_1__, _components_AccountList__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_10__]);
([_components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_1__, _components_AccountList__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const getServerSideProps = async (context)=>{
    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_7__.getServerSession)(context.req, context.res, _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_8__/* .authOptions */ .L);
    // const response = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/user/info', {
    //   headers: { token: session.user.accessToken }
    // });
    // const { data: { completeVerify } } = await response.json();
    const response = await fetch("https://autu.finance/autu-api" + "/exchange/rate/list", {
        headers: {
            token: session.user.accessToken
        }
    });
    const { code , data: rate  } = await response.json();
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
const HomePage = ({ rate  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        fetchBalance();
    }, []);
    const fetchBalance = ()=>{
        (0,_services__WEBPACK_IMPORTED_MODULE_10__/* .fetchWallet */ .mg)().then(({ code , data  })=>{
            console.log(data);
            if (!code) {
                setBalance(data?.balance || 0);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PersonalCenterLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container p-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "text-black font-semibold",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                            id: "account.management"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AccountList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    balance: balance,
                    rate: rate,
                    onUpdate: fetchBalance
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5___default()), {
                    direction: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    spacing: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            width: 288,
                            py: 1.5,
                            borderRadius: 6
                        },
                        variant: "outlined",
                        size: "large",
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                        onClick: ()=>router.push("/personal-center/create"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                            id: "account.create"
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

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

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

/***/ 9048:
/***/ ((module) => {

module.exports = require("@mui/material/CircularProgress");

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

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 7308:
/***/ ((module) => {

module.exports = require("@mui/material/TablePagination");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,866,250,582,236,929], () => (__webpack_exec__(8873)));
module.exports = __webpack_exports__;

})();