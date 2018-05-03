<template>
  <div class="columns">
    <div class="column">
      <item-search v-model="search_term" v-on:input="$emit('input', searchFilter())" />
    </div>
    <div class="column">
      <season-filter />
    </div>
    <div class="column">
      <skill-filter />
    </div>
  </div>
</template>

<script>
import ItemSearch from '@/components/search/ItemSearch.vue'
import SeasonFilter from '@/components/search/SeasonFilter.vue'
import SkillFilter from '@/components/search/SkillFilter.vue'
export default {
  name: 'search-form',
  props: {
    search_term: {
      default () {
        return ''
      },
      search_seasons: {
        type: Array
      },
      search_skills: {
        type: Array
      }
    }
  },
  methods: {
    searchFilter: function () {
      return {
        search_term: this.search_term,
        search_seasons: this.search_seasons,
        search_skils: this.search_skills
      }
    }
  },
  components: {
    ItemSearch,
    SeasonFilter,
    SkillFilter
  }

}
</script>

<style>

</style>
