


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
        $('.animated-all .parallax-bg').css('top', -(scrolled * 0.9) + 'px' - 40);
    }



/*
  var x = 0;
	        var y = 0;
			//cache a reference to the banner
	        var banner = $(".parallax-bg");

			// set initial banner background position
	        banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');

	 		// scroll up background position every 90 milliseconds
	        window.setInterval(function() {
	        	banner.css("backgroundPosition", x + 'px' + ' ' + y + 'px');
	            y--;
	            //x--;

	            //if you need to scroll image horizontally -
	            // uncomment x and comment y

	        }, 90);
			
*/		
////////////////////////////////////////////  
    // SCROLL TOP
    ///////////////////////////////////////////
/*
    $('.scroll-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
*/
    ///////
/*
$(document).ready(function() {
  $("html,body").animate({scrollTop: 0}, 100); //100ms for example
});
*/

window.onload = function() {
    setTimeout (function () {
     scrollTo(0,0);
    }, 100); 
};

    ////////////////////////////////////////////  
    // HOVER TABS
    ///////////////////////////////////////////  


    $('.about-tabs a').hover(function(e) {
        e.preventDefault()
        $(this).tab('show')
    });
   

    ////////////////////////////////////////////  
    // SLY SCROLL
    ///////////////////////////////////////////  


    $('.xcarousel-1 .x-frame').sly(

        {
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,

            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            // Buttons
            prevPage: '.xcarousel-1 .prev-page',
            nextPage: '.xcarousel-1 .next-page'
        }

    );

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


//////////////////////////
// magnificPopup //
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
            /*
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            } */
        });
    });


//////////////////////////////////////////////////////////////////
/////////////////////WOW///////////////////////////////////

    new WOW().init();



///////////////////////////////////////////////////////////////////////////////
///////////////////////// MENU HEADER /////////////////////////////////////////
////////////////////////////////////////////////////////////////

/*
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

*/

/////////////////////////////////////////////////////////////
///////////////// HAMBURGER /////////////////////////////////
//////////////////////////////////////////////////////////////
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



//////////////////////////////////////////////////////////

    