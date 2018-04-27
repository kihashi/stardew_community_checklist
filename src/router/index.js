import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Bundles from '@/components/Bundles'
import BundleItems from '@/components/BundleItems'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/',
      redirect: {
        name: 'Welcome'
      }
    },
    {
      path: '/bundles',
      name: 'Bundles',
      component: Bundles,
      children: [
        {
          path: ':id',
          name: 'bundle-items',
          component: BundleItems
        }
      ]
    },
    {
      name: 'Search',
      path: '/search'
    },
    {
      name: 'Inventory',
      path: '/inventory'
    }
  ],
  linkActiveClass: 'is-active'
})
