let randomNumber =  (parseInt(Math.random() * 100 + 1))
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('#wrapper')

const p = document.createElement('p')

// let prevGuess = []
let numGuess  = 1

let playGame = true

if(playGame == true){
    submit.addEventListener('click', function(e){
        e.preventDefault()
         const guess = parseInt(userInput.value);
         console.log(guess)
         validateGuess(guess)

    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        // prevGuess.push(guess)
        if(numGuess === 7){
            // displayguess(guess)
            displayMessage(`<h2 style="color: red">Game over you are Looser</h2> Random number was ${randomNumber}`)
            endgame()
        }else{
            displayguess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`<h2 style="color: green">You Guessed it right</h2>  ${randomNumber}`)
        endgame()
    }else if(guess < randomNumber){
        displayMessage(`<h2 style="color:aqua">Number is Tooo Low</h2>`)
    }else if(guess > randomNumber){
        displayMessage(`<h2 style="color:red">Number is Tooo High</h2>`)
    }

}

function displayguess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${7 - numGuess}`
}

function displayMessage(message){
    loworhi.innerHTML = message
}

function endgame(){
    userInput.value = '';
    userInput.setAttribute('disabled','')
    // p.classList.add('button')
    p.innerHTML = `<button style="height:40px; color: white; background-color: grey; border-radius:15px; border: 2px solid yellow;" id="newgame">Start New Game</button>`
    startOver.append(p);
    playGame = false;
    newgame()
}

function newgame(){
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click', function(e){
        randomNumber =   (parseInt(Math.random() * 100 + 1))
        // prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${7 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')

        playGame = true
    })
}




