import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,//routingのために追加
  render: h => h(App),//index.htmlにApp.vueを描写している
}).$mount('#app')
