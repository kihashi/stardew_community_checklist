<template>
  <table class="table is-bordered is-striped is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>Item</th>
        <th>Source</th>
        <th v-if="showSeasonList">Seasons</th>
        <th v-if="showSkillList">Skills</th>
        <th>Bundles</th>
      </tr>
    </thead>
    <tbody>
      <ItemTableRow v-for="item in items" :key="item.id" :item="item" />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import ItemTableRow from '@/components/item-table/ItemTableRow.vue'
import { useGeneralStore, type Item } from '@/store'
import { computed } from 'vue'

const store = useGeneralStore()

defineProps<{ items: Item[] }>()

const showSeasonList = computed(() => !(store.HideSpoilers && store.SeasonsSpoilers))
const showSkillList = computed(() => !(store.HideSpoilers && store.SkillsSpoilers))
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed;
}
</style>
