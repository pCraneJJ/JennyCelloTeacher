(function($){

	// scroll function
	function scrollToID(id, speed){
		var offSet = 50;
		var targetOffset = $(id).offset().top - offSet;
		var mainNav = $('#main-nav');
		$('html,body').animate({scrollTop:targetOffset}, speed);
		if (mainNav.hasClass("open")) {
			mainNav.css("height", "1px").removeClass("in").addClass("collapse");
			mainNav.removeClass("open");
		}
	}

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {
		emailjs.init("user_dJGGq3YNtU8oVwM1G3zLR");	 //jemn2Plam
		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 60
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})
        
        /* ---------------------------------------------- /*
		 * Skills
        /* ---------------------------------------------- */    
        //var color = $('#home').css('backgroundColor');

        $('.skills').waypoint(function(){
            $('.chart').each(function(){
            $(this).easyPieChart({
                    size:140,
                    animate: 2000,
                    lineCap:'butt',
                    scaleColor: false,
                    barColor: '#FF5252',
                    trackColor: 'transparent',
                    lineWidth: 10
                });
            });
        },{offset:'80%'});
        
        
        /* ---------------------------------------------- /*
		 * Quote Rotator
		/* ---------------------------------------------- */
       
			$( function() {
				/*
				- how to call the plugin:
				$( selector ).cbpQTRotator( [options] );
				- options:
				{
					// default transition speed (ms)
					speed : 700,
					// default transition easing
					easing : 'ease',
					// rotator interval (ms)
					interval : 8000
				}
				- destroy:
				$( selector ).cbpQTRotator( 'destroy' );
				*/

				$( '#cbp-qtrotator' ).cbpQTRotator();

			} );
		
        
		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();


		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#myform').submit(function(e) {

			e.preventDefault();
					var params = $('#myform').serializeArray().reduce(function(obj, item) {
				 obj[item.name] = item.value;
				 return obj;
			  }, {});

		   var service_id = "patrick_crane";
		   var template_id = "template_KHYTTmrV";

			var c_name = $('#from_name').val();
			var c_email = $('#reply_to').val();
			var c_message = $('#message_html').val();
			var response = $('#myform .ajax-response');

			if (( c_name== '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email) )) {
				 response.fadeIn(500);
				 response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
			}
			else {
				var service_id = "patrick_crane";
				//emailjs.send(service_id, template_id, params)
				}           
            	return false;
			});

	});

})(jQuery);