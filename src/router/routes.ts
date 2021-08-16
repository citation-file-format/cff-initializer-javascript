import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('src/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Landing.vue') }]
    },
    {
        path: '/0',
        component: () => import('src/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Landing.vue') }]
    },
    {
        path: '/1',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Start.vue') }]
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
    {
        path: '/4',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/RelatedResources.vue') }]
    },
    {
        path: '/5',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Abstract.vue') }]
    },
    {
        path: '/6',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Keywords.vue') }]
    },
    {
        path: '/7',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/License.vue') }]
    },
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
