<script setup lang="ts">
defineProps<{ modelValue: string }>()
defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>

<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Search</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input
            class="input"
            placeholder="Item Name"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target?.value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
