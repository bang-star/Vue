<template>
    <div>
        $ <input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)">
    </div>
</template>

<script>
export default {
    name: 'CurrentcyInput',
    Props: ['value'],
    data() {
        // return data
        return { 
            counter: 0 ,
        }
    },
    methods: {
        updateValue(value) {
            let formattedValue = value
            .trim()
            // 소수 자릿수 2자리로 줄입니다.
            .slice(0, value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3)

            if(formattedValue !== value) {
                this.$refs.input.value = formattedValue
            }

            this.$emit('input', Number(formattedValue))
        }

    }
}
</script>
