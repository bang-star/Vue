<template>
    <div>
        <input type="text" v-model="parentMessage">
        <MyComponent 
            :my-message="parentMessage"
            v-bind="todo"
        ></MyComponent>
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
            todo: {
                text: 'Learn Vue',
                isComplete: false
            },
       }
    },
    methods: {
      
    },
    computed: {

    }
}
</script>