$(document).ready(function(){
    'use strict'

    const windowWidth = window.innerWidth

    if (windowWidth < 768) {
        //Работа выпдающего списка
        $('.footer__title').on('click', function () {
            const footerBlock = $(this).parents('.footer__el')

            footerBlock.find('.footer__list').slideToggle()
            footerBlock.find('.footer__arrow').toggleClass('footer__arrow--active')
            footerBlock.find('.footer__title').toggleClass('footer__title--active')
            // footerBlock.find('.questions__text').toggleClass('questions__text--active')
        });
    }
});
