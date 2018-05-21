<template>
  <span class="tag is-info">
     <skill-icon :skill="skill" class="is-small"/>
  </span>
</template>

<script>
import SkillIcon from '@/components/SkillIcon'
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
    SkillIcon
  }
}
</script>

<style scoped>

</style>
