import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Register from './views/Registration.vue'

// user space
import UserHome from './views/user/UserHome.vue'
import UserFaq from './views/user/UserFaq.vue'
// user space

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,

      children: [
        {
          path: 'registration',
          component: Register
        }
      ]
    },

    // user space
    {
      path: '/user/',
      component: UserHome,

      children: [
        {
          path: 'faq',
          component: UserFaq
        }
      ]
    }
    // user space
  ]
})
