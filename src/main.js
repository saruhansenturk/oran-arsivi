import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/style.css';
import '@/assets/css/font-icons.css';
import '@/assets/css/freelancer.css';
import '@/assets/js/functions.js';
import '@/assets/js/plugins.min.js';

import '@/assets/js/skrollr.min.js';
import '@/assets/js/modules/accordion.js'
import '@/assets/js/modules/adaptivecolorscheme.js'
import '@/assets/js/modules/ajaxform.js'
import '@/assets/js/modules/ajaxtrigger.js'
import '@/assets/js/modules/animations.js'
import '@/assets/js/modules/bootstrap.js'
import '@/assets/js/modules/bscomponents.js'
import '@/assets/js/modules/buttons.js'
import '@/assets/js/modules/canvasslider.js'
import '@/assets/js/modules/carousel.js'
import '@/assets/js/modules/clipboard.js'
import '@/assets/js/modules/codehighlight.js'
import '@/assets/js/modules/conditional.js'
import '@/assets/js/modules/cookies.js'
import '@/assets/js/modules/countdown.js'
import '@/assets/js/modules/counter.js'
import '@/assets/js/modules/cursor.js'
import '@/assets/js/modules/dataclasses.js'
import '@/assets/js/modules/dataheights.js'
import '@/assets/js/modules/easing.js'
import '@/assets/js/modules/filter.js'
import '@/assets/js/modules/flexslider.js'
import '@/assets/js/modules/flickr.js'
import '@/assets/js/modules/fontsizer.js'
import '@/assets/js/modules/fullvideo.js'
import '@/assets/js/modules/googlemaps.js'
import '@/assets/js/modules/gototop.js'
import '@/assets/js/modules/grid.js'
import '@/assets/js/modules/headers.js'
import '@/assets/js/modules/hover3d.js'
import '@/assets/js/modules/hoveranimations.js'
import '@/assets/js/modules/instagram.js'
import '@/assets/js/modules/lazyload.js'
import '@/assets/js/modules/lightbox.js'
import '@/assets/js/modules/logo.js'
import '@/assets/js/modules/masonrythumbs.js'
import '@/assets/js/modules/mediaactions.js'
import '@/assets/js/modules/menus.js'
import '@/assets/js/modules/modal.js'
import '@/assets/js/modules/navtree.js'
import '@/assets/js/modules/notifications.js'
import '@/assets/js/modules/onepage.js'
import '@/assets/js/modules/pagemenu.js'
import '@/assets/js/modules/pagetransition.js'
import '@/assets/js/modules/portfolioajax.js'
import '@/assets/js/modules/pricingswitcher.js'
import '@/assets/js/modules/progress.js'
import '@/assets/js/modules/quantity.js'
import '@/assets/js/modules/readmore.js'
import '@/assets/js/modules/resizevideos.js'
import '@/assets/js/modules/roundedskills.js'
import '@/assets/js/modules/schemetoggle.js'
import '@/assets/js/modules/scrolldetect.js'
import '@/assets/js/modules/shapedivider.js'
import '@/assets/js/modules/sidepanel.js'
import '@/assets/js/modules/sliderdimensions.js'
import '@/assets/js/modules/slidermenuclass.js'
import '@/assets/js/modules/sliderparallax.js'
import '@/assets/js/modules/stickfooteronsmall.js'
import '@/assets/js/modules/stickysidebar.js'
import '@/assets/js/modules/subscribe.js'
import '@/assets/js/modules/textrotator.js'
import '@/assets/js/modules/textsplitter.js'
import '@/assets/js/modules/tips.js'
import '@/assets/js/modules/toggle.js'
import '@/assets/js/modules/topcart.js'
import '@/assets/js/modules/topsearch.js'
import '@/assets/js/modules/twitter.js'
import '@/assets/js/modules/videofacade.js'
import '@/assets/js/modules/viewportdetect.js'
import '@/assets/js/modules/youtubebg.js'


var app = createApp(App);
window.$ = $;

app.use(router);

app.mount('#app');
