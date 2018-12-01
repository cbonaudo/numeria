<template>
  <div class="hello">
    <div class="counter_sidebar">
      <button>Reset</button><br /><button>Random Number</button><br /><button>Change Color</button>
    </div>
    <h1>Counter</h1>
    <div>
      <p>{{ translatedNumber }}</p>
    </div>
    <div>
      <span>
        <button v-for="(figure, index) in figures" :key="index" v-on:click="increment(index);">
          ^
        </button>
      </span>
    </div>
    <div>
      <span v-for="(figure, index) in figures" :key="index">{{ figure }} </span>
    </div>
    <div>
      <span>
        <button v-for="(figure, index) in figures" :key="index" v-on:click="decrement(index);">
          v
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { translateNumbers } from '../utils/translation';

export default {
  name: 'Counter',
  data() {
    return {
      figures: [0, 0, 0, 1],
      translatedNumber: 'Un',
      increment(index) {
        this.figures.splice(index, 1, this.figures[index] + 1);
        this.translatedNumber = translateNumbers(this.figures);
      },
      decrement(index) {
        this.figures.splice(index, 1, this.figures[index] - 1);
        this.translatedNumber = translateNumbers(this.figures);
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
