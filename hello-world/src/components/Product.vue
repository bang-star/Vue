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
            message: 'hello vue-world'
        }
    },
    computed: {

    },
    methods: {

    },
    beforeRouterEnter (to, from, next) {
        // 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.
        // 이 가드가 호출 될 때 아직 생성되지 않았기 때문에
        // `this` 컴포넌트 인스턴스에 접근할 수 없습니다.
        console.log("beforeRouterEnter" + this.message)
    },
    beforeRouteLeave (to, from, next) {
        // 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비에기션 될 때 호출됩니다.
        // `this` 컴포넌트 인스턴스에 접근 할 수 있습니다.
        console.log("beforeRouteLeave" + this.message)
    }
})
</script>
