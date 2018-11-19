<template lang="html">
  <div class="container form-background w-50 p-4 px-5">
    <h1 class="text-center">Авторизация</h1>

    <p class="h2 text-center mt-4 mb-0">Данные доступа</p>
    <hr class="border-top border-dark position-relative hr-divider w-75 mt-0">

    <form class="container w-50 mx-auto py-3 text-black position-relative">
      <input type="text" v-model="loginMailTel" class="form-control mb-3 mx-auto text-center w-75" placeholder="E-mail/Телефон" required>
      <input type="password" v-model="loginPass" class="form-control mb-3 mx-auto text-center w-75" placeholder="Пароль" required>
    </form>

    <div class="row mt-3">
      <div class="col text-right">
        <button type="submit" class="border-0 bg-transparent nextButton" v-on:click.prevent="nextForm"><span class="h4 text-dark">Далее</span><img src="@/assets/img/icons/transfer.png" class="w-25 ml-2 mb-1" alt=""></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',

  data () {
    return {
      loginMailTel: '',
      loginPass: ''
    }
  }
}
</script>

<style lang="css">
</style>
