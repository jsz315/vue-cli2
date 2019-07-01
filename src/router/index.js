import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: resolve=>require(['@/components/About'], resolve)
    },
    {
      path: '/goods',
      name: 'goods',
      component: resolve=>require(['@/components/Goods'], resolve)
    },
    {
      path: '/books',
      name: 'books',
      component: resolve=>require(['@/components/Books'], resolve)
    },
    {
      path: '/clothes',
      name: 'clothes',
      component: resolve=>require(['@/components/Clothes'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve=>require(['@/components/Login'], resolve)
    }
  ]
})
