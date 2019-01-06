<template>
  <div class="hello">
    <div class="counter_sidebar">
      <button>Reset</button><br /><button>Random Number</button><br /><button>Change Color</button>
    </div>
    <h1>Counter</h1>
    <div>
      <span>
        <button v-for="(figure, index) in figures" :key="index" v-on:click="increment(index);">
          ^
        </button>
      </span>
    </div>
    <div class="counter">
      <span v-for="(figure, index) in figures" :key="index">{{ figure }} </span>
    </div>
    <div>
      <span>
        <button v-for="(figure, index) in figures" :key="index" v-on:click="decrement(index);">
          v
        </button>
      </span>
    </div>
    <div>
      <p class="translatedNumber">{{ translatedNumber }}</p>
    </div>
  </div>
</template>

<script>
import { translateNumber } from '../utils/translation';

export default {
  name: 'Counter',
  data() {
    return {
      figures: [0, 0, 0, 1],
      translatedNumber: 'Un',
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
      },
    };
  },
};
</script>

<style scoped>
.counter_sidebar {
  background-color: green;
  padding: 10px;
  height: 200px;
  position: absolute;
}
</style>
