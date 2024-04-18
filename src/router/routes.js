export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: { fullscreen: true }
  }
]

export const asyncRoutes = [
  {
    path: '/demo',
    component: () => import('@/views/vue2-demo'),
    meta: { title: 'vue2演示', code: 'VUE2_DEMO', copyright: true, breadcrumb: true }
  },
  {
    path: '/core-demo',
    component: () => import('@/views/core-demo'),
    meta: { title: 'core代码演示', code: 'CORE_DEMO' }
  }
]

// eslint-disable-next-line no-unused-expressions
window.$wujie?.bus.$emit('set-module-routes', 'vue2', publicRoutes, asyncRoutes)
