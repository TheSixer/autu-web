import fetch from './request.js';
 
// 注册
export const register = (params) => fetch(`/register`, params, 'post');

// 登录
export const ssrLogin = (params) => fetch(`${process.env.NEXT_PUBLIC_ORIGIN_URL}/login`, params, 'post');

// 查询用户信息
export const queryUserInfo = () => fetch(`/user/info`);

// 保存基本信息
export const saveBaseInfo = (params) => fetch('/user/baseInfo', params, 'post');

// 保存地址信息
export const saveAddressInfo = (params) => fetch('/user/addressInfo', params, 'post');

// 保存工作信息
export const saveWorkInfo = (params) => fetch('/user/employmentInfo', params, 'post');

// 保存收入信息
export const saveFinancialInfo = (params) => fetch('/user/financialInfo', params, 'post');

// 获取上传文件签名
export const getPolicy = (params) => fetch('/oss/verify/policy');

// 保存手持身份证照片信息
export const saveCardPic = (params) => fetch('/user/idcardInfo', params, 'post');

// 获取手持身份证照片
export const fetchIdCard = (params) => fetch('/user/idcardInfo');

// 获取账户列表
export const fetchAccountList = (params) => fetch('/account/list');

// 获取钱包余额
export const fetchWallet = (params) => fetch('/wallet/info');

// 创建账户
export const createAccount = (params) => fetch('/account/create', params, 'post');

// 提交咨询
export const saveConsult = (params) => fetch('/consult/save', params, 'post');

// 忘记密码
export const forgetPassward = (email) => fetch(`/forgot?email=${email}`);

// 重置密码
export const reestPassword = (params) => fetch('/password/reset', params, 'post');

// 加签
export const getImgUrl = (objectName) => fetch(`/oss/sign?objectName=${objectName}`);

// 下单支付
export const createOrder = (params) => fetch('/order/create', params, 'post');

// 充值记录
export const getRechargeList = (params) => fetch('/wallet/recharge/list', params);

// 申请提现
export const applyWithdraw = (params) => fetch('/wallet/withdraw', params, 'post');

// 提现记录
export const getWithdrawList = (params) => fetch('/wallet/withdraw/list', params);

// 入金到账户
export const transferToTrader = (params) => fetch('/wallet/transfer/wallet_to_trader', params, 'post');

// 账户提现到余额
export const transferToWallet = (params) => fetch('/wallet/transfer/trader_to_wallet', params, 'post');

// 提现记录
export const getTransferList = (params) => fetch('/wallet/transfer/list', params);