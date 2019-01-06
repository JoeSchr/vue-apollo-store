<template>
  <div>
    <ul v-if="todos.length">
      <li v-for="todo in visibleTodos" :key="todo.id"><Todo :todo="todo" /></li>
    </ul>
    <p v-else>Add some tasks and let's get some work done!</p>
    <p v-if="allDone">You did everything, awesome!</p>
  </div>
</template>

<script>
import Todo from "./Todo";
import $state from "../store/vue-apollo-store.js";

export default {
  name: "TodosList",
  components: { Todo },
  props: {
    listFilter: {
      type: String
    }
  },
  apollo: {
    todos: $state.todos.all
  },
  data() {
    return {
      todos: ""
    };
  },
  computed: {
    allDone() {
      if (this.todos.length === 0) return false;
      return !this.todos.some(function(todo) {
        return !todo.completed;
      });
    },
    visibleTodos() {
      switch (this.listFilter) {
        case "SHOW_ALL":
          return this.todos;
        case "SHOW_COMPLETED":
          return this.todos.filter(t => t.completed);
        case "SHOW_ACTIVE":
          return this.todos.filter(t => !t.completed);
        default:
          throw new Error("Unknown filter: " + this.listFilter);
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
