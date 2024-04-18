import Vue from 'vue'
import App from './App.vue'
import { router, loadPublicRoutes, loadAsyncRoutes } from './router'
import store from './store'
import axios from 'axios'
import TDesign from 'tdesign-vue'
import 'normalize.css/normalize.css'
import './style/index.scss'
import 'tdesign-vue/es/style/index.css'
import WujieVue from 'wujie-vue2'
import modules from './modules'
import lifecycles from './lifecycle'

import '../mock'

Vue.use(TDesign).use(WujieVue)
Vue.config.productionTip = false

const init = () => {
  axios.get('./env.json').then(res => {
    const { baseUrl } = res.data
    Vue.prototype.baseUrl = baseUrl
    new Vue({ router, store, render: h => h(App) }).$mount('#app')
  })
}

const { setupApp, preloadApp, bus } = WujieVue

// 子应用配置、预加载
modules.forEach(({ name, url }) => {
  setupApp({ name, url, exec: true, alive: false, ...lifecycles })
  preloadApp({ name })
})
// 加载所有子应用路由
bus.$on('set-module-routes', (name, publicRoutes, asyncRoutes) => {
  loadPublicRoutes(name, publicRoutes)
  loadAsyncRoutes(name, asyncRoutes)

  if (name === modules[modules.length - 1].name) {
    init()
  }
})
// 子应用路由跳转
bus.$on('module-route-change', (module, route) => {
  const path = route.path === '/' ? route.path : `/${module}${route.redirectedFrom || route.path}`
  if (router.currentRoute.path !== path) {
    router.push({ path, query: route.query })
  }
})
// 子应用接口session失效
bus.$on('session-invalid', _ => {
  store.dispatch('app/clearToken').then(() => {
    router.replace({ name: 'login' })
  })
})
