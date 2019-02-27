'use strict'

$(document).ready(function() {
	setTimeout(function() {
		$(window).trigger('resize');
	},250);
});


////////////////////////////////////////////////////////////////////////

// magnific Popup
jQuery(document).ready(function(){
	jQuery('.test-popup-link').magnificPopup({
		type: 'image',
		gallery : {
		enabled : true,
		closeBtnInside: true,
		navigateByImgClick: true
	},
	image: {
		titleSrc: 'title'
	},
	removalDelay: 300,
	mainClass: 'mfp-fade mfp-with-zoom'
	});
});

$('.popup-modal2').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: false,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			// duration: 300 // don't foget to change the duration also in CSS
		}
	});
/////////////////////////////////////////////////////////////
// forest section

// nice scroll
	// $(document).ready(function() {
	//   $("body")
	//     .niceScroll({cursorwidth: '10px',
	//      autohidemode: "cursor",
	//      zindex: 998,
	//      cursorcolor: 'aqua',
	//      cursorborder: '2px solid grey',
	//      railoffset: {left: "20px"},
	//      horizrailenabled: false,
	//      // scrollspeed: 100,
	//      mousescrollstep: 40,
	//      sensitiverail: false
	//   });
	// });
	$(document).ready(function() {
	  $(".wrapItem3, .theLostRiverText2, .item5")
	    .niceScroll({cursorwidth: '6px',
	     autohidemode: true,
	     zindex: 998,
	     cursorcolor: 'aqua',
	     cursorborder: '2px solid grey',
	     horizrailenabled: false,
	     scrollspeed: 150,
	     mousescrollstep: 30
	  });
	});
////////////////////////////////////////////////////////////
// header bottom text scale function
var lDivDataObj = {
	wind:{img:'url(/img/images/sky2.jpg)', text:'Ветер', rightImg:''},
	fire:{img:'url(/img/images/fireHeaderDisp.jpg', text: 'Огонь', rightImg: ''},
	water:{img:'url(/img/images/waterHeaderDisp.jpg', text: 'Вода', rightImg: ''},
	earth:{img:'url(/img/images/earth.jpg', text: 'Земля', rightImg: ''}
}
var flagi = false;

var timerHeader1, timerHeader2, timerHeader3, timerHeader4, timerHeader5;
function headerAnime(iDivDataObj) {
	// change the state
	timerHeader1 = setTimeout(function() {
		wind(lDivDataObj.wind.text, lDivDataObj.wind.img);
	},0);
	timerHeader2 = setTimeout(function() {
		wind(lDivDataObj.fire.text, lDivDataObj.fire.img);
	},8000);
	timerHeader3 = setTimeout(function() {
		wind(lDivDataObj.water.text, lDivDataObj.water.img);
	},16000);
	timerHeader4 = setTimeout(function() {
		wind(lDivDataObj.earth.text, lDivDataObj.earth.img);
	},24000);
	timerHeader5 = setTimeout(function() {
		// off button
		$('.circleImg').off('click');
			$('.circleImg').on('click', offTimerHeader);
			// css
			$('.circleImg').attr('src', '/img/images/button3.png');
			$('.circleImg').css({width:'150px', height:'150px',
			 'box-shadow': '2px 2px 6px gray, -2px -2px 6px gray,\
			 -2px 2px 6px gray, 2px -2px 6px gray'});
			$('.into03, .into04, .into05, .into06')
			.css('box-shadow', '2px 2px 6px #7F7F7F inset, -2px -2px 6px #7F7F7F inset,\
				-2px 2px 6px #7F7F7F inset, 2px -2px 6px #7F7F7F inset');
			$('.bDiv').css('border', '1px solid #99747A');
	},32000);
}
function offTimerHeader() {
	clearTimeout(timerHeader1);
	clearTimeout(timerHeader2);
	clearTimeout(timerHeader3);
	clearTimeout(timerHeader4);
	clearTimeout(timerHeader5);
}
function wind(txt,img) {
	$('#bDivTextP').text(txt);
	$('.wrapperImg').css('background-image', img);
	// start css animation
	$('#bDivTextP').addClass('anima');
	setTimeout(function() {
		$('.wrapperImg').fadeIn(1000);
	},3300);
	setTimeout(function() {
		$('.wrapperImg').fadeOut(1000);
		$('#bDivTextP').removeClass('anima');
	},7000);
}
// button toggle function 
function mDown() {
	switch (true) {
		case (flagi == false ) :
			$('.circleImg').on('click', lDivDataObj, headerAnime);
			$('.circleImg').css({width:'140px',height:'140px',
				'box-shadow': '3px 3px 6px #19B9F5, -3px -3px 6px #19B9F5,\
				-3px 3px 6px #19B9F5, 3px -3px 6px #19B9F5'});
			// css
			$('.circleImg').attr('src', '/img/images/button2.png');
			$('.into03, .into04, .into05, .into06')
			.css('box-shadow', '3px 3px 6px #19B9F5 inset, -3px -3px 6px #19B9F5 inset');
			$('.bDiv').css('border', '1px solid #19B9F5');
			// change flag
			flagi = true;
			break;
		case (flagi == true) :
			$('.circleImg').off('click');
			$('.circleImg').on('click', offTimerHeader);
			// css
			$('.circleImg').attr('src', '/img/images/button3.png');
			$('.circleImg').css({width:'150px',height:'150px',
			 'box-shadow': '3px 3px 6px gray, -3px -3px 6px gray,\
			 -3px 3px 6px gray, 3px -3px 6px gray'});
			$('.into03, .into04, .into05, .into06')
			.css('box-shadow', '3px 3px 6px #7F7F7F inset, -3px -3px 6px #7F7F7F inset');
			$('.bDiv').css('border', '1px solid #99747A');
			// change flag
			flagi = false;
			break;
	}	
}
// start function
$('.circleImg').mousedown(mDown);

// hide button on resize

var fl = 0;
$(document).ready(function() {
	$(window).on('resize load', hidechangeSideImgwButton);
});

function hidechangeSideImgwButton () {
	if ($('html').outerWidth() < 700 && flagi == false){
 		fl = 0;
	 	$('.wrapCircleImg').click(function() {
	 		$('.wr17').css({'transform': 'scale(.0,.0)'});

	 		setTimeout(function() {
	 			flagi = 0;
	 			fl = 0;
	 			$('.wr17').css({'transform': 'scale(.7,.7)'});
	 		}, 32000);

	 	});

  } else if ($('html').outerWidth() < 700 && flagi == true) {
		$('.wrapCircleImg').one('click', function() {
			$(window).trigger('resize');
		});

	} else if ($('html').outerWidth() > 700 && flagi == true) {
  	$('.wrapCircleImg').one('click', function() {
			$(window).trigger('resize');
		});
  	$('.wrapCircleImg').off('click');	
		if (fl == 0) {
    	$('.wr17').css({'transform': 'scale(.7,.7)'});
    	fl++;
		}
	} 
}
///////////////////////////////////////////////////////////
// replace red TopLine at forest section  
function replaceTopLine() {
	$(document).ready(function() {
		if ($(window).outerWidth() <= 992) {
			$('.theLostRiverText3').css({position:'relative',bottom:'116px',zIndex: '11'}).appendTo($('.wrapVItem'));
		}	else {
			$('.theLostRiverText3').css({position:'relative',bottom:'8px',zIndex: '11'}).insertAfter($('.theLostRiverText2'));
		}
	});
}
$(window).on('load resize', replaceTopLine);
///////////////////////////////////////////////////////////////////////
//afterHeader section change image
var sectionObj = [
	{
		leftSrc: '/img/images/flowers/romashka1.jpg',
		rightSRC: '/img/images/flowers/romashka2.jpg',
		centerTxt: 'Ромашка'
	},
	{
		leftSrc: '/img/images/flowers/nartsisi1.jpg',
		rightSRC: '/img/images/flowers/nartsisi2.jpg',
		centerTxt: 'Нарцисс'
	},
	{
		leftSrc: '/img/images/flowers/rose1.jpg',
		rightSRC: '/img/images/flowers/rose2.jpg',
		centerTxt: 'Роза'
	},
	{
		leftSrc: '/img/images/flowers/tulpan1.jpg',
		rightSRC: '/img/images/flowers/tulpan2.jpg',
		centerTxt: 'Тюльпан'
	},
	{
		leftSrc: '/img/images/flowers/fucsia1.jpg',
		rightSRC: '/img/images/flowers/fucsia2.jpg',
		centerTxt: 'Фуксия'
	},
	{
		leftSrc: '/img/images/flowers/lilii1.jpg',
		rightSRC: '/img/images/flowers/lilii2.jpg',
		centerTxt: 'Лилия'
	},
	{
		leftSrc: '/img/images/flowers/hrizantem1.jpg',
		rightSRC: '/img/images/flowers/hrizantem2.jpg',
		centerTxt: 'Хризантема'
	},
	{
		leftSrc: '/img/images/flowers/kolokolchik1.jpg',
		rightSRC: '/img/images/flowers/kolokolchik2.jpg',
		centerTxt: 'Колокольчик'
	},
	{
		leftSrc: '/img/images/flowers/fialki1.jpg',
		rightSRC: '/img/images/flowers/fialki2.jpg',
		centerTxt: 'Фиалка'
	},
	{
		leftSrc: '/img/images/flowers/gvozdika1.jpg',
		rightSRC: '/img/images/flowers/gvozdika2.jpg',
		centerTxt: 'Гвоздика'
	}
];
var indexO = 0;
// change number 
function changeCount(event) {
	switch(true) {
		case (event.target.className == 'duck') :
			function changeSideImg(){
				$('.duck').attr('src', sectionObj[indexO].leftSrc);
				$('.duck2').attr('src', sectionObj[indexO].rightSRC);
				$('.duckText p').text(sectionObj[indexO].centerTxt);
				$('#textDuckModal p:eq(0)').text(sectionObj[indexO].centerTxt);
			}
 	    if (indexO != sectionObj.length) {
				indexO++;
				if (indexO == sectionObj.length) {
					indexO = 0;
				}
				changeSideImg();
			} else {
				indexO = 1;
				changeSideImg();
			}
		break;
		case (event.target.className == 'duck2') :
			if (indexO != 0) {
				indexO--;
				changeSideImg();
				if (indexO == 0 ) {
					indexO = sectionObj.length;
				}
			} else { 
				indexO = sectionObj.length -1
				changeSideImg();
			}
		break;
	}
}

///////////////////////////////////////////////////////////////////////
var sectionObj2 = [
	{
		leftSrc: '/img/images/berries/malina1.jpg',
		rightSRC: '/img/images/berries/malina2.jpg',
		centerTxt: 'Малина'
	},
	{
		leftSrc: '/img/images/berries/ejevika1.jpg',
		rightSRC: '/img/images/berries/ejevika2.jpg',
		centerTxt: 'Ежевика'
	},
	{
		leftSrc: '/img/images/berries/zemlyanika1.jpg',
		rightSRC: '/img/images/berries/zemlyanika2.jpg',
		centerTxt: 'Земляника'
	},
	{
		leftSrc: '/img/images/berries/krijovnik1.jpg',
		rightSRC: '/img/images/berries/krijovnik2.jpg',
		centerTxt: 'Крыжовник'
	},
	{
		leftSrc: '/img/images/berries/klubnika1.jpg',
		rightSRC: '/img/images/berries/klubnika2.jpg',
		centerTxt: 'Клубника'
	},
	{
		leftSrc: '/img/images/berries/smorodina1.jpg',
		rightSRC: '/img/images/berries/smorodina2.jpg',
		centerTxt: 'Смородина'
	},
	{
		leftSrc: '/img/images/berries/chernika1.jpg',
		rightSRC: '/img/images/berries/chernika2.jpg',
		centerTxt: 'Черника'
	},
	{
		leftSrc: '/img/images/berries/vishnya1.jpg',
		rightSRC: '/img/images/berries/vishnya2.jpg',
		centerTxt: 'Вишня'
	},
	{
		leftSrc: '/img/images/berries/golubika1.jpg',
		rightSRC: '/img/images/berries/golubika2.jpg',
		centerTxt: 'Голубика'
	},
	{
		leftSrc: '/img/images/berries/chereshnya1.jpg',
		rightSRC: '/img/images/berries/chereshnya2.jpg',
		centerTxt: 'Черешня'
	},
	{
		leftSrc: '/img/images/berries/brusnika1.jpg',
		rightSRC: '/img/images/berries/brusnika2.jpg',
		centerTxt: 'Брусника'
	},
	{
		leftSrc: '/img/images/berries/vinograd1.jpg',
		rightSRC: '/img/images/berries/vinograd2.jpg',
		centerTxt: 'Виноград'
	}
];

