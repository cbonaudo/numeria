<template>
  <div class="app">
    <div class="header">
      <img src="./assets/numeria_logo.svg" class="logo" />
      <router-link to="/">
        <img src="./assets/button_counter_FR.svg" />
      </router-link>
      <router-link to="/find-number">
        <img src="./assets/button_findnumber_FR.svg" />
      </router-link>
    </div>
    <div id="app">
      <router-view />
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
  background-color: rgba(229, 223, 222, 0.2);
}

.header {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  width: 800px;
  align-content: center;
  padding: 0;
}
.header img:not(.logo) {
  height: 60px;
}
.logo {
  margin-top: 20px;
  margin-left: 40px;
  height: 40px;
}

.title {
  margin-top: 20px;
  margin-left: 150px;
  display: grid;
  grid-template-rows: 50% 50%;
  text-align: left;
}

.grid-counter {
  width: 700px;
  margin: auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.translated-container {
  font-size: 2em;
  font-weight: bold;
  height: 113px;
  line-height: 113px;
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

.n-button {
  background-color: rgb(229, 222, 221);
  border: 2px rgb(143, 30, 28) solid;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 1.1em;
  cursor: pointer;
}
</style>
