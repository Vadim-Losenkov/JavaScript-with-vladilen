const $board = document.querySelector('#board')
const SQUARE_COUNT = 300

// const colors = ['red', '#37ff37', '#ff8a2f', '#ff4fdb', 'yellow']
const rgbIndex = 255


for (i = 0; i < SQUARE_COUNT; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  $board.append(square)
  
  square.onmouseover = () => setColor(square)
  square.onmouseleave = () => removeColor(square)
}

function setColor(element) {
  const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
  element.style.background = '#eee'
  element.style.boxShadow = `0 0 2px #fff`
}
function getRandomColor() {
  const index = () => Math.floor((Math.random() * rgbIndex))
  return `rgb(${index()}, ${index()}, ${index()})`
}