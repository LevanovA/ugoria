$(document).ready(function(){
    'use strict'

    //Прокрутка до блока с указанным id в ссылке
    $('.anchor').on('click', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        if ($(href).length) {
            $("html, body").animate({
                scrollTop: $(href).offset().top + "px"
            }, {
                duration: 500,
                easing: "swing"
            });
        }
    })
});

$(document).ready(function(){
    'use strict'

    $('.burger').on('click', function(){
        $(this).toggleClass('burger--active')
        $('.menu').toggleClass('menu--active')
    });
});

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

$(document).ready(function(){
    'use strict'

    $('.button--payment').on('click', function (e) {
        e.preventDefault();

        validator($('.form'));
    });
});

'use strick'

function showModalWindow (button) {
    const popupName = button.attr('data-popup-name');
    const popup = $(`#${popupName}`);
    const popupClose = popup.find('.popup__close');
    const popupBack = popup.find('.popup__back');
    const popupActive = $('.popup.popup--active');
    const windowWidth = window.innerWidth
    const headerBlock = $('.header--main')

    //Проверяем, есть ли уже открыте popup и если да, то закрываем его
    if (popupActive.length) {
        closeModalWindow(popupActive, false);
    } else {
        blockBody();
    }

    //Открываем popup
    popup.addClass('popup--active');

    if (windowWidth < 768) {
        headerBlock.addClass('header--active')
    }

    //Закрытие popup на крестик
    if (popupClose) {
        popupClose.on('click', function () {
            closeModalWindow(popup);
        })
    }

    //Закрытие popup на кнопку назад
    if (popupBack) {
        popupBack.on('click', function () {
            closeModalWindow(popup);
        })
    }

    //Закрытие popup при клике на темную область
    popup.on('click', function (e) {
        if (!e.target.closest('.popup__content')) {
            closeModalWindow(popup);
        }
    })

    //Закрытие popup при нажатии esc
    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) {
            closeModalWindow(popup);
        }
    })
}

//Закрывает попап и удаляет обработчик прослушки нажатия клавиш клавиатуры
function closeModalWindow(popup, doUnBlockBody = true) {
    const headerBlock = $('.header--main')
    if (doUnBlockBody) {
        unBlockBody();
        popup.removeClass('popup--active');
        $(document).off('keydown');

        if (headerBlock) {
            headerBlock.removeClass('header--active')
        }

    } else {
        popup.removeClass('popup--active');
    }
}

//Блокируем body с удалением скролла
function blockBody() {
    const body = document.body;
    const blockPaddingValue = window.innerWidth - body.clientWidth + 'px';

    body.style.overflow = 'hidden';
    body.style.paddingRight = blockPaddingValue;
}

//Разблокирует body
function unBlockBody() {
    const body = document.body;

    //Разблокируем боди после окончания анимации
    setTimeout(function () {
        body.style.overflow = 'visible';
        body.style.paddingRight = '0';
    }, 500);
}

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

$(document).ready(function(){
    'use strict'

    const windowWidth = window.innerWidth

    //Прокрутка до блока с указанным id в ссылке
    $('.risks__button--plus').on('click', function () {
        $('.risks__info').removeClass('risks__info--active')
        $(this).parents('.risks__container').find('.risks__info').addClass('risks__info--active')
    })

    $('.risks__button--minus').on('click', function () {
        $(this).parents('.risks__container').find('.risks__info').removeClass('risks__info--active')
    })
});

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


//# sourceMappingURL=main.js.map
