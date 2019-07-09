var swiper = new Swiper('.main-slider__container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.main-slider__slide-btn-next',
        prevEl: '.main-slider__slide-btn-prev',
    },
});

var swiper = new Swiper('.suppliers__container', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
});


$(document).ready(function () {
    $('.submenu-aside__l').not(':first').hide();

    $('.menu-aside__l-i-link').click(function () {

       var findArticle = $(this).next('.submenu-aside__l');
       var findWrapper = $(this).closest('.menu-aside__l');

       if(findArticle.is(':visible')) {
           findArticle.slideUp(600);
       }
       else {
           findWrapper.find('.submenu-aside__l').slideUp();
           findArticle.slideDown();
       }
    });
});




