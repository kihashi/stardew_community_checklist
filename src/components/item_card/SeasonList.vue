<template>
  <span class='tags has-addons'>
    <season-tag v-for='season in seasons' :key='season.order' :season='season'/>
  </span>
</template>

<script>
import SeasonTag from './SeasonTag'

export default {
  components: {SeasonTag},
  name: 'season-list',
  props: {
    seasons: {
      type: Array,
      required: true,
      default: function () {
        return [
          {
            id: 'spring',
            order: 0,
            name: 'Spring'
          },
          {
            id: 'summer',
            order: 1,
            name: 'Summer'
          },
          {
            id: 'fall',
            order: 2,
            name: 'Fall'
          },
          {
            id: 'winter',
            order: 3,
            name: 'Winter'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
