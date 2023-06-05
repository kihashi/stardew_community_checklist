<script setup lang="ts">
import SkillTag from './SkillTag.vue'

defineProps<{ skills: string[] }>()
</script>

<template>
  <span class="tags has-addons">
    <skill-tag v-for="skill in skills" :key="skill" :skill="skill" />
  </span>
</template>

<style scoped>
.tags {
  justify-content: center;
  flex-wrap: nowrap;
}
</style>
