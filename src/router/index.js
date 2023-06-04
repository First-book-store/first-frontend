import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/admin/Dashboard.vue'

// categories
import Categories from '../views/admin/categories/Index.vue'
import CreateCategory from '../views/admin/categories/Create.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/admin',
      name : 'Dashboard',
      component : Dashboard,
      children : [
        {
          path : 'categories',
          name : 'Categories',
          component : Categories
        },
        {
          path : 'categories/create',
          name : 'CreatCategory',
          component : CreateCategory
        }

      ]
    }
  ]
})

export default router
