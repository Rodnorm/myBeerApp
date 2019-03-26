<template>
    <div>
        <div class="makeFlex">
            <div>
                <p> Qual a quantidade do copo? </p>
                <select v-model="drinkQuantity">
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
                <p> Escolha a quantidade de alcool na bebida  </p>
                <div class="makeFlex" style="flex-wrap: wrap">
                    <div class="makeFlex columnOrder centerAlign setWidth" v-for="drink in beverages" v-bind:key="drink._id" v-on:click="setDrink(drink._id)">
                        <font-awesome-icon class="activateHover" v-bind:icon="drink.beverageIcon" size="2x"/>
                        <span> {{ drink.beverageName }} </span>
                        <span> {{ drink.beverageLevel }} </span>
                    </div>
                </div>
            </div>
        </div>
        <MyBeer v-if="drinkQuantity && selectedDrink" :glass="drinkQuantity" :beverage="selectedDrink" class="makeFlex centerAlign columnOrder"/>
    </div>    
</template>

<script>
require('@/assets/css/form.scss');
import MyBeer from './MyBeer';
export default {
    name: 'FormComponent',
    data: () => {
        return {
            drinkQuantity: null,
            alcoholLevel: '',
            selectedDrink: null,
            beverages: [
                {   
                    _id: 0,
                    beverageName: 'Cerveja',
                    beverageIcon: 'beer',
                    beverageLevel: ' 3.8% ~ 7%'
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
                    beverageLevel: '??! %'
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
            this.selectedDrink = { 
                icon : drink.beverageIcon, 
                level: drink.beverageLevel, 
                name: drink.beverageName 
            };
            
        }
    }
}
</script>