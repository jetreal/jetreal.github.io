// var scrolled;

// временная панель параметров дисплея
window.onscroll = function() {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('scroll').innerHTML = scrolled + 'px';
}
$(window).on('load resize', function(){
	var width = $('html').outerWidth();
	var height = $(window).height();
	$('#width').html(width + 'px');
    $('#height').html(height + 'px');
});

$(document).ready(function() {
    $(window).on('load', function() {
      $('.navbar__a').attr('href','/_pug_pages/contacts.html')
      $('.navbar__a2').attr('href','/_pug_pages/about.html')
      $('.navbar__a3').attr('href','/_pug_pages/guarantees.html')
      // $('.navBar ul li').triggerHandler('click')
    })
  })





// подключение сдайдера карусели
////////////////////////////////////////////
$('#review-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:1
      },
      1170:{
          items:2
      }
  }
})

$('#gallery-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1170:{
            items:3
        }
    }
  })

  $('#certified-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1170:{
            items:5
        }
    }
  })
///////////////////////////////////////////////////

//перемещение инпута заголовка

$(document).ready(function() {
    $(window).on('load resize', function() {
        if ($('.header').css('grid-template-columns').length < 27) {
            $(".header__input").insertAfter($('.header-phone'))
        } else {
            $(".header__input").insertAfter($('.header__logo'))
        }

    })
})


// скрытие навбара при нажании на кнопку меню
$(document).ready(function() {
    $('.navBar__toggle').on('click', function() {
        $('.navBar').toggle('height')
    })
})

// скрытие навбара при клике на его ссылки если на маленьких экранах
$(document).ready(function() {
    $('.navBar ul li').on('click', function() {
        if ($('.navBar ul').css('grid-template-columns').length < 28) {
            $('.navBar__toggle').triggerHandler('click')
        }
        $('.navBar ul li').removeClass('navBar__active-li')

    })
})

// $(document).ready(function() {
//     $('.navBar__active-li').closest('a').attr('href', '#')
// })


$(document).ready(function() {
    $(window).on('resize', function() {
        switch(true) {
            case($('.navBar ul').css('grid-template-columns').length > 18): {
                $('.navBar').css('display', 'grid')
       
            }
                break;
            case($('.navBar ul').css('grid-template-columns').length < 18): {
                $('.navBar').css('display', 'none')
            }
                break;
        }
       
    })
})

let showHiddenMenu = function() {
    $('.navBar2__hidden-menu').slideToggle()
    $('.navBar2__hidden-menu p')
}


$(document).ready(function() {
    $('#navBar2-id1, .navBar2__hidden-menu p').on('click', showHiddenMenu)
})


var showLinkMenu = function() {
    $('.navBar2__arrow').eq(this.id.slice(-1)-1).css('transform', 'rotateZ(90deg)')
}

var hideLinkMenu = function() {
    $('.navBar2__arrow').css('transform', 'rotateZ(0deg)')
}

$(document).ready(function() {
    $('.navBar2-row').hover( showLinkMenu, hideLinkMenu)
})
