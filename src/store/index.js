import { createStore } from 'vuex';

export default createStore({
  state: {
    products: []
  },
  // using only for changer the State
  mutations: {
    setProduct(state, preload) {
      state.products = preload;
    }
  },
  // using for call a action (ex: API)in server. But the action does not change the state.
  actions: {
    async fetchData({commit}) {
      try {
        const res = await fetch('api.json');
        const data = await res.json();

        // pushing to "mutation"
        commit('setProduct', data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
});
