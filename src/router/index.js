import Vue from 'vue'
import Router from 'vue-router'
import Tree from '@/components/Tree'
import Leaf from '@/components/Leaf'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import PageNotFound from '@/components/PageNotFound'
import Sources from '@/components/Sources'
import SignInUp from '@/components/SignInUp'
import Proceed from '@/components/Proceed'
import AuthGuard from './auth-guard'
import AuthGuard2 from './auth2-guard'

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
      component: SignInUp,
      beforeEnter: AuthGuard2
    },
    {
      path: '/proceed',
      component: Proceed,
      beforeEnter: AuthGuard2
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
