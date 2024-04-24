import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getTitle } from '@/utils'
import LoginView from '@/views/app/login'
import Layout from '@/views/layout'
import modules from '../modules'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

// 默认公共路由
let publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

// 路由实例
export let router

// 创建路由
export const createRouter = () => {
  router = new VueRouter({ routes: publicRoutes })

  const whiteList = ['login']
  NProgress.configure({ showSpinner: false })
  router.beforeEach(async (to, from, next) => {
    NProgress.start()

    document.title = getTitle(to.meta.title)
    const menuTree = store.state.app.menuTree
    const routeTree = store.state.app.routeTree

    if (menuTree && routeTree) {
      if (!to.matched.length) {
        router.addRoutes(routeTree)
        next({ ...to, replace: true })
      }

      if (to.name === 'login') {
        next({ path: '/' })
      } else {
        next()
      }
    } else {
      if (whiteList.includes(to.name)) {
        next()
      } else {
        const accessRoutes = await store.dispatch('app/getMenu')
        router.addRoutes(accessRoutes)
        next({ ...to, replace: true })
      }
    }
  })

  router.afterEach(() => {
    NProgress.done()
  })
}

// 加载公共路由
export const loadPublicRoutes = (name, routes) => {
  const { view } = modules.find(item => item.name === name)
  publicRoutes = [
    {
      path: '/' + name,
      component: Layout,
      children: routes.map(route => {
        return {
          path: route.path.startsWith('/') ? route.path.substring(1) : route.path,
          name: route.name,
          component: view,
          meta: route.meta
        }
      })
    }
  ]
  createRouter()
}

// 异步路由
export let asyncRoutes = []

// 加载异步路由
export const loadAsyncRoutes = (name, routes) => {
  const { view } = modules.find(item => item.name === name)
  asyncRoutes = [
    ...asyncRoutes,
    {
      path: '/' + name,
      component: Layout,
      children: routes.map(route => {
        return {
          path: route.path.startsWith('/') ? route.path.substring(1) : route.path,
          name: route.name,
          component: view,
          meta: route.meta
        }
      })
    }
  ]
}
// 重置路由
export const resetRouter = () => {
  const newRouter = new VueRouter({ routes: publicRoutes })
  router.matcher = newRouter.matcher
}
