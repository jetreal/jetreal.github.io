window.addEventListener( 'load', function () {
  const boxDraggable = document.querySelector( '.box-draggable' );
  const boxItems = document.querySelectorAll( '.box-item' );
  const sourceElement = document.querySelector( '.draggable-item--tre')
  const targetElement = document.querySelector( '.draggable-item--quatto')
  const thresholdValue = '0%';
  const boundsTop = boxDraggable.getBoundingClientRect().top;
  const boundsLeft = boxDraggable.getBoundingClientRect().left;
// ------------------------------------------------------
  var sourceElementTop = Math.floor( sourceElement.getBoundingClientRect().top - 1 ) - boundsTop;
  var sourceElementLeft = Math.floor( sourceElement.getBoundingClientRect().left - 1 ) - boundsLeft;
// -----------------------------------------------------
  var targetElementTop = Math.floor( targetElement.getBoundingClientRect().top - 1 ) - boundsTop;
  var targetElementLeft = Math.floor( targetElement.getBoundingClientRect().left - 1 ) - boundsLeft;
// ------------------------------------------------
  // const offsetTop = targetElementTop - sourceElementTop;
  // const offsetLeft = targetElementLeft - sourceElementLeft;
function mapRestrict () {


  // let neededWidth = 
}

  Draggable.create( boxItems, {

    bounds: boxDraggable,
    // bounds: false,
    // bounds: { top: 100, left: 0, width: 1000, height: 800 },
    edgeResistance: 0.95,   // жёсткость обвёртки
    dragResistance: 0.3,
    cursor: 'pointer',
    type: 'x, y',
    inertia: true,
    // type: 'scrollLeft', 
    // lockAxis: true,
    onPress: onPress,
    onRelease: onRelease,
    onDragStart: onStart,
    onDragEnd: function () {
      
      // ограничение карты
      // ширина + отступ от родителя


      let targWidth = this.x + targetElement.offsetWidth + 40
      let targHeight = this.y + targetElement.offsetHeight + 70
      boxDraggable.style.minWidth = targWidth + "px"
      boxDraggable.style.minHeight = targHeight + "px"

      boxItems.forEach(item => {
        if (this.hitTest(item)) {
          TweenMax.to(this.target, 1, {
            backgroundColor: 'yellow',
            x: xx,
            y: yy
            // rotate: 90
          });
        }

      })
    }
  })

  var xx = 0;
  var yy = 0;
  function onPress() {
    xx = this.x;
    yy = this.y;

  // const init = {
  //   simpleTest: function() {
  //     Draggable.create(sourceElement, {
  //       type: 'x, y',
  //       bounds: boxDraggable,
  //       onDragEnd: function () {
  //         if (this.hitTest(targetElement)) {
  //           TweenMax.to(sourceElement, 1, {
  //             backgroundColor: 'yellow',
  //             x: xx,
  //             y: yy
  //           });
  //         }
  //       }
  //     });
  //   },
  //   thresholdTest: function() {
  //     Draggable.create( sourceElement, {
  //       type: 'x, y',
  //       bounds: boxDraggable,
  //       onDragEnd: function() {
  //         if ( this.hitTest( targetElement, thresholdValue ) ) {
      
  //           TweenMax.to (this.target, 1, {
  //             // x: offsetLeft + 'px',
  //             // y: offsetTop + 'px',
  //             backgroundColor: "#d87093",
  //             ease: Elastic.easeOut
  //           });
  //         } else {
  //           // TweenMax.to( this.target, 1, {
  //           //   x: 0,
  //           //   y: 0,
  //           //   ease: Bounce.easeOut
  //           // })
  //         }
  //       }

  //     })
  //   }
  // }

// -----------------------
// init.simpleTest();
// init.thresholdTest();


  // console.log( this.target.id + ' = ' + Math.round( this.x ) + ' : ' + Math.round( this.y ) );
  const tlPress = new TimelineMax();
  tlPress.to( this.target, 0.1, {
    borderColor: 'white',
    borderWidth: 6,
    ease: Power4.easeIn
  })
}
function onRelease() {
  
  const tlPress = new TimelineMax();
  tlPress.to( this.target, 0.1, {
    // borderColor: 'green',
    borderWidth: 3,
    ease: Power4.easeIn,
  })
}
function onStart() {
  const tlPress = new TimelineMax();
  tlPress.to( this.target, 0.1, {
    // width: 180,
    // height: 180,
    borderColor: 'red',
    borderWidth: 2,
    ease: Power4.easeIn
  })
}


// function onStop() {
//   const tlPress = new TimelineMax();
//   tlPress.to( this.target, 0.2, {
//     borderColor: 'yellow',
//     borderWidth: 12,
//     ease: Power4.easeIn,
//     width: 200,
//     height: 100,
//     rotate: 90
//   })
// }



// получение координат верхнего левого угла контейнера относительно окна
// var elem = document.getElementById('targetElement') // здесь Id контейнера
function getCoords(targetElement) { // кроме IE8-
  var box = targetElement.getBoundingClientRect();
  var top = box.top + pageYOffset;
  var left = box.left + pageXOffset;
  // console.log('top: ' + parentTop, 'left: ' + parentLeft)

  document.getElementById('clientX').innerHTML = top + ': clientY'
  document.getElementById('clientY').innerHTML = left + ': clientX'
}
getCoords(targetElement);






/////////////////////////////////////////////////////////////




}, false )

