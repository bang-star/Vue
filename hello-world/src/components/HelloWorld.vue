<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <ul id='example-1'>
            <li 
                v-for="item of items" 
                v-bind:key="item">
                {{ item }}
            </li>
        </ul>
        <button @click="replaceItem()">replaceItem Button</button>
        <button @click="replaceLength()">replaceLength Button</button>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
// import Vue from 'vue'

export default {
    name: 'HelloWorld',
    data() {
        return {
            items: [ 'a', 'b', 'c' ]
        }
    },
    methods: {
        /**
         * [리스트 렌더링] 배열 변경 감지 - 주의 사항
         */

        // 1. 인덱스로 배열에 있는 항목을 직접 설정
        replaceItem() {
            // AS-IS
            // this.items[0] = 'z'

            // TO-BE(1) - Vue 를 통해 사용
            // Vue.set(this.items, 1, 'x')

            // TO-BE(2) - 컴포넌트 내에서
            this.$set(this.items, 1, 'x')
        },

        // 2. 배열 길이를 수정하는 경우
        replaceLength() {
            // AS-IS
            // this.items.length = 2

            // TO-BE
            this.items.splice(2)
        }
    }
}
</script>