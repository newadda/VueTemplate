import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      query:{test:"aaa"},
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ]
})


///  인증 및..
/*
router.beforeEach(async (to, from) => {
    // redirect the user to the login page
    if (
      // make sure the user is authenticated
      // ❗️ Avoid an infinite redirect
      to.name !== 'login'
    ) {
      // redirect the user to the login page
      return { name: 'login' }
    }
})
*/

export default router
