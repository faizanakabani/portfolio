(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    $(document).ready(function(){
        $(window).scroll(function(){
            // sticky navbar on scroll script
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }
            
            // scroll-up button show/hide script
            if(this.scrollY > 500){
                $('.scroll-up-btn').addClass("show");
            }else{
                $('.scroll-up-btn').removeClass("show");
            }
        });
    
        // slide-up script
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
            // removing smooth scroll on slide-up button click
            $('html').css("scrollBehavior", "auto");
        });
    
        $('.navbar .menu li a').click(function(){
            // applying again smooth scroll on menu items click
            $('html').css("scrollBehavior", "smooth");
        });
    
        // toggle menu/navbar script
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
    
    
        // owl carousel script
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });
    });
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

