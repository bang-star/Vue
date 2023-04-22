<template>
    <div>
        <div>
            {{ author }}
        </div>
        <slot>
            <!-- <div v-for="n in 10" :key="n">
                {{ n }} - MyComponent 기본 데이터입니다.
            </div> -->
        </slot>
    </div>
</template>

<script>
import {Person} from "../type.js"

export default {
    name: 'MyComponent',
    props: {
        author: new Person,
    },
    data() {
        return {
            counter: 0,
        }
    },
    computed: {

    },
    methods: {

    }
}
</script>
