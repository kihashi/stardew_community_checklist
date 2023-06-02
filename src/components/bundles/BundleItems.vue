<script setup lang="ts">
import ItemCard from '@/components/item_card/ItemCard.vue'
import ItemTable from '@/components/item_table/ItemTable.vue'
import { useGeneralStore } from '@/store'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useGeneralStore()
const bundleId = computed(() =>
  Number.parseInt(Array.isArray(route.params.id) ? route.params.id[0] : route.params.id)
)

const bundle = computed(() => store.getBundleById(bundleId.value))
const bundleItems = computed(() =>
  bundle.value ? store.getBundleItemsInBundle(bundle.value.id) : []
)
const items = computed(() =>
  bundleItems.value.map((i) => store.getItemById(i.item_id)).filter((v, i, a) => a.indexOf(v) === i)
)
const room = computed(() => (bundle.value ? store.getRoomById(bundle.value.room) : undefined))

const hideBundleItems = computed(() => store.HideSpoilers && store.BundleRewardsSpoilers)
</script>

<template>
  <div id="bundle-items">
    <section class="container" v-if="bundle">
      <div class="columns">
        <div class="column">
          <h3 class="title is-4">
            {{ bundle.name }}
            <span class="is-pulled-right"
              >{{ store.getNumberOfBundleItemsStoredInBundle(bundle.id) }} /
              {{ bundle.items_required }}</span
            >
          </h3>
          <h5 class="subtitle bundle-reward" v-if="!hideBundleItems">
            {{ bundle.reward }}
          </h5>
          <progress
            class="progress is-info"
            :value="store.getNumberOfBundleItemsStoredInBundle(bundle.id)"
            :max="bundle.items_required"
          />
        </div>
        <div class="column" v-if="room">
          <h3 class="title is-4">
            {{ room.name }}
            <span class="is-pulled-right"
              >{{ store.getNumberOfRoomItemsStored(bundle.room) }} /
              {{ store.getTotalRoomRequired(bundle.room) }}</span
            >
          </h3>
          <h5 class="subtitle" v-if="!hideBundleItems">
            {{ room.reward }}
          </h5>
          <progress
            class="progress is-info"
            :value="store.getNumberOfRoomItemsStored(bundle.room)"
            :max="store.getTotalRoomRequired(room.id)"
          />
        </div>
      </div>
      <div class="columns is-multiline">
        <item-table v-if="store.CompactView" :items="items" />
        <div
          v-else
          class="column is-3-widescreen is-4-desktop is-12-mobile is-6-tablet is-flex"
          v-for="item in items"
          :key="item?.id"
        >
          <item-card :item="item"></item-card>
        </div>
      </div>
    </section>
  </div>
</template>
