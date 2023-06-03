<script setup lang="ts">
import ItemSearch from '@/components/search/ItemSearch.vue'
import SeasonFilter from '@/components/search/SeasonFilter.vue'
import SkillFilter from '@/components/search/SkillFilter.vue'

interface Filters {
  nameFilter: string
  seasonFilter: { selectedSeasons: string[]; seasonExclusive: boolean }
  skillFilter: { selectedSkills: string[]; skillExclusive: boolean }
}

const props = defineProps<{
  filters: Filters
}>()
const emit = defineEmits<{ (e: 'update:filters', val: Filters): void }>()

function updateName(name: string) {
  const obj = { ...props.filters, nameFilter: name }
  console.log(obj, name)
  emit('update:filters', { ...props.filters, nameFilter: name })
}

function updateSeasons(seasonFilter: typeof props.filters.seasonFilter) {
  console.log(seasonFilter)
  emit('update:filters', { ...props.filters, seasonFilter })
}

function updateSkills(skillFilter: typeof props.filters.skillFilter) {
  emit('update:filters', { ...props.filters, skillFilter })
}
</script>

<template>
  <div class="columns">
    <div class="column">
      <ItemSearch v-model="filters.nameFilter" />
    </div>
    <div class="column">
      <SeasonFilter v-model="filters.seasonFilter" />
    </div>
    <div class="column">
      <SkillFilter v-model="filters.skillFilter" />
    </div>
  </div>
</template>
