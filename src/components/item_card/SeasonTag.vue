<template>
  <span class="tag" v-bind:class="seasonColor">
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
        return value.toLowerCase() in Seasons
      }
    }
  },
  computed: {
    seasonColor: function () {
      switch (this.season) {
        case 'spring':
          return 'is-success'
        case 'summer':
          return 'is-warning'
        case 'fall':
          return 'is-danger'
        case 'winter':
          return 'is-info'
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
