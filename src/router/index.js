import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../Layout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/axis',
    children: [{
      path: '/axis',
      component: () => import('@/views/Main/axis.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
