<template>
  <div class="Menu">
    <h1>{{unreadMessages}}</h1>
  </div>
</template>

<script>
export default {
name: "Menu",
  props: {
    unreadMessages: Number,
  }
}
</script>

<style scoped>

</style>