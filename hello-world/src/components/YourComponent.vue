<template>
    <div>
        <slot>
            <div v-for="n in 10" :key="n">
                {{ n }} - YourComponent 기본 데이터입니다.
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'YourComponent',
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
