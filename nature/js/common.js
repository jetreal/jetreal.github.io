'use strict'
$(document).ready(function() {
	setTimeout(function() {
		$(window).trigger('resize');
	},1000);
});

// start forest function without flicker when reload page
$(window).on('load', function() {
	$('.bgImage3').addClass(dataForest[2].classRemoveHilight);
});
////////////////////////////////////////////////////////////////////////

// magnific Popup
$(window).on('resize load', function() {
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
			mainClass: 'mfp-fade mfp-with-zoom',
			disableOn: 748
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
		},
		disableOn: 748
	});	

});
// disable .popup-modal2 on small devices
function disableMagnific() {
const element = $('#popupRight');
const element2 = $('#imgContent');
	$(window).on('load resize', function() {
		if ($(window).outerWidth() < 768) {
			// remove tag <a> and replace content without <a> 
			$('#imgContent').insertAfter('.galleryImgContent');
			element.detach();
		} else {
			// return <a> link fon magnific
			element.appendTo('.galleryImgContent');
			element2.appendTo(element);
		}
	});
}
disableMagnific();
//disable .test-popup-link
function disableMagnific2() {
	const elementTiger  	= $('#aTiger');
	const elementPanter 	= $('#aPanthera');
	const elementPuma   	= $('#aPuma');
	const elementSnowLeo 	= $('#aSnowBars');
	const elementLion   	= $('#aLion');
	const elementJaguar 	= $('#aJaguar');
	$(window).on('load resize', function() {
		if ($(window).outerWidth() < 768) {
			// remove tag <a> and replace content without <a> 
			$('.tiger').prependTo('.wrapATiger');
			elementTiger.detach();
			$('.panthera').prependTo('.wrapAPanthera');
			elementPanter.detach();
			$('.puma').prependTo('.wrapAPuma');
			elementPuma.detach();
			$('.snowBars').prependTo('.wrapASnowBars');
			elementSnowLeo.detach();
			$('.lion').prependTo('.wrapALion');
			elementLion.detach();
			$('.jaguar').prependTo('.wrapAJaguar');
			elementJaguar.detach();
		} else {
			// return <a> link fon magnific
		  elementTiger.prependTo('.wrapATiger');
		  elementPanter.prependTo('.wrapAPanthera');
		  elementPuma.prependTo('.wrapAPuma');
		  elementSnowLeo.prependTo('.wrapASnowBars');
		  elementLion.prependTo('.wrapALion');
		  elementJaguar.prependTo('.wrapAJaguar');
			$('.tiger').appendTo(elementTiger);
			$('.panthera').appendTo(elementPanter);
			$('.puma').appendTo(elementPuma);
			$('.snowBars').appendTo(elementSnowLeo);
			$('.lion').appendTo(elementLion);
			$('.jaguar').appendTo(elementJaguar);
		}
	});
}
disableMagnific2();
/////////////////////////////////////////////////////////////

// nice scroll
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
function film() {
	var lDivDataObj = [
		{timer: 0, img: 'url(img/images/sky2.webp)', txt: 'Ветер', time: 0},
		{timer: 0, img: 'url(img/images/fireHeaderDisp.webp)', txt: 'Огонь', time: 8000},
		{timer: 0, img: 'url(img/images/waterHeaderDisp.webp)', txt: 'Вода', time: 16000},
		{timer: 0, img: 'url(img/images/earth.webp)', txt: 'Земля', time: 24000}
	]
	var flagi = false;
	var timerHeader1, timerHeader2, timerHeader3, timerHeader4, timerHeader5;
	function headerAnime(iDivDataObj) {
		// change the state
		for (var i = 0; i < lDivDataObj.length; i++) {
			lDivDataObj[i].timer = setTimeout(function(txt, img) {
				wind(txt, img);
			}, lDivDataObj[i].time, lDivDataObj[i].txt, lDivDataObj[i].img);
		}

		timerHeader5 = setTimeout(function() {
			// off button
				// css
				$('.circleImg').attr('src', 'img/images/button3.webp');
				$('.circleImg').css({width:'150px', height:'150px',
				 'box-shadow': '2px 2px 6px gray, -2px -2px 6px gray,\
				 -2px 2px 6px gray, 2px -2px 6px gray'});
				$('.wr17 .into03, .wr17 .into04, .wr17 .into05, .wr17 .into06')
				.css('box-shadow', '2px 2px #7F7F7F inset, -2px -2px #7F7F7F inset,\
					-2px 2px #7F7F7F inset, 2px -2px #7F7F7F inset');
				$('.bDiv').css('border', '1px solid #99747A');
				flagi = false;
		},32000);
	}
	function offTimerHeader() {
		for ( i = 0; i < lDivDataObj.length; i++) {
      clearTimeout(lDivDataObj[i].timer)
		}
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
				$('.circleImg').off('click').one('click', headerAnime);
				$('.circleImg').css({width:'140px',height:'140px',
					'box-shadow': '3px 3px 6px #19B9F5, -3px -3px 6px #19B9F5,\
					-3px 3px 6px #19B9F5, 3px -3px 6px #19B9F5'});
				// css
				$('.circleImg').attr('src', 'img/images/button2.webp');
				$('.wr17 .into03, .wr17 .into04, .wr17 .into05, .wr17 .into06')
				.css('box-shadow', '3px 3px 6px #19B9F5 inset, -3px -3px 6px #19B9F5 inset');
				$('.bDiv').css('border', '1px solid #19B9F5');
				// change flag
				flagi = true;
			break;
			case (flagi == true) :
				$('.circleImg').off('click');
				$('.circleImg').one('click', offTimerHeader);
				// css
				$('.circleImg').attr('src', 'img/images/button3.webp');
				$('.circleImg').css({width:'150px',height:'150px',
				 'box-shadow': '3px 3px 6px gray, -3px -3px 6px gray,\
				 -3px 3px 6px gray, 3px -3px 6px gray'});
				$('.wr17 .into03, .wr17 .into04, .wr17 .into05, .wr17 .into06')
				.css('box-shadow', '3px 3px #7F7F7F inset, -3px -3px #7F7F7F inset');
				$('.bDiv').css('border', '1px solid #99747A');
				// change flag
				flagi = false;
			break;
		}	
	}
	// start function
	$('.circleImg').on('mousedown', mDown);

	// hide button on resize
	var fl = 0;
	$(document).ready(function() {
		$(window).on('resize load', hidechangeSideImgwButton);
	});

	function hidechangeSideImgwButton () {
		if ($('html').outerWidth() < 700 && flagi == false){
	 		fl = 0;
	 		// $('.wr17').css({'display': 'none'});
		 	$('.wrapCircleImg').click(function() {
		 		$('.wr17').css({'transform': 'scale(.0,.0)'});

		 		setTimeout(function() {
		 			flagi = 0;
		 			fl = 0;
		 			$('.wr17').css({'transform': 'scale(.71,.71)'});
		 		}, 32000);

		 	});

	  } else if ($('html').outerWidth() < 700 && flagi == true) {
	  	// offTimerHeader();
	  	 // $('.wrapperImg').css({'background-image': 'url(img/images/waterHeaderDisp.webp)', 'display': 'block'})
			$('.wrapCircleImg').one('click', function() {
				$(window).trigger('resize');
			});

		} else if ($('html').outerWidth() > 700 && flagi == true) {
	  	$('.wrapCircleImg').one('click', function() {
				$(window).trigger('resize');
			});
	  	$('.wrapCircleImg').off('click');	
			if (fl == 0) {
	    	$('.wr17').css({'transform': 'scale(.71,.71)'});
	    	fl++;
			}
		} 
	}
}
film();

