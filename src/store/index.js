import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    permissionCodes: window.$wujie?.props?.permissions,
    userInfo: window.$wujie?.props?.userInfo,
    platformConfig: window.$wujie?.props?.platformConfig
  }
})
