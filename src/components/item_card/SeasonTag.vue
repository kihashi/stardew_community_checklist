<template>
  <span class="tag is-primary">
     <season-icon :season="season" class="is-small"></season-icon>
  </span>
</template>

<script>
import SeasonIcon from '@/components/SeasonIcon'
export default {
  name: 'season-tag',
  props: {
    season: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: 'spring',
          name: 'Spring'
        }
      }
    }
  },
  components: {
    SeasonIcon
  }
}
</script>

<style scoped>

</style>
