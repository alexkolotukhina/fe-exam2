;(function (){

	$(document).ready(function(){

		$('.ba-header__slider').slick({
			dots: true,
			arrows: true
		});

		$('.ba-header__top').on('click', 'li', function(event) {
			event.preventDefault();

			$(this).addClass('active').siblings().removeClass('active');
		});

		var $gallery = $('.ba-work__portfolio').isotope({
				itemSelector: '.ba-work__portfolio--item',
				percentPositon: true,
				masonry: {
					columnWidth: '.ba-work__portfolio-sizer'
				}
			});

			$('.ba-work__filter').on('click', 'li', function(evt) {
				evt.preventDefault();

				var filterValue = $(this).data('filter');
				$gallery.isotope({filter: filterValue });

				$(this).addClass('active-filter').siblings().removeClass('active-filter');
			})
	});

	$(window).on('load', function(){

		var map; 

		map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat: -34.397, lng: 150.749},
  		zoom: 8,
  		disableDefaultUI: true
		});

		var marker = new google.maps.Marker({
			map: map,
			position: {lat: -34.397, lng: 150.644}
		})
  		
	});
})();