import Welcome from '@/components/Welcome.vue'
import Bundles from '@/components/bundles/Bundles.vue'
import BundleItems from '@/components/bundles/BundleItems.vue'
import Search from '@/components/search/Search.vue'
import Settings from '@/components/Settings.vue'
import Changelog from '@/components/changelog/Changelog.vue'
import { createRouter } from 'vue-router'

const router = createRouter({
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
    // {
    //   name: 'Inventory',
    //   path: '/inventory'
    // },
    {
      name: 'Settings',
      path: '/settings',
      component: Settings
    },
    {
      path: '/changelog',
      component: Changelog
    }
  ],
  linkActiveClass: 'is-active'
})

export default router
