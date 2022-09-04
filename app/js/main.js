// Slider

const photoSlider = new SliderBtn({
    slideClass: 'photo-slider__item',
    btnClass: 'photo-slider__btn',
    btnClassInner: 'photo-slider__btn-inner',
    slidesToView: 3,
});

const abilitySlider = new SliderBtn({
    slideClass: 'abilities-slider__item',
    btnClass: 'abilities-slider__btn',
    btnClassInner: 'abilities-slider__btn-inner',
});


$(function () {

    // Burger Menu

    $('.burger-menu').on('click', function () {
        $(this).toggleClass('burger-menu--active');
        $('.menu-anim').toggleClass('menu-anim--active');
    });

});