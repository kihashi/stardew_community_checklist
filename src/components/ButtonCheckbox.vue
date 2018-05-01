<template>
  <button class="button is-rounded"
    :class="checked ? checked_class : unchecked_class"
    v-on:click="click"
    >
      <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-checkbox',
  props: {
    checked_class: {
      default: 'is-info'
    },
    unchecked_class: {
      default: ''
    }
  },
  data () {
    return {
      checked: true
    }
  },
  methods: {
    click () {
      this.checked = !this.checked
    }
  }
}
</script>

<style>

</style>
