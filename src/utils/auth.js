import Cookies from 'js-cookie'
// 本地化存储
const TokenKey = 'hrsaas-user-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