///////////////////////////////////////////////////////////
 

///////////////////////////////////////////////////////////////////////
//afterHeader section change image
// obj with imgPositions and centerTexts

var indexO = 0;
// change number 
var dataArr = [
	// first
	{
	  index: 0,
	  classLeft: '.duck',
	  classRight: '.duck2',
	  classText: '.duckText p',
	  Obj : [
	{
		leftSrc: '1000px 0',
		rightSRC: '1200px 0',
		centerTxt: 'Ромашка'
	},
	{
		leftSrc: '1600px 0',
		rightSRC: '1400px 0',
		centerTxt: 'Нарцисс'
	},
	{
		leftSrc: '600px 0',
		rightSRC: '800px 0',
		centerTxt: 'Роза'
	},
	{
		leftSrc: '0px 0',
		rightSRC: '200px 0',
		centerTxt: 'Тюльпан'
	},
	{
		leftSrc: '3600px 0',
		rightSRC: '3400px 0',
		centerTxt: 'Фуксия'
	},
	{
		leftSrc: '2000px 0',
		rightSRC: '1800px 0',
		centerTxt: 'Лилия'
	},
	{
		leftSrc: '2800px 0',
		rightSRC: '2600px 0',
		centerTxt: 'Хризантема'
	},
	{
		leftSrc: '2200px 0',
		rightSRC: '2400px 0',
		centerTxt: 'Колокольчик'
	},
	{
		leftSrc: '3800px 0',
		rightSRC: '4000px 0',
		centerTxt: 'Фиалка'
	},
	{
		leftSrc: '3000px 0',
		rightSRC: '3200px 0',
		centerTxt: 'Гвоздика'
	}
]
	},
	// second
	{
	  index: 0,
	  classLeft: '.ej',
	  classRight: '.ej2',
	  classText: '.textEj p',
	  Obj : [
	{
		leftSrc: '1800px 0',
		rightSRC: '2000px 0',
		centerTxt: 'Малина'
	},
	{
		leftSrc: '3600px 0',
		rightSRC: '3400px 0',
		centerTxt: 'Ежевика'
	},
	{
		leftSrc: '200px 0',
		rightSRC: '400px 0',
		centerTxt: 'Земляника'
	},
	{
		leftSrc: '2200px 0',
		rightSRC: '2400px 0',
		centerTxt: 'Крыжовник'
	},
	{
		leftSrc: '2600px 0',
		rightSRC: '2800px 0',
		centerTxt: 'Клубника'
	},
	{
		leftSrc: '1000px 0',
		rightSRC: '1200px 0',
		centerTxt: 'Смородина'
	},
	{
		leftSrc: '4000px 0',
		rightSRC: '3800px 0',
		centerTxt: 'Черника'
	},
	{
		leftSrc: '600px 0',
		rightSRC: '800px 0',
		centerTxt: 'Вишня'
	},
	{
		leftSrc: '3200px 0',
		rightSRC: '3000px 0',
		centerTxt: 'Голубика'
	},
	{
		leftSrc: '0px 0',
		rightSRC: '4600px 0',
		centerTxt: 'Черешня'
	},
	{
		leftSrc: '4400px 0',
		rightSRC: '4200px 0',
		centerTxt: 'Брусника'
	},
	{
		leftSrc: '1600px 0',
		rightSRC: '1400px 0',
		centerTxt: 'Виноград'
	}
]
	},
	// third
	{
		index: 0,
	 	classLeft: '.catsImg',
	 	classRight: '.catsImg2',
	 	classText: '.catText p',
	 	Obj : [
	{
		leftSrc: '0px 1120px',
		rightSRC: '200px 1120px',
		centerTxt: 'ёж'
	},
	{
		leftSrc: '0 0',
		rightSRC: '200px 0',
		centerTxt: 'Белка'
	},
	{
		leftSrc: '0 840px',
		rightSRC: '200px 840px',
		centerTxt: 'Кабан'
	},
	{
		leftSrc: '0 980px',
		rightSRC: '200px 980px',
		centerTxt: 'Енот'
	},
	{
		leftSrc: '0 1260px',
		rightSRC: '200px 1260px',
		centerTxt: 'Бобр'
	},
	{
		leftSrc: '0 420px',
		rightSRC: '200px 420px',
		centerTxt: 'Олень'
	},
	{
		leftSrc: '0 140px',
		rightSRC: '200px 140px',
		centerTxt: 'Заяц'
	},
	{
		leftSrc: '0 560px',
		rightSRC: '200px 560px',
		centerTxt: 'Лось'
	},
	{
		leftSrc: '0 700px',
		rightSRC: '200px 700px',
		centerTxt: 'Лиса'
	},
	{
		leftSrc: '0 280px',
		rightSRC: '200px 280px',
		centerTxt: 'Сова'
	}
]
	}
]

