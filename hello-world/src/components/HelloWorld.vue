<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <button v-on:click="say('hi')">Say Hi</button>
        <button v-on:click="say('what')">Say What</button>
        <form action="">
            <button v-on:click="warn('Form cannot be submitted yet.', $event)">Sumbit</button>
        </form>
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
        },
        warn: function(message, event) {
            // 네이티브 이벤트에 액세스 할 수 있습니다.
            if(event) event.preventDefault()

            alert(message)
        }
    },
    computed: {

    }
}
</script>