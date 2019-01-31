import Vue from 'vue'
import Vuelidate from 'vuelidate' // модуль валидации полей ввода
import VueTheMask from 'vue-the-mask' // маска ввода для полей
import App from './App.vue'
import router from './router' // вью роутер
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Vuelidate)
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  validations: {},
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
