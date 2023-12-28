/** @format */
if ($(window.innerWidth > 1200)) {
    // const scroll;
    gsap.from('.staggerTitle', {
        opacity: 0,
        y: 100.,
        stagger: .2,
        delay: 0,
    })

    gsap.from('.hero__banner .hero__banner__featured__side__Image__wrap ', {
        opacity: 0,
        x: 100.,
        stagger: .4,
        delay: 1.2,
    })
    setTimeout(() => {

        const scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            lerp: 0.05,
            // scrollFromAnywhere:true,
            multiplier: 0.8,
            scrollFromAnywhere: false
        });
        scroll.on("scroll", ScrollTrigger.update);
        scroll.on(
            "scroll",
            (func = (scroll) => {
                if (scroll.scroll.y > 100) {
                    $("body").addClass("sticky__header");
                } else {
                    $("body").removeClass("sticky__header");
                }

            })
        );
        window.addEventListener("load", function () {
            setTimeout(() => {
                scroll.update();

                ScrollTrigger.refresh();
            }, 1000);
            $("[scroll-to]").click(function (e) {
                e.preventDefault();
                let id = $(this).attr("href").split("#")[1];
                let target = document.getElementById(id);
                scroll.scrollTo(target, {
                    offset: `-${document.querySelector("header").clientHeight + 30}`,
                });
            });
        });
        // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy("[data-scroll-container]", {
            scrollTop(value) {
                return arguments.length
                    ? scroll.scrollTo(value, 0, 0)
                    : scroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector("[data-scroll-container]").style.transform
                ? "transform"
                : "fixed",
        });

        // $('#quick__scroll').click(function () {
        //   var parentSection = $(this).closest('section');
        //   // var nextSection = parentSection.next('section');
        //   var nextSection = parentSection.nextElementSibling;
        //   scroll.scrollTo(nextSection)
        // })
        $('#how__it__works__tab__link .cta__tab').click(function () {
            $('#how__it__works__tab__link .cta__tab').removeClass('active')
            $(this).addClass('cta__pomgranate__border  active')
            let id = $(this).attr('data-tab-id')
            $('#how__it__works__tab__body__wrap .how__it__works__tab__body').each(function () {
                if (id == $(this).attr('data-body-id')) {
                    $(this).removeClass('d-none')
                } else {
                    $(this).addClass('d-none')

                }
            })
            setTimeout(() => {
                scroll.update();
            }, 1000);
        })
        $('#contact__form__taab .cta__tab').click(function () {
            $('#contact__form__taab .cta__tab').removeClass('active')
            $(this).addClass('active')
            let id = $(this).attr('data-tab-id')
            $('.form_wrap').each(function () {
                if (id == $(this).attr('data-tab-body')) {
                    $(this).removeClass('d-none')
                } else {
                    $(this).addClass('d-none')

                }
            })
            setTimeout(() => {
                scroll.update();
            }, 1000);
        })

        $(document).ready(function () {
            let contactformid = window.location.href.split('form-id=')[1]
            if (contactformid != undefined) {
                $('#contact__form__taab .cta__tab').each(function () {
                    if ($(this).attr('data-tab-id') == contactformid) {
                        $('#contact__form__taab .cta__tab').each(function () {
                            $(this).removeClass('active')
                        })
                        $(this).addClass('active')
                    }
                })
                $('.form_wrap').each(function () {
                    if ($(this).attr('data-tab-body') == contactformid) {
                        $('.form_wrap').each(function () {
                            $(this).addClass('d-none')
                        })
                        $(this).removeClass('d-none')
                    }
                })
                setTimeout(() => {
                    scroll.update();
                }, 1000);
            }
        })

        $('.animate__up').each(function () {

            gsap.from($(this), {
                opacity: 0,
                y: 150,
                duration: .6,
                stagger: .4,

                scrollTrigger: {
                    trigger: $(this),
                    start: "0% 100%",
                    scroller: window.innerWidth > 1200 ? "[data-scroll-container]" : "body",
                    scrub: false,
                }
            })
        })
        gsap.from('.stagger__up', {
            opacity: 0,
            y: 150,
            duration: .6,
            stagger: .4,

            scrollTrigger: {
                trigger: '.stagger__up',
                start: "0% 100%",
                scroller: window.innerWidth > 1200 ? "[data-scroll-container]" : "body",
                scrub: false,
            }
        })
        $('.animate__left').each(function () {

            gsap.from($(this), {
                opacity: 0,
                x: 150,
                duration: .6,
                scrollTrigger: {
                    trigger: $(this),
                    start: "0% 100%",
                    scroller: window.innerWidth > 1200 ? "[data-scroll-container]" : "body",
                    scrub: false,
                }
            })
        })
        gsap.from('.stagger__left', {
            opacity: 0,
            x: 150,
            duration: .6,
            stagger: .4,

            scrollTrigger: {
                trigger: '.stagger__left',
                start: "0% 100%",
                scroller: window.innerWidth > 1200 ? "[data-scroll-container]" : "body",
                scrub: false,
            }
        })
        $('.animate__right').each(function () {

            gsap.from($(this), {
                opacity: 0,
                x: -200,
                duration: .6,
                scrollTrigger: {
                    trigger: $(this),
                    start: "0% 100%",
                    // end: "100% 0%",
                    scroller: window.innerWidth > 1200 ? "[data-scroll-container]" : "body",
                    scrub: false,
                }
            })
        })
        gsap.from('.stagger__right', {
            opacity: 0,
            x: -200,
            duration: .6,
            stagger: .4,

            scrollTrigger: {
                trigger: '.stagger__right',
                start: "0% 100%",
                // end: "100% 0%",
                scroller: window.innerWidth > 1200 ? "[data-scroll-container]" : "body",
                scrub: false,
            }
        })

        $('picture img').each(function () {

            gsap.fromTo($(this), {
                objectPosition: "100% 0%",
            },
                {
                    objectPosition: "100% 100%",
                    scrollTrigger: {
                        trigger: $(this),
                        start: "0% 100%",
                        end: "100% 0%",
                        scroller: window.innerWidth > 1200 ? "[data-scroll-container]" : "body",
                        scrub: true,
                    }
                })
        })
    }, 2000);

    // gsap.to('header .brand__logo',
    //     {
    //         top: `0`,
    //         left: `15px`,
    //         duration: 2,
    //         delay: 1,
    //         transform: 'translate(0%,0%)'
    //     })




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => scroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
