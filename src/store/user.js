import Vue from 'vue'
import router from '../router'

export default {
  state: {
    user: localStorage.getItem('u'),
    jwt: localStorage.getItem('t')
  },
  mutations: {
    setUser (state, payload) {
      localStorage.setItem('u', payload)
      state.user = payload
    },
    updateToken (state, newToken) {
      localStorage.setItem('t', newToken)
      state.jwt = newToken
    },
    removeToken (state) {
      localStorage.removeItem('t')
      state.jwt = null
    }
  },
  actions: {
    async registerUser ({ commit, state, dispatch }, payload) {
      commit('setLoading', true)

      try {
        await Vue.http.post('auth/register', payload)
        commit('setLoading', false)
        commit('setSuccess', 'Registration was successful, now you can sign in')
      } catch (response) {
        if (response.status === 409) {
          commit('setError', 'User with that email already exists')
        } else {
          commit('setError', 'Something went wrong')
        }
        commit('setLoading', false)
        throw Error
      }
    },
    async loginUser ({ commit, state, dispatch }, payload) {
      commit('setLoading', true)
      try {
        const response = await Vue.http.post('auth/login', payload)
        commit('updateToken', response.data.token)
        commit('setSuccess', 'Logged in')
        commit('setLoading', false)
        commit('setUser', payload)
      } catch (response) {
        if (response.status === 401) {
          commit('setError', 'Wrong password')
        } else if (response.status === 404) {
          commit('setError', 'Email not registered')
        } else {
          commit('setError', 'Something went wrong')
        }
        commit('setLoading', false)
        throw Error
      }
    },
    logoutUser ({ commit }) {
      commit('removeToken')
      commit('setUser', null)
      commit('setSuccess', 'Logged out')
      router.push('/login')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isUserLoggedIn (state) {
      return state.jwt !== null
    },
    token (state) {
      return state.jwt
    },
    email (state) {
      return state.user.email
    }
  }
}
