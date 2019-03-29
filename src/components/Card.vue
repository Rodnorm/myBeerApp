<template>
  <div id="card">
    <div class="icon">
      <font-awesome-icon icon="beer" size="4x"/>
    </div>
    <p id="instructions">Gerencie sua manguaça nos botões abaixo</p>
    <div class="buttons">
      <div v-on:click="handleClick"  class="iconBox">
        <font-awesome-icon id="addIcon" v-bind:class="{ startRotateCounterClockwise : counterClockWiseRotate}" icon="plus" size="4x"/>
      </div>
      <div  v-on:click="handleClick" class="iconBox">
        <font-awesome-icon id="removeIcon" v-bind:class="{ startRotateClockwise : clockWiseRotate }" icon="minus" size="4x"/>
      </div>
    </div>
    <p class="quantity"> {{ quantity }}</p>
    <div class="flexCenter columnOrder">
      <input type="number" v-model="price" placeholder="Insira o preço da palhaçada" v-on:input="handlePrice">
      <p v-if="showMaxPrice"> {{ errorMsg }}</p>
      <div class="iconBox marginTop columnOrder" v-on:click="hideResetAnimationF">
        <font-awesome-icon id="resetIcon" icon="redo" size="2x" v-bind:class="{ startRotateReset : toggleRotateAnimation, hideResetAnimation : toggleResetAnimation }"/>
        <button id="resetButton" v-bind:hidden="hideResetButton" v-on:click="resetItems" class="resetButton"> Resetar a palhaçada toda? </button>
      </div>
    </div>
    <p class="quantity" v-if="price"> ${{ showPrice }}</p>
    <FormComponent :quantity="quantity" />
    <div class="credits">
        Icons made by
        <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
        from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
    </div>
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
            hideResetButton: true,
            errorMsg: '',
            toggleResetAnimation: false,
            clockWiseRotate: false,
            counterClockWiseRotate: false,
            toggleRotateAnimation: false
        }
    },
    methods: {
        handleClick(event) {
            if (this.getIconName(event)) {
              const iconId = event.path[1].id || event.path[0].id || event.path[0].firstChild.id;
              
              if (iconId.includes('add')) {
                this.counterClockWiseRotate = true;
                setTimeout(() => this.counterClockWiseRotate = false, 500);
                this.quantity ++;
              } else if (this.quantity > 0) {
                this.clockWiseRotate = true;
                setTimeout(() => this.clockWiseRotate = false, 500);
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
            this.showPrice = priceToBePaid;
            this.price = 59.9;
            this.errorMsg = 'Essa marvada ta cara demais, oxi, o máximo é 59,90';
            this.showMaxPrice = true;
            this.showPrice = priceToBePaid;
          } else if (this.price <= 0) {
            this.errorMsg = 'Que diabo de pinga barata é essa??!!';
            this.showMaxPrice = true;
            this.price = null;
            this.showPrice = '';
          } else {
            let finalPrice = this.quantity * parseFloat(this.price);
            if (finalPrice) {
              if (finalPrice.toString().includes('.')) {
                this.showPrice = finalPrice.toString().replace('.',',').substring(0, 5);
              } else if (finalPrice.toString().includes(',')) {
                this.showPrice = finalPrice.toString().substring(0, 5);
              } else {
                this.showPrice = finalPrice.toString();
              }
            }
            this.showMaxPrice = false;
          }
        },
        hideResetAnimationF() {
          this.hideResetAnimation = !this.hideResetAnimation;
          this.hideResetButton = !this.hideResetButton;
        },
        resetItems() {
          setTimeout(() => this.hideResetAnimation = false);
          setTimeout(() => this.hideResetButton = true);
          setTimeout(() => this.toggleRotateAnimation = !this.toggleRotateAnimation);
          setTimeout(() => this.toggleRotateAnimation = !this.toggleRotateAnimation, 500);

          this.quantity = 0;
          this.price = null;
          this.showPrice = '';
          this.showMaxPrice = false;
          this.resetForm = true;
        }
    },
    components: {
      FormComponent
    }
};
</script>