function changeButtonImage(event, i) {
	switch(true) {
		case (event.target.className == (dataArr[i].classLeft.replace('.',''))) :
			function changeSideImg() {
				$(dataArr[i].classLeft).css('background-position', dataArr[i].Obj[index].leftSrc);
				$(dataArr[i].classRight).css('background-position', dataArr[i].Obj[index].rightSRC);
				$(dataArr[i].classText).text(dataArr[i].Obj[index].centerTxt);
			}
 	    if (index != dataArr[i].Obj.length) {
				index++;
				if (index == dataArr[i].Obj.length) {
					index = 0;
				}
				changeSideImg();
			} else {
				index = 1;
				changeSideImg();
			}
		break;
		case (event.target.className == (dataArr[i].classRight.replace('.',''))) :
			if (index != 0) {
				index--;
				changeSideImg();
				if (index == 0 ) {
					index = dataArr[i].Obj.length;
				}
			} else { 
				index = dataArr[i].Obj.length -1
				changeSideImg();
			}
		break;
	}
}
$(document).ready(function() {
	$('.duck').on('click', function() {
		changeButtonImage(event, 0);
	});
	$('.duck2').on('click', function() {
		changeButtonImage(event, 0);
	});
	$('.ej').on('click', function() {
		changeButtonImage(event, 1);
	});
	$('.ej2').on('click', function() {
		changeButtonImage(event, 1);
	});
	$('.catsImg').on('click', function() {
		changeButtonImage(event, 2);
	});
	$('.catsImg2').on('click', function() {
		changeButtonImage(event, 2);
	});
});
//////////////////////////////////////////////////////////////////////////
// display param

// var scrolled;
// window.onscroll = function() {
//   scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   document.getElementById('changeSideImgwScroll').innerHTML = scrolled + 'px';
// }
// $(window).on('load resize', function(){
// 	var width = $('html').outerWidth();
// 	var height = $(window).height();
// 	$('#width').html(width + 'px');
// 	$('#height').html(height + 'px');
// });
////////////////////////////////////////////////////////////////////////
var locationObj = {
	numbers: [
		'img/images/numbers/1.webp',
		'img/images/numbers/2.webp',
		'img/images/numbers/3.webp',
		'img/images/numbers/4.webp',
		'img/images/numbers/5.webp'
	]
};

