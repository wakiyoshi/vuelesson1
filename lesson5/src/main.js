import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'

import store from './store'

import router from './router'


Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  store,
  router,//routingのために追加
  render: h => h(App),//index.htmlにApp.vueを描写している
}).$mount('#app')

store.commit('increment')


