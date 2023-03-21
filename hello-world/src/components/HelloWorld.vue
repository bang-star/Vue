<template>
    <div>
        <my-component></my-component>
        <simple-counter></simple-counter>
        <simple-counter></simple-counter>
        <simple-counter></simple-counter>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
import MyComponent from './MyComponent.vue'
import SimpleCounter from './SimpleCounter.vue'

export default {
    components: {
        'my-component' : MyComponent,
        'simple-counter' : SimpleCounter,
        SimpleCounter,
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