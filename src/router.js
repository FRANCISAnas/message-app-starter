import { createWebHistory,createRouter} from "vue-router";
import Contacts from "@/components/Contacts";
import Messages from "@/components/Messages";


const routes=[
    { path: '/', component: Messages},
    { path: '/messages', component: Messages},
    { path: '/contacts', component: Contacts}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;