<template>
  <button
    class="button is-rounded"
    :class="shouldBeChecked ? checked_class : unchecked_class"
    v-on:click="updateInput"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked_class: {
      default: 'is-info'
    },
    unchecked_class: {
      default: ''
    },
    checked: {
      default: false
    },
    value: String,
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  computed: {
    shouldBeChecked() {
      if (this.checked instanceof Array) {
        return this.checked.includes(this.value)
      }

      return this.checked === this.trueValue
    }
  },
  methods: {
    updateInput() {
      if (this.checked instanceof Array) {
        let newValue = [...this.checked]

        if (!this.shouldBeChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }

        this.$emit('change', newValue)
      } else {
        this.$emit('change', this.shouldBeChecked ? this.falseValue : this.trueValue)
      }
    }
  }
}
</script>

<style></style>
