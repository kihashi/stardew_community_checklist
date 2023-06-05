<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    version: {
      id: string
      date: string
      link: string
      changes: string[]
    }
  }>(),
  {
    version: () => ({
      id: 'Version 1.0',
      date: '2016-04-13',
      link: 'Version-1.0',
      changes: ['Initial Version']
    })
  }
)

const releaseUrl = computed(
  () => 'https://github.com/kihashi/stardew_community_checklist/releases/tag/' + props.version.link
)
</script>

<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ version.id }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <ul>
          <li v-for="change in version.changes" :key="change">
            {{ change }}
          </li>
        </ul>
      </div>
    </div>
    <div class="card-footer">
      <p class="card-footer-item has-text-centered-mobile">Release Date: {{ version.date }}</p>
      <p class="card-footer-item">
        <a :href="releaseUrl" class="button">
          <span class="icon">
            <font-awesome-icon icon="fa-brands fa-github" />
          </span>
          <span>Release</span>
        </a>
      </p>
    </div>
  </div>
</template>
