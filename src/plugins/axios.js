import { createApp } from 'vue'
import axios from 'axios'

const guest = axios.create({
    baseURL: "http://loaclhost/user",
    headers:{
        "Content-type": 'application/x-www-form-urlencoded',
        "X-Requested-With": 'XMLHttpRequest',
    },
});

const app = createApp({});

app.config.globalProperties.$guest = guest;

export {guest};