$(function () {

    // Burger Menu

    $('.burger-menu').on('click', function() {
        $(this).toggleClass('burger-menu--active');
        $('.menu-anim').toggleClass('menu-anim--active');
    });


    // $('.header-menu__btn').on('click', function () {
    //     $('.menu').toggleClass('menu--active');
    //     $(this).toggleClass('header-menu__btn-resolve');
    //     if ($('.menu').hasClass('menu--active')) {
    //         bodyOverFlow(true, document.querySelector(`.${mainSlider.btnClass}--left`), document.querySelector(`.${mainSlider.btnClass}--right`));
    //     } else {
    //         bodyOverFlow(false, document.querySelector(`.${mainSlider.btnClass}--left`), document.querySelector(`.${mainSlider.btnClass}--right`));
    //     }
    // });

});