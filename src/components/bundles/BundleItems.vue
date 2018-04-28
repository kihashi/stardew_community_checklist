<template>
<div id="bundle-items">
    <section class="container">
        <h3 class="title">
          {{bundle.name}}
        </h3>
        <h5 class="subtitle">
          {{bundle.reward}}
        </h5>
        <!-- Room Progress -->
        <!-- Bundle Progress -->
    <!-- </section>
    <section class="section"> -->
        <div class="columns is-multiline">
          <div class="column is-3 is-flex" v-for="bundleitem in bundle.items" :key="bundleitem.id">
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
    }
  },
  components: {
    ItemCard
  }
}
</script>
