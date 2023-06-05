<script setup lang="ts">
import SeasonList from '../item-card/SeasonList.vue'
import SkillList from '../item-card/SkillList.vue'
import BundleButton from '../item-card/BundleButton.vue'
import { useGeneralStore, type Item } from '@/store'
import { computed } from 'vue'

const store = useGeneralStore()

const showSeasonList = computed(() => !(store.HideSpoilers && store.SeasonsSpoilers))
const showSkillList = computed(() => !(store.HideSpoilers && store.SkillsSpoilers))

defineProps<{ item: Item }>()
</script>

<template>
  <tr>
    <td>
      {{ item.name }}
    </td>
    <td>
      {{ item.source }}
    </td>
    <td v-if="showSeasonList">
      <season-list :seasons="item.seasons" />
    </td>
    <td v-if="showSkillList">
      <skill-list :skills="item.skills" />
    </td>
    <td>
      <bundle-button
        v-for="bundleItem in store.getBundleItemsForItem(item.id)"
        :key="bundleItem.id"
        :bundle-item="bundleItem"
        :item="item"
      />
    </td>
  </tr>
</template>
