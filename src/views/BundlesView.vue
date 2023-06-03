<script setup lang="ts">
import BundleNav from '@/components/bundles/BundleNav.vue'
import router from '@/router'
import { useGeneralStore } from '@/store'
import { RouterView } from 'vue-router'

const store = useGeneralStore()
const bundle = store.getBundleById(Number(router.currentRoute.value.params.id))
</script>

<template>
  <div>
    <BundleNav />
    <section class="section">
      <RouterView :key="bundle?.id"></RouterView>
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
