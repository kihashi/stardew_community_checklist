<template>
  <div>
    <BundleNav />
    <section class="section">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view :key="bundle"></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
import BundleNav from '@/components/bundles/BundleNav.vue'
export default {
  components: {BundleNav},
  name: 'bundles',
  computed: {
    bundle: function () {
      return this.$store.getters.GetBundleById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

</style>
