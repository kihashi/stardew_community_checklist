<template>
<section class="section">
  <search-form></search-form>
  <section class="container">
    <div class="columns is-multiline">
      <div class="column is-3 is-flex" v-for="item in filtered_items" :key="item.id">
        <item-card :item="item"></item-card>
      </div>
    </div>
  </section>

</section>
</template>

<script>
import SearchForm from '@/components/search/SearchForm'
import ItemCard from '@/components/item_card/ItemCard'
export default {
  name: 'search',
  components: {
    SearchForm,
    ItemCard
  },
  computed: {
    filtered_items () {
      return this.$store.state.items
    }
  }

}
</script>

<style>

</style>
