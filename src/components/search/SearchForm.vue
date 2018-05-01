<template>
  <div class="columns">
    <div class="column">
      <item-search />
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
  components: {
    ItemSearch,
    SeasonFilter,
    SkillFilter
  }

}
</script>

<style>

</style>
