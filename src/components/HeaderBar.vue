<template>
  <section class="hero is-info is-bold">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <h1 class="is-size-3 has-text-weight-semibold is-hidden-mobile">Stardew Community Checklist</h1>
              <h1 class="is-size-3 has-text-weight-semibold is-hidden-tablet">SCC</h1>
            </a>
            <div class="navbar-burger"
                v-bind:class="{ 'is-active': menu_active }"
                @click="menu_active = !menu_active"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="navbar-menu"
            v-bind:class="{ 'is-active': menu_active }">
            <div class="navbar-end">
              <router-link v-for="route in named_routes"
                          :key="route.order"
                          class="navbar-item"
                          @click.native="menu_active = false"
                          :to="route">
                {{route.name}}
              </router-link>
            </div>
          </div>

        </div>
      </nav>
  </section>
</template>

<script>
export default {
  name: 'header-bar',
  data: function () {
    return {
      menu_active: false
    }
  },
  computed: {
    named_routes: function () {
      return this.$router.options.routes.filter(route => route.hasOwnProperty('name'))
    }
  }
}
</script>

<style scoped>
</style>
