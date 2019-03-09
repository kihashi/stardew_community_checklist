<template>
  <section class="section">
    <section class="container">
      <h1 class="title">
        Changelog
      </h1>
      <version v-for="version in changelog.versions" :key="version.date" :version="version"/>
    </section>
  </section>
</template>

<script>
import ChangeLogJson from '@/assets/game_data/changelog.json'
import Version from '@/components/changelog/Version.vue'
export default {
  name: 'changelog',
  components: {
    Version
  },
  data () {
    return {
      changelog: ChangeLogJson
    }
  }
}
</script>

<style>

</style>
