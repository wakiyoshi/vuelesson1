import Vue from 'vue'
import App from './App.vue'



Vue.config.productionTip = false

new Vue({
  //routingのために追加
  render: h => h(App),//index.htmlにApp.vueを描写している
}).$mount('#app')
