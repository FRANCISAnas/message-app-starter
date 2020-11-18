<template>
  <div class="app">
    <HelloWorld :msg="'Welcome to Your Vue.JS App'"/>
    <h2>
      <Messages @unread="recuperate($event)"/>
    </h2>
    <Menu :unreadMessages="this.unreadMessages"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Menu from "./components/Menu.vue";
import Messages from "./components/Messages.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Messages,
    Menu
  },
  data() {
    return {
      unreadMessages: 0
    };
  },
  methods:{
    recuperate(toRet){
      console.log("toRet = ",toRet);
      this.unreadMessages = toRet;
    }
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
