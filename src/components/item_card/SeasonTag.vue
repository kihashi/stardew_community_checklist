<template>
  <span class="tag is-primary">
    <span class="icon">
        <spring-icon v-if="season === 'spring'"/>
        <summer-icon v-if="season === 'summer'"/>
        <fall-icon v-if="season === 'fall'"/>
        <winter-icon v-if="season === 'winter'"/>
    </span>
  </span>
</template>

<script>
import Seasons from '@/assets/game_data/seasons.json'
import SpringIcon from 'mdi-vue/FlowerIcon'
import SummerIcon from 'mdi-vue/WhiteBalanceSunnyIcon'
import FallIcon from 'mdi-vue/LeafIcon'
import WinterIcon from 'mdi-vue/SnowflakeIcon'
export default {
  name: 'season-tag',
  props: {
    season: {
      type: String,
      required: true,
      default: 'spring',
      validator: function (value) {
        return value in Seasons
      }
    }
  },
  components: {
    SpringIcon,
    SummerIcon,
    FallIcon,
    WinterIcon
  }
}
</script>

<style scoped>

</style>
