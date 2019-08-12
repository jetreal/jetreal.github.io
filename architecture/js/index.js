

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
        }
        // изменение позиции слайда 2й секции
        switch(this.id.slice(-1)) {
            case ('1') : {
                $('.wrapper-wiew-images').css({'transform': 'translateX(0px)'})
            }
                break;
            case ('2') : {
                if ($(window).outerWidth() >= 1135) {
                    $('.wrapper-wiew-images').css({'transform': 'translateX(-1110px)'})
                } else if ( $(window).outerWidth() < 1135 && $(window).outerWidth() >= 769 ) {
                    $('.wrapper-wiew-images').css({'transform': 'translateX(-768px)'})
                } else if ( $(window).outerWidth() < 768 && $(window).outerWidth() >= 481) {
                    $('.wrapper-wiew-images').css({'transform': 'translateX(-384px)'})
                } else if ( $(window).outerWidth() < 480) {
                    $('.wrapper-wiew-images').css({'transform': 'translateX(-320px)'})
                }
            }
                break;
            case ('3') : {
                $('.wrapper-wiew-images').css({'transform': 'translateX(0px)'})

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



// адаптивность

$(window).on('load resize', function() {
    if ($(window).outerWidth() < 1135) {
        $('.buttons-section__button').insertAfter($('.buttons-section'));
        $('.project-word__bottom-prise').prependTo($('.project-word-will-right'))
    } else {
        $('.buttons-section__button').prependTo($('.project-word-will-right'))
        $('.project-word__bottom-prise').appendTo($('.project-word'))
    }

});

$(document).ready(function () {

    $(window).on('load resize', function () {
        if ($(window).outerWidth() < 743.9999999999) {
            $('#underline1').insertAfter($('#draw-section-header1'))
            $('#underline2').insertAfter($('#draw-section-header2'))
            // $('#underline3').insertAfter($('#draw-section-header3'))
        } else {
            $('#underline2').insertBefore($('#underline3'))
            $('#underline1').insertBefore($('#underline2'))

        }


    });
});

$(document).ready(function () {
    $(window).on('load resize', function () {
        if ($(window).outerWidth() < 464) {
            $('.formSection-br').css('display', 'block')
        } else {
            $('.formSection-br').css('display', 'none')
        }
    });
});

// $(document).ready(function () {
//     $(window).on('load resize', function () {
//         if ($(window).outerWidth() < 564) {
//             $('.header-nav').insertAfter($('.header'))
//         } else {
           
//         }
//     });
// });



var scrolled;
window.onscroll = function() {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('changeSideImgwScroll').innerHTML = scrolled + 'px';
}
$(window).on('load resize', function(){
	var width = $('html').outerWidth();
	var height = $(window).height();
	$('#width').html(width + 'px');
	$('#height').html(height + 'px');
});

// $(document).ready(() => {
//     let x = $('.want-to-watch__image').attr('class', 'want')
//     console.log(x)
// })