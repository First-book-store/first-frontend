import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../views/admin/DashboardPage.vue'
import TokenService from '../tokenService.js'

//customer
import IndexView from '../views/customer/Index.vue'

// categories
import Categories from '../views/admin/categories/IndexPage.vue'
import CreateCategory from '../views/admin/categories/CreateCategory.vue'
import EditCategory from '../views/admin/categories/_Id.vue'

// tags
import Tags from '../views/admin/tags/IndexPage.vue'
import CreateTag from '../views/admin/tags/CreateTag.vue'
import EditTag from '../views/admin/tags/_Id.vue'
import ApiService from '../apiService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: DashboardPage,
      meta: {
        middleware: 'admin'
      },
      children: [
        {
          path: 'categories',
          name: 'Categories',
          component: Categories
        },
        {
          path: 'categories/create',
          name: 'CreateCategory',
          component: CreateCategory
        },
        {
          path: 'categories/:slug',
          name: 'EditCategory',
          component: EditCategory
        },
        {
          path: 'tags',
          name: 'Tags',
          component: Tags
        },
        {
          path: 'tags/create',
          name: 'CreateTag',
          component: CreateTag
        },
        {
          path: 'tags/:slug',
          name: 'EditTag',
          component: EditTag
        }
      ]
    },

  ]
})
router.beforeEach((to,from,next) => {
  if (to.meta.middleware == 'admin') {
    ApiService.get('http://localhost:8000/api/user').then((response) => {
      next();
    }).catch(() => {
      window.location.assign("/");
    })
  } else {
    next();
  }
  
});



export default router
