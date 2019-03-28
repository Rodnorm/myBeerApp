<template>
    <div class="marginTop">
        <div class="makeFlex columnOrder" > 
            <div class="makeFlex">
                <select v-model="drinkQuantity">
                    <option selected value="null" hidden> Qual a quantidade do copo? </option>
                    <option>20 ml </option>
                    <option>40 ml </option>
                    <option>190 ml </option>
                    <option>250 ml </option>
                    <option>300 ml </option>
                    <option>400 ml </option>
                    <option>500 ml </option>
                </select>        
            </div>
            <div>
                <p class="makeFlex"> Escolha a quantidade de alcool na bebida  </p>
                <div class="makeFlex" style="flex-wrap: wrap">
                    <div class="makeFlex columnOrder centerAlign setWidth" v-for="drink in beverages" v-bind:key="drink._id" v-on:click="setDrink(drink._id)">
                        <font-awesome-icon class="activateHover" v-bind:icon="drink.beverageIcon" size="2x"/>
                        <span> {{ drink.beverageName }} </span>
                        <span> {{ drink.beverageLevel }} </span>
                    </div>
                </div>
            </div>
        </div>
        <MyBeer v-if="drinkQuantity && selectedDrink" :quantity="quantity" :glass="drinkQuantity" :beverage="selectedDrink" :update="updateMyBeer" class="makeFlex centerAlign columnOrder"/>
    </div>    
</template>

<script>
require('@/assets/css/form.scss');
import MyBeer from './MyBeer';
export default {
    name: 'FormComponent',
    props: {
        quantity: Number,
    },
    watch: {
        quantity: function() {
            this.quantity === 0 ? this.drinkQuantity = null : '';
            this.updateMyBeer = !this.updateMyBeer;
        }
    },
    data: () => {
        return {
            drinkQuantity: null,
            alcoholLevel: '',
            selectedDrink: null,
            updateMyBeer: true,
            beverages: [
                {   
                    _id: 0,
                    beverageName: 'Cerveja',
                    beverageIcon: 'beer',
                    beverageLevel: '3.8% ~ 7%'
                },
                {
                    _id: 1,
                    beverageName: 'Vodka',
                    beverageIcon: 'glass-martini-alt',
                    beverageLevel: '30% ~ 40%'
                },
                {
                    _id: 2,
                    beverageName: 'Whisky',
                    beverageIcon: 'glass-whiskey',
                    beverageLevel: '40% ~ 60%'
                },
                {
                    _id: 3,
                    beverageName: 'Vinho',
                    beverageIcon: 'wine-glass-alt',
                    beverageLevel: '9% ~ 12%'
                },
                {
                    _id: 4,
                    beverageName: 'Cachaça',
                    beverageIcon: 'cocktail',
                    beverageLevel: '30% ~ 40%'
                },
                {
                    _id: 5,
                    beverageName: 'Outros',
                    beverageIcon: 'glass-cheers',
                    beverageLevel: '0% ~ 0%'
                }
            ]
        }
    },
    components: {
        MyBeer
    },
    methods: {
        setDrink(id) {
            const drink = this.beverages.find(item => item._id === id);
            const splittedLevel = drink.beverageLevel.split('~');
            this.selectedDrink = { 
                icon : drink.beverageIcon, 
                level: splittedLevel.map(x => parseFloat(x.trim().replace('%',''))), 
                name: drink.beverageName,
                cupSize: parseFloat(this.drinkQuantity.split(' ml')[0]),
                quantity: this.quantity,
                showLevel: drink.beverageLevel
            };
        }
    }
}
</script>