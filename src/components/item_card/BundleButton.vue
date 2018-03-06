<template>
  <a class="button is-rounded is-fullwidth" :class="ItemInBundle ? 'is-success' : 'is-danger'"
    @click="ToggleItemInBundle">
    <span class="icon">
      <font-awesome-icon :icon="ItemInBundle ? InBundleIcon : NotInBundleIcon"/>
    </span>
    <span>{{bundleItem.bundle.name}}</span>
  </a>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faCheckSquare from '@fortawesome/fontawesome-free-regular/faCheckSquare'
import faSquare from '@fortawesome/fontawesome-free-regular/faSquare'
export default {
  name: 'bundle-button',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    bundleItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    ItemInBundle: function () {
      return this.$store.getters.IsBundleItemRedeemed(this.bundleItem)
    },
    InBundleIcon () {
      return faCheckSquare
    },
    NotInBundleIcon () {
      return faSquare
    }
  },
  methods: {
    ToggleItemInBundle () {
      if (!this.ItemInBundle) {
        this.$store.commit('RedeemItem', this.bundleItem)
      } else {
        this.$store.commit('UndoRedeemItem', this.bundleItem)
      }
    }
  }
}
</script>

<style scoped>

</style>
