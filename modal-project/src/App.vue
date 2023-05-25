<template>
  <div>
    <h1>{{ title }}</h1>
    <p>...Welcome...</p>
    <div v-if="showModal">
      <MyModal theme="sale" :toogleModal="toogleModal" >
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninja Givaway</h1>
      <p>Grab your ninja swag for half price!</p>
      </MyModal>
    </div>
    <button @click="toogleModal">Open modal</button>
  </div>
</template>

<script>
import MyModal from "./components/MyModal.vue";

export default {
  name: "App",
  components: { MyModal },
  data() {
    return {
      title: "My First Vue App :)",
      showModal: false,
    };
  },
  methods: {
    toogleModal() {
      this.showModal = !this.showModal;
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
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: red;
  border-bottom: 1px solid #ddd;
  display: inline block;
  padding-bottom: 10px;
}
</style>
