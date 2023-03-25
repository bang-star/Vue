<template>
    <div>
        <h1>나는 부모 컴포넌트의 제목입니다.</h1>
        <MyComponent>
            <p>이것은 원본 컨텐츠입니다.</p>
            <p>이것은 원본 중 추가 컨텐츠입니다.</p>
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