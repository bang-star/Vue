<template>
    <div>
        <slot>
            YourComponent 기본 데이터입니다.
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
