<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ version.name }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <ul>
          <li v-for="change in version.changes" :key="change.date">
            {{ change }}
          </li>
        </ul>
      </div>
    </div>
    <div class="card-footer">
      <p class="card-footer-item has-text-centered-mobile">
        Release Date: {{ version.date }}
      </p>
      <p class="card-footer-item">
        <b-button icon-left="github" tag="a" :href="release_url">
          Release
        </b-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Version',
  components: {
  },
  // filters: {
  //   formatDate: date =>
  //     Intl.DateTimeFormat('us-EN').format(date)
  // },
  props: {
    version: {
      type: Object,
      default () {
        return {
          name: 'Version 1.0',
          date: '2016-04-13',
          link: 'Version-1.0',
          changes: [
            'Initial Version'
          ]
        }
      }
    }
  },
  computed: {
    release_url () {
      return 'https://github.com/kihashi/stardew_community_checklist/releases/tag/' + this.version.link
    }
  }

}
</script>

<style>

</style>
