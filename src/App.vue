<template>
  <div class="app">
    <div class="header">
      <p>
        Numeria <button>Counter</button><button>Find the number</button><button>Settings</button>
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
</style>
