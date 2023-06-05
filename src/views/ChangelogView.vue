<script setup lang="ts">
import ChangeLogJson from '@/assets/game_data/changelog.json'
import Version from '@/components/changelog/VersionDisplay.vue'
</script>

<template>
  <section class="section">
    <section class="container">
      <h1 class="title">Changelog</h1>
      <Version v-for="version in ChangeLogJson.versions" :key="version.date" :version="version" />
    </section>
  </section>
</template>

<style></style>
