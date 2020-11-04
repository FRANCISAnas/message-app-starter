<template>
  <div class="message">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
name: "Message",
  props:{
    message: Object,
  }
}
</script>

<style scoped>

</style>