import { createRouter, createWebHistory } from 'vue-router'

import IndexView from '../views/customer/Index.vue'
import Dashboard from '../views/admin/Dashboard.vue'


// categories
import Categories from '../views/admin/categories/Index.vue'
import CreateCategory from '../views/admin/categories/Create.vue'
import EditCategory from '../views/admin/categories/_Id.vue'

//tags
import Tags from '../views/admin/tags/Index.vue'
import CreateTag from '../views/admin/tags/Create.vue'
import EditTag from '../views/admin/tags/_Id.vue'
import TokenService from '../TokenService'
import ApiService from '../ApiService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'IndexView',
      component : IndexView
    },
    {
      path : '/admin',
      name : 'Dashboard',
      component : Dashboard,
      meta : {
        middleware : 'admin'
      },
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


router.beforeEach((to , from , next) => {
  if (to.meta.middleware == 'admin') {
    let token = TokenService.getToken();
    ApiService.get('http://localhost:8000/api/user').then((response) => {
      next();
    }).catch((respone) => {
      window.location.assign('/')
      TokenService.destroyToken();
    })
  } else {
    next();
  }
})

export default router
