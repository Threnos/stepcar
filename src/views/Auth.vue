<template lang="html">
  <div class="container form-background w-50 p-4 px-5">
    <h1 class="text-center">Авторизация</h1>

    <p class="h2 text-center mt-4 mb-0">Данные доступа</p>
    <hr class="border-top border-dark position-relative hr-divider w-75 mt-0">

    <form class="container px-0 py-3 text-black position-relative" @submit.prevent="submit">
      <div class="form-group w-50 mx-auto text-center">
        <input type="text" v-model.lazy.trim="$v.loginMailTel.$model" class="form-control text-center"
        :class="{ 'border border-danger': $v.loginMailTel.$error }" placeholder="E-mail/Телефон">
        <div class="div-err" v-show="$v.loginMailTel.$error">Заполните поле</div>
      </div>

      <div class="form-group w-50 mx-auto text-center">
        <input type="password" v-model.lazy.trim="$v.loginPass.$model" class="form-control text-center"
        :class="{ 'border border-danger': $v.loginPass.$error }" placeholder="Пароль">
        <div class="div-err" v-show="$v.loginPass.$error">Заполните поле</div>
      </div>

      <div class="row mt-3">
        <div class="col text-right">
          <button type="submit" class="border-0 bg-transparent nextButton"><span class="h4 text-dark">Далее</span><img src="@/assets/img/icons/transfer.png" class="w-25 ml-2 mb-1" alt=""></button>
          <br><div class="div-err" v-show="$v.$error" style="display:none">Проверьте правильность заполнения формы</div>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      loginMailTel: '',
      loginPass: ''
    }
  },
  validations: {
    loginMailTel: {
      required
    },
    loginPass: {
      required
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('error')
      } else {
        console.log('ок')
      }
    }
  }
}
</script>

<style lang="css">
</style>
