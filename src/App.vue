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
body{
  height: 100vh;
  background: linear-gradient(to bottom, black 40%, #fff0), url(./assets/img/background.png) no-repeat 0 0;
  background-size: cover;
  background-attachment: fixed;
}
</style>
