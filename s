import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store



import {
    defineAsyncComponent
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
    },
    {
        path: "/about",
        name: 'about',
        component: defineAsyncComponent(() => import('/src/pages/about/index.vue'))
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})


import { createApp } from 'vue'
import store from './store/store'
import App from './App.vue'
import router from './router/router'
import ElementPLUS from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store).use(ElementPLUS).mount('#app')
