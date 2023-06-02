import { createRouter, createWebHistory } from 'vue-router'

import Welcome from '@/components/Welcome.vue'
import Bundles from '@/views/BundlesView.vue'
import BundleItems from '@/components/bundles/BundleItems.vue'
import Search from '@/components/search/Search.vue'
import Settings from '@/components/Settings.vue'
import ChangeLog from '@/components/changelog/ChangeLog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: ChangeLog
    }
  ],
  linkActiveClass: 'is-active'
})

export default router
