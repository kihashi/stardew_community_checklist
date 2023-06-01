import '../node_modules/bulma/bulma.sass'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// import store from './store'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App)

app.use(router)
app.use(mdiVue, {
  icons: mdijs
})
// app.use(store)

app.mount('#app')
