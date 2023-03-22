<template>
    <div>
        <h2>{{ total }}</h2>
        <MyComponent v-on:increment="incrementTotal"></MyComponent>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
import MyComponent from './MyComponent.vue';

export default {
    components: {
        MyComponent,
    },
    name: 'HelloWorld',
    data() {
       return {
            total: 0,
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