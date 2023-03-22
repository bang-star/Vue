<template>
    <div>
       <div>
            Prop From Parent : {{ text }} 
        </div>
        <div>
            Local From Parent : {{ message }}
        </div>
        <div>
            Calculated Prop From Parent : {{ calculateMessage }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    props: ['text'],
    data() {
        return {
            message: this.text, 
        }
    },
    computed: {
        calculateMessage() {
            return this.text
        }
    }
}
</script>
