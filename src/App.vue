<template>
  <router-view/>
</template>

<script>
import skrollr from '../node_modules/skrollr/dist/skrollr.min.js';
import jQuery from 'jquery';


export default{
	created() {
		jQuery(window).on('load', function(){
			jQuery('#oc-services').owlCarousel({
				items: 1,
				margin: 30,
				nav: false,
				dots: true,
				smartSpeed: 400,
				responsive:{
					576: { stagePadding: 30, items: 1 },
					768: { stagePadding: 30, items: 2 },
					991: { stagePadding: 150, items: 3 },
					1200: { stagePadding: 150, items: 3}
				},
			});
		});
	},
  mounted() {
    skrollr.init({forceHeight: false});
  },
}
</script>

<style>

</style>