var dataForest = [
	{ classAddHilight: 'bgImage1no',
		classRemoveHilight: 'bgImage2no bgImage3no bgImage4no bgImage5no bgImage6no bgImage7no',
		classesForBoxshadow: '.bgImage1, .bgImage1 div, .bgImage1 div div',
		urlContentLeft: 'img/images/rivers/1.webp',
		urlContentRight: 'img/images/rivers/6.webp',
		headText: 'реки',
		bodyText: 'Равнинные реки украшают пейзаж любого континента,\
		реки являются естественной средой обитания для огромного количества животных -\
		рыб, водоплавающих птиц, бобров, различных насекомых.\
		Равнинные реки текут медленно и неспешно. Горные же реки, в свою очередь, несутся с огромной скоростью,\
		и завораживают шумом своих вод.',
		images: [
		'img/images/rivers/1.webp',
		'img/images/rivers/2.webp',
		'img/images/rivers/3.webp',
		'img/images/rivers/4.webp',
		'img/images/rivers/5.webp'
	]
	},
		{ classAddHilight: 'bgImage2no',
		classRemoveHilight: 'bgImage1no bgImage3no bgImage4no bgImage5no bgImage6no bgImage7no',
		classesForBoxshadow: '.bgImage2, .bgImage2 div, .bgImage2 div div',
		urlContentLeft: 'img/images/mountain/1.webp',
		urlContentRight: 'img/images/mountain/6.webp',
		headText: 'горы',
		bodyText: 'Миллионы туристов из разных уголков мира стремятся посетить различные возвышенности,\
		чтобы полюбоваться потрясающей красотой удивительных пейзажей.\
		В этой подборке вы увидите замечательные горные пейзажи во всём своём многообразии. Мы собрали коллекцию самых потрясающих фотографий, на \
		которых запечатлены горы со всего мира.',
		images: [
		'img/images/mountain/1.webp',
		'img/images/mountain/2.webp',
		'img/images/mountain/3.webp',
		'img/images/mountain/4.webp',
		'img/images/mountain/5.webp'
	]
	},
		{ classAddHilight: 'bgImage3no',
		classRemoveHilight: 'bgImage2no bgImage1no bgImage4no bgImage5no bgImage6no bgImage7no',
		classesForBoxshadow: '.bgImage3, .bgImage3 div, .bgImage3 div div',
		urlContentLeft: 'img/images/fields/1.webp',
		urlContentRight: 'img/images/fields/6.webp',
		headText: 'поля',
		bodyText: 'Поля охватывают значительную часть наземного пространства, не имея высокой растительности. \
		За эту особенность их иногда даже называют бескрайними. На полях растут: либо культурные сорта растений и трав, либо дикорастущие. Не имея \
		особых преград, ветер в поле гуляет особенно сильно.',
		images: [
		'img/images/fields/1.webp',
		'img/images/fields/2.webp',
		'img/images/fields/3.webp',
		'img/images/fields/4.webp',
		'img/images/fields/5.webp'
	]
	},
		{ classAddHilight: 'bgImage4no',
		classRemoveHilight: 'bgImage2no bgImage3no bgImage1no bgImage5no bgImage6no bgImage7no',
		classesForBoxshadow: '.bgImage4, .bgImage4 div, .bgImage4 div div',
		urlContentLeft: 'img/images/seas/1.webp',
		urlContentRight: 'img/images/seas/6.webp',
		headText: 'моря',
		bodyText: 'Люди часто используют термин «море» для обозначения океана. Для географов море - это разделение океана, который закрыт или частично закрыт сушей.\
		A для не географов, море - это отличное место, где можно отдохнуть и расслабиться.',
		images: [
		'img/images/seas/1.webp',
		'img/images/seas/2.webp',
		'img/images/seas/3.webp',
		'img/images/seas/4.webp',
		'img/images/seas/5.webp'
	]
	},
		{ classAddHilight: 'bgImage5no',
		classRemoveHilight: 'bgImage2no bgImage3no bgImage4no bgImage1no bgImage6no bgImage7no',
		classesForBoxshadow: '.bgImage5, .bgImage5 div, .bgImage5 div div',
		urlContentLeft: 'img/images/deserts/1.webp',
		urlContentRight: 'img/images/deserts/6.webp',
		headText: 'пустыни',
		bodyText: 'Пустыни - это огромные территории не плодотворных участков почвы,  лишённые практически всякой растительности. \
		Пустыни бывают песчаные, каменистые, глинистые, а также некоторые арктические пространства называют пустынями. \
		Несмотря на суровый климат, пресмыкающиеся, грызуны, \
	  	некоторые птицы и даже такие крупные животные как - верблюды представляют животный мир пустынь. ',
	  images: [
		'img/images/deserts/1.webp',
		'img/images/deserts/2.webp',
		'img/images/deserts/3.webp',
		'img/images/deserts/4.webp',
		'img/images/deserts/5.webp'
	]	
	},
		{ classAddHilight: 'bgImage6no',
		classRemoveHilight: 'bgImage2no bgImage3no bgImage4no bgImage5no bgImage1no bgImage7no',
		classesForBoxshadow: '.bgImage6, .bgImage6 div, .bgImage6 div div',
		urlContentLeft: 'img/images/jungles/1.webp',
		urlContentRight: 'img/images/jungles/6.webp',
		headText: 'джунгли',
		bodyText: 'Джунгли значительно отличаются от северных лесов.\
		В северных лесах пространство между деревьями достаточно обширное, в джунглях же, \
		всё растёт очень плотно. Порой в джунглях невозможно пройти без мачете, необходимого для того, чтоб прорубить\
		очень густую растительность. Джунгли поражают буйством красок и обилием живности.',
		images: [
		'img/images/jungles/1.webp',
		'img/images/jungles/2.webp',
		'img/images/jungles/3.webp',
		'img/images/jungles/4.webp',
		'img/images/jungles/5.webp'
		]
	},
	{ classAddHilight: 'bgImage7no',
		classRemoveHilight: 'bgImage2no bgImage3no bgImage4no bgImage5no bgImage6no bgImage1no',
		classesForBoxshadow: '.bgImage7, .bgImage7 div, .bgImage7 div div',
		urlContentLeft: 'img/images/forest/1.webp',
		urlContentRight: 'img/images/forest/6.webp',
		headText: 'леса',
		bodyText: 'Находясь в лесу человек ощущает умиротворение и покой. Пение птиц и изумительная красота деревьев буквально очаровывают. \
		Каждый лес, будь-то весёлый берёзовый лесок, сосновый бор, или серьёзный ельник прекрасен по своему.\
		Особенно приятно находиться в лесу весной, потому что всё вокруг расцветает. 	',
		images: [
		'img/images/forest/1.webp',
		'img/images/forest/2.webp',
		'img/images/forest/3.webp',
		'img/images/forest/4.webp',
		'img/images/forest/5.webp'
		]
	}
]
	// img Obj path for imgs
var collectionForestThumb = $('.into30 > div > div');
var index = 0;
var anyArr = [];

	function commonForest(i, el) {
// change display
		$('#imgContent').attr('src', dataForest[i].urlContentLeft);
		$('#imgContent2').attr('src', dataForest[i].urlContentRight);

// change miniText
	  $('#headerLeftSection p').text(dataForest[i].headText);

// change attr href for popup
		var atrLeft = $('#imgContent2').attr('src');
		var atrRight = $('#imgContent').attr('src');
		$('#popupLeft').attr('href', atrLeft);
		$('#popupRight').attr('href', atrRight);

// changeSideImgw number
		index = 0;
		$('#num').attr('src', locationObj.numbers[index]);

// change image array
		anyArr = dataForest[i].images;

// change hilight border
		$('.wrapVItem *').css('box-shadow','');
		$(dataForest[i].classesForBoxshadow)
		.css('box-shadow', '3px 3px 6px #FFB352 inset, -3px -3px 6px #FFB352 inset');

// off before
		$('.into31 div:first-child')
		.removeClass(dataForest[i].classRemoveHilight);
// change text
		$('#forestTextContainer').text(dataForest[i].bodyText);
// start others and off self

		$.each((collectionForestThumb), function(i, el) {
			$(el).off('click').on('click', function() {
				commonForest(i, el);
					$(this).off('click');
					$(this).addClass(dataForest[i].classAddHilight)
			});
		});
	}
