$(document).ready(function(){
    'use strict'

    $('.burger').on('click', function(){
        $(this).toggleClass('burger--active')
        // $('.menu__list').slideToggle(400)
    });
});
