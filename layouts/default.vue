<template>
  <div id="app">
    <HeaderBar />
    <section id="main-section" class="section">
      <div class="container">
        <nuxt />
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import AppFooter from '@/components/Footer'
export default {
  components: {
    HeaderBar,
    AppFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  #main-section {
    min-height: 100vh
  }
</style>
