import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

// VueScrollTo config from docs
Vue.use(VueScrollTo, {
  container: "body",
  duration: 900,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
