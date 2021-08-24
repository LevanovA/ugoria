$(document).ready(function(){
    'use strict'

    const inputBirthday = $('.input-box__input--birthday')
    const inputPassport = $('.input-box__input--passport')
    const inputIssued = $('.input-box__input--issued')
    const inputDepartment = $('.input-box__input-department')
    const inputPhone = $('.input-box__input--phone')
    const inputCode = $('.input-box__input--code')

    //Маска для даты рождения
    inputBirthday.inputmask("99.99.9999", {showMaskOnHover: false});
    inputPassport.inputmask("9999 999999", {showMaskOnHover: false});
    inputIssued.inputmask("99.99.9999", {showMaskOnHover: false});
    inputDepartment.inputmask("999-999", {showMaskOnHover: false});
    inputPhone.inputmask("+7 (999) 999-99-99", {showMaskOnHover: false});
    inputCode.inputmask("99-99-99", {showMaskOnHover: false});

    const inputs = $('.input-box__input')

    //Уменьшаем или увеличиваем label поля инпут
    inputs.on('focus', function (item, index) {
        const inputBlock = $(this).parents('.input-box')
        inputBlock.addClass('input-box--up')
    })

    inputs.on('blur', function (item, index) {
        const inputBlock = $(this).parents('.input-box')

        if ($(this).val().length === 0) {
            inputBlock.removeClass('input-box--up')
        }
    })
});
