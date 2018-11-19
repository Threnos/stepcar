<template>
  <div class="home">
    <header id="homeHeader" class="container">
      <div class="row justify-content-center">
        <div class="col-2 text-right">
          <img src="@/assets/img/logo.png" alt="" class="" id="logo">
        </div>
        <div class="col-3 text-left">
          <span class="text-white" id="logo-text-1">StepCar</span><br>
          <span class="text-white" id="logo-text-2">слоганслоганслоган</span>
        </div>
      </div>

      <div id="nav">
        <router-link to="/registration" class="btn btn-primary">Главная</router-link> |
        <router-link to="/login" class="btn btn-primary">Авторизация</router-link> |
        <router-link to="/user/cabinet" class="btn btn-primary">Личный кабинет</router-link>
      </div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
/* header start */
#homeHeader{
  padding-top: 5rem;

  background: url(./../assets/img/car.png) no-repeat 80% 0;
  background-size: 50%;
}
#logo{
  width: 6rem;
}
#logo-text-1{
  font-size: 4rem;
  font-weight: 300;
}
#logo-text-2{
  font-size: 2rem;
  font-weight: 100;
  margin-left: -2rem;
}

@media (max-width: 576px){
  #logo{
    width: 5rem;
  }
  #logo-text-1{
    font-size: 3rem;
  }
  #logo-text-2{
    font-size: 1.4rem;
  }
}
/* header end */
</style>
