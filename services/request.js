import { getSession } from 'next-auth/react'
import { toast } from 'react-toastify';
import ErrorCode from '@/constant';

export default async (url = '', data = {}, type = 'GET') => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL // 基础路径
  type = type.toUpperCase(); // 请求方式小写转换成大写
  url = baseUrl + url; // 请求地址的拼接
  let locale = 'en'

  const session = await getSession()
  try {
    locale = localStorage?.getItem('_lang');
  } catch (error) {}

  if (type == 'GET') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    })
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }
  let requestConfig = {
    credentials: 'include',
    method: type,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      token: session?.user?.accessToken
    },
    mode: "cors", // 用来决定是否允许跨域请求  值有 三个 same-origin，no-cors（默认）以及 cores;
    // cache: "force-cache" // 是否缓存请求资源 可选值有 default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached 。
  }

  if (type == 'POST') {
    Object.defineProperty(requestConfig, 'body', {
      value: JSON.stringify(data)
    })
  }
  try {
    const response = await fetch(url, requestConfig);
    const responseJson = await response.json();
    const { code } = responseJson;
    if (code) {
      toast.error(ErrorCode[locale][code]);
    }
    return responseJson
  } catch (error) {
    throw new Error(error)
  }
}