<template>
    <div>
        <h1>Hello Wrold</h1>
        <!-- 선언적 렌더링 -->
        <h3 v-bind:title="message">내 위에 잠시 마우스를 올리면 동적으로 바인딩된 title을 볼 수 있습니다.</h3>
        <h4>{{ message }}</h4>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            message: '이 페이지는 ' + new Date() + '에 로드되었습니다.'
        }
    },
    watch: {

    },
    created: function () {

    },
    methods: {

    }
}
</script>