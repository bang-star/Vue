<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            message: 'Hello, Vue World',
        }
    },
    created: function () {
        console.log('created')
        console.log(this.message)
    },
    mounted: function () {
        console.log('mounted')
        console.log(this.message)
    },
    destroyed: function() {
        console.log('destroyed')
        console.log(this.message)
    },
    methods: {
    }
}
</script>
