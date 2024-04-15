import Layout from '@/views/layout'

import BaseView from '@/views/modules/base'
import Vue2View from '@/views/modules/vue2'

import * as BaseRoutes from '@mono/base/src/router/routes'
import * as Vue2Routes from '@mono/vue2/src/router/routes'

const routeMap = [
  { module: 'base', asyncRoutes: BaseRoutes.asyncRoutes, publicRoutes: BaseRoutes.publicRoutes, view: BaseView },
  { module: 'vue2', asyncRoutes: Vue2Routes.asyncRoutes, publicRoutes: Vue2Routes.publicRoutes, view: Vue2View }
]

export let publicRoutes = []
routeMap.forEach(item => {
  if (item.module === process.env.VUE_APP_SYS_ID) {
    publicRoutes = [
      {
        path: '/' + item.module,
        component: Layout,
        children: item.publicRoutes.map(route => {
          return {
            path: route.path.startsWith('/') ? route.path.substring(1) : route.path,
            name: route.name,
            component: item.view,
            meta: route.meta
          }
        })
      }
    ]
  }
})

export const asyncRoutes = routeMap.map(item => {
  return {
    path: '/' + item.module,
    component: Layout,
    children: item.asyncRoutes.map(route => {
      return {
        path: route.path.startsWith('/') ? route.path.substring(1) : route.path,
        name: route.name,
        component: item.view,
        meta: route.meta
      }
    })
  }
})
