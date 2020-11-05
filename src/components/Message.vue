<template>

    <div v-if="this.message !==undefined">
      <button @click="changeStatus()">
        <img v-bind:src="message.sender.profileImage"/>
        <strong v-if="hasRead()"><p>name: {{message.sender.name}}</p></strong>
        <p>message: {{message.content}}</p>
        <p>message: {{message.read}}</p>
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

    changeStatus(){
      console.log("this.message.read = ",this.message.read);
      this.message.read = true;
      // reload page
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