<template>
  <div>
    <Message v-for="curMessage in messages" :key="curMessage.id" :message="curMessage"/>
  </div>
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

}
</script>

<style scoped>
div{
  border-radius: 5px;
  border-color: mediumvioletred;
  border-width: 5px;
  border-collapse: collapse;
}
</style>