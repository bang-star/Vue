<template>
  <div>
    <h1>Hello Vue World</h1>
  </div>
</template>

<script>
import testMixin from "../mixins/common.js"

export default {
  mixins: [testMixin],
  name: 'HelloWorld',
  mounted() {
    console.log('world')
  },
  data() {
    return {
    }
  },
  computed: {

  },
  watch: {
  }
}
</script>