// start functions
	$.each((collectionForestThumb), function(i, el) {
			$(el).on('click', function() {
				commonForest(i, el);
			});
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
		  	url:'url(img/images/ownFriends/3Animals.webp',
				headerText: 'Медведь',
				bodyText: 'Лесной тяжеловес, любитель мёда.',
				bgp: '0 0',
				miniDisLeft: 'url(img/images/ownFriends/bear/allBears.webp)',
				miniDisRight: 'url(img/images/ownFriends/bear/allBears.webp)'
			},
	    {
	    	url:'url(img/images/ownFriends/3Animals.webp',
				headerText: 'Орёл',
				bodyText: 'Крылатый истребитель, гроза неба.',
				bgp: '-150px 0',
				miniDisLeft: 'url(img/images/ownFriends/bird/allBirds.webp)',
				miniDisRight: 'url(img/images/ownFriends/bird/allBirds.webp)'
			},
	    {
	    	url:'url(img/images/ownFriends/3Animals.webp',
				headerText: 'Волк',
				bodyText: 'Серый волк, зубами щёлк.',
				bgp: '-300px 0',
				miniDisLeft: 'url(img/images/ownFriends/wolf/allWolfs.webp)',
				miniDisRight: 'url(img/images/ownFriends/wolf/allWolfs.webp)'
			}
	];
	
	function changeCard() {
		if ($(window).outerWidth() < '1150') {
			$('.angle12Center').css('background-image', arrObj[counterImg].url);
			$('.angle12Center').css('background-position', arrObj[counterImg].bgp);
			$('.inImgLeft').css({'background-image': arrObj[counterImg].miniDisLeft, 'background-position': '0 0'});
			$('.inImgRight').css({'background-image': arrObj[counterImg].miniDisRight, 'background-position': '-750px 0'});
			$('.cardTextHead2').text(arrObj[counterImg].headerText);
			$('.cardTextBody2').text(arrObj[counterImg].bodyText);
			counterImg++;
			$('.lb img').attr('src', locationObj.numbers[0]);
			$('.rb img').attr('src', locationObj.numbers[0]);
			if (counterImg == arrObj.length) {
		 		counterImg = 0;
		 	  dataBtnFunc[0].countE, dataBtnFunc[0].countB, dataBtnFunc[0].countW;
			  dataBtnFunc[1].countE, dataBtnFunc[1].countB, dataBtnFunc[1].countW;
			}
		}
	}
	// restore Img on large display
	function restoreImg() {
		if ($(window).outerWidth() > '1150' || $(window).outerWidth() < '748') {
		$('.angle12Center').css('background-image', arrObj[0].url);
		$('.angle12Center').css('background-position', arrObj[0].bgp);
		$('.cardTextHead2').text(arrObj[0].headerText);
		$('.cardTextBody2').text(arrObj[0].bodyText);
		counterImg = 1;
		dataBtnFunc[0].countE, dataBtnFunc[0].countB, dataBtnFunc[0].countW;
		dataBtnFunc[1].countE, dataBtnFunc[1].countB, dataBtnFunc[1].countW;
		setTimeout(function() {
			$('.inImgLeft').css({'background-image': 'url(img/images/ownFriends/bear/allBears.webp)', 'background-position': '0 0'});
			$('.inImgRight').css({'background-image': 'url(img/images/ownFriends/bear/allBears.webp)', 'background-position': '-750px 0'});	
		}, 1200);
		} else {
			$('.lb img').attr('src', locationObj.numbers[0]);
			$('.rb img').attr('src', locationObj.numbers[0]);
		}
	}

// change img mini display on medium display
  var dataBtnFunc = [
  // one
	  {
	  	btnClass: '.lb',
	  	displayClass: '.inImgLeft',
	  	countE: 1,
	  	countB: 1,
	  	countW: 1,
	  	img: {
		eagle: [
			'0 0',
			'-150px 0',
			'-300px 0',
			'-450px 0',
			'-600px 0'
		],
		bear: [
			'0 0',
			'-150px 0',
			'-300px 0',
			'-450px 0',
			'-600px 0'
		],
		wolf: [
			'0 0',
			'-150px 0',
			'-300px 0',
			'-450px 0',
			'-600px 0'
			] 
		}
	},
  // two
	  {
	  	btnClass: '.rb',
	  	displayClass: '.inImgRight',
	  	countE: 1,
	  	countB: 1,
	  	countW: 1,
	  	img: { 
		eagle: [
			'-750px 0',
			'-900px 0',
			'-1050px 0',
			'-1200px 0',
			'-1350px 0'
		],
		bear: [
			'-750px 0',
			'-900px 0',
			'-1050px 0',
			'-1200px 0',
			'-1350px 0'
		],
		wolf: [
			'-750px 0',
			'-900px 0',
			'-1050px 0',
			'-1200px 0',
			'-1350px 0'
		]
	  }
  }
	]
  function leftAndRightBtn(i) {
  	$(dataBtnFunc[i].btnClass).on('mouseup', function() {
		$(this).css('background-image', 'url(img/favicon/btnUp.webp)');
	});
	$(dataBtnFunc[i].btnClass).on('mousedown', function() {
		$(this).css('background-image', 'url(img/favicon/click.webp)');
		if (counterImg == 1) {
			$(dataBtnFunc[i].displayClass).css('background-position', dataBtnFunc[i].img.bear[dataBtnFunc[i].countB]);
				dataBtnFunc[i].countB++;
				var elemImg = dataBtnFunc[i].btnClass + ' img';
			$(elemImg).attr('src', locationObj.numbers[dataBtnFunc[i].countB - 1]);
			if (dataBtnFunc[i].countB == dataBtnFunc[i].img.bear.length) {
				dataBtnFunc[i].countB = 0;
			}
		}
		if (counterImg == 2) {
			$(dataBtnFunc[i].displayClass).css('background-position', dataBtnFunc[i].img.eagle[dataBtnFunc[i].countE]);
				dataBtnFunc[i].countE++;
				var elemImg = dataBtnFunc[i].btnClass + ' img';
			$(elemImg).attr('src', locationObj.numbers[dataBtnFunc[i].countE - 1]);
			if (dataBtnFunc[i].countE == dataBtnFunc[i].img.eagle.length) {
				dataBtnFunc[i].countE = 0;
			}
		}
		if (counterImg == 0) {
			$(dataBtnFunc[i].displayClass).css('background-position', dataBtnFunc[i].img.wolf[dataBtnFunc[i].countW]);
				dataBtnFunc[i].countW++;
				var elemImg = dataBtnFunc[i].btnClass + ' img';
				$(elemImg).attr('src', locationObj.numbers[dataBtnFunc[i].countW - 1]);
			if (dataBtnFunc[i].countW == dataBtnFunc[i].img.wolf.length) {
				dataBtnFunc[i].countW = 0;
			}
		}
	});
  }
  leftAndRightBtn(0);
  leftAndRightBtn(1);
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
	$(window).on('load resize', function() {
		toggleButton();
		oNafterGlacierHeadClick();
		offafterGlacierHeadClick();
  });
});
//////////////////////////////////////////////////////////////////////
	

