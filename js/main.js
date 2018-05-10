(function ($) {

    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");

    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #primary_menu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });


    /* HIDE URL
    ==========================*/
    // iPhone Hide URL

    $(document).ready(function(){
        if (navigator.userAgent.indexOf('iPhone')!=-1){
           addEventListener("load",function(){
            setTimeout(hideURLbar,0);
            },false);
        };

        // else smartphone Hide URL
        function hideURLbar(){
            window.scrollTo(0,1);
        };
    });

    /* HIDE nav bar
    ==========================*/

    // $(document).ready(function(){
    //     // hide .navbar first
    //     $(".navbar-header").hide();
    //     // fade in .navbar
    //     $(function () {
    //         $(window).scroll(function () {

    //                  // set distance user needs to scroll before we start fadeIn
    //             if ($(this).scrollTop() > 500) {
    //                 $('.navbar-header').fadeIn();
    //             } else {
    //                 $('.navbar-header').fadeOut();
    //             }
    //         });
    //     });
    // });

    /*-- Smoth-Scroll --*/
    $('.mainmenu-area a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
        /*WoW js Active
        =================*/
        new WOW().init({
            mobile: false,
        });
    });
})(jQuery);
