(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

	///////////////////////////
	// Custom
    $("#btn-shuffle").bind('click', shuffle);        

    function shuffle(){		
        $("#idea-containter").each(function(){
            var divs = $(this).find('.ideas');
            for(var i = 0; i < divs.length; i++) 
				$(divs[i]).remove();            
            //the fisher yates algorithm, from http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
            var i = divs.length;
            if ( i == 0 ) 
				return false;
            
			while ( --i ) {
               var j = Math.floor( Math.random() * ( i + 1 ) );
               var tempi = divs[i];
               var tempj = divs[j];
               divs[i] = tempj;
               divs[j] = tempi;
             }
            
			for(var i = 0; i < divs.length; i++) 
				$(divs[i]).appendTo(this);
        });                    
    }

	// $('#btn-shuffle').click(function(){
    //     var ideaslength = $('.ideas').length;
	// 	var idea = $('.ideas').first();
	// 	// alert(idea.html());
	// 	// $('#idea-container').a;
    // });

})(jQuery);
