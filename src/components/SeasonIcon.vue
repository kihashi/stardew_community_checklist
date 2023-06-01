<template>
  <span class="icon" v-bind:data-season="season.id">
    <spring-icon v-if="season.id === 'spring'" />
    <summer-icon v-if="season.id === 'summer'" />
    <fall-icon v-if="season.id === 'fall'" />
    <winter-icon v-if="season.id === 'winter'" />
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

<style scoped>
.icon {
  position: relative;
}

.icon:hover::after {
  content: attr(data-season);
  display: block;
  position: absolute;
  bottom: -1.85rem;
  border-radius: 3px;
  font-size: 0.75rem;
  background-color: #00d1b2;
  padding: 0.1rem 0.3rem;
  text-transform: capitalize;
  color: #000;
  z-index: 100;
  font-weight: bold;
}
</style>
