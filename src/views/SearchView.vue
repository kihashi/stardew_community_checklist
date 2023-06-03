<script setup lang="ts">
import ItemCard from '@/components/item_card/ItemCard.vue'
import ItemTable from '@/components/item_table/ItemTable.vue'
import SearchForm from '@/components/search/SearchForm.vue'
import { useGeneralStore } from '@/store'
import _ from 'lodash'
import { computed, ref } from 'vue'

const store = useGeneralStore()

const filters = ref({
  nameFilter: '',
  seasonFilter: {
    selectedSeasons: ['spring', 'summer', 'fall', 'winter'],
    seasonExclusive: false
  },
  skillFilter: {
    selectedSkills: ['farming', 'foraging', 'mining', 'fishing', 'combat'],
    skillExclusive: false
  }
})

function filterSeasons(itemSeasons: string[]) {
  if (filters.value.seasonFilter.seasonExclusive) {
    if (itemSeasons.length !== filters.value.seasonFilter.selectedSeasons.length) {
      return false
    } else {
      var a = itemSeasons
      var b = filters.value.seasonFilter.selectedSeasons
      a.sort()
      b.sort()
      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
          return false
        }
      }
      return true
    }
  } else {
    for (var season of filters.value.seasonFilter.selectedSeasons) {
      if (itemSeasons.indexOf(season) !== -1) {
        return true
      }
    }
    return false
  }
}
function filterSkills(itemSkills: string[]) {
  if (filters.value.skillFilter.skillExclusive) {
    if (itemSkills.length !== filters.value.skillFilter.selectedSkills.length) {
      return false
    } else {
      var a = itemSkills
      var b = filters.value.skillFilter.selectedSkills
      a.sort()
      b.sort()
      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
          return false
        }
      }
      return true
    }
  } else {
    for (var season of filters.value.skillFilter.selectedSkills) {
      if (itemSkills.indexOf(season) !== -1) {
        return true
      }
    }
    return false
  }
}

const filteredItems = computed(() => {
  return _.orderBy(
    store.items
      .filter((item) => !(store.HideCompleted && store.isItemComplete(item.id)))
      .filter(
        (item) => item.name.toLowerCase().indexOf(filters.value.nameFilter.toLowerCase()) !== -1
      )
      .filter((item) => filterSeasons(item.seasons))
      .filter((item) => filterSkills(item.skills)),
    'name'
  )
})
</script>

<template>
  <section class="section">
    <SearchForm v-model:filters="filters"></SearchForm>
    <section class="container">
      <div class="columns is-multiline">
        <item-table v-if="store.CompactView" :items="filteredItems" />
        <div
          v-else
          class="column is-3-widescreen is-4-desktop is-12-mobile is-6-tablet is-flex"
          v-for="item in filteredItems"
          :key="item.id"
        >
          <item-card :item="item"></item-card>
        </div>
      </div>
    </section>
  </section>
</template>
