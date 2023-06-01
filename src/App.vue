<script>
import HeaderBar from './components/HeaderBar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    AppFooter
  },
  created() {
    this.$store.commit('initState')
    var v1data = localStorage.getItem('user_data')
    if (v1data !== null && v1data !== '') {
      this.$store.dispatch('LoadV1State', JSON.parse(atob(v1data)))
      localStorage.removeItem('user_data')
      localStorage.setItem('v1data', v1data)
    }
  }
}
</script>

<template>
  <div id="app">
    <header-bar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
