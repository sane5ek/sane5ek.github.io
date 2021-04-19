import Vue from 'vue'

export default {
  state: {
    currencies: {},
    lastConvertResult: 0
  },
  mutations: {
    setCurrencies (state, payload) {
      state.currencies = payload
    },
    setLastResult (state, payload) {
      state.lastConvertResult = payload
    }
  },
  actions: {
    async loadCurrencies ({ commit, state, getters }, payload) {
      commit('setLoading', true)
      try {
        const now = new Date();
        const response = await Vue.http.get(`https://api.ratesapi.io/api/${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`)
        commit('setCurrencies', response.body.rates)
        commit('setLoading', false)
      } catch (response) {
        commit('setError', 'Something went wrong')
        commit('setLoading', false)
        throw Error
      }
    },
    async convertCurrencies ({ commit, state, getters }, payload) {
      commit('setLoading', true)
      try {
        const response = await Vue.http.get(`https://api.ratesapi.io/api/latest?base=${payload.from}&symbols=${payload.to}`)
        console.log(response.body.rates[payload.to])
        const converted = payload.amount * response.body.rates[payload.to]
        commit('setLastResult', converted)
        commit('setLoading', false)
      } catch (response) {
        commit('setError', 'Something went wrong')
        commit('setLoading', false)
        throw Error
      }
    }
  },
  getters: {
    currencies (state) {
      return state.currencies
    },
    lastConvertResult (state) {
      return state.lastConvertResult
    }
  }
}
