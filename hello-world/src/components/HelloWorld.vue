<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <h2 v-if="awesome">Awesome</h2>
        <h2 v-else>Nope</h2>
        <template v-if="loginType === 'username'">
            <label>사용자 이름: </label>
            <input type="text" placeholder="사용자 이름을 입력하세요." key="username-input">
        </template>
        <template v-else>
            <label>이메일: </label>
            <input type="text" placeholder="이메일 주소를 입력하세요." key="email-input">
        </template>
        <div>
            <button @click="toggle">Toggle</button>
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            awesome: true,
            loginType: 'username',
        }
    },
    methods: {
        toggle() {
            if(this.loginType === 'username') this.loginType = 'email'
            else this.loginType = 'username'
        }
    }
}
</script>
