var textContentBook = [
	{ "text": "1", "img": "img/bali1.jpg" },
	{ "text": "2", "img": "img/bali2.jpg" },
	{ "text": "3", "img": "img/dubay1.jpg" },
	{ "text": "4", "img": "img/dubay2.jpg" },
	{ "text": "5", "img": "img/footer.jpg" }
]
var flag = false;
for (let i = 0; i < textContentBook.length; i++) {
	$('.img' + i + ' ' + 'img').attr('src', textContentBook[i].img);
}

$(document).ready(function () {
	$('.buttonLeft').on('click', leftBtn);
});

function leftBtn() {
	$('.slider div').css({ 'transform': 'translateX(+300px)', 'transition': 'transform .5s cubic-bezier(.14,1.07,.81,.98)' });
	if (is.firefox()) {
		$('.slider > div:eq(0)').css({'position': 'relative', 'left': '1px'});
	}
	if (flag == false) {
		flag = true;
		setTimeout(function () {
			if (is.firefox()) {
				$('.slider > div:eq(0)').css({'position': 'relative', 'left': '0px'});
			}
			$('.slider div:last-child').insertBefore('.slider div:first-child');
			$('.slider div').css({ 'transform': 'translateX(0px)', 'transition': 'transform .0s' });
			flag = false;
		}, 500);
	}
}


$(document).ready(function () {
	$('.buttonRight').on('click', rightBtn);
});


function rightBtn() {
	$('.slider div').css({ 'transform': 'translateX(-300px)', 'transition': 'transform .5s cubic-bezier(.14,1.07,.81,.98)' });
	if (flag == false) {
		flag = true;
		setTimeout(function () {
			$('.slider div:first-child').insertAfter('.slider div:last-child');
			$('.slider div').css({ 'transform': 'translateX(0px)', 'transition': 'transform .0s' });
			flag = false;
		}, 500);
	}
}

var startTouchedCoord;
var endTouched;

window.addEventListener('load', function () { // после загрузки страницы

	document.getElementById('touched').addEventListener('touchstart', function (e) {
		startTouchesCoord = (e.changedTouches[0].pageX) // toched point
	}, false)

	document.getElementById('touched').addEventListener('touchend', function (e) {
		endTouched = (e.changedTouches[0].pageX) // up point
		let a = Number(startTouchesCoord)
		let b = Number(endTouched)

		if (a < b) {
			$('.buttonLeft').triggerHandler('click', leftBtn)
		} else {
			$('.buttonRight').triggerHandler('click', rightBtn)
		}
	}, false)
}, false)

$(document).ready(function () {
	setTimeout(function () {
		$('.wrappDiv').css({ 'transform': 'rotatez(360deg)' })
	}, 250)
});

