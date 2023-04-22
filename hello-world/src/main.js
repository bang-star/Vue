import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue 인스턴스 생성
new Vue({
  data: {
    test: 'test'
  },
  render: h => h(App),
}).$mount('#app')
