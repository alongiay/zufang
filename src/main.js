import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Form, Field, Lazyload } from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
import '@/styles/reset.css'
import 'postcss-pxtorem'
import SearchHouse from '@/components/SearchHouse'
Vue.component(SearchHouse.name, SearchHouse)
Vue.use(Form)
Vue.use(Field)
Vue.use(Vant)
Vue.use(Lazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
