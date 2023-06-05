<script setup lang="ts">
import WhatsNewModal from '@/components/WhatsNewModal.vue'
import { onMounted, ref } from 'vue'

const showModal = ref(false)

onMounted(() => {
  if (localStorage.getItem('visited') === null) {
    showModal.value = true
    localStorage.setItem('visited', 'true')
  }
})
</script>

<template>
  <section class="container">
    <div class="hero is-medium is-bold">
      <div class="hero-body">
        <h1 class="title">Stardew Community Checklist</h1>
        <h2 class="subtitle">Track Your Progress on the Community Center!</h2>
      </div>
    </div>
    <WhatsNewModal
      :class="showModal ? 'is-active' : ''"
      v-on:dismiss-modal="showModal = false"
    ></WhatsNewModal>
  </section>
</template>
