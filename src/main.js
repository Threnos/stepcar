import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const dict = {
  custom: {
    s1Email: {
      required: 'Your email is empty'
    }
  }
}
VeeValidate.Validator.updateDictionary(dict);
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
