<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <div id="example-1">
            <ul>
                <li v-for="(item, index) in items" :key="item.message + '-' + index">
                    {{ item.message }}
                    {{ parentItem +''+ index +'-'+ item.message }}
                </li>
            </ul>
        </div>
        <div id="example-2">
            <ul>
                <li v-for="item of items" v-bind:key="item.message">
                    {{ item.message }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            parentItem: 'Parent',
            items: [
                { message: 'Foo' },
                { message: 'Bar' },
                { message: 'Baz' },
            ]
        }
    },
    methods: {
    }
}
</script>
