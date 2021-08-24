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