var indexO2 = 0;		
function changeCount2(event) {
	switch(true) {
		case (event.target.className == 'ej') :
			function changeSideImg(){
				$('.ej').attr('src', sectionObj2[indexO2].leftSrc);
				$('.ej2').attr('src', sectionObj2[indexO2].rightSRC);
				$('.textEj p').text(sectionObj2[indexO2].centerTxt);
				$('#textEjModal p:eq(0)').text(sectionObj2[indexO2].centerTxt);
			}
			if (indexO2 != sectionObj2.length) {
				indexO2++;
				if (indexO2 == sectionObj2.length) {
					indexO2 = 0;
				}
				changeSideImg();
			} else {
				indexO2 = 1;
				changeSideImg();
			}
		break;
		case (event.target.className == 'ej2') :
			if (indexO2 != 0) {
				indexO2--;
				changeSideImg();
				if (indexO2 == 0 ) {
					indexO2 = sectionObj2.length;
				}
			} else { 
				indexO2 = sectionObj2.length -1
				changeSideImg();
			}
		break;
	}
}

///////////////////////////////////////////////////////////////////////
var sectionObj3 = [
	{
		leftSrc: '/img/images/animals/ej1.jpg',
		rightSRC: '/img/images/animals/ej2.jpg',
		centerTxt: 'ёж',
		popupTect: 'Образ колючего жителя лесов\
		 и степей всем хорошо известен. Происхождение \
		 названия ежа имеет латинские корни и переводится\
		  как "колючий барьер". Ежи населяют только 2 \
		  континента: Евразию и северные районы Африки. \
		  Ёж миролюбим но врагов в природе у него много:\
		  волки, лисицы, харьки, куницы, коршуны, филины, \
		  гадюки.При встрече с противником, ёж сначала прыгает\
		  на противника с целью уколоть, а затем клубок иголок\
		  становится неприступной крепостью.'
	},
	{
		leftSrc: '/img/images/animals/belka1.jpg',
		rightSRC: '/img/images/animals/belka2.jpg',
		centerTxt: 'Белка'
	},
	{
		leftSrc: '/img/images/animals/kaban1.jpg',
		rightSRC: '/img/images/animals/kaban2.jpg',
		centerTxt: 'Кабан'
	},
	{
		leftSrc: '/img/images/animals/enot1.jpg',
		rightSRC: '/img/images/animals/enot2.jpg',
		centerTxt: 'Енот'
	},
	{
		leftSrc: '/img/images/animals/bobr1.jpg',
		rightSRC: '/img/images/animals/bobr2.jpg',
		centerTxt: 'Бобр'
	},
	{
		leftSrc: '/img/images/animals/olen1.jpg',
		rightSRC: '/img/images/animals/olen2.jpg',
		centerTxt: 'Олень'
	},
	{
		leftSrc: '/img/images/animals/zayats1.jpg',
		rightSRC: '/img/images/animals/zayats2.jpg',
		centerTxt: 'Заяц'
	},
	{
		leftSrc: '/img/images/animals/los1.jpg',
		rightSRC: '/img/images/animals/los2.jpg',
		centerTxt: 'Лось'
	},
	{
		leftSrc: '/img/images/animals/lisa1.jpg',
		rightSRC: '/img/images/animals/lisa2.jpg',
		centerTxt: 'Лиса'
	},
	{
		leftSrc: '/img/images/animals/sova1.jpg',
		rightSRC: '/img/images/animals/sova2.jpg',
		centerTxt: 'Сова'
	}
]
var indexO3 = 0;
function changeCount3(event) {
	switch(true) {
		case (event.target.className == 'catsImg') :
			function changeSideImg(){
				$('.catsImg').attr('src', sectionObj3[indexO3].leftSrc);
				$('.catsImg2').attr('src', sectionObj3[indexO3].rightSRC);
				$('.catText p').text(sectionObj3[indexO3].centerTxt);
				$('#textCatModal p:eq(0)').text(sectionObj3[indexO3].centerTxt);
			}
			if (indexO3 != sectionObj3.length) {
				indexO3++;
				if (indexO3 == sectionObj3.length) {
					indexO3 = 0;
				}
				changeSideImg();
			} else {
				indexO3 = 1;
				changeSideImg();
			}
		break;
		case (event.target.className == 'catsImg2') :
			if (indexO3 != 0) {
				indexO3--;
				changeSideImg();
				if (indexO3 == 0 ) {
					indexO3 = sectionObj3.length;
				}
			} else { 
				indexO3 = sectionObj3.length -1
				changeSideImg();
			}
		break;
	}
}


///////////////////////////////////////////////////////////////////////
var fl = false;
$(document).ready(function() {
	$('.duck').on('click', function(event) {
		if (fl == false) {
			changeCount(event)
			fl = true;
			setTimeout(function() {
				fl = false;
			},150);
		}
	});
	$('.duck2').on('click', function(event) {
		if (fl == false) {
			changeCount(event)
			fl = true;
			setTimeout(function() {
				fl = false;
			},150);
		}	
	});
	$('.ej').on('click', function(event) {
		if (fl == false) {
			changeCount2(event)
			fl = true;
			setTimeout(function() {
				fl = false;
			},150);
		}
	});
	$('.ej2').on('click', function(event) {
		if (fl == false) {
			changeCount2(event)
			fl = true;
			setTimeout(function() {
				fl = false;
			},150);
		}
	});
	$('.catsImg').on('click', function(event) {
		if (fl == false) {
			changeCount3(event)
			fl = true;
			setTimeout(function() {
				fl = false;
			},150);
		}
	});
	$('.catsImg2').on('click', function(event) {
		if (fl == false) {
			changeCount3(event)
			fl = true;
			setTimeout(function() {
				fl = false;
			},150);
		}
	});
});
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// display param

// var scrolled;
// window.onscroll = function() {
//   scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   document.getElementById('changeSideImgwScroll').innerHTML = scrolled + 'px';
// }
// 	$(window).resize(function(){
// 	var width = $('html').outerWidth();
// 	var height = $(window).height();
// 	$('#width').html(width + 'px');
// 	$('#height').html(height + 'px');
// });
////////////////////////////////////////////////////////////////////////
// var txt for display text
var forestText = {
	river: 'Равнинные реки украшают пейзаж любого континента,\
	реки являются естественной средой обитания для огромного количества животных -\
	рыб, водоплавающих птиц, бобров, различных насекомых.\
	Равнинные реки текут медленно и неспешно. Горные же реки, в свою очередь, несутся с огромной скоростью,\
	и завораживают шумом своих вод.',
	forest: 'Находясь в лесу человек ощущает умиротворение и покой. Пение птиц и изумительная красота деревьев буквально очаровывают. \
	Каждый лес, будь-то весёлый берёзовый лесок, сосновый бор, или серьёзный ельник прекрасен по своему.\
	Особенно приятно находиться в лесу весной, потому что всё вокруг расцветает. 	',
	deserts: 'Пустыни - это огромные территории не плодотворных участков почвы,  лишённые практически всякой растительности. \
	Пустыни бывают песчаные, каменистые, глинистые, а также некоторые арктические пространства называют пустынями. \
	Несмотря на суровый климат, пресмыкающиеся, грызуны, \
  некоторые птицы и даже такие крупные животные как - верблюды представляют животный мир пустынь. ',
	fields: 'Поля охватывают значительную часть наземного пространства, не имея высокой растительности. \
	За эту особенность их иногда даже называют бескрайними. На полях растут: либо культурные сорта растений и трав, либо дикорастущие. Не имея \
	особых преград, ветер в поле гуляет особенно сильно.',
	jungle: 'Джунгли значительно отличаются от северных лесов.\
	В северных лесах пространство между деревьями достаточно обширное, в джунглях же, \
	всё растёт очень плотно. Порой в джунглях невозможно пройти без мачете, необходимого для того, чтоб прорубить\
	очень густую растительность. Джунгли поражают буйством красок и обилием живности.',
	mountain: 'Миллионы туристов из разных уголков мира стремятся посетить различные возвышенности,\
	чтобы полюбоваться потрясающей красотой удивительных пейзажей.\
	 В этой подборке вы увидите замечательные горные пейзажи во всём своём многообразии. Мы собрали коллекцию самых потрясающих фотографий, на \
	 которых запечатлены горы со всего мира.',
	seas: 'Люди часто используют термин «море» для обозначения океана. Для географов море - это разделение океана, который закрыт или частично закрыт сушей.\
	A для не географов, море - это отличное место, где можно отдохнуть и расслабиться.'
};
var fTxt = {
	seas: 'моря',
	rivers: 'реки',
	fields: 'поля',
	forests: 'леса',
	jungles: 'джунгли',
	deserts: 'пустыни',
	mountains: 'горы'
}
	// Arr for text
var anyArr = [];
	// img Obj path for imgs
var locationObj = {
	numbers: [
		'/img/images/numbers/1.png',
		'/img/images/numbers/2.png',
		'/img/images/numbers/3.png',
		'/img/images/numbers/4.png',
		'/img/images/numbers/5.png'
	],
	rivers: [
		'/img/images/rivers/1.png',
		'/img/images/rivers/2.png',
		'/img/images/rivers/3.png',
		'/img/images/rivers/4.png',
		'/img/images/rivers/5.png'
	],
	forest: [
		'/img/images/forest/1.png',
		'/img/images/forest/2.png',
		'/img/images/forest/3.png',
		'/img/images/forest/4.png',
		'/img/images/forest/5.png'
	],
	mountain: [
		'/img/images/mountain/1.png',
		'/img/images/mountain/2.png',
		'/img/images/mountain/3.png',
		'/img/images/mountain/4.png',
		'/img/images/mountain/5.png'
	],
	fields: [
		'/img/images/fields/1.png',
		'/img/images/fields/2.png',
		'/img/images/fields/3.png',
		'/img/images/fields/4.png',
		'/img/images/fields/5.png'
	],
	seas: [
		'/img/images/seas/1.png',
		'/img/images/seas/2.png',
		'/img/images/seas/3.png',
		'/img/images/seas/4.png',
		'/img/images/seas/5.png'
	],
	deserts: [
		'/img/images/deserts/1.png',
		'/img/images/deserts/2.png',
		'/img/images/deserts/3.png',
		'/img/images/deserts/4.png',
		'/img/images/deserts/5.png'
	],
	jungles: [
		'/img/images/jungles/1.png',
		'/img/images/jungles/2.png',
		'/img/images/jungles/3.png',
		'/img/images/jungles/4.png',
		'/img/images/jungles/5.png'
	]
	}
	var index = 0;

