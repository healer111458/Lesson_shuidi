import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: () => import('../views/Goods.vue')
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: () => import('../views/Ratings.vue')
    },
    {
      path: '/seller',
      name: 'Seller',
      component: () => import('../views/Seller.vue')
    }
  ]
})
