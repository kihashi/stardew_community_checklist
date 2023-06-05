<script setup lang="ts">
defineProps<{ season: string }>()
</script>

<template>
  <span class="icon" v-bind:data-season="season">
    <mdicon name="flower" v-if="season === 'spring'" />
    <mdicon name="white-balance-sunny" v-if="season === 'summer'" />
    <mdicon name="leaf" v-if="season === 'fall'" />
    <mdicon name="snowflake" v-if="season === 'winter'" />
  </span>
</template>

<style scoped>
.icon {
  position: relative;
}

.icon:hover::after {
  content: attr(data-season);
  display: block;
  position: absolute;
  bottom: -1.85rem;
  border-radius: 3px;
  font-size: 0.75rem;
  background-color: #00d1b2;
  padding: 0.1rem 0.3rem;
  text-transform: capitalize;
  color: #000;
  z-index: 100;
  font-weight: bold;
}
</style>
