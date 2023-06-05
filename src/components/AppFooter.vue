<script setup lang="ts">
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faReddit from '@fortawesome/fontawesome-free-brands/faReddit'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Stardew Community Checklist</strong> by
          <a href="https://johncleaver.com">John Cleaver</a>. The source code is licensed
          <a href="https://opensource.org/license/mit/">MIT</a>.
        </p>
        <p>
          <RouterLink to="/changelog">Changelog</RouterLink>
        </p>
        <p>
          Bundle and Item information is from the
          <a href="https://stardewvalleywiki.com">Stardew Valley Wiki</a> and is used under the
          <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA 3.0 License</a>.
        </p>
        <p>
          <a href="https://stardewvalley.net/">Stardew Valley</a> &copy;
          <a href="https://chucklefish.org/">Chucklefish LTD</a>. Developed by
          <a href="https://twitter.com/ConcernedApe">ConcernedApe</a>.
        </p>
        <div class="github-reddit">
          <a href="https://github.com/kihashi/stardew_community_checklist">
            <FontAwesomeIcon :icon="faGithub" />
          </a>
          <a href="https://www.reddit.com/r/stardewchecklist/">
            <FontAwesomeIcon :icon="faReddit" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.github-reddit {
  display: flex;
  gap: 0.4rem;
  justify-content: center;
}
</style>
