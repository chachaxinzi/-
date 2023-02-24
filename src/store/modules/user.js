// 本地化存储的方法，获取本地化数据，设置本地化数据，删除本地化数据
import { getToken, setToken, removeToken } from '@/utils/auth'
// 导入登录接口
import { login, getInfo, staffInfo } from '@/api/user'
const state = {
// 定义状态,现在本地取token的数据，如果没有则是null；
  token: getToken(),
  userInfo: {} // 获取用户信息返回的对象

}
const mutations = { // 同步操作
  set_token(state, token) {
    state.token = token// 将调用这个方法传过来了token值赋值修改原来的
    setToken(token)// 变化之后存入本地
  },
  del_token(state) {
    state.token = null // 先将vuex的数据删除掉，在删除本地的token
    removeToken()// 调用这个方法 删除本地token
  },
  // 修改用户信息的方法；当用户登录的时候调用
  set_userInfo(state, userInfo) {
    state.userInfo = { ...userInfo }
  },
  // 删除用户信息的方法;当用户退出登录的时候调用
  del_userInfo(state) {
    state.userInfo = {}// 设置为{}，向外快捷访问就不会报错
  }

}
const actions = { // 异步操作

  async login(context, data) {
    // 调用登录接口,返回了一个数据
    const results = await login(data)
    // 返回数据中的token存入到vuex的state的token中
    context.commit('set_token', results)
  },
  // 调用获取用户基本信息的接口
  async userInfo(context) {
    const results = await getInfo()
    const data = await staffInfo(results.userId)
    context.commit('set_userInfo', { ...results, ...data })
    return results
  },
  // 退出登录功能
  logout(context) {
    // 删除token信息，删除用户信息
    context.commit('del_token')
    context.commit('del_userInfo')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

