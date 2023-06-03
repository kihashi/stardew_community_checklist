<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ modelValue: string[] | boolean; value?: string }>()
const emit = defineEmits(['update:modelValue'])

const isChecked = computed(() =>
  Array.isArray(props.modelValue) ? props.modelValue.includes(props.value ?? '') : props.modelValue
)

function onUpdate() {
  if (Array.isArray(props.modelValue) && props.value) {
    const newValue = [...props.modelValue]

    if (isChecked.value) {
      newValue.splice(newValue.indexOf(props.value), 1)
    } else {
      newValue.push(props.value)
    }

    emit('update:modelValue', newValue)
  } else {
    emit('update:modelValue', !isChecked.value)
  }
}
</script>

<template>
  <button class="button is-rounded" :class="isChecked ? 'is-info' : ''" @click="onUpdate">
    <slot></slot>
  </button>
</template>
