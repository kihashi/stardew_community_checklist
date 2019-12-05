<template>
  <tr>
    <td>
      {{item.name}}
    </td>
    <td>
      {{item.source}}
    </td>
    <td v-if="showSeasonList">
        <season-list :seasons="item.seasons"/>
    </td>
    <td v-if="showSkillList">
        <skill-list :skills="item.skills"/>
    </td>
    <td>
      <bundle-button v-for="bundleItem in item.bundles" :key="bundleItem.id" :bundle-item="bundleItem" :item="item"/>
    </td>
  </tr>
</template>

<script>
import SeasonList from '../item_card/SeasonList'
import SkillList from '../item_card/SkillList'
import BundleButton from '../item_card/BundleButton'
export default {
  name: 'ItemTable',
  components: {
    BundleButton,
    SkillList,
    SeasonList
  },
  data () {
    return {

    }
  },
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
          source: 'Can be found in the mines or in the farm cave if you selected the mushroom perk.',
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
          'bundles': [
            {
              'count': 1,
              'bundle': {
                id: 5,
                name: 'Exotic Foraging Bundle',
                room: 0,
                reward: 'Autumn\'s Bounty (5)'
              },
              'id': 24
            },
            {
              'count': 1,
              'bundle': {
                id: 23,
                name: 'Field Research Bundle',
                room: 4,
                reward: 'Recycling Machine'
              },
              'id': 25
            }
          ]
        }
      }
    }

  }
}
</script>
