<template>

      <div id="app">
    <div 
      id="nav" 
      class="tab-area-base">
      <ul class="tab-menu-base">
        <!-- `router.js` で定義したルーティングルールとの紐付けを行っている -->
      </ul>
    </div>
    <router-view />
    <HelloWorld msg="HelloWorld!!"/>

  </div>

  
</template>

   <script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>


