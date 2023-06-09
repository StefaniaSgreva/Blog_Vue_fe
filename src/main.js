import { createApp } from 'vue'
import { router } from './router'
import { guest } from './plugins/axios'
import App from './App.vue'

import './assets/styles/main.scss'

//modo alternativo per scrivere la riga sotto, si equivalgono 
// const app = createApp(App);
// app.use(router);
// app.mount('#app');

createApp(App).use(router, guest).mount('#app')
