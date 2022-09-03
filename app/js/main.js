// Slider

const photoSlider = new SliderBtn({
    slideClass: 'photo-slider__item',
    btnClass: 'photo-slider__btn',
    btnClassInner: 'photo-slider__btn-inner',
    slidesToView: 3,
});


$(function () {

    // Burger Menu

    $('.burger-menu').on('click', function () {
        $(this).toggleClass('burger-menu--active');
        $('.menu-anim').toggleClass('menu-anim--active');
    });

});