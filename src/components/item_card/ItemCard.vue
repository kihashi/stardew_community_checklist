<script setup lang="ts">
import SeasonList from './SeasonList.vue'
import SkillList from './SkillList.vue'
import BundleButton from './BundleButton.vue'
import { useGeneralStore, type Item } from '@/store'

const store = useGeneralStore()

const showItemDesc = !(store.HideSpoilers && store.ItemInfoSpoilers)
const showSeasonList = !(store.HideSpoilers && store.SeasonsSpoilers)
const showSkillList = !(store.HideSpoilers && store.SkillsSpoilers)

interface Props {
  item?: Item
}

withDefaults(defineProps<Props>(), {
  item: () => ({
    id: 22,
    name: 'Purple Mushroom',
    source: 'Can be found in the mines or in the farm cave if you selected the mushroom perk.',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    skills: ['mining', 'foraging'],
    bundles: [
      {
        count: 1,
        bundle_id: 5,
        id: 24
      },
      {
        count: 1,
        bundle_id: 23,
        id: 25
      }
    ]
  })
})
</script>

<template>
  <div class="card" v-if="item">
    <header class="card-header">
      <p class="card-header-title">
        {{ item.name }}
      </p>
    </header>
    <div class="card-content">
      <div class="content item-source" v-if="showItemDesc">
        {{ item.source }}
      </div>
      <div class="content">
        <bundle-button
          v-for="bundleItem in store.getBundleItemsForItem(item.id)"
          :key="bundleItem.id"
          :bundle-item="bundleItem"
          :item="item"
        />
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item item-seasons" v-if="showSeasonList">
        <season-list :seasons="item.seasons" />
      </div>
      <div class="card-footer-item item-skills" v-if="showSkillList">
        <skill-list :skills="item.skills" />
      </div>
    </footer>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
