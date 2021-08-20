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
        // $('.menu__list').slideToggle(400)
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
});

'use strick'

$('.button--modal-open').on('click', function () {
    console.log('click')
})

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
