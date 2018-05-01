<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Skills</label>
    </div>
    <div class="field-body">
      <div class="field has-addons has-addons-centered">
        <div class="control" v-for="skill in skills" :key="skill.id">
          <button-check>
            <span class="icon is-small">
              <skill-icon :skill="skill"></skill-icon>
            </span>
          </button-check>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button-check class="is-fullwidth">
            Exclusive
          </button-check>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import SkillIcon from '@/components/SkillIcon'
import ButtonCheck from '@/components/ButtonCheckbox'
export default {
  name: 'skill-filter',
  components: {
    SkillIcon,
    ButtonCheck
  },
  data () {
    return {
      selected_skills: []
    }
  },
  computed: {
    skills () {
      return this.$store.state.skills
    }
  }

}
</script>

<style>

</style>
