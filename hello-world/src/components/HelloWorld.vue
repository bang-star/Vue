<template>
    <div>
        <h1>나는 부모 컴포넌트의 제목입니다.</h1>
        <MyComponent>
            <template slot-scope="{text}">
                <span>hello from parent</span>
                <br />
                <span>{{ text }}</span>
            </template>
        </MyComponent>
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
            price: 0,
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