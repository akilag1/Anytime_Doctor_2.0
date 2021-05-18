import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

import {store} from "../../store/store"

Vue.config.productionTip = false

Vue.use(VueResource);

// export const eventBus = new Vue();

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
