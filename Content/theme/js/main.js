/* ----------------------------------------------------------------------------------------
* Author        : WP PLAYERS
* Template Name : Opus | Portfolio Template
* Version       : 1.0     
* ---------------------------------------------------------------------------------------- */
  
(function ($) {
    'use strict';

          $(window).on('load', function () {
            
            /*  -------------------------------------------------------------------------  *
             *                            Preloader                                        *
             *  -------------------------------------------------------------------------  */
                $('#preloader').delay(300).fadeOut('slow',function(){
                  $(this).remove();
                });


            });
          

          $(document).ready(function () {

            /*  -------------------------------------------------------------------------  *
             *                            Sticky Menu                                      *
             *  -------------------------------------------------------------------------  */
            $(".menu-area > .sticky").sticky({
                topSpacing: 0,
            });





            /*  -------------------------------------------------------------------------  *
             *                            Scrolling Js                                      *
             *  -------------------------------------------------------------------------  */

              var num = 200; //number of pixels before modifying styles

                $(window).on('bind scroll', function () {
                  var navcontainer= $('.nav-container');                  
                if ($(window).scrollTop() > num) {
                    navcontainer.addClass('fixed');
                } else {
                    navcontainer.removeClass('fixed');
                }
             });








            /*  -------------------------------------------------------------------------  *
             *                            Portfolio                                        *
             *  -------------------------------------------------------------------------  */
            $('.works .work-items').isotope({
                itemSelector: '.col-md-4'
            });

            // init Isotope
            var $container = $('.work-items').isotope({
                itemSelector: '.item'
            });

            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function () {
                    var number = $(this).on('.number').text();
                    return parseInt(number, 10) > 50;
                },
                // show if name ends with -ium
                ium: function () {
                    var name = $(this).on('.name').text();
                    return name.match(/ium$/);
                }
            };

            // bind filter button click
            var filters = $('#filters');
            filters.on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[filterValue] || filterValue;
                $container.isotope({
                    filter: filterValue
                });
            });

            // change is-checked class on buttons
            filters.each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'li', function () {
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                });
            });





              //Adding removing active

              var filterbutton = $('.filter-button');

              filterbutton.on('click', function(e) {

                  filterbutton.removeClass('active');

                  var $parent = $(this).parent();
                  if (!$parent.hasClass('active')) {
                      $parent.addClass('active');
                  }
                  e.preventDefault();
              });
          


        /*  -------------------------------------------------------------------------  *
         *                     Owl Corousel - Blog                                     *
         *  -------------------------------------------------------------------------  */   


          $('.owl-carousel').owlCarousel({
            loop:true,
            items:10, 
            margin:10,
            nav:true,
            dots: false,
            navText: ["<i class='fa fa-chevron-left p-icon'></i>","<i class='fa fa-chevron-right p-icon'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                }
                
            }
        });



        /*  -------------------------------------------------------------------------  *
         *                     Filter Button JS                                    *
         *  -------------------------------------------------------------------------  */ 



         $(".filter-button").on('click', function(){
                var value = $(this).attr('data-filter');
                var filtervalue = $('.filter');
                if(value === "all")
                {
                    filtervalue.show('1000');
                }
                else
                {
                    filtervalue.not('.'+value).hide('3000');
                    filtervalue.filter('.'+value).show('3000'); 
                }
            });





        /*  -------------------------------------------------------------------------  *
         *                     Skills Progress bar                                     *
         *  -------------------------------------------------------------------------  */        
        var skillbar = $(".skillbar");
        skillbar.waypoint(function () {
            skillbar.each(function () {
                $(this).find(".skillbar-child").animate({
                    width: $(this).data("percent")
                }, 1000);
            });
        }, {
            offset: "80%"
        });





        /*  -------------------------------------------------------------------------  *
         *                            Testimonial                                      *
         *  -------------------------------------------------------------------------  */

        $(".testimonials").owlCarousel({
          items: 1,
          autoPlay: true,
          navigation: false,
          itemsDesktop: [1199, 1],
          itemsDesktopSmall: [980, 1],
          itemsTablet: [768, 1],
          itemsMobile: [479, 1],
          itemsTabletSmall: false,
          pagination: true,
          autoHeight: true,
        });


        /*  -------------------------------------------------------------------------  *
         *                            Navigation js                                    *
         *  -------------------------------------------------------------------------  */

        $(document).on('click', '.navbar-collapse.in', function (e) {
              if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                  $(this).collapse('hide');
              }
            });

            $('body').scrollspy({
              target: '.navbar-collapse',
              offset: 195
            });

            
            $('a[href^="#"]').on('click',function (e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            });
           

     

    });

})(jQuery);