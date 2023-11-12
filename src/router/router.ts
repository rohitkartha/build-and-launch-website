import {createRouter, createWebHistory} from 'vue-router'
 import Hello from '../components/HelloWorld.vue'
import Other from '../components/other.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Hello
    },
    {
        path: '/test',
        name: 'Test',
        component: Other
    }

]

const router = createRouter({history : createWebHistory(), routes})


export default router;