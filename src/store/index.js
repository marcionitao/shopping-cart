import { createStore } from 'vuex';

export default createStore({
  state: {
    // list of product
    products: [],
    // list of object selected
    carting: {}
  },
  // using only for changer the State
  mutations: {
    setProduct(state, payload) {
      state.products = payload;
    },
    setCarting(state, payload) {
      state.carting[payload.id] = payload;
    },
    clearCarting(state) {
      state.carting = {};
    },
    increment(state, payload) {
      // 'payload' get item.id
      state.carting[payload].amount =  state.carting[payload].amount + 1;
    },
    decrement(state, payload) {
      // 'payload' get item.id
      state.carting[payload].amount =  state.carting[payload].amount - 1;
      if (state.carting[payload].amount === 0) {
        delete state.carting[payload];
      }
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
    },
    // add products on karting
    addCarting({commit, state}, products) {
      // verify if the 'product' is or not add in the 'carting'. This 'hasOwnProperty' method returns 
      // a boolean indicating whether the object has the specified property
      hasOwnProperty.call(state.carting, products.id) 
        ? products.amount = state.carting[products.id].amount + 1
        : products.amount = 1;
      //console.log(products.amount);
      // pushing to "mutation"
      commit('setCarting', products);
    }
  },
  // take some data in state and return the data chenged
  // is good for add filters or calculators
  getters: {
    totalAmount(state) {
      // return the data objects from the cart and apply REDUCE
      return Object.values(state.carting).reduce((acc, {amount}) => acc + amount, 0);
    },
    totalPrice(state) {
      // return the data objects from the cart and apply REDUCE
      return Object.values(state.carting).reduce((acc, {amount, precio}) => acc + amount * precio, 0);
    }
  },
  modules: {
  }
});
