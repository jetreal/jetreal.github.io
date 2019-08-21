
// показать/убрать скрытые блоки при клике и развернуть стрелочки 
var navbarFlag = false;
$(document).ready(function () {
  $('.hidden-menu-link').on('click', function () {
    navbarFlag = !navbarFlag;
    switch (true) {
      case (navbarFlag === true): {
        $(this).next('.link1-hidden-block, .link2-hidden-block').css('display', 'grid')
        $(this).children('.top-nav-span').css('transform', 'rotateZ(90deg)')
      }
        break;
      case (navbarFlag === false): {
        $('.link1-hidden-block, .link2-hidden-block').css('display', 'none')
        $('.top-nav-span').css('transform', 'rotateZ(0deg)')
      }
        break;
    }
  });
});

// показать cкрытый блоки подменю при наведение и выключить остальные скрытые блоки и стрелочки
$('.hidden-menu-link').on('mouseenter', function () {
  $('.link1-hidden-block, .link2-hidden-block').css('display', 'none')
  $('.top-nav-span').css('transform', 'rotateZ(0deg)')
  $(this).next('.link1-hidden-block, .link2-hidden-block').css('display', 'grid')
  $(this).children('.top-nav-span').css('transform', 'rotateZ(90deg)')
  navbarFlag = true;
});
// функция =>  развернуть стрелочки назад, убрать блоки подменю
var outHide = function (e) {
  $('.top-nav-span').css('transform', 'rotateZ(0deg)')
  $('.link1-hidden-block, .link2-hidden-block').css('display', 'none')
}
// активировать функцию скрытия подменю
$(document).ready(function () {
  $('.link1-hidden-block, .link2-hidden-block').mouseleave(function (e) {
    outHide(e);
    navbarFlag = false;
  })
})
// при клике на body убрать подменю если координаты клика мыши ниже 60px по высоте 
$(document).ready(function () {
  $('body').on('click', function (e) {
    var Y = e.pageY;
    if (Y > 60) {
      outHide()
      // hideSidebar()
      
    }
  })
})

// jQuery(function($){
// 	$(document).mouseup(function (e){ // событие клика по веб-документу
// 		var div = $("#mobileNav"); // тут указываем ID элемента
// 		if (!div.is(e.target) // если клик был не по нашему блоку
// 		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
//           hideSidebar() // скрываем его
// 		}
// 	});
// });



// переключение на мобильное меню при ресайзе при ширине < 992px
$(document).ready(function () {
  $(window).on('load resize', function () {
    if ($(window).outerWidth() < 992) {
      // прячем верхний навбар
      $('.navbar').css({ 'height': '0px', 'z-index': '-1' });
      // прозначность Liшек на 0.
      $('.navbar li').css({ 'opacity': '0' });
      // смешаем кнопку гамбургерар вниз 
      $('.gumburger').css({ 'transform': 'translateY(0px)' })
      outHide();
    } else {
      // возвращаем всё назад 
      $('.navbar').css({ 'height': '50px', 'z-index': '1' });
      $('.navbar li').css({ 'opacity': '1' });
      $('.gumburger').css({ 'transform': 'translateY(-50px)' })
    }
  })
});

