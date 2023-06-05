<script setup lang="ts">
import BundleNav from '@/components/bundles/BundleNav.vue'
import { useGeneralStore } from '@/store'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
const store = useGeneralStore()

const bundle = store.getBundleById(Number(router.currentRoute.value.params.id))
</script>

<template>
  <div>
    <BundleNav />
    <section class="section">
      <RouterView :key="bundle?.id" />
    </section>
  </div>
</template>
