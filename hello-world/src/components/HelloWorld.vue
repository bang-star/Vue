<template>
    <div>
        <h2>{{ message }}</h2>
        <h2>{{ reversedmessage }}</h2>
        
        <button @click="message = 'Hello Vue World'"></button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data: {
        message: '안녕하세요'
    },
    computed: {
        reversedmessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
}
</script>
