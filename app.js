let boxes = document.querySelectorAll('.box')
let container = document.querySelector('.container')
let guesses = ['', '', '', '', '']
let counter = 0

const makeAlphaBoxes = (guess) => {

  if(counter < 5) {

    guesses.splice(counter, 1, guess)
    counter++
  } else {
    counter = 0
    guesses.splice(counter, 1, guess)
    counter++
  }
  
  guesses.forEach((letter, i) => {
    
  let alphaBox = document.createElement('div')
  alphaBox.classList.add('alpha-box')
  alphaBox.innerHTML = guesses[i]

  container.appendChild(alphaBox)
    

  })

}

document.addEventListener('keydown',(e) => {
 makeAlphaBoxes(e.key.toUpperCase())
} )
