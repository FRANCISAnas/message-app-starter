<template>
  <div class="app">
    <router-view></router-view>
    <Menu class="menu-container"/>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu
  }
};
</script>

<style>
html, body {
  height: 100%;
}

#app {
  border-radius: 8px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
