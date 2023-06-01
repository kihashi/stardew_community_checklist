<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Stardew Community Checklist</strong> by
          <a href="http://johncleaver.com">John Cleaver</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
        <p>
          <router-link to="/changelog">Changelog</router-link>
        </p>
        <p>
          Bundle and Item information is from the
          <a href="http://stardewvalleywiki.com/Stardew_Valley_Wiki">Stardew Valley Wiki</a> and is
          used under the
          <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA 3.0 License</a>.
        </p>
        <p>
          <a href="http://stardewvalley.net/">Stardew Valley</a> &copy;
          <a href="https://chucklefish.org/">Chucklefish LTD</a>. Developed by
          <a href="https://twitter.com/ConcernedApe">ConcernedApe</a>.
        </p>
        <p>
          <a :href="gh_address"><font-awesome-icon :icon="gh_icon" /></a>
          <a :href="reddit_address"><font-awesome-icon :icon="reddit_icon" /></a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faReddit from '@fortawesome/fontawesome-free-brands/faReddit'
export default {
  name: 'app-footer',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  computed: {
    gh_icon() {
      return faGithub
    },
    reddit_icon() {
      return faReddit
    }
  },
  data: function () {
    return {
      gh_address: 'https://github.com/kihashi/stardew_community_checklist',
      reddit_address: 'https://www.reddit.com/r/stardewchecklist/'
    }
  }
}
</script>

<style scoped></style>
