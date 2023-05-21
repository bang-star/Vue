import Vue from 'vue'
import App from './App.vue'

import Router from "./router/index"

// production setting
Vue.config.productionTip = false

// Vue 인스턴스 생성

const app = new Vue({
  router: Router,
  render: h => h(App),
})

app.$mount('#app')