export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: { fullscreen: true }
  }
]

export const asyncRoutes = [
  {
    path: '/table',
    component: () => import('@/views/table'),
    meta: { title: '通用表格', code: 'BASE_TABLE' }
  }
]
