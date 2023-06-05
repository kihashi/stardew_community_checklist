import { createRouter, createWebHistory } from 'vue-router'

const Welcome = () => import('@/views/WelcomeView.vue')
const Bundles = () => import('@/views/BundlesView.vue')
const BundleItems = () => import('@/components/bundles/BundleItems.vue')
const Search = () => import('@/views/SearchView.vue')
const Settings = () => import('@/views/SettingsView.vue')
const Changelog = () => import('@/views/ChangelogView.vue')

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
      component: Changelog
    }
  ],
  linkActiveClass: 'is-active'
})

export default router
