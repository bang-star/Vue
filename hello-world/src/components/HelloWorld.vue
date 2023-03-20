<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <button v-on:click="greet">Greet</button>
        <button @click="greet">Greet</button>
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
        greet(event) {
            // 메서드 안에서 사용하는 `this`는 Vue 인스턴스를 가리킵니다.
            alert('Hello' + this.name + '!')

            // `event`는 네이티브 DOM 이벤트입니다.
            if(event) {
                alert(event.target.tagName)
            }
        }
    },
    computed: {

    }
}
</script>