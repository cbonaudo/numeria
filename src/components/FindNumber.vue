<template>
  <div class="">
    <div class="sidebar">
      <button>Give me a Hint</button><br /><button>Try another</button>
    </div>
    <div class="counter">
      <span v-for="(figure, index) in figures" :key="index">{{ figure }}</span>
    </div>
    <input placeholder="your answer here...">
  </div>
</template>

<script>
export default {
  name: 'FindNumber',
  data() {
    return {
      figures: [0, 0, 0, 1],
    };
  },
  created() {
    this.figures = this.figures.map(() => Math.floor(Math.random() * 10));
  },
};
</script>

<style scoped>
</style>
