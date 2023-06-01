<template>
  <span class="tags has-addons">
    <skill-tag v-for="skill in skills" :key="skill.order" :skill="skill" />
  </span>
</template>

<script>
import SkillTag from './SkillTag.vue'

export default {
  components: { SkillTag },
  name: 'skill-list',
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.tags {
  justify-content: center;
  flex-wrap: nowrap;
}
</style>
