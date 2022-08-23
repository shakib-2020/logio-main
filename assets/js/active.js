/*===================================================================
    Author          : Modina Theme
    Template Name   : BuildPro - Construction HTML Template
    Version         : 1.0
* ================================================================= */

(function ($) {
    "use strict";
    $(document).on("ready", function () {
        // SCROLL TO TOP
        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();

        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };

        updateProgress();
        $(window).scroll(updateProgress);

        var offset = 50;
        var duration = 550;

        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".progress-wrap").addClass("active-progress");
            } else {
                jQuery(".progress-wrap").removeClass("active-progress");
            }
        });

        jQuery(".progress-wrap").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, duration);
            return false;
        });

        // MOBILE MENU
        $("#hamburger").on("click", function () {
            $(".mobile-nav").addClass("show");
            $(".overlay").addClass("active");
        });

        $(".close-nav").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $(".overlay").removeClass("active");
        });

        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $(".overlay").removeClass("active");
        });

        $("#mobile-menu").metisMenu();

        // MODAL VIDEO
        $(".testimonial-modal-btn").modalVideo();
        $(".video-modal-btn").modalVideo();
        $(".freight-feature-video").modalVideo();
        $(".hero-modal-video").modalVideo();
        $(".skills-modal-video").modalVideo();

        // SERVICES CAROUSEL
        const owlPrevBtn = '<i class="fas fa-chevron-double-left"></i>';
        const owlNextBtn = '<i class="fas fa-chevron-double-right"></i>';
        $(".services-card-carousel").owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            dots: true,
            nav: true,
            navText: [`${owlPrevBtn}`, `${owlNextBtn}`],
            responsive: {
                0: {
                    items: 1,
                },

                900: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
                1300: {
                    items: 3,
                },
            },
        });

        // TESTIMONIAL CAROUSEL
        $(".testimonial-carousel").owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            dots: true,
            nav: true,
            navText: [`${owlPrevBtn}`, `${owlNextBtn}`],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 2,
                },
            },
        });

        // SUCCESS STORY CAROUSEL
        $(".success-story-carousel").owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            dots: true,
            nav: true,
            navText: [`${owlPrevBtn}`, `${owlNextBtn}`],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 3,
                },

                1400: {
                    items: 4,
                },
            },
        });

        // HERO SLIDER
        $(".hero-slider-wrapper").owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            dots: true,
            nav: true,
            navText: [`${owlPrevBtn}`, `${owlNextBtn}`],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });

        // TRACK & TRACE SLIDER
        $(".track-n-trace-carousel-wrapper").owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: true,
            nav: false,
            navText: [`${owlPrevBtn}`, `${owlNextBtn}`],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });

        // TRANSPORT METHOD
        $(".transport-method").owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 3,
                },
                600: {
                    items: 4,
                },
                1000: {
                    items: 6,
                },
            },
        });

        // PROGRESSBAR
        var delay = 500;
        $(".progress-bar").each(function (i) {
            $(this)
                .delay(delay * i)
                .animate({ width: $(this).attr("aria-valuenow") + "%" }, delay);

            $(this)
                .prop("Counter", 0)
                .animate(
                    {
                        Counter: $(this).text(),
                    },
                    {
                        duration: delay,
                        easing: "swing",
                        step: function (now) {
                            $(this).text(Math.ceil(now) + "%");
                        },
                    }
                );
        });

        // COUNTER UP
        $(".card-counter-num").counterUp({
            delay: 10,
            time: 1000,
        });

        // PROJECT FILTER
        var $grid = $(".filter-item-wrapper").isotope({
            // options
        });
        $(".filter-button-group").on("click", "li", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
        });
        $(".filter-button-group").on("click", "li", function () {
            $(this).addClass("active").siblings().removeClass("active");
        });

        // TEAM SOCIAL SWITCH
        // $(".hover-icon").oclick(function () {
        //     $("#member-1 .member-links").toggle();
        // });
        $(".hover-icon").on("click", function () {
            $(this).toggleClass("active");
        });

        // FANCY LIGHTBOX
        $("#gallery-item-one").fancybox();
        $("#gallery-item-two").fancybox();
        $("#gallery-item-three").fancybox();
        $("#gallery-item-four").fancybox();
        // FOOTER GALLERY
        $("#footer-gallery-one").fancybox();
        $("#footer-gallery-two").fancybox();
        $("#footer-gallery-three").fancybox();
    }); // end document ready function
})(jQuery); // End jQuery
