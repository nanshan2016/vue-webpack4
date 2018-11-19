import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/modules/About.vue')
    }
  ]
})
