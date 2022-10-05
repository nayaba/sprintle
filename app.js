let boxes = document.querySelectorAll('.box')
let container = document.querySelector('.container')
let guesses = ['', '', '', '', '']
let counter = 0

guesses.forEach((letter, i) => {
  
let alphaBox = document.createElement('div')
alphaBox.classList.add('alpha-box')
alphaBox.innerHTML = guesses[i]

container.appendChild(alphaBox)
  

})

const makeAlphaBoxes = (guess) => {
  let alphaBox = document.querySelectorAll('.alpha-box')

  if(counter < 5) {
    guesses.splice(counter, 1, guess)
    alphaBox[counter].innerHTML = guesses[counter]
    counter++
  } else {
    counter = 0
    guesses.splice(counter, 1, guess)
    alphaBox[counter].innerHTML = guesses[counter]
    counter++
  }
  

}

document.addEventListener('keydown',(e) => {
 makeAlphaBoxes(e.key.toUpperCase())
} )
