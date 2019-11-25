// параметры 
var elem = document.getElementById('snows1') // здесь Id контейнера
var elem2 = document.getElementById('snows2') // здесь Id контейнера
var elem3 = document.getElementById('snows3') // здесь Id контейнера
var elem4 = document.getElementById('snows4') // здесь Id контейнера
var scrolled;
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('scroll').innerHTML = scrolled + 'px : scroll';
  elem.style.transform = 'translateY(' + scrolled*(-.6) + 'px)';
  elem2.style.transform = 'translateY(' + scrolled*(-.7) + 'px)';
  elem3.style.transform = 'translateY(' + scrolled*(-.8) + 'px)';
  elem4.style.transform = 'translateY(' + scrolled*(-.9) + 'px)';
}
$(window).on('load resize', function () {
  var width = $('html').outerWidth();
  var height = $(window).height();
  $('#width').html(width + 'px : width');
  $('#height').html(height + 'px : height');
});

document.onmousemove = function (e) {
  var X = e.pageX;
  var Y = e.pageY;
  document.getElementById('mouseX').innerHTML = X + ': mouseX'
  document.getElementById('mouseY').innerHTML = Y + ': mouseY'

  // паралакс эффект

  // elem.style.transform = 'translateX(' + X/10 + 'px)' + ' translateY(' + Y/10 + 'px)';

}
// получение координат верхнего левого угла контейнера относительно окна
// var elem = document.getElementById('textDiv') // здесь Id контейнера
// function getCoords(elem) { // кроме IE8-
//   var box = elem.getBoundingClientRect();
//   var top = box.top + pageYOffset;
//   var left = box.left + pageXOffset;
//   document.getElementById('clientX').innerHTML = top + ': clientX'
//   document.getElementById('clientY').innerHTML = left + ': clientY'
// }
// getCoords(elem);



$(document).ready(function() {
	if ($(window).outerWidth() > 768) {
		(function() {
		  $(window).on("load",function(){
		    $("a[href*='#']").mPageScroll2id({
		    	scrollSpeed: 1500,
		    	// onStart:function(){},
		    	// onComplete:function(){}
		    });
		  });
		})(jQuery);
	} 
});


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