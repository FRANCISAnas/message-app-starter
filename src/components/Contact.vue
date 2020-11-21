<template>
  <div v-if="this.contact !==undefined">
    <img v-bind:src="this.contact.profileImage"/>
    <p>{{ contact.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contact: Object,
  },

}
</script>

<style scoped>

</style>