import store from '../store'
import router from './index'

export default function (to, from, next) {
  if (store.getters.isUserLoggedIn) {
    next()
  } else {
    store.dispatch('setError', 'Sign in to access this page')
    next({
      path: '/login'
    })
  }
}
