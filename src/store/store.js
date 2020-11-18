import {createStore} from 'vuex'
import {messagesMock} from "@/mocks/messages.mock";

export default createStore({

    state(){
        return{
            messages: messagesMock
        }
    },

    mutations:{
        setMessages: (state, payload) => {
            state.messages = payload.messages;
        }
    },

    getters:{
        numberOfUnreadMessages: (state) =>{
            let unread = 0;
            state.messages.forEach(value => {
                if(!value.read) unread++;
            });
            return unread;
        },
        sortMessagesByDate: (state) =>{
            return state.messages.sort((a,b) =>(a.date > b.date) ? 1 : -1);
        },


    },
    actions:{

    }
})