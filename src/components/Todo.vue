<template>
  <div>
    <CompleteTodoCheckbox :todo="todo" />
    <label
      for="todo.id"
      :style="`textDecoration:${labelStyle};color:${color}`"
      @click="toggleTodo();"
    >
      {{ todo.todo }} || id: {{ todo.id }}
    </label>
  </div>
</template>
<script>
import CompleteTodoCheckbox from "./CompleteTodoCheckbox";
import $state from "../store/vue-apollo-store.js";

export default {
  name: "Todo",
  components: { CompleteTodoCheckbox },
  props: {
    todo: {}
  },
  data() {
    return {};
  },
  computed: {
    // a computed getter
    color: function() {
      // `this` points to the vm instance
      return this.todo.completed ? "green" : "black";
    },

    labelStyle: function() {
      // `this` points to the vm instance
      return this.todo.completed ? "line-through" : "none";
    }
  },
  methods: {
    toggleTodo() {
      // not sure what's the best syntax for this
      // of course it would be most natural, if this would just call the mutation implicitly:
      /*
      this.todo.completed = !this.todo.completed;
      // but I suspect, thats rather hard to do without going really deep into how vue-apollo handles its data, if at all possible. */

      // so maybe either so:
      /*
      $state.toggleTodo(this.todo, this.$apollo); // obviously some syntactic sugar needed so we don't have to pass this.$apollo
      
      // or maybe more like this */
      $state.todo.complete(this.todo, this.$apollo);
    }
  }
};
</script>
