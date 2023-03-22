<template>
    <div>
        <!-- <h2>{{ total }}</h2> -->
        <!-- <MyComponent :foo.sync="total"></MyComponent> -->
        <CurrencyInput v-model="price"></CurrencyInput>
        {{ price }}
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
import CurrencyInput from './CurrencyInput.vue'
// import MyComponent from './MyComponent.vue';

export default {
    components: {
        // MyComponent,
        CurrencyInput
    },
    name: 'HelloWorld',
    data() {
       return {
            price: 0,
       }
    },
    methods: {
        incrementTotal() {
            this.total += 1
        }
    },
    computed: {

    }
}
</script>