<script setup lang="ts">
import ItemSearch from '@/components/search/ItemSearch.vue'
import SeasonFilter from '@/components/search/SeasonFilter.vue'
import SkillFilter from '@/components/search/SkillFilter.vue'

interface Filters {
  nameFilter: string
  seasonFilter: { selectedSeasons: string[]; seasonExclusive: boolean }
  skillFilter: { selectedSkills: string[]; skillExclusive: boolean }
}

const filters = defineModel<Filters>()
</script>

<template>
  <div class="columns" v-if="filters">
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
