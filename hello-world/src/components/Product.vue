<template>
    <div>
        <h1>Product {{ news }}</h1>
    </div>
</template>

<script>
export default ({
    name: 'Product',
    props: {
        news: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

    }
})
</script>