$(document).ready(function() {
  function myCh() {
    function changeRiversContent() {
			$('#imgContent').attr('src', '/img/images/rivers/1.png');
			$('#imgContent2').attr('src', '/img/images/rivers/6.png');
			$('#headerLeftSection p').text(fTxt.rivers);
			// src for popup
			var atrLeft = $('#imgContent2').attr('src');
			var atrRight = $('#imgContent').attr('src');
			$('#popupLeft').attr('href', atrLeft);
			$('#popupRight').attr('href', atrRight);
  	};
  	changeRiversContent();
  	index = 0;
		$("#num").attr('src', locationObj.numbers[index]);
		anyArr = locationObj.rivers;
		$('.wrapVItem *').css('box-shadow','');
		$('.bgImage1, .bgImage1 div, .bgImage1 div div')
		.css('box-shadow', '3px 3px 6px #FFB352 inset, -3px -3px 6px #FFB352 inset');
		$('.into31 div:first-child')
		.removeClass('bgImage2no bgImage3no bgImage4no bgImage5no bgImage6no bgImage7no');
		$(this).addClass('bgImage1no');
		$('#forestTextContainer').text(forestText.river);
  	$(this).off('click');
  	$('.bgImage7').off('click').one('click', myCh2);
  	$('.bgImage2').off('click').one('click', myCh3);
  	$('.bgImage3').off('click').one('click', myCh4);
  	$('.bgImage4').off('click').one('click', myCh5);
  	$('.bgImage5').off('click').one('click', myCh6);
  	$('.bgImage6').off('click').one('click', myCh7);
  };

  function myCh2() {
// change display
  	function changeForestContent() {
		$('#imgContent').attr('src', '/img/images/forest/1.png');
		$('#imgContent2').attr('src', '/img/images/forest/6.png');
// change miniText
		$('#headerLeftSection p').text(fTxt.forests);
// change attr href for popup
		var atrLeft = $('#imgContent2').attr('src');
		var atrRight = $('#imgContent').attr('src');
		$('#popupLeft').attr('href', atrLeft);
		$('#popupRight').attr('href', atrRight);
	};
	changeForestContent();
// changeSideImgw number
		index = 0;
		$('#num').attr('src', locationObj.numbers[index]);
// change image array
		anyArr = locationObj.forest;
// change hilight border
		$('.wrapVItem *').css('box-shadow','');
		$('.bgImage7, .bgImage7 div, .bgImage7 div div')
		.css('box-shadow', '3px 3px 6px #FFB352 inset, -3px -3px 6px #FFB352 inset');
// off before
		$('.into31 div:first-child')
		.removeClass('bgImage2no bgImage3no bgImage4no bgImage5no bgImage6no bgImage1no');
		$(this).addClass('bgImage7no');
// change text
		$('#forestTextContainer').text(forestText.forest);
// off self click and on others
  	$(this).off('click');
  	$('.bgImage1').off('click').one('click', myCh);
  	$('.bgImage2').off('click').one('click', myCh3);
  	$('.bgImage3').off('click').one('click', myCh4);
  	$('.bgImage4').off('click').one('click', myCh5);
  	$('.bgImage5').off('click').one('click', myCh6);
  	$('.bgImage6').off('click').one('click', myCh7);
  };

  function myCh3() {
  	function changeMountainContent() {
			$('#imgContent').attr('src', '/img/images/mountain/1.png');
			$('#imgContent2').attr('src', '/img/images/mountain/6.png');
			$('#headerLeftSection p').text(fTxt.mountains);
			var atrLeft = $('#imgContent2').attr('src');
			var atrRight = $('#imgContent').attr('src');
			$('#popupLeft').attr('href', atrLeft);
			$('#popupRight').attr('href', atrRight);
  	};
  	changeMountainContent();
  	index = 0;
		$('#num').attr('src', locationObj.numbers[index]);
		anyArr = locationObj.mountain;
		$('.wrapVItem *').css('box-shadow','');
		$('.bgImage2, .bgImage2 div, .bgImage2 div div')
		.css('box-shadow', '3px 3px 6px #FFB352 inset, -3px -3px 6px #FFB352 inset');
		$('.into31 div:first-child')
		.removeClass('bgImage1no bgImage3no bgImage4no bgImage5no bgImage6no bgImage7no');
		$(this).addClass('bgImage2no');
		$('#forestTextContainer').text(forestText.mountain);
  	$(this).off('click');
  	$('.bgImage7').off('click').one('click', myCh2);
  	$('.bgImage1').off('click').one('click', myCh);
  	$('.bgImage3').off('click').one('click', myCh4);
  	$('.bgImage4').off('click').one('click', myCh5);
  	$('.bgImage5').off('click').one('click', myCh6);
  	$('.bgImage6').off('click').one('click', myCh7);
  };

  function myCh4() {
  	$('.bgImage3').addClass('bgImage3no');
      function changeFieldsContent() {
				$('#imgContent').attr('src', '/img/images/fields/1.png');
				$('#imgContent2').attr('src', '/img/images/fields/6.png');
				$('#headerLeftSection p').text(fTxt.fields);
				var atrLeft = $('#imgContent2').attr('src');
				var atrRight = $('#imgContent').attr('src');
				$('#popupLeft').attr('href', atrLeft);
				$('#popupRight').attr('href', atrRight);
  		};
  	changeFieldsContent();
  	index = 0;
		$('#num').attr('src', locationObj.numbers[index]);
		anyArr = locationObj.fields;
		$('.wrapVItem *').css('box-shadow','');
		$('.bgImage3, .bgImage3 div, .bgImage3 div div')
		.css('box-shadow', '3px 3px 6px #FFB352 inset, -3px -3px 6px #FFB352 inset');
		$('.into31 div:first-child')
		.removeClass('bgImage2no bgImage1no bgImage4no bgImage5no bgImage6no bgImage7no');
		$(this).addClass('bgImage3no');
		$('#forestTextContainer').text(forestText.fields);
  	$(this).off('click');
  	$('.bgImage7').off('click').one('click', myCh2);
  	$('.bgImage1').off('click').one('click', myCh);
  	$('.bgImage2').off('click').one('click', myCh3);
  	$('.bgImage4').off('click').one('click', myCh5);
  	$('.bgImage5').off('click').one('click', myCh6);
  	$('.bgImage6').off('click').one('click', myCh7);
  };
  function myCh5() {
  	function changeSeasContent() {
			$('#imgContent').attr('src', '/img/images/seas/1.png');
			$('#imgContent2').attr('src', '/img/images/seas/6.png');
			$('#headerLeftSection p').text(fTxt.seas);
			var atrLeft = $('#imgContent2').attr('src');
			var atrRight = $('#imgContent').attr('src');
			$('#popupLeft').attr('href', atrLeft);
			$('#popupRight').attr('href', atrRight);
  	};
  	changeSeasContent();
  	index = 0;
		$("#num").attr("src", locationObj.numbers[index]);
		anyArr = locationObj.seas;
		$('.wrapVItem *').css('box-shadow','');
		$('.bgImage4, .bgImage4 div, .bgImage4 div div')
		.css('box-shadow', '3px 3px 6px #FFB352 inset, -3px -3px 6px #FFB352 inset');
		$('.into31 div:first-child')
		.removeClass('bgImage2no bgImage3no bgImage1no bgImage5no bgImage6no bgImage7no');
		$(this).addClass('bgImage4no');
		$('#forestTextContainer').text(forestText.seas);
  	$(this).off('click');
  	$('.bgImage7').off('click').one('click', myCh2);
  	$('.bgImage1').off('click').one('click', myCh);
  	$('.bgImage2').off('click').one('click', myCh3);
  	$('.bgImage3').off('click').one('click', myCh4);
  	$('.bgImage5').off('click').one('click', myCh6);
  	$('.bgImage6').off('click').one('click', myCh7);
  };
  function myCh6() {
  	function changeDesertsContent() {
			$('#imgContent').attr('src', '/img/images/deserts/1.png');
			$('#imgContent2').attr('src', '/img/images/deserts/6.png');
			$('#headerLeftSection p').text(fTxt.deserts);
			var atrLeft = $('#imgContent2').attr('src');
			var atrRight = $('#imgContent').attr('src');
			$('#popupLeft').attr('href', atrLeft);
			$('#popupRight').attr('href', atrRight);
  	};
  	changeDesertsContent();
  	index = 0;
		$('#num').attr('src', locationObj.numbers[index]);
		anyArr = locationObj.deserts;
		$('.wrapVItem *').css('box-shadow','');
		$('.bgImage5, .bgImage5 div, .bgImage5 div div')
		.css('box-shadow', '3px 3px 6px #FFB352 inset, -3px -3px 6px #FFB352 inset');
		$('.into31 div:first-child')
		.removeClass('bgImage2no bgImage3no bgImage4no bgImage1no bgImage6no bgImage7no');
		$(this).addClass('bgImage5no');
		$('#forestTextContainer').text(forestText.deserts);
  	$(this).off('click');
  	$('.bgImage7').off('click').one('click', myCh2);
  	$('.bgImage1').off('click').one('click', myCh);
  	$('.bgImage2').off('click').one('click', myCh3);
  	$('.bgImage3').off('click').one('click', myCh4);
  	$('.bgImage4').off('click').one('click', myCh5);
  	$('.bgImage6').off('click').one('click', myCh7);
  };
  function myCh7() {
  	function changeJunlesContent() {
			$('#imgContent').attr('src', '/img/images/jungles/1.png');
			$('#imgContent2').attr('src', '/img/images/jungles/6.png');
			$('#headerLeftSection p').text(fTxt.jungles);
			var atrLeft = $('#imgContent2').attr('src');
			var atrRight = $('#imgContent').attr('src');
			$('#popupLeft').attr('href', atrLeft);
			$('#popupRight').attr('href', atrRight);
  	};
  	changeJunlesContent();
  	index = 0;
		$('#num').attr('src', locationObj.numbers[index]);
		anyArr = locationObj.jungles;
		$('.wrapVItem *').css('box-shadow','');
		$('.bgImage6, .bgImage6 div, .bgImage6 div div')
		.css('box-shadow', '3px 3px 6px #FFB352 inset, -3px -3px 6px #FFB352 inset');
		$('.into31 div:first-child')
		.removeClass('bgImage2no bgImage3no bgImage4no bgImage5no bgImage1no bgImage7no');
		$(this).addClass('bgImage6no');
		$('#forestTextContainer').text(forestText.jungle);
  	$(this).off('click');
  	$('.bgImage7').off('click').one('click', myCh2);
  	$('.bgImage1').off('click').one('click', myCh);
  	$('.bgImage2').off('click').one('click', myCh3);
  	$('.bgImage3').off('click').one('click', myCh4);
  	$('.bgImage4').off('click').one('click', myCh5);
  	$('.bgImage5').off('click').one('click', myCh6);
  };
	// start functions
	$('.bgImage7').one('click', myCh2);
	$('.bgImage1').one('click', myCh);
	$('.bgImage2').one('click', myCh3);
	$('.bgImage3').one('click', myCh4);
		////////////////////////////////////////////////////////
		// start field function without flicker when reload page
		$(window).on('load', function() {
			$('.bgImage3').addClass('bgImage3no');

			$('#headerLeftSection p').text(fTxt.fields).fadeIn(60);
			var atrLeft = $('#imgContent2').attr('src');
			var atrRight = $('#imgContent').attr('src');
			$('#popupLeft').attr('href', atrLeft);
			$('#popupRight').attr('href', atrRight);
  	
  		index = 0;
			$('#num').attr('src', locationObj.numbers[index]);
			anyArr = locationObj.fields;
			$('.wrapVItem *').css('box-shadow','');
			$('.bgImage3, .bgImage3 div, .bgImage3 div div')
			.css('box-shadow', '3px 3px 6px #FFB352 inset, -3px -3px 6px #FFB352 inset');
			$('.into31 div:first-child')
			.removeClass('bgImage2no bgImage1no bgImage4no bgImage5no bgImage6no bgImage7no');
			$(this).addClass('bgImage3no');
  		$('.bgImage3').off('click');
  		$('.bgImage7').one('click', myCh2);
  		$('.bgImage1').one('click', myCh);
  		$('.bgImage2').one('click', myCh3);
  		$('.bgImage4').one('click', myCh5);
  		$('.bgImage5').one('click', myCh6);
  		$('.bgImage6').one('click', myCh7);
		});
		/////////////////////////////////////////////////////////
	$('.bgImage4').one('click', myCh5);
	$('.bgImage5').one('click', myCh6);
	$('.bgImage6').one('click', myCh7);
});
// forest slide and changeSideImgw counter
$(document).ready(function() {	
	$('.arrowRight').click(function() {
		index++;
		if (index == anyArr.length) {
			index = 0;
		}
		$('#imgContent').attr('src', anyArr[index]);
// change attr href for magnific
		var atrRight = $('#imgContent').attr('src');
		$('#popupRight').attr('href', atrRight);
		$('#num').attr('src', locationObj.numbers[index]);
	});
	$('.arrowLeft').click(function() {
		index--;
		if (index < 0) {
			index = anyArr.length - 1;
		}
		$('#imgContent').attr("src", anyArr[index]);
		var atrRight = $('#imgContent').attr('src');
		$('#popupRight').attr('href', atrRight);
		$('#num').attr('src', locationObj.numbers[index]);
	});
});

// replace header text
function replaceFText() {
	if ($(window).outerWidth() <= '992') {
		replaceForestTextRight();
	} else {
		replaceForestTextLeft();
	}
}
function replaceForestTextRight() {
	$('#headerLeftSection').insertAfter($('.galleryDeg1'));
}
function replaceForestTextLeft(){
	$('#headerLeftSection').insertBefore($('.galleryDeg1Left'));
}

$(window).on('load resize', replaceFText);


