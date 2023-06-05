<template>
  <span class="tags has-addons">
    <skill-tag v-for="skill in skills" :key="skill" :skill="skill" />
  </span>
</template>

<script setup lang="ts">
import SkillTag from './SkillTag.vue'

defineProps<{ skills: string[] }>()
</script>

<style scoped>
.tags {
  justify-content: center;
  flex-wrap: nowrap;
}
</style>
