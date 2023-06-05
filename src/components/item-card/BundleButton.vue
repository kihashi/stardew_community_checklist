<script setup lang="ts">
import { useGeneralStore, type BundleItem } from '@/store'
import { computed } from 'vue'

const store = useGeneralStore()

interface Props {
  bundleItem: BundleItem
}

const props = defineProps<Props>()

const bundle = store.getBundleById(props.bundleItem.bundle_id)

const itemInBundle = computed(() => store.isBundleItemStored(props.bundleItem.id))

const buttonClass = computed(() => {
  if (itemInBundle.value) {
    return 'is-success'
  } else if (store.isBundleComplete(props.bundleItem.bundle_id)) {
    return ''
  } else {
    return 'is-danger'
  }
})
const numberInBundle = computed(() => {
  return props.bundleItem.count > 1 ? ` (${props.bundleItem.count})` : ''
})

function toggleItemInBundle() {
  if (!itemInBundle.value) {
    store.storeItem(props.bundleItem.id)
  } else {
    store.unstoreItem(props.bundleItem.id)
  }
}
</script>

<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <a class="button is-rounded is-fullwidth" :class="buttonClass" @click="toggleItemInBundle">
        <span class="icon">
          <font-awesome-icon
            :icon="itemInBundle ? 'fa-regular fa-check-square' : 'fa-regular fa-square'"
          />
        </span>
        <span class="is-size-7" v-if="bundle">{{ bundle.name }}{{ numberInBundle }}</span>
      </a>
    </div>
    <div class="control">
      <router-link
        class="button is-rounded is-light"
        :to="{ name: 'bundle-items', params: { id: bundleItem.bundle_id } }"
      >
        <span class="icon is-small">
          <font-awesome-icon icon="fa-solid fa-link"></font-awesome-icon>
        </span>
      </router-link>
    </div>
  </div>
</template>
