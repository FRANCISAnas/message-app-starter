<template>
  <div class="app">
    <HelloWorld :msg="'Welcome to Your Vue.JS App'"/>
    <h2><Messages/></h2>
    <Message :message="message"/>
    <Menu :unreadMessages="5"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Menu from "./components/Menu.vue";
import Messages from "./components/Messages.vue";
import Message from "./components/Message.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Messages,
    Message,
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
