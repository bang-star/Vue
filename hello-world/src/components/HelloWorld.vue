<template>
    <div>
        <h1>Welcome to Vue World</h1>

        <div v-show="isShow">
            I'm Daniel. It is div for `v-show`
        </div>
        <div>
            <button @click="toggle">Toggle</button>
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            isShow: true,
        }
    },
    methods: {
        toggle() {
            this.isShow = !isShow
        }
    }
}
</script>
