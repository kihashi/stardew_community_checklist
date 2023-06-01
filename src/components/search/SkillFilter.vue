<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Skills</label>
    </div>
    <div class="field-body">
      <div class="field has-addons has-addons-centered">
        <div class="control" v-for="skill in skills" :key="skill.id">
          <button-check
            :value="skill.id"
            :checked="value.selected_skills"
            v-on:change="UpdateSkills"
          >
            <span class="icon is-small">
              <skill-icon :skill="skill" />
            </span>
          </button-check>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button-check
            class="is-fullwidth"
            :checked="value.skill_exclusive"
            v-on:change="UpdateExclusive"
          >
            Exclusive
          </button-check>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillIcon from '@/components/SkillIcon.vue'
import ButtonCheck from '@/components/ButtonCheckbox.vue'
export default {
  name: 'skill-filter',
  components: {
    SkillIcon,
    ButtonCheck
  },
  props: {
    value: {
      default() {
        return {
          selected_skills: [],
          skill_exclusive: false
        }
      }
    }
  },
  computed: {
    skills() {
      return this.$store.state.skills
    }
  },
  methods: {
    UpdateSkills(val) {
      this.value.selected_skills = val
      this.$emit('input', this.value)
    },
    UpdateExclusive(val) {
      this.value.skill_exclusive = val
      this.$emit('input', this.value)
    }
  }
}
</script>

<style></style>
