let boxes = document.querySelectorAll('.box')
let container = document.querySelector('.container')
let guessArray = ['', '', '', '', '']

const makeAlphaBoxes = (guess) => {
  
  guessArray.forEach((letter, i) => {
    
    // create alpha-box element
    // element must be inside the loop and be created each time it is appended
    // cannot be re-used
    let alphaBox = document.createElement('div')
    alphaBox.classList.add('alpha-box')
    alphaBox.innerHTML = guess

    // append to container
    container.appendChild(alphaBox)

  })

}


document.addEventListener('keydown',(e) => {
 makeAlphaBoxes(e.key.toUpperCase())
} )
