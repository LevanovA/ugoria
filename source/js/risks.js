$(document).ready(function(){
    'use strict'

    //Прокрутка до блока с указанным id в ссылке
    $('.risks__button--plus').on('click', function () {
        $('.risks__info').removeClass('risks__info--active')
        $(this).parents('.risks__container').find('.risks__info').addClass('risks__info--active')
    })

    $('.risks__button--minus').on('click', function () {
        $(this).parents('.risks__container').find('.risks__info').removeClass('risks__info--active')
    })
});
