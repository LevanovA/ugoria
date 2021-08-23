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

    const inputs = $('input')

    inputs.on('invalid', function (item, index) {
        if (index === 0) {
            $(this).focus();
        }
        // item[0].focus();
        console.log(111, item)
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

'use strick'

function showModalWindow (button) {
    const popupName = button.attr('data-popup-name');
    const popup = $(`#${popupName}`);
    const popupClose = popup.find('.popup__close');
    const popupActive = $('.popup.popup--active');

    //Проверяем, есть ли уже открыте popup и если да, то закрываем его
    if (popupActive.length) {
        closeModalWindow(popupActive, false);
    } else {
        blockBody();
    }

    //Открываем popup
    popup.addClass('popup--active');

    //Закрытие popup на крестик
    popupClose.on('click', function () {
        closeModalWindow(popup);
    })

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
    if (doUnBlockBody) {
        unBlockBody();
        popup.removeClass('popup--active');
        $(document).off('keydown');
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

//# sourceMappingURL=main.js.map
