<template>
  <div>
    <div class="title">
      <h1>Compteur</h1>
      <p>Fais défiler les nombres avec le compteur pour voir leur écriture en lettres.</p>
    </div>
    <div class="grid-counter">
      <div v-for="(figure, index) in figures" :key="index">
        <div>
          <span>
            <img v-on:click="increment(index)" src="../assets/arrow_up.svg" class="arrow">
          </span>
        </div>

        <div class="counter">
          <div class="figure">
            <img :src="getCard(figure)" class="card">
          </div>
        </div>

        <div>
          <span>
            <img v-on:click="decrement(index)" src="../assets/arrow_down.svg" class="arrow">
          </span>
        </div>
      </div>
    </div>
    <div class="translated-container">
      <p class="translated-number">{{ translatedNumber }}</p>
    </div>
  </div>
</template>

<script>
import { translateNumber } from "../utils/translation";

export default {
  name: "Counter",
  methods: {
    getCard(nb) {
      const images = require.context("../assets/");
      return images(`./card_${nb}.svg`);
    }
  },
  data() {
    return {
      figures: [0, 0, 0, 1],
      translatedNumber: "Un",
      // Increment or go back to 0 if figure is already at 9
      increment(index) {
        let incremented = this.figures[index];
        if (this.figures[index] === 9) {
          incremented = 0;
        } else {
          incremented += 1;
        }
        this.figures.splice(index, 1, incremented);
        this.translatedNumber = translateNumber(this.figures);
      },
      // Decrement or go back to 9 if figure is already at 0
      decrement(index) {
        let decremented = this.figures[index];
        if (this.figures[index] === 0) {
          decremented = 9;
        } else {
          decremented -= 1;
        }
        this.figures.splice(index, 1, decremented);
        this.translatedNumber = translateNumber(this.figures);
      }
    };
  }
};
</script>

<style scoped>
</style>
