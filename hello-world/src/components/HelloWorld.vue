<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <!-- 인라인 -->
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">South</div>
        <!-- 객체 -->
        <div v-bind:style="styleObject">Korea</div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            activeColor: 'red',
            fontSize: '30',
            styleObject: {
                color: 'red',
                fontSize: '20px',
            }
        }
    },
    computed: {

    }
}
</script>
