import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from "pinia";

import {
  FrappeUI,
  Button,
  Card,
  Input,
  setConfig,
  frappeRequest,
  resourcesPlugin,
} from 'frappe-ui'

// create a pinia instance
let pinia = createPinia();

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(FrappeUI)
app.use(router)
app.use(resourcesPlugin)
app.use(pinia);

app.component('Button', Button)
app.component('Card', Card)
app.component('Input', Input)

app.mount('#app')
