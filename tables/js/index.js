// параметры 
var scrolled;
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('scroll').innerHTML = scrolled + 'px : scroll';

}
$(window).on('load resize', function () {
  var width = $('html').outerWidth();
  var height = $(window).height();
  $('#width').html(width + 'px : width');
  $('#height').html(height + 'px : height');
});

document.onmousemove = function (e) {
  var X = e.pageX;
  var Y = e.pageY;
  document.getElementById('mouseX').innerHTML = X + ': mouseX'
  document.getElementById('mouseY').innerHTML = Y + ': mouseY'

}

///////////////////////////////////////////////////////////////////////////////////


  /*Make resizable div by Hung Nguyen*/
function makeResizableDiv(div) {
  const element = document.querySelector(div);
  const resizers = document.querySelectorAll(div + ' .resizer')
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;
  for (let i = 0; i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function (e) {
      e.preventDefault()
      original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
      original_x = element.offsetLeft; // .offsetLeft changed  <==> .getBoundingClientRect().left   if need absolute
      original_y = element.offsetTop;  // .offsetTop changed  <==> .getBoundingClientRect().top
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })

    function resize(e) {

      if (currentResizer.classList.contains('bottom-right')) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
      }
      else if (currentResizer.classList.contains('bottom-left')) {
        const height = original_height + (e.pageY - original_mouse_y)
        const width = original_width - (e.pageX - original_mouse_x)
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'

        }
      }
      else if (currentResizer.classList.contains('top-right')) {
        const width = original_width + (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
      else {
        const width = original_width - (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
    }

    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }
}
makeResizableDiv('.resizable')
///////////////////////////////////////////

  const wrapperDraggerMap = document.querySelector('.j-wrap-content-map');
  const draggedMap = document.querySelector('.draggedMap');
  const topLeftCorner = document.querySelector('.top-left');
  const mapConner = document.querySelectorAll('.resizer');
  const addTableBtn = document.querySelector('.j-wrap-content-sidebar__add-table-btn');

  mapConner.forEach(item => {
    item.addEventListener('mousedown', function() {
      Draggable.get(draggedMap).disable()
    })
    item.addEventListener('mouseover', function() {
      Draggable.get(draggedMap).disable()
    })
  })

  mapConner.forEach(item => {
    item.addEventListener('mouseout', dragMap)
  })    
  

  function onDrag() {
    getParentCenter()
    getCornerCoords()

      let x, y;
      switch (true) {
      case (wrapperWidth  < sumPosAndTranslLeft ): {
        Draggable.get(draggedMap).endDrag();
        x = Draggable.get(draggedMap).x
        y = Draggable.get(draggedMap).y
        TweenLite.set(this.target, {x:(x - 20), y: y})
      }
        break;
      case ( wrapperHeight < sumPosAndTranslTop ): {
        Draggable.get(draggedMap).endDrag();
        x = Draggable.get(draggedMap).x
        y = Draggable.get(draggedMap).y
        TweenLite.set(this.target, {x: x , y:(y - 20)})
      }
        break;
        case (wrapperWidth - draggedMap.offsetWidth > sumPosAndTranslLeft  ): {
          Draggable.get(draggedMap).endDrag();
          x = Draggable.get(draggedMap).x
          y = Draggable.get(draggedMap).y
          TweenLite.set(this.target, {x: (x + 20), y: y })
        }
          break;
        case ( wrapperHeight - draggedMap.offsetHeight > sumPosAndTranslTop  ): {
          Draggable.get(draggedMap).endDrag();
          x = Draggable.get(draggedMap).x
          y = Draggable.get(draggedMap).y
          TweenLite.set(this.target, {x: x , y:(y + 20)})
        }
          break;
      default: return
    }
  }

  
  function dragMap() {
    // console.log(Draggable.get(draggedMap).deltaX)
    Draggable.create( draggedMap, {
      
      onDrag: onDrag,

    })
  }
  dragMap()
    
  // ширина и высота родителя  (вычисления центра)

  let wrapperWidth;  
  let wrapperHeight;
  function getParentCenter() {
    wrapperWidth = parseFloat(getComputedStyle(wrapperDraggerMap, null).getPropertyValue('width').replace('px', '')) / 2;
    wrapperHeight = parseFloat(getComputedStyle(wrapperDraggerMap, null).getPropertyValue('height').replace('px', '')) / 2;
    // console.log('wrapperWidth / 2: ', wrapperWidth,'wrapperHeight / 2: ', wrapperHeight)
  }

  let sumPosAndTranslLeft;
  let sumPosAndTranslTop;
  function getCornerCoords() {
    const posLeft = draggedMap.offsetLeft; // координата position , без транслейт  
    const posTop = draggedMap.offsetTop;
    const transform = draggedMap.style.transform || 'translate(0px, 0px)';
    
    let x = getTranslateXValue(transform)  // координата транслейта
    let y = getTranslateYValue(transform)
    
      function getTranslateXValue(translateString){
        // debugger
        var n = translateString.indexOf("(");
        var n1 = translateString.indexOf(",");
        
        var res = parseInt(translateString.slice(n+1,n1-2));
        
        return res;
        
      }
      function getTranslateYValue(translateString){
      
        var n = translateString.indexOf(",");
        var n1 = translateString.indexOf(")");
        
        var res = parseInt(translateString.slice(n+1,n1-1));
      return res;
      
      }
    sumPosAndTranslLeft = x + posLeft   // сумма координат
    sumPosAndTranslTop = y + posTop

  }

  getParentCenter()
  getCornerCoords()


 