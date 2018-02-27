<template>
  <section class="hero is-info is-bold">
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <h1 class="title">Stardew Community Checklist</h1>
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
            <router-link v-for="route in this.$router.options.routes"
                         :key="route.order"
                         class="navbar-item"
                         v-bind:class="{ 'is-active': menu_active }"
                         :to="route">
              {{route.name}}
            </router-link>
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
  }
}
</script>

<style scoped>
</style>
