import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Register from './views/Registration.vue'

// user space
import UserHome from './views/user/UserHome.vue'
import UserCabinet from './views/user/UserCabinet.vue'
import UserRecord from './views/user/UserRecord.vue'
import UserDiscounts from './views/user/UserDiscounts.vue'
import UserMailing from './views/user/UserMailing.vue'
import UserClients from './views/user/UserClients.vue'
import UserContact from './views/user/UserContact.vue'
import UserFaq from './views/user/UserFaq.vue'
import UserSettings from './views/user/UserSettings.vue'
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
          path: 'cabinet',
          component: UserCabinet
        },
        {
          path: 'record',
          component: UserRecord
        },
        {
          path: 'discounts',
          component: UserDiscounts
        },
        {
          path: 'mailing',
          component: UserMailing
        },
        {
          path: 'clients',
          component: UserClients
        },
        {
          path: 'contact',
          component: UserContact
        },
        {
          path: 'faq',
          component: UserFaq
        },
        {
          path: 'settings',
          component: UserSettings
        }
      ]
    }
    // user space
  ]
})
