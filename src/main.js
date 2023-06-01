import '../node_modules/bulma/bulma.sass'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// import store from './store'
import VueClipboard from 'vue-clipboard2'

const app = createApp(App)

app.use(router)
app.use(VueClipboard)
// app.use(store)

app.mount('#app')
