<template>
  <p>
    Show: <span v-for="(filter, index) in filters"> 
           <a :style="activeStyle(filter.active)"  
             href="#" 
              @click="setFilter(filter.name)"
            >
            {{ filter.label }}
          </a><span v-if="index + 1 < filters.length"> - </span>
        </span>
  </p>  
</template>

<script>
export default {
  name: 'FilterBar',
  data () {
    return {
      filters: [
        {
          name: 'SHOW_ALL',
          label: 'All',
          active: true
        },
        {
          name: 'SHOW_COMPLETED',
          label: 'Completed',
          active: false
        },
        {
          name: 'SHOW_ACTIVE',
          label: 'Active',
          active: false
        }
      ]
    }
  },
  methods: {
    setFilter (filter) {
      this.setActiveFilter(filter)
      this.$emit('click', filter)
    },
    activeStyle (active) {
      if (!active) {
         return 'text-decoration: none'
      }
      return 'text-decoration: underline'
    },
    setActiveFilter(filterName) {
      this.filters.map(filter => {
        if (filterName === filter.name) {
          filter.active = true
        } else {
          filter.active = false
        }
      })
    }
  }
}
</script>

