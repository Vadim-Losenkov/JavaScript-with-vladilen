function slider(options) {
  const $wrapper = document.querySelector(options.wrapper)
  const $slides = document.querySelectorAll(options.slide)
  
  $slides[options.activeSlide || 3].classList.add('active')
  $wrapper.onclick = event => toggleSlide(event)
  
  function toggleSlide(event) {
    const $slide = event.target.closest(options.slide)
    
    if ($slide) {
      $slides.forEach($s => $s.classList.remove('active'))
      $slide.classList.add('active')
    }
  }
}

slider({
  wrapper: '[data-type="wrapper"]',
  slide: '[data-type="slide"]',
  activeSlide: 1
})