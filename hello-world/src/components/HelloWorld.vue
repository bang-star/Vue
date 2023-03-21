<template>
    <div>
        <my-component></my-component>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
import MyComponent from './MyComponent.vue'

export default {
    components: {
        'my-component' : MyComponent
    },
    name: 'HelloWorld',
    data() {
       return {
     
       }
    },
    methods: {
      
    },
    computed: {

    }
}
</script>