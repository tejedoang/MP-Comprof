$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop() > $(window).height()){
          $(".menu").css({"bg.transparent":"nav-color"});   
      }
      else{
          $(".menu").css({"nav-color":"bg.transparent"});
      }

  })
})

$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
  });