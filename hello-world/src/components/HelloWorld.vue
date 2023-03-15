<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <ul id='example-1'>
            <li v-for="(value, name) in object" v-bind:key="value">
                {{ value }} : {{ name }}
            </li>
        </ul>
        <ul id='example-2'>
            <li v-for="(value, name, index) in object" v-bind:key="value">
                {{ value }} : {{ name }} : {{ index }}
            </li>
        </ul>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            object: {
                title : 'title',
                author: 'Daniel',
                publishedAt: '2016-04-10'
            }
        }
    },
    methods: {
    }
}
</script>
