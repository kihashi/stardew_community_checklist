<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <button
    class="button is-rounded"
    :class="modelValue ? 'is-info' : ''"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <slot></slot>
  </button>
</template>

<style></style>
