import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/style.css';
import '@/assets/css/freelancer.css';
import '@/assets/js/functions.bundle';
import '@/assets/js/plugins.min.js';
import '@/assets/js/skrollr.min.js';



var app = createApp(App);


app.use(router);

app.mount('#app');
