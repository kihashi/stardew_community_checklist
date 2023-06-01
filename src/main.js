import '../node_modules/bulma/bulma.sass'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// import store from './store'
import VueClipboard from 'vue3-clipboard'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App)

app.use(router)
app.use(VueClipboard)
app.use(mdiVue, {
  icons: mdijs
})
// app.use(store)

app.mount('#app')
