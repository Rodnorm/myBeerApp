<template>
  <div id="card">
    <div class="icon">
      <font-awesome-icon icon="beer" size="4x"/>
    </div>
    <p id="instructions">Gerencie sua manguaça nos botões abaixo</p>
    <div class="buttons">
      <div v-on:click="handleClick"  class="iconBox">
        <font-awesome-icon id="addIcon" icon="plus" size="4x"/>
      </div>
      <div  v-on:click="handleClick" class="iconBox">
        <font-awesome-icon id="removeIcon" icon="minus" size="4x"/>
      </div>
    </div>
    <p class="quantity"> {{ quantity }}</p>
    <div class="flexCenter columnOrder">
      <input type="number" v-model="price" placeholder="Insira o preço da palhaçada" v-on:input="handlePrice">
      <p v-if="showMaxPrice"> Essa marvada ta cara demais, oxi, o máximo é 59,90 </p>
      <div class="iconBox marginTop columnOrder" v-on:click="hideResetAnimation">
        <font-awesome-icon id="resetIcon" icon="redo" size="2x"/>
        <button id="resetButton" hidden="true" v-on:click="resetItems" class="resetButton"> Resetar a palhaçada toda? </button>
      </div>
    </div>
    <p class="quantity" v-if="price"> ${{ showPrice }}</p>
    <FormComponent :quantity="quantity" /> 
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
            price: null,
            showPrice: '',
            resetForm: true,
            showMaxPrice: false,
            hideResetButton: true
        }
    },
    methods: {
        handleClick(event) {
            if (this.getIconName(event)) {
              const icon = document.getElementById(event.path[1].id || event.path[0].id || event.path[0].firstChild.id);
              if (icon.id.includes('add')) {
                icon.classList.add("startRotateCounterClockwise");
                setTimeout(() => icon.classList.remove("startRotateCounterClockwise"), 500);
                this.quantity ++;
              } else if (this.quantity > 0) {
                icon.classList.add("startRotateClockwise");
                setTimeout(() => icon.classList.remove("startRotateClockwise"), 500);
                this.quantity --;
              }
              this.handlePrice();
            }
        },
        getIconName(event) {
          if (event.path[1].id || event.path[0].id || event.path[0].firstChild.id) {
            return true
          }
          return false;
        },
        handlePrice() {
          if (this.price > 59.9) {
            const priceToBePaid = 59.90 * this.quantity; 
            this.showPrice = priceToBePaid.replace('.',',');
            this.price = 59.9;
            this.showMaxPrice = !this.showMaxPrice;
          } else {
            let finalPrice = this.quantity * parseFloat(this.price);
            if (finalPrice) {
              debugger
              if (finalPrice.toString().includes('.')) {
                this.showPrice = finalPrice.toString().replace('.',',').substring(0, 5);
              } else if (finalPrice.toString().includes(',')) {
                this.showPrice = finalPrice.toString().substring(0, 5);
              } else {
                this.showPrice = finalPrice.toString();
              }
              this.showMaxPrice = false;
            }
          }
        },
        hideResetAnimation() {
          const icon = document.getElementById('resetIcon');
          const button = document.getElementById('resetButton');
          let iconHasAnimation = false;
          icon.classList.forEach(item =>  item === 'hideResetAnimation' ? iconHasAnimation = true : iconHasAnimation = false);
          if (iconHasAnimation) {
              icon.classList.remove('hideResetAnimation');
              button.toggleAttribute('hidden')
          } else {
            icon.classList.add('hideResetAnimation');
            button.toggleAttribute('hidden')
          }
        },
        resetItems() {
          const icon = document.getElementById('resetIcon');
          setTimeout(() => document.getElementById('resetButton').setAttribute('hidden','true'));
          setTimeout(() => icon.classList.remove('hideResetAnimation'));
          setTimeout(() => icon.classList.add('startRotateReset'));
          setTimeout(() => icon.classList.remove("startRotateReset"), 500);

          this.quantity = 0;
          this.price = null;
          this.showPrice = '';
          this.showMaxPrice = false;
          this.hideResetButton = true;
          this.resetForm = true;
        }
    },
    components: {
      FormComponent
    }
};
</script>