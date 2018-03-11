$(document).ready(function() {
   $("#events-car").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#events-car").swipeleft(function() {
      $(this).carousel('next');
   });
});