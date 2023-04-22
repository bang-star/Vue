<template>
    <div>
        <my-component :author="authorObj"></my-component>
        <BaseInput v-model="username" required placeholder="enter your name" label="label"></BaseInput>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
import MyComponent from './MyComponent.vue';
import BaseInput from './BaseInput.vue';

export default {
    components: {
        'my-component': MyComponent,
        BaseInput
    },
    name: 'HelloWorld',
    mounted() {
        // const child = this.$refs['my-component']
        console.log(this.$root.test)
    },
    data() {
       return {
            username: '',
            currentView: 'my-component',
            authorObj: { 
                firstName: 'daniel',
                 lastName: 'Bang'
            }
       }
    },
    methods: {
        toggle() {
            this.currentView = (this.currentView === 'my-component') ? 'your-component' : 'my-component'
        }
    },
    computed: {

    }
}
</script>