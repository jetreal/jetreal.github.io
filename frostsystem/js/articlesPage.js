$(document).ready(function() {
  $(window).on('load', function() {
    $('.navbar__a4').attr('href', '#')
    $('.navbar__a, .footer-right-link2').attr('href', '/_pug_pages/contacts.html')
    $('.navbar__a2, .footer-right-link1').attr('href', '/_pug_pages/about.html')
    $('.navbar__a3').attr('href', '/_pug_pages/guarantees.html')
    $('.footer-right-link3').attr('href', '/_pug_pages/shipping_and_payment.html')
})
})

var addActiveClass = function() {
    $('.navBar ul li').removeClass('navBar__active-li');
    $('.navBar ul li').eq(3).addClass('navBar__active-li');
  }
  $(window).on('load', function() { 
    addActiveClass()
  })


$(document).ready(function() { 
  $('.navBar ul li').on('click', addActiveClass );
});