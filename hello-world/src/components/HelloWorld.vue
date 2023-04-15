<template>
    <div>
        <h1>나는 부모 컴포넌트의 제목입니다.</h1>
        <button @click="toggle">toggle</button>
        <!-- <my-component :author="{ firstName: 'daniel', lastName: 'Bang'}"></my-component> -->
        <my-component :author="authorObj"></my-component>
        <!-- <your-component ref="your-component"></your-component> -->
        <!-- <keep-alive>
            <component v-bind:is="currentView"></component>
        </keep-alive> -->
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
import MyComponent from './MyComponent.vue';
// import YourComponent from './YourComponent.vue';

export default {
    components: {
        'my-component': MyComponent,
        // 'your-component': YourComponent,
    },
    name: 'HelloWorld',
    mounted() {
        const child = this.$refs['my-component']
        console.log(child)
    },
    data() {
       return {
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