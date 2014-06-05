(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		


		/****************************
		*	stickyNav 
		*****************************/
		var stickyNavTop = $('.nav').offset().top;
		stickyNavTop = stickyNavTop - 29;
		var body = $('body');
		var stickyNav = function(){
			var scrollTop = $(window).scrollTop();

			//test if on Homepage.
			if(scrollTop > stickyNavTop && body.hasClass('Home') ) {
				$('.nav').addClass('sticky');
			} else {
				$('.nav').removeClass('sticky');
			}
		};

		$(window).scroll(function() {
			stickyNav();
		});
		
		/*****/


		//imageScroll.js
		$('.img-holder').imageScroll({
		    coverRatio: 0.3,
		    speed: 0.2,
		    
		    holderMinHeight: 500,
		});




	});
	
})(jQuery, this);
