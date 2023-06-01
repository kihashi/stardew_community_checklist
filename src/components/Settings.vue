<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Settings</h1>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="subtitle">Spoilers and Displayed Items</h2>
        <div class="field">
          <button-checkbox v-model="HideCompleted"> Hide Completed </button-checkbox>
          <p class="help">Hides items that have been turned in to the community center.</p>
        </div>
        <div class="field">
          <button-checkbox v-model="HideSpoilers"> Hide Spoilers </button-checkbox>
          <p class="help">Hides things that are considered spoilers, as defined below.</p>
        </div>
        <label class="label"> Spoilers </label>
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="BundleRewardsSpoilers" />
              Bundle Rewards
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="ItemInfoSpoilers" />
              Item Source Information
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="SeasonsSpoilers" />
              Item Seasons
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="SkillsSpoilers" />
              Item Skills
            </label>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="subtitle">Compact View</h2>
        <p class="content">
          Enable a more compact table view instead of the card view. Note that this may result in
          horizontal scrolling on smaller (phone-sized) devices. The card view is recommended for
          those.
        </p>
        <div class="field">
          <button-checkbox v-model="CompactView"> Use Compact View </button-checkbox>
          <p class="help">Enables a compact tabular view for item information.</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="subtitle">Import and Export Saved Data</h2>
        <p class="content">
          Use these controls to port data to another device. Copy the data string from the Export
          field on the source device and paste it into the Import field on the target device.
        </p>
        <label class="label">Export</label>
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" placeholder="Saved Data" :value="SavedData" readonly />
          </div>
          <div class="control">
            <button class="button is-info" v-clipboard:copy="SavedData">
              <span class="icon">
                <font-awesome-icon icon="copy"></font-awesome-icon>
              </span>
            </button>
          </div>
        </div>
        <label class="label">Import</label>
        <div class="field has-addons">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Enter Saved Data here"
              v-model="DataToLoad"
            />
          </div>
          <div class="control">
            <button class="button is-info" @click="LoadData">
              <span class="icon">
                <font-awesome-icon icon="cloud-upload-alt"></font-awesome-icon>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="subtitle">Reset Data</h2>
        <p class="content">Use this button to reset your data and start a new game.</p>
        <div class="field">
          <div class="control">
            <button
              class="button is-large is-rounded"
              :class="DeleteConfirm ? 'is-warning' : 'is-danger'"
              @click="ConfirmDelete"
            >
              <span class="icon">
                <font-awesome-icon icon="trash"></font-awesome-icon>
              </span>
              <span v-if="DeleteConfirm"> Are You Sure? </span>
              <span v-else> Reset Data </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ButtonCheckbox from '@/components/ButtonCheckbox.vue'
import { faCopy, faTrash, faCloudUploadAlt } from '@fortawesome/fontawesome-free-solid'
import 'mdi-vue/ContentCopyIcon'
import 'mdi-vue/UploadIcon'
import 'mdi-vue/DeleteIcon'
export default {
  name: 'Settings',
  components: {
    ButtonCheckbox,
    FontAwesomeIcon,
    faCopy,
    faCloudUploadAlt,
    faTrash
  },
  data: function () {
    return {
      DataToLoad: '',
      DeleteConfirm: false
    }
  },
  computed: {
    HideCompleted: {
      get() {
        return this.$store.state.HideCompleted
      },
      set(newValue) {
        this.$store.commit('toggleCompleted')
      }
    },
    HideSpoilers: {
      get() {
        return this.$store.state.HideSpoilers
      },
      set(newValue) {
        this.$store.commit('toggleSpoilers')
      }
    },
    BundleRewardsSpoilers: {
      get() {
        return this.$store.state.BundleRewardsSpoilers
      },
      set(newValue) {
        this.$store.commit('toggleBundleRewards')
      }
    },
    ItemInfoSpoilers: {
      get() {
        return this.$store.state.ItemInfoSpoilers
      },
      set(newValue) {
        this.$store.commit('toggleItemInfo')
      }
    },
    SeasonsSpoilers: {
      get() {
        return this.$store.state.SeasonsSpoilers
      },
      set(newValue) {
        this.$store.commit('toggleSeasons')
      }
    },
    SkillsSpoilers: {
      get() {
        return this.$store.state.SkillsSpoilers
      },
      set(newValue) {
        this.$store.commit('toggleSkills')
      }
    },
    CompactView: {
      get() {
        return this.$store.state.CompactView
      },
      set(newValue) {
        this.$store.commit('toggleCompactView')
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
    },
    ConfirmDelete: function () {
      if (this.DeleteConfirm) {
        this.$store.commit('resetData')
        this.DeleteConfirm = false
        alert('Data Reset!')
      } else {
        this.DeleteConfirm = true
      }
    }
  }
}
</script>

<style></style>
