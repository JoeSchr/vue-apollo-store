<template>
  <ApolloMutation
    class="checkbox"
    :mutation="toggleTodo"
    :variables="{ id: todo.id }"
  >
    <input
      slot-scope="{
        mutate,
        loading
      }"
      type="checkbox"
      :id="todo.id"
      v-model="todo.completed"
      @input="mutate();"
    />
  </ApolloMutation>
</template>
<script>
import $state from "../store/vue-apollo-store.js";

export default {
  props: {
    todo: {}
  },
  data() {
    return {
      toggleTodo: $state.mutation.TOGGLE_TODO
    };
  }
};
</script>

<style scoped>
.checkbox {
  display: inline-block;
}
</style>