// beach section //////////////////////////////////////////////////////////// 
$(document).ready(function() {
	var	dataBeach = [
		{	
			url1: 'img/images/maldives1.webp',
			url2: 'img/images/maldives2.webp',
			eventClassName: '.maldivesMin1',
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
							},
							{
			url1: 'img/images/dubay1.webp',
			url2: 'img/images/dubay2.webp',
			eventClassName: '.dubayMin1',
			headerText: 'Остров Дубай',
			bodyText: "Дубай ежегодно принимает миллионы туристов и бизнесменов со всего мира.\
							 Он может похвастаться непревзойденными отелями, замечательной архитектурой,\
							 а также развлекательными и спортивными мероприятиями мирового уровня. " + "<br>" + "\
							 Дубай - это штат Объединенных Арабских Эмиратов (ОАЭ) расположен на восточном побережье Арабского полуострова,\
							 в юго-западном углу Персидского залива. Известный во всем мире как быстро развивающийся центр международной торговли и инноваций,\
							 Дубай быстро стал одним из самых популярных туристических направлений в мире." 
							},
    					 {
    	url1: 'img/images/kanari2.webp',
			url2: 'img/images/kanari1.webp',
    	eventClassName: '.kanariMin1',
     	headerText: 'Канарские острова',
			bodyText: "Не только круглогодичное солнце делает Канарские острова столь популярными,\
							но и песчаные дюны, вулканы и самые современные произведения искусства.\
						  Более 9 миллионов человек отдыхают на этих островах в Испании каждый год.<br>\
							Тенерифе принимает львиную долю посетителей, за которыми следуют Лансароте, Гран-Канария и Фуэртевентура.\
						  Ближайшая точка острова находится всего в 100 километрах от африканского побережья, и острова унаследовали\
						  большую часть природных ресурсов континента.<br>\
							Тысячи лет вулканической активности оставили свое наследие на Канарских островах.\
							Лансароте, демонстрирует свое вулканическое наследие в национальном парке Тиманфайя.\
							В этом заповеднике на западном побережье острова находится более 100 вулканов.<br>\
							Вдали от шокирующих гор и вулканов, Канарские острова имеют более спокойную сторону.\
							Ла Гомера и Ла Пальма - сонные острова, для которых характерны нетронутые пляжи, сосновые леса и рыбацкие деревни. "
   					  },
     					{
     	url1: 'img/images/seysheli2.webp',
			url2: 'img/images/seysheli1.webp',
     	eventClassName: '.seysheliMin1',
     	headerText: 'Сейшельские острова',
			bodyText: "Когда-то Сейшельские острова были укрытием пиратов, в частности Анс Форбанс (Пиратская бухта) на Маэ и Кот-д'Ор на Праслине.<br>\
	             Считается, что знаменитый пират Оливье Левассер спрятал сокровище стоимостью более 160 000 долларов, которое так и осталось не найденным.<br>\
	             На Птичьем острове живет самая тяжелая сухопутная черепаха, живущая в дикой природе, Эсмеральда, которая поднимает весы до 670 фунтов.<br>\
				 			 Остров Моенн в Морском национальном парке Святой Анны, как полагают, преследуется духом, который охраняет захороненные сокровища.<br>\
				 			 Coco de mer, обитающий на островах, производит самое большое семя в мире. Орех отчетливой формы может весить до 33 фунтов.<br>\
				 			 Виктория, столица Сейшельских островов, является самой маленькой в ​​мире, и ее можно легко изучить пешком менее чем за день.<br>\
				 			 На Сейшельских островах обитают одни из самых редких эндемичных птиц, в том числе голоногая сова Скопса, настолько редкая, что когда-то считалось, что её вид вымер, а затем был вновь открыт в 1959 году.<br>\
				 			 Хлебные фрукты очень популярны на Сейшельских островах и могут быть съедены различными способами от жареного до вареного. Легенда гласит, что кто-нибудь, кто ест его на островах, однажды вернется."
     					},
     					{
     	url1: 'img/images/Gavai1.webp',
			url2: 'img/images/Gavai2.webp',					
     	eventClassName: '.gavaiMin1',
     	headerText: 'Гавайские острова',
			bodyText: 'Гавайи не похожи ни на одно другое место на земле. Это единственный штат в Соединенных Штатах, состоящий исключительно из островов,\
							 где находится один из самых активных вулканов и самая высокая в мире морская гора. Это также родина современного серфинга и хула.<br>\
							 Гавайи состоит из 8 основных островов; Острова Кауаи, Оаху, Молокаи, Ланаи, Мауи, Ниихау, Кахулаве и Гавайи (Большой остров). Каждый остров имеет свою отличительную индивидуальность и предлагает свои приключения,\
							 развлечения и достопримечательности. Гонолулу является столицей Гавайев и находится на острове Оаху.<br>\
							 Тростниковый сахар, ананасы, цветы и продукция питомниководства являются основными отраслями промышленности. Гавайи также выращивают кофейные зерна, бананы и орехи макадамия.\
							 Туристическая индустрия является крупнейшим источником внешних доходов на Гавайях.' 
   					 	},
   					 	{
   		url1: 'img/images/bali1.webp',
			url2: 'img/images/bali2.webp',
   		eventClassName: '.baliMin1',
     	headerText: 'Остров Бали',
		  bodyText: 'Бали является самым популярным островным местом отдыха на индонезийском архипелаге.\
							 Остров является домом для древней культуры, которая известна своим теплым гостеприимством.\
							 Экзотические храмы и дворцы на фоне потрясающих природных фонов - вот некоторые из его главных достопримечательностей.\
							 Обед на Бали представляет бесконечный выбор местной кухни.<br>\
							 В дальнем Восточном Бали и северном регионе Бали вы найдете несколько мест для дайвинга мирового класса со спокойными заливами.\
							 Они являются домом для нетронутых коралловых садов, изобилующих красочным морским биоразнообразием.'
							}
	];

		var collectionBeach = $('.wrapItem3 > div > div');
		var collectionBeachMin600 = $('.item6 > div > div');
		function commonBeach(i, el) {
			// remove and add box-shadow
			var el2 = '.' + el.className.replace('1', '2');
			$('.wrapItem3 *, .item6 *').css('box-shadow','');
				$(el, el2)
				.css('box-shadow', '3px 3px #19B9F5 inset, -3px -3px #19B9F5 inset');
				$(el2)
				.css('box-shadow', '3px 3px #19B9F5 inset, -3px -3px #19B9F5 inset');
				// change img
				$('#contentImg1').css('box-shadow', 'none').fadeOut('fast', function() {
					$('#contentImg1').attr('src', dataBeach[i].url1).fadeIn(500);
				});
				if ($(window).outerWidth() >= '992') {
					$('#contentImg2').fadeOut('fast', function() {
						$('#contentImg2').attr('src', dataBeach[i].url2).fadeIn(500);
					});
				} else {
					$('#contentImg2').attr('src', dataBeach[i].url2);
				}
				// change text
				$('#contentText, .item1 p').fadeOut('fast', function() {
					$('#contentText').html(dataBeach[i].bodyText).fadeIn(500);
					$('.item1 p').text(dataBeach[i].headerText).fadeIn(500);
				});
				$.each((collectionBeach), function(i, el) {
					$(el).off('click').on('click', function(){
						commonBeach(i, el);
						$(this).off('click');
					});
				});
			}
			// start function for large
			$.each((collectionBeach), function(i, el) {
				$(el).on('click', function() {
					commonBeach(i, el);
				});
			});
			// start function < 600 px 
			$.each((collectionBeachMin600), function(i, el) {
				i += 3;
				$(el).on('click', function() {
					commonBeach(i, el);
				});
			});
		});
		$('.bgImage3').triggerHandler('click');
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
// off Nice scroll when < 600 width on beach section
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
	$(window).on('load resize', function() {
		offonNiceScroll() ;
		menuF() ;
		hideItem3() ;
	});
});

