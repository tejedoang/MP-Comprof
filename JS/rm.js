$(document).ready(function(){


 
    var navbarh = 200;
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
        
           
        
    });
   
  });
  
  
      