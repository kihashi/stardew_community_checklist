<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useGeneralStore } from '@/store'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const store = useGeneralStore()

const menuActive = ref(false)
</script>

<template>
  <section class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-item">
          <h1 class="subtitle">Bundles</h1>
        </div>
        <div
          class="navbar-burger burger"
          v-bind:class="{ 'is-active': menuActive }"
          @click="menuActive = !menuActive"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
        <div class="navbar-start">
          <div
            class="navbar-item has-dropdown is-hoverable"
            v-for="room in store.rooms"
            :key="room.id"
          >
            <a class="navbar-link">
              <span class="icon has-text-success" v-if="store.isRoomComplete(room.id)">
                <font-awesome-icon icon="check-circle" />
              </span>
              <span>{{ room.name }}</span>
            </a>
            <div class="navbar-dropdown">
              <RouterLink
                class="navbar-item"
                v-for="bundle in store.getBundlesInRoom(room.id)"
                :key="bundle.id"
                @click="menuActive = false"
                :to="{ name: 'bundle-items', params: { id: bundle.id } }"
              >
                <span class="icon has-text-success" v-if="store.isBundleComplete(bundle.id)">
                  <font-awesome-icon icon="check-circle" />
                </span>
                <span>{{ bundle.name }}</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
