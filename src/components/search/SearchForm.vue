<template>
  <div class="columns">
    <div class="column">
      <item-search v-model.lazy="value.name_filter" v-on:input="$emit('input', $event.target.value)" />
    </div>
    <div class="column">
      <season-filter :value="value.season_filter" v-on:input="UpdateSeasons"/>
    </div>
    <div class="column">
      <skill-filter :value="value.skill_filter" v-on:input="UpdateSkills" />
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
    value: {
      default () {
        return {
          name_filter: '',
          season_filter: {
            selected_seasons: [],
            season_exclusive: false
          },
          skill_filter: {
            selected_skills: [],
            skill_exclusive: false
          }
        }
      }
    }
  },
  methods: {
    UpdateSeasons (val) {
      this.value.season_filter = val
      this.$emit('input', this.value)
    },
    UpdateSkills (val) {
      this.value.skill_filter = val
      this.$emit('input', this.value)
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
