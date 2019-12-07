<template>
  <table class="table is-bordered is-striped is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>
          Item
        </th>
        <th>
          Source
        </th>
        <th v-if="showSeasonList">
          Seasons
        </th>
        <th v-if="showSkillList">
          Skills
        </th>
        <th>
          Bundles
        </th>
      </tr>
    </thead>
    <tbody>
      <item-table-row v-for="item in items" :key="item.id" :item="item" />
    </tbody>
  </table>
</template>

<script>
import ItemTableRow from '@/components/item_table/ItemTableRow.vue'

export default {
  name: 'ItemTable',
  components: {
    ItemTableRow
  },
  data () {
    return {

    }
  },
  props: {
    items: {
      type: Array
    }
  },
  computed: {
    showSeasonList: function () {
      return !(this.$store.state.HideSpoilers && this.$store.state.SeasonsSpoilers)
    },
    showSkillList: function () {
      return !(this.$store.state.HideSpoilers && this.$store.state.SkillsSpoilers)
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed
}
</style>
