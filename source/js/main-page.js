$(document).ready(function(){
    'use strict'

    const animateBlock = $('.banner__animate')
    const animateImg = $('.banner__img')
    const animateBoll = $('.banner__img-boll')

    setTimeout(function () {
        animateBlock.addClass('banner__animate--active')
        animateImg.addClass('banner__img--active')

        if (animateBlock) {
            animateBoll.addClass('banner__img-boll--active')
        }
    }, 1000)


    $('button[data-popup-name]').on('click', function () {

        showModalWindow($(this));
    })
});
