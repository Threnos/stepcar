<template lang="html">
  <div class="container">
    <p class="h3 text-center">Клиенты</p>
    <hr class="border-top border-dark position-relative hr-divider w-75 mb-4 mt-0">

    <div class="container-fluid bg-3lighter">
      <div class="row w-100 mx-auto py-1">
          <span class="col pl-0">Username</span>
          <span class="col">Time</span>
          <span class="col">Post</span>
          <a href="" class="col offset-4">Детальнее...</a>
      </div>

      <p class="w-100 bg-3lighter p-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt consequuntur amet a debitis nihil animi id molestias doloribus totam eos.</p>

      <input type="text" class="w-100" placeholder="Введите ваш ответ">

      <div class="row my-1 py-1">
        <div class="col text-right">
          <button type="button" class="">Отправить</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clients: [ { name: '' } ]
    }
  }
}
</script>

<style lang="css">
</style>
