import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    username: ''
  },
  mutations: {
    SET_LOGGED_IN: (state, value) => {
      state.loggedIn = value
    },
    SET_USERNAME: (state, value) => {
      state.username = value
    }
  },
  actions: {
    setLoggedIn ({ commit }, value) {
      commit('SET_LOGGED_IN', value)
    },
    setUsername ({ commit }, value) {
      commit('SET_USERNAME', value)
    }
  },
  modules: {
  }
})
