import {
    defineAsyncComponent,
    h
} from 'vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Layout from "/src/layout/index.vue"

const routes = [
    {
        path: "/",
        name: 'login',
        component: () => import('../views/login/login.vue'),
    },
    {
        path: '/helloHome',
        component: Layout,
        children: [
            {
                path: "/helloHome",
                name: 'helloHome',
                component: () => import('/src/views/helloHome/index.vue'),
            },
            {
                path: "/helloApp",
                name: 'helloApp',
                component: () => import('/src/views/helloApp/index.vue'),
            }
        ]

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
// router.addRoute({
//     path: '/about',
//     name: 'about',
//     component: () => import('/src/pages/about/index.vue')
// })
// router.addRoute('about', {
//     path: '/about/info',
// redirect: {
//     name: 'home',
// },
//     name: 'info',
//     component: {
//         render() {
//             return h('div', 'info page');
//         }
//     }
// })
export default router