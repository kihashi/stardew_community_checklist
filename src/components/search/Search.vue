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
        name_filter: '',
        season_filter: {
          selected_seasons: ['spring', 'summer', 'fall', 'winter'],
          season_exclusive: false
        },
        skill_filter: {
          selected_skills: ['farming', 'foraging', 'mining', 'fishing', 'combat'],
          skill_exclusive: false
        }
      }
    }
  },
  computed: {
    filtered_items () {
      var self = this
      return self.$store.state.items
        .filter(item => item.name.toLowerCase().indexOf(self.search.name_filter.toLowerCase()) !== -1)
        .filter(item => this.FilterSeasons(item.seasons.map(ssn => ssn.id), this.search.season_filter))
        .filter(item => this.FilterSkills(item.skills.map(skl => skl.id), this.search.skill_filter))
    }
  },
  methods: {
    FilterSeasons (itemSeasons, seasonFilter) {
      if (seasonFilter.season_exclusive) {
        if (itemSeasons.length !== seasonFilter.selected_seasons.length) {
          return false
        } else {
          var a = itemSeasons
          var b = seasonFilter.selected_seasons
          a.sort()
          b.sort()
          for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) { return false }
          }
          return true
        }
      } else {
        for (var season of seasonFilter.selected_seasons) {
          if (itemSeasons.indexOf(season) !== -1) {
            return true
          }
        }
        return false
      }
    },
    FilterSkills (itemSkills, skillFilter) {
      if (skillFilter.skill_exclusive) {
        if (itemSkills.length !== skillFilter.selected_skills.length) {
          return false
        } else {
          var a = itemSkills
          var b = skillFilter.selected_skills
          a.sort()
          b.sort()
          for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) { return false }
          }
          return true
        }
      } else {
        for (var season of skillFilter.selected_skills) {
          if (itemSkills.indexOf(season) !== -1) {
            return true
          }
        }
        return false
      }
    }
  }

}
</script>

<style>

</style>
