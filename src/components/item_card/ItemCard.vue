<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ item.name }}
      </p>
    </header>
    <div class="card-content">
      <div class="content item-source" v-if="showItemDesc">
        {{ item.source }}
      </div>
      <div class="content">
        <bundle-button
          v-for="bundleItem in item.bundles"
          :key="bundleItem.id"
          :bundle-item="bundleItem"
          :item="item"
        />
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item item-seasons" v-if="showSeasonList">
        <season-list :seasons="item.seasons" />
      </div>
      <div class="card-footer-item item-skills" v-if="showSkillList">
        <skill-list :skills="item.skills" />
      </div>
    </footer>
  </div>
</template>

<script>
import SeasonList from './SeasonList.vue'
import SkillList from './SkillList.vue'
import BundleButton from './BundleButton.vue'

export default {
  components: {
    BundleButton,
    SkillList,
    SeasonList
  },
  name: 'item-card',
  computed: {
    showItemDesc: function () {
      return !(this.$store.state.HideSpoilers && this.$store.state.ItemInfoSpoilers)
    },
    showSeasonList: function () {
      return !(this.$store.state.HideSpoilers && this.$store.state.SeasonsSpoilers)
    },
    showSkillList: function () {
      return !(this.$store.state.HideSpoilers && this.$store.state.SkillsSpoilers)
    }
  },
  props: {
    item: {
      type: Object,
      default: function () {
        return {
          id: 22,
          name: 'Purple Mushroom',
          source:
            'Can be found in the mines or in the farm cave if you selected the mushroom perk.',
          seasons: [
            {
              id: 'spring',
              order: 0,
              name: 'Spring'
            },
            {
              id: 'summer',
              order: 1,
              name: 'Summer'
            },
            {
              id: 'fall',
              order: 2,
              name: 'Fall'
            },
            {
              id: 'winter',
              order: 3,
              name: 'Winter'
            }
          ],
          skills: [
            {
              id: 'mining',
              order: 1,
              name: 'Mining'
            },
            {
              id: 'foraging',
              order: 2,
              name: 'Foraging'
            }
          ],
          bundles: [
            {
              count: 1,
              bundle: {
                id: 5,
                name: 'Exotic Foraging Bundle',
                room: 0,
                reward: "Autumn's Bounty (5)"
              },
              id: 24
            },
            {
              count: 1,
              bundle: {
                id: 23,
                name: 'Field Research Bundle',
                room: 4,
                reward: 'Recycling Machine'
              },
              id: 25
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
