<template>
  <span class="tags">
    <skill-tag v-for="skill in skills" :key="skill.order" :skill="skill"/>
  </span>
</template>

<script>
import SkillTag from './SkillTag'

export default {
  components: {SkillTag},
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

</style>
