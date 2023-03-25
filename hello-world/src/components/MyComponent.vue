<template>
    <div>
        <slot text="hello from child"></slot>
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

    }
}
</script>
