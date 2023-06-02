<script setup lang="ts">
import ButtonCheckbox from '@/components/ButtonCheckbox.vue'
import { useGeneralStore } from '@/store'
import { faCloudUploadAlt, faCopy, faTrash } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const store = useGeneralStore()

const dataToLoad = ref('')
const deleteConfirm = ref(false)

function loadData() {
  if (dataToLoad.value !== '') {
    store.setSerializedState(dataToLoad.value)
    alert('Data Loaded!')
  }
}

function onDelete() {
  if (deleteConfirm.value) {
    store.resetData()
    deleteConfirm.value = false
    alert('Data Reset!')
  } else {
    deleteConfirm.value = true
  }
}
</script>

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
          <ButtonCheckbox v-model="store.HideCompleted" :checked="store.HideCompleted">
            Hide Completed
          </ButtonCheckbox>
          <p class="help">Hides items that have been turned in to the community center.</p>
        </div>
        <div class="field">
          <button-checkbox v-model="store.HideSpoilers"> Hide Spoilers </button-checkbox>
          <p class="help">Hides things that are considered spoilers, as defined below.</p>
        </div>
        <label class="label"> Spoilers </label>
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="store.BundleRewardsSpoilers" />
              Bundle Rewards
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="store.ItemInfoSpoilers" />
              Item Source Information
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="store.SeasonsSpoilers" />
              Item Seasons
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="store.SkillsSpoilers" />
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
          <button-checkbox v-model="store.CompactView"> Use Compact View </button-checkbox>
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
            <input
              class="input"
              type="text"
              placeholder="Saved Data"
              :value="store.getSerializedState"
              readonly
            />
          </div>
          <div class="control">
            <!-- TODO: Clipboard <button class="button is-info" v-clipboard:copy="SavedData"> -->
            <button class="button is-info">
              <span class="icon">
                <font-awesome-icon :icon="faCopy"></font-awesome-icon>
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
              v-model="dataToLoad"
            />
          </div>
          <div class="control">
            <button class="button is-info" @click="loadData">
              <span class="icon">
                <font-awesome-icon :icon="faCloudUploadAlt"></font-awesome-icon>
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
              :class="deleteConfirm ? 'is-warning' : 'is-danger'"
              @click="onDelete"
            >
              <span class="icon">
                <font-awesome-icon :icon="faTrash"></font-awesome-icon>
              </span>
              <span v-if="deleteConfirm"> Are You Sure? </span>
              <span v-else> Reset Data </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
