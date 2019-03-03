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
  name: "App"
};
</script>

<style>
body {
  margin: 0;
  font-family: "Bookman Old Style Regular", arial;
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

.title {
  margin-left: 100px;
  display: grid;
  grid-template-rows: 50% 50%;
  text-align: left;
}

.grid-counter {
  width: 700px;
  margin: auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.translated-container {
  font-size: 2em;
  height: 220px;
  line-height: 110px;
  width: 750px;
  margin: auto;
  margin-top: 50px;
  background-size: contain;
  background-image: url("assets/answer_background.svg");
  background-repeat: no-repeat;
}

.card {
  height: 250px;
}
.arrow {
  height: 25px;
}
</style>
