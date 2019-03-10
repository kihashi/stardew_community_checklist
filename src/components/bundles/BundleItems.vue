<template>
<div id="bundle-items">
    <section class="container">
      <div class="columns">
        <div class="column">
          <h3 class="title is-4">
            {{bundle.name}}
            <span class="is-pulled-right">{{ GetBundleItemsRedeemed(bundle) }} / {{bundle.items_required}}</span>
          </h3>
          <h5 class="subtitle bundle-reward" v-if="!hideBundleItems">
            {{bundle.reward}}
          </h5>
          <progress class="progress is-info" :value="GetBundleItemsRedeemed(bundle)" :max="bundle.items_required" />
        </div>
        <div class="column">
          <h3 class="title is-4">
            {{bundle.room.name}}
            <span class="is-pulled-right">{{bundle.room.items_required}}</span>
          </h3>
          <h5 class="subtitle" v-if="!hideBundleItems">
            {{bundle.room.reward}}
          </h5>
        </div>
      </div>
        <!-- Room Progress -->
        <!-- Bundle Progress -->
    <!-- </section>
    <section class="section"> -->
        <div class="columns is-multiline">
          <div class="column is-3 is-12-mobile is-6-tablet is-flex" v-for="bundleitem in bundleItems" :key="bundleitem.id">
            <item-card :item="bundleitem.item"></item-card>
          </div>
        </div>
    </section>
</div>
</template>

<script>
import ItemCard from '@/components/item_card/ItemCard'
export default {
  name: 'bundle-items',
  computed: {
    bundle: function () {
      return this.$store.getters.GetBundleById(this.$route.params.id)
    },
    hideBundleItems: function () {
      return this.$store.state.HideSpoilers && this.$store.state.BundleRewardsSpoilers
    },
    bundleItems: function () {
      return this.bundle.items.filter(item => !(this.$store.state.HideCompleted && this.isItemComplete(item)))
    }
  },
  methods: {
    isItemComplete: function (item) {
      return item.item.bundles.every(this.$store.getters.IsBundleItemRedeemed)
    },
    GetBundleItemsRedeemed: function (bundle) { return this.$store.getters.GetBundleItemsRedeemed(bundle) }
  },
  components: {
    ItemCard
  }
}
</script>
