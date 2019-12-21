window.addEventListener( 'load', function () {
  const boxDraggable = document.querySelector( '.box-draggable' );
  const boxItems = document.querySelectorAll( '.box-item' );

  Draggable.create( boxItems, {
    bounds: boxDraggable,
    // bounds: { top: 100, left: 0, width: 1000, height: 800 },
    edgeResistance: 0.95,   // жёсткость обвёртки
    dragResistance: 0.3,
    cursor: 'pointer',
    type: 'x, y',
    // lockAxis: true,
    onPress: onPress,
    onRelease: onRelease,
    onDragStart: onStart,
    onDragEnd: onStop
  })

}, false )

function onPress() {
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
    width: 80,
    height: 80,
    borderColor: 'red',
    borderWidth: 2,
    ease: Power4.easeIn
  })
}
function onStop() {
  const tlPress = new TimelineMax();
  tlPress.to( this.target, 0.2, {
    borderColor: 'yellow',
    borderWidth: 12,
    ease: Power4.easeIn,
    width: 60,
    height: 60,
  })
}