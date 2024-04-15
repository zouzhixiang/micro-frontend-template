import Vue from 'vue'
import VueRouter from 'vue-router'
import { publicRoutes, asyncRoutes } from './routes'

Vue.use(VueRouter)

const routes = [
  ...asyncRoutes,
  ...publicRoutes
]

const router = new VueRouter({ routes })

export default router
