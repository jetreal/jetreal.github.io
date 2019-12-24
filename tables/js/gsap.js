window.addEventListener( 'load', function () {
  const btnTable = document.querySelector( '.btn-table' );
  const wrapperMap = document.querySelector( '.wrapperMap' );
  const boxDraggable = document.querySelector( '.box-draggable' );
  var boxItems = document.querySelectorAll( '.box-item' );
  // const sourceElement = document.querySelector( '.draggable-item--tre')
  const targetElement = document.querySelector( '.draggable-item--uno')
  const thresholdValue = '0%';
  // const boundsTop = boxDraggable.getBoundingClientRect().top;
  // const boundsLeft = boxDraggable.getBoundingClientRect().left;
// ------------------------------------------------------
  // var sourceElementTop = Math.floor( sourceElement.getBoundingClientRect().top - 1 ) - boundsTop;
  // var sourceElementLeft = Math.floor( sourceElement.getBoundingClientRect().left - 1 ) - boundsLeft;
// -----------------------------------------------------
  // var targetElementTop = Math.floor( targetElement.getBoundingClientRect().top - 1 ) - boundsTop;
  // var targetElementLeft = Math.floor( targetElement.getBoundingClientRect().left - 1 ) - boundsLeft;
// ------------------------------------------------
  // const offsetTop = targetElementTop - sourceElementTop;
  // const offsetLeft = targetElementLeft - sourceElementLeft;
  
  // Draggable.create( boxDraggable, {
  //   // bounds: wrapperMap,
  // })


  // let counter = 100;
  // targetElement.addEventListener('mousemove', function() {
  //   counter++;
  //   boxDraggable.style.height = counter + 'px'
  // })

function detectMaxWidth() {
  arrWidths = []
  boxItems.forEach(item => {

  })
}
detectMaxWidth()

var targWidth;
var targHeight;

boxDraggable.addEventListener( 'click', onResize)

function onResize() {
  var timer = null,
    interval = 30,
    el = boxDraggable
    elWidth = el.offsetWidth;
 
timer = setInterval(
   function(){
      if( el.offsetWidth != elWidth ) {
        //Запомним текущую ширину
        el.offsetWidth = elWidth;
        //Ваше действие по изменению ширины
        console.log(" Ширина изменилась ");
        detectMaxWidth()
      };
   },interval 
);

}


  btnTable.addEventListener('click', function() {
    let li = document.createElement('li');
    li.classList.add('box-item');
    li.classList.add('draggable-item');
    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.classList.add('spanClose');
    span.addEventListener('click', function() {
      li.parentNode.removeChild(li)
    })
    boxDraggable.appendChild(li)
    li.appendChild(span)
    boxItems = document.querySelectorAll( '.box-item' );
    draggable()
  })

  function draggable() {
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
        detectMaxWidth()
        // ограничение карты
        // ширина + отступ от родителя
        targWidth = this.x + targetElement.offsetWidth + 40;
        targHeight = this.y + targetElement.offsetHeight + 80;
        console.log(this.x)
        console.log(this.y)
        boxDraggable.style.minWidth = targWidth + "px";
        boxDraggable.style.minHeight = targHeight + "px";
  
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

}
draggable()

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
    opacity: 1,
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

////////////////////////////////////////////////
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


/////////////////////////////////////////////////////////


