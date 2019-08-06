// // выбираем коллекцию элементов секции планировки
// let mouseenter = function()  {
//     $('.drawing-section-navbar-ul__underline').addClass("drawing-section-navbar-ul__underline_unable")
//     console.log(event.target.className)
// }
// let mouseout = function() {
//     $('.drawing-section-navbar-ul__underline').removeClass("drawing-section-navbar-ul__underline_unable")
// }

// $(document).ready(function(event) {
//     $('.drawing-section-navbar-ul__navbar-item').on("mouseover",{event}, mouseenter);
// });


// функция для сохранение непрозрачности красного BG навбара
$(document).ready(function () {
    $('.slider-nav-images__item').hover(
        function () {
            $.each(('.slider-nav-images'), function(i, el) {
				$(el).on('click', function() {
					alert('so')
				});
			});
          
        
        }, 

        function () {
            // alert('poka')
        })
});

