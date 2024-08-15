import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/style.css';
import '@/assets/demos/freelancer/freelancer.css';
// import '@/assets/js/functions.js';
// import '@/assets/js/plugins.min.js';



var app = createApp(App);
window.$ = $;

app.use(router);

app.mount('#app');
