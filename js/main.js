$(document).ready(function(){
  "use strict";

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $(".sidenavbutton").addClass("sticky");
      $(".color-nav-scroll").css("color","#000");
      $(".nite").css("color","#000");
    }else{
      $(".sidenavbutton").removeClass("sticky");
      $(".side-icon, .krep").css("color","#fff");
      $(".nite").css("color","#41F20E");
    }
  })

  var typed = new Typed('.type', {
    strings: [ 
      " Digital",
      "Creative"
    ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}