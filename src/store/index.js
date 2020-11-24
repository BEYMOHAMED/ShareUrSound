import { createStore } from 'vuex';

export default createStore({
  state: {
    isLogged: false,
  },
  mutations: {
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
  },
  actions: {
  },
  modules: {
  },
});
