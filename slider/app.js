const $upBtn = document.querySelector('.up-button')
const $downBtn = document.querySelector('.down-button')
const $sideBar = document.querySelector('.sidebar')
const $mainSlide = document.querySelector('.main-slide')

const slidesCount = $mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0

$sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

$upBtn.onclick = () => changeSlide('up')
$downBtn.onclick = () => changeSlide('down')

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }
  
  $mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`
  $sideBar.style.transform = `translateY(${activeSlideIndex * 100}vh)`
}