//hide angle

// creating the angle3 section
// function angle3() {
// var angle3Item = $('.bgImg');
// var arrImgUrl = [
// 	'url(img/images/nature/1.webp)',
// 	'url(img/images/nature/2.webp)',
// 	'url(img/images/nature/3.webp)',
// 	'url(img/images/nature/4.webp)',
// 	'url(img/images/nature/5.webp)',
// 	'url(img/images/nature/6.webp)',
// 	'url(img/images/nature/7.webp)',
// 	'url(img/images/nature/8.webp)',
// 	'url(img/images/nature/9.webp)',
// 	'url(img/images/nature/10.webp)',
// 	'url(img/images/nature/11.webp)',
// 	'url(img/images/nature/12.webp)',
// 	'url(img/images/nature/13.webp)',
// 	'url(img/images/nature/14.webp)',
// 	'url(img/images/nature/15.webp)',
// 	'url(img/images/nature/16.webp)',
// 	'url(img/images/nature/17.webp)',
// 	'url(img/images/nature/18.webp)',
// 	'url(img/images/nature/19.webp)',
// 	'url(img/images/nature/20.webp)',
// 	'url(img/images/nature/21.webp)',
// 	'url(img/images/nature/22.webp)',
// 	'url(img/images/nature/23.webp)',
// 	'url(img/images/nature/24.webp)',
// 	'url(img/images/nature/25.webp)',
// 	'url(img/images/nature/26.webp)',
// 	'url(img/images/nature/27.webp)',
// 	'url(img/images/nature/28.webp)',
// 	'url(img/images/nature/29.webp)',
// 	'url(img/images/nature/30.webp)'
	
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
var arrAngle = [
	{
		classesName: '.w2, .w-3',
		windowWidth: '1242',
	},
	{
		classesName: '.wu2, .wu-2',
		windowWidth: '1040',
	},
	{
		classesName: '.w1, .w-2',
		windowWidth: '840',
	},
	{
		classesName: '.wu1, .wu-1',
		windowWidth: '635',
	},
]
function hideAngle(i) {
	if ($(window).outerWidth() <= arrAngle[i].windowWidth) {
	  $(arrAngle[i].classesName).fadeOut('slow');
	  return this; 
	} else {
 	  $(arrAngle[i].classesName).fadeIn('slow');
	}
}
// start functions
function startHideAngle() {
	for (var i = 0; i < arrAngle.length; i++) {
    hideAngle(i);
	}
}
$(document).ready(function() {
	$(window).on('load resize', startHideAngle);
});
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
// $(document).ready(function() {
// 	if ($(window).outerWidth() > 768) {
// 		changePlaceBalls();
// 	}
// });
		
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
var contactFlag = true;

