import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import ElementPlus from './plugins/ElementPlus'

import './styles/index.less'

createApp(App)
  .use(router)
  .use(store, key)
  .use(ElementPlus)
  .mount('#app')
