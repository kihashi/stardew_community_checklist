<template>
  <section class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-item">
          <h1 class="subtitle">Bundles</h1>
        </div>
        <div
          class="navbar-burger burger"
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
              <span class="icon has-text-success" v-if="IsRoomComplete(room)"
                ><font-awesome-icon icon="check-circle"
              /></span>
              <span>{{ room.name }}</span>
            </a>
            <div class="navbar-dropdown">
              <router-link
                class="navbar-item"
                v-for="bundle in room.bundles"
                :key="bundle.id"
                @click.native="menu_active = false"
                :to="{ name: 'bundle-items', params: { id: bundle.id } }"
              >
                <span class="icon has-text-success" v-if="IsBundleComplete(bundle)"
                  ><font-awesome-icon icon="check-circle"
                /></span>
                <span>{{ bundle.name }}</span>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheckCircle } from '@fortawesome/fontawesome-free-solid'
export default {
  name: 'bundle_nav',
  components: {
    FontAwesomeIcon,
    faCheckCircle
  },
  data: function () {
    return {
      menu_active: false
    }
  },
  computed: {
    ...mapState(['rooms'])
  },
  methods: {
    IsBundleComplete: function (bundle) {
      return this.$store.getters.IsBundleComplete(bundle)
    },
    IsRoomComplete: function (room) {
      return this.$store.getters.IsRoomComplete(room)
    }
  }
}
</script>
