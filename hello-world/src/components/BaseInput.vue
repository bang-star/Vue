<template>
    <div>
        <label>
            {{ label }}
            <input  type="text" 
                    v-bind="$attrs"
                    v-bind:value="value" 
                    @input="$emit('input', $event.target.value)">
        </label>
    </div>
</template>

<script>
export default ({
    name: 'BaseInput',
    inheritAttrs: false,
    props: ['label', 'value'],
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

    }
})
</script>
