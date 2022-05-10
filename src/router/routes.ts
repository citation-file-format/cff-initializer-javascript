import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('src/components/LayoutLanding.vue')
    },
    {
        path: '/landing',
        component: () => import('src/components/LayoutLanding.vue')
    },
    {
        path: '/start',
        component: () => import('src/components/LayoutStepper.vue'),
        children: [{ path: '', component: () => import('src/components/ScreenStart.vue') }]
    },
    {
        path: '/authors',
        component: () => import('src/components/LayoutStepper.vue'),
        children: [{ path: '', component: () => import('src/components/ScreenAuthors.vue') }]
    },
    {
        path: '/finish-minimum',
        component: () => import('src/components/LayoutStepper.vue'),
        children: [{ path: '', component: () => import('src/components/ScreenFinishMinimum.vue') }]
    },
    {
        path: '/identifiers',
        component: () => import('src/components/LayoutStepper.vue'),
        children: [{ path: '', component: () => import('src/components/ScreenIdentifiers.vue') }]
    },
    {
        path: '/related-resources',
        component: () => import('src/components/LayoutStepper.vue'),
        children: [{ path: '', component: () => import('src/components/ScreenRelatedResources.vue') }]
    },
    {
        path: '/abstract',
        component: () => import('src/components/LayoutStepper.vue'),
        children: [{ path: '', component: () => import('src/components/ScreenAbstract.vue') }]
    },
    {
        path: '/keywords',
        component: () => import('src/components/LayoutStepper.vue'),
        children: [{ path: '', component: () => import('src/components/ScreenKeywords.vue') }]
    },
    {
        path: '/license',
        component: () => import('src/components/LayoutStepper.vue'),
        children: [{ path: '', component: () => import('src/components/ScreenLicense.vue') }]
    },
    {
        path: '/version-specific',
        component: () => import('src/components/LayoutStepper.vue'),
        children: [{ path: '', component: () => import('src/components/ScreenVersionSpecific.vue') }]
    },
    {
        path: '/finish-advanced',
        component: () => import('src/components/LayoutStepper.vue'),
        children: [{ path: '', component: () => import('src/components/ScreenFinishAdvanced.vue') }]
    },
    {
        path: '/404',
        component: () => import('src/components/ScreenError404.vue')
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('src/components/ScreenError404.vue')
    }
]

export default routes
