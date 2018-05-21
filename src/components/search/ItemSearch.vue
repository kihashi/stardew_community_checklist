<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Search</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
            <input class="input" placeholder="Item Name" v-bind:value="value" v-on:input="$emit('input', $event.target.value)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item-search',
  props: {
    value: {
      default () {
        return ''
      }
    }
  }

}
</script>

<style>

</style>
