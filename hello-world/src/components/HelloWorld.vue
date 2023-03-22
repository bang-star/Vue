<template>
    <div>
        <MyComponent date-3d-date-picker="true" class="date-picker-theme-dark"></MyComponent>
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
       }
    },
    methods: {
      
    },
    computed: {

    }
}
</script>