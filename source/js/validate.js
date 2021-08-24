$(document).ready(function () {

    //Убираем ошибку в input при его изменении
    $(document).on('input','.input-box__input',function(event) {
        $(this).parents('.input-box').removeClass('input-box--error');
        $(this).parents('.input-box').find('.input-box__error-message').slideUp();
    });

    //Убираем ошибку в checkbox при его изменении
    $('.checkbox__input').on('change', function () {
        $(this).parents('.checkbox').removeClass('checkbox--error');
        $(this).parents('.checkbox').find('.checkbox__error-message').slideUp();
    });

    //Убираем ошибку в капче при ее изменении
    $('.g-recaptcha-response').on('change', function () {
        $(this).parents('.recaptcha').removeClass('.error');
    });

});

//Проверка полей формы
function validator(form) {
    const inputs = form.find('.input-box__input')
    const checkboxes = form.find('.checkbox__input')
    let errorForm = false;

    //Показ ошибки в input
    inputs.each(function () {
        const cellBlock = $(this).parents('.input-box')
        const errorBlock = cellBlock.find('.input-box__error-message');

        if ($(this).attr('data-required') !== 'false'
            && $(this).attr('id') !== 'YII_CSRF_TOKEN'
            && $(this).attr('type') !== 'hidden'
            && $(this).attr('class') !== 'g-recaptcha-response') {

            const type = $(this).attr('data-type')
            let thisError;

            switch (type) {
                case 'email':
                    thisError = errorFieldEmail($(this), errorBlock);
                    break;
                default:
                    thisError = errorFieldText($(this));
            }

            if (thisError) {
                cellBlock.addClass('input-box--error');
                errorBlock.slideDown();
                errorForm = true;
            }
        }
    });

    //Показ ошибки в checkbox
    checkboxes.each(function () {
        const checkboxBlock = $(this).parents('.checkbox')
        const errorBlock = $(this).parents('.checkbox').find('.checkbox__error-message');

        if($(this).attr('data-required') !== 'false') {
            if (!$(this).is(':checked')) {
                checkboxBlock.addClass('checkbox--error');
                errorBlock.slideDown();
                errorForm = true;
            }
        }
    });

    return errorForm
}

//Проверка заполненности поля
function errorFieldText(el) {
    const val = el.val();
    return (val === '' || val === undefined)
}

//Проверка email
function errorFieldEmail(el, errorBlock) {
    const regRus = /^[а-яё.]+@[а-яё-]+\.[a-яё]{2,10}$/i;

    if(regRus.test(el.val())) {
        errorBlock.html('email должен быть на английском');
        return true
    }

    errorBlock.html('указан не верный email');

    const reg = /^[a-z-._0-9]+@[a-z-._0-9]+\.[a-z0-9]{2,10}$/i;
    return !reg.test(el.val())
}

