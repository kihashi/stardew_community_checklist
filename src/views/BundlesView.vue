<script setup lang="ts">
import BundleNav from '@/components/bundles/BundleNav.vue'
import router from '@/router'
import { useGeneralStore } from '@/store'

const store = useGeneralStore()
const bundle = store.getBundleById(Number(router.currentRoute.value.params.id))
</script>

<template>
  <div>
    <BundleNav />
    <section class="section">
      <router-view :key="bundle?.id"></router-view>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
