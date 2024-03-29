// 二次封装axios
import axios from 'axios';
import { getToken } from '@/utils/token'
const myRequest = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})
// 请求拦截器
myRequest.interceptors.request.use((config) => {
  // 是否有token
  if (getToken()) {
    config.headers.Authorization = getToken()
  }
  return config;
})

// 响应拦截器
myRequest.interceptors.response.use((res) => {
  return res.data;
}, (err) => {
  return err.message;
})

export default myRequest;