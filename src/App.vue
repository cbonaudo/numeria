<template>
  <div class="app">
    <div class="header">
      <p>Numeria</p>
      <router-link to="/">Counter</router-link>
      <router-link to="/find-number">Find the number</router-link>
      <button>Settings</button>
    </div>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

.header {
  display: grid;
  grid-template-columns: 30% 25% 25% 25%;
  align-items: center;
  padding: 10px;
  background-color: grey;
}

.grid-sidebar {
  display: grid;
  grid-template-columns: 10% auto;
}
.sidebar {
  background-color: grey;
  padding: 10px;
  float: left;
}

.counter {
  width: max-content;
  margin: auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.figure {
  margin: 2% !important;
}
img {
  height: 300px;
}
</style>
