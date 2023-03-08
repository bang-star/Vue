<template>
    <div>
        <h2>{{ message }}</h2>
        <h2>{{ reversedmessage1 }}</h2>
        <h2>{{ reversedmessage2() }}</h2>
        
        <button @click="message = 'Hello Vue World'"></button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return{
            message: '안녕하세요'
        }
    },
    computed: {
        reversedmessage1: function() {
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reversedmessage2: function(){
            return this.message.split('').reverse().join('')
        }
    }
}
</script>
