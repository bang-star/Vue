<template>
    <div class="foo bar">
        {{ myMessage }}
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    props: ['myMessage'],
    data() {
        return {
        }
    },
}
</script>
