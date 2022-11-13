import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// Axios settings
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://gabbyblog.herokuapp.com/';

createApp(App).use(store).use(router).mount('#app')
