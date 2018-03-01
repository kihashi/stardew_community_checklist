<template>
  <span class="tag is-info">
    <span class="icon">
      <farming-icon v-if="skill.id === 'farming'"/>
      <mining-icon v-if="skill.id === 'mining'"/>
      <foraging-icon v-if="skill.id === 'foraging'"/>
      <fishing-icon v-if="skill.id === 'fishing'"/>
      <combat-icon v-if="skill.id === 'combat'"/>
    </span>
  </span>
</template>

<script>
import FarmingIcon from 'mdi-vue/CowIcon'
import MiningIcon from 'mdi-vue/DiamondIcon'
import ForagingIcon from 'mdi-vue/MushroomIcon'
import FishingIcon from 'mdi-vue/FishIcon'
import CombatIcon from 'mdi-vue/SwordIcon'
export default {
  name: 'skill-tag',
  props: {
    skill: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: 'farming',
          name: 'Farming'
        }
      }
    }
  },
  components: {
    FarmingIcon,
    MiningIcon,
    ForagingIcon,
    FishingIcon,
    CombatIcon
  }
}
</script>

<style scoped>

</style>
