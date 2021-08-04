import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Start.vue') }]
  },
  {
    path: '/screen1',
    component: () => import('src/layouts/StepperLayout.vue'),
    children: [{ path: '', component: () => import('pages/Screen1.vue') }]
  },
  {
    path: '/screen2',
    component: () => import('src/layouts/StepperLayout.vue'),
    children: [{ path: '', component: () => import('pages/Screen2.vue') }]
  },
  {
    path: '/finish',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Finish.vue') }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
