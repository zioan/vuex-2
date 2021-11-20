<template>
  <!-- <button @click="addOne">Add 1 from ChangeCounter</button> -->
  <button @click="increment">Add 2 async</button>
  <button @click="increase(10)">increase 10</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions(['increment', 'increase']),
  },
};
</script>
