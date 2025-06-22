import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './assets/css/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')