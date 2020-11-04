<template>
  <div v-if="message!==undefined">
    <div>name: {{message.sender.name}}</div>
    <div>message: {{message.content}}</div>
    <img v-bind:src="message.sender.profileImage"/>
</div>
</template>

<script>
export default {
name: "Message",
  props:{
    message: Object,
  },
}
</script>

<style scoped>
div{
  border-style: groove;
  border-color: steelblue;
  border-width: 7px;
}
</style>