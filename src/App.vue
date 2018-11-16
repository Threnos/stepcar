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
</style>
