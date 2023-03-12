<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <!-- 객체에 Key가 더 있으면 여러 클래스를 토글할 수 있습니다. 또한 v-bind:class 디렉티브는 일반 class 속성과 공존할 수 있습니다. -->
        <div 
            class="static" 
            v-bind:class="{ active: isActive, 'text-danger': hasError }">
            <h2>Hello Daniel</h2>
        </div>
        <!-- 바인딩 객체가 인라인일 필요는 없습니다. -->
        <div 
            class="static" 
            v-bind:class="classObject">
            <h2>Hello Daniel</h2>
        </div>
        <!-- 객체가 Computed 속성일 수 있습니다. -->
        <div 
            class="static" 
            v-bind:class="classObject2">
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
            }
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
