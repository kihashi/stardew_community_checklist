<template>
  <section class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-burger burger"
              v-bind:class="{ 'is-active': menu_active }"
              @click="menu_active = !menu_active"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" v-bind:class="{ 'is-active': menu_active }">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable" v-for="room in rooms" :key="room.id">
            <a class="navbar-link">
              {{room.name}}
            </a>
            <div class="navbar-dropdown">
              <router-link
                class="navbar-item"
                v-for="bundle in room.bundles"
                :key="bundle.id"
                @click.native="menu_active = false"
                :to="{ name: 'bundle-items', params: { id: bundle.id }}">
                {{bundle.name}}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'bundle_nav',
  data: function () {
    return {
      menu_active: false
    }
  },
  computed: {
    ...mapState(['rooms'])
  }
}
</script>
