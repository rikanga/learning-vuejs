import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import NavView from '../views/NavView.vue'
import AboutView from '../views/AboutView.vue'
import ToDo from '../views/ToDo.vue'
import CustomEventView from '../views/CustomEventView'
import CustomBannerView from '../views/CustomBannerView.vue'

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
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component:AboutView
  },
  {
    path:'/link/:name',
    name:'link',
    component:NavView
  },
  {
    path:'/todo',
    name:'todo',
    component:ToDo
  },
  {
    path:'/custom',
    name:'customazer',
    component: CustomEventView
  },
  {
    path:'/slot',
    name:'slot',
    component:CustomBannerView
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
