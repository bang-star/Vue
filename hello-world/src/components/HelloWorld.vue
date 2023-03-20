<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <button v-on:click="say('hi')">Say Hi</button>
        <button v-on:click="say('what')">Say What</button>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
       return {
            name: 'Vue.js'
       }
    },
    methods: {
        say: function(message) {
            alert(message)
        }
    },
    computed: {

    }
}
</script>