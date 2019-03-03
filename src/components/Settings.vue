<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">
          Settings
        </h1>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="subtitle">
          Displayed Items
        </h2>
        <div class="field">
          <button-checkbox v-model="HideCompleted">
            Hide Completed
          </button-checkbox>
          <p class="help">Hides items that have been turned in to the community center.</p>
        </div>
        <div class="field">
          <button-checkbox v-model="HideSpoilers">
            Hide Spoilers
          </button-checkbox>
          <p class="help">Hides things that are considered spoilers, as defined below.</p>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <label class="label">
              Spoilers
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="BundleRewardsSpoilers"/>
                Bundle Rewards
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="ItemInfoSpoilers"/>
              Item Source Information
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
            <input type="checkbox" v-model="SeasonsSpoilers"/>
              Item Seasons
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="SkillsSpoilers"/>
              Item Skills
            </label>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="buttons">
          <button class="button is-info">Import Data</button>
          <button class="button is-info">Export Data</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ButtonCheckbox from '@/components/ButtonCheckbox.vue'
export default {
  name: 'Settings',
  components: {
    ButtonCheckbox
  },
  computed: {
    HideCompleted: {
      get () {
        return this.$store.state.HideCompleted
      },
      set (newValue) {
        this.$store.commit('toggleCompleted')
      }
    },
    HideSpoilers: {
      get () {
        return this.$store.state.HideSpoilers
      },
      set (newValue) {
        this.$store.commit('toggleSpoilers')
      }
    },
    BundleRewardsSpoilers: {
      get () {
        return this.$store.state.BundleRewardsSpoilers
      },
      set (newValue) {
        this.$store.commit('toggleBundleRewards')
      }
    },
    ItemInfoSpoilers: {
      get () {
        return this.$store.state.ItemInfoSpoilers
      },
      set (newValue) {
        this.$store.commit('toggleItemInfo')
      }
    },
    SeasonsSpoilers: {
      get () {
        return this.$store.state.SeasonsSpoilers
      },
      set (newValue) {
        this.$store.commit('toggleSeasons')
      }
    },
    SkillsSpoilers: {
      get () {
        return this.$store.state.SkillsSpoilers
      },
      set (newValue) {
        this.$store.commit('toggleSkills')
      }
    }
  }
}
</script>

<style>

</style>
