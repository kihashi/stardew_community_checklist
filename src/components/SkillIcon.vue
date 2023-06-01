<template>
  <span class="icon" v-bind:data-skill="skill.id">
    <farming-icon v-if="skill.id === 'farming'" />
    <mining-icon v-if="skill.id === 'mining'" />
    <foraging-icon v-if="skill.id === 'foraging'" />
    <fishing-icon v-if="skill.id === 'fishing'" />
    <combat-icon v-if="skill.id === 'combat'" />
  </span>
</template>

<script>
import FarmingIcon from 'mdi-vue/CowIcon'
import MiningIcon from 'mdi-vue/DiamondIcon'
import ForagingIcon from 'mdi-vue/MushroomIcon'
import FishingIcon from 'mdi-vue/FishIcon'
import CombatIcon from 'mdi-vue/SwordIcon'
export default {
  name: 'skill-icon',
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
.icon {
  position: relative;
}

.icon:hover::after {
  content: attr(data-skill);
  display: block;
  position: absolute;
  bottom: -1.85rem;
  border-radius: 3px;
  font-size: 0.75rem;
  background-color: #209cee;
  padding: 0.1rem 0.3rem;
  text-transform: capitalize;
  color: #fff;
  z-index: 100;
  font-weight: bold;
}
</style>
