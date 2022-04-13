$(function($) {

  "use strict";

  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

/*=========================== preloader ===========================*/



/*=========================== testimonials slider ===========================*/

var owls = $("#testimonials_owl_s");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:6000,
        smartSpeed:1000,
        autoplayHoverPause:true,
        items: 2,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots:false,
        nav:false,

        merge: false,
        mergeFit: true,
        autoWidth: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            780: {
                items: 1,
            },
            994: {
                items: 2,
                nav: false
            },
            1100: {
                items: 2,
                nav: false,
                loop: true
            }
        }
  });

/*=========================== testimonials slider ===========================*/


});

