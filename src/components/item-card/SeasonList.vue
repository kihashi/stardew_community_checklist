<script setup lang="ts">
import SeasonTag from './SeasonTag.vue'

withDefaults(defineProps<{ seasons: string[] }>(), {
  seasons: () => ['spring', 'summer', 'fall', 'winter']
})
</script>

<template>
  <span class="tags has-addons">
    <season-tag v-for="season in seasons" :key="season" :season="season" />
  </span>
</template>

<style scoped>
.tags {
  justify-content: center;
  flex-wrap: no-wrap;
}
</style>
