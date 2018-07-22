$(document).ready(function(){
   var altura = $('nav').offset().top;
   var pagina = $(this);

   $(window).on('scroll', function () {
      if ($(window).scrollTop()>altura) {
        $('nav').addClass('fixed_navbar');
      } else {
        $('nav').removeClass('fixed_navbar');
      } 
   });

   $('.init_modal').on('click', function(){
        $('.init_modal').addClass('modal_clicked');
        pagina.focus();
   });
});