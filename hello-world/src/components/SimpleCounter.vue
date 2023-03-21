<template>
    <div>
        <button @click="counter +=  1">{{ counter }}</button>
    </div>
</template>

<script>
export default {
    name: 'SimpleComponent',
    data() {
        // return data
        return { 
            counter: 0 ,
        }
    },
}
</script>
