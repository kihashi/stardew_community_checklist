<template>
  <span class="tags">
    <season-tag v-for="season in seasons" :key="SeasonOrder(season)" :season="season"/>
  </span>
</template>

<script>
import SeasonTag from './SeasonTag'
import SeasonData from '@/assets/game_data/seasons.json'

export default {
  components: {SeasonTag},
  name: 'season-list',
  props: {
    seasons: {
      type: Array,
      required: true
    }
  },
  methods: {
    SeasonOrder: function (value) {
      return SeasonData[value].id
    }
  }
}
</script>

<style scoped>

</style>
