<template>
  <span class="tag is-info">
    <span class="icon is-small">
      <skill-icon :skill="skill" />
    </span>
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
