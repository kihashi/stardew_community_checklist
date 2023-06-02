<template>
  <span class="icon" v-bind:data-skill="skill.id">
    <mdicon name="cow" v-if="skill === 'farming'" />
    <mdicon name="diamond" v-if="skill === 'mining'" />
    <mdicon name="mushroom" v-if="skill === 'foraging'" />
    <mdicon name="fish" v-if="skill === 'fishing'" />
    <mdicon name="sword" v-if="skill === 'combat'" />
  </span>
</template>

<script>
export default {
  name: 'skill-icon',
  props: {
    skill: {
      type: String,
      required: true,
      default: function () {
        return 'farming'
      }
    }
  }
}
</script>

<style scoped>
.icon {
  position: relative;
}

.icon:hover::after {
  content: attr(data-skill);
  display: block;
  position: absolute;
  bottom: -0.85rem;
  border-radius: 3px;
  font-size: 0.75rem;
  background-color: #209cee;
  padding: 0.1rem 0.3rem;
  text-transform: capitalize;
  color: #fff;
  z-index: 100;
  font-weight: bold;
}
</style>
