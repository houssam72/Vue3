<template>
  <div>
    <h1>Ninja Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <MyBlock v-if="isPlaying" :delay="delay" @end="endGame" />
    <MyResults v-if="score" :score="score" />
  </div>
</template>

<script>
import MyBlock from "./components/MyBlock.vue";
import MyResults from "./components/MyResults.vue";

export default {
  name: "App",
  components: { MyBlock, MyResults },
  data() {
    return {
      isPlaying: false,
      deplay: null,
      score: null,
    };
  },
  methods: {
    start() {
      this.deplay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.score = null;
      console.log(this.deplay);
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
