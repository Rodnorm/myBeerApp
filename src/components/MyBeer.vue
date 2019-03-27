<template>
    <div>
        <font-awesome-icon class="activateHover" v-bind:icon="beverage.icon" size="2x"/>
        <p> Seu copo de {{ beverage.name }} possui {{ glass}} e um volume de {{ beverage.level }} de álcool </p>
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
            level: String,
            cupSize: String,
            quantity: Number
        }
    },
    methods: {
        calcUnits() {
        }
    }
}
</script>