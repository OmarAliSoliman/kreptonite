$(document).ready(function(){
  "use strict";

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $(".sidenavbutton").addClass("sticky");
      $(".color-nav-scroll").css("color","#fff");
      $(".nite").css("color","#fff");
    }else{
      $(".sidenavbutton").removeClass("sticky");
      $(".side-icon, .krep").css("color","#fff");
      $(".nite").css("color","#41F20E");
    }
  })

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.clinet').slick({
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: 'linear',
  dots: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 810,
      settings: {
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'linear',
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
  cursorcolor: '#33C10B',
  cursorwidth: '8px',
  cursorborder: '1px solid #33C10B',
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}