var conArrData = [ {clasName:'.phone', classText: "#phone", leftHide: "-110px", icon:'.icon-mobile', flag: false},
									 {clasName:'.skype', classText: "#skype", leftHide: "-110px", icon:'.skype i', flag: false},
									 {clasName:'.gmail', classText: "#gmail", leftHide: "-170px", icon:'.icon-mail', flag: false}
								];
	function commonSlideContactFunc(i) {
		switch(true) {
			case ((conArrData[i].flag == false)) :
		 		$(conArrData[i].classText).css('left', '0px');
		 		$(conArrData[i].icon).css('color', '#CBBEAE');
				conArrData[i].flag = true;
			break;
			case ((conArrData[i].flag == true)) :
				$(conArrData[i].classText).css('left', conArrData[i].leftHide);
				$(conArrData[i].icon).css('color', '#ADD8E6');
				conArrData[i].flag = false;
			break;
		}		
	}
var arrPSGstart = ['.phone', '.skype', '.gmail'];
function psgStart() {
	$.each((arrPSGstart), function(i, el) {
		$(el).on('click', function() {
			commonSlideContactFunc(i);
		})
	});
}
psgStart();

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
		case (contactFlag == false && conArrData[0].flag || conArrData[1].flag || conArrData[2].flag == true) :
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
					psgStart();
				},800);
			},500);
			// restore flags
			contactFlag = true;
			conArrData[0].flag = conArrData[1].flag = conArrData[2].flag = false;
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
			$('.headerThis p').css({'left': '-190px'}).removeClass('opacity');
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
			$('.headerThis p').css({'left': '-190px'});
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
				$('.headerThis p').css({'left': '-20px'});
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
			$('.headerThis p').css({'left': '-20px'});
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
			$('.headerThis p').css('left', '-190px');
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
// book 
var textContentBook = [
	{"text":"", "img":"url(img/images/nature2.webp)"},
	{"text":"", "img":"url(img/images/nature/1.jpg)"},
	{"text":"", "img":"url(img/images/nature/2.jpg)"},
	{"text":"", "img":"url(img/images/nature/3.jpg)"},
	{"text":"", "img":"url(img/images/nature/4.jpg)"},
	{"text":"", "img":"url(img/images/nature/5.jpg)"},
	{"text":"", "img":"url(img/images/nature/6.jpg)"},
	{"text":"", "img":"url(img/images/nature/7.jpg)"},
	{"text":"", "img":"url(img/images/nature/8.jpg)"},
	{"text":"", "img":"url(img/images/nature/9.jpg)"},
	{"text":"", "img":"url(img/images/nature/10.jpg)"},
	{"text":"", "img":"url(img/images/nature/11.jpg)"},
	{"text":"", "img":"url(img/images/nature/12.jpg)"},
	{"text":"", "img":"url(img/images/nature/13.jpg)"},
	{"text":"", "img":"url(img/images/nature/14.jpg)"},
	{"text":"", "img":"url(img/images/nature/15.jpg)"},
	{"text":"", "img":"url(img/images/nature/16.jpg)"},
	{"text":"", "img":"url(img/images/nature/17.jpg)"},
	{"text":"", "img":"url(img/images/nature/18.jpg)"},
	{"text":"", "img":"url(img/images/nature/19.jpg)"},
	{"text":"", "img":"url(img/images/nature/20.jpg)"},
	{"text":"", "img":"url(img/images/nature/21.jpg)"},
	{"text":"", "img":"url(img/images/nature/22.jpg)"},
	{"text":"", "img":"url(img/images/nature/23.jpg)"},
	{"text":"", "img":"url(img/images/nature/24.jpg)"},
	{"text":"", "img":"url(img/images/nature/25.jpg)"},
	{"text":"", "img":"url(img/images/nature/26.jpg)"},
	{"text":"", "img":"url(img/images/nature/27.jpg)"},
	{"text":"", "img":"url(img/images/nature/28.jpg)"},
	{"text":"", "img":"url(img/images/nature/29.jpg)"},
	{"text":"", "img":"url(img/images/nature/30.jpg)"},
	{"text":"", "img":"url(img/images/nature2.webp)"}
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
		// number pages
		$('.site01 div.fistDivSite:eq(1) span').text(contentPages[0]);
		// text pages (this apsent)
		$('.site01 div.fistDivSite:eq(1) div p').text(textContentBook[0].text);
		// image pages
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
	if (!(numPages == document.getElementById('numberSite').value ||
	  numPages == (document.getElementById('numberSite').value) - 1)) { 
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
// toggle text hide show
$(window).on('resize load', function() {
	switch(true) {
		case ($(window).outerWidth() < '920') :
			$('.someButifulText').css({'opacity': '1'});
		break;
		case ($(window).outerWidth() >= '920') :
			if (!$('.bookCover').hasClass('appearance')) {
				$('.someButifulText').css({'opacity': '0'});
			}
		break;
	}
});
// action for left and right button for change pages
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
// // preloader

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
		    	scrollSpeed: 300,
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
  },100);
}, false);

// lazy load
// $(document).ready(function() {
// 	$("img.lazy").lazyload({
// 	threshold : 400
// 	// event : "click"
// 	// effect : "fadeIn"

	
// 	});
// });

// создаем JQuery функцию, которая будет подгружать изображения в буфер
jQuery.preloadImages = function()	{
 	for(var i = 0; i < arguments.length; i++) {
  	jQuery("<img>").attr("src", arguments[ i ]);
  }
};
setTimeout(function() {
	$.preloadImages(preloadImages);
}, 2000)
const preloadImages = [
	"img/images/fields/1.webp",
	"img/images/fields/2.webp",
	"img/images/fields/3.webp",
	"img/images/fields/4.webp",
	"img/images/fields/5.webp",
	"img/images/fields/6.webp",
	'img/images/bali1.webp',
	'img/images/bali2.webp',
	'img/images/dubay1.webp',
	'img/images/dubay2.webp',
	// 'img/images/maldives1.webp',
	// 'img/images/maldives2.webp',
	'img/images/seysheli1.webp',
	'img/images/seysheli2.webp',
	'img/images/Gavai1.webp',
	'img/images/Gavai2.webp',
	'img/images/kanari1.webp',
	'img/images/kanari2.webp'
]
