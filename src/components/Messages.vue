<template>
  <h4>
    <Message v-for="curMessage in messages" :key="curMessage.id" :message="curMessage" @message="updateStatus"/>
  </h4>
</template>

<script>
import {messagesMock} from "@/mocks/messages.mock";
import Message from "@/components/Message";

export default {
  components: {Message},
  data(){
    return {
      messages: messagesMock,
    };
  },

  name: "Messages",

  methods:{
    updateStatus(message){
      this.messages.forEach((value) => {
      if(value === message){
       message.read = true;
      }
    });
    }
  }
}
</script>

<style scoped>
h4{
  border-style: groove;
  border-color: #c7155c;
  border-width: 7px;
}
</style>