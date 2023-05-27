import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/admin/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/admin',
      name : 'Dashboard',
      component : Dashboard,
    }
  ]
})

export default router