//animal section
// hide animal text
$(document).ready(function() {
	$('.animal').mouseenter(F_in);
	$('.animal').mouseleave(F_out);
	function F_in() {
		$('.animal:hover p').css({'transition': 'opacity .5s', 'opacity': '0'})
	}
	function F_out() {
		$('.animal p').css('opacity', '1');
  }  
});
//////////////////////////////////////////////////////
//own Friends section
$(document).ready(function() {
	$('.afterGlacierHead').on('click load', changeCard);
	$(window).on('resize', restoreImg);

	var counterImg = 1, arrObj = [
		  {
		  	url:'url(/img/images/ownFriends/bear2.jpg',
				headerText: 'Медведь',
				bodyText: 'Лесной тяжеловес, любитель мёда.',
				bgp: '0 0',
				miniDisLeft: 'url(/img/images/ownFriends/bear/1.jpg)',
				miniDisRight: 'url(/img/images/ownFriends/bear2/1.jpg)'
			},
	    {
	    	url:'url(/img/images/ownFriends/eagle2.jpg',
				headerText: 'Орёл',
				bodyText: 'Крылатый истребитель, гроза неба.',
				bgp: '-30px 0',
				miniDisLeft: 'url(/img/images/ownFriends/bird/1.jpg)',
				miniDisRight: 'url(/img/images/ownFriends/bird2/1.jpg)'
			},
	    {
	    	url:'url(/img/images/ownFriends/wolf2.jpg',
				headerText: 'Волк',
				bodyText: 'Серый волк, зубами щёлк.',
				bgp: '-20px 0',
				miniDisLeft: 'url(/img/images/ownFriends/wolf/1.jpg)',
				miniDisRight: 'url(/img/images/ownFriends/wolf2/1.jpg)'
			}
	];
	
	function changeCard() {
		if ($(window).outerWidth() < '1150') {
			$('.angle12Center').css('background-image', arrObj[counterImg].url);
			$('.angle12Center').css('background-position', arrObj[counterImg].bgp);
			$('.inImgLeft').css('background-image', arrObj[counterImg].miniDisLeft);
			$('.inImgRight').css('background-image', arrObj[counterImg].miniDisRight);
			$('.cardTextHead2').text(arrObj[counterImg].headerText);
			$('.cardTextBody2').text(arrObj[counterImg].bodyText);
			counterImg++;
			$('.lb img').attr('src', locationObj.numbers[0]);
			$('.rb img').attr('src', locationObj.numbers[0]);
			if (counterImg == arrObj.length) {
		 		counterImg = 0;
		 	  CountEagleL = 1, CountBearL = 1, CountWolfL = 1;
			  CountEagleR = 1, CountBearR = 1, CountWolfR = 1;
			}
		}
	}
	// restore Img on large display
	function restoreImg() {
		if ($(window).outerWidth() > '1150' || $(window).outerWidth() < '768') {
		$('.angle12Center').css('background-image', arrObj[0].url);
		$('.cardTextHead2').text(arrObj[0].headerText);
		$('.cardTextBody2').text(arrObj[0].bodyText);
		counterImg = 1;
		CountEagleL = 1, CountBearL = 1, CountWolfL = 1;
		CountEagleR = 1, CountBearR = 1, CountWolfR = 1;
		} else {
			$('.inImgLeft').css('background-image', 'url(/img/images/ownFriends/bear/1.jpg)');
			$('.inImgRight').css('background-image', 'url(/img/images/ownFriends/bear2/1.jpg)');
			$('.lb img').attr('src', locationObj.numbers[0]);
			$('.rb img').attr('src', locationObj.numbers[0]);
		}
	}
	var leftMiniDispArr = {
		eagleLeft: [
			'url(/img/images/ownFriends/bird/1.jpg)',
			'url(/img/images/ownFriends/bird/2.jpg)',
			'url(/img/images/ownFriends/bird/3.jpg)',
			'url(/img/images/ownFriends/bird/4.jpg)',
			'url(/img/images/ownFriends/bird/5.jpg)'
		],
		bearLeft: [
			'url(/img/images/ownFriends/bear/1.jpg)',
			'url(/img/images/ownFriends/bear/2.jpg)',
			'url(/img/images/ownFriends/bear/3.jpg)',
			'url(/img/images/ownFriends/bear/4.jpg)',
			'url(/img/images/ownFriends/bear/5.jpg)'
		],
		wolfLeft: [
			'url(/img/images/ownFriends/wolf/1.jpg)',
			'url(/img/images/ownFriends/wolf/2.jpg)',
			'url(/img/images/ownFriends/wolf/3.jpg)',
			'url(/img/images/ownFriends/wolf/4.jpg)',
			'url(/img/images/ownFriends/wolf/5.jpg)'
		],
		eagleRight: [
			'url(/img/images/ownFriends/bird2/1.jpg)',
			'url(/img/images/ownFriends/bird2/2.jpg)',
			'url(/img/images/ownFriends/bird2/3.jpg)',
			'url(/img/images/ownFriends/bird2/4.jpg)',
			'url(/img/images/ownFriends/bird2/5.jpg)'
		],
		bearRight: [
			'url(/img/images/ownFriends/bear2/1.jpg)',
			'url(/img/images/ownFriends/bear2/2.jpg)',
			'url(/img/images/ownFriends/bear2/3.jpg)',
			'url(/img/images/ownFriends/bear2/4.jpg)',
			'url(/img/images/ownFriends/bear2/5.jpg)'
		],
		wolfRight: [
			'url(/img/images/ownFriends/wolf2/1.jpg)',
			'url(/img/images/ownFriends/wolf2/2.jpg)',
			'url(/img/images/ownFriends/wolf2/3.jpg)',
			'url(/img/images/ownFriends/wolf2/4.jpg)',
			'url(/img/images/ownFriends/wolf2/5.jpg)'
		]
	};

	var CountEagleL = 1, CountBearL = 1, CountWolfL = 1;
	var CountEagleR = 1, CountBearR = 1, CountWolfR = 1;
// change img mini display on medium display
	function leftBtn() {
	$('.lb').on('mousedown', function() {
		$(this).css('background-image', 'url(/img/favicon/click.png)');
		if (counterImg == 1) {
			$('.inImgLeft').css('background-image', leftMiniDispArr.bearLeft[CountBearL]);
				CountBearL++;
			$('.lb img').attr('src', locationObj.numbers[CountBearL - 1]);
			if (CountBearL == leftMiniDispArr.bearLeft.length) {
				CountBearL = 0;
			}
		}
		if (counterImg == 2) {
			$('.inImgLeft').css('background-image', leftMiniDispArr.eagleLeft[CountEagleL]);
				CountEagleL++;
			$('.lb img').attr('src', locationObj.numbers[CountEagleL - 1]);
			if (CountEagleL == leftMiniDispArr.eagleLeft.length) {
				CountEagleL = 0;
			}
		}
		if (counterImg == 0) {
			$('.inImgLeft').css('background-image', leftMiniDispArr.wolfLeft[CountWolfL]);
				CountWolfL++;
				$('.lb img').attr('src', locationObj.numbers[CountWolfL - 1]);
			if (CountWolfL == leftMiniDispArr.wolfLeft.length) {
				CountWolfL = 0;
			}
		}
	});
	}
	leftBtn();
	function rightBtn() {
	$('.lb').on('mouseup', function() {
		$(this).css('background-image', 'url(/img/favicon/btnUp.png)');
	});

	$('.rb').on('mousedown', function() {
		$(this).css('background-image', 'url(/img/favicon/click.png)');
		if (counterImg == 1) {
			$('.inImgRight').css('background-image', leftMiniDispArr.bearRight[CountBearR]);
				CountBearR++;
				$('.rb img').attr('src', locationObj.numbers[CountBearR - 1]);
			if (CountBearR == leftMiniDispArr.bearRight.length) {
				CountBearR = 0;
			}
		}
		if (counterImg == 2) {
			$('.inImgRight').css('background-image', leftMiniDispArr.eagleRight[CountEagleR]);
				CountEagleR++;
				$('.rb img').attr('src', locationObj.numbers[CountEagleR - 1]);
			if (CountEagleR == leftMiniDispArr.eagleRight.length) {
				CountEagleR = 0;
			}
		}
		if (counterImg == 0) {
			$('.inImgRight').css('background-image', leftMiniDispArr.wolfRight[CountWolfR]);
				CountWolfR++;
				$('.rb img').attr('src', locationObj.numbers[CountWolfR - 1]);
			if (CountWolfR == leftMiniDispArr.wolfRight.length) {
				CountWolfR = 0;
			}
		}
	});
	}
	rightBtn();
// for color button
	$('.rb').on('mouseup', function() {
		$(this).css('background-image', 'url(/img/favicon/btnUp.png)');
	});

// change btn color
	function oNafterGlacierHeadClick() {
		if ($(window).outerWidth() < '1150') {
			$('.afterGlacierHead').on('mousedown', function() {
				$(this).css('background', 'linear-gradient(#2D2E30, #011A28)');
			});
			$('.afterGlacierHead').on('mouseup', function() {
				$(this).css('background', 'linear-gradient(#596269, #3B434B)');
			});
		} 	
	}
	// off btn on when large display
	function offafterGlacierHeadClick() {
		if ($(window).outerWidth() > '1150'){
			$('.afterGlacierHead').off('mousedown mouseup');
		}
	}
	// hide Buttons
	function toggleButton() {
		if ($(window).outerWidth() > '1150') {
			$('.lb, .rb').fadeOut(1000);
		} 
		if ($(window).outerWidth() < '1150') {
			$('.lb, .rb').fadeIn(1000);
		}
	};
	// start btn function
	$(window).on('load resize', toggleButton);
	$(window).on('load resize', oNafterGlacierHeadClick);
	$(window).on('load resize', offafterGlacierHeadClick);
});
//////////////////////////////////////////////////////////////////////
	

