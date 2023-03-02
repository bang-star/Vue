<template>
    <div>
        <!-- <h1>{{ message }}</h1> -->
        <h3>{{ test.a }}</h3>
        <button @click="test.a = '2'">test 버튼</button>
        <h3>{{ testConst.foo }}</h3>
        <button @click="testConst.foo = 'foo'">testConst 버튼</button>
    </div>
</template>

<script>
let test = {
    a : 1,
}

let testConst = {
    foo: 'bar',
}

Object.freeze(testConst)

export default {
    name: 'HelloWorld',
    // props: ['todo'],
    data() {
        return {
            message: '안녕하세요! Daniel입니다.',
            test: test,
            testConst: testConst
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