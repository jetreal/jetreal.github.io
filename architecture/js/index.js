

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
    disableOn: 748,
    // zoom: {
    //     enabled: true,
    //     duration: 300 // don't foget to change the duration also in CSS
    // }
});

// подчёркивание

$(document).ready(function () {
    var onhover = function () {
        $('#draw-section-underline1').addClass('drawing-section-navbar-ul__underline_unable');
    }
    var offhover = function () {
        $('#draw-section-underline1').removeClass('drawing-section-navbar-ul__underline_unable')
    }
        $('#draw-section-header1').hover(onhover, offhover)
})

$(document).ready(function () {
    var onhover = function () {
        $('#draw-section-underline2').addClass('drawing-section-navbar-ul__underline_unable');
        // $('#draw-section-header2').addClass('drawing-section-navbar-ul__navbar-item_active');
    }
    var offhover = function () {
        $('#draw-section-underline2').removeClass('drawing-section-navbar-ul__underline_unable')
        // $('#draw-section-header2').removeClass('drawing-section-navbar-ul__navbar-item_active');
    }
    $('#draw-section-header2').hover(onhover, offhover)

})

$(document).ready(function () {
    var onhover = function () {
        $('#draw-section-underline3').addClass('drawing-section-navbar-ul__underline_unable');
    }
    var offhover = function () {
        $('#draw-section-underline3').removeClass('drawing-section-navbar-ul__underline_unable')
    }
    $('#draw-section-header3').hover(onhover, offhover)
})

  // 2я секция (слайдер проектов)

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
            console.log(this.id.slice(-1))
        }
        // изменение позиции слайда 2й секции
        switch(this.id.slice(-1)) {
            case ('1') : {
                $('.wrapper-wiew-images').css({'transform': 'translateX(0px)'})
            }
                break;
            case ('2') : {
                $('.wrapper-wiew-images').css({'transform': 'translateX(-1110px)'})
            }
                break;
            case ('3') : {
                $('.wrapper-wiew-images').css({'transform': 'translateX(-2220px)'})
            }
                break;
            default: $('.wrapper-wiew-images').css({'transform': 'translateX(0px)'})
        }
    });
});




   // перемещение актив класса превью менюшки
$(document).ready(function() {
    $('.slider-nav-images__item:gt(0)').on('click', function() {
        // $('.slider-nav-images__item_active').appendTo(this)
        
        $(this).css('opacity', '1')
        $('.slider-nav-images__item:gt(1)').not(this).css('opacity', '.6')
        $('.popup-gallery').triggerHandler('click')

        // $('.slider-nav-images__item_active').css('transform', 'rotateY(360deg)')
    })
})




   // имитируем нажатие по галирее
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
$(document).ready(function () {
    $('#slider-nav-images-item1').triggerHandler('hover')
})

// magnific galery
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
    // disableOn: 748
    
});


$(document).ready(function() {
    // отключаем клик у спрятанного изображения 
    $('.popup-gallery').eq(0).off('click')
    // имитируем клик по нему на кроссхэйре
    $('.center-crosshair').on('click', function() {
        $('.popup-gallery').eq(3).triggerHandler('click');
    })
})

