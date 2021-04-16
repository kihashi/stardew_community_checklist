<template>
  <section class="section">
    <div class="has-text-centered container">
      <H1 class="title">
        Stardew Community Checklist
      </H1>
      <h2 class="subtitle">
        Track your progress on the community center bundles
      </h2>
      <img class="headerimage" :src="require('@/static/favicon.png')">
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',

  components: {
  }
}
</script>

<style lang="scss" scoped>
  .headerimage {
    max-height: 50vh
  }
</style>
