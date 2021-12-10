import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Survey from './components/Survey.vue'
import Form from './components/Form.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,//routingのために追加
  render: h => h(App),//index.htmlにApp.vueを描写している
}).$mount('#app')



export default {
  name: 'app',
  components: {
    HelloWorld,
    Survey,
    Home,
    Form
  },
  
}