// beach section //////////////////////////////////////////////////////////// 
$(document).ready(function() {
	var txt1 = {
		headerText: 'Мальдивские острова',
		bodyText: "Если ваше представление о рае - это нетронутый тропический остров с раскачивающимися пальмами\
							 и белоснежными пляжами, окруженными кристаллическими лагунами различных оттенков синего\
							 - тогда Мальдивские острова наверняка будут отвечать всем требованиям. Неудивительно,\
							 что большой процент туристов, которые приезжают на Мальдивы, являются постоянными посетителями - людьми,\
							 которые приехали однажды и так полюбили это место, что им просто пришлось приехать снова.<br>\
							 Красота Мальдив действительно вызывает привыкание. После того, как вы попробуете пьянящую смесь уединенного спокойствия,\
							 захватывающих занятий водными видами спорта, успокаивающих спа-салонов,\
							 расслабляющих пляжей - все в роскошном комфорте современных удобств - вы обязательно захотите испытать это снова.<br>\
							 Солнечные, уникальные и нетронутые, острова Мальдив предлагают вам солнце, независимо от того,\
							 в какое время года вы решите посетить Мальдивы - острова, которые поистине являются раем на Земле."
	};
	var txt2 = {
		headerText: 'Остров Дубай',
		bodyText: "Дубай ежегодно принимает миллионы туристов и бизнесменов со всего мира.\
							 Он может похвастаться непревзойденными отелями, замечательной архитектурой,\
							 а также развлекательными и спортивными мероприятиями мирового уровня. " + "<br>" + "\
							 Дубай - это штат Объединенных Арабских Эмиратов (ОАЭ) расположен на восточном побережье Арабского полуострова,\
							 в юго-западном углу Персидского залива. Известный во всем мире как быстро развивающийся центр международной торговли и инноваций,\
							 Дубай быстро стал одним из самых популярных туристических направлений в мире." 
							
	};
	var txt3 = {
		headerText: 'Канарские острова',
		bodyText: "Не только круглогодичное солнце делает Канарские острова столь популярными,\
							но и и песчаные дюны, вулканы и самые современные произведения искусства.\
						  Более 9 миллионов человек отдыхают на этих островах в Испании каждый год.<br>\
							Тенерифе принимает львиную долю посетителей, за которыми следуют Лансароте, Гран-Канария и Фуэртевентура.\
						  Ближайшая точка острова находится всего в 100 километрах от африканского побережья, и острова унаследовали\
						  большую часть природных ресурсов континента.<br>\
							Тысячи лет вулканической активности оставили свое наследие на Канарских островах.\
							Лансароте, демонстрирует свое вулканическое наследие в национальном парке Тиманфайя.\
							В этом заповеднике на западном побережье острова находится более 100 вулканов.<br>\
							Вдали от шокирующих гор и вулканов, Канарские острова имеют более спокойную сторону.\
							Ла Гомера и Ла Пальма - сонные острова, для которых характерны нетронутые пляжи, сосновые леса и рыбацкие деревни. "
	};
	var txt4 = {
		headerText: 'Сейшельские острова',
		bodyText: "Когда-то Сейшельские острова были укрытием пиратов, в частности Анс Форбанс (Пиратская бухта) на Маэ и Кот-д'Ор на Праслине.<br>\
	             Считается, что знаменитый пират Оливье Левассер спрятал сокровище стоимостью более 160 000 долларов, которое так и осталось не найденным.<br>\
	             На Птичьем острове живет самая тяжелая сухопутная черепаха, живущая в дикой природе, Эсмеральда, которая поднимает весы до 670 фунтов.<br>\
				 			 Остров Моенн в Морском национальном парке Святой Анны, как полагают, преследуется духом, который охраняет захороненные сокровища.<br>\
				 			 Coco de mer, обитающий на островах, производит самое большое семя в мире. Орех отчетливой формы может весить до 33 фунтов.<br>\
				 			 Виктория, столица Сейшельских островов, является самой маленькой в ​​мире, и ее можно легко изучить пешком менее чем за день.<br>\
				 			 На Сейшельских островах обитают одни из самых редких эндемичных птиц, в том числе голоногая сова Скопса, настолько редкая, что когда-то считалось, что её вид вымер, а затем был вновь открыт в 1959 году.<br>\
				 			 Хлебные фрукты очень популярны на Сейшельских островах и могут быть съедены различными способами от жареного до вареного. Легенда гласит, что кто-нибудь, кто ест его на островах, однажды вернется."
	};
	var txt5 = {
		headerText: 'Гавайские острова',
		bodyText: 'Гавайи не похожи ни на одно другое место на земле. Это единственный штат в Соединенных Штатах, состоящий исключительно из островов,\
							 где находится один из самых активных вулканов и самая высокая в мире морская гора. Это также родина современного серфинга и хула.<br>\
							 Гавайи состоит из 8 основных островов; Острова Кауаи, Оаху, Молокаи, Ланаи, Мауи, Ниихау, Кахулаве и Гавайи (Большой остров). Каждый остров имеет свою отличительную индивидуальность и предлагает свои приключения,\
							 развлечения и достопримечательности. Гонолулу является столицей Гавайев и находится на острове Оаху.<br>\
							 Тростниковый сахар, ананасы, цветы и продукция питомниководства являются основными отраслями промышленности. Гавайи также выращивают кофейные зерна, бананы и орехи макадамия.\
							 Туристическая индустрия является крупнейшим источником внешних доходов на Гавайях.' 
	};
	var txt6 = {
		headerText: 'Остров Бали',
		bodyText: 'Бали является самым популярным островным местом отдыха на индонезийском архипелаге.\
							 Остров является домом для древней культуры, которая известна своим теплым гостеприимством.\
							 Экзотические храмы и дворцы на фоне потрясающих природных фонов - вот некоторые из его главных достопримечательностей.\
							 Обед на Бали представляет бесконечный выбор местной кухни.<br>\
							 В дальнем Восточном Бали и северном регионе Бали вы найдете несколько мест для дайвинга мирового класса со спокойными заливами.\
							 Они являются домом для нетронутых коралловых садов, изобилующих красочным морским биоразнообразием.'
	}
	function maldivesClick () {
		// change hilight buttons
		$('.wrapItem3 *, .item6 *').css('box-shadow','');
		$('.maldivesMin1, .maldivesMin2')
		.css('box-shadow', '3px 3px 6px #19B9F5 inset, -3px -3px 6px #19B9F5 inset');
		// change img
		$('#contentImg1').css('box-shadow', 'none').fadeOut('fast', function() {
			$('#contentImg1').attr('src', '/img/images/maldives1.jpg').fadeIn(500);
		});
		if ($(window).outerWidth() >= '992') {
			$('#contentImg2').fadeOut('fast', function() {
				$('#contentImg2').attr('src', '/img/images/maldives2.jpg').fadeIn(500);
			});
		} else {
			$('#contentImg2').attr('src', '/img/images/maldives2.jpg')
		}
		// change text
		$('#contentText, .item1 p').fadeOut('fast', function() {
			$('#contentText').html(txt1.bodyText).fadeIn(500);
			$('.item1 p').text(txt1.headerText).fadeIn(500);
		});
		// off this and on others
		$(this).off('click');
		$('.kanariMin1').off('click').on('click onload', kanariClick);
		$('.dubayMin1').off('click').on('click onload', dubayClick);
		$('.seysheliMin1').off('click').on('click onload', seysheliClick);
		$('.gavaiMin1').off('click').on('click onload', gavaiClick);
		$('.baliMin1').off('click').on('click onload', baliClick);
	};
	// start function
 	$('.maldivesMin1').on('click onload', maldivesClick);

  function kanariClick () {
  	$('.wrapItem3 *, .item6 *').css('box-shadow','');
		$('.kanariMin1, .kanariMin2')
		.css('box-shadow', '3px 3px 6px #19B9F5 inset, -3px -3px 6px #19B9F5 inset');

		$('#contentImg1').fadeOut('fast', function() {
			$('#contentImg1').attr('src', '/img/images/kanari2.jpg').fadeIn(500);
		});
		if ($(window).outerWidth() >= '992') {
			$('#contentImg2').fadeOut('fast', function() {
				$('#contentImg2').attr('src', '/img/images/kanari1.jpg').fadeIn(500);
			});
		} else {
			$('#contentImg2').attr('src', '/img/images/kanari1.jpg');
		}
		$('#contentText, .item1 p').fadeOut('fast', function(){
			$('#contentText').html(txt3.bodyText).fadeIn(500);
			$('.item1 p').text(txt3.headerText).fadeIn(500);
		});
		$(this).off('click');
		$('.maldivesMin1').off('click').on('click onload', maldivesClick);
		$('.dubayMin1').off('click').on('click onload', dubayClick);
		$('.seysheliMin1').off('click').on('click onload', seysheliClick);
		$('.gavaiMin1').off('click').on('click onload', gavaiClick);
		$('.baliMin1').off('click').on('click onload', baliClick);
	};
	$('.kanariMin1').on('click onload', kanariClick);

	function dubayClick () {
  	$('.wrapItem3 *, .item6 *').css('box-shadow','');
		$('.dubayMin1, .dubayMin2')
		.css('box-shadow', '3px 3px 6px #19B9F5 inset, -3px -3px 6px #19B9F5 inset');

		$('#contentImg1').fadeOut('fast',function() {
			$('#contentImg1').attr('src', '/img/images/dubay1.jpg').fadeIn(500);
		});
		if ($(window).outerWidth() >= '992') {
			$('#contentImg2').fadeOut('fast', function() {
				$('#contentImg2').attr('src', '/img/images/dubay2.jpg').fadeIn(500);
			});
		} else {
			$('#contentImg2').attr('src', '/img/images/dubay2.jpg');
		}
		$('#contentText, .item1 p').fadeOut('fast', function(){
			$('#contentText').html(txt2.bodyText).fadeIn(500);
			$('.item1 p').text(txt2.headerText).fadeIn(500);
		});
		$(this).off('click');
		$('.maldivesMin1').off('click').on('click onload', maldivesClick);
		$('.kanariMin1').off('click').on('click onload', kanariClick);
		$('.seysheliMin1').off('click').on('click onload', seysheliClick);
		$('.gavaiMin1').off('click').on('click onload', gavaiClick);
		$('.baliMin1').off('click').on('click onload', baliClick);
	};
	$('.dubayMin1').on('click onload', dubayClick);

	function seysheliClick () {
		$('.wrapItem3 *, .item6 *').css('box-shadow','');
		$('.seysheliMin1, .seysheliMin2')
		.css('box-shadow', '3px 3px 6px #19B9F5 inset, -3px -3px 6px #19B9F5 inset');

		$('#contentImg1').fadeOut('fast', function() {
			$('#contentImg1').attr('src', '/img/images/seysheli2.jpg').fadeIn(500);
		});
		if ($(window).outerWidth() >= '992') {
			$('#contentImg2').fadeOut('fast', function() {
				$('#contentImg2').attr('src', '/img/images/seysheli1.jpg').fadeIn(500);
			});
		} else {
			$('#contentImg2').attr('src', '/img/images/seysheli1.jpg');	
		}
		$('#contentText, .item1 p').fadeOut('fast', function(){
			$('#contentText').html(txt4.bodyText).fadeIn(500);
			$('.item1 p').text(txt4.headerText).fadeIn(500);
		});
		$(this).off('click');
		$('.maldivesMin1').off('click').off('click').on('click onload', maldivesClick);
		$('.kanariMin1').off('click').off('click').on('click onload', kanariClick);
		$('.dubayMin1').off('click').off('click').on('click onload', dubayClick);
		$('.gavaiMin1').off('click').off('click').on('click onload', gavaiClick);
		$('.baliMin1').off('click').off('click').on('click onload', baliClick);
	};
	$('.seysheliMin1').on('click onload', seysheliClick);

	function gavaiClick () {
		$('.wrapItem3 *, .item6 *').css('box-shadow','');
		$('.gavaiMin1, .gavaiMin2')
		.css('box-shadow', '3px 3px 6px #19B9F5 inset, -3px -3px 6px #19B9F5 inset');
		
		$('#contentImg1').fadeOut('fast', function() {
			$('#contentImg1').attr('src', '/img/images/Gavai1.jpg').fadeIn(500);
		});
		if ($(window).outerWidth() >= '992') {
			$('#contentImg2').fadeOut('fast', function() {
				$('#contentImg2').attr('src', '/img/images/Gavai2.jpg').fadeIn(500);
			});
		} else {
			$('#contentImg2').attr('src', '/img/images/Gavai2.jpg');
		}
		$('#contentText, .item1 p').fadeOut('fast', function(){
			$('#contentText').html(txt5.bodyText).fadeIn(500);
			$('.item1 p').text(txt5.headerText).fadeIn(500);
		});
		$(this).off("click");
		$('.maldivesMin1').off('click').on('click onload', maldivesClick);
		$('.kanariMin1').off('click').on('click onload', kanariClick);
		$('.dubayMin1').off('click').on('click onload', dubayClick);
		$('.seysheliMin1').off('click').on('click onload', seysheliClick);
		$('.baliMin1').off('click').on('click onload', baliClick);
	};
		$('.gavaiMin1').on('click onload', gavaiClick);

	function baliClick () {
		$('.wrapItem3 *, .item6 *').css('box-shadow','');
		$('.baliMin1, .baliMin2')
		.css('box-shadow', '3px 3px 6px #19B9F5 inset, -3px -3px 6px #19B9F5 inset');
		
		$('#contentImg1').fadeOut('fast', function() {
			$('#contentImg1').attr('src', '/img/images/bali1.jpg').fadeIn(500);
		});
		if ($(window).outerWidth() >= '992') {
			$('#contentImg2').fadeOut('fast', function() {
				$('#contentImg2').attr('src', '/img/images/bali2.jpg').fadeIn(500);
			});
		} else {
			$('#contentImg2').attr('src', '/img/images/bali2.jpg');
		}
		$('#contentText, .item1 p').fadeOut('fast', function(){
			$('#contentText').html(txt6.bodyText).fadeIn(500);
			$('.item1 p').text(txt6.headerText).fadeIn(500);
		});
		$(this).off("click");
		$('.maldivesMin1').off('click').on('click onload', maldivesClick);
		$('.kanariMin1').off('click').on('click onload', kanariClick);
		$('.dubayMin1').off('click').on('click onload', dubayClick);
		$('.seysheliMin1').off('click').on('click onload', seysheliClick);
		$('.gavaiMin1').off('click').on('click onload', gavaiClick);
	};
	$('.baliMin1').on('click onload', baliClick);
});

// test slide right
function menuF() {
	// show menu btn and img
	if ($(window).outerWidth() <= '600') {
		$('.menuBtn').fadeIn('slow');
		$('.contentImg1').css('opacity', '1');
		$('.item3, .item6').fadeOut(10);
		// hide menu btn and show thumbs
		$('.menuBtn').click(function() {
			$('.menuBtn').fadeOut('slow');
			$('.item3, .item6').fadeIn('slow');
			$('.contentImg1').css('opacity', '.3');
		});	
		// toggle thumbs and btn menu
		$('.item3, .item6').click(function() {
			if  ($(window).outerWidth() <= '600') {
				$('.item3, .item6').fadeOut('slow');
				$('.menuBtn').fadeIn('slow');
				$('.contentImg1').css('opacity', '1');
			}
		});	
		$('#item3').insertAfter($('.wrapMenuBtn'));
		$('.wrapItem3 div:gt(8)').css('display', 'none');
	} else {
		// toggle left thumbs
		$('#item6').css('display', 'none');
		$('.item3').fadeIn(10);
		$('#item3').insertAfter($('.item1'));
		$('.wrapItem3 div:gt(8)').css('display', 'block');
  }
};
	// hide thumbs when mouseleave
  function hideItem3() {
		$(document).ready(function() {
			if ($(window).outerWidth() <= '600') {
				$('body').on('mouseleave', function() {
					$('.item3, .item6').fadeOut('slow');
					$('.menuBtn').fadeIn('slow');
					$('.contentImg1').css('opacity', '1');
				});
			} 
			if ($(window).outerWidth() > '600') {
				$('body').off('mouseleave');
			}
		});
	}

function offonNiceScroll() {
	$(document).ready(function() {
		if ($(window).outerWidth() > '600') {
			$('.wrapItem3').niceScroll({cursorwidth: '6px',
    	autohidemode: true,
   	  zindex: 998,
   	  cursorcolor: 'aqua',
   	  cursorborder: '2px solid grey',
      horizrailenabled: false
  		});
		}
		if ($(window).outerWidth() <= '600') {
			$('.wrapItem3').getNiceScroll().remove();
		}
	});
}

$(document).ready(function() {
	$(window).on('load resize', menuF);
	$(window).on('load resize', hideItem3);
	$(window).on('load resize', offonNiceScroll);
});

//hide angle
$(document).ready(function() {
	$(window).on('load resize', function() {
		hideAngle0();
		hideAngle1();
		hideAngle2();
		hideAngle3();
	});
});



// creating the angle3 section
// function angle3() {
// var angle3Item = $('.bgImg');
// var arrImgUrl = [
// 	'url(/img/images/nature/1.jpg)',
// 	'url(/img/images/nature/2.jpg)',
// 	'url(/img/images/nature/3.jpg)',
// 	'url(/img/images/nature/4.jpg)',
// 	'url(/img/images/nature/5.jpg)',
// 	'url(/img/images/nature/6.jpg)',
// 	'url(/img/images/nature/7.jpg)',
// 	'url(/img/images/nature/8.jpg)',
// 	'url(/img/images/nature/9.jpg)',
// 	'url(/img/images/nature/10.jpg)',
// 	'url(/img/images/nature/11.jpg)',
// 	'url(/img/images/nature/12.jpg)',
// 	'url(/img/images/nature/13.jpg)',
// 	'url(/img/images/nature/14.jpg)',
// 	'url(/img/images/nature/15.jpg)',
// 	'url(/img/images/nature/16.jpg)',
// 	'url(/img/images/nature/17.jpg)',
// 	'url(/img/images/nature/18.jpg)',
// 	'url(/img/images/nature/19.jpg)',
// 	'url(/img/images/nature/20.jpg)',
// 	'url(/img/images/nature/21.jpg)',
// 	'url(/img/images/nature/22.jpg)',
// 	'url(/img/images/nature/23.jpg)',
// 	'url(/img/images/nature/24.jpg)',
// 	'url(/img/images/nature/25.jpg)',
// 	'url(/img/images/nature/26.jpg)',
// 	'url(/img/images/nature/27.jpg)',
// 	'url(/img/images/nature/28.jpg)',
// 	'url(/img/images/nature/29.jpg)',
// 	'url(/img/images/nature/30.jpg)'
	
