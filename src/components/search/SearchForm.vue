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
  emit('update:filters', { ...props.filters, nameFilter: name })
}

function updateSeasons(seasonFilter: typeof props.filters.seasonFilter) {
  emit('update:filters', { ...props.filters, seasonFilter })
}

function updateSkills(skillFilter: typeof props.filters.skillFilter) {
  emit('update:filters', { ...props.filters, skillFilter })
}
</script>

<template>
  <div class="columns">
    <div class="column">
      <ItemSearch :modelValue="filters.nameFilter" @update:modelValue="updateName" />
    </div>
    <div class="column">
      <SeasonFilter :modelValue="filters.seasonFilter" @update:modelValue="updateSeasons" />
    </div>
    <div class="column">
      <SkillFilter :modelValue="filters.skillFilter" @update:modelValue="updateSkills" />
    </div>
  </div>
</template>
