<template>
    <div>
        <h4>{{ todo.name }}</h4>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: ['todo'],
    data() {
        return {
            title: 'Vue World',
            message: '안녕하세요! Daniel입니다.',
        }
    },
    watch: {

    },
    created: function () {

    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
}
</script>