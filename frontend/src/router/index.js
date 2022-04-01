import { createRouter, createWebHistory } from 'vue-router'

import BookDetails from '../views/BookDetails.vue'
import PageNotFound from '../views/PageNotFound.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/details/:id',
    name: 'bookdetails',
    component: BookDetails,
    props: true
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notfound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
