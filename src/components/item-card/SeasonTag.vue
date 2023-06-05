<template>
  <span class="tag is-primary">
    <season-icon :season="season" class="is-small"></season-icon>
  </span>
</template>

<script setup lang="ts">
import SeasonIcon from '@/components/SeasonIcon.vue'

defineProps<{ season: string }>()
</script>

<style scoped></style>
