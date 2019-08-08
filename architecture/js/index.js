

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
    removalDelay: 300,
    mainClass: 'mfp-fade mfp-with-zoom',
    disableOn: 748,
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});

// подчёркивание

$(document).ready(function () {
    var onhover = function () {
        $('#draw-section-underline1').addClass('drawing-section-navbar-ul__underline_unable');
        // $('#draw-section-header1').addClass('drawing-section-navbar-ul__navbar-item_active');
    }
    var offhover = function () {
        $('#draw-section-underline1').removeClass('drawing-section-navbar-ul__underline_unable')
        // $('#draw-section-header1').removeClass('drawing-section-navbar-ul__navbar-item_active');
    }

    // if ($('#draw-section-header1').hasClass('drawing-section-navbar-ul__underline_unable') === true) {
        $('#draw-section-header1').hover(onhover, offhover)
    // }
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
        // $('#draw-section-header3').addClass('drawing-section-navbar-ul__navbar-item_active');
    }
    var offhover = function () {
        $('#draw-section-underline3').removeClass('drawing-section-navbar-ul__underline_unable')
        // $('#draw-section-header3').removeClass('drawing-section-navbar-ul__navbar-item_active');
    }
    $('#draw-section-header3').hover(onhover, offhover)
})

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
        // изменение слайда
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
    $('.slider-nav-images__item').on('click', function() {
        $('.slider-nav-images__item_active').appendTo(this)
        
        $(this).css('opacity', '1')
        $('.slider-nav-images__item').not(this).css('opacity', '.6')

        // $('.slider-nav-images__item_active').css('transform', 'rotateY(360deg)')
    })
})
    
    

    let on = function() {
        $(this).css('opacity', '1')
    }
    
    let leave = function() {
        // $('.slider-nav-images__item_active').on('mouseenter', function() {
        //     $('.slider-nav-images__item_active').css({'transform': 'rotateY(360deg)', 'transition': 'all 2s'})
        // })
        $('.slider-nav-images__item:empty').css('opacity', '.6')
    }
    $('.slider-nav-images__item').hover( on, leave )





$(document).ready(function() {
    $('.slider-nav-images__item_active').trigger('click')
})

