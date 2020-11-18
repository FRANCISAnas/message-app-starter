import {createStore} from 'vuex'
import {messagesMock} from "@/mocks/messages.mock";
import axios from 'axios'

let serverUrl = 'https://io-labs.fr/messenger/messages.json';
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
        async setMessages(context){
            try {
                const respond = await axios.get(serverUrl);
                context.commit('setMessages',{ messages:respond.data});

            }catch (error){
                console.log('error = ', error);
            }
        }
    }
})