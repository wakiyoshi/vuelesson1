import Vue from 'vue'
import Router from 'vue-router'//ルーターのインポート
import Survey from './views/Survey.vue'
import Home from './views/Home.vue'
import Form from './views/Form.vue'


Vue.use(Router)//ルーターを使えるように

export default new Router({
  // デフォルトの挙動では URL に `#` が含まれる.
  // URL から hash を取り除くには `mode:history` を指定する
  mode: 'history',                  
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/survey',
      name: 'Survey',
      component: Survey
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})


