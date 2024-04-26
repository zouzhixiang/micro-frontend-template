import Vue from 'vue'
import App from './App.vue'
import { router, createRouter, loadPublicRoutes, loadAsyncRoutes } from './router'
import store from './store'
import axios from 'axios'
import 'normalize.css/normalize.css'
import './style/index.scss'
import WujieVue from 'wujie-vue2'
import modules from './modules'
import lifecycles from './lifecycle'

import '../mock'

Vue.use(WujieVue)
Vue.config.productionTip = false

axios.get('./env.json').then(({ data: { name, menuRootCode, baseUrl, moduleApps, mainApp } }) => {
  Vue.prototype.name = name
  Vue.prototype.menuRootCode = menuRootCode
  Vue.prototype.baseUrl = baseUrl

  const { setupApp, preloadApp, bus } = WujieVue
  const appLoaded = []
  const apps = modules.filter(item => moduleApps.includes(item.name))

  if (!mainApp) createRouter()

  // 子应用配置、预加载
  apps.forEach(({ name, url }) => {
    setupApp({ name, url, exec: true, alive: false, ...lifecycles })
    preloadApp({ name })
  })

  // 加载所有子应用路由
  bus.$on('set-module-routes', (name, publicRoutes, asyncRoutes) => {
    if (!appLoaded.includes(name)) {
      appLoaded.push(name)
      loadAsyncRoutes(name, asyncRoutes)
      if (name === mainApp) {
        loadPublicRoutes(name, publicRoutes)
      }

      if (appLoaded.length === apps.length) {
        new Vue({ router, store, render: h => h(App) }).$mount('#app')
      }
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
})
