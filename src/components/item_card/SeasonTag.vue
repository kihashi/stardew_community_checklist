<template>
  <span class="tag is-primary">
    <span class="icon is-small">
      <season-icon :season="season"></season-icon>
    </span>
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
