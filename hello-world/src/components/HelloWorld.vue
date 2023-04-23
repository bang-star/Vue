<template>
	<div>
		<div id="zero-demo">
			<button @click="show = !show">Toggle render</button>
      <br />
			<transition name="fade" mode="out-in">
        <button v-if="show" key="on">ON</button>
        <button v-else key="off">OFF</button>
			</transition>
		</div>
	</div>
</template>

<script>

export default {
  name: 'HelloWorld',
  mounted() {

  },
  data() {
    return {
      show: true,
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>