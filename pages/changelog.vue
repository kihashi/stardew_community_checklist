<template>
  <section class="section">
    <h1 class="title">
      Changelog
    </h1>
    <version v-for="version in changelog" :key="version.date" :version="version" />
  </section>
</template>

<script>
import Version from '@/components/Version'
export default {
  name: 'Changelog',
  components: {
    Version
  },
  async asyncData ({ $content }) {
    const changelog = await $content('changelogs').sortBy('date', 'desc').fetch()

    return {
      changelog
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
