<template>
  <Message v-for="curMessage in messages" :key="curMessage.id" :message="curMessage"/>

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

</style>