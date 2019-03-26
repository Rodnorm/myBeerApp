<template>
  <div id="card">
    <div class="icon">
      <font-awesome-icon icon="beer" size="4x"/>
    </div>
    <p id="instructions">Gerencie sua manguaça nos botões abaixo</p>
    <div class="buttons">
      <font-awesome-icon v-on:click="handleClick" id="addIcon" icon="plus" size="4x"/>
      <font-awesome-icon v-on:click="handleClick" id="removeIcon" icon="minus" size="4x"/>
    </div>
    <p class="quantity"> {{ quantity }}</p>
    <div class="flexCenter">
      <span> Insira o preço da palhaçada </span>
      <input type="number" v-model="price"> 
    </div>
    <p class="quantity" v-if="price"> ${{ price }}</p>
    <FormComponent />
  </div>
</template>

<script>
require("@/assets/css/card.scss");
import FormComponent from './Form';

export default {
    name: "Card",
    data: () => {
        return {
            quantity: 0,
            price: null
        }
    },
    methods: {
        handleClick(event) {
            if (event.path[1].id) {
              const icon = document.getElementById(event.path[1].id);
              if (icon.id.includes('add')) {
                icon.classList.add("startRotateCounterClockwise");
                setTimeout(() => {
                  icon.classList.remove("startRotateCounterClockwise");
                }, 500);
                this.quantity ++;
              } else {
                icon.classList.add("startRotateClockwise");
                setTimeout(() => {
                  icon.classList.remove("startRotateClockwise");
                }, 500);
                this.quantity --;
              }
            }
        },
    },
    components: {
      FormComponent
    }
};
</script>