// ];
//  	var randImageNumber = Math.floor(Math.random() * arrImgUrl.length);
//   var randItemNumber = Math.floor(Math.random() * angle3Item.length);
// 	  setInterval(function() {
//   var randAngle = $(angle3Item[randItemNumber]);
//   var randImgSrc = arrImgUrl[randImageNumber];
  
//   function changeSideImgw() {
// 		var t = 0;

// 	function check() {
// 	  [].forEach.call(angle3Item, function(elem) {
// 		if (randImgSrc == ($(elem).css('background-image').replace('http://localhost:8080','')
// 			.replace('"','').replace('"',''))) {
// 		  t++;
// 		};
// 	});
// 	  if (t == 0) {
// 	  	return true;
//   } else {
// 	  	return false;
//   }
// 	};

// 	function changeImg() {
// 	  t = 0;
//      	randImageNumber = Math.floor(Math.random() * arrImgUrl.length);
//       randImgSrc = arrImgUrl[randImageNumber];
//    	var res = check();
//       if (res == true) {
//         	return;
//     } else {
//         	changeImg();
//     }
//   };
   
//   var res = check();
// 		if (res == true) {
// 		  $(this).css('background-image',
// 	  	randImgSrc).fadeIn(500);
// 		randItemNumber = Math.floor(Math.random() * angle3Item.length);
//     randImageNumber = Math.floor(Math.random() * arrImgUrl.length);
// 	} else { 
// 			changeImg();
// 	}

// 			$(this).css('background-image',
// 				  randImgSrc).fadeIn(500);
// 				 	randItemNumber = Math.floor(Math.random() * angle3Item.length);
// 			   	randImageNumber = Math.floor(Math.random() * arrImgUrl.length);
// 	};

//   function hide() {
// 		randAngle.fadeOut('slow', changeSideImgw);
// 	}
// 	hide();
 
// 	},2000);
// };
// angle3();

//hide 3angle
var w = $('.w2, .w-3');
var p = $('#w2').parent();
function hideAngle0() {
	if ($(window).outerWidth() <= '1242') {
    $('.w2, .w-3').fadeOut('slow', function() {
      w.detach(); 
    });
      return this; 
} else {
  	p.append(w);
 		    $('.w2, .w-3').fadeIn('slow');
}
}
function hideAngle1() {
		if ($(window).outerWidth() <= '1040'){
      $('.wu2, .wu-2').fadeOut('slow');
        return this; 
  } else {
 		  $('.wu2, .wu-2').fadeIn('slow');
	}
}
function hideAngle2() {
	if ($(window).outerWidth() <= '840'){
      $('.w1, .w-2').fadeOut('slow');
        return this; 
	} else {
 		  $('.w1, .w-2').fadeIn('slow');
	}
}
function hideAngle3() {
	if ($(window).outerWidth() <= '635'){
      $('.wu1, .wu-1').fadeOut('slow');
        return this;
	} else {
 		  $('.wu1, .wu-1').fadeIn('slow');
	}
}

/////////////////////////////////////
//random balls
// function changePlaceBalls() {
// 	var parentBalls = $('.balls');
// 	var balls = parentBalls.children();
// 	while (balls.length) {
// 		 parentBalls.append(balls.splice(Math.floor(Math.random() * balls.length), 1)[0]);
// 	}
// setTimeout(changePlaceBalls, 45000);
// };
// changePlaceBalls();
////////////////////////////////////////
// function displayError() {
// 	var items = $('.bottomFooter [class^=line]');
//   	$.each((items), function(i, el) {
//    		setTimeout(function() {
//      		$(el).addClass("animFlicker");
//    		}, (i * 350));
//   	});
// };
// displayError();
/////////////////////////////////////////
// footer contacts
var flagPhone = false, flagSkype = false, flagGmail = false, contactFlag = true;
function movePhoneLeft(event) {
	$(document).ready(function() {
		switch (true) {
			case (( event.data.thisFlag == 'flagPhone') && (flagPhone == false)) :
		 		$(event.data.class).css('left', '0px');
		 		$('.icon-mobile').css('color', '#CBBEAE');
				flagPhone = true;
					break;
			case (( event.data.thisFlag == 'flagPhone') && (flagPhone == true)) :
				$(event.data.class).css('left', event.data.leftHide);
				$('.icon-mobile').css('color', '#ADD8E6');
				flagPhone = false;
					break;
			case (( event.data.thisFlag == 'flagSkype') && (flagSkype == false)) :
		 		$(event.data.class).css('left', '0px');
			 	$('.skype i').css('color', '#CBBEAE');
				flagSkype = true;
					break;
			case (( event.data.thisFlag == 'flagSkype') && (flagSkype == true)) :
				$(event.data.class).css('left', event.data.leftHide);
				$('.skype i').css('color', '#ADD8E6');
				flagSkype = false;
					break;
			case (( event.data.thisFlag == 'flagGmail') && (flagGmail == false)) :
		 		$(event.data.class).css('left', '0px');
			 	$('.icon-mail').css('color', '#CBBEAE');
			 	flagGmail = true;
					break;
			case (( event.data.thisFlag == 'flagGmail') && (flagGmail == true)) :
				$(event.data.class).css('left', event.data.leftHide);
				$('.icon-mail').css('color', '#ADD8E6');
				flagGmail = false;
					break;
		}
	});
}
var conArrData = [ {class: "#phone", leftHide: "-110px", thisFlag: "flagPhone"},
									 {class: "#skype", leftHide: "-110px", thisFlag: "flagSkype"},
									 {class: "#gmail", leftHide: "-170px", thisFlag: "flagGmail"}
								];
$('.phone').on("click", conArrData[0], movePhoneLeft);
$('.skype').on("click", conArrData[1], movePhoneLeft);
$('.gmail').on("click", conArrData[2], movePhoneLeft);
var flagConTime = false, flagContOff = null;
	$('.contacts').on("click", function() {
		switch(true) { 
			case(flagConTime == false): 
				hideContacts();
				setTimeout(function() {
					$('.phone').triggerHandler("click");
					$('.skype').triggerHandler("click");
					$('.gmail').triggerHandler("click");
					$('.fa-address-card').triggerHandler('click');
					$('.icon-handshake-o').triggerHandler('click');

					$('.fa-address-card').off('click');
					$('.icon-handshake-o').off('click');
					$('.phone').off("click");
					$('.skype').off("click");
					$('.gmail').off("click");
					flagContOff = true;
				},1000);
				flagConTime = true; 
				setTimeout(function() {
					flagConTime = false;
				},2000);
		}
	});


function hideContacts() {
	switch (true) {
			case (contactFlag == false && flagPhone || flagSkype || flagGmail == true) :
			// move icon left

				$('#phone, #skype').css('left', '-110px');
				$('#gmail').css('left', '-170px');
				// off icon click
				$('.phone, .skype, .gmail').off('click');
				setTimeout(function() {
					// change icon colors
					$('.contactSection').css('top', '-62px');
					$('.contacts p').css({color: '#ADD8E6'});
					$('.contactSection i').css('color', '#ADD8E6');
					// on click
					setTimeout(function() {
						$('.phone').on("click", {class: "#phone", leftHide: "-110px", thisFlag: "flagPhone"}, movePhoneLeft);
						$('.skype').on("click", {class: "#skype", leftHide: "-110px", thisFlag: "flagSkype"}, movePhoneLeft);
						$('.gmail').on("click", {class: "#gmail", leftHide: "-170px", thisFlag: "flagGmail"}, movePhoneLeft);

					},800);
				},500);
				// restore flags
				contactFlag = true;
				flagPhone = flagSkype = flagGmail = false;
				flagContOff = true;
				// hide support text
				$('.wrapperP p').css('left', '-165px');
				$('.icon-handshake-o').css('color', '#A9D9F2');
				$('.wrapG7 table').css('left', '-200px');
				// f = true;
				// change support overflow
				$('.wrapperP').css({'overflow': 'visible'});
				// icon support changeSideImgw
				$('.icon-handshake-o').css({'left': '-35px'});
				// hide author
				$('.headerThis p').css({'left': '-165px'}).removeClass('opacity');
				// change header overflow
				$('.headerThis').css({'overflow': 'visible'});
				$('.fa-address-card').css('color', '#A9D9F2');
				$('.g6Cont').css({'left': '-160px', 'opacity': '0'});

				setTimeout(function() {
					$('.g6Cont p').css({'animation': ''});
					// flagAuthor = false;
				},750);
				$('.icon-comment-empty').css({'left': '-15px', 'position': 'relative'});
				// off click author and support

				break;
			case (contactFlag == false) :
				// hide support text
				$('.wrapperP p').css('left', '-165px');
				$('.icon-handshake-o').css('color', '#A9D9F2');
				$('.wrapG7 table').css('left', '-200px');
				f = true;
				// change support overflow
				$('.wrapperP').css({'overflow': 'visible'});
				// icon support changeSideImgw
				$('.icon-handshake-o').css({'left': '-35px'});
				// hide author text
				$('.headerThis p').css({'left': '-165px'});
				// change header overflow
				$('.headerThis').css({'overflow': 'visible'});
				$('.fa-address-card').css('color', '#A9D9F2');
				$('.g6Cont').css({'left': '-160px', 'opacity': '0'});
				setTimeout(function() {
					$('.g6Cont p').css({'animation': ''});
					flagAuthor = false;
				},750);
				$('.icon-comment-empty').css({'left': '-15px', 'position': 'relative'});// icon author changeSideImgw
        //////////////////////////////////////////////////////
        // top contacts
				$('#phone, #skype').css('left', '-110px');
				$('#gmail').css('left', '-170px');
				$('.contactSection').css('top', '-62px');
				$('.contacts p').css({color: '#ADD8E6'});
				$('.contactSection i').css('color', '#ADD8E6');
			 	contactFlag = true;

		  	break;
			case (contactFlag == true) :
				// icon support changeSideImgw
				$('.icon-handshake-o').css({'left': '-6px', 'color': '#CBBEAE'});
				// icon author changeSideImgw
				$('.g6Cont').css({'left': '-160px', 'opacity': '0'});
				$('.icon-comment-empty').css({'left': '10px', 'position': 'relative'});
				// changeSideImgw contacts
				$('.contactSection').css('top', '-14px');
				$('.contacts p').css({color: '#CBBEAE'});
		 		contactFlag = false;
		 		// for author section
		 		setTimeout(function() {
			 		$('.fa-address-card').css('color', '#CBBEAE');
					// header movie
					$('.headerThis p').css({'left': '-15px'});
					// change header overflow
					$('.headerThis').css({'overflow': 'hidden'});
					// slide content
					$('.g6Cont').css({'left': '0px', 'opacity': '1'});
					// move the text to top
					$('.g6Cont p').css({'animation': 'textUp 20s linear infinite'});
		 		// of support
					$('.wrapperP').css({'overflow': 'hidden'});
					$('.wrapperP p').css('left', '13px');
					$('.icon-handshake-o').css('color', '#CBBEAE');
					$('.wrapG7 table').css('left', '0px');
					// f = false;

		 		},1000)
		  	break;
	}
}
//////////////////////////////////////////////////////


// about author


var flagAuthor = false;
function hideHeader() {	
	switch (true) {
		case (flagAuthor == false) :
			// icon color
			$('.fa-address-card').css('color', '#CBBEAE');
			// header movie
			$('.headerThis p').css({'left': '-15px'});
			// change header overflow
			$('.headerThis').css({'overflow': 'hidden'});
			// slide content
			$('.g6Cont').css({'left': '0px', 'opacity': '1'});
			// move the text to top
			$('.g6Cont p').css({'animation': 'textUp 20s linear infinite'});
			setTimeout(function() {
				flagAuthor = true;
			},850);

		break;
		case (flagAuthor == true) :
		// function hide()
			$('.fa-address-card').css('color', '#A9D9F2');
			$('.headerThis p').css('left', '-155px');
			$('.g6Cont').css({'left': '-160px', 'opacity': '0'});
			setTimeout(function() {
				$('.g6Cont p').css({'animation': ''});
				flagAuthor = false;
			},750);
		break;
	}
}
///////////////////////////////////


var f = true;
	$('.icon-handshake-o').on('click', hideHeader2);
		function hideHeader2() {
			switch(true) {
				case (f == false) :
					$('.wrapperP p').css('left', '-165px');
					$('.icon-handshake-o').css('color', '#A9D9F2');
					$('.wrapG7 table').css('left', '-200px');
					f = true;
				break;
				case (f == true) :
					// change support overflow property
					$('.wrapperP').css({'overflow': 'hidden'});
					$('.wrapperP p').css('left', '13px');
					$('.icon-handshake-o').css('color', '#CBBEAE');
					$('.wrapG7 table').css('left', '0px');
					f = false;
				break;
			}
		}
