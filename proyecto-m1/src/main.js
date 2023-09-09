import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'

const app = createApp(App)

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    },
  })


app
.use(router)
.use(vuetify)
.mount('#app')
