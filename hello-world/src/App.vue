<template>
    <div id="app">
        <p>
            <router-link v-bind:to="{name: 'foo'}">Go to Foo</router-link>
            <router-link :to="{name: 'bar'}">Go to Bar</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {

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