///////////////////////////////////////////

var textContentBook = [
	{"text":"", "img":"url(/img/images/nature2.png)"},
	{"text":"", "img":"url(/img/images/nature/1.jpg)"},
	{"text":"", "img":"url(/img/images/nature/2.jpg)"},
	{"text":"", "img":"url(/img/images/nature/3.jpg)"},
	{"text":"", "img":"url(/img/images/nature/4.jpg)"},
	{"text":"", "img":"url(/img/images/nature/5.jpg)"},
	{"text":"", "img":"url(/img/images/nature/6.jpg)"},
	{"text":"", "img":"url(/img/images/nature/7.jpg)"},
	{"text":"", "img":"url(/img/images/nature/8.jpg)"},
	{"text":"", "img":"url(/img/images/nature/9.jpg)"},
	{"text":"", "img":"url(/img/images/nature/10.jpg)"},
	{"text":"", "img":"url(/img/images/nature/11.jpg)"},
	{"text":"", "img":"url(/img/images/nature/12.jpg)"},
	{"text":"", "img":"url(/img/images/nature/13.jpg)"},
	{"text":"", "img":"url(/img/images/nature/14.jpg)"},
	{"text":"", "img":"url(/img/images/nature/15.jpg)"},
	{"text":"", "img":"url(/img/images/nature/16.jpg)"},
	{"text":"", "img":"url(/img/images/nature/17.jpg)"},
	{"text":"", "img":"url(/img/images/nature/18.jpg)"},
	{"text":"", "img":"url(/img/images/nature/19.jpg)"},
	{"text":"", "img":"url(/img/images/nature/20.jpg)"},
	{"text":"", "img":"url(/img/images/nature/21.jpg)"},
	{"text":"", "img":"url(/img/images/nature/22.jpg)"},
	{"text":"", "img":"url(/img/images/nature/23.jpg)"},
	{"text":"", "img":"url(/img/images/nature/24.jpg)"},
	{"text":"", "img":"url(/img/images/nature/25.jpg)"},
	{"text":"", "img":"url(/img/images/nature/26.jpg)"},
	{"text":"", "img":"url(/img/images/nature/27.jpg)"},
	{"text":"", "img":"url(/img/images/nature/28.jpg)"},
	{"text":"", "img":"url(/img/images/nature/29.jpg)"},
	{"text":"", "img":"url(/img/images/nature/30.jpg)"},
	{"text":"", "img":"url(/img/images/nature2.png)"}
]
// define array length
var textContentBookLength = 0;
for (var x in textContentBook){
  textContentBookLength++;
}
// create arr digits for page naming
var contentPages = [];
for (var i = 0; i < textContentBookLength; i++) {
	contentPages.push(i + 1);
}
// show latest page
$('#numberSite').attr('max', textContentBookLength);
$('#close').text(textContentBookLength);
// initial naming function
var bgL = 0, bgR = 3;
var frR = 1, frRD = 2;
function naming() {
	$(document).ready(function() {
		// bg site
		$('.site01 div.fistDivSite:eq(1) span').text(contentPages[0]);
		$('.site01 div.fistDivSite:eq(1) div p').text(textContentBook[0].text);
		$('.site01 div.fistDivSite:eq(1) div.wrapPages').css('background-image',textContentBook[0].img);
		$('.site01 div.fistDivSite:eq(2) span').text(contentPages[3]);
		$('.site01 div.fistDivSite:eq(2) div p').text(textContentBook[3].text);
		$('.site01 div.fistDivSite:eq(2) div.wrapPages').css('background-image',textContentBook[3].img);
    // front site
		$('.site02 div.fistDivSite:eq(1) span').text(contentPages[1]);
		$('.site02 div.fistDivSite:eq(1) div p').text(textContentBook[1].text);
		$('.site02 div.fistDivSite:eq(1) div.wrapPages').css('background-image',textContentBook[1].img);
		$('.site02 div.fistDivSite:eq(0) span').text(contentPages[2]);
		$('.site02 div.fistDivSite:eq(0) div p').text(textContentBook[2].text);
		$('.site02 div.fistDivSite:eq(0) div.wrapPages').css('background-image',textContentBook[2].img);
		$('.site02 div.fistDivSite:eq(3) span').text(contentPages[0]);
		$('.site02 div.fistDivSite:eq(3) div p').text(textContentBook[0].text);
		$('.site02 div.fistDivSite:eq(3) div.wrapPages').css('background-image',textContentBook[0].img);

		$('#nummberSite').attr('max' , textContentBookLength);
	});
}
naming();
// flags for stopping flipping
var prevFlag = true, nextFlag = false; 
// start function and disable click for the 1 sec
if (is.not.firefox()) {
	$(document).ready(function() {
		$('.site02 div.fistDivSite:eq(1)').on('click', function() {
			if (bgR >= contentPages.length) {
				nextFlag = true;
			}
			if (nextFlag == false) {
				forward();
				nextFlag = true;
				prevFlag = true;
				setTimeout(function() {
					nextFlag = false;
					prevFlag = false;
				},1000);
			}
		});
	// flipping next page
		function forward() {
			// 1/2 anim 90deg
			$('.site02').css({'transition': 'transform .5s' ,
				'opacity': '1', 'transform': 'rotateY(90deg) skewY(10deg)'});
			setTimeout(function() {
				$('.site02 div.fistDivSite:eq(1)').css({'opacity': '0', 'transform': 'rotateY(0deg)'});
				$('.site02 div.fistDivSite:eq(2)').css({'opacity': '0', 'transform': 'rotateY(0deg)'});
				$('.site02 div.fistDivSite:eq(0)').css({'opacity': '1', 'transform': 'rotateY(0deg)'});
				$('.site02 div.fistDivSite:eq(3)').css({'opacity': '0', 'transform': 'rotateY(0deg)'});
				$('.site02').css({'opacity': '1', 'transform': 'rotateY(0deg) skewY(0deg)'});
			},600);
				// 2/2 anim 180deg
			setTimeout(function() {
				$('.site02').css({'transition': 'transform .0s' ,
				'opacity': '1', 'transform': 'rotateY(180deg) skewY(0deg)'});
				$('.site02 div.fistDivSite:eq(0)').css({'opacity': '0', 'transform': 'rotateY(0deg)'});
				$('.site02 div.fistDivSite:eq(2)').css({'opacity': '0', 'transform': 'rotateY(0deg)'});
				$('.site02 div.fistDivSite:eq(1)').css({'opacity': '1', 'transform': 'rotateY(180deg)'});
				$('.site02 div.fistDivSite:eq(3)').css({'opacity': '0', 'transform': 'rotateY(180deg)'});
				// and anim bg
				bgL += 2;
				bgR += 2;
				frR += 2;
				frRD += 2;
					$('.site01 div.fistDivSite:eq(1) span').text(contentPages[bgL]);
					$('.site01 div.fistDivSite:eq(1) div p').text(textContentBook[bgL].text);
					$('.site01 div.fistDivSite:eq(1) div.wrapPages').css('background-image',textContentBook[bgL].img);

				if (bgR < contentPages.length) {
					$('.site01 div.fistDivSite:eq(2) span').text(contentPages[bgR]);
					$('.site01 div.fistDivSite:eq(2) div p').text(textContentBook[bgR].text);
					$('.site01 div.fistDivSite:eq(2) div.wrapPages').css('background-image',textContentBook[bgR].img);
				}
					// anim change front
					$('.site02 div.fistDivSite:eq(1) span').text(contentPages[frR]);
					$('.site02 div.fistDivSite:eq(1) div p').text(textContentBook[frR].text);
					$('.site02 div.fistDivSite:eq(1) div.wrapPages').css('background-image',textContentBook[frR].img);
				if (bgR < contentPages.length) {
					$('.site02 div.fistDivSite:eq(0) span').text(contentPages[frRD]);
					$('.site02 div.fistDivSite:eq(0) div p').text(textContentBook[frRD].text);
					$('.site02 div.fistDivSite:eq(0) div.wrapPages').css('background-image',textContentBook[frRD].img);
		    }
					$('.site02 div.fistDivSite:eq(3) span').text(contentPages[bgL]);
					$('.site02 div.fistDivSite:eq(3) div p').text(textContentBook[bgL].text);
					$('.site02 div.fistDivSite:eq(3) div.wrapPages').css('background-image',textContentBook[bgL].img);
					$('.site02 div.fistDivSite:eq(2) span').text(contentPages[(bgL - 1)]);
					$('.site02 div.fistDivSite:eq(2) div p').text(textContentBook[(bgL - 1)].text);	
					$('.site02 div.fistDivSite:eq(2) div.wrapPages').css('background-image',textContentBook[(bgL - 1)].img);	
				prevFlag = false;
			},1000);
			// return input field
			document.getElementById('numberSite').value = frR + 2;
			numPages = +(document.getElementById('numberSite').value);
		}

		$('.site02 div.fistDivSite:eq(3)').on('click', function() {
			if (bgL == 0) {
				prevFlag = true;
			}
			if (prevFlag == false) {
				previous();
				prevFlag = true;
				nextFlag = true;
				setTimeout(function() {
					prevFlag = false;
					nextFlag = false;
				},1000);
			}
		});
	// slide previous page
		function previous() {
			$('.site02').css({'transition': 'transform 0s',
				'opacity': '1', 'transform': 'rotateY(0deg) skewY(0deg)'});
			$('.site02').css({'transition': 'transform 0s',
				'opacity': '1', 'transform': 'rotateY(0deg) skewY(0deg)'});
			// reverse span
			$('.site02 div.fistDivSite:eq(1) span').css({'left': '3px', 'right': 'initial'});
			bgL -= 2;
			bgR -= 2;
			frR -= 2;
			frRD -= 2;
			$('.site02 div.fistDivSite:eq(0) span').text(contentPages[frRD]);
			$('.site02 div.fistDivSite:eq(0) div p').text(textContentBook[frRD].text);
			$('.site02 div.fistDivSite:eq(0) div.wrapPages').css('background-image',textContentBook[frRD].img);
			$('.site01 div.fistDivSite:eq(1) span').text(contentPages[bgL]);
			$('.site01 div.fistDivSite:eq(1) div p').text(textContentBook[bgL].text);
			$('.site01 div.fistDivSite:eq(1) div.wrapPages').css('background-image',textContentBook[bgL].img);
			$('.site01 div.fistDivSite:eq(2) span').text(contentPages[bgR]);
			$('.site01 div.fistDivSite:eq(2) div p').text(textContentBook[bgR].text);
			$('.site01 div.fistDivSite:eq(2) div.wrapPages').css('background-image',textContentBook[bgR].img);
			$('.site02 div.fistDivSite:eq(1) span').text(contentPages[frRD]);
			$('.site02 div.fistDivSite:eq(1) div p').text(textContentBook[frRD].text);
			$('.site02 div.fistDivSite:eq(1) div.wrapPages').css('background-image',textContentBook[frRD].img);
			$('.site02 div.fistDivSite:eq(3) span').text(contentPages[(frRD - 2)]);
			$('.site02 div.fistDivSite:eq(3) div p').text(textContentBook[(frRD - 2)].text);
			$('.site02 div.fistDivSite:eq(3) div.wrapPages').css('background-image',textContentBook[(frRD - 2)].img);
			// reverse all
			$('.site02 div.fistDivSite:eq(0)').css({'opacity': '0', 'transform': 'rotateY(180deg)'});
			$('.site02 div.fistDivSite:eq(1)').css({'opacity': '1', 'transform': 'rotateY(0deg)'});
			$('.site02 div.fistDivSite:eq(2)').css({'opacity': '0', 'transform': 'rotateY(180deg)'});
			$('.site02 div.fistDivSite:eq(3)').css({'opacity': '0', 'transform': 'rotateY(0deg)'});
			// 1/2 anim 90deg
			setTimeout(function() {
				// reverse span
				$('.site02 div.fistDivSite:eq(1) span').css({'left': 'initial', 'right': '3'});
				$('.site02').css({'transition': 'transform .5s',
					'opacity': '1', 'transform': 'rotateY(90deg) skewY(10deg)'});
			},40);
			setTimeout(function() {
				// reverse span
				$('.site02 div.fistDivSite:eq(1) span').css({'right': '3px', 'left': 'initial'});
				$('.site02 div.fistDivSite:eq(1) span').text(contentPages[frR]);
				$('.site02 div.fistDivSite:eq(1) div p').text(textContentBook[frR].text);
				$('.site02 div.fistDivSite:eq(1) div.wrapPages').css('background-image',textContentBook[frR].img);
				$('.site02 div.fistDivSite:eq(0)').css({'opacity': '0', 'transform': 'rotateY(180deg)'});
				$('.site02 div.fistDivSite:eq(1)').css({'opacity': '1', 'transform': 'rotateY(180deg)'});
				$('.site02 div.fistDivSite:eq(2)').css({'opacity': '0', 'transform': 'rotateY(180deg)'});
				$('.site02 div.fistDivSite:eq(3)').css({'opacity': '0', 'transform': 'rotateY(180deg)'});
				$('.site02').css({'opacity': '1', 'transform': 'rotateY(180deg) skewY(0deg)'});
			},600);
			// 2/2 anim 180deg
			setTimeout(function() {
				$('.site02').css({'transition': 'transform 1s' ,
				'opacity': '1', 'transform': 'rotateY(180deg) skewY(0deg)'});
				// reverse span
				$('.site02 div.fistDivSite:eq(1) span').css({'right': '3px', 'left': 'initial'});
				
				$('.site02 div.fistDivSite:eq(0)').css({'opacity': '0', 'transform': 'rotateY(0deg)'});
				$('.site02 div.fistDivSite:eq(2)').css({'opacity': '0', 'transform': 'rotateY(0deg)'});
				$('.site02 div.fistDivSite:eq(1)').css({'opacity': '1', 'transform': 'rotateY(180deg)'});
				$('.site02 div.fistDivSite:eq(3)').css({'opacity': '0', 'transform': 'rotateY(180deg)'});
				nextFlag = false;
				// and anim bg
			},1000);
				// return input field
			document.getElementById('numberSite').value = frR;
			numPages = +(document.getElementById('numberSite').value);
		}
	});
} else {
	// alt displaing for mozila
		$('.site02 div.fistDivSite:eq(1)').on('click', function() {
			if (bgR >= contentPages.length) {
				nextFlag = true;
			}
			if (nextFlag == false) {
				document.getElementById('numberSite').value = frR + 2;
				$('#count2').triggerHandler('click');
				nextFlag = true;
				prevFlag = true;
				setTimeout(function() {
					nextFlag = false;
					prevFlag = false;
				},1000);
			}
		});
		$('.site02 div.fistDivSite:eq(3)').on('click', function() {
			if (bgL == 0) {
				prevFlag = true;
			}
			if (prevFlag == false) {
				document.getElementById('numberSite').value = frR - 2;
				$('#count2').triggerHandler('click');
				prevFlag = true;
				nextFlag = true;
				setTimeout(function() {
					prevFlag = false;
					nextFlag = false;
				},1000);
			}
		});
}
var numPages = document.getElementById('numberSite').value;
function getNumberSite() {
	// getting pageIndex from input field and restrict it
  numPages = +(document.getElementById('numberSite').value);
	prevFlag = false, nextFlag = false;
	if (!(numPages % 2) == 1) {
		numPages--;
	};
	if (numPages === undefined || numPages === null ||
		numPages === NaN || numPages <= 0 ) {
		numPages = 1;
		document.getElementById('numberSite').value = 1;
	}
	if (numPages > contentPages.length) {
		numPages = contentPages.length - 1;
		document.getElementById('numberSite').value = contentPages.length;
	}
	// setting index each page
	function standVars() {
		bgL = numPages - 1;
		bgR = numPages + 2;
		frR = numPages;
		frRD = numPages + 1;
	}
	standVars();
	// change all content
	$('.site01 div.fistDivSite:eq(1)')
		.fadeOut('fast')
		.queue(function() {
			$('.site01 div.fistDivSite:eq(1) span').text(contentPages[bgL]);
			$('.site01 div.fistDivSite:eq(1) p').text(textContentBook[bgL].text);
			$('.site01 div.fistDivSite:eq(1) div.wrapPages').css('background-image',textContentBook[bgL].img);
			$(this).dequeue();
		});
	$('.site01 div.fistDivSite:eq(1)').fadeIn('fast');
    //////////////////////////////////////
	$('.site01 div.fistDivSite:eq(2)').css('opacity', '0');
	$('.site01 div.fistDivSite:eq(2) span').text(contentPages[frR]);
	$('.site01 div.fistDivSite:eq(2) p').text(textContentBook[frR].text);
	$('.site01 div.fistDivSite:eq(2) div.wrapPages').css('background-image',textContentBook[frR].img);
	$('.site02 div.fistDivSite:eq(1)')
		.fadeOut('fast')
		.queue(function() {
			$('.site02 div.fistDivSite:eq(1) span').text(contentPages[frR]);
			$('.site02 div.fistDivSite:eq(1) p').text(textContentBook[frR].text);
			$('.site02 div.fistDivSite:eq(1) div.wrapPages').css('background-image',textContentBook[frR].img);
			$(this).dequeue();
		});
	$('.site02 div.fistDivSite:eq(1)').fadeIn('fast');
	if (bgR < contentPages.length) {
		$('.site02 div.fistDivSite:eq(0) span').fadeOut('fast').text(contentPages[frRD]).fadeIn('fast');
		$('.site02 div.fistDivSite:eq(0) p').fadeOut('fast').text(textContentBook[frRD].text).fadeIn('fast');
		$('.site02 div.fistDivSite:eq(0) div.wrapPages').fadeOut('fast').css('background-image',textContentBook[frRD].img).fadeIn('fast');
	}
		$('.site02 div.fistDivSite:eq(3) span').fadeOut('fast').text(contentPages[bgL]).fadeIn('fast');
		$('.site02 div.fistDivSite:eq(3) p').fadeOut('fast').text(textContentBook[bgL].text).fadeIn('fast');
		$('.site02 div.fistDivSite:eq(3) div.wrapPages').fadeOut('fast').css('background-image',textContentBook[bgL].img).fadeIn('fast');
	if (bgL >= 1) {
		$('.site02 div.fistDivSite:eq(2) span').fadeOut('fast').text(contentPages[(bgL - 1)]).fadeIn('fast');
		$('.site02 div.fistDivSite:eq(2) p').fadeOut('fast').text(textContentBook[(bgL - 1)].text).fadeIn('fast');
		$('.site02 div.fistDivSite:eq(2) div.wrapPages').fadeOut('fast').css('background-image',textContentBook[(bgL - 1)].img).fadeIn('fast');
	}
	if (bgR < contentPages.length) {
		$('.site01 div.fistDivSite:eq(2) span').fadeOut('fast').text(contentPages[bgR]).fadeIn('fast');
		$('.site01 div.fistDivSite:eq(2) p').fadeOut('fast').text(textContentBook[bgR].text).fadeIn('fast');
		$('.site01 div.fistDivSite:eq(2) div.wrapPages').fadeOut('fast').css('background-image',textContentBook[bgR].img).fadeIn('fast');
	}
	setTimeout(function() {
		$('.site01 div.fistDivSite:eq(2)').css('opacity', '1');
	},400)
}

