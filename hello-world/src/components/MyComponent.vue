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
        <div>
            Calculated defaultProp From Parent : {{ defaultProp }}
        </div>
        <div>
            Calculated numberProp From Parent : {{ numberProp }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    props: {
        'text': String,
        'defaultProp': {
            type: String,
            default: '',
        },
        'numberProp': {
            validator: function(value) {
                return value > 10
            }
        }
    },
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
