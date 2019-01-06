<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <h3>My Todos</h3>
    <TodosPage/>
  </div>
</template>

<script>
import TodosPage from "./components/TodosPage";

export default {
  name: "App",
  components: {
    TodosPage
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
