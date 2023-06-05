<script setup lang="ts">
import { onMounted } from 'vue'
import AppFooter from './components/AppFooter.vue'
import HeaderBar from './components/HeaderBar.vue'
import { RouterView } from 'vue-router'
import { useGeneralStore } from './store'

const store = useGeneralStore()

onMounted(() => {
  store.migrateV1StateIfExists()
  store.migrateV2StateIfExists()
})
</script>

<template>
  <div id="app">
    <HeaderBar />
    <RouterView />
    <AppFooter />
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
