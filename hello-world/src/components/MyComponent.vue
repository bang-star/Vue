<template>
    <div>
        <slot>
            <div v-for="n in 10" :key="n">
                {{ n }} - MyComponent 기본 데이터입니다.
            </div>
        </slot>
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
