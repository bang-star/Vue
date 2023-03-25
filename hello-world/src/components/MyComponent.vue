<template>
    <div>
        <h2>나는 자식 컴포넌트의 제목입니다.</h2>
        <slot>
            제공된 콘텐츠가 없는 경우에만 보실 수 있습니다.
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
