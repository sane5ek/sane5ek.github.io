export default {
  state: {
    loading: false,
    error: null,
    success: null
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setSuccess (state, payload) {
      state.success = payload
    },
    clearSuccess (state) {
      state.success = null
    }
  },
  actions: {
    setLoading ({ commit }, payload) {
      commit('setLoading', payload)
    },
    setError ({ commit }, payload) {
      commit('setError', payload)
    },
    clearError ({ commit }) {
      commit('clearError')
    },
    setSuccess ({ commit }, payload) {
      commit('setSuccess', payload)
    },
    clearSuccess ({ commit }) {
      commit('clearSuccess')
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    success (state) {
      return state.success
    }
  }
}
