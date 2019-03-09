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
          Spoilers and Displayed Items
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
        <h2 class="subtitle">
          Import and Export Saved Data
        </h2>
        <p>
          Use these controls to port data to another device.
          Copy the data string from the Export field on the source device and paste it into the Import field
          on the target device.
        </p>
        <label class="label">Export</label>
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" placeholder="Saved Data" :value=SavedData readonly />
          </div>
          <div class="control">
            <button class="button is-info" v-clipboard:copy="SavedData">
              <span class="icon">
                <mdi-content-copy-icon />
              </span>
            </button>
          </div>
        </div>
        <label class="label">Import</label>
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" placeholder="Enter Saved Data here" v-model="DataToLoad" />
          </div>
          <div class="controls">
            <button class="button is-info" @click="LoadData">
              <span class="icon">
                <mdi-upload-icon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ButtonCheckbox from '@/components/ButtonCheckbox.vue'
import 'mdi-vue/ContentCopyIcon'
import 'mdi-vue/UploadIcon'
export default {
  name: 'Settings',
  components: {
    ButtonCheckbox
  },
  data: function () {
    return {
      DataToLoad: ''
    }
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
    },
    SavedData: function () {
      return this.$store.getters.GetSerializedState
    }
  },
  methods: {
    LoadData: function () {
      if (this.DataToLoad !== '') {
        this.$store.commit('SetSerializedState', this.DataToLoad)
        alert('Data Loaded!')
      }
    }
  }
}
</script>

<style>

</style>
