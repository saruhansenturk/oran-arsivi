import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/style.css';
import '@/assets/css/freelancer.css';
import '@/assets/js/functions.bundle';
import '@/assets/js/plugins.min.js';
import '@/assets/js/skrollr.min.js';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/owl.carousel.js';
import '../node_modules/skrollr/dist/skrollr.min.js';

var app = createApp(App);
window.$ = $;

app.use(router);

app.mount('#app');
