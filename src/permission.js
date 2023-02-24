// 路由守卫
import router from './router'
import store from './store'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 添加路由守卫：判断有无token，有的情况下判断是否跳转登录页，如果是则免登录，直接跳回首页
// 如果没有，则判断是否跳转的是白名单，也就是说跳转是不需要权限的页面，如果是则执行，如果是需要权限的页面，则先登录
const paths = ['/login', '/404']
router.beforeEach((to, from, next) => {
  nProgress.start()
  if (store.getters.token) {
    // 有token的情况
    if (to.path === '/login') {
      next('/')// 跳转到首页
    } else {
      next()
    }
  } else {
    if (paths.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
  nProgress.done()
})
router.afterEach(() => {
  nProgress.done()
})
