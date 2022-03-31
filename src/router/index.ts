import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Vuex from '@/../a/Vuex.vue'
import Test from '@/../a/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/../a/Axios.vue') // 懒加载 Axios 组件
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
