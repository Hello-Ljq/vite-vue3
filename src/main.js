import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import ElementPLUS from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store).use(ElementPLUS).mount('#app')