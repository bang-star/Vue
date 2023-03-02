<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld 
            v-for="todoItem in todos"
            v-bind:key="todoItem.id"
            v-bind:todo="todoItem"
        />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    data() {
        return {
            todos: [
                { id: 0, name: 'Apple' },
                { id: 1, name: 'Samsung' },
                { id: 2, name: 'LG' },
            ]
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
