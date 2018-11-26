<template lang="html">
  <div class="container pb-4 contactDiv">
    <p class="h3 text-center">Связь с разработчиками</p>
    <hr class="border-top border-dark position-relative hr-divider w-75 mb-4 mt-0">

    <div class="container-fluid px-4 py-3 bg-2light">
      <div class="container p-4 bg-3lighter">
        <div v-for="(item, n) in messages" :key="n">
          <span><b>{{ item.name }}</b></span> <span class="ml-2 text-muted">{{ item.data }}</span>
          <p class="font-weight-light">{{ item.text }}</p>
        </div>
      </div>

      <form>
        <input type="text" class="mt-4 w-100" placeholder="Введите ваше сообщение">
        <div class="w-100 mt-2 text-right">
          <button type="button" class="border border-light">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      messages: [
        {
          name: 'test name',
          data: '22:06',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    }
  }
}
</script>

<style lang="css">
.contactDiv{
  height: ;
}
</style>
