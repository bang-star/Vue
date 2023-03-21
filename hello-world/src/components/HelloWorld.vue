<template>
    <div>
        <!-- 수식어 .lazy -->
        <div>
            <input type="text" v-model.lazy="msg1">
            <p>{{ msg1 }}</p>
        </div>
        <!-- 수식어 .trim -->
        <div>
            <input type="text" v-model.trim="msg2">
            <p>{{ msg2 }}</p>
        </div>
        <!-- 수식어 .number -->
        <div>
            <input v-model.number="age" type="number">
            <p>{{ age }}</p>
        </div>
        <div>
            <textarea v-model.trim="message" placeholder="여러줄을 입력하세요."></textarea>
            <span>여러 줄을 가지는 메시지: </span>
            <p style="white-space: pre-line">{{ message }}</p>
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
       return {
            msg1: '',
            msg2: '',
            message: '',
            age: 0,
        
       }
    },
    methods: {
      
    },
    computed: {

    }
}
</script>