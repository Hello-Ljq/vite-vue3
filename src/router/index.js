import {
    defineAsyncComponent,
    h
} from 'vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        path: '',
        redirect: {
            name: 'home',
        }
    }, {
        path: "/home",
        name: 'home',
        component:() => import('/src/pages/Home.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.addRoute({
    path: '/about',
    name: 'about',
    component: () => import('/src/pages/about/index.vue')
})
router.addRoute('about', {
    path: '/about/info',
    name: 'info',
    component: {
        render() {
            return h('div', 'info page');
        }
    }
})
export default router