<template>
<div>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/secondProject">Second Project</router-link> |
      <router-link to="/module9">Module #9</router-link> |
      <router-link to="/module11">Module #11</router-link>
    </div>
    <!-- <ServerStats></ServerStats> -->
    <router-view />
    <div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h2{
  color: blue;
}
</style>
