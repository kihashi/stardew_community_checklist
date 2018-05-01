<template>
  <span>
    <spring-icon v-if="season.id === 'spring'"/>
    <summer-icon v-if="season.id === 'summer'"/>
    <fall-icon v-if="season.id === 'fall'"/>
    <winter-icon v-if="season.id === 'winter'"/>
  </span>
</template>

<script>
import SpringIcon from 'mdi-vue/FlowerIcon'
import SummerIcon from 'mdi-vue/WhiteBalanceSunnyIcon'
import FallIcon from 'mdi-vue/LeafIcon'
import WinterIcon from 'mdi-vue/SnowflakeIcon'
export default {
  name: 'season-icon',
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
    SpringIcon,
    SummerIcon,
    FallIcon,
    WinterIcon
  }
}
</script>

<style>

</style>
