<template>
    <div>
        <h2>Hello, Vue World</h2>
        <h2 style="color: blue">이름 : {{ firstName }}</h2>
        <h2 style="color: red">성: {{ lastName }}</h2>
        <h2 style="color: green">성명: {{ fullName }}</h2>

        <button @click="fullNameGS = 'bang star'">Setter button</button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return{
            firstName: 'Daniel',
            lastName: 'Bang',
        }
    },
    computed: {
       fullName() {
            return this.firstName + ' ' + this.lastName
       },
       fullNameGS: {
            // getter
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            set: function(newVal) {
                const names = newVal.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
       }
    },
    methods: {
        reversedmessage2: function(){
            return this.message.split('').reverse().join('')
        }
    }
}
</script>
