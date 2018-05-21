import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Bundles from '@/components/bundles/Bundles'
import BundleItems from '@/components/bundles/BundleItems'
import Search from '@/components/search/Search'
import Changelog from '@/components/changelog/Changelog'

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
      path: '/search',
      component: Search
    },
    {
      name: 'Inventory',
      path: '/inventory'
    },
    {
      path: '/changelog',
      component: Changelog
    }
  ],
  linkActiveClass: 'is-active'
})
