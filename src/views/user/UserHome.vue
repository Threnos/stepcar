<template>
  <div id="UserHome">
    <header id="userHeader" class="container-fluid">
      <div class="row container">
        <div class="col text-right">
          <img src="@/assets/img/logo.png" alt="" class="" id="logo">
        </div>
        <div class="col text-left">
          <span class="text-white" id="logo-text-1">StepCar</span><br>
          <span class="text-white" id="logo-text-2">слоганслоганслоган</span>
        </div>
      </div>
    </header>

    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'userHome'
}
</script>

<style>
  #userHeader{
    background: url(./../../assets/img/car.png) no-repeat 100% 0;
  }
</style>
