<script setup lang="ts">
const emit = defineEmits(['dismiss-modal'])

function dismiss() {
  emit('dismiss-modal')
}
</script>

<template>
  <div class="modal">
    <div class="modal-background" @click="dismiss"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">What's New</p>
        <button class="delete" aria-label="close" @click="dismiss"></button>
      </header>
      <section class="modal-card-body">
        <h1 class="title">2.0 - The Big Mobile Update</h1>
        <div class="content">
          <p>Hey All!</p>

          <p>
            You'll probably notice a lot of changes around here. I've added a fresh coat of paint, a
            complete redesign to work on mobile, as well as a complete re-write of the backend to
            support some features I have on the
            <a
              href="https://www.reddit.com/r/stardewchecklist/comments/6s5x0a/current_development_roadmap_v20/"
              >roadmap</a
            >. I've detailed some of the most exciting features below, but for the full list, check
            out the <router-link to="/changelog">changelog</router-link>.
          </p>

          <p>
            I've tried to keep your saved data from V1 intact, but there may still be some
            conversion issues.
          </p>

          <p>
            If you notice any problems, please report them on the subreddit or open a Github issue.
          </p>

          <p>
            Hope you enjoy, <br />
            Kihashi
          </p>
          <h3 class="title">Highlights</h3>
          <ul>
            <li>Mobile Support!</li>
            <ul>
              <li>Use the checklist on your phone while you play on from the couch!</li>
            </ul>
            <li>More clear room completion- a checkmark will show next to completed rooms.</li>
            <li>Combined search screens and replaced with filters</li>
            <ul>
              <li>This lets you do stuff like "Show me items that are only in winter".</li>
            </ul>
            <li>Data Reset</li>
            <ul>
              <li>Start a new game with the data reset button on the settings page.</li>
            </ul>
          </ul>
        </div>
      </section>
      <footer class="modal-card-foot">
        <a href="https://www.reddit.com/r/stardewchecklist/" class="button is-info">Subreddit</a>
        <a href="https://github.com/kihashi/stardew_community_checklist" class="button">Github</a>
      </footer>
    </div>
  </div>
</template>
