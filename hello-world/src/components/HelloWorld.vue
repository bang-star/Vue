<template>
	<div>
		<div id="list-demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
            {{ item }}
        </span>
      </transition-group>
		</div>
	</div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>

<script>

export default {
  name: 'HelloWorld',
  mounted() {

  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    shuffle: function() {
      this.items = _.shuffle(this.items)
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    }
  },
  computed: {

  }
}
</script>

<style>
.list-item {
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active, .list-leave-active {
    transition: all 1s;
}

.list-enter, .list-lave-to /* .list-leave-active below verstion 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}
.list-move {
    transition: transform 1s;
}
</style>