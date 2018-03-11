$(document).ready(function() {
   $("#events-car, #events-car-small").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#events-car, #events-car-small").swipeleft(function() {
      $(this).carousel('next');
   });
});