var secTime = false;
$('#count2').on('click load', function() {
	// if not current state pages
	if (!(numPages == document.getElementById('numberSite').value || numPages == (document.getElementById('numberSite').value) - 1)) { 
	// 
 	if (secTime === false) {
 		getNumberSite();
 	} else {
 		return false;
 	}
 		secTime = true;
 		setTimeout(function() {
 			secTime = false;
 		},500);
	}
});

// incline the book
function inclineBooK() {
	$('.grid3').addClass('grid3Hover');
}
function removeIncline() {
	$('.grid3').removeClass('grid3Hover');
}
// close and open book
function closeOpenBook() {
	switch(true) {
		case ($('.grid3').hasClass('closeBook')) :
		inclineBooK();
		// changeSideImgwToggles();
      $('.bookCover').toggleClass('closeBook'),
			setTimeout(function() {
			 	$('.grid3').toggleClass('closeBook');
				$('#numberSite, #bu, #leftSlide, #rightSlide, #count, #count2, #close').fadeIn(500);
			},600);
			// hide buttons
			$('#appearance').fadeOut(500).off('click');
	    break;
	  case ($('.bookCover').hasClass('closeBook')) :
	  removeIncline();
      $('.grid3').toggleClass('closeBook'),
			setTimeout(function() {
				$('.bookCover').toggleClass('closeBook');
			},600);
			// changeSideImgw buttons
			$('#numberSite, #bu, #leftSlide, #rightSlide, #count, #count2, #close').fadeOut(500);
			$('#appearance').fadeIn(500).on('click', appearance);
   	  break;
  }
}
$(document).ready(function() {
	$('#numberSite, #bu, #leftSlide, #rightSlide, #count, #count2, #close').fadeOut(500); // hide slide buttons panel
	$('.bookCover').addClass('appearance');
	// start function
	$('.bookCover, #count').on('click', closeOpenBook);
	$('#appearance').on('click', appearance);
	$('#leftSlide').on('click', leftButton);
	$('#rightSlide').on('click', rightButton);
});
// appearance book
function appearance() {
	switch(false) {
		case ($('.bookCover').hasClass('appearance')) :
			$('.bookCover').toggleClass('appearance');
			$('.someButifulText').css({'opacity': '1'});
		break;
		case (!$('.bookCover').hasClass('appearance')) :
		  $('.bookCover').toggleClass('appearance');
			$('.someButifulText').css({'opacity': '0'});
		break;
	}
}
// toggle text
$(window).on('resize load', function() {
	switch(true) {
		case ($(window).outerWidth() < '920') :
			$('.someButifulText').css({'opacity': '1'});
			// $('.bookCover').css({'opacity': '0'});
		break;
		case ($(window).outerWidth() >= '920') :
			if (!$('.bookCover').hasClass('appearance')) {
				$('.someButifulText').css({'opacity': '0'});
			}
		break;
	}
});

// action for left and right button page
function leftButton() {
	if (document.getElementById('numberSite').value > 1) {
		document.getElementById('numberSite').value--;
	}
}
function rightButton() {
	if (document.getElementById('numberSite').value < textContentBookLength) {
		document.getElementById('numberSite').value++;
	}
}
function resetMaxLengthPages() {
	if (document.getElementById('numberSite').value > textContentBookLength) {
		document.getElementById('numberSite').value = textContentBookLength;
	}
	if (document.getElementById('numberSite').value < 1) {
		document.getElementById('numberSite').value = 1;
	}
}
$(document).ready(function() {
	$('#numberSite').on('blur', resetMaxLengthPages);
});

// change section 'reviews' and hide it
// start functions
	$('.icon-to-end').on('click', rightSectionArrTxt, changeReviews);
	$('.footerRight').on('click', hideReviews);

// content reviews
var rightSectionArrTxt = [
	{
		'header': 'Владимир',
		'body': 'Я получил настоящее эстетическое наслаждение после прочтения статей этого сайта. Долго любовался пейзажами, так как обожаю природу.'
	},
	{
		'header': 'Юлия',
		'body': 'Начала рассматривать картинки и даже не заметила как пролетел вечер, настолько мне было интересно здесь находиться.'
	},
	{
		'header': 'Максим',
		'body': 'Ни разу не был на море, а этот сайт в точности мне передал его атмосферу. Уже начал копить деньги для слейдующего отпуска.'
	}
];
var counter = 0;
function changeReviews() {
	//change body text
	$('.f1Content p.bt')
		.css({'transform': 'rotateX(90deg) scale(0, 0)'})
	setTimeout(function() {
		$('.f1Content p.bt').text(rightSectionArrTxt[counter].body);
		$('.f1Content p.bt').css({'transform': 'rotateX(0deg) scale(1, 1)'});
	},150);
	//change header
	$('.f1Header p.ht')
		.css({'transform': 'rotateX(90deg) scale(0, 0)'})
	setTimeout(function() {
		$('.f1Header p.ht').text(rightSectionArrTxt[counter].header);
		$('.f1Header p.ht').css({'transform': 'rotateX(0deg) scale(1, 1)'});
	},150);
	counter++;
	if (counter == rightSectionArrTxt.length) {
		counter = 0;
	}
}
// hide reviews
var	flagT = true;
function hideReviews() {
	switch(true) {
		case (flagT == false):
			$('.f1Header, .f1Content').css({'opacity': '0'});
			$('.footerRight p, .icon-to-end').css({'color': 'rgb(169, 217, 242)'});
			flagT = true;
		break;
		case (flagT == true):
			$('.f1Header, .f1Content').css({'opacity': '1'});
			$('.footerRight p, .icon-to-end').css({'color': '#CBBEAE'});
			flagT = false;
	  break;
	}
}
// hide footerRight sideBar initially
$(document).ready(function() {
	$('.f1Header, .f1Content').css({'opacity': '0'});
});

////////////////////////////////////////
// preloader
$(window).one('load', function() {
	setTimeout(function() {
		$('.wrapperLoader').fadeOut('slow');
	},250);
});
///////////////////////////////////////////
//smoothScroll to id
$(document).ready(function() {
	if ($(window).outerWidth() > 768) {
		(function() {
		  $(window).on("load",function(){
		    $("a[href*='#']").mPageScroll2id({
		    	scrollSpeed: 500,
		    	// onStart:function(){},
		    	// onComplete:function(){}
		    });
		  });
		})(jQuery);
	} 
});


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
  },300);
}, false);
 //////////////////////////////////////////////////////
$(document).ready(function() {
	$(window).on('load resize', function() {
	if ($(window).outerWidth() < 480) {
		$('body').addClass('animated');
	} else {
		$('body').removeClass('animated');
	}
	});
});
