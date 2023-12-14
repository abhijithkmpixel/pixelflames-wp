$(document).ready(function () {
    $('.clients__testimonials__content__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.clients__testimonials__avatar__slider',
        focusOnSelect: true,

    });
    $('.clients__testimonials__avatar__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: $('.clients__testimonials__avatar__slider li').length,
        slidesToScroll: 1,
        asNavFor: '.clients__testimonials__content__slider',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: true
                }
            },

        ]
    });
    $('.clients__logo__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear',
        arrows: false,
        focusOnSelect: false,
        pauseOnHover: false,
        touchMove: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,

                }
            },

        ]
    });
    $(window).scroll(function () {
        if (window.scrollY > 100) {
            $('body').addClass('sticky__header')
        } else {
            $('body').removeClass('sticky__header')

        }
    })
    $('#hamburger__button').click(function () {
        $('#hamburger__button').toggleClass('is-active')
        $('body').toggleClass('mobile__menu')
    })

})