<template>
  <div id="app">
    <header-bar/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import AppFooter from '@/components/AppFooter'
export default {
  name: 'App',
  components: {
    HeaderBar,
    AppFooter
  },
  created () {
    this.$store.commit('initState')
  }
}
</script>
