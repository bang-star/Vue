<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <!-- 배열을 v-bind:class에 전달하여 클래스 목록을 지정할 수 있습니다. -->
        <div
            class="test2"
            v-bind:class="[activeClass, errorClass]">
            <h2>Hello Daniel</h2>
        </div>
        <!-- [삼항연산자] 항상 errorClass를 적용하고 isActive가 ture일 때만 activeClass를 적용합니다. -->
        <div 
            v-bind:class="[isActive ? activeclass : '', errorClass]">
            <h2>Hello Daniel</h2>
        </div>
        <div 
            v-bind:class="[{active : isActive}, errorClass]">
            <h2>Hello Daniel</h2>
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            isActive: true,
            hasError: false,
            error: null,
            classObject: {
                active: true,
                'text-danger': false
            },
            activeClass: 'active',
            errorClass: 'text-danger'
        }
    },
    computed: {
        classObject2() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
}
</script>
