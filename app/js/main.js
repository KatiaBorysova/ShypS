$(function() {
    console.log('is main.js');
});

////////////////////////////////////////////  
// PARALAX SECTION
///////////////////////////////////////////  

    $(window).scroll(function(e) {
        parallax();
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.parallax-bg').css('top', -(scrolled * 0.9) + 'px' - 40);
    }
		
////////////////////////////////////////////  
// SCROLL TOP
///////////////////////////////////////////
/*
$(document).ready(function() {
  $("html,body").animate({scrollTop: 0}, 100); //100ms for example
});
*/
/*
window.onload = function() {
    setTimeout (function () {
     scrollTo(0,0);
    }, 100); 
}; 
*/

///////////////////////////////////
// WOW
///////////////////////////////////
    new WOW().init();

////////////////////////////////////////////  
// HOVER TABS
///////////////////////////////////////////  


    $('.about-tabs a').hover(function(e) {
        e.preventDefault()
        $(this).tab('show')
    });
   

////////////////////////////////////////////  
// OWL CAROUSEL
///////////////////////////////////////////  

      $(document).ready(function() {
     
        $("#owl-demo").owlCarousel({

            loop:true,
           autoWidth:true

            //items : 1, // THIS IS IMPORTANT
            //responsive : {
                  //330 : { items : 1  }, // from zero to 330 screen width 4 items
                  //768 : { items : 2  }, // from 480 screen widthto 768 6 items
                  //1024 : { items : 3   // from 768 screen width to 1024 8 items
                  //}
             // }
       
        });
 
      });   
    
/////////////////////////////////////////
// FOTORAMA
///////////////////////////////////////

$(function () {
    $('.fotorama').fotorama();
  });

////////////////////////////////////////////  
// ISOTOPE FILTER
///////////////////////////////////////////	 	

    $('.isotope-filter').isotope({
        itemSelector: '.isotope-item'
    });

    $('#filter a').click(function() {

        $('#filter a').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');

        $('.isotope-filter').isotope({
            filter: selector,
            animationOptions: {
                duration: 1000,
                easing: 'easeOutQuart',
                queue: false
            }
        });
        return false;

    });

    var options = {
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        scrollBar: '.sly_scrollbar_isotope',
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,
    };

    //$('.isotope-frame').sly(options);


////////////////////////////////////
// magnificPopup 
/////////////////////////////////////

    $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: true,
		fixedContentPos: false,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
        },  
		
    });
    
    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            fixedContentPos: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    });
    $(document).ready(function() {
        $('.popup-gallery1').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            fixedContentPos: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
          
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Shypshyna</small>';
                }
            } 
        });
    });


/////////////////////////////////////////////
// MENU HEADER 
////////////////////////////////////////////

$(document).ready(function(){

    var $menu = $("#menu");

        $(window).scroll(function(){
   
         if ( $(this).scrollTop() > 70 && $menu.hasClass("navbar-default") ){
                $menu.removeClass("navbar-default").addClass("navbar-fixed-top");
            } 
        else if($(this).scrollTop() <= 70 && $menu.hasClass("navbar-fixed-top")) {
                $menu.removeClass("navbar-fixed-top").addClass("navbar-default");
            }    

        });//scroll 
    });


/////////////////////////////////////////////
// HAMBURGER 
/////////////////////////////////////////////
/*
var Hamburger = {
  
    el: {
      ham: $('.hamburger'),
      hamTop: $('.hamburger-top'),
      hamMiddle: $('.hamburger-middle'),
      hamBottom: $('.hamburger-bottom')
    },
    
    init: function() {
        Hamburger.bindUIactions();
    },
    
    bindUIactions: function() {
        Hamburger.el.ham
          .on(
            'click',
          function(event) {
            Hamburger.activateMenu(event);
          event.preventDefault();
        }
      );
    },
    
    activateMenu: function() {
        Hamburger.el.hamTop.toggleClass('hamburger-top-click');
        Hamburger.el.hamMiddle.toggleClass('hamburger-middle-click');
        Hamburger.el.hamBottom.toggleClass('hamburger-bottom-click'); 
    }
  };
  
  Hamburger.init();
  */

//////////////////////////////////////////////////////////

    