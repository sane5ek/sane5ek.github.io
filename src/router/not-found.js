import store from '../store'
import router from './index'

export default function (to, from, next) {
  store.dispatch('setError', 'Page not found')
  router.push('/')
}
