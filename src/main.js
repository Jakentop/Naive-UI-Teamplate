import { createApp } from 'vue'
import naive from 'naive-ui/es/preset'
import App from './App.vue'
import router from './router'
import '../index.css'
let app = createApp(App)

app.use(naive)
app.use(router)
app.mount('#app')
