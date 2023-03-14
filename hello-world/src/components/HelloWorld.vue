<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <h2 v-if="awesome">Awesome</h2>
        <h2 v-else>Nope</h2>
        <template v-if="awesome">
            <h2>Korean</h2>
            <h2>No1</h2>
            <h2>Developer</h2>
        </template>
        <template>
            <h2>Today</h2>
            <h2>is</h2>
            <h2>Monday</h2>
        </template>
        <div v-if="type==='A'">
            A
        </div>
        <div v-else-if="type==='B'">
            B
        </div>
        <div v-else-if="type==='C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            awesome: true,
            type: 'A'
        }
    },
    computed: {

    }
}
</script>
