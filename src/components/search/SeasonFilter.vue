<script setup lang="ts">
import SeasonIcon from '@/components/SeasonIcon.vue'
import ButtonCheckbox from '@/components/ButtonCheckbox.vue'
import { useGeneralStore } from '@/store'

const store = useGeneralStore()

interface ModelValue {
  selectedSeasons: string[]
  seasonExclusive: boolean
}

const modelValue = defineModel<ModelValue>()
</script>

<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Season</label>
    </div>
    <div class="field-body" v-if="modelValue">
      <div class="field has-addons has-addons-centered">
        <div class="control" v-for="season in store.seasons" :key="season.order">
          <ButtonCheckbox :value="season.id" v-model="modelValue.selectedSeasons">
            <span class="icon is-small">
              <SeasonIcon :season="season.id"></SeasonIcon>
            </span>
          </ButtonCheckbox>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <ButtonCheckbox class="is-fullwidth" v-model="modelValue.seasonExclusive">
            Exclusive
          </ButtonCheckbox>
        </div>
      </div>
    </div>
  </div>
</template>
