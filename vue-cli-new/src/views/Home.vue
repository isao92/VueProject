<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <h1>Hello Brother</h1>
      <hr>
      <ServerStatus2></ServerStatus2>
      <User></User>
    </div>
  </div>
</template>
<script>
import ServerStatus2 from '../components/Server/ServerStatus2.vue'
import User from '../components/User/User.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: {
    // HelloWorld
    ServerStatus2,
    User
  }
}
</script>
