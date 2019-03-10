<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <a class="button is-rounded is-fullwidth" :class="ButtonClass"
        @click="ToggleItemInBundle">
        <span class="icon">
          <font-awesome-icon :icon="ItemInBundle ? InBundleIcon : NotInBundleIcon"/>
        </span>
        <span class="is-size-7-mobile">{{bundleItem.bundle.name}}{{numberInBundle}}</span>
      </a>
    </div>
    <div class="control">
      <router-link class="button is-rounded is-light" :to="{ name: 'bundle-items', params: { id: bundleItem.bundle.id } }">
        <span class="icon">
          <external-link/>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faCheckSquare from '@fortawesome/fontawesome-free-regular/faCheckSquare'
import faSquare from '@fortawesome/fontawesome-free-regular/faSquare'
import ExternalLink from 'mdi-vue/OpenInNewIcon'
export default {
  name: 'bundle-button',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    ExternalLink
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
    },
    ButtonClass () {
      if (this.ItemInBundle) {
        return 'is-success'
      } else if (this.IsBundleComplete(this.bundleItem.bundle)) {
        return ''
      } else {
        return 'is-danger'
      }
    },
    numberInBundle () {
      return this.bundleItem.count > 1 ? ` (${this.bundleItem.count})` : ''
    }
  },
  methods: {
    ToggleItemInBundle () {
      if (!this.ItemInBundle) {
        this.$store.commit('RedeemItem', this.bundleItem)
      } else {
        this.$store.commit('UndoRedeemItem', this.bundleItem)
      }
    },
    IsBundleComplete (bundle) {
      return this.$store.getters.IsBundleComplete(bundle)
    }
  }
}
</script>

<style scoped>

</style>
