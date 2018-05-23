import Vue from 'vue'
import Router from 'vue-router'
import Tree from '@/components/Tree'
import Leaf from '@/components/Leaf'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import PageNotFound from '@/components/PageNotFound'
import Article from '@/components/Article'
import Sources from '@/components/Sources'
import SignInUp from '@/components/SignInUp'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/profile',
      component: Profile,
      beforeEnter: AuthGuard 
    },
    {
      path: '/signupin',
      component: SignInUp
    },
    {
      path: '/tree',
      component: Tree
    },
    {
      path: '/leaf-:to',
      props: true,
      component: Leaf
    },
    {
      path: '/about',
      component: Article
    },
    {
      path: '/sources',
      component: Sources
    },
    {
      path: '*',
      component: PageNotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history'
})
