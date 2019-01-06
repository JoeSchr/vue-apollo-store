<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="todo" placeholder="Add a task" />
    </form>
    <p v-if="error">There has been an error<br />{{ error }}</p>
  </div>
</template>

<script>
import $state from "../store/vue-apollo-store.js";

export default {
  name: "TodoInput",
  data() {
    return {
      todo: "",
      error: false
    };
  },
  mounted() {},
  methods: {
    cleanup() {
      this.todo = "";
    },
    addTodo() {
      $state.todos.push(this.todo, this.$apollo);
      this.cleanup();
    }
  }
};
</script>

<style scoped>
input {
  font-size: 14px;
  padding: 2px 10px;
  width: 200px;
  height: 40px;
}
</style>
