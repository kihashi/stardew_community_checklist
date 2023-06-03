<script setup lang="ts">
import SkillIcon from '@/components/SkillIcon.vue'
import ButtonCheck from '@/components/ButtonCheckbox.vue'
import { useGeneralStore } from '@/store'

interface ModelValue {
  selectedSkills: string[]
  skillExclusive: boolean
}

const props = defineProps<{ modelValue: ModelValue }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: ModelValue): void }>()

const store = useGeneralStore()

function updateSkills(val: string[]) {
  emit('update:modelValue', { ...props.modelValue, selectedSkills: val })
}

function updateExclusive(val: boolean) {
  emit('update:modelValue', { ...props.modelValue, skillExclusive: val })
}
</script>

<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Skills</label>
    </div>
    <div class="field-body">
      <div class="field has-addons has-addons-centered">
        <div class="control" v-for="skill in store.skills" :key="skill.id">
          <ButtonCheckbox
            :value="skill.id"
            :modelValue="modelValue.selectedSkills"
            @update:modelValue="updateSkills"
          >
            <span class="icon is-small">
              <skill-icon :skill="skill.id" />
            </span>
          </ButtonCheckbox>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <ButtonCheck
            class="is-fullwidth"
            :modelValue="modelValue.skillExclusive"
            @update:modelValue="updateExclusive"
          >
            Exclusive
          </ButtonCheck>
        </div>
      </div>
    </div>
  </div>
</template>
