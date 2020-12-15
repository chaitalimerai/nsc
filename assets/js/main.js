// toggle js
$("#toggle_bar").click(function () {
    $(".primary_nav").animate({ width: 'toggle' });
});
$("#close_icon").click(function () {
    $(".primary_nav").animate({ width: 'toggle' });
});

//banner slider js
$(document).ready(function () {
    var $swiper = $(".banner_slider");
    var $bottomSlide = null;
    var $bottomSlideContent = null;

    var mySwiper = new Swiper(".banner_slider", {
        // spaceBetween: 10,
        // slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            // when window width is <= 499px
            499: {
                slidesPerView: 1,
            },
            // when window width is <= 999px
            769: {
                slidesPerView: 3,
            }
        }
    });
});
