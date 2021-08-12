import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('src/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Start.vue') }]
    },
    {
        path: '/0',
        component: () => import('src/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Start.vue') }]
    },
    {
        path: '/1',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Title.vue') }]
    },
    {
        path: '/2',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Authors.vue') }]
    },
    {
        path: '/3',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Identifiers.vue') }]
    },
    // 4 related resources
    // 5 abstract
    {
        path: '/6',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Keywords.vue') }]
    },
    // 7 license
    {
        path: '/8',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/VersionSpecific.vue') }]
    },
    {
        path: '/9',
        component: () => import('src/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Finish.vue') }]
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
