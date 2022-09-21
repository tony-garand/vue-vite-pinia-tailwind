import { createRouter, createWebHistory } from 'vue-router';

import Index from '@/pages/Index.vue';

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'Vue Vite Pinia Tailwind',
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
