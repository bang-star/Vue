<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <ul id='example-1'>
            <li 
                v-for="item in itemObject" 
                v-bind:key="item">
                {{ item }}
            </li>
        </ul>
        <button @click="addKeyValue()">addKeyValue Button</button>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
import Vue from 'vue'

export default {
    name: 'HelloWorld',
    data() {
        return {
            itemObject: {
                key1: 'key1',
                key2: 'key2'
            }
        }
    },
    methods: {
        /**
         * [리스트 렌더링] 객체 변경 감지에 관한 주의 사항
         */

        addKeyValue() {
            // AS-IS
            // this.itemObject.key3 = 'key3'

            // TO-BE
            // Vue.set(this.itemObject, 'key3', 'key3')     // 방법 1
            // this.$set(this.itemObject, 'key3', 'key3')   // 방법 2

            // 방법 3
            this.itemObject = Object.assign({}, this.itemObject, {
                key3: 'key3'
            })
        }
    }
}
</script>