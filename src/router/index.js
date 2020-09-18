import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
import Articledetail from '@/components/Articledetail'

Vue.use(Router)
export default new Router({ mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles',
      name: 'Article',
      component: Article
    },
    {
      path: '/article/:aid',
      name: 'Articledetail',
      component: Articledetail
    }
  ]
})
