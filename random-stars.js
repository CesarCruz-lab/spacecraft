const spaceElement = document.querySelector('.space')

function randInt(min, max) {
  return Math.floor(Math.random() * (max-min)) + min
}

function createStars(countStars) {
  const count = countStars
  
  let i = 0
  let star
  while (i <= count) {
    star = document.createElement('span')
    star.setAttribute('class', 'star')
    spaceElement.appendChild(star)
    i++
  }
}

function addValues(animationTimeMS) {
  const elements = document.querySelectorAll('.star')
  const animationTime = animationTimeMS
  
  elements.forEach(star => {
    let x = randInt(0, window.innerWidth)
    let y = 20
    let duration = randInt(100, animationTime)
    let height = randInt(0, 20)
    
    star.style.left = x + 'px'
    star.style.height = height + 'px'
    star.style.width = 1 + 'px'
    star.style.animationDuration = duration + 'ms'
  })
}

const count = 40
const animationTimeMS = 300

function init() {
  createStars(count)
  addValues(animationTimeMS)
}

window.addEventListener('load', init)
