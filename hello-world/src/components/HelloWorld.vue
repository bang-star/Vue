<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <ul id='example-1'>
            <li 
                v-for="item of items" 
                v-bind:key="item.message">
                {{ item.message }}
            </li>
        </ul>
        <button @click="pushItem()">Add Message</button>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            items: [
                {message: 'Foo'},
                {message: 'Bar'},
                {message: 'Baz'},
            ]
        }
    },
    methods: {
        pushItem() {
            this.items.push({message: 'zero'})
        }
    }
}
</script>
