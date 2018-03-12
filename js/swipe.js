$(document).ready(function() {
  
  $(".carousel-item").swiperight(function() {
      $(this).carousel('prev');
  });
  $(".carousel-item").swipeleft(function() {  
      $(this).carousel('next');
  });

});