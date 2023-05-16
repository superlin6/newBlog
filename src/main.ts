import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import animate from "animate.css";
import '../src/assets/css/main.less'
import '../src/assets/css/fonts.less'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(animate).use(pinia)
app.mount('#app')