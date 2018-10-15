<template>
  <page>
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
          <button-checkbox>
            Hide Completed
          </button-checkbox>
          <p class="help">Hides items that have been turned in to the community center.</p>
        </div>
        <div class="field">
          <button-checkbox>
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
              <input type="checkbox"/>
                Bundle Rewards
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox"/>
              Item Source Information
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
            <input type="checkbox />
              Item Seasons
            </label>
          </div>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox"/>
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
  </page>
</template>

<script>
import ButtonCheckbox from '@/components/ButtonCheckbox.vue'
export default {
  name: 'Settings',
  components: {
    ButtonCheckbox
  },
  data () {
    return {
      hide_completed: false,
      hide_spoilers: false
    }
  }

}
</script>

<style>

</style>
