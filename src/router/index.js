import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/admin/Dashboard.vue'

// categories
import Categories from '../views/admin/categories/Index.vue'
import CreateCategory from '../views/admin/categories/Create.vue'
import EditCategory from '../views/admin/categories/_Id.vue'

//tags
import Tags from '../views/admin/tags/Index.vue'
import CreateTag from '../views/admin/tags/Create.vue'
import EditTag from '../views/admin/tags/_Id.vue'

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
          name : 'CreateCategory',
          component : CreateCategory
        },
        {
          path : 'categories/:slug',
          name : 'EditCategory',
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
          path : 'tags/:slug',
          name : 'EditTag',
          component : EditTag
        },
      ]
    }
  ]
})

export default router
