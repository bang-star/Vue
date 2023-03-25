<template>
    <div>
        <header>
            <slot name="header">자식 컨텐츠의 제목</slot>
        </header>
        <main>
            <slot>
                제공된 콘텐츠가 없는 경우에만 보실 수 있습니다.
            </slot>
        </main>
        <footer>
            <slot name="footer">010-1234-1234</slot>
        </footer>
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
