$(document).ready(function() {
    $('.news__preview').slick({
        speed: 1200,
        dots: true,
        dotsClass: 'carousel',
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/download 2.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/download 1.png"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
});