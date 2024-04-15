import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import TDesign from 'tdesign-vue'
import 'normalize.css/normalize.css'
import './style/index.scss'
import 'tdesign-vue/es/style/index.css'
import WujieVue from 'wujie-vue2'
import lifecycles from './lifecycle'

import '../mock'

Vue.use(TDesign).use(WujieVue)
Vue.config.productionTip = false

const { setupApp, bus } = WujieVue
setupApp({ name: 'vue2', url: '/vue2', exec: true, alive: false, ...lifecycles })

bus.$on('module-route-change', (module, route) => {
  const path = route.path === '/' ? route.path : `/${module}${route.redirectedFrom || route.path}`
  if (router.currentRoute.path !== path) {
    router.push({ path, query: route.query })
  }
})
bus.$on('SessionInvalid', _ => {
  store.dispatch('app/clearToken').then(() => {
    router.replace({ name: 'login' })
  })
});

(async () => {
  axios.get('./env.json').then(res => {
    const { baseUrl } = res.data
    Vue.prototype.baseUrl = baseUrl

    new Vue({ router, store, render: h => h(App) }).$mount('#app')
  })
})()
