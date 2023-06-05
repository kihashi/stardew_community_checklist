<script setup lang="ts">
import SkillIcon from '@/components/SkillIcon.vue'
import ButtonCheckbox from '@/components/ButtonCheckbox.vue'
import { useGeneralStore } from '@/store'

interface ModelValue {
  selectedSkills: string[]
  skillExclusive: boolean
}

const modelValue = defineModel<ModelValue>()

const store = useGeneralStore()
</script>

<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Skills</label>
    </div>
    <div class="field-body" v-if="modelValue">
      <div class="field has-addons has-addons-centered">
        <div class="control" v-for="skill in store.skills" :key="skill.id">
          <ButtonCheckbox :value="skill.id" v-model="modelValue.selectedSkills">
            <span class="icon is-small">
              <SkillIcon :skill="skill.id" />
            </span>
          </ButtonCheckbox>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <ButtonCheckbox class="is-fullwidth" v-model="modelValue.skillExclusive">
            Exclusive
          </ButtonCheckbox>
        </div>
      </div>
    </div>
  </div>
</template>
