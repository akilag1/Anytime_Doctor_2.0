import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false
Vue.use(VueResource);

Vue.use(VueSmoothScroll, {
  duration: 700,
  updateHistory:true,
})

new Vue({
  render: h => h(App),
}).$mount('#app')
