import './style/main.scss'

import throttle from 'lodash.throttle'

document.addEventListener('DOMContentLoaded', () => {

  const checkPosition = () => {
    for (var i = 0; i < elementsToAnimate.length; i++) {
      let positionFromTop = elementsToAnimate[i].getBoundingClientRect().top;

      elementsToAnimate[i].className = ((positionFromTop - windowHeight <= 0) && positionFromTop)
        ? elementsToAnimate[i].className.replace('hidden', 'scale-in-hor-left')
        : elementsToAnimate[i].className
    }
  }

  let elementsToAnimate
  let windowHeight

  const initAnimateOnScroll = () => {
    elementsToAnimate = document.querySelectorAll('.hidden')
    windowHeight = window.innerHeight
    window.addEventListener('scroll', throttle(checkPosition, 100))
    window.addEventListener('resize', initAnimateOnScroll)
    checkPosition()
  }

  initAnimateOnScroll()
})
