<template>
  <div class>
    <div class="title">
      <h1>Trouve le nombre</h1>
      <p>Ecris en toutes lettres le nombre affiché à l'écran.</p>
    </div>
    <div class="grid-counter">
      <img v-for="(figure, index) in figures" :key="index" :src="getCard(figure)" class="card" />
    </div>
    <div class="answer-container">
      <input
        placeholder="Ecris la réponse ici.."
        class="answer"
        v-model="answer"
        v-on:keyup.enter="validate()"
      />
      <button v-on:click="validate()" v-if="!correctAnswer && answer" class="n-button">Valider</button>
      <button v-on:click="restart()" v-if="correctAnswer" class="n-button">Réessayer</button>
    </div>
    <h2 v-if="correctAnswer">Réponse correcte !</h2>
    <div v-if="wrongAnswer">
      <h2>Oups, mauvaise réponse</h2>
      <p>La réponse est "{{ getTranslatedNumber() }}".</p>
    </div>
  </div>
</template>

<script>
import { translateNumber } from "../utils/translation";
export default {
  name: "FindNumber",
  methods: {
    getCard(nb) {
      const images = require.context("../assets/");
      return images(`./card_${nb}.svg`);
    },
    validate() {
      if (this.answer) {
        if (this.answer === translateNumber(this.figures)) {
          this.correctAnswer = true;
          this.wrongAnswer = false;
        } else {
          this.wrongAnswer = true;
          this.correctAnswer = false;
        }
      }
    },
    getTranslatedNumber() {
      return translateNumber(this.figures);
    },
    restart() {
      this.figures = this.figures.map(() => Math.floor(Math.random() * 10));
      this.correctAnswer = false;
      this.wrongAnswer = false;
      this.answer = "";
    }
  },
  data() {
    return {
      correctAnswer: false,
      wrongAnswer: false,
      answer: "",
      figures: [0, 0, 0, 1]
    };
  },
  created() {
    this.restart();
  }
};
</script>

<style scoped>
.answer {
  margin-top: 30px;
  height: 30px;
  width: 300px;
}
.answer-container {
  margin-top: 30px;
}
</style>
