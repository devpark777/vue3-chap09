import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalculatorApi from '../views/CalculatorApi.vue'
import CompositionAPI from '../views/CompositionAPI.vue'
import CompositionAPI2 from '../views/CompositionAPI2.vue'
import CompositionAPI3 from '../views/CompositionAPI3.vue'
import CompositionAPI4 from '../views/CompositionAPI4.vue'

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
    path: '/p178',
    name: 'calculator',
    component: CalculatorApi
  },
  {
    path: '/p179',
    name: 'compositionapi',
    component: CompositionAPI
  },
  {
    path: '/p180',
    name: 'compositionapi2',
    component: CompositionAPI2
  },
  {
    path: '/p181',
    name: 'compositionapi3',
    component: CompositionAPI3
  },
  {
    path: '/p182',
    name: 'compositionapi4',
    component: CompositionAPI4
  },
  {
    path: '/p183',
    name: 'lifecycleTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/LifeCycleTest.vue')
  },
  {
    path: '/p184',
    name: 'lifecycleTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionAPIProvide.vue')
  },
  {
    path: '/p188',
    name: 'mixinstest',
    component: () => import(/* webpackChunkName: "about" */ '../views/MixinsTest.vue')
  },
  {
    path: '/p191',
    name: 'mixinstest2',
    component: () => import(/* webpackChunkName: "about" */ '../views/MixinsTest2.vue')
  },
  {
    path: '/p192',
    name: 'customDiTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomDirectiveTest.vue')
  },
  {
    path: '/p194',
    name: 'pluginsTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/PluginsTest.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
