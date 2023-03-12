<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <my-component class="baz boo"></my-component>
        <my-component :class="{active: isActive}"></my-component>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
import MyComponent from "./MyComponent.vue"

export default {
    components: {
        MyComponent,
    },
    name: 'HelloWorld',
    data() {
        return {
            isActive: true,
            hasError: false,
            error: null,
            classObject: {
                active: true,
                'text-danger': false
            },
            activeClass: 'active',
            errorClass: 'text-danger'
        }
    },
    computed: {
        classObject2() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
}
</script>
