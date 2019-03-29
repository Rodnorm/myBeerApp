<template>
  <div id="app">
    <MyBeerApp msg="Welcome to your personal Beer Manager"/>
    <Card/>
    <div class="credits">
    <p>
      Icons made by
      <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
      from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
    </p>  
  </div>
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
