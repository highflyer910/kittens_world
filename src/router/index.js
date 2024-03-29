import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/breeds',
    name: 'breeds',
    component: () => import(/* webpackChunkName: "about" */ '../views/BreedsView.vue')
  },
  {
    path: '/facts',
    name: 'facts',
    component: () => import(/* webpackChunkName: "about" */ '../views/FactsView.vue')
  },
  {
    path: '/tips',
    name: 'tips',
    component: () => import(/* webpackChunkName: "about" */ '../views/TipsView.vue')
  },
  {
    path: '/guides',
    name: 'guides',
    component: () => import(/* webpackChunkName: "about" */ '../views/GuidesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition){
    return savedPosition || new Promise (resolve => {
      setTimeout(()=>resolve({top: 0, behavior: 'smooth'}),300)
    })
  }
})

export default router
