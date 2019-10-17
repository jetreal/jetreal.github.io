// параметры 
var scrolled;
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('scroll').innerHTML = scrolled + 'px : scroll';
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
}


// перемещение гамбургера
$(document).ready(function () {
  $(window).on('load resize', function () {
    if ($(window).outerWidth() < 992) {
      $('.j-gamburger').appendTo('.j-header-logo').css({
        'left': '-47px',
        'top': '18px',
        'margin': '0 auto'
      });
    } else {
      $('.j-gamburger').appendTo('.j-navbar').css({
        'left': '-87px',
        'top': '8px',
        'margin': 'initial'
      });
    }
  })
})