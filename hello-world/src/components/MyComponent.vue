<template>
    <div class="form-control">
        <input type="date">
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    props: {
        'text': String,
    },
    data() {
        return {
            message: this.text, 
        }
    },
    computed: {
    }
}
</script>
