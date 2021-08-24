$(document).ready(function(){
    'use strict'

    $('.button--payment').on('click', function (e) {
        e.preventDefault();

        validator($('.form'));
    });
});
