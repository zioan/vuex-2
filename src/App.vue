<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="increaseCounter">Increase by 5</button>
    <br />
    <change-counter></change-counter>
    <favorite-value></favorite-value>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
  },
  methods: {
    increaseCounter() {
      this.$store.dispatch('increment', 5);
      //dispatch is used to trigger state actions. can also dispatch with payload
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background: rgb(88, 88, 88);
  color: #fff;
}
</style>
