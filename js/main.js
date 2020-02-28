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

$('.clinet').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

new WOW().init();
$("body").niceScroll({
  cursorcolor: '#f00',
  cursorwidth: '8px',
  cursorborder: '1px solid #33C10B',
});

});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}