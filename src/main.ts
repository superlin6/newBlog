import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import animate from "animate.css";
import '../src/assets/css/main.less'
import '../src/assets/css/fonts.less'
const app = createApp(App)
app.use(router).use(animate)
app.mount('#app')