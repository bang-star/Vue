<template>
    <div>
        <h1>Foo</h1>
        <button @click="move(true)">Go to Bar(History O)</button>
        <button @click="move(false)">Go to Bar(History X)</button>
    </div>
</template>

<script>
export default ({
    name: 'Foo',
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        move(history) {
            if(history) {
                this.$router.push('/bar')
            }else {
                this.$router.replace('/bar')
            }
        }
    }
})
</script>
