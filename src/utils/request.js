import axios from 'axios'
const service = axios.create()// 创建axios实例
service.interceptors.request.use()// 请求拦截器
service.interceptors.response.use() // 响应拦截器
export default service
