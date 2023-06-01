<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Season</label>
    </div>
    <div class="field-body">
      <div class="field has-addons has-addons-centered">
        <div class="control" v-for="season in seasons" :key="season.order">
          <button-check
            :value="season.id"
            :checked="value.selected_seasons"
            v-on:change="UpdateSeasons"
          >
            <span class="icon is-small">
              <season-icon :season="season"></season-icon>
            </span>
          </button-check>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button-check
            class="is-fullwidth"
            :checked="value.season_exclusive"
            v-on:change="UpdateExclusive"
          >
            Exclusive
          </button-check>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeasonIcon from '@/components/SeasonIcon.vue'
import ButtonCheck from '@/components/ButtonCheckbox.vue'
export default {
  name: 'season-filter',
  components: {
    SeasonIcon,
    ButtonCheck
  },
  props: {
    value: {
      default() {
        return {
          selected_seasons: [],
          season_exclusive: false
        }
      }
    }
  },
  computed: {
    seasons() {
      return this.$store.state.seasons
    }
  },
  methods: {
    UpdateSeasons(val) {
      this.value.selected_seasons = val
      this.$emit('input', this.value)
    },
    UpdateExclusive(val) {
      this.value.season_exclusive = val
      this.$emit('input', this.value)
    }
  }
}
</script>

<style></style>
