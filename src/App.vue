<template>
  <div id="app">
    <MyBeerApp msg="Welcome to your personal Beer Manager"/>
    <Card/>
  </div>
</template>

<script>
require("@/assets/css/main.scss");
import MyBeerApp from "./components/Main.vue";
import Card from "./components/Card.vue";

export default {
  name: "app",
  components: {
    MyBeerApp,
    Card
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
