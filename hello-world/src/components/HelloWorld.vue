<template>
    <div>
        <h1>{{ message }}</h1>
        <div>{{ rawHtml }}</div>
        <div v-html="rawHtml"></div>
        <button>버튼</button>
        <button v-bind:disabled="isDisabled">버튼</button>

        <p>{{ isDisabled ? 'disabled 상태': 'disabled 상태가 아님.' }}</p>
        <p>{{ 2 + 1 }}</p>


        <a v-bind:[attributeName]="'https://www.naver.com'" target="blank">test</a>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            message: 'Hello, Vue World',
            rawHtml: '<button>버튼</button>',
            isDisabled: true,
            attributeName: 'href'
        }
    },
    methods: {
    }
}
</script>
