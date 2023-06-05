import 'bulma/css/bulma.min.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import router from './router'
app.use(router)

// Pinia (state management)
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)

// Material Design icons
import {
  mdiCow,
  mdiDiamond,
  mdiFish,
  mdiFlower,
  mdiLeaf,
  mdiMushroom,
  mdiSnowflake,
  mdiSword,
  mdiWhiteBalanceSunny
} from '@mdi/js'
import mdiVue from 'mdi-vue/v3'
app.use(mdiVue, {
  icons: {
    mdiCow,
    mdiFlower,
    mdiWhiteBalanceSunny,
    mdiLeaf,
    mdiSnowflake,
    mdiDiamond,
    mdiMushroom,
    mdiFish,
    mdiSword
  }
})

// Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub, faReddit } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'
import {
  faCheckCircle,
  faCloudUploadAlt,
  faCopy,
  faLink,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCloudUploadAlt,
  faCopy,
  faTrash,
  faGithub,
  faCheckCircle,
  faCheckSquare,
  faSquare,
  faLink,
  faReddit
)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
