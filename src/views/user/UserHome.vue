<template>
  <div id="UserHome">
    <header id="userHeader" class="container-fluid text-white">
      <div class="row container mx-auto pt-4">
        <div class="col-1 text-right">
          <router-link to="/"><img src="@/assets/img/logo.png" alt="" class="" id="logo"></router-link>
        </div>
        <div class="col-3 ml-1 text-left">
          <span id="logo-text-1">StepCar</span><br>
          <span id="logo-text-2">слоганслоганслоган</span>
        </div>
        <div class="col d-flex justify-content-end">
          <p class="align-self-end text-right">Личный код регистрации:</p>
        </div>
      </div>
    </header>

<router-link to="/registration" class="btn btn-primary">Главная</router-link>

    <div id="userMain" class="container">
      <nav id="userNav" class="nav nav-pills nav-fill py-3">
        <router-link to="/user/cabinet" class="nav-item nav-link userNavLink text-light">Кабинет</router-link>
        <router-link to="/user/record" class="nav-item nav-link userNavLink text-light">Записать</router-link>
        <router-link to="/user/discounts" class="nav-item nav-link userNavLink text-light">Скидки</router-link>
        <li class="nav-item userNavLink text-light dropdown">
          <a class="nav-link nav-item dropdown-toggle userNavLink text-light" data-toggle="dropdown" href="#" role="button">Обратная связь</a>
          <div class="dropdown-menu userNavLink">
            <router-link to="/user/mailing" class="dropdown-item text-light">Рассылка</router-link>
            <router-link to="/user/clients" class="dropdown-item text-light">Клиенты</router-link>
            <router-link to="/user/contact" class="dropdown-item text-light">Связь с разработчиками</router-link>
          </div>
        </li>
        <router-link to="/user/faq" class="nav-item nav-link userNavLink text-light">FAQ</router-link>
        <li class="nav-item userNavLink text-light dropdown">
          <a class="nav-link nav-item dropdown-toggle userNavLink text-light" data-toggle="dropdown" href="#" role="button">Настройки</a>
          <div class="dropdown-menu userNavLink">
            <router-link to="/user/settings" class="dropdown-item text-light">Настройки автомойки</router-link>
            <router-link to="/user/profile" class="dropdown-item text-light">Мой профиль</router-link>
            <router-link to="/user/logout" class="dropdown-item text-light">Выход</router-link>
          </div>
        </li>
      </nav>

      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
#userHeader{
  background: url(./../../assets/img/car.png) no-repeat 100% 0
}

#userMain{
  background-color: rgba(255, 255, 255, 0.5)
}
.userNavLink{
  background-color: #4b4b4b!important;
}
</style>
