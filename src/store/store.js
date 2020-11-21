import {createStore} from 'vuex'
import axios from 'axios'

let serverUrl = 'https://io-labs.fr/messenger/messages.json';
let contactsUrl = 'https://io-labs.fr/messenger/contacts.json';
export default createStore({

    state() {
        return {
            messages: [],
            contacts: [],

        }
    },

    mutations: {
        setMessages: (state, payload) => {
            state.messages = payload.messages;
        },
        setContacts: (state, payload) => {
            state.contacts = payload.contacts;
        },
    },

    getters: {
        numberOfUnreadMessages: (state) => {
            let unread = 0;
            state.messages.forEach(value => {
                if (!value.read) unread++;
            });
            return unread;
        },
        sortMessagesByDate: (state) => {
            return state.messages.sort((a, b) => (a.date > b.date) ? 1 : -1);
        },
        sortContacts: (state) => {
            return state.contacts.sort((a,b) =>(a.id > b.id)? 1 : -1);
        },
    },

    actions: {
        async setMessages(context) {
            try {
                const respond = await axios.get(serverUrl);
                context.commit('setMessages', {messages: respond.data});
            } catch (error) {
                console.log('error = ', error);
            }
        },

        async setContacts(context) {
            try {
                const respond = await axios.get(contactsUrl);
                context.commit('setContacts', {contacts: respond.data});
            } catch (error) {
                console.log('error = ', error);
            }
        }

    }
})