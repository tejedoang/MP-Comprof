$(document).ready(function(){


 
  var navbarh = 200;
  var aboutus= 970;
  var ourbisnis= 1971;
  var home = 0; 
  var ourmedia = 3500;
  var contactus = 4726;
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    console.log (scroll);
      if($(window).scrollTop() > navbarh){
 
          $("#menu").addClass('bg-scrolled');
          $("#menu").removeClass('bg-light');
          $("#menu").removeClass('scrolled');

     
      }
      else{
        $("#menu").removeClass('bg-scrolled');
        $("#menu").addClass('bg-light');
        $("#menu").addClass('scrolled');
      } 
      
      if($(window).scrollTop() >= aboutus){
        $(".nav-link").removeClass('active');
      
        $(".about").addClass('active');
      }
      if($(window).scrollTop() >= ourbisnis){
        $(".nav-link").removeClass('active');
      
        $(".bisnis").addClass('active');
      }

      if($(window).scrollTop() == home ){
      
        $(".nav-link").removeClass('active');
        $(".home").addClass('active');
      }

      if($(window).scrollTop() >= ourmedia ){
      
        $(".nav-link").removeClass('active');
        $(".media").addClass('active');
      }

      if($(window).scrollTop() >= contactus ){
      
        $(".nav-link").removeClass('active');
        
      }

     
      
      
  });
 
});