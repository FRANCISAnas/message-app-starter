<template>
    <div v-if="this.message !==undefined">
      <button @click="emitMessage(this.message)">
        <img v-bind:src="message.sender.profileImage"/>
        <p>name: {{message.sender.name}}</p>
        <strong v-if="hasRead()"><p>message: {{message.content}}</p></strong>
        <p v-else>message: {{message.content}}</p>
      </button>
    </div>
</template>

<script>
export default {
name: "Message",
  props:{
    message: Object,
  },
  methods:{
    hasRead(){
      return  ! this.message.read;
    },

    emitMessage(message){
      this.$emit("message", message);
    }
  }
}
</script>

<style scoped>
button{
  border-color: #76dd7e;
  border-width: 7px;
}
</style>