<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {demo} from '@/service/index';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    demo().then(res=>{
      console.log(JSON.stringify(res.data));
    })
  }
}
</script>
