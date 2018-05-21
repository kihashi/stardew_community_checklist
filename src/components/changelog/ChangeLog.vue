<template>
  <section class="section">
    <div class="container is-fluid">
      <h1 class="title">
        Changelog
      </h1>
      <version v-for="version in changelog.versions" :key="version.date" :version="version"/>
    </div>
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
