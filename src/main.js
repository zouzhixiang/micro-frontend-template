import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import '@mono/core/style/element-ui/index.scss'
// import '@mono/core/style/index.css'
import './style/index.scss'

// import * as filters from '@mono/core/filters'
// import registerComponents from '@mono/core/components'
// import registerDirectives from '@mono/core/directives'

import axios from 'axios'

import '../mock'

Vue.config.productionTip = false
Vue.use(ElementUI)
// registerComponents(Vue)
// registerDirectives(Vue)
// Object.keys(filters).forEach(key => { Vue.filter(key, filters[key]) })

const preload = async () => {
  const { data: { baseUrl } } = await axios.get('./env.json')
  Vue.prototype.baseUrl = baseUrl
}

if (window.__POWERED_BY_WUJIE__) {
  let instance
  preload().then(() => {
    window.__WUJIE_MOUNT = () => {
      instance = new Vue({ router, store, render: h => h(App) }).$mount('#app')
    }
    window.__WUJIE_UNMOUNT = () => {
      instance.$destroy()
    }
  })
} else {
  preload().then(() => {
    new Vue({ router, store, render: h => h(App) }).$mount('#app')
  })
}
