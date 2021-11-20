import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload;
    },
  },
  actions: {
    // actions support async code like setTimeout or data fetch
    // can use the same name as a mutation
    // context can commit a mutation just like a normal component
    increment(context) {
      setTimeout(function () {
        console.log(context);
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      // normalizedCounter(_, getters) {
      // if the first value (state) is not used by vue convention you can use _, as first paramether
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});

const app = createApp(App);
app.use(store);

app.mount('#app');
