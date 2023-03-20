<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <button v-on:click="counter += 1">Add 1</button>
        <button @click="counter += 1">Add 1</button>
        <p>위 버튼을 클릭한 횟수는 {{counter}} 번 입니다.</p>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
       return {
            counter: 0,
       }
    },
    method: {

    },
    computed: {
        
    }
}
</script>