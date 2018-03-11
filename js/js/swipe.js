$(document).ready(function() {

	$(".carousel-inner").swipe({
		//Generic swipe handler for all directions
		swipeLeft: function(event, direction, distance, duration, fingerCount) {
			$(this).parent().carousel('prev');
		},
		swipeRight: function() {
			$(this).parent().carousel('next');
		},
		threshold: 0
	});
});