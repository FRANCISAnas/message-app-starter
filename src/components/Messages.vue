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

  created() {
    this.sortMyMessagesByDate();
  },

  methods:{
    updateStatus(message){
      this.messages.forEach((value) => {
        if(value === message){
         message.read = true;
        }
      });
    },

    /**
     * selection sorting
     */
    sortMyMessagesByDate(){
      for (let i = 0; i < this.messages.length; i++){
        console.log("sorting ...");
        for (let j = i; i < this.messages.length; i++){
          if(this.dateParser(this.messages[j].date)<this.dateParser(this.messages[i].date)
          ||
              this.hourParser(this.messages[j].date) > this.hourParser(this.messages[i].date)){
            let temp = this.messages[i];
            this.messages[i] = this.messages[j];
            this.messages[j] = temp;
            console.log("here we go ...");
          }
        }
      }
    },

    dateParser(date){
      let to_ret = 0
      let month;
      month = date.toString().substring(4,7);
      switch (month){
        case "Jan":
          to_ret = 1;break;
        case "Feb":
          to_ret = 2;break;
        case "Mar":
          to_ret = 3;break;
        case "Apr":
          to_ret = 4;break;
        case "May":
          to_ret = 5;break;
        case "Jun":
          to_ret = 6;break;
        case "Jul":
          to_ret = 7;break;
        case "Aug":
          to_ret = 8;break;
        case "Sep":
          to_ret = 9;break;
        case "Oct":
          to_ret = 10;break;
        case "Nov":
            to_ret = 11;break;
        case "Dec":
          to_ret = 12;break;
      }
      to_ret += parseInt(date.toString().substring(8,10));
      to_ret += parseInt(date.toString().substring(13,16));
      return to_ret;
    },

    hourParser(date) {
      let hour = date.toString().substring(16,24);
      let to_ret = parseInt(hour.substring(0,2)) + parseInt(hour.substring(3,5)) + parseInt(hour.substring(6,8));
      console.log(to_ret);
      return to_ret;
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