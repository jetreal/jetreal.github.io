// init wow 
new WOW().init()
// параметры 
var elem = document.getElementById('snows1') // здесь Id контейнера
var elem2 = document.getElementById('snows2') // здесь Id контейнера
var elem3 = document.getElementById('snows3') // здесь Id контейнера
var elem4 = document.getElementById('snows4') // здесь Id контейнера
var scrolled;
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  // document.getElementById('scroll').innerHTML = scrolled + 'px : scroll';
  elem.style.transform = 'translateY(' + scrolled*(-.6) + 'px)';
  elem2.style.transform = 'translateY(' + scrolled*(-.7) + 'px)';
  elem3.style.transform = 'translateY(' + scrolled*(-.8) + 'px)';
  elem4.style.transform = 'translateY(' + scrolled*(-.9) + 'px)';
}
// $(window).on('load resize', function () {
//   var width = $('html').outerWidth();
//   var height = $(window).height();
//   $('#width').html(width + 'px : width');
//   $('#height').html(height + 'px : height');
// });

// document.onmousemove = function (e) {
//   var X = e.pageX;
//   var Y = e.pageY;
//   document.getElementById('mouseX').innerHTML = X + ': mouseX'
//   document.getElementById('mouseY').innerHTML = Y + ': mouseY'

  // паралакс эффект
  // elem.style.transform = 'translateX(' + X/10 + 'px)' + ' translateY(' + Y/10 + 'px)';
// }

// библиотечный сниппет 
$(document).ready(function() {
	if ($(window).outerWidth() > 768) {
		(function() {
		  $(window).on("load",function(){
		    $("a[href*='#']").mPageScroll2id({
		    	scrollSpeed: 1000,
		    	// onStart:function(){},
		    	// onComplete:function(){}
		    });
		  });
		})(jQuery);
	} 
});

// переключение меню, точек слайдера
$(document).ready(function() {
  $(".j-third-section-main-center-question-navdots__item").on("click", function(
    e
  ) {
    $(".j-third-section-main-center-question-navdots div").removeClass(
      "j-third-section-main-center-question-navdots__item--active"
    );
    $(e.target).addClass(
      "j-third-section-main-center-question-navdots__item--active"
    );
  });
});

// функция всплювающего меню гамбургера
$(document).ready(function() {
  $('#gamburger').on('click', showMenu);
})
var gflag = false
function showMenu() {
  gflag = !gflag
  switch(gflag) {
    case false :
      $('#gambMenu').css({"opacity":"0"})
      $('.wrapperAll').css({"opacity":"1"}).removeClass('wrBlack')
      break
    case true :
      $('#gambMenu').css({"opacity":"1", "right":"0px", "z-index":"60"})
      $('.wrapperAll').css({"opacity":"1"}).addClass('wrBlack')
      break
    default: return
  }
}

// восстановление меню при ресайзе
$(window).on('load resize', function() {
  if ($(window).outerWidth() > 992) {
    // remove tag <a> and replace content without <a>
    $('#gambMenu').css({"opacity":"1", "right":"0px", "z-index":"60"})
    $('.wrapperAll').css({"opacity":"1"}).removeClass('wrBlack')
  } else {
    $('#gambMenu').css({"opacity":"0"})
  }
})

// disable hovers and click events when scrolling
// Функция отключения событий клика при скролле увеличивает производительность во время скролла
var body = document.body,
    timer;
window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
  timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },100);
}, false);


//preloader
$(window).one('load', function() {
  setTimeout(function() {
    $('.wrapperLoader').fadeOut('slow');
  },250);
});


var target = $('#main');
var target2 = $('#unic');
var target3 = $('#third');
var target4 = $('#four');
var targetPos = target.offset().top;
var targetPos2 = target2.offset().top;
var targetPos3 = target3.offset().top;
var targetPos4 = target4.offset().top;

var winScrollTop
$(window).scroll(function() {
  winScrollTop = $(this).scrollTop();
  line()
})

function line() {
  if (winScrollTop == 0) {
    $(".j-third-section-main-left-side-vertical-line").css("top", "-120px");
    $(".j-third-section-main-left-side-circles__item").removeClass(
      "j-third-section-main-left-side-circles__item--active"
    );
    $("#l1").addClass("j-third-section-main-left-side-circles__item--active");
  }
  if (winScrollTop + 3 > targetPos2) {
    $(".j-third-section-main-left-side-vertical-line").css("top", "-80px");
    $(".j-third-section-main-left-side-circles__item").removeClass(
      "j-third-section-main-left-side-circles__item--active"
    );
    $("#l2").addClass("j-third-section-main-left-side-circles__item--active");
  }
  if (winScrollTop + 3 > targetPos3) {
    $(".j-third-section-main-left-side-vertical-line").css("top", "-50px");
    $(".j-third-section-main-left-side-circles__item").removeClass(
      "j-third-section-main-left-side-circles__item--active"
    );
    $("#l3").addClass("j-third-section-main-left-side-circles__item--active");
  }
  if (winScrollTop + 3 > targetPos4) {
    $(".j-third-section-main-left-side-vertical-line").css("top", "-20px");
    $(".j-third-section-main-left-side-circles__item").removeClass(
      "j-third-section-main-left-side-circles__item--active"
    );
    $("#l4").addClass("j-third-section-main-left-side-circles__item--active");
  }
}

// if (is.not.firefox()) { 
//   $('label:after').css('top', '-5px')
// }