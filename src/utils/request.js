import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000// 请求超时器
})// 创建axios实例
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config// config是请求体
}, err => {
  return Promise.reject(new Error(err.message))
})// 请求拦截器
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) {
    return data// 数据请求成功，把返回数据解构
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
},
err => {
// 请求失败时，我们应该有一个提示消息出去
  Message.error(err.message)
  // 应该把错误消息让catch捕获
  return Promise.reject(err)
}) // 响应拦截器
export default service
