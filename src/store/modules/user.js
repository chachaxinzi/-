// 本地化存储的方法，获取本地化数据，设置本地化数据，删除本地化数据
import { getToken, setToken, removeToken } from '@/utils/auth'
// 导入登录接口
import { login } from '@/api/user'
const state = {
// 定义状态,现在本地取token的数据，如果没有则是null；
  token: getToken()
}
const mutations = { // 同步操作
  set_token(state, token) {
    state.token = token// 将调用这个方法传过来了token值赋值修改原来的
    setToken(token)// 变化之后存入本地
  },
  del_token(state) {
    state.token = null // 先将vuex的数据删除掉，在删除本地的token
    removeToken()// 调用这个方法 删除本地token
  }
}
const actions = { // 异步操作

  async login(context, data) {
    // 调用登录接口,返回了一个数据
    const results = await login(data)
    // 返回数据中的token存入到vuex的state的token中
    context.commit('set_token', results)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

