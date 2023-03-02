<template>
    <div>
        <h1>{{ message }}</h1>
        <ol>
            <li v-for="todo in todos" v-bind:key="todo.text">
                {{  todo.text   }}
            </li>
        </ol>
        <ol>
            <li>{{ todos[0].text }}</li>
            <li>{{ todos[1].text }}</li>
            <li>{{ todos[2].text }}</li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            message: '이 페이지는 ' + new Date() + '에 로드되었습니다.',
            todos: [
                { text: '사과'},
                { text: '두리안'},
                { text: '애플망고'},
            ]
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