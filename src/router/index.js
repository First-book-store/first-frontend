import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../views/admin/DashboardPage.vue'

// categories
import Categories from '../views/admin/categories/IndexPage.vue'
import CreateCategory from '../views/admin/categories/CreateCategory.vue'
import EditCategory from '../views/admin/categories/_Id.vue'

// tags
import Tags from '../views/admin/tags/IndexPage.vue'
import CreateTag from '../views/admin/tags/CreateTag.vue'
import EditTag from '../views/admin/tags/_Id.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/admin',
      name : 'Dashboard',
      component : DashboardPage,
      children : [
        {
          path : 'categories',
          name : 'Categories',
          component : Categories
        },
        {
          path : 'categories/create',
          name: 'CreateCategory',
          component : CreateCategory
        },
        {
          path: 'categories/:slug',
          name: 'EditCategory',
          component : EditCategory 
        },
        {
          path : 'tags',
          name : 'Tags',
          component : Tags
        },
        {
          path : 'tags/create',
          name : 'CreateTag',
          component : CreateTag
        },
        {
          path: 'tags/:slug',
          name: 'EditTag',
          component : EditTag
        }
      ]
    }
  ]
})

export default router
