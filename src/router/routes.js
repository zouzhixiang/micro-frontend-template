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
