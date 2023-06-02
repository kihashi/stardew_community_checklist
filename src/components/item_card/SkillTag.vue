<template>
  <span class="tag is-info">
    <skill-icon :skill="skill" class="is-small" />
  </span>
</template>

<script>
import SkillIcon from '@/components/SkillIcon.vue'

export default {
  name: 'skill-tag',
  props: {
    skill: {
      type: String,
      required: true,
      default: function () {
        return 'farming'
      }
    }
  },
  components: {
    SkillIcon
  }
}
</script>

<style scoped></style>
