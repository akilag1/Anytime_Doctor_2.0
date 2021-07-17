import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

import {store} from "../../store/store"

// import storePlugin from '../../store/storePlugin'
// Vue.use(store)


Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  render: h => h(App),
  store:store,
}).$mount('#app')