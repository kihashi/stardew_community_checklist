<template>
<section class="section">
  <search-form v-model="search"></search-form>
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
  data () {
    return {
      search: {
        search_term: '',
        search_seasons: this.$store.state.seasons,
        search_skills: this.$store.state.skills
      }
    }
  },
  computed: {
    filtered_items () {
      var self = this
      return self.$store.state.items
        .filter(item => item.name.toLowerCase().indexOf(self.search.search_term.toLowerCase()) !== -1)
    }
  }

}
</script>

<style>

</style>
