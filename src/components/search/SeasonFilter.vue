<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Season</label>
    </div>
    <div class="field-body">
      <div class="field has-addons has-addons-centered">
        <div class="control" v-for="season in seasons" :key="season.id">
          <button-check>
            <span class="icon is-small">
              <season-icon :season="season"></season-icon>
            </span>
          </button-check>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button-check class="is-fullwidth">
            Exclusive
          </button-check>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeasonIcon from '@/components/SeasonIcon'
import ButtonCheck from '@/components/ButtonCheckbox'
export default {
  name: 'season-filter',
  components: {
    SeasonIcon,
    ButtonCheck
  },
  computed: {
    seasons () {
      return this.$store.state.seasons
    }
  }

}
</script>

<style>

</style>
