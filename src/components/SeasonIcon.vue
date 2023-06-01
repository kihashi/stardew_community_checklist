<template>
  <span class="icon" v-bind:data-season="season.id">
    <mdicon name="flower" v-if="season.id === 'spring'" />
    <mdicon name="sun" v-if="season.id === 'summer'" />
    <mdicon name="leaf" v-if="season.id === 'fall'" />
    <mdicon name="snowflake" v-if="season.id === 'winter'" />
  </span>
</template>

<script>
export default {
  name: 'season-icon',
  props: {
    season: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: 'spring',
          name: 'Spring'
        }
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
  content: attr(data-season);
  display: block;
  position: absolute;
  bottom: -1.85rem;
  border-radius: 3px;
  font-size: 0.75rem;
  background-color: #00d1b2;
  padding: 0.1rem 0.3rem;
  text-transform: capitalize;
  color: #000;
  z-index: 100;
  font-weight: bold;
}
</style>
