import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './not-found'
import Home from '@/components/Core/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '*',
      beforeEnter: NotFound
    }
  ],
  mode: 'history'
})
