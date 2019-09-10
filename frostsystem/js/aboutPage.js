$(document).ready(function() {
  $(window).on('load', function() {
    $('.navbar__a2, .footer-right-link1').attr('href', '#')
    $('.navbar__a, .footer-right-link2').attr('href', '/_pug_pages/contacts.html')
    $('.navbar__a3').attr('href', '/_pug_pages/guarantees.html')
    $('.navbar__a4').attr('href', '/_pug_pages/articles.html')
    $('.footer-right-link3').attr('href', '/_pug_pages/shipping_and_payment.html')
    // $('.navBar ul li').triggerHandler('click')  })
})
})


var addActiveClass = function() {
  
  $('.navBar ul li').removeClass('navBar__active-li');
  $('.navBar ul li').eq(1).addClass('navBar__active-li');
}
$(window).on('load', function() { 
  addActiveClass()
})


$(document).ready(function() { 
$('.navBar ul li').on('click', addActiveClass );
});