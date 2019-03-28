<template>
    <div>
        <font-awesome-icon class="activateHover" v-bind:icon="beverage.icon" size="2x"/>
        <p> Seu copo de {{ beverage.name }} possui {{ glass}} e um volume de {{ beverage.showLevel }} de álcool </p>
        <p v-if="minUnit != ''"> Você bebeu entre {{ minUnit }} e {{ maxUnit }} unidades de álcool, 
            você estará completamente sem traços de álcool no sangue entre {{ minTimeToSoberUp }} e {{ maxTimeToSoberUp }} horas.
        </p>
        <p v-if="minUnit != ''"> Isso quer dizer que após {{ maxTimeToSoberUp }} o bafômetro, provavelmente não te pega mais xD </p>
        <p> Dez minutos depois do primeiro gole, 50% do álcool ingerido vai pra corrente sanguínea. </p>
    </div>
</template>

<script>
export default {
    name: "MyBeer",
    props: {
        glass: String,
        beverage: {
            name: String,
            icon: String,
            level: [],
            cupSize: Number
        },
        update: Boolean,
        quantity: Number
    },
    watch: {
        beverage: function() {
            this.updateInfo();
        },
        update: function() {
            this.updateInfo();
        }
    },
    data: () => {
        return {
            minUnit: '',
            maxUnit: '',
            maxTimeToSoberUp: null,
            minTimeToSoberUp: null
        }
    },
    methods: {
        updateInfo() {
            this.minUnit = ((this.beverage.cupSize * this.beverage.level[0] / 1000) * this.quantity ).toFixed(2) ;
            this.maxUnit = ((this.beverage.cupSize * this.beverage.level[1] / 1000) * this.quantity ).toFixed(2);
            this.minTimeToSoberUp = this.minUnit.length > 4 ? this.minUnit.substring(0, 2) : this.minUnit.substring(0, 1);
            this.maxTimeToSoberUp = this.maxUnit.length > 4 ? this.maxUnit.substring(0, 2) : this.maxUnit.substring(0, 1);
        }
    }
}
</script>