<template>
  <div class="Menu">
    <i class="fas fa-user-friends"></i>
    <i v-if="this.unreadMessages>0" class="fas fa-comment-alt">{{ unreadMessages }}</i>
    <i v-else class="far fa-comment-alt"></i>
    <i class="fas fa-phone"></i>
    <i class="fas fa-ellipsis-h"></i>

  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    unreadMessages: Number,
  },

}
</script>

<style scoped>
i {
  margin-right: 5%;
  margin-bottom: 2%;
}
</style>