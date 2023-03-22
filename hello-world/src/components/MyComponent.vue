<template>
    <div>
        <button @click="incrementCounter">{{ counter }}</button>
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    props: {

    },
    data() {
        return {
            counter: 0,
        }
    },
    computed: {

    },
    methods: {
        incrementCounter() {
            this.counter += 1
            this.$emit("update:foo", this.counter)
        }
    }
}
</script>
