import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.root = `${process.env.VUE_APP_BACKEND_URL}${process.env.VUE_APP_BACKEND_API_PREFIX}`
console.log(Vue.http.options.root)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
