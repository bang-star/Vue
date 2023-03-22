<template>
    <div>
        <input type="text" v-model="userInput"/>
        <MyComponent v-bind:text="userInput"></MyComponent>
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
            parentMessage: '',
            userInput: '',

       }
    },
    methods: {
      
    },
    computed: {

    }
}
</script>