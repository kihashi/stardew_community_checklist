<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Stardew Community Checklist</strong> by <a href="http://johncleaver.com">John Cleaver</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
        <p>
          <NuxtLink to="/changelog">
            Changelog
          </NuxtLink>
        </p>
        <p>
          Bundle and Item information is from the <a href="http://stardewvalleywiki.com/Stardew_Valley_Wiki">Stardew Valley Wiki</a>
          and is used under the <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA 3.0 License</a>.
        </p>
        <p>
          <a href="http://stardewvalley.net/">Stardew Valley</a> &copy; <a href="https://chucklefish.org/">Chucklefish LTD</a>.
          Developed by <a href="https://twitter.com/ConcernedApe">ConcernedApe</a>.
        </p>
        <p>
          <a :href="gh_address"><b-icon icon="github" /></a>
          <a :href="reddit_address"><b-icon icon="reddit" /></a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  components: {
  },
  data () {
    return {
      gh_address: 'https://github.com/kihashi/stardew_community_checklist',
      reddit_address: 'https://www.reddit.com/r/stardewchecklist/'
    }
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
