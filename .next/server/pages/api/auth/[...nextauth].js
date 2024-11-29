"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 7368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js


//配置next-auth，参考https://next-auth.js.org/configuration/options
const authOptions = {
    // provider配置凭证登录
    providers: [
        credentials_default()({
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
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7368));
module.exports = __webpack_exports__;

})();