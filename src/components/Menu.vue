<template>
  <div class="Menu">

    <router-link to="/contacts">
      <i class="fas fa-user-friends"></i>
    </router-link>

    <router-link to="/messages">
      <i v-if="nbUnReadMsg>0" class="fas fa-comment-alt">
        {{ nbUnReadMsg }}
      </i>
      <i v-else class="far fa-comment-alt"></i>
    </router-link>

    <router-link to="/contacts">
      <i  class="fas fa-phone"></i>
    </router-link>
    <i class="fas fa-ellipsis-h"></i>

  </div>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    nbUnReadMsg() {
      return this.$store.getters.numberOfUnreadMessages;
    }
  }
}
</script>

<style scoped>
i {
  margin-right: 5%;
  margin-bottom: 2%;
}
</style>