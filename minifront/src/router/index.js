import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/users',
    name: 'users',
   
    component: () => import('../views/UsersView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
   
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
   
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
