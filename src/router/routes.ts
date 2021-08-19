import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('src/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Landing.vue') }]
    },
    {
        path: '/landing',
        component: () => import('src/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Landing.vue') }]
    },
    {
        path: '/start',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Start.vue') }]
    },
    {
        path: '/authors',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Authors.vue') }]
    },
    {
        path: '/finish-minimum',
        component: () => import('src/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/FinishMinimum.vue') }]
    },
    {
        path: '/identifiers',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Identifiers.vue') }]
    },
    {
        path: '/related-resources',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/RelatedResources.vue') }]
    },
    {
        path: '/abstract',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Abstract.vue') }]
    },
    {
        path: '/keywords',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Keywords.vue') }]
    },
    {
        path: '/license',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/License.vue') }]
    },
    {
        path: '/version-specific',
        component: () => import('src/layouts/StepperLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/VersionSpecific.vue') }]
    },
    {
        path: '/finish-advanced',
        component: () => import('src/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/FinishAdvanced.vue') }]
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('src/pages/Error404.vue')
    }
]

export default routes
