<template>
  <span class="tag is-info">
    <span class="icon">
      <farming-icon v-if="skill === 'farming'"/>
      <mining-icon v-if="skill === 'mining'"/>
      <foraging-icon v-if="skill === 'foraging'"/>
      <fishing-icon v-if="skill === 'fishing'"/>
      <combat-icon v-if="skill === 'combat'"/>
    </span>
  </span>
</template>

<script>
import Skills from '@/assets/game_data/skills.json'
import FarmingIcon from 'mdi-vue/CowIcon'
import MiningIcon from 'mdi-vue/DiamondIcon'
import ForagingIcon from 'mdi-vue/MushroomIcon'
import FishingIcon from 'mdi-vue/FishIcon'
import CombatIcon from 'mdi-vue/SwordIcon'
export default {
  name: 'skill-tag',
  props: {
    skill: {
      type: String,
      required: true,
      default: 'farming',
      validator: function (value) {
        return value.toLowerCase() in Skills
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
