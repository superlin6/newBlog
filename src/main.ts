import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import animate from "animate.css";
import '../src/assets/css/main.less'
import '../src/assets/css/fonts.less'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(animate).use(ViewUIPlus).use(pinia)
app.mount('#app')