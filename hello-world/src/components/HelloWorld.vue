<template>
    <div>
        <h1>나는 부모 컴포넌트의 제목입니다.</h1>
        <!-- 정적 컴포넌트 -->
        <my-component></my-component>
        <!-- 동적 컴포넌트 -->
        <component v-bind:is="currentView"></component>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
import MyComponent from './MyComponent.vue';

export default {
    components: {
        'my-component': MyComponent,
    },
    name: 'HelloWorld',
    data() {
       return {
            currentView: 'my-component',
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