<template>
  <div class>
    <div class="title">
      <h1>Trouve le nombre</h1>
      <p>Ecris en toute lettres le nombre affiché à l'écran.</p>
    </div>
    <div class="grid-counter">
      <img v-for="(figure, index) in figures" :key="index" :src="getCard(figure)" class="card">
    </div>
    <input placeholder="Ecris la réponse ici.." class="answer">
  </div>
</template>

<script>
export default {
  name: "FindNumber",
  methods: {
    getCard(nb) {
      const images = require.context("../assets/");
      return images(`./card_${nb}.svg`);
    }
  },
  data() {
    return {
      figures: [0, 0, 0, 1]
    };
  },
  created() {
    this.figures = this.figures.map(() => Math.floor(Math.random() * 10));
  }
};
</script>

<style scoped>
.answer {
  margin-top: 30px;
  height: 30px;
  width: 300px;
}
</style>
