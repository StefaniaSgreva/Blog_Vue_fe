import { createRouter, createWebHistory } from "vue-router";

import Signin from './pages/Signin.vue';
import Signup from './pages/Signup.vue';
import Admin from './pages/Admin.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Admin
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin
        },{
            path: '/signup',
            name: 'signup',
            component: Signup
        },
    ]
});

export {router};