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
    // console.log(this.$store)
  },
  data() {
    return {
      test: '123',
      // counterState: this.$store.count
    }
  },
  computed: {
    testComputed() {
      return this.test
    },
    ...mapState({
      counterState: 'count'
    })
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>