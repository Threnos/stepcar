<template>
<main id="app" class="container-fluid">
    <router-view></router-view>
</main>
</template>

<script>
export default {
}
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

body{
  height: 100vh;
  background: linear-gradient(to bottom, #000, #fff0), url(./assets/img/background.png) no-repeat 0 0;
  background-size: cover;
  background-attachment: fixed;
  overflow-x: hidden
}

.hr-divider::before, .hr-divider::after{
  display: block;
  content: "";
  background-color: black;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 666px;
  position: absolute;
  top: -0.4rem
}
.hr-divider::before{
  left: -0.5rem
}
.hr-divider::after{
  right: -0.5rem
}

.bg-2light{
  background: linear-gradient(to bottom, #b7b7b7, rgba(183, 183, 183, 0.5)) no-repeat 0 0
}
.bg-3lighter{
  background-color: rgba(214, 214, 214, 0.75)
}

.div-err{
  display: inline-block;
  background-color: rgba(214, 214, 214, 0.5);
  color: #dc3545;
  border-radius: .25rem;
  padding: .25rem;
  margin-top: .25rem
}
</style>
