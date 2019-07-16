// highlight Navbar
function highlightUnderLine() {
    var navBarTexts = document.getElementsByClassName('navTexts');
    navBarTexts.onmouseover = function (event) {
        target = event.target;
        target.style.background = 'pink';
    }
}
highlightUnderLine()

$(document).ready(function (event) {
    $('.item1, .item2, .item3, .item4').mouseenter(handlerIn).mouseleave(handlerOut)
})

handlerIn = function (event) {

    if (event.target.className === 'item1' || 'item2' || 'item3' || 'item4' && event.target.className !== 'navTexts' ) {
        var name = event.target.className
        $('.' + name + ' ' + '.underline').css({ 'opacity': '1', 'width': '100%' });
    } else {
        return false
    }
}

handlerOut = function () {
    $('.underline').css({ 'opacity': '0', 'width': '0%' })
}