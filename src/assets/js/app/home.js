// $('body').addClass('pe-none')

$(document).ready(function () {
    setTimeout(() => {
        $('.preloader').addClass('loaded')

    }, 1400);
    //     $('.team__members__slider').slick({
    //         dots: false,
    //         infinite: true,
    //         speed: 500,
    //         // slidesToShow: 5,
    //         variableWidth: true,
    //         rows: 2,
    //         slidesToScroll: 1,
    //         prevArrow: `      <button class="slick__arr slick__prev">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
    //   <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
    // </svg>
    //         </button>`,
    //         nextArrow: `  <button class="slick__arr slick__next">
    //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    //   <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
    // </svg>
    //         </button>`,

    //         // asNavFor: '.clients__testimonials__avatar__slider',
    //         // focusOnSelect: true,

    //     });
    $('.clients__logo__slider_3').slick({
        // slidesToShow: 4,
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
        variableWidth: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        rtl: true,
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
    $('.clients__logo__slider_2').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear',
        arrows: false,
        focusOnSelect: false,
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchMove: false,
        draggable: false,
        variableWidth: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
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
    $('.clients__testimonials__content__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.clients__testimonials__avatar__slider',
        // focusOnSelect: true,

    });
    $('.clients__testimonials__avatar__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: $('.clients__testimonials__avatar__slider li').length,
        slidesToScroll: 1,
        asNavFor: '.clients__testimonials__content__slider',
        focusOnSelect: true,
        variableWidth: true,
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
    $('.menu__overlay').click(function () {
        $('#hamburger__button').toggleClass('is-active')
        $('body').toggleClass('mobile__menu')
    })
    $('#close__menu__btn').click(function () {
        // $('#hamburger__button').toggleClass('is-active')
        $('body').toggleClass('mobile__menu')
    })

    if (window.innerWidth > 1200) {
        $('.related__quick__links li a').mouseover(function () {
            $('.related__quick__links li a').addClass('opacity-25 ')
        })
        $('.related__quick__links li a').mouseleave(function () {
            $('.related__quick__links li a').removeClass('opacity-25 ')
        })
        $('#header__primary__navigation > li').mouseover(function () {
            $('#header__primary__navigation > li').removeClass('active')
            $(this).addClass('active');
        })
        $('header').mouseleave(function () {
            $('#header__primary__navigation > li').removeClass('active')
        })
    } else {
        $('#header__primary__navigation > li').click(function () {
            // $('#header__primary__navigation > li').removeClass('active')
            $(this).toggleClass('active');
        })
    }

    $('header').css({ '--height': document.querySelector('header').clientHeight + 'px' })

})



// $(document).ready(function () {
//     // Cache the section element and calculate its center
//     var $section = $('.hero__banner');
//     var centerX = $section.width() / 2;
//     var centerY = $section.height() / 2;

//     // Handle mousemove event
//     $section.on('mousemove', function (event) {
//         var mouseX = event.pageX - $section.offset().left;
//         var mouseY = event.pageY - $section.offset().top;

//         // Calculate the distance from the center and normalize it to [-1, 1]
//         var distanceX = (mouseX - centerX) / centerX;
//         var distanceY = (mouseY - centerY) / centerY;

//         // Move each parallax layer based on its data-speed attribute
//         $('.float__image').each(function () {
//             var speed = parseFloat($(this).data('speed'));
//             var translateX = -distanceX * speed * 100 + '%';
//             var translateY = -distanceY * speed * 100 + '%';

//             $(this).css({
//                 transform: 'translate(' + translateX + ', ' + translateY + ')'
//             });
//         });
//     });
// });