<template>
	<div>
		<div id="zero-demo">
			<button @click="show = !show">Toggle render</button>
			<transition name="bounce">
				<p v-if="show">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ut odit illo animi tempora explicabo ullam aliquid dicta iste vero qui quisquam cupiditate voluptates asperiores ad expedita ab commodi sint!</p>
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
.bounce-enter-active {
    animation: bounce-in .5s;
}
.bounce-leave-active {
    animation:  bounce-in .5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>