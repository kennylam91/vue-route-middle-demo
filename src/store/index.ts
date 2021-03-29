import { Role } from '@/types'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: null,
    isPaid: false
  },
  mutations: {
    SET_ROLE: (state, value) => {
      state.role = value
    },
    SET_IS_PAID: (state, value) => {
      state.isPaid = value
    }
  },
  actions: {
    setRole ({ commit }, value: Role | null) {
      if (value) {
        localStorage.setItem('role', value.toString())
      }
      commit('SET_ROLE', value)
    },
    setIsPaid ({ commit }, value: boolean) {
      commit('SET_IS_PAID', value)
    }

  },
  modules: {
  }
})
