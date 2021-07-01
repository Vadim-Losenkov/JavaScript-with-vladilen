const $item = document.querySelector('.item')
const $placeholders = document.querySelectorAll('.placeholder')

$item.addEventListener('dragstart', dragstart)
$item.addEventListener('dragend', dragend)

$placeholders.forEach($placeholder => {
  $placeholder.ondragover = dragover
  $placeholder.ondragleave = dragleave
  $placeholder.ondragenter = dragenter
  $placeholder.ondrop = dragdrop
})

function dragstart(event) {
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0);
}
function dragend(event) {
  event.target.className = 'item'
}

function dragover(event) {
  event.preventDefault()
}
function dragleave(event) {
  event.target.classList.remove('hovered')
}
function dragenter(event) {
  event.target.classList.add('hovered')
}
function dragdrop(event) {
  event.target.classList.remove('hovered')
  event.target.append($item)
}