<template>
    <div>
        <h1>Product</h1>
         <h2>{{ $route.params.id }}</h2>
         <h3>{{ $route }} </h3>
    </div>
</template>

<script>
export default ({
    name: 'Product',
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
