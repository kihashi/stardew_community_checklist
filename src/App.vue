<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import HeaderBar from './components/HeaderBar.vue'
import { RouterView } from 'vue-router'
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
