import Vue from 'vue'
import App from './App.vue'

import Router from "./router/index"
// import Vuex from 'vuex'
import { store } from './store';

// production setting
Vue.config.productionTip = false
// Vue.use(Vuex)

// Vue 인스턴스 생성

const app = new Vue({
  store: store,
  router: Router,
  render: h => h(App),
})

app.$mount('#app')