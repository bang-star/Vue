<template>
    <div>
        <MyComponent my-message="안녕하세요 Vue World"></MyComponent>
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
       }
    },
    methods: {
      
    },
    computed: {

    }
}
</script>