import { createRouter, createWebHashHistory, Router } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home/index.vue')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('../views/article/index.vue')
      },
      {
        path: '/classes',
        name: 'classes',
        component: () => import('../views/classes/index.vue')
      },
      {
        path: '/tags',
        name: 'tags',
        component: () => import('../views/tags/index.vue')
      },
      {
        path: '/post',
        name: 'post',
        component: () => import('../views/post/index.vue')
      },
      {
        path: '/classtagList',
        name: 'classtagList',
        component: () => import('../views/classtagList/index.vue')
      },
      {
        path: '/say',
        name: 'say',
        component: () => import('../views/say/index.vue')
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
