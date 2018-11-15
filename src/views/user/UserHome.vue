<template>
  <div id="UserHome">
    <header id="userHeader" class="container-fluid">
      <div class="row container pt-4">
        <div class="col text-right">
          <router-link to="/"><img src="@/assets/img/logo.png" alt="" class="" id="logo"></router-link>
        </div>
        <div class="col text-left">
          <span class="text-white" id="logo-text-1">StepCar</span><br>
          <span class="text-white" id="logo-text-2">слоганслоганслоган</span>
        </div>
      </div>
    </header>

<router-link to="/" class="btn btn-primary">Главная сайта</router-link>

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
        <router-link to="/user/settings" class="nav-item nav-link userNavLink text-light">Настройки</router-link>
      </nav>

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
  background: url(./../../assets/img/car.png) no-repeat 100% 0
}

#userMain{
  background-color: rgba(255, 255, 255, 0.5)
}
.userNavLink{
  background-color: #4b4b4b!important;
}
</style>
