const navbar_toggler = document.querySelector('.navbar-toggler');
navbar_toggler.addEventListener('click', function (e){
    document.querySelector('.navbar').classList.toggle('navbar-dark-bg');
});

const nav_items = document.querySelectorAll('.nav-item');
nav_items.forEach((nav_item) => {
    nav_item.addEventListener('click', function () {
        $('.collapse').collapse('hide');
    });
});

$(window).on("scroll", function () {
    $("nav.navbar").toggleClass("shrink", $(this).scrollTop() > 80);
});

(function ($) {
    'use strict';
    // Można sprawdzić, czy scroll-behavior jest obsługiwane i jedynie wówczas dopinać skrypt
    if (('scroll-behavior' in getComputedStyle(document.documentElement))) {
        return;
    }

    $('.scrollTo').on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top + 'px'
        }, 1500, function () {
            // Dodajemy hash do adresu
            location.hash = href;
        });
    });

}(jQuery));