// выезд мобильного меню и затемнение bg
var isMenu = false;
var onGumburgerClick = function () {
  isMenu = !isMenu
  switch (true) {
    case (isMenu === true): {
      // анимация гамбургера
      $('.gumburger__center-line').css({ 'transform': 'scale(0 , 0)' })
      $('.gumburger__top-line').css({ 'transform': 'rotateZ(405deg) translate(7px, 7px)' })
      $('.gumburger__bottom-line').css({ 'transform': 'rotateZ(-45deg) translate(7px, -7px)' })
      // появление бокового меню
      $('.mobileNav-wrapper-items').css({ 'transform': 'translateX(0px) translateY(50px)' })
      $('.mobileNav, .mobileNav-wrapper-items__empty-div').css({ 'opacity': '1' })
    }
      break;
    case (isMenu === false): {
      // скрыть сайдбар
      hideSidebar()
    }
      break;
  }
}
  var hideSidebar = function() {
    // анимация гамбургера
    $('.gumburger__center-line').css({ 'transform': 'scale(1 , 1)' })
    $('.gumburger__top-line').css({ 'transform': 'rotateZ(0deg)' })
    $('.gumburger__bottom-line').css({ 'transform': 'scale(1 , 1)' })
    // убирание бокового меню и фон
    $('.mobileNav-wrapper-items').css({ 'transform': 'translateX(0px) translateY(300px)' })
    $('.mobileNav, .mobileNav-wrapper-items__empty-div').css({ 'opacity': '0' })
    // сворачиваем все открытые подменюшки
    $('.mobileNav-hidden-menu').css('display', 'none')
    $('.mobileNav-item__arrow').css('transform', 'rotateZ(0deg')
    $('.mobileNav-item__has-hidden-menu').css('box-shadow', 'initial')
  }



// старт функции гамбургера
$(document).ready(function () {
  $('.gumburger').on('click', onGumburgerClick)
})

// при возвращение к большому экрану скрытие мобильного меню
$(document).ready(function () {
  $(window).on('load resize', function () {
    if ($('.navbar').css('z-index') === '1') {
      // возвращение гамбургера на место
      $('.gumburger__center-line').css({ 'transform': 'scale(1 , 1)' })
      $('.gumburger__top-line').css({ 'transform': 'rotateZ(0deg)' })
      $('.gumburger__bottom-line').css({ 'transform': 'scale(1 , 1)' })
      // скрываем мобильное меню и фон
      $('.mobileNav-wrapper-items').css({ 'transform': 'translateX(460px, 50px)' })
      $('.mobileNav, .mobileNav-wrapper-items__empty-div').css({ 'opacity': '0' })
      // сворачиваем все открытые подменюшки
      $('.mobileNav-hidden-menu').css('display', 'none')
      $('.mobileNav-item__arrow').css('transform', 'rotateZ(0deg')
      $('.mobileNav-item__has-hidden-menu').css('box-shadow', 'initial')
    }
  })
})


///////////////////////////////////////////////////////


// логика раскрытия ссылок
var isOpenLink = false;
var prevClickElem;
$(document).ready(function () {
  $('.mobileNav-item__has-hidden-menu').on('click', function (e) {

    // если клики на разные менюшки то переключение флага в false для избежания двойного клика по менюшке
    if (prevClickElem !== $(this).next('.mobileNav-hidden-menu').attr('id')) {
      isOpenLink = false
    }

    // разворачивание/сворачивание выпадающих подменюшек 
    switch (true) {
      case (isOpenLink === false): {
        // скрытие активных меню и разворот стрелочек
        $('.mobileNav-hidden-menu').css('display', 'none')
        $('.mobileNav-item__arrow').css('transform', 'rotateZ(0deg')
        // появление кликнутой подменю
        $('.mobileNav-item__has-hidden-menu').css('box-shadow', 'initial')
        $(this).css('box-shadow', '2px 2px 2px rgba(10,10,10,.2) inset, -2px -2px 2px rgba(10,10,10,.2) inset')
        $(this).next('.mobileNav-hidden-menu').css('display', 'block')
        $(this).find('.mobileNav-item__arrow').css('transform', 'rotateZ(90deg')
        // изменение флага
        isOpenLink = true;
      }
        break;
      case (isOpenLink === true): {
        // скрытие активной менюшки
        $(this).css('box-shadow', 'initial')
        $(this).next('.mobileNav-hidden-menu').css('display', 'none')
        $(this).find('.mobileNav-item__arrow').css('transform', 'rotateZ(0deg')
        isOpenLink = false;
      }
        break;
    }
    // запоминание id шника предыдущего клика
    prevClickElem = $(this).next('.mobileNav-hidden-menu').attr('id');
  });
});

