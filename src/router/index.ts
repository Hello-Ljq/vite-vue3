import {
    defineAsyncComponent,
    h
} from 'vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [
    {
        path: "/login",
        name: 'login',
        component: () => import('../views/login/login.vue'),
    },
    {
        path: '/helloTableSoutable',
        name: "helloTableSoutable",
        component: () => import('/src/components/HelloTableSoutable.vue'),
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