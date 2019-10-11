import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserProfile from './views/UserProfile.vue'
import Err from './views/Err.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'err',
      component: Err
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user-profile/:login',
      name: 'userProfile',
      component: UserProfile
    },
  ]
})
