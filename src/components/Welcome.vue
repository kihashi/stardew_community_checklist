<template>
  <section class="container">
    <div class="hero is-medium is-bold">
      <div class="hero-body">
        <h1 class="title">Stardew Community Checklist</h1>
        <h2 class="subtitle">Track Your Progress on the Community Center!</h2>
      </div>
    </div>
    <New :class="ShowModal ? 'is-active' : ''" v-on:dismiss-modal="ShowModal = false"></New>
  </section>
</template>

<script>
import ItemCard from '@/components/item_card/ItemCard.vue'
import New from '@/components/New.vue'
export default {
  components: { ItemCard, New },
  name: 'welcome',
  data: function () {
    return {
      ShowModal: false
    }
  },
  created() {
    if (localStorage.getItem('new_visit') === null) {
      this.ShowModal = true
      localStorage.setItem('new_visit', 1)
    }
  }
}
</script>

<style scoped></style>
