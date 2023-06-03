<script setup lang="ts">
import SeasonIcon from '@/components/SeasonIcon.vue'
import ButtonCheckbox from '@/components/ButtonCheckbox.vue'
import { useGeneralStore } from '@/store'

interface ModelValue {
  selectedSeasons: string[]
  seasonExclusive: boolean
}

const props = defineProps<{ modelValue: ModelValue }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: ModelValue): void }>()

const store = useGeneralStore()

function updateSeasons(val: string[]) {
  emit('update:modelValue', { ...props.modelValue, selectedSeasons: val })
}

function updateExclusive(val: boolean) {
  emit('update:modelValue', { ...props.modelValue, seasonExclusive: val })
}
</script>

<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Season</label>
    </div>
    <div class="field-body">
      <div class="field has-addons has-addons-centered">
        <div class="control" v-for="season in store.seasons" :key="season.order">
          <ButtonCheckbox
            :value="season.id"
            :modelValue="modelValue.selectedSeasons"
            @update:modelValue="updateSeasons"
          >
            <span class="icon is-small">
              <season-icon :season="season.id"></season-icon>
            </span>
          </ButtonCheckbox>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <ButtonCheckbox
            class="is-fullwidth"
            :modelValue="modelValue.seasonExclusive"
            @update:modelValue="updateExclusive"
          >
            Exclusive
          </ButtonCheckbox>
        </div>
      </div>
    </div>
  </div>
</template>
