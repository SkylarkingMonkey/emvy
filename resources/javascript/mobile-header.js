$(document).ready(function (){
  $(document).on('click', '.hamburger', function(){
    $(this).toggleClass("change");
    $("#mobile-menu").toggleClass("menu-hidden", 800, "easeOutQuint");
  });
});
