"use strict";
exports.id = 929;
exports.ids = [929];
exports.modules = {

/***/ 1929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);


//配置next-auth，参考https://next-auth.js.org/configuration/options
const authOptions = {
    // provider配置凭证登录
    providers: [
        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({
            name: "login",
            async authorize (credentials, req) {
                const { userName , password  } = credentials;
                const response = await fetch("https://autu.finance/autu-api" + "/login", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userName,
                        password
                    })
                });
                const { code , data  } = await response.json();
                if (!code) {
                    return {
                        name: data.userInfo.userName,
                        email: data.userInfo.userName,
                        accessToken: data.token
                    };
                }
                return {
                    status: "reject",
                    code
                };
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 8 * 60 * 60
    },
    jwt: {},
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn ({ user , account , profile , email , credentials  }) {
            //登录回调，如果authorize不成功，重定向到login界面，并附带错误信息参数
            if (user?.status === "reject") {
                return `/login/?code=${user?.code}`;
            }
            return true;
        },
        async redirect ({ url , baseUrl  }) {
            // // url一般为被中间件拦截之前的目标url，例如：localhost:3000/management/index，baseurl为localhost:3000，如果url不包含baseUrl，大概率是signIn回调函数重定向页面
            // if (url.startsWith(baseUrl)) return url
            // else if (url.startsWith("/")) return new URL(url, baseUrl).toString()
            return "/personal-center";
        },
        async session ({ session , token , user  }) {
            session.user.accessToken = token.accessToken;
            return session;
        },
        async jwt ({ token , user , account , profile  }) {
            if (account?.type === "credentials" && user) {
                token.accessToken = user.accessToken;
            }
            return token;
        }
    },
    events: {},
    theme: {
        colorScheme: "light"
    },
    debug: "production" === "development"
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));


/***/ })

};
;