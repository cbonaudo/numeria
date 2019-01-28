<template>
  <div class="app">
    <div class="header">
      <p>
        Numeria
        <router-link to="/">Counter</router-link>
        <router-link to="/find-number">Find the number</router-link>
        <button>Settings</button>
      </p>
    </div>
    <div id="app"><router-view /></div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  padding: 10px;
  background-color: green;
}
.header * {
  margin-left: 100px;
}
.sidebar {
  background-color: green;
  padding: 10px;
  height: 200px;
  position: absolute;
}
</style>
