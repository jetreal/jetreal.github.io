
// плагин всплывающих окон
jQuery('.magnific-popup-link').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true,
        closeBtnInside: true,
        navigateByImgClick: true  
    },
    image: {
        titleSrc: 'title'
    },
    zoom: {
        enabled: true,
    },
    removalDelay: 300,
    mainClass: 'mfp-fade mfp-with-zoom',
});

  // смена подчёркивания
$(document).ready(function () {
    $('.drawing-section-navbar-ul__navbar-item').on('click', function () {
        // изменение цвета заголовка
        if ($(this).hasClass('drawing-section-navbar-ul__navbar-item_active') === false) {
            // Убирание активного классы и underline
            $('.drawing-section-navbar-ul__navbar-item').removeClass('drawing-section-navbar-ul__navbar-item_active')
            $('.drawing-section-navbar-ul__underline').removeClass('drawing-section-navbar-ul__underline_unable')
            // добавление активного класса
            $('#underline' + this.id.slice(-1)).addClass('drawing-section-navbar-ul__underline_unable')
            $(this).addClass('drawing-section-navbar-ul__navbar-item_active')
        }


    // изменение позиции слайда 2й секции
        switch (this.id.slice(-1)) {
            case ('1'): {
                $('.wrapper-wiew-images').css({ 'transform': 'translateX(0px)' })
            }
                break;
            case ('2'): {
                if ($(window).outerWidth() >= 1144) {
                    $('.wrapper-wiew-images').css({ 'transform': 'translateX(-1113px)' })
                } else if ($(window).outerWidth() < 1144 && $(window).outerWidth() >= 752) {
                    $('.wrapper-wiew-images').css({ 'transform': 'translateX(-768px)' })
                } else if ($(window).outerWidth() < 752 && $(window).outerWidth() >= 464) {
                    $('.wrapper-wiew-images').css({ 'transform': 'translateX(-384px)' })
                } else if ($(window).outerWidth() < 464) {
                    $('.wrapper-wiew-images').css({ 'transform': 'translateX(-320px)' })
                }
            }
                break;
            // после добавление стетьего слайта нужно будет изменить значение translateX -2226px  ...  ...  640px
            // как во вотом кейсе только умножить на 2. 
            case ('3'): {
                $('.wrapper-wiew-images').css({ 'transform': 'translateX(0px)' })
            }
                break;
            default: $('.wrapper-wiew-images').css({ 'transform': 'translateX(0px)' })
        }
    });
});


        // изменение позиции слайда 2й секции при ресайзе
$(document).ready(function () {
    $(window).on('load resize', function () {
        switch(true) {
            case ($('.drawing-section-navbar-ul__underline#underline1').hasClass('drawing-section-navbar-ul__underline_unable')) : {
                $('.wrapper-wiew-images').css({'transform': 'translateX(0px)'})
            }
                break;
            case ($('.drawing-section-navbar-ul__underline#underline2').hasClass('drawing-section-navbar-ul__underline_unable')) : {
                if ($(window).outerWidth() >= 1144) {
                    $('.wrapper-wiew-images').css({'transform': 'translateX(-1113px)'})
                } else if ( $(window).outerWidth() < 1144 && $(window).outerWidth() >= 752 ) {
                    $('.wrapper-wiew-images').css({'transform': 'translateX(-768px)'})
                } else if ( $(window).outerWidth() < 752 && $(window).outerWidth() >= 464) {
                    $('.wrapper-wiew-images').css({'transform': 'translateX(-384px)'})
                } else if ( $(window).outerWidth() < 464) {
                    $('.wrapper-wiew-images').css({'transform': 'translateX(-320px)'})
                }
            }
                break;
                // после добавление стетьего слайда нужно будет изменить значение translateX -2220px  ... ...  640px
            case ($('.drawing-section-navbar-ul__underline#underline3').hasClass('drawing-section-navbar-ul__underline_unable')) : {
                $('.wrapper-wiew-images').css({'transform': 'translateX(0px)'})
            }
                break;
            default: $('.wrapper-wiew-images').css({'transform': 'translateX(0px)'})
        }
                // после добавление стетьего слайда нужно будет добавить значение translateX -2220px  .. ..  640px

        
            });
        });

//    перемещение актив класса превью менюшки
$(document).ready(function() {
    $('.slider-nav-images__item:gt(0)').on('click', function() {

        $(this).css('opacity', '1')
        $('.slider-nav-images__item:gt(1)').not(this).css('opacity', '.6')
        $('.popup-gallery').triggerHandler('click')

    })
})

   // имитируем нажатие по галерее для всплывающих окон
for (let i=0; i<4; i++) {
    function go(i) {
        $("#slider-nav-images-item" + (i + 1)).on('click', function() {
            $('.popup-gallery').eq(i).triggerHandler('click')
        })
    }
    go(i)
}


// зажигаем и тушим иконки
function on() {
    $(this).css('opacity', '1')
}
function leave() {
    $('.slider-nav-images__item:empty').css('opacity', '.6')
}
$('.slider-nav-images__item').hover(on, leave)

$(document).ready(function() {
    $('.slider-section-main-slider__Img_active').triggerHandler('hover');
});


// magnific galery 
var magnific = function() {
    jQuery('.popup-gallery').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            closeBtnInside: true,
            navigateByImgClick: true 
        },
        image: {
            titleSrc: 'title'
        },
        removalDelay: 200,
        mainClass: 'mfp-fade mfp-with-zoom',
    });
}
magnific()


  // имитация клика по первой иконки для отображения первого изображения по клику на кросхэйр
$('.popup-gallery').eq(0).off('click');

$(document).ready(function () {
    $('.center-crosshair').eq(0).on('click', function() {
        magnific();
        $('.popup-gallery').eq(0).triggerHandler('click')
        $('.popup-gallery').eq(0).off('click');
    })
});



// адаптивность 
  // перемещение кнопки перевой секции вниз и цены с левой стороны в правую
$(window).on('load resize', function() {
    if ($(window).outerWidth() < 1144) {
        $('.buttons-section__button').insertAfter($('.buttons-section'));
        $('.project-word__bottom-prise').prependTo($('.project-word-will-right'))
    } else {
        $('.buttons-section__button').prependTo($('.project-word-will-right'))
        $('.project-word__bottom-prise').appendTo($('.project-word'))
    }
});
  // перемещение underline'a второй секции
$(document).ready(function () {
    $(window).on('load resize', function () {
        if ($(window).outerWidth() < 752) {
            $('#underline1').insertAfter($('#draw-section-header1'))
            $('#underline2').insertAfter($('#draw-section-header2'))
        } else {
            $('#underline2').insertBefore($('#underline3'))
            $('#underline1').insertBefore($('#underline2'))
        }
    });
});
    // Добавление переноса строк в секции с формой
$(document).ready(function () {
    $(window).on('load resize', function () {
        if ($(window).outerWidth() < 464) {
            $('.formSection-br').css('display', 'block')
        } else {
            $('.formSection-br').css('display', 'none')
        }
    });
});
    // замена рисунка bg иконки 360 в первой секции
$(document).ready(function () {
    $(window).on('load resize', function () {
        if ($(window).outerWidth() < 784) {
            $('.slider-nav-images__item_active').attr('src', 'images/360w.png')
        } else {
            $('.slider-nav-images__item_active').attr('src', 'images/360.png')
        }
    });
});