///////////////////////////////////////////////

var ie = 0;
  var op = 0;
  var ff = 0;
  var block; // Основной блок
  var block_r; // Блок для изменения размеров
  var delta_w = 0; // Изменение по ширине
  var delta_h = 0; // Изменение по высоте
  /* После загрузки страницы */
  onload = function () {
    /* Определяем браузер */
    var browser = navigator.userAgent;
    if (browser.indexOf("Opera") != -1) op = 1;
    else {
      if (browser.indexOf("MSIE") != -1) ie = 1;
      else {
        if (browser.indexOf("Firefox") != -1) ff = 1;
      }
    }
    block = document.getElementById("block"); // Получаем основной блок
    block_r = document.getElementById("block_resize"); // Получаем блок для изменения размеров
    document.onmouseup = clearXY; // Ставим обработку на отпускание кнопки мыши
    block_r.onmousedown = saveWH; // Ставим обработку на нажатие кнопки мыши
  }
  /* Функция для получения текущих координат курсора мыши */
  function getXY(obj_event) {
    if (obj_event) {
      x = obj_event.pageX;
      y = obj_event.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }
    return new Array(x, y);
  }
  function saveWH(obj_event) {
    var point = getXY(obj_event);
    w_block = block.clientWidth; // Текущая ширина блока
    h_block = block.clientHeight; // Текущая высота блока
    delta_w = w_block - point[0]; // Измеряем текущую разницу между шириной и x-координатой мыши
    delta_h = h_block - point[1]; // Измеряем текущую разницу между высотой и y-координатой мыши
    /* Ставим обработку движения мыши для разных браузеров */
    document.onmousemove = resizeBlock;
    if (op || ff) document.addEventListener("onmousemove", resizeBlock, false);
    return false; // Отключаем стандартную обработку нажатия мыши
  }
  /* Функция для измерения ширины окна */
  function clientWidth() {
    return document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement.clientWidth;
  }
  /* Функция для измерения высоты окна */
  function clientHeight() {
    return document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  /* При отпускании кнопки мыши отключаем обработку движения курсора мыши */
  function clearXY() {
    document.onmousemove = null;
  }
  function resizeBlock(obj_event) {
    var point = getXY(obj_event);
    new_w = delta_w + point[0]; // Изменяем новое приращение по ширине
    new_h = delta_h + point[1]; // Изменяем новое приращение по высоте
    block.style.width = new_w + "px"; // Устанавливаем новую ширину блока
    block.style.height = new_h + "px"; // Устанавливаем новую высоту блока
    /* Если блок выходит за пределы экрана, то устанавливаем максимальные значения для ширины и высоты */
    if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = (clientWidth() - block.offsetLeft)  + "px";
    if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = (clientHeight() - block.offsetTop) + "px";
  }

/////////////////////////////////////////////////////////


