<script setup>
import router from '@/router'
import { ref } from 'vue'

const menuActive = ref(false)

const named_routes = router.options.routes.filter((route) => route.name)
</script>

<template>
  <section class="hero is-info is-bold">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <h1 class="is-size-3 has-text-weight-semibold is-hidden-mobile">
              Stardew Community Checklist
            </h1>
            <h1 class="is-size-3 has-text-weight-semibold is-hidden-tablet">SCC</h1>
          </a>
          <div
            class="navbar-burger has-text-white"
            v-bind:class="{ 'is-active': menuActive }"
            @click="menuActive = !menuActive"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
          <div class="navbar-end">
            <router-link
              v-for="route in named_routes"
              :key="route.order"
              class="navbar-item"
              @click="menuActive = false"
              :to="route"
            >
              {{ route.name }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped></style>
