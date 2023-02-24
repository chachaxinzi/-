import request from '@/utils/request'

// 请求登录的Apl
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
// 获取用户的基本信息
export function getInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST'
    // 这里开始要传入token了，但是我们需要在响应拦截器里面去添加
  })
}

// 获取员工得到基本信息
export function staffInfo(id) {
  return request({
    url: `/sys/user/${id}`
  })
}
