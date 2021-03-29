import Vue from 'vue'
import VueRouter, { Route, RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import { Role } from '@/types'
import VueRouteMiddleware from 'vue-route-middleware'
import ViewerMiddleware from './middleware/viewer-middleware'
import EditorMiddleware from './middleware/editor-middleware'
import AdminMiddleware from './middleware/admin-middleware'
import PaidMiddleware from './middleware/paid-middleware'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      middleware: [AdminMiddleware]
    }
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('../views/Editor.vue'),
    meta: {
      middleware: [EditorMiddleware]
    }
  },
  {
    path: '/viewer',
    name: 'Viewer',
    component: () => import('../views/Viewer.vue'),
    meta: {
      middleware: [ViewerMiddleware]
    }
  },
  {
    path: '/paid-viewer',
    name: 'PaidViewer',
    component: () => import('../views/PaidViewer.vue'),
    meta: {
      middleware: [ViewerMiddleware, PaidMiddleware]
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(VueRouteMiddleware())

export default router
