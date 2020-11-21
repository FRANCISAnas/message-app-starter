<template>
  <div>
    <h2><strong>Contacts</strong></h2>
    <h4>
      <Contact v-for="curCon in contacts" :key="curCon.id" :contact="curCon"/>
    </h4>
  </div>
</template>

<script>
import Contact from "@/components/Contact";

export default {
  name: 'Contacts',
  components: {Contact},

  computed: {
    contacts() {
      return this.$store.getters.sortContacts;
    },

  },
  created() {
    this.$store.dispatch('setContacts');
  },
}
</script>

<style scoped>

</style>