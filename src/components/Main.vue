<template>
</template>

<script>
export default {
  name: "MyBeerApp",
  props: {
    msg: String
  }
};
import Vue from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBeer, faPlus, faMinus,
    faWineGlassAlt, faGlassWhiskey,
    faCocktail, faGlassMartiniAlt,
    faGlassCheers, faRedo
    } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBeer, faPlus, faMinus, faGlassWhiskey, faWineGlassAlt, faCocktail, faGlassMartiniAlt, faGlassCheers, faRedo);

Vue.component("font-awesome-icon", FontAwesomeIcon);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
