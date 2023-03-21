<template>
    <div>
        <div>
            Message From Parent : {{ myMessage }} 
        </div>
        <div>
            Props From Parent : {{ text }} <br/>
            Props From Parent : {{ isComplete }} 
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    props: ['myMessage', 'text', 'isComplete'],
    data() {
        return {
        }
    },
}
</script>
