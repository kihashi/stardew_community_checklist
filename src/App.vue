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
    var v1data = localStorage.getItem('user_data')
    if (v1data !== null && v1data !== '') {
      this.$store.dispatch('LoadV1State', JSON.parse(atob(v1data)))
      localStorage.removeItem('user_data')
      localStorage.setItem('v1data', v1data)
    }
  }
}
</script>
