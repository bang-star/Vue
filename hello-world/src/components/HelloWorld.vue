<template>
  <div>
    <h1>Hello Vue World</h1>
    {{ counterState }}
    <button @click="increment"></button>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'HelloWorld',
  mounted() {
    console.log(this.$store)
  },
  data() {
    return {
      // counterState: this.$store.count
    }
  },
  computed: {
    counterState() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>