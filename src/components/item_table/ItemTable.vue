<template>
  <table class="table is-bordered is-striped is-narrow is-fillwidth">
    <thead>
      <tr>
        <th>
          Item
        </th>
        <th>
          Source
        </th>
        <th>
          Seasons
        </th>
        <th>
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
  }
}
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed
}
</style>
