$(document).ready(function(){
    'use strict'

    $('.burger').on('click', function(){
        const menu = $('.menu')
        const headerBlock = $('.header--main')
        const popupActive = $('.popup--active')

        $(this).toggleClass('burger--active')
        menu.toggleClass('menu--active')

        // if (headerBlock.hasClass('header--active')) {
        //     headerBlock.removeClass('header--active')
        // }

        if (menu.hasClass('menu--active')) {
            if (popupActive.length) {
                headerBlock.removeClass('header--active')
            } else {
                blockBody()
            }
        } else if (popupActive.length) {
            headerBlock.addClass('header--active')
        } else {
            unBlockBody()
        }
    });
});
