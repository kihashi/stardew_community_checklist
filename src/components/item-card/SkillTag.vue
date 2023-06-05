<template>
  <span class="tag is-info">
    <SkillIcon :skill="skill" class="is-small" />
  </span>
</template>

<script setup lang="ts">
import SkillIcon from '@/components/SkillIcon.vue'

defineProps<{ skill: string }>()
</script>
