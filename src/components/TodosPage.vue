<template>
  <div>
    <TodoInput/>
    <TodosList :listFilter="filter"/>
    <FilterBar @click="setFilter" />
  </div>
</template>

<script>
import TodoInput from './TodoInput'
import TodosList from './TodosList'
import FilterBar from './FilterBar'

export default {
  name: 'TodosPage',
  components: {TodoInput, TodosList, FilterBar},
  data() {
    return {
      filter: 'SHOW_ALL'
    }
  },
  methods: {
    setFilter (filter) {
      this.filter = filter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
