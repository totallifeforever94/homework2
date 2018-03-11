$(document).ready(function() {
   $("#swipe").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#swipe").swipeleft(function() {
      $(this).carousel('next');
   });
});