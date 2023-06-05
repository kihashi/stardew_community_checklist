import * as mdijs from '@mdi/js'
import mdiVue from 'mdi-vue/v3'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import '../node_modules/bulma/bulma.sass'

const app = createApp(App)

app.use(router)

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)

app.use(mdiVue, {
  icons: mdijs
})

app.mount('#app')
