<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ message }}</h2>
        <button v-on:click="reverseMessage">메시지 뒤집기</button>
        <button @click="reverseMessage">메시지 뒤집기</button>

        <hr>
        <h2>{{ message2 }}</h2>
        <input type="text" v-model="message2">
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            title: 'Vue World',
            message: '안녕하세요! Daniel입니다.',
            message2: '안녕하세요! Daniel입니다.',
        }
    },
    watch: {

    },
    created: function () {

    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
}
</script>