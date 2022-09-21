import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head';
import './assets/main.css';

const head = createHead()
const app = createApp(App)
const pinia = createPinia();
app.use(pinia);
app.use(router)
app.use(head)
app.mount('#app')

