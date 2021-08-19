$(document).ready(function(){
    'use strict'

    //Работа выпдающего списка
    $('.questions__text').on('click', function () {
        const questionBlock = $(this).parents('.questions__item')

        questionBlock.find('.questions__answer').slideToggle()
        questionBlock.find('.questions__arrow').toggleClass('questions__arrow--active')
        questionBlock.find('.questions__box').toggleClass('questions__box--active')
        questionBlock.find('.questions__text').toggleClass('questions__text--active')
        questionBlock.find('.questions__plus-vertical').toggleClass('questions__plus-vertical--active');
    });
});
