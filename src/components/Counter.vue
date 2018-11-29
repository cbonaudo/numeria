<template>
  <div class="hello">
    <h1>Counter</h1>
    <div>
      <span>
        <button
        v-for="(figure, index) in figures" :key="index"
        v-on:click="increment(index)">^</button>
      </span>
    </div>
    <div>
      <span v-for="(figure, index) in figures" :key="index">{{ figure }} </span>
    </div>
    <div>
      <span>
        <button
        v-for="(figure, index) in figures" :key="index"
        v-on:click="decrement(index)">v</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      figures: [0, 0, 0, 1],
      increment(index) {
        this.figures.splice(index, 1, this.figures[index] + 1);
      },
      decrement(index) {
        this.figures.splice(index, 1, this.figures[index] - 1);
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
